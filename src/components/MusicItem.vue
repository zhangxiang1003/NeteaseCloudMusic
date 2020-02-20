<template>
    <div class="m-item" @click="handleClick(id)">
        <div class="index">{{index+1}}</div>
        <div class="des">
            <p class="title">{{title}}</p>
            <p class="artist">{{artist}}-{{album}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name:"m-item",
        props:{
            index:{
                type:Number
            },
            title:{
                type:String
            },
            artist:{
                type:String
            },
            album:{
                type:String
            },
            id:{
                type:Number
            }
        },
        methods:{
            handleClick(id){
                this.$router.push(`/play?ids=${id}`)
            }
        }
    }
</script>

<style lang="less" scoped>
    .m-item{
        width: 100%;
        display: flex;
        padding: 5px 0px 5px 0px;
        border-bottom: 1px solid #e0e0e0;
    }
    .index{
      color: #9a9a98;
      width: 37.5px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .des{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 50px;
        padding-left: 5px;
        .title{
            font-size: 15px;
            color: #000000;

        }
        .artist{
            font-size: 11px;
            color: #9a9a98;
        }
    }
</style>