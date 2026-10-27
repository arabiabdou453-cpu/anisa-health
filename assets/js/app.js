/**
 * ANISA HEALTH (أنيسة) — Interactive Engine
 * Competition Demonstration Engine
 */

const scenarios = {
  cardiac: {
    title: "Congestive Heart Failure (CHF) Discharge",
    patientName: "Robert Jenkins, 68",
    doctor: "Dr. Catherine Hayes, MD (Cardiology)",
    clinicalRaw: `DISCHARGE SUMMARY & ORDERS:
Pt admitted for acute decompensated HF (NYHA Class III), EF 35%.
Discharge meds:
- Furosemide (Lasix) 40mg PO qAM. Discontinue hydrochlorothiazide.
- Carvedilol 12.5mg PO BID with meals. Monitor HR < 60 bpm.
- Strict 2,000 mg Na+ restriction. Daily weight log pre-prandial.
ALERT: Report >3 lbs gain in 24h or >5 lbs in 7d. Dyspnea on exertion, orthopnea, or bilateral peripheral edema requires immediate clinical triage.
Follow-up clinic visit in 7 days with telemetry check.`,
    languages: {
      en: {
        bubble: "Good morning Robert. I'm Anisa, your cardiology care companion. Dr. Hayes has updated your heart medications so you can stay safe and comfortable at home. You have one important pill to take each morning (Furosemide) that helps remove extra fluid. Before breakfast every day, step on the scale: if your weight jumps by 3 pounds in one day, let us know right away so we can adjust your dose before you feel short of breath.",
        audioText: "Good morning Robert. I am Anisa, your cardiology care companion. Dr. Hayes has updated your heart medications so you can stay safe and comfortable at home. Take your water pill every morning before breakfast, and let us know if your weight jumps by three pounds.",
        meds: [
          { name: "Furosemide (Lasix) 40mg", desc: "1 tablet with water to remove extra fluid", time: "Morning (8:00 AM)", icon: "💧" },
          { name: "Carvedilol 12.5mg", desc: "1 tablet with food to protect your heart", time: "Twice daily (8 AM & 8 PM)", icon: "🫀" }
        ],
        quiz: {
          question: "When should you call your care team immediately?",
          options: [
            { text: "If you gain 3 pounds in a single day", correct: true, feedback: "Correct! Sudden weight gain means fluid is building up in your lungs before you even feel it." },
            { text: "Only if you cannot walk at all", correct: false, feedback: "Waiting that long is dangerous. Contact us at the first sign of sudden weight gain." },
            { text: "Only at your next scheduled visit in 7 days", correct: false, feedback: "Don't wait for your 7-day visit if your weight jumps or breathing gets harder." }
          ]
        }
      },
      es: {
        bubble: "Buenos días, Robert. Soy Anisa, tu compañera de cuidados de cardiología. La Dra. Hayes ha actualizado tus medicamentos del corazón para que te recuperes seguro en casa. Tienes una pastilla clave cada mañana (Furosemida) para eliminar el exceso de líquido. Pésate cada día antes del desayuno: si tu peso sube 3 libras en 24 horas, avísanos de inmediato.",
        audioText: "Buenos días Robert. Soy Anisa, tu compañera de cardiología. Toma tu pastilla para eliminar líquidos cada mañana y pésate antes del desayuno.",
        meds: [
          { name: "Furosemida 40mg", desc: "1 pastilla con agua para eliminar líquidos", time: "Mañana (8:00 AM)", icon: "💧" },
          { name: "Carvedilol 12.5mg", desc: "1 pastilla con alimentos para el corazón", time: "Dos veces al día (8 AM y 8 PM)", icon: "🫀" }
        ],
        quiz: {
          question: "¿Cuándo debes llamar a tu equipo médico de inmediato?",
          options: [
            { text: "Si aumentas 3 libras en un solo día", correct: true, feedback: "¡Exacto! El aumento repentino de peso indica retención de líquidos antes de que sientas fatiga." },
            { text: "Solo si no puedes caminar", correct: false, feedback: "Esperar tanto es peligroso. Llámanos ante el primer aumento brusco de peso." }
          ]
        }
      },
      ar: {
        bubble: "صباح الخير سيد روبرت. أنا أنيسة، رفيقتك الطبية بعد الخروج من المستشفى. قامت الدكتورة كاثرين بتعديل أدوية قلبك لتتعافى بأمان في منزلك. لديك حبة هامة كل صباح (فيوروسيميد) لطرد السوائل الزائدة وتسهيل التنفس. كل يوم قبل الإفطار، قِس وزنك: إذا زاد وزنك أكثر من كيلو ونصف في يوم واحد، أخبرنا فوراً لنعدل الجرعة قبل أن تشعر بضيق في التنفس.",
        audioText: "صباح الخير سيد روبرت. أنا أنيسة، رفيقتك الطبية. خذ حبة طرد السوائل صباحاً وقس وزنك يومياً قبل الإفطار وأخبرنا إذا زاد وزنك فجأة.",
        meds: [
          { name: "فيوروسيميد (لازيكس) 40 ملغ", desc: "حبة واحدة لطرد السوائل الزائدة وتخفيف العبء عن القلب", time: "صباحاً (8:00 ص)", icon: "💧" },
          { name: "كارفيديلول 12.5 ملغ", desc: "حبة واحدة مع الطعام لحماية عضلة القلب", time: "مرتين يومياً (8 ص و 8 م)", icon: "🫀" }
        ],
        quiz: {
          question: "متى يجب عليك التواصل فوراً مع الفريق الطبي؟",
          options: [
            { text: "إذا لاحظت زيادة في الوزن بأكثر من كيلو ونصف في يوم واحد", correct: true, feedback: "إجابة صحيحة تماماً! الزيادة المفاجئة تعني تجمع السوائل في الرئتين قبل ظهور ضيق التنفس." },
            { text: "فقط عند موعد المراجعة بعد أسبوع", correct: false, feedback: "لا تنتظر أسبوعاً؛ التدخل المبكر يمنع عودتك للتنويم في المستشفى." }
          ]
        }
      },
      fr: {
        bubble: "Bonjour Robert. Je suis Anisa, votre accompagnatrice de soins cardiologiques. Le Dr Hayes a ajusté votre traitement pour que votre retour à domicile se passe en toute sécurité. Vous prendrez un comprimé chaque matin (Furosemide) pour éliminer les excès de liquide. Pesez-vous chaque matin avant le petit-déjeuner : si votre poids augmente de plus d'un kilo en 24h, signalez-le nous sans attendre.",
        audioText: "Bonjour Robert. Je suis Anisa, votre accompagnatrice de soins. Prenez votre traitement le matin et prévenez-nous en cas de prise de poids rapide.",
        meds: [
          { name: "Furosémide 40mg", desc: "1 comprimé avec de l'eau pour éliminer les liquides", time: "Matin (8h00)", icon: "💧" },
          { name: "Carvédilol 12.5mg", desc: "1 comprimé pendant le repas pour protéger le cœur", time: "Matin et Soir", icon: "🫀" }
        ],
        quiz: {
          question: "Quand devez-vous contacter l'équipe médicale immédiatement ?",
          options: [
            { text: "Si vous prenez plus d'un kilo en une seule journée", correct: true, feedback: "Correct ! Une prise de poids soudaine signale une accumulation de liquide." },
            { text: "Uniquement si vous ne pouvez plus marcher", correct: false, feedback: "Attendre est dangereux. Prévenez-nous dès la première alerte." }
          ]
        }
      }
    }
  },
  diabetes: {
    title: "Type 2 Diabetes & Hypoglycemia Protocol",
    patientName: "Maria Santos, 54",
    doctor: "Dr. Marcus Vance, MD (Endocrinology)",
    clinicalRaw: `DISCHARGE SUMMARY & ORDERS:
Pt admitted with symptomatic hyperglycemia (BG 380 mg/dL).
Medication plan:
- Initiate Metformin 500mg PO BID with meals. Titrate to 1000mg BID in 2 wks if tolerated (watch for GI distress).
- Glipizide 5mg PO daily 30 min before breakfast.
- Fingerstick blood glucose monitoring: AC and QHS.
HYPOGLYCEMIA PROTOCOL (Rule of 15): If BG < 70 mg/dL or symptomatic (diaphoresis, tremulousness), administer 15g fast-acting carbohydrate (4oz juice), recheck in 15 min. Repeat if unresolved. Notify on-call triage if refractory.`,
    languages: {
      en: {
        bubble: "Hello Maria, this is Anisa. We want to make sure your blood sugar stays in a healthy range now that you're home. You will take Metformin with your breakfast and dinner to help your body use insulin. Keep a small bottle of apple juice near your bedside: if you ever feel shaky, sweaty, or dizzy, check your sugar and drink half a cup right away. We'll check in with you every afternoon by text to see your numbers.",
        audioText: "Hello Maria. This is Anisa. Take your Metformin with breakfast and dinner, and keep apple juice nearby in case you feel shaky or dizzy.",
        meds: [
          { name: "Metformin 500mg", desc: "Take with breakfast and dinner to prevent stomach upset", time: "With Meals", icon: "💊" },
          { name: "Glipizide 5mg", desc: "Take 30 minutes before your morning meal", time: "Morning (7:30 AM)", icon: "☀️" }
        ],
        quiz: {
          question: "What should you do first if you feel suddenly shaky and dizzy?",
          options: [
            { text: "Drink 4 oz of juice and check your blood sugar", correct: true, feedback: "Exactly right! The Rule of 15 quickly raises dangerous low blood sugar." },
            { text: "Take an extra Metformin pill", correct: false, feedback: "Never take extra medicine when dizzy; that will lower your blood sugar further!" }
          ]
        }
      },
      ar: {
        bubble: "أهلاً بكِ سيدة ماريا، معكِ أنيسة. سنساعدكِ على ضبط معدل السكر في الدم بأمان بعد عودتك للمنزل. ستتناولين دواء الميتفورمين مع وجبتي الإفطار والعشاء لتجنب أي انزعاج في المعدة. واحتفظي دائماً بعبوة عصير صغيرة قرب سريرك: إذا شعرتِ برعشة أو تعرق مفاجئ، اشربي نصف كوب عصير فوراً وافحصي السكر. سنرسل لكِ رسالة يومية للاطمئنان على قراءاتك.",
        audioText: "أهلاً سيدة ماريا، معك أنيسة. تناولي دواء السكر مع الطعام واحتفظي بجرعة عصير في حال شعرتِ برعشة أو هبوط مفاجئ.",
        meds: [
          { name: "ميتفورمين 500 ملغ", desc: "تناوليه مع وجبتي الإفطار والعشاء لمنع اضطراب المعدة", time: "مع الطعام", icon: "💊" },
          { name: "غليبيزيد 5 ملغ", desc: "تناوليه قبل الفطور بنصف ساعة", time: "صباحاً (7:30 ص)", icon: "☀️" }
        ],
        quiz: {
          question: "ما هو التصرف الصحيح إذا شعرتِ فجأة برعشة وتعرق وهبوط؟",
          options: [
            { text: "شرب نصف كوب عصير سريع السكر وفحص السكر فوراً", correct: true, feedback: "تصرف سليم جداً! قاعدة الـ 15 ترفع السكر المنخفض فوراً وتمنع الإغماء." },
            { text: "أخذ حبة دواء سكر إضافية", correct: false, feedback: "خطر جداً! أخذ دواء السكر عند الهبوط سيزيد الحالة سوءاً." }
          ]
        }
      },
      es: {
        bubble: "Hola María, soy Anisa. Queremos asegurarnos de que tu nivel de azúcar se mantenga estable. Toma la Metformina con el desayuno y la cena para evitar malestar estomacal. Ten siempre a mano un jugo pequeño: si sientes temblores o mareos, toma medio vaso de jugo inmediatamente.",
        audioText: "Hola María. Toma la Metformina con las comidas y ten a mano un poco de jugo por si sientes temblores o mareos.",
        meds: [
          { name: "Metformina 500mg", desc: "Con desayuno y cena para proteger el estómago", time: "Con Alimentos", icon: "💊" }
        ],
        quiz: {
          question: "¿Qué debes hacer si sientes mareo y temblores repentinos?",
          options: [
            { text: "Tomar medio vaso de jugo y medir tu glucosa", correct: true, feedback: "¡Correcto! Es la regla de los 15 para tratar la hipoglucemia rápidamente." },
            { text: "Irte a dormir inmediatamente", correct: false, feedback: "No te duermas; primero debes subir tu nivel de glucosa." }
          ]
        }
      },
      fr: {
        bubble: "Bonjour Maria, c'est Anisa. Prenez votre metformine pendant les repas pour éviter les maux d'estomac. Gardez toujours un jus de fruit à portée de main en cas de sensation de malaise ou tremblements.",
        audioText: "Bonjour Maria. Prenez vos médicaments pendant les repas et ayez du sucre à portée de main.",
        meds: [
          { name: "Metformine 500mg", desc: "Pendant les repas matin et soir", time: "Avec Repas", icon: "💊" }
        ],
        quiz: {
          question: "Que faire en cas de sueurs et tremblements soudains ?",
          options: [
            { text: "Prendre un demi-verre de jus de fruit sucré", correct: true, feedback: "Très bien ! C'est le réflexe d'urgence pour traiter l'hypoglycémie." }
          ]
        }
      }
    }
  },
  knee: {
    title: "Post-Op Total Knee Arthroplasty (Surgery)",
    patientName: "David Miller, 62",
    doctor: "Dr. Jonathan Reed, MD (Orthopedic Surgery)",
    clinicalRaw: `SURGICAL DISCHARGE INSTRUCTIONS:
Status post right TKA, unicompartmental prosthetic implant.
Orders & Post-Operative Precautions:
- Enoxaparin (Lovenox) 30mg SubQ daily x 14 days for DVT prophylaxis. Rotate abdominal sites.
- Acetaminophen 1000mg PO q8h PRN moderate pain; Oxycodone 5mg q6h PRN breakthrough pain only.
- Strict surgical dressing barrier: maintain occlusive seal x 5 days. No immersion/submersion.
- DVT WARNING: Evaluate calf erythema, induration, or unilateral localized pain. PE red flags: pleuritic chest pain or tachypnea -> dispatch EMS (911).
- Outpatient physical therapy starts Day 3.`,
    languages: {
      en: {
        bubble: "Hello David, Anisa here following up on your right knee surgery. Your main goals this week are staying safe, managing discomfort, and preventing blood clots. You will have a tiny daily injection in your belly (Lovenox) to keep your blood flowing smoothly. Keep your bandage clean and dry—sponge baths only. If you ever feel sharp chest pain, shortness of breath, or deep burning pain in your calf, call us right away.",
        audioText: "Hello David. Anisa here following up on your knee surgery. Keep your bandage dry, take your blood thinner daily, and let us know if you feel calf pain or breathing trouble.",
        meds: [
          { name: "Lovenox 30mg Injection", desc: "Tiny skin pinch in your belly once a day to prevent clots", time: "Morning (9:00 AM)", icon: "💉" },
          { name: "Tylenol 1000mg", desc: "Every 8 hours for steady, non-narcotic pain relief", time: "Every 8 hours", icon: "💊" }
        ],
        quiz: {
          question: "What symptom requires immediate emergency medical attention?",
          options: [
            { text: "Sudden sharp chest pain or deep throbbing pain in your calf", correct: true, feedback: "Crucial! That can be a warning sign of a blood clot (DVT) that needs urgent care." },
            { text: "Mild stiffness when standing up", correct: false, feedback: "Mild stiffness is normal after surgery. Calf swelling and chest pain are the true danger signs." }
          ]
        }
      },
      ar: {
        bubble: "مرحباً ديفيد، معك أنيسة للاطمئنان عليك بعد عملية تبديل مفصل الركبة. هدفنا هذا الأسبوع هو حمايتك من التخثرات وتسكين الألم تدريجياً. ستحتاج إلى حقنة صغيرة تحت جلد البطن يومياً (لوفينوكس) لمنع تجلط الدم. حافظ على نظافة وجفاف الضمادة على ركبتك دون بلل. وإذا شعرت بأي ألم حاد في ربلة الساق (خلف بطة الرجل) أو ضيق مفاجئ في الصدر، تواصل معنا على الفور.",
        audioText: "مرحباً ديفيد، معك أنيسة. حافظ على جفاف جرح العملية وخذ حقنة مانع التجلط يومياً وأخبرنا فوراً إن شعرت بألم في بطة الساق.",
        meds: [
          { name: "حقنة لوفينوكس 30 ملغ", desc: "حقنة صغيرة تحت جلد البطن يومياً لمنع التجلط", time: "صباحاً (9:00 ص)", icon: "💉" },
          { name: "مسكن باراسيتامول 1000 ملغ", desc: "كل 8 ساعات لتسكين الألم بشكل آمن", time: "كل 8 ساعات", icon: "💊" }
        ],
        quiz: {
          question: "أي من الأعراض التالية يعتبر علامة خطر تستدعي الاتصال الفوري؟",
          options: [
            { text: "ألم حاد ومفاجئ في بطة الساق أو ضيق مفاجئ في التنفس", correct: true, feedback: "صحيح تماماً! هذه علامة مبكرة لجلطة دموية ويجب علاجها فوراً." },
            { text: "شعور خفيف بشد في الركبة عند المشي", correct: false, feedback: "الشد الخفيف طبيعي بعد العملية، بينما ألم بطة الساق المفاجئ هو علامة الخطر." }
          ]
        }
      },
      es: {
        bubble: "Hola David, soy Anisa para dar seguimiento a tu cirugía de rodilla. Mantén tu vendaje completamente seco y aplica la pequeña inyección para prevenir coágulos cada mañana. Si sientes dolor en la pantorrilla o dificultad para respirar, avísanos de inmediato.",
        audioText: "Hola David. Mantén el vendaje seco y avísanos si sientes dolor en la pantorrilla o dificultad para respirar.",
        meds: [
          { name: "Inyección Lovenox 30mg", desc: "Para prevenir coágulos sanguíneos", time: "Mañana (9:00 AM)", icon: "💉" }
        ],
        quiz: {
          question: "¿Qué síntoma requiere atención médica de emergencia?",
          options: [
            { text: "Dolor intenso en la pantorrilla o dificultad para respirar", correct: true, feedback: "¡Exacto! Puede ser signo de coágulo sanguíneo." }
          ]
        }
      },
      fr: {
        bubble: "Bonjour David, ici Anisa pour votre suivi post-opératoire. Gardez votre pansement au sec et signalez immédiatement toute douleur au mollet ou gêne respiratoire.",
        audioText: "Bonjour David. Gardez votre pansement au sec et prévenez-nous en cas de douleur au mollet.",
        meds: [
          { name: "Lovenox 30mg", desc: "1 injection par jour contre les caillots", time: "Matin (9h00)", icon: "💉" }
        ],
        quiz: {
          question: "Quel symptôme nécessite un avis médical urgent ?",
          options: [
            { text: "Douleur aiguë au mollet ou essoufflement", correct: true, feedback: "Exact ! C'est le signe d'alerte d'une phlébite." }
          ]
        }
      }
    }
  }
};

