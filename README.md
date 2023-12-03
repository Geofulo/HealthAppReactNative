# Summary
Small Wellness App to showcase my **React Native** skills.

# Project details

## Framework
- Create custom `hooks` with `useEffect` and `useState`.
- Create my own [HealthKit](https://developer.apple.com/documentation/healthkit) service for **iOS** using [`Native Modules`](https://reactnative.dev/docs/native-modules-intro).
- Consume `REST API` endpoints with [Fetch API](https://reactnative.dev/docs/network) provided by **React Native**.
- Use `TypeScript` and `JavaScript`.

## UI
- Use `createBottomTabNavigator` from [React Navigation](https://reactnavigation.org/docs/getting-started).
- Handle lists with [`SectionList`](https://reactnative.dev/docs/sectionlist) component.


## 

# Run the App
## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of the React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start the Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start the _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see the app running in your _Android Emulator_ or _iOS Simulator_.
