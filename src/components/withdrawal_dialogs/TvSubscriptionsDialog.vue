<template>
  <div>
    <q-dialog
      v-model="tvSubscriptionsDialog"
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
          <div class="text-weight-bold text-center">TV Subscriptions</div>
        </q-bar>

        <q-card-section
          class="shadow-4 q-my-xl"
          style="width: 90%; margin: auto; background: #fff"
        >
          <q-list bordered class="q-my-lg">
            <q-item
              class="q-py-md bordered"
              clickable
              v-ripple
              @click="openTvCompaniesDialog()"
            >
              <q-item-section top avatar>
                <q-icon name="tv" style="color: #2196f3; font-size: 33px" />
              </q-item-section>

              <q-item-section>
                <q-item-label style="font-size: 17px">DSTV</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-icon name="chevron_right" color="black" />
              </q-item-section>
            </q-item>
          </q-list>

          <q-input
            label="Select subscription plan"
            hint="Balance ₦ 98,000"
            disable
          />

          <q-input type="number" label="Smart card number" class="q-py-md" />

          <q-input type="number" label="Phone number" class="q-py-md" />

          <div class="q-my-xl flex justify-center">
            <q-btn
              color="positive"
              padding="10px 60px"
              label="Pay Subscription Now"
              unelevated
            />
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>

    <TvCompaniesDialog />
  </div>
</template>

<script>
import TvCompaniesDialog from "./companies_dialogs/TvCompaniesDialog";

export default {
  components: {
    TvCompaniesDialog,
  },
  data() {
    return {
      tvSubscriptionsDialog: false,
    };
  },
  methods: {
    openTvCompaniesDialog: function () {
      this.$children[1].tvCompaniesDialog = true;
    },
  },
};
</script>

<style lang="scss">
body
  > div:nth-child(7)
  > div.q-dialog__inner.flex.no-pointer-events.q-dialog__inner--maximized.q-dialog__inner--standard.fixed-full.flex-center
  > div
  > div.shadow-4.q-my-xl.q-card__section.q-card__section--vert
  > div.q-py-lg
  > label
  > div
  > div.q-field__bottom.row.items-start.q-field__bottom--animated
  > div
  > div {
  color: #448aff;
}
</style>