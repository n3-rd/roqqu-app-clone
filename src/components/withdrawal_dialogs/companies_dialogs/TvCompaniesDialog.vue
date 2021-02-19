<template>
  <div>
    <q-dialog v-model="tvCompaniesDialog" position="bottom">
      <q-card>
        <q-card-section class="row items-center no-wrap block bg-grey-3">
          <h6 class="text-center text-weight-light">Select TV Service</h6>
          <hr />

          <div>
            <q-item
              class="q-py-md q-mb-md bg-grey-1 shadow-1"
              clickable
              v-ripple
            >
              <q-item-section top avatar>
                <q-avatar class="blue-opaque" text-color="primary" icon="tv" />
              </q-item-section>

              <q-item-section>
                <q-item-label class="text-weight-medium">DSTV</q-item-label>
              </q-item-section>
            </q-item>
          </div>

          <div>
            <q-item
              class="q-py-md q-mb-md bg-grey-1 shadow-1"
              clickable
              v-ripple
            >
              <q-item-section top avatar>
                <q-avatar class="blue-opaque" text-color="primary" icon="tv" />
              </q-item-section>

              <q-item-section>
                <q-item-label class="text-weight-medium">GOTV</q-item-label>
              </q-item-section>
            </q-item>
          </div>

          <div>
            <q-item
              class="q-py-md q-mb-xl bg-grey-1 shadow-1"
              clickable
              v-ripple
            >
              <q-item-section top avatar>
                <q-avatar class="blue-opaque" text-color="primary" icon="tv" />
              </q-item-section>

              <q-item-section>
                <q-item-label class="text-weight-medium"
                  >Startimes</q-item-label
                >
              </q-item-section>
            </q-item>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tvCompaniesDialog: false,
    };
  },
};
</script>

<style lang="scss">
</style>