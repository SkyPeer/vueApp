//import axios from './node_modules/axios/lib/axios.js';

// Make a request for a user with a given ID

import Counter from './counter'

let app = new Vue({
    el: '#app',
    data() {
        return {
            textText: 'Hello Vue!',
            style1: {color: 'blue'},
            bpdyElement: '',
            getDate: 'Текущее время:' + new Date().toLocaleString(),
            typeJob: '',
            count: 0,
            inputText: '',
            search: '',
            array: [],
            name1: '',
            info: {},
            openId: null,
        }


    },

    created(){
      console.log('created');

      /*axios.get('http://localhost:3100/getDefaultJsonData')
          .then(response => response.data)
          .then(data => this.array = data)*/
    axios.get('http://localhost:3100/getDefaultJsonData')
            .then(response => (this.array = response.data));




        /*.then(response => response.json)
            .then(json => (app.array = json))*/
            /*.then(response => json)
            .then(json => console.log(json))*/
                // handle success
            /*.catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });*/


    },

    watch: {

    },
    methods: {
        clickFunc () {
            console.log(this.textText + ' -- clickFunc!!');
            this.style1.color == 'blue' ? this.style1.color = 'red' : this.style1.color = 'blue';
        },
        countFunc (param) {
            //this.count = 0;
            param !== 'increase' ? this.count-- : this.count++;

            if (!param) {
                this.count = 0;
            }
        },
        inputTextButtonClick: function () {
            this.inputText += this.inputText !== '' ?  'и зачем то надажи Кнопку))' : 'нажали кнопку но... не ввели текст ((((';
        },
        consoleArray: () =>
        {
            console.log('app.array:', app.array)
        },
        consoleCheckedItem: (arg) => {
            app.openId !== arg ? app.openId = arg : app.openId = null;
            console.log('openId=', app.openId == 'open');
            return app.openId !== arg ? 'открыть' : 'закрыть';
        }
    }


});