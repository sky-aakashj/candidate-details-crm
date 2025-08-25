# Candidate Details Page

## Project Overview

This project implements a candidate details page for a recruitment CRM system based on the Figma wireframe. The application is built using React with TypeScript, Redux for state management, and vanilla CSS for styling.

## Technical Stack

- **Library**: React 18
- **Language**: TypeScript
- **State Management**: Redux (Legacy createStore)
- **Styling**: Vanilla CSS
- **Icons**: Boxicons
- **UI Components**: Custom components

## Project Structure

\`\`\`
├── src/
│ ├── App.tsx # main component
├── components/
│ ├── Header # Top navigation header
│ ├── LeftNavigation # Dark blue sidebar navigation
│ ├── CandidateProfile # Main candidate details component
│ └── EditModal # Edit candidate modal dialog
|
|\_\_ Page/ # calling all components here
├── store/
│ └── candidateStore.ts # Redux store with legacy createStore
├── services/
│ └── mockData # mock for all the data from api
└── types/
└── candidate.ts # TypeScript interfaces
\`\`\`

## Component Architecture

### Component Responsibilities

1. **LeftNavigation**: Fixed dark blue sidebar with click-to-expand functionality in mobile view
2. **Header**: Search functionality, and user profile display UI
3. **CandidateProfile**: Core candidate information with tab navigation and Redux integration
4. **EditModal**: Modal based Form editing with validation and state management

## Approach & Implementation

### 1. UI/UX Development

- **Wireframe Fidelity**: Exact recreation of the provided Figma design
- **Responsive Design**: created responsive design with breakpoints at 440px, 768px and 1024px
- **Color Scheme**: Professional blue (#1e3a8a) for navigation, maintaining CRM aesthetics
- **Typography**: Clean, readable fonts with proper hierarchy

### 2. State Management

- **Redux Legacy**: Implemented using `createStore` as specifically requested
- **Action Creators**: `fetchCondidateRequest`, `updateCandidate`, `fetchCondidateSuccess`, `fetchCondidateFailure`
- **Reducer Pattern**: Pure functions handling state transitions
- **Mock API**: Simulated API calls for data fetching and updates

### 3. Styling Methodology

- **Vanilla CSS/SCSS**: No CSS frameworks used
- **Component-Scoped Styles**: Each component has its own styling
- **Responsive Grid**: CSS Grid and Flexbox for layout management
- **Hover Effects**: Interactive elements with smooth transitions

## Key Features Implemented

### 1. Edit Functionality

- **Trigger**: Pencil icon click opens edit modal
- **Form Fields**: All candidate properties editable
- **Validation**: Required field validation with error messages
- **State Management**: Redux actions for data persistence
- **UI Feedback**: Updated Details visible UI

### 2. Tab Navigation

- **Main Tabs**: All Details, Assigned Jobs, Related Emails, etc.
- **Sidebar Tabs**: Notes & Calls, Tasks, Meeting, Files
- **Active States**: Visual indication of current tab
- **Content Switching**: Dynamic content based on active tab

### 3. Responsive Behavior

- **Mobile Navigation**: Collapsible left sidebar
- **Flexible Grid**: Adapts to different screen sizes
- **Touch Interactions**: Optimized for mobile devices
- **Performance**: Efficient rendering and state updates

## Testing & Quality Assurance

### Code Quality Measures

- **TypeScript**: Full type safety throughout the application
- **ESLint**: Code quality and consistency enforcement
- **Component Structure**: Modular, reusable component architecture

## Future Enhancements

1. **API Integration**: Replace mock data with real API endpoints
2. **Advanced Filtering**: Enhanced search and filter capabilities

## Conclusion

This implementation successfully recreates the provided wireframe while maintaining high code quality, responsive design, and proper state management. The use of Redux legacy createStore and vanilla CSS demonstrates proficiency in fundamental web development technologies while delivering a professional, production-ready application.

The modular component architecture ensures maintainability and extensibility, while the comprehensive documentation and clean code structure facilitate future development and collaboration.
