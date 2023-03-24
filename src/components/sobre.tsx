import { component$ } from "@builder.io/qwik";
import { SEFI } from "./logo-sefi";

export default component$(() => (
	<div class="max-w-5xl text-center md:text-left mx-auto md:grid grid-cols-2 p-8 gap-8 items-center md:py-20">
		<div>
			<div class="font-extrabold tracking-tighter text-neutral-1 text-5xl mb-4 max-w-xs">
				Já ouviu falar na{" "}
				<span class="text-yellow font-black">SEFI</span>?
			</div>
			<div class="text-sefi-1">
				A Sefi Crédito é uma Start Up que atua como correspondente
				bancário localizada na cidade de Sobral-CE. Temos o compromisso
				de total transparência com nossos clientes. Nossa central de
				atendimento está disponível para esclarecimento de dúvidas sobre
				quaisquer dos valores apresentados.
			</div>
		</div>
		<div class="hidden md:block">
			<SEFI className="h-40 text-white" />
		</div>
	</div>
));
