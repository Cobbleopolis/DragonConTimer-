<template>
    <div>
        <navbar></navbar>
        <b-container tag="main">
            <socket-status></socket-status>
            <transition name="fade">
                <router-view></router-view>
            </transition>
        </b-container>
    </div>
</template>

<script>
    import Navbar from './components/Navbar.vue'
    import SocketStatus from './components/SocketStatus.vue'

    export default {
        name: 'app',
        components: {
            Navbar,
            SocketStatus
        }
    };
</script>

<style lang="sass">
    @import 'styles/main'
    @import '~bootstrap/scss/bootstrap'
    @import '~bootstrap-vue/dist/bootstrap-vue'

    main
        margin-top: $navbar-brand-height + ($navbar-padding-y * 2) + .5rem

    .fade-enter-active, .fade-leave-active
        transition-property: opacity
        transition-duration: .25s

    .fade-enter-active
        transition-delay: .25s

    .fade-enter, .fade-leave-active
        opacity: 0
</style>