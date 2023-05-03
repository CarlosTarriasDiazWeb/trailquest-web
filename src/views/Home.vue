<template>
    <header>
        
    </header>
    <main class="container my-3">
        <h2>¿Como participar?</h2>
        <section id="paso1" class="row my-4 d-flex align-items-center">
            <img src="https://dummyimage.com/600x400/000/fff" alt="" class="col-lg-5">
            <p class="col">
                Registrate en nuestra página o a través de la app de Trail Quest para ver un mapa con todos los tesoros que
                hay alrededor tuyo.
            </p>
        </section>
        <section id="paso2" class="row d-flex flex-row-reverse align-items-center my-4">
            <img src="https://dummyimage.com/600x400/000/fff" alt="" class="col-lg-5">
            <p class="col">
                Utiliza la app para navegar hacia un tesoro cercano. No os olvideis de tener el movil cargado!
            </p>
        </section>
        <section id="paso3" class="row my-4 d-flex align-items-center">
            <img src="https://dummyimage.com/600x400/000/fff" alt="" class="col-lg-5">
            <p class="col">
                Comparte la experiencia con tus amigos y pon una reseña en el tesoro que encuentres.
                Diviertete!
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
