<template>
    <header>
        <nav class="navbar navbar-expand-sm navbar-light bg-green">
            <div class="container-fluid">
                <a class="navbar-brand" href="/"><img src="../../public/assets/imgs/logo1.png" alt="" height="60"> </a>
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
                            <router-link class="nav-link" to="/register">Registrarse</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <main class="container my-3">
        <h1>TRAIL QUEST</h1>
        <p>¿Como participar?</p>
        <section id="paso1" class="row my-4 d-flex align-items-center">
            <img src="https://dummyimage.com/600x400/000/fff" alt="" class="col-lg-5">
            <p class="col">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into
                electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of
                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                Aldus PageMaker including versions of Lorem Ipsum
            </p>
        </section>
        <section id="paso2" class="row d-flex flex-row-reverse align-items-center my-4">
            <img src="https://dummyimage.com/600x400/000/fff" alt="" class="col-lg-5">
            <p class="col">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into
                electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of
                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                Aldus PageMaker including versions of Lorem Ipsum
            </p>
        </section>
        <section id="paso3" class="row my-4 d-flex align-items-center">
            <img src="https://dummyimage.com/600x400/000/fff" alt="" class="col-lg-5">
            <p class="col">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into
                electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of
                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                Aldus PageMaker including versions of Lorem Ipsum
            </p>
        </section>

    </main>
    <footer class="bg-green p-2">
        <div class="container">
            <div class="row">
                <section class="col-md" id="socials">
                    <h5>Contactanos!</h5>
                    <nav class="nav flex-column">
                        <a href="" class="nav-link">
                            <font-awesome-icon icon="fa-brands fa-facebook" /> Facebook
                        </a>
                        <a href="" class="nav-link">
                            <font-awesome-icon icon="fa-brands fa-twitter" /> Twitter
                        </a>
                        <a href="" class="nav-link">
                            <font-awesome-icon icon="fa-brands fa-instagram" /> Instagram
                        </a>
                    </nav>
                </section>
                <section class="col-md d-flex align-items-center" id="copyright">
                    @arsenicoITB 3st4_pAg1na_-3s-nU35tra
                </section>

            </div>

        </div>

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

<style scoped></style>
