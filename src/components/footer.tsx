import { component$ } from "@builder.io/qwik";
import { SEFI } from "./logo-sefi";

export default component$(() => {
	return (
		<footer class="bg-sefi-5 text-white py-6">
			<div class="flex items-end flex-col sm:flex-row gap-4 max-w-7xl p-4 md:p-8 ">
				<div class="w-full text-center sm:text-left">
					<SEFI
						version="horizontal"
						className="h-12 mx-auto sm:-ml-3"
					/>
					<p class="text-xs">
						CNPJ - 31.852.178/0001-94 <br />
						Rua Menino de Deus, 760
						<br />
						Sala 303, Centro - Sobral/Ceará
					</p>
				</div>
				<div class="leading-tight w-full text-center sm:text-right">
					<div class="text-xs">
						SEFI Crédito © {new Date().getFullYear()} <br /> Todos
						os direitos reservados <br />
						All rights reserved
					</div>
				</div>
			</div>
		</footer>
	);
});
