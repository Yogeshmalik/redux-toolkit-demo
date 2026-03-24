# Redux Learning Journey

A comprehensive exploration of state management in JavaScript, progressing from plain Redux to Redux Toolkit, and finally integrating it with React using modern tooling.

## 📋 Overview

This repository contains three interconnected projects that demonstrate the evolution of Redux and its practical applications:

1. **Redux** - Plain Redux implementation to understand core concepts
2. **RTK** - Redux Toolkit for simplified and modernized Redux development
3. **React-RTK** - Full React application with Redux Toolkit and Vite

### Why This Structure?

While Redux Toolkit (RTK) is the modern standard, understanding plain Redux is crucial for:

- Grasping Redux fundamentals and architecture
- Appreciating the benefits of RTK abstraction
- Better debugging and understanding middleware patterns
- Making informed decisions about state management

## 🏗️ Project Structure

```
redux/
├── redux/              # Plain Redux implementation
├── rtk/                # Redux Toolkit implementation
└── react-rtk/          # React application with Redux Toolkit
```

---

## 📦 Project 1: Redux (Plain Redux)

**Location:** `./redux/`

### Description

Plain Redux implementation demonstrating core Redux concepts without abstractions. This project helps understand how Redux works at its foundation.

### Key Features

- **Manual Action Creators** - Define actions explicitly
- **Reducer Logic** - Switch-case based state updates
- **Store Configuration** - Using `createStore` with middleware
- **Middleware Integration** - Redux Logger for debugging, Redux Thunk for async operations
- **Immer Integration** - Immutable state updates using the `produce` function
- **State Slicing** - Separate reducers for different features (Cake, Ice Cream, User)

### Features Implemented

- 🍰 **Cake Management** - Order and restock cakes
- 🍦 **Ice Cream Management** - Order and restock ice cream
- 👥 **User Async Data** - Fetch users from an API using Redux Thunk

### Technologies

- Redux 5.0.1
- Redux Thunk 3.1.0
- Redux Logger 3.0.6
- Immer 11.1.4
- Axios 1.13.6

### Running

```bash
cd redux
node index.js
```

---

## 🛠️ Project 2: RTK (Redux Toolkit)

**Location:** `./rtk/`

### Description

Redux Toolkit implementation showing how RTK simplifies Redux boilerplate and provides modern best practices. This is the standard approach recommended by Redux maintainers.

### Key Features

- **createSlice API** - Combined action creators and reducers in one function
- **Automatic Immer Support** - Mutative immutable updates by default
- **configureStore** - Pre-configured store with middleware
- **Reduced Boilerplate** - Minimal code compared to plain Redux
- **Built-in DevTools Integration** - Redux DevTools included
- **Better Async Handling** - createAsyncThunk for async operations

### Features Implemented

- 🍰 **Cake Management** - Ordered and restock actions with RTK slices
- 🍦 **Ice Cream Management** - RTK-based ice cream slice
- 👥 **User Async Data** - Fetching users with createAsyncThunk

### Technologies

- @reduxjs/toolkit 2.11.2
- Axios 1.13.6

### Running

```bash
cd rtk
node index.js
```

---

## ⚛️ Project 3: React-RTK

**Location:** `./react-rtk/`

### Description

Complete React application using Redux Toolkit for state management. Built with Vite for fast development and includes React Compiler support for optimal performance.

### Stack

- **Build Tool:** Vite 8.0.1
- **Framework:** React 19.2.4 with React Compiler
- **State Management:** Redux Toolkit 2.11.2
- **Bindings:** React-Redux 9.2.0
- **HTTP Client:** Axios 1.13.6
- **Linting:** ESLint with React plugins

### Key Features

- ⚡ **Vite Build System** - Ultra-fast development and production builds
- 🧠 **React Compiler** - Automatic memoization and optimization
- 🎣 **React-Redux Hooks** - useSelector and useDispatch for component integration
- 📱 **Component Architecture** - Modular feature-based components
- 🔧 **ESLint Configuration** - Maintains code quality standards

### Features Implemented

