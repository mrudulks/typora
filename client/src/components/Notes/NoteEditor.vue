<template>
    <div class="h-full bg-white">
      <h1>Notes</h1>
      <!-- <EditorContent :editor="editor" /> -->
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { Editor, EditorContent } from "@tiptap/vue-3"
  import StarterKit from "@tiptap/starter-kit"
  
  defineOptions({
    name: 'NoteEditor'
  })
  const content = ref('');
  const editor = ref<Editor | null>(null);

  
  onMounted(() => {
    editor.value = new Editor({
      content: "<p>I'm running Tiptap with Vue.js. 🎉</p>",
      extensions: [
        StarterKit,
      ],
    });
  });
  </script>
  
  <style scoped></style>