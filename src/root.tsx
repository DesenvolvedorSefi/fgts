import {
	component$,
	createContextId,
	useContextProvider,
} from "@builder.io/qwik";
import {
	QwikCityProvider,
	RouterOutlet,
	ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head";

import "./global.css";

export const AppContext = createContextId<{ whatsapp: string }>("app");

export default component$(() => {
	useContextProvider(AppContext, {
		whatsapp: "https://api.whatsapp.com/send/?phone=5588993432811",
	});

	return (
		<QwikCityProvider>
			<head>
				<meta charSet="utf-8" />
				<link rel="manifest" href="/manifest.json" />

				<RouterHead />
			</head>
			<body lang="pt-br">
				<noscript>
					<iframe
						src="https://www.googletagmanager.com/ns.html?id=GTM-544M7HL"
						height="0"
						width="0"
						style="display:none;visibility:hidden"
					></iframe>
				</noscript>
				<RouterOutlet />
				<ServiceWorkerRegister />
				<script
					defer
					dangerouslySetInnerHTML="(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-544M7HL');"
				/>
			</body>
		</QwikCityProvider>
	);
});
