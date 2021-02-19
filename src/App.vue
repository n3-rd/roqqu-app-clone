<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-main">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />

        <q-toolbar-title class="text-center">
          Roqqu<small>Clone</small>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <SideDrawer />
    </q-drawer>

    <q-page-container>
      <q-tab-panels
        v-model="tab"
        animated
        keep-alive
        transition-prev="slide-right"
        transition-next="slide-left"
      >
        <q-tab-panel name="overview">
          <MainScreenHeader />
          <CryptocurrencySection />
        </q-tab-panel>

        <q-tab-panel name="wallet">
          <WalletTab />
        </q-tab-panel>

        <q-tab-panel name="transactions">
          <TransactionTab />
        </q-tab-panel>

        <q-tab-panel name="settings">
          <SettingsTab />
        </q-tab-panel>
      </q-tab-panels>
    </q-page-container>

    <q-footer style="background: #fff; color: #1e324e">
      <q-tabs v-model="tab" style="width: 100%" align="justify" shrink>
        <q-tab name="overview" icon="qr_code" label="overview" />
        <q-tab name="wallet" icon="account_balance_wallet" label="wallets" />
        <!-- <q-tab name="wallet" icon="monetization_on" label="savings" /> -->
        <q-tab name="transactions" icon="list" label="transactions" />
        <q-tab name="settings" icon="settings" label="settings" />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script>
import SideDrawer from "./components/SideDrawer";
import MainScreenHeader from "./components/MainScreenHeader";
import CryptocurrencySection from "./components/CryptocurrencySection";
import WalletTab from "./components/otherTabs/WalletTab";
import TransactionTab from "./components/otherTabs/TransactionTab";
import SettingsTab from "./components/otherTabs/SettingsTab";

export default {
  name: "LayoutDefault",

  components: {
    SideDrawer,
    MainScreenHeader,
    CryptocurrencySection,
    WalletTab,
    TransactionTab,
    SettingsTab,
  },

  data() {
    return {
      leftDrawerOpen: false,

      tab: "overview",
    };
  },
};
</script>

<style lang="scss">
* {
  user-select: none;
}
.bg-main {
  background-color: #001a3f !important;
}
.drawer-profile-container {
  .profile-name {
    font-size: 18px;
  }
  .profile-balance {
    font-size: 22px;
  }
  padding: 33px;
  margin: 0;
}
.drawer-list-container {
  .q-select_dialog {
    width: 30% !important;
  }
  .q-item {
    margin-bottom: 22px;
  }
  .list-text {
    font-size: 17px;
    color: #898989;
  }
  padding-left: 20px;
  padding-right: 20px;
}
.q-tab__label {
  text-transform: capitalize;
}
.q-tab-panel {
  padding: 0 !important;
}
</style>
