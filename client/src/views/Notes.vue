<template>
  <div class="h-full bg-white">
    {{ notes }}
    <div v-if="notes.length > 0">
      <h1>Notes</h1>
    </div>
    <div v-else class="h-full flex flex-col items-center justify-center">
      <h1 class="text-2xl font-bold">Create your first note</h1>
      <Modal title="Create Note">
        <template #modal-trigger="{ toggleModal }">
          <button @click="toggleModal" class="text-primary p-2 rounded-md flex items-center gap-2">
            <Plus />
            Create Note
          </button>
        </template>
        <template #modal-content="{ toggleModal }">
          <div>
            <input type="text" v-model="title" class="w-full p-2 rounded-md border border-gray-300" placeholder="Note Title" />

            <div class="mt-4 flex justify-end">
              <button @click="toggleModal" class="bg-primary text-white px-4 py-2 rounded-md">
                Create
              </button>
            </div>
          </div>
        </template>
      </Modal>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted, inject, ref } from 'vue';
import Plus from "vue-material-design-icons/Plus.vue"
import Modal from "../components/Reusable/Modal.vue"

const $api = inject('$api') as any;
const notes = reactive([]);
const title = ref('');


const fetchNotes = async () => {
  try {
    const response = await $api.get('/notes');
    Object.assign(notes, response.data);
  } catch (error) {
    console.error(error);
  }
};

const createNote = async () => {
  try {
    const response: any = await $api.post('/notes', { title: title.value });
    // notes.push(response.data);
  } catch (error) {
    console.error(error);
  }
};

onMounted(async () => {
  await fetchNotes();
});
</script>

<style scoped></style>