<template>
    <div class="description-container">
        <h1 :class="$mq">나만 힘든건가? 나만 이런건가?</h1>
        <hr align="center" color="#6DAF74" width="40%">
        <p><span>코코넛</span>은 소비자 참여 중심의<br>디지털 멘탈헬스 커뮤니티 케어 플랫폼입니다</p>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .description-container{
        color: #6DAF74;
        height: 75vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        h1, span, p{
            font-size: 8rem;
            font-weight: bold;
            margin:0;
            &.sm {
                font-size: 7rem;
            }
        }
        h1 {
            margin-bottom: 5vh;
        }
        p {
            font-size: 4rem;
            margin-top: 5vh;
        }
    }
</style>

