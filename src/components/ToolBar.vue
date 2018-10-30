<template>
    <div class="container">
        <div class="logo-wrapper">
            <img src="../assets/logo-eng.svg" alt="logo">
        </div>
        <div class="tabs-wrapper">
            <a v-for="tab in propsTabs" :key="tab.id" v-scroll-to="`#${tab}`">{{tab}}</a>
        </div>
    </div>
</template>

<script>
export default {
    props: ['propsTabs']
}
</script>

<style lang="scss" scoped>
    .container {
        flex: 1 100%;
        padding: 2.5vh 6vw 2.5vh 6vw;
        display: flex;
        align-items: center;
        img {
            width: 25vmin;
        }
        .tabs-wrapper {
            font-size: 3vmin;
            color: white;
            font-weight: bold;
            justify-content: flex-end;
            flex: 1;
            display: flex;
            & > a {
                margin: 0 2.5vw;
            }
            
        }
    }
</style>

