<template>
    <div class="service-container" id="Service">
        <div class="service-container-peerSupport">
            <div class="image-container">
                <img src="../assets/service-image.png" alt="logo">
            </div>
            <div class="service-description-container" :class="$mq">
                <h1>Peer Support System</h1>
                <hr width="40%" color="white" noshade>
                <p>나와 같은 아픔을 겪은<br>서포들과 대화를 해보세요</p>
            </div>
        </div>
        <div class="service-container-otherInfo" :class="$mq">
            <div v-for="information in otherInformation" :key="information.id" :class="`${information.name}-container`">
                <h1 :class="$mq">{{information.title[0]}}<br>{{information.title[1]}}</h1>
                <hr width="40%" color="#6DAF74" noshade>
                <div :class="$mq" class="image-container">
                    <img :src="information.url" :class="$mq">
                </div>
            </div>
        </div>
        <div class="service-container-download">
            <h1>지금 바로 코코넛을 이용해보세요!</h1>
            <div class="buttons-container" :class="$mq">
                <a :href="appURLs.playStoreURL">
                    <img class="button-android" src="../assets/GooglePlay.svg" alt="android" >
                </a>
                <a :href="appURLs.appleStoreURL">
                    <img class="button-apple" src="../assets/AppStore.svg" alt="apple">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import hospitalImage from "../assets/hospital-image.png";
import communityImage from "../assets/community-image.png";

export default {
    props: ['appURLs'],
    data() {
        return {
            otherInformation: {
                hospital: {
                    name: 'hospital',
                    title: ['나에게 맞는 병원과 센터를 찾고', '솔직한 후기를 공유하는 공간'],
                    url: hospitalImage
                },
                communitiy: {
                    name: 'community',
                    title: ['다른 사람들과 이야기를 나누고','서로의 정보를 공유하는 공간'],
                    url: communityImage
                }
            }
        }
    }

}
</script>

<style lang="scss" scoped>
    .service-container-peerSupport {
        background: #6DAF74;
        height: 100vh;
        display: flex;
        flex-wrap: wrap;
        .image-container {
            flex: 1 1 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
                margin-top: 5vh;
                height: 75vmin;
            }
        }
        .service-description-container {
            display: flex;
            flex-direction: column;
            flex: 1 1 50%;
            justify-content: center;
            color: white;
            &.sm {
                justify-content: flex-start;
            }
            h1 {
                font-size: 6rem;
            }
            p {
                font-size: 4rem;
                font-weight: bold;
            }
        }
    }
    .service-container-otherInfo {
        height: 100vh;
        display: flex;
        &.sm {
            flex-direction: column;
        }
        & > div {
            flex: 1 1 50%;
            display: flex;
            flex-flow: column;
            justify-content: center;
            color: #6DAF74;
            h1 {
                font-size: 4rem;
                margin-bottom: 5vh;
                &.sm {
                    margin-top: 0;
                    margin-bottom: 2vh;
                }
            }
            .image-container {
                margin-top: 5vh;
                &.sm {
                    margin-top: 2vh;
                }
            }
            img {
                width: 65vmin;
            }
        }
    }
    .service-container-download {
        background: #6DAF74;
        height: 60vh;
        display: flex;
        flex-direction: column;
        color: white;
        justify-content: center;
        h1 {
            font-size: 5rem;
            margin-bottom: 7.5vh;
        }
        .buttons-container > a {
            margin: 0 2vw;
        }
        img {
            height: 9vmin;
        }
    }  
</style>