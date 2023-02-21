<template>
  <q-layout>
    <q-page-container>
      <q-page padding>
        <q-card class="my-card">
          <q-card-section>
            <div class="text-h6">Username: test</div>
            <div class="text-subtitle2">Password: test</div>
          </q-card-section>
          <q-card-section>
            <q-form
              ref="loginForm"
              @submit="onSubmit"
              @reset="onReset"
              class="q-gutter-md"
            >
              <q-input v-model="username" type="text" label="Username" />
              <q-input v-model="password" type="password" label="Password" />
              <div>
                <q-btn label="Submit" type="submit" color="primary" />
                <q-btn
                  label="Reset"
                  type="reset"
                  color="primary"
                  flat
                  class="q-ml-sm"
                />
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useAuthStore } from "src/stores/auth.store";

const authStore = useAuthStore();
const username = ref("test");
const password = ref("test");
const loginForm = ref();

const onReset = () => {};

const onSubmit = async () => {
  await authStore.login(username.value, password.value);
};
onMounted(() => {});
</script>
