var app = new Vue({
    el: '#app',
    data: {
        textText: 'Hello Vue!',
        style1: {color: 'blue'},
        bpdyElement: '',
        getDate: 'Текущее время:' + new Date().toLocaleString(),
        typeJob: '',
        count: 0


    },
    methods: {
        clickFunc: function () {
            console.log(this.textText + ' -- clickFunc!!');
            this.style1.color == 'blue' ? this.style1.color = 'red' : this.style1.color = 'blue';
        },
        countFunc: function (param) {
            //this.count = 0;
            param !== 'increase' ? this.count-- : this.count++;

            if(!param){
                this.count=0;
            }
        }
    }

});