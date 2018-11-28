<template>
    <div>
       <input placeholder="Поиск..." v-model="search"/>
        <label>{{search}}</label>
        <table class="userTable">
            <tbody class="userTable">
            <tr class="userTable" v-for="user in users">
                {{'id: '+ user.id + ' name: ' + user.name + ' e-mail: ' + user.email }}
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
                search :''
            }
        },

        methods: {
            changePage(page) {
                console.log(page);
                this.$store.dispatch('getUsers', {page: page, text: this.search.length !== 0 ? this.search : null});
                this.currentPage = page;
            }
        },
        created() {
            let {query} = this.$route;
            this.$store.dispatch('getUsers', {page: query.page || 1});
            this.currentPage = query.page || 1;
            this.$store.dispatch('getTotal');
        },

        watch: {
            search: function () {
                this.search.length !== 0 ?
                    this.$store.dispatch('getUsers',{page: 1, text: this.search}) : this.$store.dispatch('getUsers', {page: 1});

                this.$store.dispatch('getTotal');
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