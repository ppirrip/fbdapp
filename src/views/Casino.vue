<template>
    <div>
        Casino!
        <casino-metamask></casino-metamask>
        <casino-component></casino-component>
    </div>
</template>

<script>
import CasinoMetamask from '@/components/Casino-metamask'
import CasinoComponent from '@/components/Casino-component'

export default {
    name: 'Casino-DApp',
    beforeCreate () {
        console.log('registerWeb3 Action dispatched from casino-dapp.vue')
        this.$store.dispatch('registerWeb3')
    },
    components: {
        'casino-metamask': CasinoMetamask,
        'casino-component': CasinoComponent
    },
    props: [

    ],
    data () {
        return {

        }
    }    
}
</script>

<style>
.container {
 padding-right: 15px;
 padding-left: 15px;
 margin-right: auto;
 margin-left: auto;
}
@media (min-width: 768px) {
 .container {
 width: 750px;
 }
}
</style>
