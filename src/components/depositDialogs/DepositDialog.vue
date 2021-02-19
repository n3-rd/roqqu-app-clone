<template>
  <div>
    <q-dialog
      v-model="depositDialog"
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
          <div class="text-weight-bold text-center">Enter Amount</div>
        </q-bar>

        <h6 class="text-center text-weight-light">
          How much do you want to deposit?
        </h6>

        <div class="q-my-lg q-px-xs" style="width: 87%; margin: 0 auto">
          <div class="row">
            <div class="col-5">
              <q-input outlined v-model="inputNGN" placeholder="NGN" />
            </div>

            <div
              class="col-2 vertical-middle"
              style="text-align: center; align-self: center"
            >
              =
            </div>

            <div class="col-5">
              <q-input outlined v-model="inputUSD" placeholder="USD" />
            </div>
          </div>
        </div>

        <div class="q-my-xl">
          <q-card-section
            class="shadow-1 q-my-xl"
            style="width: 90%; margin: auto; background: #fff"
          >
            <q-toggle v-model="toggle" label="Include fees in calculation" />
          </q-card-section>

          <div class="text-center q-py-sm">
            Maximum is 1,000,000 and minimum is 500
          </div>
        </div>

        <div class="q-my-xl flex justify-center">
          <q-btn
            color="primary"
            padding="10px 60px"
            label="proceed with deposit"
            unelevated
          />
        </div>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      depositDialog: false,
      inputNGN: "",
      inputUSD: "",
      toggle: false,
    };
  },
};
</script>

<style lang="sass">
</style>