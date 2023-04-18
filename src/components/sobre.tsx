import { component$ } from "@builder.io/qwik";

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
			<div class="text-sefi-1 mt-4">
				Acesse o nosso site:{" "}
				<a
					href="https://seficredito.com.br"
					target="_blank"
					class="font-bold underline text-white"
				>
					seficredito.com.br
				</a>
			</div>
		</div>
		<div class="hidden md:block">
			<img src="/equipe.jpg" alt="Equipe SEFI" class="rounded-xl" />
		</div>
	</div>
));
