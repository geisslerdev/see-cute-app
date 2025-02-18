<script setup lang="ts">
import { ref } from "vue";
import { supabase } from "../supabase";

const file = ref<File | null>(null);
const uploadedUrl = ref<string>("");

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files[0]) {
    file.value = target.files[0];
  }
};

const uploadImage = async () => {
  if (!file.value) {
    alert("Selecione uma imagem!");
    return;
  }

  const fileName = `${Date.now()}-${file.value.name}`;
  const bucketName = import.meta.env.VITE_SUPABASE_BUCKET;

  const { data, error } = await supabase.storage
    .from(bucketName)
    .upload(fileName, file.value);

  if (error) {
    alert("Erro no upload: " + error.message);
    return;
  }

  uploadedUrl.value = `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/${bucketName}/${fileName}`;
};
</script>

<template>
  <div class="upload-container">
    <h2>Enviar Imagem</h2>
    <label class="file-input-label">
      <input type="file" @change="handleFileChange" class="file-input" />
      Escolher Arquivo
    </label>
    <button @click="uploadImage" class="upload-btn">ENVIAR</button>

    <div v-if="uploadedUrl" class="preview-container">
      <p>Imagem enviada:</p>
      <img :src="uploadedUrl" alt="Uploaded Image" class="uploaded-image" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.upload-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: auto;
}

h2 {
  color: #333;
  margin-bottom: 15px;
}

.file-input-label {
  display: inline-block;
  background: #007bff;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
  font-size: 14px;
  text-align: center;
}

.file-input-label:hover {
  background: #0056b3;
}

.file-input {
  display: none;
}

.upload-btn {
  background: #28a745;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
  margin-top: 10px;
}

.upload-btn:hover {
  background: #218838;
}

.preview-container {
  margin-top: 15px;
  text-align: center;
}

.uploaded-image {
  width: 200px;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
}
</style>
