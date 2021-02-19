<template>
  <div>
    <q-dialog
      v-model="withdrawalDialog"
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
          <div class="text-weight-bold text-center">Withdrawals</div>
        </q-bar>

        <q-card-section class="q-pt-none">
          <h4 class="text-center">Choose an option to continue</h4>
        </q-card-section>

        <q-card class="shadow-4" style="width: 90%; margin: auto">
          <q-card-section>
            <q-list separator>
              <q-item
                class="q-py-md bordered"
                clickable
                v-ripple
                @click="openBankWithdrawalDialog()"
              >
                <q-item-section top avatar>
                  <q-icon
                    name="account_balance"
                    style="color: #4caf50; font-size: 33px"
                  />
                </q-item-section>

                <q-item-section>
                  <q-item-label style="font-size: 17px"
                    >Withdraw to bank account</q-item-label
                  >
                </q-item-section>
              </q-item>

              <q-item
                class="q-py-md bordered"
                clickable
                v-ripple
                @click="openAirtimeRechargeDialog()"
              >
                <q-item-section top avatar>
                  <q-icon
                    name="phone_iphone"
                    style="color: #9c27b0; font-size: 33px"
                  />
                </q-item-section>

                <q-item-section>
                  <q-item-label style="font-size: 17px"
                    >Airtime recharge</q-item-label
                  >
                </q-item-section>
                <q-item-section side>
                  <q-icon name="chevron_right" color="black" />
                </q-item-section>
              </q-item>

              <q-item
                class="q-py-md bordered"
                clickable
                v-ripple
                @click="openDataRechargeDialog()"
              >
                <q-item-section top avatar>
                  <q-icon name="wifi" style="color: #2196f3; font-size: 33px" />
                </q-item-section>

                <q-item-section>
                  <q-item-label style="font-size: 17px">Buy data</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-icon name="chevron_right" color="black" />
                </q-item-section>
              </q-item>

              <q-item
                class="q-py-md bordered"
                clickable
                v-ripple
                @click="openElectricityBillsDialog()"
              >
                <q-item-section top avatar>
                  <q-icon
                    name="power"
                    style="color: #ff9800; font-size: 33px"
                  />
                </q-item-section>

                <q-item-section>
                  <q-item-label style="font-size: 17px"
                    >Electricity bills</q-item-label
                  >
                </q-item-section>
                <q-item-section side>
                  <q-icon name="chevron_right" color="black" />
                </q-item-section>
              </q-item>

              <q-item
                class="q-py-md bordered"
                clickable
                v-ripple
                @click="openTvSubscriptionsDialog()"
              >
                <q-item-section top avatar>
                  <q-icon name="tv" style="color: #2196f3; font-size: 33px" />
                </q-item-section>

                <q-item-section>
                  <q-item-label style="font-size: 17px"
                    >TV subscription</q-item-label
                  >
                </q-item-section>
                <q-item-section side>
                  <q-icon name="chevron_right" color="black" />
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
      </q-card>
    </q-dialog>

    <WithdrawToBankDialog />
    <AirtimeRechargeDialog />
    <DataRechargeDialog />
    <ElelctricityBillsDialog />
    <TvSubscriptionsDialog />
  </div>
</template>

<script>
import WithdrawToBankDialog from "./withdrawal_dialogs/WithdrawToBankDialog";
import AirtimeRechargeDialog from "./withdrawal_dialogs/AirtimeRechargeDialog";
import DataRechargeDialog from "./withdrawal_dialogs/DataRechargeDialog";
import ElelctricityBillsDialog from "./withdrawal_dialogs/ElelctricityBillsDialog";
import TvSubscriptionsDialog from "./withdrawal_dialogs/TvSubscriptionsDialog";
export default {
  components: {
    WithdrawToBankDialog,
    AirtimeRechargeDialog,
    DataRechargeDialog,
    ElelctricityBillsDialog,
    TvSubscriptionsDialog,
  },
  data() {
    return {
      withdrawalDialog: false,
    };
  },
  methods: {
    openBankWithdrawalDialog: function () {
      this.$children[1].bankWithdrawalDialog = true;
    },
    openAirtimeRechargeDialog: function () {
      this.$children[2].airtimeRechargeDialog = true;
    },
    openDataRechargeDialog: function () {
      this.$children[3].dataRechargeDialog = true;
    },
    openElectricityBillsDialog: function () {
      this.$children[4].electricityBillsDialog = true;
    },
    openTvSubscriptionsDialog: function () {
      this.$children[5].tvSubscriptionsDialog = true;
    },
  },
};
</script>