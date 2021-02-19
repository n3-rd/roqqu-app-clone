<template>
  <q-dialog
    v-model="dataRechargeDialog"
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
        <div class="text-weight-bold text-center">Buy data</div>
      </q-bar>

      <q-card-section
        class="shadow-4 q-my-xl"
        style="width: 90%; margin: auto; background: #fff"
      >
        <q-input
          bottom-slots
          v-model="dataPhoneNumber"
          label="Phone number"
          counter
          maxlength="11"
        >
          <template v-slot:append>
            <q-btn round dense flat icon="contacts" color="primary" />
          </template>
        </q-input>

        <div class="row q-my-lg">
          <div class="col">
            <q-icon
              name="sim_card"
              style="font-size: 53px; text-align: center; color: #10487f"
            />
          </div>
          <div class="col">
            <q-icon
              name="sim_card"
              style="font-size: 53px; text-align: center; color: #10487f"
            />
          </div>
          <div class="col">
            <q-icon
              name="sim_card"
              style="font-size: 53px; text-align: center; color: #10487f"
            />
          </div>
          <div class="col">
            <q-icon
              name="sim_card"
              style="font-size: 53px; text-align: center; color: #10487f"
            />
          </div>
        </div>

        <q-input
          v-model="dataRechargeAmount"
          label="Select data bundle"
          hint="Balance ₦ 98,000"
          disable
        />

        <div class="q-my-xl flex justify-center">
          <q-btn
            color="positive"
            padding="10px 60px"
            label="Buy Data Now"
            unelevated
          />
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  data() {
    return {
      dataRechargeDialog: false,
      dataPhoneNumber: null,
      dataRechargeAmount: null,
    };
  },
};
</script>

<style lang="scss">
body
  > div:nth-child(7)
  > div.q-dialog__inner.flex.no-pointer-events.q-dialog__inner--maximized.q-dialog__inner--standard.fixed-full.flex-center
  > div
  > div.shadow-4.q-my-xl.q-card__section.q-card__section--vert
  > label:nth-child(3)
  > div
  > div.q-field__bottom.row.items-start.q-field__bottom--animated
  > div {
  color: #448aff;
}
</style>