<script setup>
import {reactive } from 'vue';
import axios from 'axios';
import router from '@/router';
import {useToast} from 'vue-toastification'

const form = reactive({
    type: 'Cat',
    name: '',
    description: '',
    price: '',
    location: '',
    owner: {
        name: '',
        contactEmail: '',
        contactPhone: ''
    }
});

const toast = useToast();

const handleSubmit = async() => {
    const newPet = {
        name: form.name,
        type: form.type,
        description: form.description,
        price: form.price,
        location: form.location,
        owner: {
            name: form.owner.name,
            contactEmail: form.owner.contactEmail,
            contactPhone: form.owner.contactPhone
        }
    }
    try {
    const response = await axios.post(`/api/jobs`, newPet);
    toast.success('Pet Added Successfully')
    router.push(`/jobs/${response.data.id}`)
  } catch (error) {
    console.error('Error posting pet', error);
    toast.error('Pet Was Not Added')
  }
}

</script>

<template>
    <section class="bg-teal-50">
      <div class="container m-auto max-w-2xl py-24">
        <div
          class="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
        >
          <form @submit.prevent = "handleSubmit">
            <h2 class="text-3xl text-center font-semibold mb-6">Add Pet</h2>

            <div class="mb-4">
              <label for="type" class="block text-gray-700 font-bold mb-2"
                >Pet Type</label
              >
              <select v-model = "form.type"
                id="type"
                name="type"
                class="border rounded w-full py-2 px-3"
                required
              >
                <option value="Cat">Cat</option>
                <option value="Dog">Dog</option>
                <option value="Fish">Fish</option>
                <option value="Hamster">Hamster</option>
                <option value="Rabbit">Rabbit</option>
                <option value="Bird">Bird</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2"
                >Pet Name</label
              >
              <input v-model = "form.name"
                type="text"
                id="name"
                name="name"
                class="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Mr. Floof"
                required
              />
            </div>
            <div class="mb-4">
              <label
                for="description"
                class="block text-gray-700 font-bold mb-2"
                >Description</label
              >
              <textarea v-model = "form.description"
                id="description"
                name="description"
                class="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="Add any medications, likes/dislikes, compatibilities, etc"
              ></textarea>
            </div>

            <div class="mb-4">
              <label for="type" class="block text-gray-700 font-bold mb-2"
                >Price</label
              >
              <select v-model = "form.price"
                id="price"
                name="price"
                class="border rounded w-full py-2 px-3"
                required
              >
                <option value="Under $50">under $50</option>
                <option value="$50 - $60">$50 - $60</option>
                <option value="$60 - $70">$60 - $70</option>
                <option value="$70 - $80">$70 - $80</option>
                <option value="$80 - $90">$80 - $90</option>
                <option value="$90 - $100">$90 - $100</option>
                <option value="$100 - $125">$100 - $125</option>
                <option value="$125 - $150">$125 - $150</option>
                <option value="$150 - $175">$150 - $175</option>
                <option value="$175 - $200">$175 - $200</option>
                <option value="Over $200">Over $200</option>
              </select>
            </div>

            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2">
                Location
              </label>
              <input v-model = "form.location"
                type="text"
                id="location"
                name="location"
                class="border rounded w-full py-2 px-3 mb-2"
                placeholder="Pet Location"
                required
              />
            </div>

            <h3 class="text-2xl mb-5">Owner Info</h3>

            <div class="mb-4">
              <label for="owner" class="block text-gray-700 font-bold mb-2"
                >Owner Name</label
              >
              <input v-model = "form.owner.name"
                type="text"
                id="owner"
                name="owner"
                class="border rounded w-full py-2 px-3"
                placeholder="Owner Name"
              />
            </div>

            <div class="mb-4">
              <label
                for="contact_email"
                class="block text-gray-700 font-bold mb-2"
                >Contact Email</label
              >
              <input v-model = "form.owner.contactEmail"
                type="email"
                id="contact_email"
                name="contact_email"
                class="border rounded w-full py-2 px-3"
                placeholder="Email address for applicants"
                required
              />
            </div>
            <div class="mb-4">
              <label
                for="contact_phone"
                class="block text-gray-700 font-bold mb-2"
                >Contact Phone</label
              >
              <input v-model = "form.owner.contactPhone"
                type="tel"
                id="contact_phone"
                name="contact_phone"
                class="border rounded w-full py-2 px-3"
                placeholder="Phone for applicants"
              />
            </div>

            <div>
              <button
                class="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Pet
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
</template>