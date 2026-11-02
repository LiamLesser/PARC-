# PARC

Philadelphia Amateur Radio Club (PARC) dashboard and member portal for the W3PHL community.

Live demo: https://liamlesser.github.io/PARC-/

## Overview

PARC is a responsive, single-page web app designed for an amateur radio club experience. It presents club information, activity, repeater data, net schedules, EchoLink details, upcoming events, member highlights, and community resources in a clean dashboard layout.

The site serves as a modern front-end for the PARC club presence and gives visitors a quick way to explore:

- club dashboard and status
- repeater and operating information
- EchoLink connectivity details
- weekly net schedules
- upcoming events and activities
- member and officer information
- club documentation and resource links

## Features

- Dashboard landing page with club stats and activity feed
- EchoLink section with node and call sign information
- Repeater directory covering frequency, tone, location, and status
- Net and schedule view for weekly training and operating events
- Event cards for club gatherings and public activities
- Member roster and officer profiles
- Resource hub for learning, operating, and club docs
- Sign-in and registration pages for member access flows

## Tech Stack

- HTML5
- CSS3
- JavaScript
- Vite

## Project Structure

- `index.html` — main PARC app shell and tabbed content
- `parc.css` — complete styling for the dashboard interface
- `main.js` — tab switching and navigation behavior
- `login.html` — sign-in screen
- `register.html` — registration screen
- `auth.js` — authentication-related logic
- `package.json` — project scripts and dependencies

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open the local URL provided by Vite in the terminal or preview panel.

## Production Build

To build the project for deployment:

```bash
npm run build
```

## Deployment

This project is published to GitHub Pages and is currently available at:

https://liamlesser.github.io/PARC-/

## Notes

This is a front-end club portal and informational dashboard focused on presenting PARC operations and community details in a polished, accessible format. It is designed to be easy to extend with additional real club data, member systems, or API-backed features in the future.
