<script setup lang="ts">
import Hero from '@/components/Hero.vue'
import HomeCards from '@/components/HomeCards.vue';
import PetListings from '@/components/PetListings.vue'
</script>

<template>
    <Hero title = "Become a Pet Owner" subtitle = "Find the pet that fits your needs"/>
    <HomeCards />
    <PetListings :limit = "3" :showButton = "true"/>
</template>