# Frutiger Aero Workspace 13.0

A new desktop-style generation built from scratch as a separate experience from the existing 12.x workspace.

## Start

Requires Node.js 20 or newer.

```bash
npm start
```

Open `http://localhost:3000`. The health endpoint is `/health`. You can also open `index.html` directly in a modern browser, although a local server is recommended for audio and storage consistency.

## Included

- Five recovered wallpaper atmospheres (Frutiger Aero, Eco, DORfic, Aqua, and Metro) plus Four Colors, Helvetica Aqua Aero, Frutiger Aurora, Frutiger Glacier, and Frutiger Festive visual variants
- Four original supplied wallpaper files, kept byte-for-byte unchanged; the Metro SVG is a hand-authored approximation of the remembered pink/purple subwoofer-and-stars design because the original Metro wallpaper file was not present in the available Library assets
- Recovered supplied icon artwork. The original image files are retained in `assets/originals`; transparent PNG derivatives are used in the desktop so only edge-connected background pixels are removed, not icon artwork
- Macintosh-style startup with Finder artwork, animated fans, original startup MP3, and a Times New Roman “Welcome to the 2000s.” greeting that fades in after startup audio begins
- Guest entry, local display-name profile, custom local profile picture, draggable desktop shortcuts, glossy movable windows, Start menu, taskbar, and live clock
- Personalization: wallpaper selection, glass transparency, icon sizing, text sizing, high contrast, reduced motion, and MSN desktop buddy toggle
- Screensavers: automatic idle launch, current-theme or manual-theme selection, floating glass orbs, and clock mode
- Aero Media Player for local audio files and a separate ten-track Aero Playlist with original generated music
- Aero Dash with ten levels and one original music track per level
- Aquarium Classic (ten progressive levels), Timed, and Endless modes with red hazards and a feeding quest
- Bubble Pop Blitz with bubble-pop sound and shared Victory / Game Over presentation
- Photo Gallery, Fan Art Gallery, Sticky Notes, Recycle Bin with note restore, Notification Center, Calendar, city-based Weather Gadget, System Information, draggable Aero Globe, General Chat, Community link panel, and AeroVice City coastal drive with local soundtrack picker

## Storage and privacy

Workspace preferences, display name, desktop icon positions, sticky notes, reminders, local chat messages, profile picture, custom startup audio, and community invite URL are stored in this browser on this device. Imported photos, music, and fan art are read locally and are not uploaded. Some gallery imports are session-only to avoid filling browser storage.

## Important scope notes

The Community and General Chat panels are local-only in this standalone package. They do not include a hosted multiplayer/community backend. The desktop buddy is a decorative MSN-style companion, not a connected AI service. The games are self-contained local mini-games, not a replacement for any server-backed game services from the earlier workspace.

Four of the five remembered background files were recovered from the project Library and included unchanged. The original Metro upload could not be located in the available assets, so a vector approximation is supplied and clearly named `metro-original.svg` rather than presenting it as the original upload.
