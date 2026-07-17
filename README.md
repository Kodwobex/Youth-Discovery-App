# 🌟 Youth Purpose Discovery App

An interactive web application that helps young people explore their strengths, values, and potential career paths through a guided self-discovery journey.

## 🎯 Features

- **Interactive 4-Step Journey**
  - 💪 Strengths Assessment
  - 💎 Values Identification
  - 🌱 Interests Exploration
  - ✍️ Childhood Dreams Reflection

- **Personalized Results**
  - Purpose Statement
  - Top Career Matches with Compatibility Scores
  - Concrete Next Steps

- **Fully Interactive UI**
  - Tag selection/deselection
  - Real-time progress tracking
  - Restart capability

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Kodwobex/Youth-Discovery-App.git
cd Youth-Discovery-App

# Install dependencies
npm install

# Start the development server
npm start
```

The app will open at `http://localhost:3000`

## 📁 Project Structure

```
Youth-Discovery-App/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── StepOne.jsx         # Strengths assessment
│   │   ├── StepTwo.jsx         # Values identification
│   │   ├── StepThree.jsx       # Interests exploration
│   │   ├── StepFour.jsx        # Childhood dreams reflection
│   │   └── Results.jsx         # Purpose results display
│   ├── App.jsx
│   ├── App.css
│   └── index.js
├── package.json
├── README.md
└── .gitignore
```

## 🎨 How It Works

1. **User selects tags** from each of the 4 discovery steps
2. **App analyzes selections** against career database
3. **Generates personalized insights** including:
   - Purpose statement based on selections
   - Career recommendations with match percentages
   - Actionable next steps

## 🛠️ Tech Stack

- **Frontend**: React 18+
- **Styling**: CSS3
- **State Management**: React Hooks
- **Build Tool**: Create React App

## 📚 Available Scripts

```bash
npm start       # Run development server
npm test        # Run tests
npm build       # Build for production
npm eject       # Eject from CRA (irreversible)
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Create a feature branch (`git checkout -b feature/AmazingFeature`)
2. Commit changes (`git commit -m 'Add AmazingFeature'`)
3. Push to branch (`git push origin feature/AmazingFeature`)
4. Open a Pull Request

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Support

For questions or suggestions, please open an issue on GitHub.
