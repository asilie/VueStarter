<script setup lang="ts">
import Card from '@/components/Card.vue'
import { RouterLink } from 'vue-router';
</script>

<template>
        <section class="py-4">
      <div class="container-xl lg:container m-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Card>
            <h2 class="text-2xl font-bold">For Pet Seekers</h2>
            <p class="mt-2 mb-4">
              Browse our pets and find your fur-baby today
            </p>
            <RouterLink
              to="/pets"
              class="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Browse Pets
            </RouterLink>
        </Card>
          <Card bgColor = "bg-teal-100">
            <h2 class="text-2xl font-bold">For Pet Owners</h2>
            <p class="mt-2 mb-4">
              List your pet to find the perfect pet-parent 
            </p>
            <RouterLink
              to="/pets/add"
              class="inline-block bg-teal-500 text-white rounded-lg px-4 py-2 hover:bg-teal-600"
            >
              Add Pet
            </RouterLink>
          </Card>
        </div>
      </div>
    </section>
</template>