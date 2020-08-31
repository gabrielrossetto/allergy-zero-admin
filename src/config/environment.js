var environments = {
  staging: {
    FIREBASE_API_KEY: 'AAAABfPA6Zw:APA91bHHF5Zdlhubsde9pK7kHh-ofzAhsu-OD3bnR500MAiHjWok-oLWLEbZY12Dm3QkLHuyUky17pVMzO_idvsn-JR_hYagmHV5yejf6sbbC4_9aMIrZs4jnbJDPI5nsZCiHjAaGBQT',
    FIREBASE_AUTH_DOMAIN: 'allergy-zero.firebaseapp.com',
    FIREBASE_DATABASE_URL: 'https://allergy-zero.firebaseio.com',
    FIREBASE_PROJECT_ID: 'allergy-zero',
    FIREBASE_STORAGE_BUCKET: 'allergy-zero.appspot.com',
    FIREBASE_MESSAGING_SENDER_ID: 'XXXX',
    GOOGLE_CLOUD_VISION_API_KEY: 'AIzaSyDsfFe6dY_C6mYW4tK0wLf-6i_UtOsgGjQ'
  },
  production: {
    // Warning: This file still gets included in your native binary and is not a secure way to store secrets if you build for the app stores. Details: https://github.com/expo/expo/issues/83
  }
};

function getEnvironment(env) {
  console.log('Release Channel: ', 'staging');
  return environments[env];
}
var Environment = getEnvironment('staging');
export default Environment;