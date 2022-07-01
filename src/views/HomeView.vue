<script setup lang="ts">
import { useRestaurantStore } from '@/stores/restaurant';
import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia';
import RestaurantCard from '../components/ui/restaurant/RestaurantCard.vue';
import PinkButton from '../components/ui/buttons/PinkButton.vue';

const userStore = useUserStore();
userStore.loadUser();
const { user } = storeToRefs(userStore);

const restaurantStore = useRestaurantStore();
restaurantStore.loadRestaurants();
const { restaurants } = storeToRefs(restaurantStore);
console.log(restaurants);
</script>

<template>
	<div v-if="!user">
		<h1>Welcome to the restaurant app, please login first.</h1>
	</div>
	<div v-else>
		<div class="flex justify-between m-3">
			<h1>Welcome, which restaurant do you want to work with ?</h1>

			<RouterLink :to="{ name: 'restaurant-create' }">
				<PinkButton>Create a new restaurant</PinkButton>
			</RouterLink>
		</div>

		<div class="grid md:grid-cols-2 gap-3 grid-cols-1">
			<RestaurantCard v-for="restaurant in restaurants" :restaurant="restaurant" />
		</div>
	</div>
</template>
