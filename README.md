#  Samarthya – A Women Safety App

Samarthya is an integrated safety solution combining a React-based web application with a wearable IoT device to enhance women’s personal safety. The application provides features like real-time location tracking, automatic SOS alerts, nearby device alerting, community support, and forensic voice analysis to ensure prompt emergency response and post-incident investigation.


##  Project Overview

Every hour, over 50 crimes against women are reported in India. Samarthya aims to be a powerful solution against this issue by integrating smart sensors and emergency protocols into one seamless platform. 

The app offers:
- Instant emergency SOS alerts with live GPS tracking
- Voice and environment recording for forensic analysis
- Nearby device alert notifications
- Real-time movement and emotion-based distress detection
- Community support system and contact tracing


##  Tech Stack

- Frontend: React.js, TypeScript, HTML, CSS
- Device Layer: Sensors (GSR, Gyroscope, Accelerometer, Proximity), Microphone
- ML Model: Emotion detection and voice classification


## Folder Structure

| Folder / Component      | Description |
|-------------------------|-------------|
|  ActivityMonitor.tsx    | Monitors sensor activity and threat levels |
|  EmergencyContainer.tsx, EmergencyScreen2.tsx | Trigger and visualize SOS scenarios |
|  ChatInterface.tsx      | Real-time chatbot support for emergency or guidance |
|  CommunitySupport.tsx   | Involves local support and alert system |
|  EmergencyContact.tsx   | Manages emergency contact registration |
|  EmergencyChat.tsx      | Chat window for emergency communication |
|  LocationForm.tsx       | Location tracking and check-in/check-out system |
|  RegisterForm.tsx ,  LoginForm.tsx  | Authentication and onboarding |
|  SafetyDashboard.tsx    | Dashboard for monitoring safety metrics |
|  Profile.tsx            | User profile with editable contact/info |
|  EmergencyHeader.tsx    | SOS button with voice command trigger |
|  OnboardingCardProps.tsx  | Cards used in onboarding tutorial |



##  Features

- Automatic SOS Trigger: Based on physical motion, stress levels, and voice.
- Live GPS Tracking: Updates the user’s location in real-time.
- Voice Analysis: Matches suspect voice with recorded audio for forensic aid.
- Nearby Alerts: Sends alert to nearby Samarthya users (within 5km).
- Emergency Calling: Auto-dial feature to registered contacts and helplines.
- Privacy & Security: Encrypted data and secure access.


## How It Works

1. Wearable Device: Collects data through sensors (motion, proximity, stress).
2. App Detection Logic: React frontend communicates with ML backend.
3. Alert Activation: Emergency actions are triggered based on thresholds.
4. Voice & Location Logging: All activity is logged and used in investigations.
5. User Interface: Intuitive, quick-access UI even in high-stress moments.



##  Future Enhancements

- Database and backend support will be provided soon.
- Integration with law enforcement dashboards
- International support and language localization
- Gamified safety awareness and self-defense training



