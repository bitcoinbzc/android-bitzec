# Bitzec Mobile

Bitzec mobile app built using Onsen UI, Redux, React and Webpack.


Use node v6.15.1

## Setup instructions

```
npm install -g yarn cordova
git clone https://github.com/bitzec/android-bitzec
cd android-bitzec
git checkout master
yarn install
cordova plugin add cordova-plugin-qrscanner@2.6.0 cordova-plugin-file@4.3.3 cordova-plugin-http@1.2.0 cordova-clipboard@1.3.0 cordova-plugin-inappbrowser@1.7.2 cordova-plugin-device@1.1.7 cordova-plugin-wkwebview-engine@1.1.4 cordova-plugin-whitelist@1.3.3 cordova-plugin-statusbar@2.4.2 cordova-plugin-google-analytics@1.8.3

```

## Android
Requires Android SDK (Recommend Full Studio) and Oracle Java to be installed
```
cordova platform add android@6.2.3
cordova run android
```
# Generate a Signed APK
```
cordova build --release android
zipalign -v 4 <Example-release-unsigned.apk> <Example.apk>
apksigner sign --ks <keystorename> <Example.apk>
```
## iOS
Requies XCode to be installed
```
cordova plugin add cordova-plugin-splashscreen cordova-plugin-disable-ios11-statusbar
cordova platform add ios
cordova run ios
```
### iOS FAQ

1. Icons

Icons are a bit of a bitch to setup for iOS. Make sure you've added the ios platform to cordova, and copy the folder `./assets/img/ios/AppIcon.appiconset` to `./platforms/ios/ZEN\ Wallet/Images.xcassets`. Remove the folder `AppIcon.appiconset` if it exists in `./platforms/ios/ZEN\ Wallet/Images.xcassets`.

2. `.ipa` files (using it on a real iPhone)

```
1: Change scheme destination to Generic IOS device.

2: Click Product > Archive > once this is complete open up the Organiser and click the latest version.

3: Click on Export... option from right side of organiser window.

4: Select a method for export > Choose correct signing > Save to Destination.
```

2.1 Adding account to sign for the app

```
1. Xcode -> Preferences -> Account -> sign in with your apple id
2. https://i.stack.imgur.com/w4SlR.gif
```

# Contributors
[Cryptoforge](http://github.com/Cryptoforge/)

[lutsifer](http://github.com/lutsifer/)

[kendricktan](http://github.com/kendricktan/)

[alexanderzabuga](https://github.com/alexanderzabuga)

[kevinah95](https://github.com/kevinah95)

[afucher](https://github.com/afucher)

[andyvh](https://github.com/andyvh)

[darkavenger](https://github.com/darkavenger)

[emhaye](https://github.com/emhaye)

[simoneddeland](https://github.com/simoneddeland)

[dropnib](https://github.com/dropnib)

[rubyxroot](https://github.com/rubyxroot)

[berar](https://github.com/berar)
