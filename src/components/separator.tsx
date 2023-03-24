import { component$ } from "@builder.io/qwik";

export default component$(({ className }: { className?: string }) => (
	<div
		class={`max-w-md mx-auto w-1/2 bg-gradient-to-r from-transparent to-transparent h-0.5 ${className}`}
	/>
));
