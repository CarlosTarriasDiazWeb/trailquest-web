<template>
    <header>
        <nav class="navbar navbar-expand-sm navbar-light bg-success">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">TRAILQUEST</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item text-center">
                            <router-link class="nav-link" to="/login">Iniciar sesión</router-link>
                        </li>
                        <li class="nav-item text-center">
                            <a class="nav-link" href="#">Registrarse</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <main>
        <h1>TRAIL QUEST</h1>
        <p>¿Como participar?</p>
        <section id="paso1" class="">
            <img src="https://dummyimage.com/600x400/000/fff" alt="" class="img-fluid float-start">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                Aldus PageMaker including versions of Lorem Ipsum</p>
        </section>
        <section id="paso2" class="">
            <img src="https://dummyimage.com/600x400/000/fff" alt="" class="img-fluid float-end">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                Aldus PageMaker including versions of Lorem Ipsum</p>
        </section>
        <section id="paso3" class="">
            <img src="https://dummyimage.com/600x400/000/fff" alt="" class="img-fluid float-start">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                Aldus PageMaker including versions of Lorem Ipsum</p>
        </section>
    </main>
    <footer class="d-flex bg-success">
        <section id="socials">
            <nav>
                <ul>
                    <li><a href="">Instagram</a></li>
                    <li><a href="">Twitter</a></li>
                    <li><a href="">Facebook</a></li>
                </ul>
            </nav>
        </section>
        <section id="copyright">
            <p>@arsenicoITB 3st4_pAg1na_-3s-nU35tra</p>
        </section>
    </footer>
</template>

<script>
export default {
    name: 'home-page',
    components: {

    },
    data() {
        return {
            zoom: 8,
        };
    },
};
</script>

<style scoped>

</style>
