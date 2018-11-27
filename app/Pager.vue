<template>
    <div class="pager">
        <div class="pages">
            <a class="page" :class="{disabled:!isPrev}" @click="prev" :disabled="isPrev"><-</a>
            <a v-for="page in pages" class="page" :class="{active:(page===currentPage) }" @click="navigate(page)" v-text="page"></a>
            <a class="page" :class="{disabled:!isNext}" @click="next" :disabled="isNext">-></a>
        </div>
    </div>
</template>

<script>
    import _ from 'lodash'
    export default {
        name: "Pager",
        props: ['total', 'current'],
        data() {
            return {
                currentPage: this.current || 1,
                pageSize: 10,
                visiblePagesCount: 15
            };
        },
        watch: {
            current(val) {
                this.currentPage = val;
            }
        },
        computed: {
            pagesCount() {//сколько всего страниц возможно
                let count = Math.ceil(this.total / this.pageSize);
                return count || 1;
            },
            pages() {
                let start = (this.currentPage > this.offset) ? (this.currentPage - this.offset) : 1;
                let count = this.visiblePagesCount;
                let pages = [];
                if (start + count > this.pagesCount) {
                    count = Math.abs(this.pagesCount - start) + 1;
                }
                for (let i = 0; i < count; ++i) {
                    pages.push(i + start);
                }
                return pages;
            },
            isNext() {
                return _.last(this.pages) < this.pagesCount;
            },
            isPrev() {
                return _.first(this.pages) > 1;
            },
            offset() {
                return this.visiblePagesCount / 2
            }
        },
        methods: {
            prev() {
                if (this.isPrev) {
                    let page = -this.visiblePagesCount;
                    this.updateCurrentPage(page, false);
                }
            },
            next() {
                if (this.isNext) {
                    let page = this.visiblePagesCount;
                    this.updateCurrentPage(page, false);
                }
            },
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