<template>
  <div>
    <q-dialog
      v-model="bankWithdrawalDialog"
      persistent
      maximized
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card class="bg-grey-3">
        <q-bar
          class="bg-main 1-py-xl"
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

        <h6 class="text-center text-weight-regular">
          How much do you want to withdraw?
        </h6>

        <div style="width: 77%; margin: auto; text-align: center">
          <q-input
            :input-style="{ textAlign: 'center' }"
            v-model="bankWithdrawalAmount"
            mask="₦ #,### ###.00 #"
            hint="NGN 3"
            placeholder="Amount"
          />
          <div class="q-py-sm text-weight-light">
            Maximum is 2,000,000 and minimum is 500
          </div>
        </div>

        <div class="q-my-lg flex justify-center">
          <q-btn
            color="primary"
            padding="10px lg"
            label="proceed with withdrawal"
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
      bankWithdrawalDialog: false,
      bankWithdrawalAmount: null,
    };
  },
};
</script>


<style lang="scss">
body
  > div.q-dialog.fullscreen.no-pointer-events.q-dialog--modal
  > div.q-dialog__inner.flex.no-pointer-events.q-dialog__inner--maximized.q-dialog__inner--standard.fixed-full.flex-center
  > div
  > div:nth-child(3)
  > label
  > div
  > div.q-field__bottom.row.items-start.q-field__bottom--animated
  > div
  > div {
  text-align: center !important;
  font-size: 13px;
  color: #448aff;
}
</style>