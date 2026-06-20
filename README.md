# 🎯 Expense Tracker App

A simple Expense Tracker mobile application built with **React Native (Expo)**.  
The app allows users to manage their daily expenses by adding, editing, and deleting items, with a clean and simple UI.

---

## 🚀 Features

- 🧾 Add new expenses  
- ✏️ Edit existing expenses  
- 🗑️ Delete expenses  
- 📊 View expenses (Recent & All Expenses)  
- 🔄 Real-time UI updates  
- 📱 Simple and clean mobile interface  
- 🧭 Smooth navigation using Expo Router  

---

## 🧠 State Management

The app uses **React Context API** for global state management.

- All expenses are stored in Context state  
- Actions include add, update, and delete expense  
- UI automatically updates when state changes  

This approach was chosen because the project is small/medium scale, and Context API is sufficient without introducing Redux complexity.

---

## 🔄 Data Flow

User action (Add / Edit / Delete Expense)  
→ Context API updates global state  
→ State change triggers re-render  
→ UI reflects updated data instantly  

---

## 📱 Screens

- Recent Expenses Screen  
- All Expenses Screen  
- Manage Expense Screen (Add / Edit)  

Navigation is handled using **Expo Router**.

---

## 🛠️ Technologies Used

- React Native  
- Expo  
- Expo Router  
- React Context API  
- Expo Vector Icons  
- React Hooks (useState, useEffect, useLayoutEffect)

---

## ⚙️ Implementation Details

- **FlatList** used for efficient rendering of expense lists  
- **useLayoutEffect** used to configure navigation header before screen render  
- **keyExtractor** used with unique IDs for optimized list rendering  
- Input validation implemented (empty values, invalid numbers)  
- Local state + Context API used for managing application data  

---

## 💡 Summary

This project demonstrates real-world React Native concepts such as:

- CRUD operations (Create, Read, Update, Delete)  
- Global state management with Context API  
- Navigation using Expo Router  
- Performance optimization using FlatList  
- Clean component-based architecture  

---

## 🚀 Future Improvements

- AsyncStorage or backend integration for data persistence  
- Expense categories and filtering  
- Charts and analytics  
- Authentication system  
- Cloud sync (Firebase / Supabase)
