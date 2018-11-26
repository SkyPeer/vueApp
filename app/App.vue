<template>
    <div class="main">
        <span>{{title}}</span>
        <div class="counters">
            <counter :defaultCount='0' :text1="'counter1'"></counter>
            <counter :defaultCount='5' :text1="'counter2'"></counter>
            <counter :defaultCount='10' :text1="'counter3'"></counter>
            <button>Open Please</button>
        </div>
    </div>
</template>

<script>

    import Counter from "./counter";

    export default {
        name: "App",
        components: {Counter},
        data: function () {
            return{
                text1: 'haaaa',
                title: 'this AppMain'
            }
        }

        }
</script>
