# Expense Tracker

A simple and intuitive React application for tracking personal expenses. Add new expenses, view them chronologically, and visualize spending patterns with integrated charts.

## Features

- **Add Expenses**: Easily record new expenses with title, amount, and date
- **Filter by Year**: View expenses from specific years
- **Visual Charts**: See expense distribution visualized with bar charts
- **Clean UI**: Responsive and user-friendly interface
- **Dynamic Updates**: Real-time expense list updates

## Technologies Used

- **React 18** - UI library
- **CSS** - Styling
- **React Hooks** - State management with useState

## Project Structure

```
src/
├── components/
│   ├── Chart/           # Chart visualization components
│   ├── Expenses/        # Main expense management components
│   ├── NewExpense/      # Form for adding new expenses
│   └── UI/              # Reusable UI components
├── App.js              # Main application component
└── index.js            # Entry point
```

## Getting Started

### Installation

```bash
npm install
```

### Running the Application

```bash
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000).

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## How to Use

1. **Add an Expense**: Click on the form to enter a title, amount, and date, then submit
2. **Filter Expenses**: Use the year filter to view expenses from a specific year
3. **View Spending**: Check the chart to visualize your spending patterns across months

## Available Scripts

- `npm start` - Run the app in development mode
- `npm test` - Launch the test runner
- `npm run build` - Build the app for production
- `npm run eject` - Eject from Create React App (irreversible)

## Future Enhancements

- Local storage persistence
- Export expenses to CSV
- Expense categories
- Budget limits and alerts
- Mobile app version
