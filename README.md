# Sharda University Fee Calculator

A modern, interactive web application to calculate tuition fees for various programs at Sharda University, featuring an AI-powered career counselor to help students make informed decisions about their education.

![Sharda University Fee Calculator](https://img.shields.io/badge/Status-Active-success)
![React](https://img.shields.io/badge/React-19.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-blue)
![Vite](https://img.shields.io/badge/Vite-6.2.0-purple)

## Features

- **Program Selection**: Choose from a wide range of undergraduate and postgraduate programs
- **GPA-Based Scholarships**: Automatic scholarship calculation based on your academic performance
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Real-time Calculations**: Instant fee breakdown including tuition, hostel, and total costs
- **Modern UI**: Clean, professional interface with smooth user experience
- **Detailed Fee Breakdown**: View year-by-year fee structure with all charges included

## Demo

🌐 **Live Demo**: [https://codermillat.github.io/sharda-university-fee-calculator/](https://codermillat.github.io/sharda-university-fee-calculator/)

## Screenshots

### Main Calculator Interface
![Calculator Screenshot](./screenshot-calculator.png)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/codermillat/sharda-university-fee-calculator.git
cd sharda-university-fee-calculator
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## Usage

### Calculate Fees

1. Select your desired program from the dropdown menu
2. Enter your GPA (optional, for scholarship calculation)
3. View the detailed fee breakdown including:
   - Base tuition fee
   - Applicable scholarship (if any)
   - Hostel charges
   - Total cost
   - Year-by-year breakdown for the entire program duration

## Available Programs

### Undergraduate (B.Tech)
- Computer Science Engineering
- Artificial Intelligence & Machine Learning
- Cyber Security
- Data Science
- Electrical Engineering
- Mechanical Engineering
- Civil Engineering

### Postgraduate (M.Tech)
- Computer Science Engineering
- Artificial Intelligence
- Cyber Security
- Data Science

### Management (BBA/MBA)
- Business Administration
- International Business
- Digital Marketing

### Medical (MBBS)
- Medicine & Surgery

## Scholarship Structure

| GPA Range | Scholarship |
|-----------|-------------|
| 9.0 - 10.0 | 50% |
| 8.0 - 8.9 | 30% |
| 7.0 - 7.9 | 20% |
| 6.0 - 6.9 | 10% |
| Below 6.0 | No scholarship |

## Technology Stack

- **Frontend Framework**: React 19.2.0
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS (via inline styles)
- **Deployment**: GitHub Pages / Vercel

## Project Structure

```
sharda-university-fee-calculator/
├── components/
│   ├── Header.tsx           # App header with logo
│   ├── FeeCalculator.tsx    # Main calculator component
│   ├── CourseSelector.tsx   # Program selection dropdown
│   ├── GpaInput.tsx         # GPA input and scholarship display
│   └── ResultsPanel.tsx     # Fee breakdown display
├── data/
│   └── courses.ts           # Program and fee data
├── public/
│   └── logo.png             # University logo
├── types.ts                 # TypeScript type definitions
├── constants.ts             # App constants
├── App.tsx                  # Main app component
├── index.tsx                # Entry point
└── README.md                # This file
```

## Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Deployment

### Deploy to GitHub Pages

1. Push your code to GitHub:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. Enable GitHub Pages:
   - Go to repository Settings → Pages
   - Source: Select "GitHub Actions"

The site will automatically deploy on every push to main.

### Deploy to Vercel (Recommended)

1. Import your repository on [Vercel](https://vercel.com)
2. Click Deploy

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Future Enhancements

- [ ] Add more programs and specializations
- [ ] Include additional fee components (library fees, activity fees, etc.)
- [ ] Multi-language support (Bengali, Hindi, English)
- [ ] PDF export of fee breakdown
- [ ] Comparison tool for multiple programs
- [ ] Integration with university admission portal
- [ ] Dark mode support
- [ ] Save and share calculations
- [ ] Currency converter (BDT ↔ INR)

## License

This project is open source and available under the [MIT License](LICENSE).

## Disclaimer

This is an unofficial fee calculator. All fee information is indicative and subject to change. For official and final fee structure, please visit the [official Sharda University website](https://www.sharda.ac.in) or contact the admissions office directly.

## Contact

**Developer**: MD Millat Hosen  
**GitHub**: [@codermillat](https://github.com/codermillat)

## Acknowledgments

- Sharda University for inspiration
- React and Vite communities for excellent documentation
- All contributors and users of this application
- Bangladeshi students for their feedback and suggestions

---

⭐ If you find this project helpful, please consider giving it a star on GitHub!

Made with ❤️ to help students make informed educational decisions.
