<template>
  <div>
    <q-dialog
      v-model="electricityBillsDialog"
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
          <div class="text-weight-bold text-center">Electricity Bills</div>
        </q-bar>

        <q-card-section
          class="shadow-4 q-my-xl"
          style="width: 90%; margin: auto; background: #fff"
        >
          <q-list bordered>
            <q-item
              class="q-py-md bordered"
              clickable
              v-ripple
              @click="openElectricityCompaniesDialog()"
            >
              <q-item-section top avatar>
                <q-icon
                  name="light_bulb_outline"
                  style="color: #2196f3; font-size: 33px"
                />
              </q-item-section>

              <q-item-section>
                <q-item-label style="font-size: 17px"
                  >Eko Electricity</q-item-label
                >
              </q-item-section>
              <q-item-section side>
                <q-icon name="chevron_right" color="black" />
              </q-item-section>
            </q-item>
          </q-list>

          <q-select
            square
            label="Select Meter Type"
            :options="meterType"
            v-model="meterTypeValue"
            class="q-py-md"
          />

          <q-input type="number" label="Meter Number" class="q-py-md" />
          <q-input
            type="number"
            label="Enter Amount"
            hint="Balance: NGN 98,000"
            class="q-py-md"
          />

          <div class="q-my-xl flex justify-center">
            <q-btn
              color="positive"
              padding="10px 60px"
              label="Buy Power Now"
              unelevated
            />
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>

    <ElectricityCompaniesDIalog />
  </div>
</template>

<script>
import ElectricityCompaniesDIalog from "./companies_dialogs/ElectricityCompaniesDIalog";

export default {
  components: {
    ElectricityCompaniesDIalog,
  },
  data() {
    return {
      electricityBillsDialog: false,
      meterTypeValue: "",
      meterType: ["prepaid", "postpaid"],
    };
  },
  methods: {
    openElectricityCompaniesDialog: function () {
      this.$children[1].electricityCompaniesDialog = true;
    },
  },
};
</script>

<style lang="scss">
body
  > div.q-dialog.fullscreen.no-pointer-events.q-dialog--modal
  > div.q-dialog__inner.flex.no-pointer-events.q-dialog__inner--maximized.q-dialog__inner--standard.fixed-full.flex-center
  > div
  > div.shadow-4.q-my-xl.q-card__section.q-card__section--vert
  > label.q-field.q-validation-component.row.no-wrap.items-start.q-py-md.q-input.q-field--standard.q-field--labeled.q-field--with-bottom
  > div
  > div.q-field__bottom.row.items-start.q-field__bottom--animated
  > div
  > div {
  color: #448aff;
}
</style>