let currentScenario = 'cardiac';
let currentLang = 'en';
let isSpeaking = false;

function renderDemo() {
  const scenario = scenarios[currentScenario];
  const langData = scenario.languages[currentLang] || scenario.languages['en'];

  // Update Raw Clinical
  const rawBox = document.getElementById('rawClinicalText');
  if (rawBox) rawBox.textContent = scenario.clinicalRaw;

  // Update Patient Bubble
  const bubble = document.getElementById('patientDialogue');
  if (bubble) bubble.textContent = langData.bubble;

  // RTL handling
  const patientPane = document.getElementById('patientPane');
  if (patientPane) {
    if (currentLang === 'ar') {
      patientPane.setAttribute('dir', 'rtl');
    } else {
      patientPane.setAttribute('dir', 'ltr');
    }
  }

  // Update Meds
  const medsList = document.getElementById('medsList');
  if (medsList) {
    medsList.innerHTML = langData.meds.map(m => `
      <div class="med-row">
        <div class="med-info">
          <div class="med-icon">${m.icon}</div>
          <div>
            <div class="med-name">${m.name}</div>
            <div class="med-desc">${m.desc}</div>
          </div>
        </div>
        <div class="med-time">${m.time}</div>
      </div>
    `).join('');
  }

  // Update Quiz
  const quizBox = document.getElementById('quizBox');
  if (quizBox) {
    const q = langData.quiz;
    quizBox.innerHTML = `
      <div class="quiz-question">${q.question}</div>
      <div class="quiz-options">
        ${q.options.map((opt, idx) => `
          <button type="button" class="quiz-option" data-idx="${idx}" onclick="handleQuizAnswer(${idx})">
            ${opt.text}
          </button>
        `).join('')}
      </div>
      <div id="quizFeedback" style="margin-top: 12px; font-size: 13.5px; display: none;"></div>
    `;
  }
}

