import { component$ } from "@builder.io/qwik";

export default component$(() => (
	<div class="max-w-xl mx-auto text-white p-8 lg:p-16 rounded-2xl bg-gradient-to-b from-sefi-4 via-transparent">
		<div class="text-5xl mb-8 font-extrabold tracking-tighter">
			Perguntas frequentes
		</div>
		{[
			{
				title: `O que é o empréstimo com garantia do FGTS?`,
				text: `O empréstimo FGTS é uma forma de contratar crédito usando como
				garantia o valor que o trabalhador tem nas contas do FGTS. Ele
				funciona a partir da antecipação das parcelas futuras do
				saque-aniversário, que é uma modalidade de acesso ao dinheiro do
				fundo no mês do seu aniversário.<br /><br /> Para contratar, é só aderir entrar com seus dados no formulário acima e enviar para nós.`,
			},
			{
				title: `Quem pode fazer a Antecipação do Saque Aniversário?`,
				text: `- Ser maior de 18 anos. <br />
- Ter situação regular com a Receita Federal.<br />
- Possuir conta para recebimento do empréstimo.<br />
- Ter saldo do FGTS em conta ativa ou inativa.<br />
- Ser optante da modalidade Saque-Aniversário do FGTS.`,
			},
			{
				title: `Quais são as condições para contratação?`,
				text: `- Saldo FGTS a partir de R$155,00. <br />
- Taxa a partir de 1,49% a.m. dependendo do valor financiado. <br />
- Estar na modalidade saque-aniversário. <br />
- Autorizar o PAN a consultar seu saldo.`,
			},
			{
				title: `Em quanto tempo o dinheiro cai na conta?`,
				text: `A antecipação do saque-aniversário cai na hora em sua conta PAN ou até 24hrs na conta escolhida para depósito na hora da contratação.`,
			},
			{
				title: `O meu saldo FGTS fica bloqueado?`,
				text: `Sim, o seu saldo fica bloqueado. Quem decide fazer a antecipação do saque-aniversário, garante o adiantamento das parcelas de saque-aniversário que seriam feitas anualmente.<br/><br/>
Ao realizar a contratação da antecipação do saque-aniversário, o contratante oferece o seu saldo do FGTS como garantia e, até que o empréstimo seja quitado, o saldo ficará bloqueado. Ah, caso o valor de alguma multa rescisória integre o saldo do seu FGTS, esse valor também ficará bloqueado para movimentação.`,
			},
		].map(({ title, text }, index) => (
			<div class="mb-4 group" tabIndex={1}>
				<div
					class={`text-2xl cursor-pointer group font-bold gap-4 tracking-tight flex items-center justify-between mb-2 ${
						index > 0 ? "border-t border-sefi" : ""
					} pt-4`}
				>
					<div>{title}</div>
					<svg
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="w-16 h-16"
					>
						<polyline points="6 9 12 15 18 9"></polyline>
					</svg>
				</div>
				<div class="group-focus:max-h-screen max-h-0 overflow-hidden">
					<span dangerouslySetInnerHTML={text}></span>
				</div>
			</div>
		))}
	</div>
));
