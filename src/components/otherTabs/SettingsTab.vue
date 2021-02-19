<template>
  <div class="bg-grey-3" style="height: 100vh">
    <div class="bg-grey-3 q-py-lg">
      <q-card-section
        class="q-my-xl"
        style="width: 90%; margin: auto; background: #fff"
      >
        <q-item
          v-for="settingsOption in settingsOptions"
          :key="settingsOption.name"
          v-ripple
        >
          <q-item-section top avatar>
            <q-avatar>
              <q-icon :name="settingsOption.icon" size="md" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ settingsOption.name }}</q-item-label>
            <q-item-label caption>{{
              settingsOption.description
            }}</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-icon name="chevron_right" color="black" />
          </q-item-section>
        </q-item>
      </q-card-section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      settingsOptions: [
        {
          icon: "badge",
          name: "profile",
          description: "manage your profile details",
        },
        {
          icon: "account_balance",
          name: "Accounts",
          description: "Add and remove bank accounts",
        },
        {
          icon: "settings",
          name: "Preferences",
          description: "manage how your account works",
        },
        {
          icon: "security",
          name: "Security",
          description: "Further secure your account and funds",
        },
        {
          icon: "person",
          name: "Verification",
          description: "Secure your Identity to increase limits",
        },
        {
          icon: "link",
          name: "Referals",
          description: "Refer your friends and earn money",
        },
      ],
    };
  },
};
</script>