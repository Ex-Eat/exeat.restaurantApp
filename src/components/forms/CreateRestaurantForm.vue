<script lang="ts">
import { useRestaurantStore } from '@/stores/restaurant';
import { storeToRefs } from 'pinia';
import PinkButton from '../ui/buttons/PinkButton.vue';
import AppInput from '../ui/forms/AppInput.vue';
import AppDivider from '../ui/AppDivider.vue';
import AppH2 from '../ui/typo/AppH2.vue';
import AppCheckBox from '../ui/forms/AppCheckBox.vue';
import TagBox from '../ui/forms/TagBox.vue';

export default {
	name: 'CreateRestaurantForm',
	components: {
		PinkButton,
		AppInput,
		AppDivider,
		AppH2,
		AppCheckBox,
		TagBox,
	},
	setup() {
		const restaurantStore = useRestaurantStore();

		return {
			restaurantStore,
		};
	},
	data: () => ({
		restaurant: {
			name: '',
			description: '',
			keywords: [],
			professionalMail: '',
			phoneNumber: '',
			address: '',
			termsOfUse: false,
		},

		keyword: '',
	}),
	methods: {
		async submit(e: any) {
			e.preventDefault();
			console.log(this.restaurant);
			this.restaurantStore.createRestaurant(this.restaurant);
			this.$router.push('/');
		},
		async addKeyWord(e: any) {
			e.preventDefault();
			if (this.keyword && !this.restaurant.keywords.includes(this.keyword)) {
				this.restaurant.keywords.push(this.keyword);
			}
			this.keyword = '';
		},
		deleteFromList(keyword: string) {
			this.restaurant.keywords = this.restaurant.keywords.filter((item) => item !== keyword);
		},
	},
};
</script>

<template>
	<form @submit="submit">
		<div class="flex flex-col mx-auto my-12 p-2 shadow-md rounded-lg w-[480px]">
			<div class="mb-2 text-center">
				<AppH2>Créer un restaurant</AppH2>
			</div>
			<AppDivider />
			<div class="grid gap-3 my-4">
				<AppInput v-model:value="restaurant.name" name="name" label="Nom" type="text" required />
				<AppInput v-model:value="restaurant.address" name="address" label="Adresse" type="text" required />
				<AppInput
					v-model:value="restaurant.phoneNumber"
					name="phoneNumber"
					label="Numéro de Téléphone"
					type="phone"
					required
				/>
				<AppInput
					v-model:value="restaurant.professionalMail"
					name="professionalEmail"
					label="Email pro"
					type="email"
					required
				/>
				<AppInput
					v-model:value="restaurant.description"
					name="description"
					label="Description"
					type="textbox"
				/>
				<AppInput
					v-model:value="keyword"
					name="keywords"
					label="Mots-Clés"
					type="text"
					required
					v-on:keydown.enter.prevent="addKeyWord"
					v-on:keydown.space.prevent="addKeyWord"
				/>
				<div class="flex flex-wrap gap-1" v-if="restaurant.keywords != []">
					<TagBox v-for="kw in restaurant.keywords" v-on:click="deleteFromList(kw)">{{ kw }}</TagBox>
				</div>
				<AppCheckBox
					v-model:checked="restaurant.termsOfUse"
					label="J'accepte les conditions d'utilisation d'ex'eat"
					required
				/>
			</div>
			<div class="flex justify-center">
				<PinkButton>Valider</PinkButton>
			</div>
		</div>
	</form>
</template>
