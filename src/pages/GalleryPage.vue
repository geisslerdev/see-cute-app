<script setup lang="ts">
import { ref, onMounted } from "vue";
import { supabase } from "../supabase";

interface ImageItem {
  name: string;
  url: string;
}

const images = ref<ImageItem[]>([]);

const fetchImages = async () => {
  const bucketName = import.meta.env.VITE_SUPABASE_BUCKET;
  const { data, error } = await supabase.storage.from(bucketName).list("", {
    limit: 100,
  });

  if (error) {
    console.error("Erro ao buscar imagens:", error.message);
    return;
  }

  images.value = data.map((img) => ({
    name: img.name,
    url: `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/${bucketName}/${img.name}`,
  }));
};

onMounted(fetchImages);
</script>

<template>
  <div class="gallery-container">
    <h2 class="gallery-title">Galeria de Imagens</h2>
    <div class="gallery">
      <div v-for="img in images" :key="img.name" class="gallery-item">
        <img :src="img.url" :alt="img.name" class="gallery-image" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.gallery-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: auto;
}

.gallery-title {
  color: #333;
  margin-bottom: 15px;
  font-size: 24px;
  font-weight: bold;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
  width: 100%;
  padding: 10px;
}

.gallery-item {
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.gallery-item:hover {
  transform: scale(1.05);
}

.gallery-image {
  width: 100%;
  border-radius: 5px;
}
</style>
