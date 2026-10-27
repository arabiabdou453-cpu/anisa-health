# Anisa Health (أنيسة) — Human-Centered Clinical Care from Hospital to Home

[![Health Tech](https://img.shields.io/badge/category-Digital_Health-0F766E.svg)]()
[![Clinical Protocol](https://img.shields.io/badge/protocol-Project_RED_Aligned-teal.svg)]()
[![Accessibility](https://img.shields.io/badge/accessibility-WCAG_2.1_AAA-green.svg)]()
[![Platform](https://img.shields.io/badge/deployment-Zero_App_Web_SMS-blue.svg)]()
[![License](https://img.shields.io/badge/license-MIT-success.svg)]()

> **"Hospital care ends at discharge. Anisa begins there."**
> 
> *Anisa Health* is an empathetic, clinically grounded patient recovery platform that bridges the dangerous 30-day post-discharge chasm. It translates complex, jargon-heavy electronic health record (EHR) discharge summaries into warm, plain-language audio conversations, visual medication timelines, and proactive daily check-ins—delivered directly to any mobile device via secure web link, with **zero apps to install**.

---

## 💡 The Meaning Behind the Name

In Arabic, **Anisa (أنيسة)** represents the comforting, empathetic companion who removes fear, dispels loneliness, and brings warmth into an unfamiliar situation. 

When vulnerable patients leave the safety of a hospital with a confusing stack of medical papers, they often feel isolated and overwhelmed. We named our platform **Anisa** to embody a dedicated clinical advocate who walks alongside the patient from the hospital bed to their kitchen table.

---

## 🚨 The Healthcare Crisis We Solve

1. **The Health Literacy Gap**: The average clinical discharge summary is written at a university reading level, while the average patient reads at an 8th-grade level. Over **80% of verbal instructions** are forgotten the moment a patient exits the hospital.
2. **The $52 Billion Readmission Burden**: 1 in 5 Medicare patients is readmitted within 30 days, largely driven by medication confusion, lack of follow-up, and missed red-flag signals.
3. **The "Portal & App" Fallacy**: Over 85% of elderly patients never download hospital portal apps or remember complex login passwords. Anisa eliminates friction by delivering care instructions via a secure one-click SMS or WhatsApp link.

---

## 🌟 Key Platform Innovations

- **Instant Clinical Plain-Language Translation**: Automatically converts abbreviations like *"Furosemide 40mg PO qAM"* into clear guidance: *"Take your water pill every morning before breakfast with a glass of water."*
- **Natural Spoken Audio & Multilingual Support**: Accessible audio voice narration for patients with visual or literacy barriers, with real-time translation into English, Spanish, Arabic, and French.
- **Project RED Teach-Back Loop**: Based on Boston University's NIH-funded Re-Engineered Discharge protocol, Anisa asks conversational verification questions to confirm understanding before bedtime.
- **Visual Medication Timeline**: Clearly presents which pills to take in the morning, with meals, or at night, complete with dosage icons and alerts.
- **Proactive Red-Flag Triage Dashboard**: Automated daily check-ins detect early danger signs (e.g., sudden weight spikes, deep calf throbbing) and escalate directly to hospital care teams before an emergency arises.

---

## 🎮 Hands-On Interactive Simulator

The platform includes a live clinical interactive playground embedded on the homepage:
- **Cardiology (Congestive Heart Failure)**: Lasix titration, daily pre-prandial weighing, and orthopnea red flags.
- **Endocrinology (Type 2 Diabetes)**: Metformin GI management, Glipizide timing, and the emergency "Rule of 15" for hypoglycemia.
- **Orthopedics (Total Knee Arthroplasty)**: Lovenox blood-thinner injection protocol, bandage care, and DVT warning detection.

Judges can toggle between **Raw Clinical EHR Jargon** and **Anisa's Patient-Friendly Conversation**, test the **audio voice player**, switch languages, and take the **interactive Teach-Back quiz**.

---

## 🚀 Quick Start & Run Locally

### Prerequisites
- Node.js (version 18 or newer)

### Installation
```bash
# Clone the repository
git clone https://github.com/arabiabdou453-cpu/anisa-care.git

# Enter the project directory
cd anisa-care

# Start the clean static server
node server.js
```

Open **[http://127.0.0.1:3001](http://127.0.0.1:3001)** in any modern web browser to experience the platform.

---

## 📁 Repository Structure

```text
anisa-care/
├── assets/
│   ├── css/
│   │   └── style.css       # Bespoke medical-grade design system & responsive layout
│   └── js/
│       └── app.js          # Interactive clinical engine, speech synthesis & teach-back quiz
├── index.html              # Main interactive platform portal
├── server.js               # Zero-dependency local server
├── package.json            # Configuration
└── README.md               # Presentation & pitch documentation
```

---

## 📜 Clinical References & Evidence
- **Project RED (Re-Engineered Discharge)**: Boston University Medical Center & Agency for Healthcare Research and Quality (AHRQ).
- **Hospital Readmissions Reduction Program (HRRP)**: Centers for Medicare & Medicaid Services (CMS).
- **Teach-Back Methodology**: American Medical Association (AMA) Health Literacy Guidelines.

---

## 📄 License
Released under the MIT License for healthcare innovation and academic competitions.
