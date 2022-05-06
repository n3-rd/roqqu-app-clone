<template>
  <div>
    <q-dialog
      v-model="buyCryptoDialog"
      persistent
      maximized
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card class="bg-grey-3">
        <q-bar
          class="bg-main q-py-xl q-mb-xl"
          style="padding-top: 24px; padding-bottom: 24px; color: #ebecee"
        >
          <q-btn
            dense
            flat
            icon="chevron_left"
            style="font-size: 22px"
            v-close-popup
          />
          <div class="text-weight-bold text-center">Choose Currency</div>
        </q-bar>

        <q-card-section
          class="shadow-4 q-my-xl"
          style="width: 90%; margin: auto; background: #fff"
        >
          <h5 class="text-center text-weight-light">
            Which digital currency do you want to
            <span style="text-transform: lowercase">{{ buyOrSell }}?</span>
          </h5>

          <q-item
            v-for="coin in coinsData"
            :key="coin.name"
            class="q-py-md bordered"
            clickable
            v-ripple
            @click="openIndividualCoinDialog(coin.symbol)"
          >
            <q-item-section top avatar class="avatar">
              <img :src="coin.iconUrl" width="100%" />
            </q-item-section>

            <q-item-section>
              <q-item-label style="font-size: 17px">{{
                coin.symbol
              }}</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon name="chevron_right" color="black" />
            </q-item-section>
          </q-item>
        </q-card-section>
      </q-card>
    </q-dialog>
    <individualCoinDialog />
  </div>
</template>

<script>
import individualCoinDialog from "./individualCoinDialog";

export default {
  components: {
    individualCoinDialog,
  },
  data() {
    return {
      buyCryptoDialog: false,
      coinsData: [],
      buyOrSell: "",
    };
  },
  methods: {
    getCoinsData() {
      fetch(`https://n3rdy-cors-proxy.glitch.me/useproxy?link=https://api.coinranking.com/v2/coins`)
        .then((response) => response.json())
        .then((json) => (this.coinsData = json.data.coins));
    },
    openIndividualCoinDialog: function (coinName) {
      localStorage.setItem("individualcoin", coinName);
      this.$children[1].individualCoinDialog = true;
    },
  },
  created() {
    this.getCoinsData();
  },
  updated() {
    this.buyOrSell = localStorage.getItem("tradeStatus");
  },
};
</script>

<style lang="scss">
.q-item__section--avatar {
  width: min-content !important;
}
</style>
