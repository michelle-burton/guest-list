# 🎉 Guest List Form App

[![React](https://img.shields.io/badge/React-18.2-blue?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0-purple?logo=vite)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A dynamic and accessible guest list form built with React and Vite.  
Includes custom form validation via a reusable `useFormValidator` hook.

---

## ✨ Features

- ✅ Controlled form inputs for `name` and `message`
- ✅ Custom `useFormValidator` hook with live validation
- ✅ Inline error messages
- ✅ Form disable state when invalid
- ✅ Guest list rendering with `.map()`
- ✅ Individual "Remove" buttons per guest
- ✅ Clean React component structure

---

## 🔍 Code Highlights

### `useFormValidator.js`
A reusable hook that handles:
- `values` and `errors` state
- Real-time validation using a user-supplied function
- Boolean `isValid` flag
- Controlled input handling

### `GuestInput.jsx`
Main form logic:
- Handles form submission and validation
- Stores guest list array in state
- Passes list to a child `<GuestList />` component

### `GuestList.jsx`
Displays the list of guests with a remove button for each entry.

---

## 📸 Preview

```jsx
👤 Michelle: "Excited to celebrate!"  [Remove]
👤 Sam: "Bringing snacks!"            [Remove]
`

---



## 👩‍💻 Author

- Made with 💻 + ☕ by Michelle Burton
- www.michelle-burton.com