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

3. Create `android/gradle.properties` with:
```properties
MYAPP_RELEASE_STORE_FILE=my-release-key.keystore
MYAPP_RELEASE_KEY_ALIAS=my-key-alias
MYAPP_RELEASE_STORE_PASSWORD=*****
MYAPP_RELEASE_KEY_PASSWORD=*****
```

4. Build the release APK:
```bash
cd android
./gradlew assembleRelease
```

5. Find your release APK at:
```
android/app/build/outputs/apk/release/app-release.apk
```

## 📱 Project Structure

```
prescription-dr-apk/
├── android/                 # Android native code
├── ios/                     # iOS native code
├── src/
│   ├── components/          # Reusable UI components
│   ├── screens/             # App screens
│   ├── navigation/          # Navigation configuration
│   ├── services/            # API and business logic
│   ├── utils/               # Helper functions
│   ├── assets/              # Images, fonts, etc.
│   └── App.tsx              # Main app component
├── __tests__/               # Test files
├── package.json
└── README.md
```

## 🔄 Porting from React Web App

This project is designed to port functionality from the original [prescription-generator-react](https://github.com/Manojg43/prescription-generator-react) web application.

### Key Differences

1. **UI Components**: Replace React DOM components with React Native components
   - `<div>` → `<View>`
   - `<span>`, `<p>` → `<Text>`
   - `<input>` → `<TextInput>`
   - `<button>` → `<TouchableOpacity>` or `<Button>`

2. **Styling**: Use StyleSheet API instead of CSS
   ```javascript
   import { StyleSheet } from 'react-native';
   
   const styles = StyleSheet.create({
     container: {
       flex: 1,
       padding: 20,
     }
   });
   ```

3. **Navigation**: Use React Navigation instead of React Router

4. **Storage**: Replace localStorage with AsyncStorage

5. **PDF Generation**: Use react-native-pdf or similar libraries

6. **Printing**: Use react-native-print for mobile printing

### Migration Checklist

- [ ] Set up React Native project structure
- [ ] Port prescription form components
- [ ] Implement data persistence (AsyncStorage)
- [ ] Add PDF generation functionality
- [ ] Implement printing capabilities
- [ ] Add camera integration for signatures
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
