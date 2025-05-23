<div align="center"><h1><img width="56" alt="" src="https://raw.githubusercontent.com/borisdiakur/skibidi/main/icons/icon.svg"> <div>Skibidi</div></h1><p>Browser extension for skipping adds on YouTube.</p>
</div>

### Installation

#### Chromium based browsers

1. Download the source code of this repository.
2. In your browser go to [chrome://extensions/](chrome://extensions/) or [vivaldi://extensions/](vivaldi://extensions/) or use the `Cmd/Ctrl Shift E` shortcut.
3. Enable the "Developer Mode".
4. Click the "Load Unpacked" button.
5. Select the directory of the downloaded extension.

#### Firefox and similar

1. Download the source code of this repository.
2. Run `mkdir -p build && cp -r src build/src && cp -r icons build/icons && cp manifest-ff.json build/manifest.json && cd build && zip -r -FS ../skibidi.zip *` inside the project root directory (on Windows you'll have to figure this one out by yourself).
3. In your browser go to [about:config](about:config).
4. Search for `xpinstall.signatures.required` and set it to `false`.
5. Go to [about:addons](about:addons).
6. Click the gearwheel and then on "Install Add-on From File".
7. Select the `skibidi.zip` file in the project root directory.
8. In the plugin settings, make sure the setting "Access your data for all websites" is enabled.

### How it works

The extension simply opens a new page with an iframe that is the embed version of the video you want to see, which (until now, in most cases) does not show any ads.
