# AI-Powered Health Risk Profiler
# Project Overview

This project analyzes lifestyle survey responses (typed or scanned forms) and generates a structured health risk profile. It handles noisy inputs, missing answers, and provides guardrails for incomplete data.

The application outputs:

Factors contributing to health risk

Risk level and numeric score

Actionable, non-diagnostic recommendations

Technologies used: Python, Flask/FastAPI (Backend), React (Frontend), OCR (pytesseract or cloud service).

# Table of Contents

Demo

Project Structure
Setup Instructions
Architecture & State Management
API Endpoints
Sample Requests
Screen Recordings
Known Issues

git clone https://github.com/YourUsername/health-risk-profiler.git
cd backend

pip install -r requirements.txt

uvicorn app:app --reload   # FastAPI
or
python app.py              # Flask

cd frontend
npm install
npm start

# Architecture & State Management

Frontend: React with hooks or context API for state management.

Backend: REST API handles:

Survey parsing (OCR / text)

Risk factor extraction

Risk scoring

Recommendations generation

Data flow: Frontend → API call → Backend → Model → JSON response → Frontend renders results.

# Potential Improvements

Add user authentication and profile management.
Store user data and history in a database.
Add charts for historical risk trends.
Improve frontend UX for mobile devices.
Enhance OCR accuracy with pre-processing.
Potential Improvements
