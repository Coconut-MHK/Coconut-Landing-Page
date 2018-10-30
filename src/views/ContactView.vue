<template>
    <div class="contact-container" id="Contact">
        <div class="information-container">
            <div class="information-contact">
                <h1>Contact Us</h1>
                <p>coconut.mhk@gmail.com</p>
            </div>
            <div class="information-address">
                <h1>Coconut</h1>
                <p>서울특별시 동대문구 회기로 85,<br>KAIST 서울캠퍼스</p>
            </div>
            <p class="information-rights" :class="$mq">@ 2018 Coconut</p>
        </div>
        <div class="collaboration-container">
            <h1>In Collaboration With</h1>
            <div class="collaboration-image-container">
                <img src="../assets/logoKAIST.svg" alt="KAIST">
                <img src="../assets/logoMHK.svg" alt="MHK">
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .contact-container {
        display: flex;
        flex-wrap: wrap;
        height: 30vmin;
        text-align: left;
        .information-container, .collaboration-container{
            flex: 1;
            margin: 5rem;
            h1 {
                margin: 0 0 0.25vh 0;
                font-size: 2rem;
            }
            p {
                margin: 0;
                font-size: 1.5rem;
            }
            & > p {
                margin-top: 7.5vh;
            }
            .information-rights.sm {
                margin-top: 2.5vh;
            }
        }
        .information-contact {
            margin-bottom: 1vh;
        }
        .collaboration-image-container {
            display: flex;
            align-items: center;
            margin-top: 2vh;
            & > img {
                width: 20vmin;
            }
            img + img {
                margin-left: 2vw;
            }
        }
    }
</style>

