<template>
    <div>
        <table class="userTable">
            <tbody class="userTable">
            <tr class="userTable" v-for="user in users">
                {{'id: '+ user.id + ' name: ' + user.name + ' e-meial: ' + user.email }}
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
                currentPage: 1
            }

        },
        methods: {
            changePage(page) {
                console.log(page);
                this.$store.dispatch('getUsers', {page: page});
                this.currentPage = page;
            }
        },
        created() {
            let {query} = this.$route;
            this.$store.dispatch('getUsers', {page: query.page || 1});
            this.currentPage = query.page || 1;
            this.$store.dispatch('getTotal');
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