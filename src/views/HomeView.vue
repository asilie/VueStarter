<script setup lang="ts">
import Hero from '@/components/Hero.vue'
import HomeCards from '@/components/HomeCards.vue'
import JobListings from '@/components/JobListings.vue'
</script>

<template>
    <Hero title = "Become a Pet Owner" subtitle = "Find the pet that fits your needs"/>
    <HomeCards />
    <JobListings :limit = "3" :showButton = "true"/>
</template>