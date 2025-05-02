# Career Pathways: Post +2 Education Guide

An interactive React application that helps students explore career options after completing their +2 education (higher secondary). The website presents career paths in an interactive mind map/graph format, allowing students to navigate through different educational and career possibilities.

## Features

- Interactive mind map visualization of career pathways
- Six main educational domains:
  - Technology
  - Medicine
  - Commerce and Management
  - Social Science and Humanities
  - Pure Science
  - Abroad Studies
- Click-based navigation to reveal related options within each domain
- Responsive design for accessibility across devices
- Detailed information about educational requirements and career possibilities

## Tech Stack

- **Frontend Framework**: React with TypeScript
- **Build Tool**: Vite
- **Styling**: SCSS
- **State Management**: React Context API
- **Visualization Library**: D3.js for the mind map
- **Routing**: React Router

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v7.0.0 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd career-pathways
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173` to see the application.

## Project Structure

```
career-pathways/
├── public/
├── src/
│   ├── components/      # Reusable UI components
│   ├── context/         # React Context for state management
│   ├── data/            # Data files
│   ├── pages/           # Page components
│   ├── styles/          # SCSS styles
│   ├── types/           # TypeScript type definitions
│   ├── App.tsx          # Main App component
│   └── main.tsx         # Entry point
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Usage

1. When you first open the application, you'll see a mind map visualization and a list of career domains.
2. Click on a domain either in the list or in the mind map to view more information about that domain.
3. If a domain has subdomains, you can click on them to explore specific career paths and educational requirements.
4. Each subdomain provides detailed information about:
   - Career options
   - Required educational qualifications
   - Specialized areas of study
   - Advanced research opportunities

## Development

### Building for Production

To build the application for production, run:

```bash
npm run build
```

This will generate optimized static files in the `dist` directory.

### Deployment

The built application is completely static and can be deployed to any static file hosting service like Netlify, Vercel, GitHub Pages, etc.

## Future Enhancements

- Search functionality for specific careers
- Comparison tool for different educational paths
- Stories/testimonials from professionals in different fields
- Self-assessment tools to recommend suitable career paths

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Data and information about career paths are based on research and educational resources.
- The D3.js library is used for visualization.
- React framework and related libraries for the UI.
