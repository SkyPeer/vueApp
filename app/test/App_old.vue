<template>

    <div id="hello">
        <h2>{{message}}</h2>
      
        <span @click=clickFunc :style=style1>{{textText}}</span><br/>

        <div id="inputText">
            <input type="text" placeholder="Введите текст" v-model="inputText">
            <span>Вы ввели текст {{inputText}} </span>
            <button @click="inputTextButtonClick">Нажми</button>

        </div>

        <form id="form1" v-bind:class=" typeJob == 'list' ? 'class1' : 'class2' ">
            <h3>RadiobuttonsForm</h3>
            <div><label for="radio1">List</label>
                <input type="radio" id="radio1" name="type" v-model="typeJob" value="list" :checked="typeJob == 'list'"><br/>

                <label for="radio2">Search</label>
                <input type="radio" id="radio2" name="type" v-model="typeJob" value="search" :checked="typeJob == 'search'"><br />
            </div>

            <div v-if="typeJob == 'search'" class="form1-input">
                <input type="text" name="search" v-model="search" placeholder="Введите искомое значение" />
                <label v-if="typeJob == 'search'">Вы ввели: {{search}}</label>
                <label v-if="search.length"> -- кол. символов {{search.length}} и это {{!isNaN(parseInt(search)) ? 'число' : 'строка'}}</label>
            </div>

            <span>Вы выбрали: {{typeJob}}</span>
        </form>

        <div id="divForArray">
            <h3>Array!</h3>
            <button @click="consoleArray">TEST</button>
            <button @click="consoleThis1()">this1</button>
            <button @click="consoleThis2">this2</button>

            <div class="arrayItem" v-for="item in array">{{item.name}}  {{' email: ' + item.email}}
                <button @click="consoleCheckedItem(item.id)">{{openId == item.id ? 'Закрыть' : 'Открыть'}}</button>
                <div v-if="openId == item.id">
                    {{item.balance}}
                </div>
            </div>
        </div>




        <span v-bind:title="getDate">{{getDate}}</span><br />
        <span :title="getDate">Время в title</span>
        <hr>

        <div id="counter">
            <h4>COUNTER: {{count}}</h4>
            <a href="#" @click="countFunc('increase')"> Увеличить count </a>
            <a href="#" @click="countFunc('reduce')"> Уменьшить count </a>
            <a href="#" @click="countFunc()"> Обнулить count </a><br /><br />

            <button @click="countFunc('increase')"> Увеличить count </button>
            <button @click="countFunc('reduce')"> Обнулить count </button>
            <button @click="countFunc()"> Обнулить count </button>
        </div>


    </div>
</template>
 
<script>

    import axios from 'axios';
    //import VueAxios from 'vue-axios';

    export default {
        name: 'app',
        data () {
            return {
                message: 'Welcome to Vue.js',
                textText: 'Hello Vue!',
                style1: {color: 'blue'},
                bodyElement: '',
                getDate: 'Текущее время:' + new Date().toLocaleString(),
                typeJob: '',
                count: 0,
                inputText: '',
                search: '',
                array: [],
                name1: '',
                info: {},
                openId: null
            }
        },

        created(){
                console.log('created');
                axios.get('http://localhost:3100/getDefaultJsonData')
                    .then(response => (this.array = response.data));
        },

        watch: {

            },

        methods: {

            clickFunc () {
                    console.log(this.textText + ' -- clickFunc!!');
                    this.style1.color == 'blue' ? this.style1.color = 'red' : this.style1.color = 'blue';
                },
                countFunc (param) {
                    param !== 'increase' ? this.count-- : this.count++;

                    if (!param) {
                        this.count = 0;
                    }
                },
                inputTextButtonClick: function () {
                    this.inputText += this.inputText !== '' ?  'и зачем то надажи Кнопку))' : 'нажали кнопку но... не ввели текст ((((';
                },
                /*consoleArray: () =>
                {
                    console.log('app.array:', array)
                },*/

                consoleArray (){
                    console.log('app.array:', this.array);
                },

                consoleThis1 (){
                    console.log(this)
                },

                 consoleThis2: () => {
                     console.log(this)
                 },

                consoleCheckedItem (arg){
                    this.openId !== arg ? this.openId = arg : this.openId = null;
                    return this.openId !== arg ? 'открыть' : 'закрыть';
                }
            }
    }
</script>
