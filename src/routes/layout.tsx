import { component$, Slot, useContext } from "@builder.io/qwik";
import Footer from "~/components/footer";
import { AppContext } from "~/root";
import Header from "../components/header";

export default component$(() => {
	const context = useContext(AppContext);

	return (
		<>
			<main
				class={`bg-gradient-to-b from-sefi-4 via-sefi-5 to-sefi-4 min-h-screen relative`}
			>
				<Header />
				<section>
					<Slot />
				</section>
				<Footer />
				<a
					href={`${context.whatsapp}&text=Preciso%20de%20ajuda%20para%20fazer%20o%20meu%20empr%C3%A9stimo.&type=phone_number&app_absent=0`}
					target="_blank"
					class="fixed shadow-xl shadow-neutral-4/50 grid place-items-center bottom-2 right-2 rounded-full text-white bg-green w-16 h-16"
					title="WhatsApp da SEFI"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="800"
						height="800"
						viewBox="0 0 24 24"
						fill="none"
						class="w-12 h-12"
					>
						<path
							d="M17.6 6.32A7.85 7.85 0 0 0 12 4a7.94 7.94 0 0 0-6.865 3.963 7.94 7.94 0 0 0-.015 7.927L4 20l4.2-1.1a7.93 7.93 0 0 0 3.79 1 8 8 0 0 0 8-7.93 8 8 0 0 0-2.39-5.65zM12 18.53a6.58 6.58 0 0 1-3.36-.92l-.24-.15-2.49.66.66-2.43-.16-.25a6.6 6.6 0 0 1 1.497-8.637 6.6 6.6 0 0 1 8.753.467 6.65 6.65 0 0 1 2 4.66 6.66 6.66 0 0 1-6.66 6.6zm3.61-4.94l-1.35-.64c-.18-.06-.32-.1-.45.1-.196.268-.406.525-.63.77-.11.14-.23.15-.43 0a5.33 5.33 0 0 1-2.69-2.35c-.21-.35.2-.33.58-1.08a.38.38 0 0 0 0-.35c0-.1-.45-1.08-.61-1.47s-.32-.33-.45-.34h-.39a.71.71 0 0 0-.53.25A2.19 2.19 0 0 0 8 10.17a3.82 3.82 0 0 0 .81 2.05 8.89 8.89 0 0 0 3.39 3 3.85 3.85 0 0 0 2.38.5 2 2 0 0 0 1.33-.94 1.62 1.62 0 0 0 .12-.94c-.09-.1-.22-.15-.42-.25z"
							fill="currentColor"
						/>
					</svg>
				</a>
			</main>
		</>
	);
});
