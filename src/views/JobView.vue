<script setup lang = "ts">
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import BackButton from '@/components/BackButton.vue';
import axios from 'axios';
import {reactive, onMounted} from 'vue'
import { useRoute, RouterLink, useRouter } from 'vue-router';
import {useToast} from 'vue-toastification'


const route = useRoute();
const router = useRouter();
const toast = useToast();

const petId = route.params.id;

const state = reactive({
    pet: {},
    isLoading: true
})

const deletePet = async() => {
  try{
    const confirm = window.confirm('Are you sure you want to delete this pet?');
    if (confirm) {
      await axios.delete(`/api/jobs/${petId}`);
    toast.success('Pet Deleted Successfully')
    router.push('/jobs')
    }
  } catch (error) {
    console.error('Error fetching pet', error);
    toast.error('Pet Was Not Deleted')
  } 
}

onMounted(async() => {
  try{
    const response = await axios.get(`/api/jobs/${petId}`);
    state.pet = response.data;
  } catch (error) {
    console.error('Error fetching pet', error);
  } finally {
    state.isLoading = false;
  }
})

</script>

<template>

<BackButton />

     <section v-if = "!state.isLoading" class="bg-teal-50">
      <div class="container m-auto py-10 px-6">
        <div class="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
          <main>
            <div
              class="flex flex-row justify-between bg-white p-6 rounded-lg shadow-md text-center md:text-left"
            >
            <div>
              <div class="text-gray-500 mb-4">{{state.pet.type}}</div>
              <h1 class="text-3xl font-bold mb-4">{{state.pet.name}}</h1>
              <div
                class="text-gray-500 mb-4 flex align-middle justify-center justify-start"
              >
                <i
                  class="pi pi-map-marker text-xl text-orange-800 mr-2"
                ></i>
                <p class="text-orange-800 text-nowrap">{{state.pet.location}}</p>
              </div>

            </div>
  
              <div class="flex align-middle justify-end">
                <img :src = "state.pet.imageURL" :alt = "`Image of ${state.pet.name}`" class = "pet-image max-w-[60%] rounded-lg"/>

              </div>
              

            </div>

            <div class="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 class="text-teal-800 text-lg font-bold mb-6">
                Pet Description
              </h3>

              <p class="mb-4">
                {{state.pet.description}}
              </p>

              <h3 class="text-teal-800 text-lg font-bold mb-2">Price</h3>

              <p class="mb-4">{{state.pet.price}}</p>
            </div>
          </main>

          <!-- Sidebar -->
          <aside>
            <!-- Owner Info -->
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-bold mb-6">Owner Info</h3>

              <h2 class="text-2xl">{{ state.pet.owner.name }}</h2>

              <hr class="my-4" />

              <h3 class="text-xl">Contact Email:</h3>

              <p class="my-2 bg-teal-100 p-2 font-bold">
                {{state.pet.owner.contactEmail}}
              </p>

              <h3 class="text-xl">Contact Phone:</h3>

              <p class="my-2 bg-teal-100 p-2 font-bold">{{state.pet.owner.contactPhone}}</p>
            </div>

            <!-- Manage -->
            <div class="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 class="text-xl font-bold mb-6">Manage Pet</h3>
              <RouterLink
                :to="`/jobs/edit/${state.pet.id}`"
                class="bg-teal-500 hover:bg-teal-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >Edit Pet</RouterLink
              >
              <button @click = "deletePet"
                class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
              >
                Delete Pet
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>

    <!-- Show loading spinner -->
    <div v-else class = "text-center text-gray-500 py-6">
            <PulseLoader />
         </div>

</template>