import { $, component$, useContext, useStore } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import dayjs from "dayjs";
import Duvidas from "~/components/duvidas";
import Panel from "~/components/panel";
import { AppContext } from "~/root";

export const useData = routeLoader$(async ({ request, redirect }) => {
	try {
		const fd = await request.formData();
		const valor = fd.get("valor");
		const parcelas = fd.get("parcelas");
		return {
			valor,
			parcelas,
		};
	} catch (e) {
		redirect(303, "/");
		return {};
	}
});

type Dados = {
	nome?: string;
	cpf?: string;
	nascimento?: string;
	cep?: string;
	email?: string;
	telefone?: string;
	valor?: string;
	parcelas?: string;
};

export default component$(() => {
	const data = useData().value;
	const { whatsapp } = useContext(AppContext);

	// const store = useStore<Dados>({
	// 	nome: "Anderson Sousa",
	// 	cpf: "02390275311",
	// 	nascimento: "1986-04-01",
	// 	cep: "62011000",
	// 	email: "and3rsonsousa@outlook.com",
	// 	telefone: "88981082050",
	// 	valor: data.valor as string,
	// 	parcelas: data.parcelas as string,
	// });

	const store = useStore<Dados>({
		nome: undefined,
		cpf: undefined,
		nascimento: undefined,
		cep: undefined,
		email: undefined,
		telefone: undefined,
		valor: data.valor as string,
		parcelas: data.parcelas as string,
	});

	const enviando = useStore({ is: false });

	const validar = $(async () => {
		//Código validador de CPF direto da Receita Federal
		const TestaCPF = (strCPF?: string) => {
			if (!strCPF) return false;
			let Soma, Resto;

			Soma = 0;
			if (strCPF == "00000000000") return false;

			strCPF = strCPF.replace(/\./g, "").replace(/-/g, "");

			for (let i = 1; i <= 9; i++)
				Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
			Resto = (Soma * 10) % 11;

			if (Resto == 10 || Resto == 11) Resto = 0;
			if (Resto != parseInt(strCPF.substring(9, 10))) return false;

			Soma = 0;
			for (let i = 1; i <= 10; i++)
				Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
			Resto = (Soma * 10) % 11;

			if (Resto == 10 || Resto == 11) Resto = 0;
			if (Resto != parseInt(strCPF.substring(10, 11))) return false;
			return true;
		};

		if (!TestaCPF(store.cpf)) {
			alert(
				"Parece que o seu CPF não está correto, veja se você digitou corretamente."
			);
			return false;
		}

		if (!dayjs().subtract(18, "year").isAfter(dayjs(store.nascimento))) {
			alert(
				"Você precisa ter mais de 18 anos para poder solicitar esse empréstimo."
			);
			return false;
		}

		enviando.is = true;

		const message = `Nome+=+${store.nome}%0A
			Cpf+=+${store.cpf}%0A
			Nascimento+=+${dayjs(store.nascimento).format("DD/MM/1986")}%0A
			CEP+=+${store.cep}%0A
			Email+=+${store.email}%0A
			Telefone+=+${store.telefone}%0A
			Valor+=+${store.valor}%0A
			Parcelas+=+${store.parcelas}`;

		document.location = whatsapp.concat(`&text=${message}`);

		// const response = await fetch(
		// 	"https://formsubmit.co/ajax/and3rsonsousa@gmail.com",
		// 	{
		// 		method: "POST",
		// 		headers: {
		// 			"Content-Type": "application/json",
		// 			Accept: "application/json",
		// 		},
		// 		body: JSON.stringify({
		// 			name: "REQUISIÇÃO CONTA DE LUZ",
		// 			message: store,
		// 		}),
		// 	}
		// );

		enviando.is = false;

		// console.log({ response });

		return false;
	});

	return (
		<>
			<div class="max-w-5xl mx-auto p-4 md:p-8">
				<div class="font-extrabold mb-2 tracking-tighter text-4xl md:text-7xl text-white">
					Estamos quase lá!
				</div>
				<div class="text-sefi-5 text-xl font-medium leading-none max-w-[280px]">
					Só precisamos de poucos dados para continuarmos andamento ao
					processo.
				</div>
			</div>

			<Panel>
				<div>
					<form
						class="form"
						preventdefault:submit
						onSubmit$={validar}
					>
						<label class="input col-span-2">
							<div class="input-label">Nome</div>
							<input
								class="input-field"
								name="nome"
								placeholder="Maria Aparecida dos Santos"
								required={true}
								value={store.nome}
								onChange$={(event) =>
									(store.nome = event.target.value)
								}
							/>
						</label>
						<label class="input col-span-2 md:col-span-1">
							<div class="input-label">CPF</div>
							<input
								class="input-field"
								name="cpf"
								placeholder="123.456.789-00"
								required={true}
								value={store.cpf}
								onChange$={(event) =>
									(store.cpf = event?.target.value)
								}
							/>
						</label>
						<label class="input">
							<div class="input-label">Data de nascimento</div>
							<input
								type="date"
								class="input-field"
								name="nascimento"
								placeholder="10/06/1975"
								required={true}
								value={store.nascimento}
								onChange$={(event) =>
									(store.nascimento = event.target.value)
								}
							/>
						</label>
						<label class="input">
							<div class="input-label">CEP</div>
							<input
								class="input-field"
								name="cep"
								placeholder="62011-000"
								required={true}
								value={store.cep}
								onChange$={(event) =>
									(store.cep = event.target.value)
								}
							/>
						</label>
						<label class="input col-span-2 sm:col-span-1">
							<div class="input-label">Email</div>
							<input
								class="input-field"
								name="email"
								type="email"
								placeholder="seu@email.com"
								required={true}
								value={store.email}
								onChange$={(event) =>
									(store.email = event.target.value)
								}
							/>
						</label>
						<label class="input col-span-2 sm:col-span-1">
							<div class="input-label">Telefone</div>
							<input
								class="input-field"
								name="telefone"
								placeholder="(00) 9 0000-0000"
								required={true}
								value={store.telefone}
								onChange$={(event) =>
									(store.telefone = event.target.value)
								}
							/>
						</label>
						<label class="input">
							<div class="input-label">Valor</div>
							<input
								class="input-field"
								name="valor"
								placeholder="Valor"
								required={true}
								value={store.valor}
								onChange$={(event) =>
									(store.valor = event.target.value)
								}
							/>
						</label>
						<label class="input">
							<div class="input-label">Parcelas</div>
							<input
								class="input-field"
								name="parcelas"
								placeholder="Parcelas"
								required={true}
								type="number"
								value={store.parcelas}
								onChange$={(event) =>
									(store.parcelas = event.target.value)
								}
							/>
						</label>
						<div class="col-span-full sm:mt-4 text-center">
							<div class="text-2xl font-bold text-sefi-4 tracking-tighter">
								Viu como foi rápido?
							</div>
							<div class="leading-tight max-w-xs mx-auto text-neutral-4">
								Agora é só enviar e aguardar que entraremos em
								contato rapidinho.
							</div>
							<div class="mt-4">
								<button
									type="submit"
									class="button button-large disabled:bg-neutral-2 disabled:text-neutral-3"
									disabled={enviando.is}
								>
									Enviar
								</button>
							</div>
						</div>
					</form>
				</div>
			</Panel>

			<Duvidas />
		</>
	);
});

export const head: DocumentHead = {
	title: "Empréstimo na conta de Luz - Rápido e Fácil - SEFI Crédito",
	meta: [
		{
			name: "description",
			content:
				"Faça seu empréstimo na Conta de luz de forma rápida e sem burocracia.",
		},
	],
};
