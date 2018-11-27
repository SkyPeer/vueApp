<script>

    import Counter from "./counter";

    export default {
        name: "App",
        components: {Counter},

        computed: {
            notes() {
                return this.$store.getters.notes;
            },
            stateCounter(){
                return this.$store.getters.stateCounter;
            }
        },
        data: function () {
            return{
                text1: 'haaaa',
                title: 'this AppMain',
                open: false,

            }
        },
        methods:{
            openF(){
                this.open = true
            },
            addNew() {
                this.$store.dispatch('addNote', { text: 'новая заметка' })
            },
            increaseStateCounter(){
                this.$store.dispatch('increaseCounter')
            },
            consoleStore(){
                console.log(this.$store)
            },
            consoleNotes(){
                console.log(this.notes)
            }

        },
        created() {
            console.log(this.$store)
        },

    }
</script>


<template>

    <div class="main">
        <br /><br />
        <hr/>
        <span>{{title}}</span>
        <div class="counters">
            <counter  v-if="this.open" :stateCounter='stateCounter' :defaultCount='0' :text1="'counter1'"></counter>
            <counter :defaultCount='5' :stateCounter='stateCounter' :text1="'counter2'"></counter>
            <counter :defaultCount='10' :stateCounter='stateCounter' :text1="'counter3'"></counter>
            <button v-on:click="open ? open = false : open = true">{{open ? 'Закрыть' : 'Открыть'}}</button>
            <button @click="addNew">addNew</button>
            <button @click="consoleStore">store test</button>
            <button @click="consoleNotes">notes test</button>
            <button @click="increaseStateCounter">stateCounter ++</button>

        </div>
        <div v-for="item in this.notes">{{item.text}}</div>
        <div>StateCounter = {{stateCounter}} </div>
    </div>
</template>
