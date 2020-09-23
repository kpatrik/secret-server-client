import axios from 'axios';

export class SecretServerClient {
  static async postSecret(secret, expireAfterViews, expireAfter) {
    return await axios.post('http://localhost:3010/api/secret', {
      secret, expireAfterViews, expireAfter
    }).catch((error) => {
      alert(error);
    })
  }

  static async getSecret(hash) {
    return await axios.get(`http://localhost:3010/api/secret/${hash}`).catch((error) => {
      alert(error);
    });
  }
}

