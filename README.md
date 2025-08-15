# Password Manager

## Overview

**Password Manager** is a simple, privacy-friendly web application built with React that allows users to manage and store their passwords locally in their browser. No passwords are sent to a server; all data is saved in `localStorage`. The UI is styled with TailwindCSS and includes interactive Lordicon icons.

---

## Features

- **Add Passwords:** Enter site URL, username, and password to store a new credential.
- **Edit/Delete Passwords:** Easily update or remove stored passwords.
- **Show/Hide Passwords:** Toggle password visibility using an eye icon.
- **Copy to Clipboard:** Click icons to copy site, username, or password.
- **Persistent Storage:** All passwords are stored locally in the browser using `localStorage`.
- **Responsive UI:** Mobile-friendly design, styled with TailwindCSS.

---

## Quick Start

1. **Install dependencies:**
   ```
   cd Frontend-Password-Manager
   npm install
   ```
2. **Run the app:**
   ```
   npm run dev
   ```
   The app will launch in your browser (default: `http://localhost:5173`).

---

## Project Structure

```
Frontend-Password-Manager/
├── src/
│   ├── components/
│   │   ├── Manager.jsx      # Main password manager logic and UI
│   │   ├── Navbar.jsx       # Top navigation bar
│   │   ├── Footer.jsx       # Footer
│   ├── App.jsx              # App root, combines components
│   ├── main.jsx             # Entry point (ReactDOM)
│   ├── index.css            # TailwindCSS + custom styles
├── index.html               # Main HTML file
├── vite.config.js           # Vite configuration
├── eslint.config.js         # Linting rules
```

---

## Core Logic

### Manager.jsx

- **State management:** Uses React `useState` to store form input and password array.
- **Initialization:** On mount, loads passwords from `localStorage`.
- **Add/Edit/Delete:** 
  - Adds new password if all fields are filled.
  - Edits by updating the form and removing the old entry.
  - Deletes after user confirmation.
- **UI table:** Displays all passwords with options to copy or perform actions.
- **Password visibility:** Controlled by toggling input type and eye icon.

### Example UI Flow

1. Enter site, username, password in the form.
2. Click "Add Password" (validated for min length).
3. Password appears in the table.
4. Use icons to copy, edit, or delete entries.
5. Data persists across page reloads via `localStorage`.

---

## Tech Stack

- **React** (JSX, hooks)
- **TailwindCSS** (utility-first styling)
- **Vite** (build tool)
- **Lordicon** (animated icons)
- **react-toastify** (toast notifications)
- **uuid** (unique IDs for entries)

---

## Security & Privacy

- Passwords are **never sent to a server**—they remain in your browser.
- **Note:** LocalStorage is not encrypted. Use this app for demonstration and local utility only.

---

## Credits

Created by Wahaj.  
Footer: "Created with ❤️ by Wahaj"

---

## License

MIT License (see LICENSE file).
