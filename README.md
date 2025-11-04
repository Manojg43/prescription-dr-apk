# prescription-dr-apk

React Native application for prescription generation with APK building support. This project ports the logic from [prescription-generator-react](https://github.com/Manojg43/prescription-generator-react) to a mobile-native environment.

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- React Native CLI
- Android Studio (for Android development)
- JDK 11 or higher
- Android SDK

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Manojg43/prescription-dr-apk.git
cd prescription-dr-apk
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Install iOS dependencies (macOS only):
```bash
cd ios && pod install && cd ..
```

### Running the App

#### Android
```bash
npm run android
# or
yarn android
```

#### iOS (macOS only)
```bash
npm run ios
# or
yarn ios
```

## 🔥 Firebase Integration

This project uses Firebase Firestore for real-time database operations to manage patients, treatments, and prescriptions.

### Setup Firebase

1. **Create a Firebase Project**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project or use an existing one
   - Enable Firestore Database

2. **Configure Firebase for Android**
   - In Firebase Console, add an Android app
   - Download `google-services.json`
   - Place it in `android/app/` directory

3. **Configure Firebase for iOS** (macOS only)
   - In Firebase Console, add an iOS app
   - Download `GoogleService-Info.plist`
   - Add it to your iOS project in Xcode

4. **Update Firebase Configuration**
   - Open `src/firebaseConfig.ts`
   - Replace placeholder values with your Firebase project credentials:
```typescript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

### Firebase Usage Examples

#### Initialize Firestore
```typescript
import { db } from './src/firebaseConfig';
```

#### Create/Add Data (Patients)
```typescript
// Add a new patient
const addPatient = async (patientData) => {
  try {
    const docRef = await db.collection('patients').add({
      name: patientData.name,
      age: patientData.age,
      gender: patientData.gender,
      contact: patientData.contact,
      medicalHistory: patientData.medicalHistory,
      createdAt: new Date()
    });
    console.log('Patient added with ID: ', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error adding patient: ', error);
  }
};
```

#### Read Data (Get All Patients)
```typescript
// Get all patients
const getPatients = async () => {
  try {
    const querySnapshot = await db.collection('patients').get();
    const patients = [];
    querySnapshot.forEach((doc) => {
      patients.push({ id: doc.id, ...doc.data() });
    });
    return patients;
  } catch (error) {
    console.error('Error getting patients: ', error);
  }
};
```

#### Update Data (Update Patient)
```typescript
// Update patient information
const updatePatient = async (patientId, updatedData) => {
  try {
    await db.collection('patients').doc(patientId).update(updatedData);
    console.log('Patient updated successfully');
  } catch (error) {
    console.error('Error updating patient: ', error);
  }
};
```

#### Delete Data (Delete Patient)
```typescript
// Delete a patient
const deletePatient = async (patientId) => {
  try {
    await db.collection('patients').doc(patientId).delete();
    console.log('Patient deleted successfully');
  } catch (error) {
    console.error('Error deleting patient: ', error);
  }
};
```

#### Real-time Updates
```typescript
// Listen to real-time updates for patients
const subscribeToPatients = (callback) => {
  const unsubscribe = db.collection('patients')
    .onSnapshot((querySnapshot) => {
      const patients = [];
      querySnapshot.forEach((doc) => {
        patients.push({ id: doc.id, ...doc.data() });
      });
      callback(patients);
    });
  
  // Return unsubscribe function to stop listening
  return unsubscribe;
};
```

#### Create Prescription with Treatment
```typescript
// Add a prescription with treatment details
const addPrescription = async (prescriptionData) => {
  try {
    const docRef = await db.collection('prescriptions').add({
      patientId: prescriptionData.patientId,
      patientName: prescriptionData.patientName,
      diagnosis: prescriptionData.diagnosis,
      medications: prescriptionData.medications, // Array of medication objects
      instructions: prescriptionData.instructions,
      createdAt: new Date(),
      doctorName: prescriptionData.doctorName
    });
    console.log('Prescription created with ID: ', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error creating prescription: ', error);
  }
};
```

### Firestore Collections Structure

```
📁 Firestore Database
├── 📁 patients
│   ├── 📄 patientId1
│   │   ├── name: "John Doe"
│   │   ├── age: 45
│   │   ├── gender: "Male"
│   │   ├── contact: "+1234567890"
│   │   ├── medicalHistory: "..."
│   │   └── createdAt: timestamp
│   └── ...
├── 📁 prescriptions
│   ├── 📄 prescriptionId1
│   │   ├── patientId: "patientId1"
│   │   ├── patientName: "John Doe"
│   │   ├── diagnosis: "..."
│   │   ├── medications: [...]
│   │   ├── instructions: "..."
│   │   ├── createdAt: timestamp
│   │   └── doctorName: "Dr. Smith"
│   └── ...
└── 📁 treatments
    ├── 📄 treatmentId1
    │   ├── patientId: "patientId1"
    │   ├── prescriptionId: "prescriptionId1"
    │   ├── treatmentDetails: "..."
    │   ├── startDate: timestamp
    │   └── endDate: timestamp
    └── ...
```

## 📦 Building APK

### Debug APK

1. Navigate to the android directory:
```bash
cd android
```

2. Build the APK:
```bash
./gradlew assembleDebug
```

3. Find your APK at:
```
android/app/build/outputs/apk/debug/app-debug.apk
```

### Release APK

1. Generate a signing key (first time only):
```bash
keytool -genkeypair -v -storetype PKCS12 -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```

2. Place the keystore file in `android/app/`

3. Create/edit `android/gradle.properties` and add:
```properties
MYAPP_RELEASE_STORE_FILE=my-release-key.keystore
MYAPP_RELEASE_KEY_ALIAS=my-key-alias
MYAPP_RELEASE_STORE_PASSWORD=****
MYAPP_RELEASE_KEY_PASSWORD=****
```

4. Update `android/app/build.gradle`:
```gradle
android {
    ...
    signingConfigs {
        release {
            storeFile file(MYAPP_RELEASE_STORE_FILE)
            storePassword MYAPP_RELEASE_STORE_PASSWORD
            keyAlias MYAPP_RELEASE_KEY_ALIAS
            keyPassword MYAPP_RELEASE_KEY_PASSWORD
        }
    }
    buildTypes {
        release {
            signingConfig signingConfigs.release
            ...
        }
    }
}
```

5. Build the release APK:
```bash
cd android
./gradlew assembleRelease
```

6. Find your release APK at:
```
android/app/build/outputs/apk/release/app-release.apk
```

## 📋 Project Structure

```
prescription-dr-apk/
├── android/              # Android native code
├── ios/                  # iOS native code
├── src/                  # Source code
│   ├── firebaseConfig.ts # Firebase configuration
│   └── ...               # Other source files
├── App.tsx               # Root component
├── package.json          # Dependencies
└── README.md             # This file
```

## 🎯 Roadmap

- [ ] Port business logic and validation
- [ ] Set up navigation between screens
- [ ] Style components for mobile
- [ ] Test on Android devices
- [ ] Test on iOS devices
- [ ] Build and test release APK

## 🛠️ Development

### Available Scripts

- `npm start` - Start Metro bundler
- `npm run android` - Run on Android emulator/device
- `npm run ios` - Run on iOS simulator/device
- `npm test` - Run tests
- `npm run lint` - Run linter

### Testing
```bash
npm test
```

### Debugging

- Press `d` in the terminal to open Developer Menu
- Enable Remote JS Debugging
- Use React Native Debugger or Chrome DevTools

## 📄 License

This project follows the same license as the original prescription-generator-react project.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For issues or questions, please open an issue in the GitHub repository.
