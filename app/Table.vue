<template>
    <div class="tableComponent">
       <div class="search">
            <input placeholder="Поиск..." v-model="search"/>
            <label class="count" v-if="search.length > 0">Найдено: {{totalArray}} строк</label>
       </div>


        <Pager :total='totalArray' :current='currentPage' @changePage="changePage"/>

        <table class="paymentTable">
            <tbody class="paymentTable-body">
            <tr>
                <th>Id:</th>
                <th>Имя: </th>
                <th>Email: </th>
                <th>Платеж: </th>
                <th>Язый прог.:</th>
            </tr>
            <tr class="payment" v-for="user in users">
                <td>{{user.id}}</td>
                <td>{{user.name}}</td>
                <td class="email">{{user.email}}</td>
                <td :class="user.payment > 140 ? 'alert' : ''">$ {{user.payment}}</td>
                <td>{{user.language}}</td>
            </tr>
            </tbody>
        </table>
        <Pager :total='totalArray' :current='currentPage' @changePage="changePage"/>
    </div>
</template>

<script>
    import Pager from "./Pager";
    import {mapState, mapGetters} from 'vuex';

    export default {
        name: "TablePage",
        components: {Pager},

        data(){
            return{
                currentPage: 1,
                search :'',
                total : '',
            }
        },

        methods: {
            changePage(page) {
                //console.log(page);
                this.$store.dispatch('getUsers', {page: page, text: this.search.length !== 0 ? this.search : null});
                this.currentPage = page;
            }
        },
        created() {
            //let {query} = this.$route;
            this.$store.dispatch('getUsers', {page: /*query.page ||*/ 1});
            this.currentPage = /*query.page ||*/ 1;
            this.$store.dispatch('getTotal');
        },

        watch: {
            search: function () {
                this.search.length !== 0 ?
                    this.$store.dispatch('getUsers',{page: 1, text: this.search}) : this.$store.dispatch('getUsers', {page: 1});

                this.total = this.$store.dispatch('getTotal');

            }

        },

        computed: {
            ...mapGetters({
                totalArray: 'getTotal'

            }),
            ...mapState({
                users: state => state.users,
            })
        }
    }
</script>