# td-app
This is the new app base for the technology and science students reception. It's written in react-native and typescript.

## Important notice
As this repository is public, secrets needed for database authentication and release signing has been removed.

Furthermore, the firebase project that this app is reliant on is not maintained and unaccessable from the app.

As such, firebase communications may not work.

Long term, the app could possibly move to a UTN-hosted Parse backend. https://docs.parseplatform.org/parse-server/guide/
This would alleviate the storage issues, but it still uses Firebase Cloud Messaging and Apple Push Notification Service
under the hood, so firebase will still likely be needed.

*Long story short, the app is not runnable at the moment.*

## How to install
1. Follow the react-native guide to installing the needed programs (found [here]https://reactnative.dev/docs/environment-setup), skipping the parts on "Creating a new application".

2. Clone the repository

```bash
git clone https://github.com/UTNkar/td-app-2020.git
```

3. Enter the repository

```bash
cd td-app-2020
```

4. Install depencies

```bash
npm install
```

## How to run
When inside the repository, run

```bash
npx react-native run-X
```

where X is either `android` or `ios`.

## How to run tests
Make sure you've installed jest through `npm install`

```bash
npm run test
```

### Known problems.
#### run-X is stuck on "Starting server" or "Loading depency graph"

Try starting the server by itself and then the app:

```bash
npx react-native start &

# ... wait until the server stops saying stuff ...

npx react-native run-X
```

#### Can't find jdk-etc etc etc
You likely have the wrong java version installed, react-native expects a certain version of java.

#### Windows: "Can't connect to development server"
Open a separate terminal, `cd` into the working repository and start the server separately by entering `npx react-native start`

#### npm screams about missing peer depencies
Ignore this as long as the app works.

#### Errors about "can't find path", "can't find directory", "can't open ..." etc.
Go into the android folder and run clean the android files
```bash
cd android
./gradlew clean # or just 'gradlew clean' on windows
```
and then rerun:
```bash
npx react-native run-android
```

#### "No online devices" due to the android emulator not actually starting.
Run a cold boot of the device by choosing the "Cold Boot" option in Android Studio
