import { $, component$, useStore, useTask$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import dayjs from "dayjs";
import Duvidas from "~/components/duvidas";
import FAQ from "~/components/FAQ";
import Modalidades from "~/components/modalidades";
import Panel from "~/components/panel";
import Separator from "~/components/separator";
import Sobre from "~/components/sobre";
import Volte from "~/components/volte";

export default component$(() => {
	const store = useStore<{
		saldo: string;
		aniversario: string;
		resgate?: string;
	}>({
		saldo: "",
		aniversario: "",
		resgate: undefined,
	});

	const solicitar = $(async () => {
		if (store.saldo === "") {
			alert("Coloque o seu saldo FGTS para iniciar a solicitação.");
			return false;
		}
		if (store.aniversario === "") {
			alert("Coloque a data de aniversário do seu FGTS.");
			return false;
		}

		document.querySelector("form")?.submit();
	});

	useTask$(({ track }) => {
		const Store = track(store);
		if (Store.aniversario !== "" && Store.saldo !== "") {
			const aniversario = dayjs(store.aniversario);
			if (aniversario.isValid()) {
				const hoje = dayjs();
				let saque = 0;
				let retirada = 0;
				let saldoAtual = parseFloat(Store.saldo);
				let index = 0;

				while (index < 10) {
					if (saldoAtual > 20000) {
						retirada = saldoAtual * 0.05 + 2900;
					} else if (saldoAtual > 15000) {
						retirada = saldoAtual * 0.1 + 1900;
					} else if (saldoAtual > 10000) {
						retirada = saldoAtual * 0.15 + 1150;
					} else if (saldoAtual > 5000) {
						retirada = saldoAtual * 0.02 + 650;
					} else if (saldoAtual > 1000) {
						retirada = saldoAtual * 0.03 + 150;
					} else if (saldoAtual > 500) {
						retirada = saldoAtual * 0.04 + 50;
					} else {
						retirada = saldoAtual * 0.5;
					}
					saldoAtual -= retirada;
					index++;

					saque +=
						retirada /
						(1 + Math.abs(hoje.diff(aniversario, "day"))) **
							(0.07 / 100);
					console.log({ retirada, saldoAtual, saque });
				}
				const REAL = Intl.NumberFormat("pt-BR", {
					style: "currency",
					currency: "BRL",
				});
				store.resgate = REAL.format(saque);
			}
		}
	});

	return (
		<>
			<div class="max-w-5xl mx-auto px-4 md:px-8">
				<div>
					<div class="flex flex-col md:flex-row relative text-center md:text-left">
						<div class="py-8 sm:pt-0 md:py-16 z-10">
							<h5 class="uppercase font-bold tracking-wider text-sefi-2">
								empréstimo fgts
							</h5>
							<h1 class="text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold text-white tracking-tighter">
								Receba o que{" "}
								<span class="text-yellow">já é seu</span>.{" "}
								<br />
								Antecipe até 10 parcelas.
								<br />
								100% digital e{" "}
								<span class="text-yellow">seguro</span>.
							</h1>
							<div class="text-white my-8 uppercase font-bold tracking-wider text-sm">
								Sem consulta ao CPF <br />
								Sem parcelas mensais
							</div>
							<div class="mt-4">
								<a class="button button-large" href="/dados">
									Antecipe agora
								</a>
							</div>
						</div>
						<div class="w-52 md:w-auto text-center mx-auto md:absolute bottom-0 right-0 h-full">
							<img
								src="./hero.webp"
								alt="Na SEFI é muito rápido e fácil conseguir o seu empréstimo."
								class="w-auto mx-auto h-full"
							/>
						</div>
					</div>
				</div>
			</div>

			<div id="emprestimo" class="text-center">
				<Panel>
					<div class={`mb-4 text-3xl font-semibold tracking-tight`}>
						Vamos ver quanto você pode antecipar.
					</div>

					<hr class="my-8 border-t-neutral-2" />
					{/* Parcelas */}
					<div class="flex flex-col md:flex-row gap-4">
						<div class="md:w-1/3">
							<label for="quanto" class="input-label">
								Qual é o seu saldo no FGTS?
							</label>
							<input
								type="number"
								id="quanto"
								name="quanto"
								class="input-field input"
								placeholder="8.000,00"
								onChange$={(event) => {
									store.saldo = event.target.value;
								}}
							/>
						</div>
						<div class="md:w-1/3">
							<label for="aniversario" class="input-label">
								Qual a data do seu aniversário
							</label>
							<input
								type="date"
								id="aniversario"
								name="aniversario"
								class="input-field input"
								onChange$={(event) => {
									store.aniversario = event.target.value;
								}}
							/>
						</div>
						<div class="md:w-1/3">
							<div>Você pode antecipar até</div>
							<div class="text-5xl text-sefi-4 font-black tracking-tighter">
								{store.resgate ?? "R$ 0,00"}
							</div>
						</div>
					</div>
					<hr class="my-8 w-full border-t-neutral-2" />
					<div class="flex flex-col gap-8 mt-8 sm:flex-row justify-center text-center">
						<div class="mx-auto sm:1/2">
							<div class="font-bold text-red text-xl">
								ATENÇÃO
							</div>
							<div class="leading-tight">
								A SEFI não solicita nenhum pagamento <br />{" "}
								antecipado para fazer o seu empréstimo.
							</div>
						</div>
						<div class="sm:w-1/2">
							<div>
								<form method="post" action="/dados/">
									<input
										type="hidden"
										value={store.saldo}
										name="saldo"
									/>
									<input
										type="hidden"
										value={store.aniversario}
										name="aniversario"
									/>
								</form>
								<button
									class="button button-large -mb-4 md:mb-0"
									onClick$={solicitar}
								>
									Antecipe agora
								</button>
							</div>
						</div>
					</div>
				</Panel>
			</div>

			<Sobre />

			{/* <Separator className="h-[1px] via-sefi-4" /> */}

			<FAQ />

			<Duvidas />

			{/* <Separator className="h-[1px] via-sefi-4" /> */}

			<Modalidades />

			<Separator className="h-[1px] via-sefi-4" />

			<Volte />
		</>
	);
});

export const head: DocumentHead = {
	title: "Empréstimo pelo Saque-Aniversário do FGTS - Rápido e Fácil na SEFI Crédito",
	meta: [
		{
			name: "description",
			content:
				"Faça seu empréstimo com garantia do saque-aniversário do seu FGTS de foprma rápida e fácil pela SEFI.",
		},
	],
};