function handleQuizAnswer(idx) {
  const scenario = scenarios[currentScenario];
  const langData = scenario.languages[currentLang] || scenario.languages['en'];
  const opt = langData.quiz.options[idx];
  const buttons = document.querySelectorAll('.quiz-option');
  const feedback = document.getElementById('quizFeedback');

  buttons.forEach((b, i) => {
    b.classList.remove('correct', 'incorrect');
    if (i === idx) {
      if (opt.correct) {
        b.classList.add('correct');
      } else {
        b.classList.add('incorrect');
      }
    }
  });

  if (feedback) {
    feedback.style.display = 'block';
    feedback.style.color = opt.correct ? 'var(--success)' : 'var(--danger)';
    feedback.innerHTML = `<b>${opt.correct ? '✓ ' : '⚠ '}</b> ${opt.feedback}`;
  }
}

function playSpeech() {
  const scenario = scenarios[currentScenario];
  const langData = scenario.languages[currentLang] || scenario.languages['en'];
  const text = langData.audioText;

  const playBtn = document.getElementById('playAudioBtn');
  const wave = document.getElementById('audioWave');

  if ('speechSynthesis' in window) {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      isSpeaking = false;
      if (playBtn) playBtn.innerHTML = '▶';
      if (wave) wave.classList.remove('playing');
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Set appropriate language code
    const langCodes = { en: 'en-US', es: 'es-ES', ar: 'ar-SA', fr: 'fr-FR' };
    utterance.lang = langCodes[currentLang] || 'en-US';
    utterance.rate = 0.95;

    utterance.onstart = () => {
      isSpeaking = true;
      if (playBtn) playBtn.innerHTML = '❚❚';
      if (wave) wave.classList.add('playing');
    };

    utterance.onend = () => {
      isSpeaking = false;
      if (playBtn) playBtn.innerHTML = '▶';
      if (wave) wave.classList.remove('playing');
    };

    utterance.onerror = () => {
      isSpeaking = false;
      if (playBtn) playBtn.innerHTML = '▶';
      if (wave) wave.classList.remove('playing');
    };

    window.speechSynthesis.speak(utterance);
  } else {
    // Fallback simulation if speech synthesis is blocked
    isSpeaking = !isSpeaking;
    if (playBtn) playBtn.innerHTML = isSpeaking ? '❚❚' : '▶';
    if (wave) wave.classList.toggle('playing', isSpeaking);
  }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  // Scenario Pills
  const pills = document.querySelectorAll('.scenario-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentScenario = pill.getAttribute('data-scenario');
      if (isSpeaking) {
        window.speechSynthesis.cancel();
        isSpeaking = false;
      }
      renderDemo();
    });
  });

  // Language buttons
  const langBtns = document.querySelectorAll('.lang-btn');
  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      langBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentLang = btn.getAttribute('data-lang');
      if (isSpeaking) {
        window.speechSynthesis.cancel();
        isSpeaking = false;
      }
      renderDemo();
    });
  });

  // Audio Play button
  const playBtn = document.getElementById('playAudioBtn');
  if (playBtn) {
    playBtn.addEventListener('click', playSpeech);
  }

  // Initial render
  renderDemo();
});
