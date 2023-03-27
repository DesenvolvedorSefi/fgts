import { component$, useContext } from "@builder.io/qwik";
import { AppContext } from "~/root";
import Separator from "./separator";

export default component$(() => {
	const context = useContext(AppContext);
	const modalidades = [
		{
			//Cartão de Crédito
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="w-12 h-12 mx-auto"
				>
					<rect x="2" y="5" width="20" height="14" rx="2"></rect>
					<line x1="2" y1="10" x2="22" y2="10"></line>
				</svg>
			),
			title: "Empréstimo no",
			subtitle: "Cartão de Crédito",
			description:
				"Transforme seu limite disponível do cartão de crédito em dinheiro na sua conta!",
			link: context.whatsapp.concat(
				"&text=Quero saber sobre o Empréstimo no Cartão de Crédito."
			),
		},
		{
			//FGTS
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="w-12 h-12 mx-auto"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<line x1="9" y1="18" x2="15" y2="18"></line>
					<line x1="10" y1="22" x2="14" y2="22"></line>
					<path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"></path>
				</svg>
			),
			title: "Empréstimo com déb. na",
			subtitle: "Conta de Luz",
			description:
				"A forma mais fácil de conseguir um empréstimo. Ideal para negativados.",
			link: context.whatsapp.concat(
				"&text=Quero saber sobre o Empréstimo pela Conta de Luz."
			),
		},
		{
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="w-12 h-12 mx-auto"
				>
					<rect x="2" y="6" width="20" height="12" rx="2"></rect>
					<circle cx="12" cy="12" r="2"></circle>
					<path d="M6 12h.01M18 12h.01"></path>
				</svg>
			),
			title: "Empréstimo",
			subtitle: "Consignado",
			description:
				"Crédito com pagamento direto da pensão e benefício para aposentados e pensionistas.",
			link: context.whatsapp.concat(
				"&text=Quero saber sobre o Empréstimo Consignado."
			),
		},
		{
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="w-12 h-12 mx-auto"
				>
					<circle cx="12" cy="12" r="10"></circle>
					<path d="M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z"></path>
					<line x1="9" y1="9" x2="9.01" y2="9"></line>
					<line x1="15" y1="9" x2="15.01" y2="9"></line>
				</svg>
			),
			title: "Não achou?",
			subtitle: "Fale conosco",
			description:
				"Temos certeza que alguma das nossas soluções vai te ajudar.",
			linkText: "Chama no Zap",
			link: context.whatsapp.concat(
				"&text=Quero saber quais empréstimos eu posso fazer."
			),
		},
	];
	return (
		<div class="mx-auto max-w-5xl py-8 md:pb-20 md:pt-16 text-center">
			<div class="text-white text-3xl px-8 font-bold leading-none tracking-tight max-w-[480px] mx-auto">
				Procurando outras modalidades de empréstimo?
			</div>
			<div class="text-5xl mb-4 font-black tracking-tighter text-white">
				A <span class="text-yellow">SEFI</span> tem!
			</div>
			<div class="grid grid-cols-2 md:grid-cols-4 p-4 gap-2">
				{modalidades.map(
					({
						icon,
						title,
						subtitle,
						description,
						link,
						linkText,
					}) => (
						<div class="bg-sefi-4 flex flex-col justify-between p-4 rounded-xl text-white hover:bg-sefi-5 transition">
							<div>
								<div>{icon}</div>
								<div class="leading-none font-bold my-2">
									<span class="uppercase text-sm tracking-wide">
										{title}
									</span>
									<br />
									<span class="text-yellow text-2xl leading-none">
										{subtitle}
									</span>
								</div>
							</div>
							{description && (
								<p class="leading-tight text-sm mb-2">
									{description}
								</p>
							)}

							<div>
								<Separator className="h-[1px] via-neutral-5/50 w-full my-2" />
								<a href={link}>{linkText ?? "Saiba mais"}</a>
							</div>
						</div>
					)
				)}
			</div>
		</div>
	);
});

// Conta de luz - Dinheiro rápido e fácil até para negativados!Pagamento direto da conta de energia.
