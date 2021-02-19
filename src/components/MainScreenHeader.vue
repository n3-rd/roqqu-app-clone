<template>
  <div width="100%" class="bg-main main-screen-header">
    <div class="your-balance">
      Your Balance
      <div class="balance">NGN 98,000</div>
    </div>

    <div class="main-screen-header-actions">
      <q-btn-group push dense flat>
        <q-btn
          align="between"
          color="grey-1"
          padding="md"
          @click="openDepositDialog"
          ><span class="text-center"
            ><q-icon class="icon" name="download" />Deposit</span
          ></q-btn
        >

        <q-btn
          align="between"
          color="grey-1"
          padding="md"
          @click="openBuyAndSellDialog"
          ><span class="text-center"
            ><q-icon class="icon" name="money" />Buy/Sell</span
          ></q-btn
        >

        <q-btn
          align="between"
          color="grey-1"
          padding="md"
          @click="openWithdrawalDialog"
          ><span class="text-center"
            ><q-icon class="icon" name="account_balance" />Withdraw</span
          ></q-btn
        >
      </q-btn-group>
    </div>

    <DepositDialog />
    <BuyAndSellDialog />
    <WithdrawalDialog />
  </div>
</template>
<script>
import DepositDialog from "./depositDialogs/DepositDialog";
import BuyAndSellDialog from "./BuyAndSellDialog";
import WithdrawalDialog from "./WithdrawalDialog";

export default {
  components: {
    DepositDialog,
    BuyAndSellDialog,
    WithdrawalDialog,
  },
  methods: {
    openDepositDialog: function () {
      this.$children[1].depositDialog = true;
    },
    openBuyAndSellDialog: function () {
      this.$children[2].buyAndSellDialog = true;
    },
    openWithdrawalDialog: function () {
      this.$children[3].withdrawalDialog = true;
    },
  },
};
</script>
<style lang="scss">
.main-screen-header {
  padding: 38px;
  .balance {
    font-size: 35px;
  }
}
.main-screen-header-actions {
  .q-btn-group {
    button {
      .icon {
        text-align: center;
        font-size: 21px;
      }
      width: 100%;
      font-size: 11px;
      margin: 22px 0 22px 0;
      color: #1976d2 !important;
      font-weight: 800;
      text-transform: capitalize;
    }
    width: 100%;
  }
  width: 100%;
  margin: auto;
}
.your-balance {
  text-align: center;
  font-size: 15px;
  color: #fff;
}
@media (min-width: 1439px) {
  .main-screen-header-actions {
    .q-btn-group {
      button {
        width: 100%;
        font-size: 11px;
      }
      width: 100%;
    }
    width: 80%;
    margin: auto;
    color: #1976d2 !important;
  }
}
</style>