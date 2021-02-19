<template>
  <div>
    <q-dialog
      v-model="individualCoinDialog"
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
          <div class="text-weight-bold text-center">
            {{ buyOrSell }} {{ individualCoinName }}
          </div>
        </q-bar>

        <q-card-section
          class="shadow-4 q-my-xl"
          style="width: 90%; margin: auto; background: #fff"
        >
          <h5 class="text-center text-weight-light">
            How much would you like to
            <span style="text-transform: lowercase">{{ buyOrSell }}</span>
          </h5>

          <q-input outlined v-model="coinAmount" placeholder="Enter Amount" />
          <div class="text-center q-py-sm" style="color: #448aff">
            Balance NGN 98,000
          </div>

          <div class="q-my-xl flex justify-center">
            <q-btn
              color="primary"
              padding="10px 60px"
              label="proceed with purchase"
              unelevated
            />
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      individualCoinDialog: false,
      buyOrSell: "",
      individualCoinName: "",
      coinAmount: null,
    };
  },
  updated() {
    this.buyOrSell = localStorage.getItem("tradeStatus");
    this.individualCoinName = localStorage.getItem("individualcoin");
  },
};
</script>

<style lang="scss">
input .q-field__native q-placeholder {
  text-align: center !important;
  font-size: 18px;
  font-weight: 300;
}
</style>