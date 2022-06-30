<script lang="ts">
import { defineComponent } from 'vue';
import AppH2 from '@/components/ui/typo/AppH2.vue';
import AppDivider from '@/components/ui/AppDivider.vue';
import AppInput from '@/components/ui/forms/AppInput.vue';
import PinkButton from '@/components/ui/buttons/PinkButton.vue';
import WhiteButton from '../buttons/WhiteButton.vue';
import { Restaurant } from '../../../models/Restaurant';

export default defineComponent({
	name: 'RestaurantCard',
	components: {
		AppH2,
		AppDivider,
		AppInput,
		PinkButton,
		WhiteButton,
	},
	props: {
		restaurant: {
			type: Restaurant,
			required: true,
		},
	},
});
</script>

<template>
	<div class="flex flex-col mx-auto my-12 p-2 shadow-md rounded-lg w-[480px]">
		<div class="mb-2 text-center">
			<AppH2>{{ restaurant.name }}</AppH2>
			<RouterLink :to="{ name: 'restaurant', props: { id: restaurant._id } }">
				<PinkButton>Voir le restaurant</PinkButton>
			</RouterLink>

			<RouterLink :to="{ name: 'restaurant-edit', props: { id: restaurant._id } }">
				<WhiteButton>Editer le restaurant </WhiteButton>
			</RouterLink>
		</div>
	</div>
</template>
