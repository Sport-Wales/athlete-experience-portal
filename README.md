# Sport Wales Athlete's Voice Platform

A React-based platform built on the Sport Wales Project Template (SWPT) that enables athletes to share their experiences and stories securely. The platform facilitates anonymous feedback and story sharing to help improve Welsh sport.

## Overview

The Athlete's Voice Platform transforms Sport Wales' athlete feedback process into a secure, accessible digital platform. It enables:
- Access code-based authentication
- Multiple story submission formats (written, voice, video)
- Anonymous sharing options
- Guided and free-form story submissions
- Safeguarding awareness and compliance
- Bilingual accessibility (English/Welsh)
- Progress tracking and story review

## Key Features

### Authentication & Access
- Secure access code system
- Multiple entry points (direct/panel member referral)
- Session-based progress saving
- Dynamic routing based on submission stage

### Story Submission Options
- Written submissions:
  - Free-form journal style
  - Guided question format
- Media submissions:
  - Voice recordings
  - Video messages
- Privacy controls:
  - Anonymous submission option
  - Contact preferences
  - Sensitive content marking

## User Journey Flow

### 1. Entry & Authentication
- Welcome page with platform overview
- Access code verification
- Privacy and consent information

### 2. Story Sharing Process
1. Personal Information (Optional)
   - Sport selection
   - Competition level
   - Age range
   - Privacy preferences

2. Story Submission
   - Multiple format options
   - Content guidelines
   - Safeguarding information
   - Progress saving

3. Final Review
   - Content review
   - Sharing preferences
   - Submission confirmation

## Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm (comes with Node.js)
- Git for version control

### Setup Steps

1. Clone the repository:
```bash
git clone https://github.com/sportwales/athletes-voice.git
cd athletes-voice
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

## Project Structure

```
athletes-voice/
├── src/
│   ├── components/     
│   │   ├── engage/            # Story submission components
│   │   ├── shared/            # Shared components
│   │   └── ui/                # UI components
│   ├── context/              # AthleteContext
│   ├── pages/                # Main page components
│   │   ├── EnterPage.jsx     # Welcome & access
│   │   ├── LandingPage.jsx   # Information & panel
│   │   ├── EngagePage.jsx    # Story submission
│   │   └── ExitPage.jsx      # Confirmation
│   └── styles/               # Global styles
```

## Key Components

### 1. Story Submission Components
- `AthleteInfoForm`: Personal information collection
- `StorySubmission`: Multi-format story input
- `FinalSteps`: Review and submission

### 2. Context Management
`AthleteContext` handles:
- Form data management
- Progress tracking
- Submission state
- Privacy preferences

### 3. Shared Components
- `AccessCodeInput`: Entry verification
- `Layout`: Page structure
- `ErrorBoundary`: Error handling

## Development Notes

### Environment Setup
- Uses SWPT base configuration
- Follows Sport Wales Brand Guidelines
- Implements bilingual support
- Accessibility compliance

### Styling
- Utilises SWPT styling system
- Custom components follow brand guidelines
- Responsive design for all devices
- Accessible color schemes

## Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Preview production
npm run preview
```

## Deployment

### Production Deployment:

1. Build the project:
```bash
npm run build
```

2. Deploy options:
   - Use existing SWPT deployment pipeline
   - Manual deployment to preferred hosting
   - Netlify/Vercel supported

## Additional Features
- Built on SWPT foundation
- React Router for navigation
- Tailwind CSS styling
- Form state management
- Bilingual support (English/Welsh)
- Accessibility compliance
- Error boundary implementation
- Progressive form saving

## Important Notes
- Always use SWPT style guidelines
- Test bilingual content thoroughly
- Ensure safeguarding compliance
- Follow data protection guidelines
- Regular security updates
- Maintain accessibility standards

## Support
For technical support, contact the Sport Wales development team at [support-email].

## Security
Report security concerns to [security-email] or through the appropriate Sport Wales channels.

## License
This project is proprietary to Sport Wales. All rights reserved.