<template>
  <div class='metamask-info'>
    <p v-if="isInjected" id="has-metamask"><i aria-hidden="true" class="fa fa-check"></i> Metamask installed</p>
    <p v-else id="no-metamask"><i aria-hidden="true" class="fa fa-times"></i> Metamask not found</p>
    <p>Network: {{ network }}</p>
    <p>Account: {{ coinbase }}</p>
    <p>Balance: {{ balance }} Wei / {{ balance   / 1000000000000000000}} Eth</p>
  </div>
</template>

<script>
import {NETWORKS} from '../util/constants/networks'
import {mapState} from 'vuex'

export default {
    name: 'Casino-Metamask',
    props: [

    ],
    computed: mapState({
        isInjected: state => state.web3.isInjected,
        network: state => NETWORKS[state.web3.networkId],
        coinbase: state => state.web3.coinbase,
        balance: state => state.web3.balance
    }),
    /*{
        web3 () {
            return this.$store.state.web3
        }
    },*/
    data () {
        return {

        }
    }    
}
</script>

<style scoped>
#has-metamask {
  color: green;
}
#no-metamask {
  color:red;
}</style>