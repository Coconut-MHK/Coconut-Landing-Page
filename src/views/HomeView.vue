<template>
    <div class="home-container">
        <tool-bar :propsTabs="tabs"></tool-bar>
        <div class="home description-container" :class="$mq" id="Home">
            <h1 v-for="description in descriptions" :class="$mq" :key="description.id">{{ description }}</h1>
            <hr color="white" width="40%" noshade :class="$mq">
            <p v-for="subDescription in subDescriptions" :key="subDescription.id">{{ subDescription }}</p>
            <div class="buttons-container" :class="$mq">
                <a :href="appURLs.playStoreURL">
                    <img class="button-android" src="../assets/GooglePlay.svg" alt="android">
                </a>
                <a :href="appURLs.appleStoreURL">
                    <img class="button-apple" src="../assets/AppStore.svg" alt="apple">
                </a>
            </div>
        </div>
        <div v-if="$mq !== 'sm'"  class="home image-container">
            <img class="image-phone" src="../assets/phone.png" alt="phone">
        </div>
    </div>
</template>

<script>
import ToolBar from '../components/ToolBar';
export default {
    props: ['appURLs'],
    components: {
        ToolBar
    },
    data() {
        return {
            tabs: ['Home','Service','Contact'],
            descriptions: ['서로 마음의 병을', '공유하고 치유해주는', '복합 서비스'],
            subDescriptions: ['코코넛으로 서로의 경험을 나누고', '서로의 마음을 공유해주세요']
        }
    }

}
</script>

<style lang="scss" scoped>
    .home-container {
        background: #6DAF74;
        display: flex;
        height: 100vh;
        flex-flow: row wrap; 
        .home {
            height: 82vh;
        }
        .description-container {
            display: flex;
            flex: 1;
            flex-direction: column;
            justify-content: center;
            margin: 0 5vw 0 5vw;
            color: white;
            text-align: left;
            h1 {
                font-size: 7rem;
                margin: 0;
                &.sm {
                    font-size: 9.5rem;
                }
            }
            p {
                font-size: 4rem;
                margin: 0;
                font-weight: bold;
            }
            hr {
                margin: 5vh 0;
                &.sm {
                    margin: 5vh auto;
                }
            }
            &.sm {
                text-align: center;
            }
            .buttons-container {
                margin-top: 5vh;
                display: flex;
                &.sm {
                    justify-content: center;
                }
                & > a{
                    margin-right: 2vw;
                }
                img {
                    height: 9vmin;
                    object-fit: contain;
                }
            }
        }
        .image-container {
            display: flex;
            flex: 1;
            margin: 0 11vw 0 2.5vw;
            justify-content: flex-end;
            align-items: center;
            .image-phone {
                height: 70vmin;
                margin-top: 6vh;
            }
        }
    }
</style>
