<template>
    <div class="pager">
        <div class="pages">
            <a v-for="page in pagesCount" class="page" :class="{active:(page===currentPage) }" @click="navigate(page)" v-text="page"></a>
        </div>
    </div>
</template>

<script>

    export default {
        name: "Pager",
        props: ['total', 'current'],

        data() {
            return {
                currentPage: this.current || 1,
                pageSize: 100,

            };
        },
        watch: {
            current(val) {
                this.currentPage = val;
            }
        },
        computed: {
            pagesCount() {
                //console.log('pager this.total = ', this.total);
                let count = Math.ceil(this.total / this.pageSize);
                //console.log('count = ', count);
                return count || 1;
            },
        },
        methods: {
            navigate(page) {
                this.updateCurrentPage(page, true);
            },
            updateCurrentPage: function (page, replace) {
                let p = this.currentPage;
                if (replace) {
                    p = +page;
                } else {
                    p += +page;
                    if (p >= this.pagesCount) {
                        p = this.pagesCount;
                    } else if (p < 1) {
                        p = 1;
                    }
                }
                this.$emit('changePage', p);
            }
        }
    }
</script>

<style scoped>

</style>