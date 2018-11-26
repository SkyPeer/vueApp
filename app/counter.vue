<script>
    export default {
        props: ['text1','defaultCount'],
        data: function () {
            return{
                test: {
                    t: 'test VUE --- ok!',
                    a: 123,
                   },
                count: this.defaultCount
            }

        },
        methods:{
            countF: function () {
                this.count++
            },


        },
        created() {console.log(this)},

    }


</script>


<template>
    <div class="counter">
        <hr />
        <h5></h5>
        <span>{{'t= '+ test.t + ' a =' + test.a}} + text1 = {{text1}} </span><br/><br/>
        <span>Count = {{count}} <button @click="countF">Count {{count}}</button></span>
        <hr />
    </div>
</template>