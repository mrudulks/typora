<template>
  <div>
    <h1>Notes</h1>
    <EditorContent :editor="editor" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Editor, EditorContent } from "@tiptap/vue-3"
import StarterKit from "@tiptap/starter-kit"

const content = ref('');
const editor = ref<Editor | null>(null);
// const fetchNotes = async () => {
//   const response = await axios.get('/api/notes');
//   notes.value = response.data;
// };

onMounted(() => {
  editor.value = new Editor({
    content: "<p>I'm running Tiptap with Vue.js. 🎉</p>",
    extensions: [
      StarterKit,
    ],
  });
});
</script>

<style scoped>

</style>