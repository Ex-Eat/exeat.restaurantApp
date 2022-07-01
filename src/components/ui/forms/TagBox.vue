<template>
	<div
		class="h-10 relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-primary-700 rounded-full hover:brightness-95 transition"
	>
		<span
			class="flex space-x-2 flex-row items-center relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-100 rounded-full"
		>
			<slot />
			<span class="spacer"></span>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="2"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
				/>
			</svg>
		</span>
	</div>
</template>