- **CakeView Component** - Interactive cake ordering with Redux-connected buttons
- **IcecreamView Component** - Ice cream management UI
- **UserView Component** - Display user data fetched from async actions
- **Store Integration** - Redux store configured and connected to React app

### Project Structure

```
react-rtk/
├── src/
│   ├── App.jsx                    # Main application component
│   ├── main.jsx                   # React DOM entry point
│   ├── app/
│   │   └── store.js               # Redux store configuration
│   └── features/
│       ├── cake/
│       │   ├── cakeSlice.js       # Cake reducer and actions
│       │   └── CakeView.jsx       # Cake UI component
│       ├── icecream/
│       │   ├── icecrreamSlice.js  # Ice cream reducer and actions
│       │   └── IcecreamView.jsx   # Ice cream UI component
│       └── user/
│           ├── userSlice.js       # User async data handling
│           └── UserView.jsx       # User display component
├── vite.config.js                 # Vite configuration with React plugin
├── eslint.config.js               # ESLint configuration
├── index.html                     # HTML entry point
└── package.json                   # Dependencies and scripts
```

### Running

```bash
cd react-rtk

# Development server
npm run dev

# Production build
npm run build

# Linting
npm run lint

# Preview production build
npm run preview
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 14.0 or higher
- npm 6.0 or higher

### Installation

```bash
# Clone repository (if using git)
git clone <repository-url>
cd redux

# Each project requires separate installation:

# Redux project
cd redux
npm install
node index.js

# RTK project
cd ../rtk
npm install
node index.js

# React-RTK project
cd ../react-rtk
npm install
npm run dev
```

---

## 📚 Learning Path

1. **Start with Redux** → Understand Redux fundamentals
2. **Move to RTK** → Learn how RTK simplifies Redux
3. **Build with React-RTK** → Integrate into real applications

---

## 🔗 Official Resources

### Redux & State Management

- [Redux Official Docs](https://redux.js.org/)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [React-Redux Hooks API](https://react-redux.js.org/api/hooks)

### React

- [React Documentation](https://react.dev/)
- [React Compiler](https://react.dev/learn/react-compiler)

### Build & Tooling

- [Vite Official Site](https://vitejs.dev/)
- [Vite React Plugin](https://github.com/vitejs/vite-plugin-react)

### Additional Libraries

- [Axios Documentation](https://axios-http.com/)
- [Immer Documentation](https://immerjs.github.io/immer/)
- [ESLint Documentation](https://eslint.org/)

### Follow:

- 🌐 [Yogesh SM Portfolio](https://yogeshmalikportfolio.netlify.app/)
- ✍️ [Yogesh SM Blog](https://medium.com/@ballerbytes)
- 📷 [Yogesh SM Instagram](https://instagram.com/thesixftperspective)

---

## 📖 Key Concepts Covered

### Redux Fundamentals

- Store, Actions, Reducers, Dispatch
- Action Creators
- Middleware (Thunk, Logger)
- Selectors
- Immutable State Updates

### Redux Toolkit Improvements

- createSlice (automatic action creators)
- configureStore (pre-configured middleware)
- createAsyncThunk (async actions)
- Immer integration (mutative updates)
- Redux DevTools support

### React Integration

- React-Redux Provider
- useSelector Hook
- useDispatch Hook
- Component-based state management
- Async data fetching in React

---

## 💡 Best Practices Demonstrated

✅ Modular feature-based structure  
✅ Separation of concerns (reducers, components, utilities)  
✅ Immutable state updates  
✅ Async action handling  
✅ Redux middleware for side effects  
✅ Component composition with hooks  
✅ Code quality with ESLint

---

## 📝 License

ISC

---

## 🤝 Contributing

Feel free to explore, modify, and extend these projects to deepen your Redux understanding!

### Follow:

- 🌐 [Yogesh SM Portfolio](https://yogeshmalikportfolio.netlify.app/)
- ✍️ [Yogesh SM Blog](https://medium.com/@ballerbytes)
- 📷 [Yogesh SM Instagram](https://instagram.com/thesixftperspective)

---

**Happy Learning!** 🎓
