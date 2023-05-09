<template>
    <div class="card m-3">
        <div class="card-body">
            <h5 class="card-title">{{ user_name }}</h5>
            <p class="card-text">{{ comentario }} </p>
        </div>
    </div>
</template>
  
<script>

export default {
    name: "resena-item",
    components: {

    },
    data() {
        return {};
    },
    props: {
        resId: Number,
        comentario: String,
        puntuacion: Number,
        foto: String,
        user_name: String,
    },
    methods: {

    },
};
</script>
  

<style scoped></style>
  