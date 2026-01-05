# Clinic Patient Communication System

A Google Sheets, Google Forms, and Apps Script based system designed to
automate clinic patient communication while minimizing doctor interruptions.

## Documentation
- [System Design & Automation Logic](docs/Clinic_Patient_Communication_System.pdf)
- [Google Form – Patient Questions Structure](docs/HMS_Google_Form_Structure.pdf)

## Key Components
- **Message Types**: Defines message categories, urgency, and doctor involvement rules
- **Care_Control**: Central execution sheet for routine patient communication
- **Patient_Questions**: Exception handling layer for patient queries requiring doctor input

## Automation Logic
A Google Apps Script periodically scans the Patient_Questions sheet and:
- Identifies doctor-approved responses
- Sends responses via WhatsApp (simulated)
- Updates sent timestamps and status for auditability

## Proof of Execution
Screenshots included in this repository show live sheet data and Apps Script
execution logs confirming successful automation.
