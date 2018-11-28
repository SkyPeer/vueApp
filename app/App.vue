<template>
    <div id="root" class="root">
        <main>
            <Tabs/>
            <router-view/>
        </main>
        <Footer/>
    </div>
</template>

<script>
    import Tabs from "./Tabs";
    import Footer from "./Footer";

    export default {
        name: "App",
        components: {Tabs,Footer}
    }
</script>