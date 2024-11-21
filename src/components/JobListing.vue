<script setup lang="ts">
import { defineProps, ref, computed } from 'vue';
import type { Pet } from '@/interfaces/Pet.ts';
import { RouterLink } from 'vue-router';

const props = defineProps<{pet: Pet;}>();

const showFullDescription = ref(false);

const truncatedDescription = computed(() => {
  let description = props.pet.description;
  if (!showFullDescription.value) {
    description = description.substring(0,90) + '...';
  }
  return description;
})

const toggleFullDescription = () => {
  showFullDescription.value = !showFullDescription.value
}

</script>

<template>
    <div class="bg-white rounded-xl shadow-md relative">
            <div class="p-4">
              <div class="pet-card flex justify-between items-center  p-4 mb-4">
                <div class = "pet-details content-start max-w-[60%]">
                  <div class="text-gray-600 my-2">{{pet.type}}</div>
                  <h3 class="text-xl font-bold">{{pet.name}}</h3>
                </div>
                

                <img :src = "pet.imageURL" :alt = "`Image of ${pet.name}`" class = "pet-image max-w-[50%] rounded-lg"/>
              </div>

             

              <div class="mb-5">
                <div>
                  {{truncatedDescription}}
                </div>
                <button @click = "toggleFullDescription" class = "text-teal-500 hover:text-teal-600 mb-5">
                  {{  showFullDescription ? 'Less' : 'More' }}
                </button>
              </div>

              <h3 class="text-teal-500 mb-2">{{pet.price}}</h3>

              <div class="border border-gray-100 mb-5"></div>

              <div class="flex flex-col lg:flex-row justify-between mb-4">
                <div class="text-orange-800 mb-3">
                  <i class="pi pi-map-marker text-orange-800"></i>
                  {{pet.location}}
                </div>
                <RouterLink
                  :to = "`/jobs/${pet.id}`"
                  class="h-[36px] bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                  Read More
                </RouterLink>
              </div>
            </div>
          </div>
</template>