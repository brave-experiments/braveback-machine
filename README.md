# Braveback machine

Brave extension to handle bad responses from pages, allowing users to see an archived version instead, using https://archive.org data.

## What responses is this supposed to work?

```js
  404, 408, 410, 451, 500,
  502, 503, 504, 509, 520,
  521, 523, 524, 525, 526
```

## Usage

1. Go to https://github.com/brave-experiments/braveback-machine/releases/ and look for the latest release.
2. Click the `assets` summary
3. Download `dist.zip`
4. Unzip it somewhere
5. Go to brave://extensions
6. On the top right corner, toggle "developer mode" `on` 
7. On the top left corner, click "load unpacked"
8. Search for the directory where you unzipped this extension
9. Have fun!

## Sample case

1. Go to https://brave.com/bo
2. Check it doesn't exist
3. Now this extension should trigger a custom page
4. Click the big button
5. brave.com/bo page should show

## Spec

https://docs.google.com/document/d/1ioGkGUVmLE0ndfvLRBjDN1d9QtOKeyPOM-33lK0L78k/edit?usp=sharing

## Development

This project is a web extension using webpack. `npm install` after cloning and `npm run dev` to start in `watch` mode. Check package.json scripts for more commands. For manual test plan, follow instructions in [usage](#usage).
