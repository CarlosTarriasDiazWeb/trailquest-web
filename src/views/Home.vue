<template>
    <header>
        <nav class="navbar navbar-expand-sm navbar-light bg-success">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">LOGO</a>
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
    <footer class="bg-success p-2">
        <div class="container">
            <div class="row">
                <section class="col-lg" id="socials">
                    <h5>Contactanos!</h5>
                    <nav class="row">
                        <a href="" class=" col me-4 text-reset">
                            facebook
                        </a>
                        <a href="" class="col me-4 text-reset">
                            twitter
                        </a>
                        <a href="" class="col me-4 text-reset">
                            instagram
                        </a>
                    </nav>
                </section>
                <section class="col-lg d-flex align-items-center" id="copyright">
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
