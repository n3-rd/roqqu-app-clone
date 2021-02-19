<template>
  <div>
    <div class="bg-main drawer-profile-container">
      <div class="text-center">
        <q-icon
          name="perm_identity"
          class="text-grey-1"
          style="font-size: 4rem; font-weight: 400"
        />
      </div>
      <div class="profile-name text-center text-grey-1">Godwin Jemegah</div>
      <div class="profile-balance text-center text-grey-1">
        {{ primaryCurrency }} 98,000
      </div>
    </div>
    <div class="drawer-list-container">
      <div
        style="
          font-size: 20px;
          font-weight: 400;
          color: #c2c0c1;
          padding-top: 33px;
        "
      >
        Primary currency
      </div>
      <q-select
        square
        outlined
        :options="currencyOptions"
        v-model="primaryCurrency"
      />

      <q-list style="margin-top: 22px">
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon
              name="help_outline"
              style="color: #898989; font-size: 27px"
            />
          </q-item-section>

          <q-item-section class="list-text">Help</q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="info" style="color: #898989; font-size: 27px" />
          </q-item-section>

          <q-item-section class="list-text"
            >About Roqqu</q-item-section
          > </q-item
        ><q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="input" style="color: #898989; font-size: 27px" />
          </q-item-section>

          <q-item-section class="list-text">Sign out</q-item-section> </q-item
        ><q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="paid" style="color: #898989; font-size: 27px" />
          </q-item-section>

          <q-item-section class="list-text"
            >Fees & Limits</q-item-section
          > </q-item
        ><q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="poll" style="color: #898989; font-size: 27px" />
          </q-item-section>

          <q-item-section class="list-text">Terms of use</q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="security" style="color: #898989; font-size: 27px" />
          </q-item-section>

          <q-item-section class="list-text">Privacy Policy</q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      primaryCurrency: "NGN",
      currencyOptions: ["NGN", "USD"],
    };
  },
};
</script>

<style lang="sass">
</style>