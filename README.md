# 📦 Firebase SPA E-commerce App

A full-featured Single Page Application (SPA) built using **React** and **Firebase**, with secure authentication, email verification, cart functionality, admin-only access, and responsive UI for product listings.

---

## 🛠️ Tech Stack

- **Frontend:** React 18, React Router DOM 6
- **Authentication:** Firebase Auth (Email/Password + Email Verification)
- **Database:** Firestore (for products & optional cart storage)
- **State Management:** React Context API
- **Hosting (optional):** Vercel / Firebase Hosting

---

## ✨ Features

### 🔐 Authentication
- Sign up with email & password
- Email verification on sign up
- Login only after verification
- Admin-only access to `/admin` route (based on UID)

### 🛒 E-Commerce Functionality
- Public product listing on homepage
- Add products to cart
- View cart with total price
- Optional: Persist cart per user in Firestore

### 🧑‍💼 Admin Panel
- Secured admin dashboard (requires UID match)
- Shows admin-only content

### 🧑‍💻 UI Enhancements
- Clean, minimal design with Flexbox layout
- Reusable components: Navbar, Cart
- Responsive layout (mobile-friendly)

---

## 🔍 Current App State Summary

| Feature                  | Current Behavior                                              |
|--------------------------|----------------------------------------------------------------|
| 🛍️ View Products         | Public — anyone can see all products on `/`                   |
| 🛒 Add to Cart            | Public — works without login, stored in React state only       |
| 🛒 View Cart              | Public — accessible to anyone, even without login              |
| 🔐 Sign Up / Login        | Creates account and verifies email, not yet enforced elsewhere |
| 🛡️ Admin Page (`/admin`) | Protected by hardcoded `ADMIN_UID`                             |

---

## 🚀 Setup Instructions

### 1. 📦 Clone the Repository
```bash
git clone https://github.com/yourusername/firebase-spa-ecommerce.git
cd firebase-spa-ecommerce
```

### 2. 📁 Install Dependencies
```bash
npm install
```

### 3. 🔥 Firebase Setup
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Add a web app
4. Copy Firebase config and replace in `src/firebase.js`:
```js
const firebaseConfig = {
  apiKey: '...',
  authDomain: '...',
  projectId: '...',
  storageBucket: '...',
  messagingSenderId: '...',
  appId: '...'
};
```
5. Enable **Email/Password Authentication** in **Auth > Sign-in Method**
6. Create Firestore collection `products` with sample document:
```json
{
  "name": "iPhone 15",
  "price": 899
}
```
7. Copy your admin UID from Firebase Auth and paste it in `Admin.js`:
```js
const ADMIN_UID = "your_admin_uid_here";
```

### 4. ▶️ Start the App
```bash
npm start
```
Visit: [http://localhost:3000](http://localhost:3000)

---

## 📁 Folder Structure
```
project/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   └── Cart.js
│   ├── context/
│   │   ├── AuthContext.js
│   │   └── CartContext.js
│   ├── pages/
│   │   ├── Signup.js
│   │   ├── Login.js
│   │   ├── Home.js
│   │   └── Admin.js
│   ├── firebase.js
│   ├── App.js
│   └── index.js
└── package.json
```

---

## ✅ Future Enhancements
- Enforce login for Add to Cart / View Cart
- Save cart data per user in Firestore
- Implement checkout & order confirmation
- Add product image support
- Show logged-in user in navbar
- Toast notifications for better UX

---

