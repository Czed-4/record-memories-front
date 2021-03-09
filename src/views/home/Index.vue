<template>
    <el-carousel height="655px"
                 :interval=3000
                 :initial-index=0
                 arrow="always"
                 style="width:100%">
        <el-carousel-item v-for="item in images" :key="item.name">
            <div>
                <img :src="item.src" style="height:100%;width:100%;" alt="图片丢失了"/>
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

</style>