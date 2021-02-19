<template>
  <div>
    <q-card class="bg-grey-3 q-py-lg">
      <q-card-section
        class="shadow-4"
        style="width: 90%; margin: auto; background: #fff"
      >
        <h6 class="q-py-sm" style="margin: 0">Wallet Addresses</h6>
        <q-separator />

        <p class="q-py-md text-weight-regular" style="font-size: 14px">
          Wallet allows you to organise your funds into categories like spending
          and savings
        </p>

        <div
          class="wallet-item q-my-lg"
          v-for="coinWalletData in coinsData"
          :key="coinWalletData.name"
        >
          <q-card>
            <q-card-section horizontal>
              <q-card-section class="q-pt-xs">
                <!-- <div class="text-overline">Overline</div> -->
                <div
                  class="text-h5 q-mt-sm q-mb-xs"
                  :style="{ color: coinWalletData.color }"
                >
                  {{ coinWalletData.name }} Wallet
                </div>
                <div class="text-caption text-grey">
                  Balance
                  <div class="text-h6 text-weight-medium">0 BTC</div>
                </div>
                <div class="text-caption text-grey">
                  Total Received
                  <div class="text-h6 text-weight-medium">0 BTC</div>
                </div>
              </q-card-section>
            </q-card-section>
          </q-card>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      coinsData: [],
    };
  },
  methods: {
    getCoinsData() {
      fetch(`https://api.coinranking.com/v1/public/coins`)
        .then((response) => response.json())
        .then((json) => (this.coinsData = json.data.coins));
    },
  },
  created() {
    this.getCoinsData();
    this.coinsLoaded = true;
  },
};
</script>

<style lang="scss">
.wallet-item {
  border-radius: 6px;
}
</style>