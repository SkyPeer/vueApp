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
    import Tabs from "./components/Tabs";
    import Footer from "./components/Footer";

    export default {
        name: "App",
        components: {Tabs,Footer}
    }
</script>