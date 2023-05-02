<template>
    <header>
        <nav>
            <ul>
                <li></li>
            </ul>
        </nav>
    </header>
    <main>
        <h1>TRAILQUEST</h1>
        <div style="height:600px; width:800px">
            <Map></Map>
        </div>
    </main>
    <footer>

    </footer>
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
            zoom: 8,
        };
    },
};
</script>

<style scoped></style>
