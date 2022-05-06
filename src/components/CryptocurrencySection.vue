<template>
  <div>
    <q-list bordered>
      <q-item
        class="q-my-sm"
        clickable
        v-ripple
        v-for="coin in coinsData"
        :key="coin.name"
      >
        <q-item-section avatar>
          <q-avatar text-color="white">
            <img :src="coin.iconUrl" width="100%" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label :style="{ color: coin.color }">
            {{ coin.symbol }} | $
            {{ coin.price | numeral("0,0.000") }}</q-item-label
          >
          <q-item-label caption lines="1">NGN 5,593</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon name="chevron_right" color="black" />
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      coinsData: [],
      coinsLoaded: false,
    };
  },
  methods: {
    getCoinsData() {
      fetch(`https://n3rdy-cors-proxy.glitch.me/useproxy?link=https://api.coinranking.com/v2/coins`)
        .then((response) => response.json())
        .then((json) => (this.coinsData = json.data.coins));
    },
  },
  created() {
    this.getCoinsData();
    this.coinsLoaded = true;
  },
};
</script>
<style lang="scss">
</style>
