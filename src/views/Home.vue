<template>
    <div style="height:600px; width:800px">
        <Map></Map>
    </div>
</template>

<script>
import Map from '@/components/Map.vue';
export default {
    name: 'home-page',
    components: {
        Map
    },
    data() {
        return {
            zoom: 12,
        };
    },
};
</script>

<style></style>