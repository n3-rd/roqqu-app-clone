<template>
  <div>
    <q-dialog v-model="buyAndSellDialog" position="bottom">
      <q-card>
        <q-card-section class="row items-center no-wrap block bg-grey-3">
          <h6 class="text-center">What would you like to do?</h6>
          <hr />

          <div>
            <q-item
              class="q-my-sm q-py-md bg-grey-1 shadow-1"
              clickable
              v-ripple
              v-close-popup
              @click="openBuyCryptoDialog('Buy')"
            >
              <q-item-section top avatar>
                <q-avatar
                  class="blue-opaque"
                  text-color="primary"
                  icon="shopping_basket"
                />
              </q-item-section>

              <q-item-section>
                <q-item-label class="text-weight-bold"
                  >Instant Buy</q-item-label
                >
                <q-item-label
                  caption
                  lines="1"
                  class="text-h4 text-weight-medium"
                  >Buy and hold digital currencies</q-item-label
                >
              </q-item-section>
            </q-item>
          </div>

          <q-separator spaced inset="item" />
          <br />

          <div>
            <q-item
              class="q-py-md q-mb-xl bg-grey-1 shadow-1"
              clickable
              v-ripple
              v-close-popup
              @click="openBuyCryptoDialog('Sell')"
            >
              <q-item-section top avatar>
                <q-avatar
                  class="blue-opaque"
                  text-color="primary"
                  icon="money"
                />
              </q-item-section>

              <q-item-section>
                <q-item-label class="text-weight-bold"
                  >Instant Sell</q-item-label
                >
                <q-item-label
                  caption
                  lines="1"
                  class="text-h4 text-weight-medium"
                  >Sell your digital currencies for fiat</q-item-label
                >
              </q-item-section>
            </q-item>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>

    <BuyCryptoDialog />
  </div>
</template>

<script>
import BuyCryptoDialog from "./BuyAndSellDialogs/BuyCryptoDialog";

export default {
  components: {
    BuyCryptoDialog,
  },
  data() {
    return {
      buyAndSellDialog: false,
    };
  },
  methods: {
    openBuyCryptoDialog: function (tradeStatus) {
      localStorage.setItem("tradeStatus", tradeStatus);
      this.$children[1].buyCryptoDialog = true;
    },
  },
};
</script>

<style lang="scss">
.blue-opaque {
  background-color: #e3eeff !important;
}
</style>