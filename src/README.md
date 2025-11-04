# Source Directory Structure

This directory contains the main source code for the React Native application.

## Directory Organization

```
src/
├── components/       # Reusable UI components
│   ├── common/      # Common shared components
│   └── prescription/ # Prescription-specific components
├── screens/         # Screen components
│   ├── HomeScreen.tsx
│   ├── PrescriptionFormScreen.tsx
│   ├── PrescriptionListScreen.tsx
│   └── PrescriptionViewScreen.tsx
├── navigation/      # Navigation configuration
│   └── AppNavigator.tsx
├── services/        # Business logic and API services
│   ├── PrescriptionService.ts
│   ├── StorageService.ts
│   └── PDFService.ts
├── utils/           # Helper functions and utilities
│   ├── validators.ts
│   ├── formatters.ts
│   └── constants.ts
├── assets/          # Static assets
│   ├── images/
│   ├── fonts/
│   └── icons/
├── types/           # TypeScript type definitions
│   └── index.ts
└── App.tsx          # Main app component (in root)
```

## Getting Started

1. **Components**: Start by creating reusable components in `components/`
2. **Screens**: Build your screen components in `screens/`
3. **Navigation**: Configure navigation in `navigation/`
4. **Services**: Implement business logic in `services/`
5. **Utils**: Add helper functions in `utils/`

## Porting from React Web App

When porting components from the original React web application:

1. Replace HTML elements with React Native components
2. Convert CSS styles to React Native StyleSheet
3. Replace `localStorage` with `AsyncStorage`
4. Use React Navigation instead of React Router
5. Adapt form components to React Native inputs
6. Use `react-native-print` for printing functionality
7. Use `react-native-pdf` or similar for PDF generation

## Best Practices

- Keep components small and focused
- Use TypeScript for type safety
- Follow React Native best practices
- Test components thoroughly
- Use meaningful file and folder names
- Document complex logic
- Keep business logic separate from UI components
