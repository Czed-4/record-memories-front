<template>
    <el-carousel height="6000px"
                 :interval=1500
                 :initial-index=0>
        <el-carousel-item v-for="item in images" :key="item.name">
            <div>
                <img :src="item.src" alt="图片丢失了"/>
            </div>
        </el-carousel-item>
    </el-carousel>
</template>

<script>
    export default {
        name: "Index",
        data() {
            return {
                images: [
                    {
                        name: "spring",
                        src: require("../../assets/spring.jpg")
                    },
                    {
                        name: "summer",
                        src: require("../../assets/summer.jpg")
                    },
                    {
                        name: "autumn",
                        src: require("../../assets/autumn.jpg")
                    },
                    {
                        name: "winter",
                        src: require("../../assets/winter.jpg")
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    img {
        width: 100%;
        height: 100%;
    }
</style>