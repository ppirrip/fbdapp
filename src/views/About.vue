<template>
  <div class="about">
    <h1>Client Receipt</h1>
    <casino-metamask></casino-metamask>
    <client-receipt></client-receipt>
  </div>
</template>

<script>
import CasinoMetamask from '@/components/Casino-metamask'
import ClientReceipt from '@/components/ClientReceipt'

export default {
  name: 'ClientReceipt-Dapp',
  beforeCreate () {
    console.log('registerWeb3 Action dispatched from casino-dapp.vue')
    this.$store.dispatch('registerWeb3')
  },
    components: {
    'casino-metamask': CasinoMetamask,
    'clientReceipt': ClientReceipt
  },
}
</script>

