# 🍕 Food Ordering App

A modern and responsive **online food ordering system** built with **React** and **Tailwind CSS**, featuring a clean user experience, dark/light mode toggle, and admin functionality.

---

## 🚀 Features

- 🍽️ Browse restaurants & menus
- 🛒 Add to cart and checkout
- 🔍 Filter and search by cuisine, rating, dietary options  
- 🌓 Dark/Light Mode toggle
- 📱 Fully responsive design  
- 🧑‍💼 Admin panel for managing items *(frontend only)*   
- ✅ Order confirmation page with summary
-  ⚙️ Sidebar filters for cuisine, dietary, and delivery options

---

## 🏗️ Project Structure

src/
├── api/ # API call helpers (e.g., fetchMenu)
├── app/ # Redux store config (e.g., store.js)
├── assets/ # Images, icons, logos, etc.
├── components/ # Reusable UI components (Header, Filters, Cards)
├── context/ # Theme or global state providers(Light/Dark)
├── features/ # Redux slices (cartSlice)
├── layout/ # Layout wrappers (User Layout, Admin Layout etc.)
├── pages/ # Page components (Home, MenuPage, Checkout, etc.)
├── styles/ # Tailwind or global styles
├── utils/ # Utility/helper functions
├── App.jsx # Root component with routes and layout
└── main.jsx # Entry point that renders <App />



## 🛠️ Tech Stack

- React.js
- Redux Toolkit
- React Router DOM
- Tailwind CSS
- Lucide Icons
-- **Vite** (for fast dev/build)       

---

## 📦 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/food-order-app.git
cd food-order-app

# Install dependencies
npm install

# Start the development server
npm run dev
 ```       

## 🧪 Testing

- ✅ Manually tested on desktop and mobile devices.
- ✅ Checked responsiveness and theme toggling (Dark/Light Mode).
- ✅ Verified cart operations, checkout flow, and order confirmation page.
- ✅ Sidebar filter interactions work correctly  
-  ❗No automated tests implemented in this version 

## 🌐 Deployment

To build the production version:

```bash
npm run build

You can then deploy the `dist/` folder using platforms like **Netlify**, **Vercel**, or **Firebase Hosting**. 

## 🧠 Future Improvements

- 🔐 Add user authentication  
- 🔗 Integrate backend API for real-time orders and payments
- 🧑‍💼 Secure admin login with full CRUD operations 
- ⭐ Add product reviews and star ratings 
- 📦 Add support for multiple vendors/restaurants 

---

## 👩‍💻 Author

**Haima Santhosh**  
GitHub: [@your-github-username](https://github.com/Haima-Santhosh)  

