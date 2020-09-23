<template>
  <div class="hello">
    <h1>Create your secret</h1>
    <input v-model="secret" placeholder="secret">
    <input v-model="expireAfterViews" placeholder="expires after views">
    <input v-model="expireAfter" placeholder="expires after minutes">

    <button v-on:click="onCreate">Create secret</button>

    <Response
      :hash="hash"
      :secretText="secretText"
      :createdAt="createdAt"
      :expiresAt="expiresAt"
      :remainingViews="remainingViews"></Response>
  </div>
</template>

<script>
import { SecretServerClient } from '../lib/clients/secret-server-client';
import Response from './Reponse.vue';

export default {
  name: 'CreateSecret',
  components: {
    Response
  },
  data() {
    return {
      secret: '',
      expireAfterViews: null,
      expireAfter: null,
      hash: '',
      secretText: '',
      createdAt: '',
      expiresAt: '',
      remainingViews: null,
    }
  },
  methods: {
    onCreate() {
      SecretServerClient.postSecret(this.secret, parseInt(this.expireAfterViews), parseInt(this.expireAfter)).then((response) => {
        const resp = response.data;
        this.hash=resp.hash
        this.secretText=resp.secretText
        this.createdAt=resp.createdAt
        this.expiresAt=resp.expiresAt
        this.remainingViews=resp.remainingViews
      });

    }
  }
}
</script>

<style>
  input {
    margin: 5px;
  }
</style>

