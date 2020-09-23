<template>
  <div class="hello">
    <div>Hash: {{ hash }}</div>
    <div>Secret text: {{ secretText }}</div>
    <div>Created at: {{ createdAt }}</div>
    <div>Expires at: {{ expiresAt }}</div>
    <div>Remaining views: {{ remainingViews }}</div>

  </div>
</template>

<script>
export default {
  name: 'GetSecret',
  props: {
    hash: {
      type: String,
      required: false
    },
    secretText: {
      type: String,
      required: false
    },
    createdAt: {
      type: String,
      required: false
    },
    expiresAt: {
      type: String,
      required: false
    },
    remainingViews: {
      type: Number,
      required: false
    },
  }
}
</script>

