import { component$ } from "@builder.io/qwik";
import { SEFI } from "./logo-sefi";

export default component$(() => {
	return (
		<header class="flex max-w-5xl gap-2 items-center md:px-4 mx-auto justify-between sm:justify-start">
			<a href="/" class="block" title="SEFI Logo">
				<SEFI className="h-20 text-white" />
			</a>
			<div class="font-medium text-white text-right px-4 leading-tight text-xs uppercase tracking-wider sm:text-base">
				É Fácil! <br class="sm:hidden" /> É Rápido!
				<br class="sm:hidden" />
				<strong class="font-black text-white"> É SEFI</strong>.
			</div>
		</header>
	);
});
