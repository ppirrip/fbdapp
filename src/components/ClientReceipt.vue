<template>
    <div>
        <button v-on:click="depositCB">Deposit</button>
        {{returns}}
    </div>
</template>

<script>
import Web3 from 'web3'
import {address, ABI} from '../util/constants/clientReceipt'

export default {
    name: 'client-receipt',
    data () {
        return {
            returns: null,
            from: null,
            id: null,
            value: null
        }
    },
    methods: {
        depositCB () {
            console.log('desposit callback')
            let web3 = new Web3(window.web3.currentProvider)
            let contract = web3.eth.contract(ABI)
            let contractInstance = contract.at(address)

            contractInstance.deposit('hello', {
                gas: 30000,
                value: this.$store.state.web3.web3Instance().toWei(this.amount, 'ether'),
                from: this.$store.state.web3.coinbase
            }, (err, result) => {
                if (err) {
                    console.log(err)
                    this.pending = false
                } else {
                    console.log(`result: ${result}`)
                }
            })
            let Deposit = contractInstance.Deposit()
            Deposit.watch( (err, result) => {
                console.log('Watching ...')
                if (err) {
                    console.log('could not get event Won()')
                } else {
                    this.returns = result.args
                    // this.winEvent._amount = parseInt(result.args._amount, 10)
                    // this.pending = false
                }
            })

        }
    }
}
</script>

<style>

</style>
