import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { EnvironmentProviders } from '@angular/core';
import { environment } from '../environments/environment';


const firebaseProviders: EnvironmentProviders = provideFirebaseApp(() =>
  initializeApp(
    environment.firebase
  ),
  provideFirestore(() => getFirestore())
)

export {firebaseProviders};
