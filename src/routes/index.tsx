import { $, component$, useStore } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import Duvidas from "~/components/duvidas";
import Modalidades from "~/components/modalidades";
import Panel from "~/components/panel";
import Separator from "~/components/separator";
import Sobre from "~/components/sobre";
import Volte from "~/components/volte";

export default component$(() => {
	const store = useStore({
		valor: 1200,
		parcela: 18,
		dono: false,
	});

	const solicitar = $(async () => {
		if (store.dono) {
			document.querySelector("form")?.submit();
		} else {
			alert(
				"Você precisa confirmar que é o titular da conta de energia."
			);
		}
	});

	return (
		<>
			<div class="max-w-5xl mx-auto px-4 md:px-8">
				<div class="hero">
					<div class="flex flex-col md:justify-between relative text-center">
						<div class="py-8 sm:pt-0 md:py-16 z-10">
							<h5 class="uppercase font-bold tracking-wider text-sefi-2">
								empréstimo fgts
							</h5>
							<h1 class="text-[34px] sm:text-5xl lg:text-6xl leading-none font-extrabold text-white tracking-tighter">
								Receba o que{" "}
								<span class="text-yellow">já é seu</span>.{" "}
								<br />
								Até 10 parcelas.
								<br />
								100% digital e{" "}
								<span class="text-yellow">seguro</span>.
							</h1>
							<div class="mt-4">
								<a class="button button-large" href="/dados">
									Solicite agora
								</a>
							</div>
						</div>
						<div class="w-52 md:w-72 text-center mx-auto">
							<img
								src="./hero.png"
								alt="Na SEFI é muito rápido e fácil conseguir o seu empréstimo."
								class="w-auto mx-auto"
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
					<div class="flex flex-col gap-4">
						<div>
							<label for="quanto" class="input-label">
								Qual é o seu saldo no FGTS?
							</label>
							<input
								type="number"
								id="quanto"
								name="quanto"
								class="input-field input"
								placeholder="8.000,00"
							/>
						</div>
						<div>
							<label for="aniversario" class="input-label">
								Qual a data do seu aniversário
							</label>
							<input
								type="date"
								id="aniversario"
								name="aniversario"
								class="input-field input"
							/>
						</div>
					</div>
					<hr class="my-8 w-full border-t-neutral-2" />
					<div class="flex flex-col gap-8 flex-wrap lg:flex-nowrap sm:flex-row justify-center text-center">
						<div>
							<div>Você pode antecipar até</div>
							<div class="text-5xl text-sefi-4 font-black tracking-tighter">
								R$ 1400
							</div>
						</div>

						<div class="mx-auto max-w-xs lg:w-1/4">
							<div class="font-bold text-red text-xl">
								ATENÇÃO
							</div>
							<div class="leading-tight">
								A SEFI não solicita nenhum pagamento antecipado
								para fazer o seu empréstimo.
							</div>
						</div>
						<div class="lg:w-1/2">
							<div>
								<form method="post" action="/dados/">
									<input
										type="hidden"
										value={store.valor}
										name="valor"
									/>
									<input
										type="hidden"
										value={store.parcela}
										name="parcelas"
									/>
								</form>
								<button
									class="button button-large -mb-4 md:mb-0"
									onClick$={solicitar}
								>
									Solicitar Empréstimo
								</button>
							</div>
						</div>
					</div>
				</Panel>
			</div>

			<Sobre />

			{/* <Separator className="h-[1px] via-sefi-4" /> */}

			<div class="bg-sefi-5">
				<Duvidas />
			</div>

			{/* <Separator className="h-[1px] via-sefi-4" /> */}

			<Modalidades />

			<Separator className="h-[1px] via-sefi-4" />

			<Volte />
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
