# Sharda University Fee Calculator

[![Live Demo](https.://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=vercel)](https://sharda-university-fee-calculator.vercel.app/)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2-purple?style=for-the-badge&logo=vite)](https://vitejs.dev/)

A modern, user-friendly fee calculator for prospective students of Sharda University. This tool provides a detailed, year-wise fee breakdown for any course, displaying all available scholarship options simultaneously.

## 🌐 Live Application

**Visit the live demo:** [https://sharda-university-fee-calculator.vercel.app/](https://sharda-university-fee-calculator.vercel.app/)

---

## ✨ Features

- **Searchable Course Selector**: Instantly find any course by searching its title, ID, or school.
- **All Scholarship Options Displayed**: For a selected course, view fee breakdowns for *all* applicable scholarship percentages, plus a "No Scholarship" option.
- **Detailed Year-Wise Breakdown**: Each panel shows a clear, year-by-year calculation of tuition, scholarship deductions, mandatory fees, and yearly totals.
- **Copy to Clipboard**: A dedicated "Copy" button on each scholarship panel formats the entire fee structure into a clean, WhatsApp-friendly text block.
- **Accurate & Transparent**: Calculations are based on the latest fee data, including specific mandatory fees for the first vs. subsequent years.
- **Responsive Design**: Fully functional and easy to use on mobile, tablet, and desktop devices.
- **Modern Tech Stack**: Built with React, TypeScript, and Vite for a fast and reliable experience.

## 🖼️ Screenshot

*A new screenshot/GIF will be added here showing the course search and multi-panel breakdown.*

---

## 📖 How to Use

1.  **Search for a Course**: Start typing the name of the course you're interested in (e.g., "B.Tech CSE", "MBBS"). The list will filter as you type.
2.  **Select the Course**: Click on the desired course from the search results, or use the arrow keys and press Enter.
3.  **View Fee Breakdowns**: The page will display separate panels for "No Scholarship" and every scholarship percentage the course is eligible for (e.g., 50%, 20%).
4.  **Copy a Breakdown**: Click the **Copy** button on any panel. The full, detailed fee structure for that specific option will be copied to your clipboard, ready to be pasted into a message or document. A confirmation toast will appear.

---

## 💻 For Developers

### How to Run Locally

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/codermillat/sharda-university-fee-calculator.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd sharda-university-fee-calculator
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Run the development server:**
    ```bash
    npm start # This is an alias for 'npm run dev'
    ```
    The application will be available at `http://localhost:5173`.

### Project Structure

```
sharda-university-fee-calculator/
├── src/
│   ├── components/          # React components
│   │   ├── CourseSearch.tsx
│   │   ├── ScholarshipPanel.tsx
│   │   └── FeeCalculator.tsx  # Main component
│   ├── data/
│   │   ├── courses.ts       # Course data and fee structures
│   │   └── fees.ts          # Mandatory fee constants
│   ├── utils/
│   │   └── calcFees.ts      # Core calculation logic
│   ├── types.ts             # TypeScript type definitions
│   └── App.tsx              # Root component
├── public/
├── index.html
└── README.md
```

### Data Schema (`src/data/courses.ts`)

The course data is managed in a single file with a clear schema. To add or update a course, edit this file following the `Course` interface.

```typescript
export interface Course {
  id: string; // Unique identifier (e.g., "btech-cse")
  title: string; // Full name of the course
  group: string; // The school or department (e.g., "SSET")
  durationYears: number; // Course duration in years
  years: number[]; // Array of tuition fees, one for each year
  scholarships: number[]; // Array of available scholarship percentages (e.g., [50, 20])
  notes?: string; // Optional notes
}

// Example:
{
  id: "btech-cse",
  title: "B.Tech. Computer Science & Engineering (CSE)",
  group: "SSET",
  durationYears: 4,
  years: [270000, 278100, 286443, 295036],
  scholarships: [50, 20],
}
```

---

## ⚠️ Disclaimer

This is an **unofficial calculator** created to help students estimate costs. All fees are indicative and subject to change. For official and final fee structures, please refer to the official Sharda University website.

## 📄 License

This project is licensed under the MIT License.
