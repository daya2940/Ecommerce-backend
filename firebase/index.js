import { initializeApp, credential as _credential } from "firebase-admin";

import serviceAccount from "../config/firebaseServiceAccountKey.json";

initializeApp({
  credential: _credential.cert(serviceAccount),
});
