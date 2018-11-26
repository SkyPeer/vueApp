<template>
    <div>
        <table>
            <tbody>
            <tr v-for="user in users">
                {{user.name}}
            </tr>
            </tbody>
        </table>
        <Pager total="50" uuu="5" current="2" @changePage="changePage"/>
    </div>
</template>

<script>
    import Pager from "../components/Pager";
    import {mapState} from 'vuex';

    export default {
        name: "TablePage",
        components: {Pager},
        methods: {
            changePage(page) {
                console.log(page);
            }
        },
        created() {
            let {query} = this.$route;
            this.$store.dispatch('getUsers', {page: query.page || 1});
        },

        computed: {
            ...mapState({
                users: state => state.users,
                total: state => state.total,
                currentPage: state => state.currentPage,
                progress: state => state.progress,

            })
        }
    }
</script>