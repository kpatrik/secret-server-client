<template>
  <div class="hello">
    <h1>Retrieve your secret</h1>
    <input v-model="hash" placeholder="hash">
    <button v-on:click="onRetrive">Retrieve secret</button>

    <Response
      :hash="respHash"
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
  name: 'GetSecret',
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
    onRetrive() {
      SecretServerClient.getSecret(this.hash).then((response) => {
        const resp = response.data;
        this.respHash=resp.hash
        this.secretText=resp.secretText
        this.createdAt=resp.createdAt
        this.expiresAt=resp.expiresAt
        this.remainingViews=resp.remainingViews
      });

    }
  }
}
</script>

