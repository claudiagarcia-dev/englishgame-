/* ================================================================
       DATOS DE GRAMÁTICA — 10 LECCIONES, 5 PREGUNTAS CADA UNA
       ================================================================ */
const LESSONS = [
    {
        id: 'articles', title: 'Articles', desc: 'A, An, The',
        icon: 'fa-font', explanation: 'Usa "a" antes de consonantes, "an" antes de sonidos vocálicos, y "the" para algo específico o único.',
        questions: [
            {
                type: 'mc', label: 'Elige la opción correcta',
                text: '___ apple a day keeps the doctor away.',
                options: ['A', 'An', 'The', '--'],
                correct: 1,
                explanation: '"Apple" empieza con sonido vocálico (/æ/), así que usamos "an".'
            },
            {
                type: 'mc', label: 'Elige la opción correcta',
                text: 'She is ___ honest person.',
                options: ['a', 'an', 'the', '--'],
                correct: 1,
                explanation: '"Honest" empieza con sonido vocálico (/ɒn/), aunque la letra H sea consonante.'
            },
            {
                type: 'tf', label: '¿Es correcta esta oración?',
                text: 'I saw the Eiffel Tower last summer.',
                correct: true,
                explanation: '"The Eiffel Tower" es un sustantivo único y específico, así que usamos "the".'
            },
            {
                type: 'fill', label: 'Completa con la palabra que falta',
                text: 'He plays ___ piano every evening.',
                answer: ['the'],
                explanation: 'Con instrumentos musicales se usa "the": the piano, the guitar, the drums.'
            },
            {
                type: 'mc', label: 'Elige la opción correcta',
                text: 'Which sentence is correct?',
                options: [
                    'She is a European.',
                    'She is an European.',
                    'She is European.',
                    'She is the European.'
                ],
                correct: 0,
                explanation: '"European" empieza con sonido /j/ (consonante), así que usamos "a", no "an".'
            }
        ]
    },
    {
        id: 'present-tenses', title: 'Present Tenses', desc: 'Simple vs Continuous',
        icon: 'fa-clock', explanation: 'Present Simple para hábitos y hechos. Present Continuous para acciones en progreso ahora mismo.',
        questions: [
            {
                type: 'mc', label: 'Elige la forma correcta',
                text: 'She ___ in the garden right now.',
                options: ['works', 'is working', 'work', 'working'],
                correct: 1,
                explanation: '"Right now" indica acción en progreso → Present Continuous: is working.'
            },
            {
                type: 'mc', label: 'Elige la forma correcta',
                text: 'Water ___ at 100 degrees Celsius.',
                options: ['is boiling', 'boil', 'boils', 'are boiling'],
                correct: 2,
                explanation: 'Los hechos científicos usan Present Simple: water boils.'
            },
            {
                type: 'tf', label: '¿Es correcta esta oración?',
                text: 'I am understanding what you mean.',
                correct: false,
                explanation: '"Understand" es un verbo de estado (stative verb). No se usa en forma continua. Lo correcto: "I understand what you mean."'
            },
            {
                type: 'fill', label: 'Completa con la forma correcta',
                text: 'Shh! The baby ___ .',
                answer: ['is sleeping', 'sleeps'],
                explanation: 'La acción está ocurriendo ahora ("Shh!") → Present Continuous: is sleeping.'
            },
            {
                type: 'mc', label: '¿Cuál describe un hábito?',
                text: 'Which sentence describes a habit?',
                options: [
                    'She is walking to school today.',
                    'She walks to school every day.',
                    'She is walking right now.',
                    'She walked to school yesterday.'
                ],
                correct: 1,
                explanation: '"Every day" indica frecuencia/hábito → Present Simple: she walks.'
            }
        ]
    },
    {
        id: 'past-vs-perfect', title: 'Past vs Present Perfect', desc: 'Cuando usar cada uno',
        icon: 'fa-hourglass-half', explanation: 'Past Simple para acciones terminadas en un momento concreto. Present Perfect para experiencias o acciones con conexión al presente (sin tiempo específico).',
        questions: [
            {
                type: 'mc', label: 'Elige la forma correcta',
                text: 'I ___ this movie yesterday.',
                options: ['have seen', 'saw', 'see', 'have see'],
                correct: 1,
                explanation: '"Yesterday" es un tiempo específico y terminado → Past Simple: saw.'
            },
            {
                type: 'mc', label: 'Elige la forma correcta',
                text: 'She ___ in London since 2015.',
                options: ['lived', 'has lived', 'is living', 'lives'],
                correct: 1,
                explanation: '"Since 2015" conecta pasado con presente → Present Perfect: has lived.'
            },
            {
                type: 'tf', label: '¿Es correcta esta oración?',
                text: 'I have went to Japan twice.',
                correct: false,
                explanation: 'El participio pasado de "go" es "gone", no "went". Lo correcto: "I have gone to Japan twice."'
            },
            {
                type: 'fill', label: 'Completa las dos palabras que faltan',
                text: '___ you ever ___ sushi?',
                answer: ['have eaten'],
                explanation: 'Pregunta en Present Perfect: Have you ever eaten...? ("Ever" = alguna vez)'
            },
            {
                type: 'wordOrder', label: 'Ordena las palabras correctamente',
                words: ['I', 'have', 'already', 'finished', 'my', 'homework'],
                correct: 'I have already finished my homework',
                explanation: 'Estructura: Sujeto + have/has + already + participio + objeto.'
            }
        ]
    },
    {
        id: 'conditionals', title: 'Conditionals', desc: 'Zero y First Conditional',
        icon: 'fa-code-branch', explanation: 'Zero Conditional: If + presente, presente (hechos generales). First Conditional: If + presente, will + infinitivo (situaciones posibles).',
        questions: [
            {
                type: 'mc', label: 'Elige la forma correcta',
                text: 'If it rains, we ___ at home.',
                options: ['stay', 'stayed', 'will stay', 'staying'],
                correct: 2,
                explanation: 'First Conditional: If + presente simple, will + infinitivo → will stay.'
            },
            {
                type: 'fill', label: 'Completa con la forma correcta',
                text: 'If you heat ice, it ___ .',
                answer: ['melts'],
                explanation: 'Zero Conditional (hecho científico): If + presente, presente → melts.'
            },
            {
                type: 'tf', label: '¿Es correcta esta oración?',
                text: 'If I will have time, I will call you.',
                correct: false,
                explanation: 'Nunca usamos "will" en la cláusula "if". Lo correcto: "If I have time, I will call you."'
            },
            {
                type: 'mc', label: 'Elige la forma correcta',
                text: 'If she ___ harder, she will pass the exam.',
                options: ['will study', 'studies', 'studied', 'studying'],
                correct: 1,
                explanation: 'En la cláusula "if" usamos presente simple, no "will": If she studies...'
            },
            {
                type: 'fill', label: 'Completa con la forma correcta',
                text: 'If you mix red and blue, you ___ purple.',
                answer: ['get'],
                explanation: 'Zero Conditional: If + presente, presente → you get purple.'
            }
        ]
    },
    {
        id: 'modal-verbs', title: 'Modal Verbs', desc: 'Can, Must, Should, Might',
        icon: 'fa-key', explanation: 'Los modales van seguidos de infinitivo sin "to": can, must, should, might, could, may.',
        questions: [
            {
                type: 'mc', label: 'Elige la opción correcta',
                text: 'You ___ smoke here. It is forbidden.',
                options: ["shouldn't", "mustn't", "don't have to", "might not"],
                correct: 1,
                explanation: '"Mustn\'t" expresa prohibición estricta. "Don\'t have to" es ausencia de obligación.'
            },
            {
                type: 'fill', label: 'Completa con el modal correcto',
                text: '___ you speak French?',
                answer: ['Can'],
                explanation: '"Can" para habilidad: Can you speak French? (¿Sabes hablar francés?)'
            },
            {
                type: 'tf', label: '¿Es correcta esta oración?',
                text: 'She must to go now.',
                correct: false,
                explanation: 'Los modales van seguidos de infinitivo SIN "to". Lo correcto: "She must go now."'
            },
            {
                type: 'mc', label: 'Elige la mejor opción',
                text: 'You look tired. You ___ rest a while.',
                options: ['might', 'must', 'should', 'can'],
                correct: 2,
                explanation: '"Should" expresa consejo o recomendación. "You should rest" = "Deberías descansar".'
            },
            {
                type: 'mc', label: 'Elige la mejor opción',
                text: 'Take an umbrella. It ___ rain later.',
                options: ['must', 'should', 'will', 'might'],
                correct: 3,
                explanation: '"Might" expresa posibilidad, no certeza. "It might rain" = "Podría llover".'
            }
        ]
    },
    {
        id: 'passive-voice', title: 'Passive Voice', desc: 'Voz pasiva en presente y pasado',
        icon: 'fa-arrows-rotate', explanation: 'Voz pasiva: sujeto + be + participio pasado (+ by agent). El foco está en quién recibe la acción, no en quién la hace.',
        questions: [
            {
                type: 'mc', label: 'Elige la forma pasiva correcta',
                text: 'The pyramids ___ thousands of years ago.',
                options: ['are built', 'built', 'were built', 'was built'],
                correct: 2,
                explanation: 'Pasado + pasiva: were/was + participio. "Pyramids" es plural → were built.'
            },
            {
                type: 'fill', label: 'Completa con la forma pasiva',
                text: 'English ___ in many countries.',
                answer: ['is spoken'],
                explanation: 'Presente + pasiva: am/is/are + participio → is spoken.'
            },
            {
                type: 'tf', label: '¿Es correcta esta oración?',
                text: 'The cake was eat by the children.',
                correct: false,
                explanation: 'El participio pasado de "eat" es "eaten", no "eat". Lo correcto: "The cake was eaten by the children."'
            },
            {
                type: 'mc', label: '¿Cuál es la forma pasiva correcta?',
                text: 'Active: "Someone stole my bike." Passive:',
                options: [
                    'My bike was stolen.',
                    'My bike is stolen.',
                    'My bike were stolen.',
                    'My bike has stolen.'
                ],
                correct: 0,
                explanation: 'Pasado simple pasivo: was/were + participio → My bike was stolen.'
            },
            {
                type: 'wordOrder', label: 'Ordena las palabras correctamente',
                words: ['The', 'house', 'was', 'built', 'in', '1990'],
                correct: 'The house was built in 1990',
                explanation: 'Estructura pasiva: Sujeto + was/were + participio + complemento.'
            }
        ]
    },
    {
        id: 'comparatives', title: 'Comparatives', desc: 'Comparativos y superlativos',
        icon: 'fa-scale-balanced', explanation: 'Adjetivos cortos: -er / the -est. Adjetivos largos: more / the most. Irregulares: good→better→best, bad→worse→worst.',
        questions: [
            {
                type: 'mc', label: 'Elige la forma correcta',
                text: 'This test is ___ than the last one.',
                options: ['more easy', 'easier', 'easyer', 'most easy'],
                correct: 1,
                explanation: '"Easy" es adjetivo corto (2 sílabas terminadas en -y): easier (cambia y→i + -er).'
            },
            {
                type: 'fill', label: 'Completa con el superlativo correcto',
                text: 'She is the ___ student in class. (intelligent)',
                answer: ['most intelligent'],
                explanation: '"Intelligent" es adjetivo largo (4 sílabas) → the most intelligent.'
            },
            {
                type: 'tf', label: '¿Es correcta esta oración?',
                text: 'He is more good at math than me.',
                correct: false,
                explanation: '"Good" es irregular: comparativo = better (no "more good"). Lo correcto: "He is better at math than me."'
            },
            {
                type: 'mc', label: 'Elige la opción correcta',
                text: 'Of the three options, this is ___ .',
                options: ['the good', 'the better', 'the best', 'best'],
                correct: 2,
                explanation: 'Superlativo de "good" = "the best". Siempre con "the" delante.'
            },
            {
                type: 'fill', label: 'Completa con el comparativo correcto',
                text: 'This book is ___ than that one. (interesting)',
                answer: ['more interesting'],
                explanation: '"Interesting" es adjetivo largo → more interesting.'
            }
        ]
    },
    {
        id: 'count-uncount', title: 'Countable & Uncountable', desc: 'Much, Many, A few, A little',
        icon: 'fa-cubes', explanation: 'Countable (contable): many, a few, few. Uncountable (incontable): much, a little, little. "Less" solo con incontable; "fewer" con contable.',
        questions: [
            {
                type: 'mc', label: 'Elige la opción correcta',
                text: 'How ___ sugar do you want?',
                options: ['many', 'much', 'a few', 'several'],
                correct: 1,
                explanation: '"Sugar" es incontable → usamos "much" en preguntas.'
            },
            {
                type: 'fill', label: 'Completa con la palabra correcta',
                text: 'How ___ students are in the class?',
                answer: ['many'],
                explanation: '"Students" es contable (plural) → usamos "many".'
            },
            {
                type: 'tf', label: '¿Es correcta esta oración?',
                text: 'I have less books than you.',
                correct: false,
                explanation: '"Books" es contable → se usa "fewer", no "less". Lo correcto: "I have fewer books than you."'
            },
            {
                type: 'mc', label: 'Elige la opción correcta',
                text: 'There is ___ milk in the fridge.',
                options: ['a few', 'many', 'some', 'several'],
                correct: 2,
                explanation: '"Milk" es incontable → "some" funciona para ambos tipos en oraciones afirmativas.'
            },
            {
                type: 'fill', label: 'Completa con la palabra correcta',
                text: "I don't have ___ time.",
                answer: ['much'],
                explanation: '"Time" es incontable → "much" en oraciones negativas: I don\'t have much time.'
            }
        ]
    },
    {
        id: 'prepositions', title: 'Prepositions', desc: 'In, On, At',
        icon: 'fa-location-dot', explanation: 'AT para puntos específicos (hora, lugar preciso). ON para días y superficies. IN para meses, años, estaciones y espacios cerrados.',
        questions: [
            {
                type: 'mc', label: 'Elige la preposición correcta',
                text: 'The class starts ___ 9 AM.',
                options: ['in', 'on', 'at', 'by'],
                correct: 2,
                explanation: 'Usamos "at" con horas específicas: at 9 AM, at midnight, at noon.'
            },
            {
                type: 'fill', label: 'Completa con la preposición correcta',
                text: 'I was born ___ March.',
                answer: ['in'],
                explanation: 'Usamos "in" con meses, años y estaciones: in March, in 2020, in winter.'
            },
            {
                type: 'tf', label: '¿Es correcta esta oración?',
                text: 'We met on New Year\'s Day.',
                correct: true,
                explanation: 'Usamos "on" con días específicos y fechas: on Monday, on July 4th, on New Year\'s Day.'
            },
            {
                type: 'mc', label: 'Elige la preposición correcta',
                text: 'The book is ___ the table.',
                options: ['in', 'on', 'at', 'to'],
                correct: 1,
                explanation: 'Usamos "on" para superficies: on the table, on the wall, on the floor.'
            },
            {
                type: 'fill', label: 'Completa con la preposición correcta',
                text: 'She lives ___ Paris.',
                answer: ['in'],
                explanation: 'Usamos "in" con ciudades y países: in Paris, in Spain, in Tokyo.'
            }
        ]
    },
    {
        id: 'gerunds-infinitives', title: 'Gerunds & Infinitives', desc: 'Verb + -ing vs Verb + to',
        icon: 'fa-puzzle-piece', explanation: 'Algunos verbos van con gerundio (-ing): enjoy, avoid, finish, suggest. Otros van con infinitivo (to): want, decide, agree, hope. Algunos aceptan ambos con cambio de significado.',
        questions: [
            {
                type: 'mc', label: 'Elige la forma correcta',
                text: 'I enjoy ___ books in my free time.',
                options: ['to read', 'reading', 'read', 'reads'],
                correct: 1,
                explanation: '"Enjoy" siempre va seguido de gerundio: enjoy reading.'
            },
            {
                type: 'fill', label: 'Completa con la forma correcta',
                text: 'She decided ___ abroad next year.',
                answer: ['to study'],
                explanation: '"Decide" va seguido de infinitivo con "to": decided to study.'
            },
            {
                type: 'tf', label: '¿Es correcta esta oración?',
                text: 'I want learning English.',
                correct: false,
                explanation: '"Want" va seguido de infinitivo con "to", no de gerundio. Lo correcto: "I want to learn English."'
            },
            {
                type: 'mc', label: 'Elige la forma correcta',
                text: 'He avoided ___ the difficult question.',
                options: ['to answer', 'answering', 'answer', 'answered'],
                correct: 1,
                explanation: '"Avoid" siempre va seguido de gerundio: avoided answering.'
            },
            {
                type: 'fill', label: 'Completa con la forma correcta',
                text: 'They agreed ___ us with the project.',
                answer: ['to help'],
                explanation: '"Agree" va seguido de infinitivo con "to": agreed to help.'
            }
        ]
    }
];

/* ================================================================
       ESTADO DEL JUEGO
       ================================================================ */
let state = {
    xp: 0,
    streak: 0,
    hearts: 5,
    progress: {},
    currentLesson: null,
    currentQuestionIdx: 0,
    lessonCorrect: 0,
    lessonTotal: 0,
    lessonFirstTry: 0,
    selectedOption: null,
    answered: false,
    woSelected: [],
    woBank: []
};

/* ================================================================
       PERSISTENCIA (LocalStorage)
       ================================================================ */
function saveProgress() {
    try {
        localStorage.setItem('grammarquest', JSON.stringify({
            xp: state.xp,
            streak: state.streak,
            progress: state.progress
        }));
    } catch (e) { /* silencio */ }
}
function loadProgress() {
    try {
        const data = JSON.parse(localStorage.getItem('grammarquest'));
        if (data) {
            state.xp = data.xp || 0;
            state.streak = data.streak || 0;
            state.progress = data.progress || {};
        }
    } catch (e) { /* silencio */ }
}

/* ================================================================
       AUDIO (Web Audio API)
       ================================================================ */
let audioCtx = null;
function ensureAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') audioCtx.resume();
}
function playSound(type) {
    try {
        ensureAudio();
        const t = audioCtx.currentTime;
        if (type === 'correct') {
            [523.25, 659.25].forEach((freq, i) => {
                const o = audioCtx.createOscillator();
                const g = audioCtx.createGain();
                o.connect(g); g.connect(audioCtx.destination);
                o.type = 'sine';
                o.frequency.setValueAtTime(freq, t + i * 0.1);
                g.gain.setValueAtTime(0.25, t + i * 0.1);
                g.gain.exponentialRampToValueAtTime(0.001, t + i * 0.1 + 0.25);
                o.start(t + i * 0.1); o.stop(t + i * 0.1 + 0.25);
            });
        } else if (type === 'wrong') {
            const o = audioCtx.createOscillator();
            const g = audioCtx.createGain();
            o.connect(g); g.connect(audioCtx.destination);
            o.type = 'sawtooth';
            o.frequency.setValueAtTime(200, t);
            o.frequency.linearRampToValueAtTime(140, t + 0.25);
            g.gain.setValueAtTime(0.15, t);
            g.gain.exponentialRampToValueAtTime(0.001, t + 0.3);
            o.start(t); o.stop(t + 0.3);
        } else if (type === 'complete') {
            [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
                const o = audioCtx.createOscillator();
                const g = audioCtx.createGain();
                o.connect(g); g.connect(audioCtx.destination);
                o.type = 'sine';
                o.frequency.setValueAtTime(freq, t + i * 0.12);
                g.gain.setValueAtTime(0.25, t + i * 0.12);
                g.gain.exponentialRampToValueAtTime(0.001, t + i * 0.12 + 0.3);
                o.start(t + i * 0.12); o.stop(t + i * 0.12 + 0.3);
            });
        } else if (type === 'click') {
            const o = audioCtx.createOscillator();
            const g = audioCtx.createGain();
            o.connect(g); g.connect(audioCtx.destination);
            o.type = 'sine';
            o.frequency.setValueAtTime(880, t);
            g.gain.setValueAtTime(0.08, t);
            g.gain.exponentialRampToValueAtTime(0.001, t + 0.05);
            o.start(t); o.stop(t + 0.06);
        }
    } catch (e) { /* silencio si no hay audio */ }
}

/* ================================================================
       CONFETTI
       ================================================================ */
function launchConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.display = 'block';
    const colors = ['#58CC02', '#1CB0F6', '#FF9600', '#CE82FF', '#FF4B4B', '#FFDC0D'];
    const particles = Array.from({ length: 120 }, () => ({
        x: Math.random() * canvas.width,
        y: -20 - Math.random() * 300,
        w: 7 + Math.random() * 6,
        h: 4 + Math.random() * 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 5,
        vy: 2.5 + Math.random() * 4,
        rot: Math.random() * 360,
        rotV: (Math.random() - 0.5) * 12,
        opacity: 1
    }));
    function frame() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let alive = false;
        particles.forEach(p => {
            if (p.opacity <= 0) return;
            alive = true;
            p.x += p.vx; p.y += p.vy; p.vy += 0.12;
            p.rot += p.rotV;
            if (p.y > canvas.height + 20) p.opacity -= 0.05;
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rot * Math.PI / 180);
            ctx.globalAlpha = Math.max(0, p.opacity);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
            ctx.restore();
        });
        if (alive) requestAnimationFrame(frame);
        else canvas.style.display = 'none';
    }
    frame();
}

/* ================================================================
       UTILIDADES UI
       ================================================================ */
const $ = id => document.getElementById(id);

function showScreen(screenId) {
    ['home-screen', 'intro-screen', 'lesson-screen', 'results-screen'].forEach(s => {
        $(s).classList.toggle('hidden', s !== screenId);
    });
    $('lesson-bottom').classList.toggle('hidden', screenId !== 'lesson-screen');

    const logo = document.querySelector('.bar-logo');
    const backBtn = document.querySelector('.bar-back');
    if (backBtn) backBtn.remove();

    if (screenId !== 'home-screen') {
        const btn = document.createElement('button');
        btn.className = 'bar-back';
        btn.innerHTML = '<i class="fas fa-times"></i>';
        btn.setAttribute('aria-label', 'Cerrar');
        btn.onclick = () => {
            if (screenId === 'lesson-screen') showHeartModal();
            else showHome();
        };
        $('top-bar').insertBefore(btn, logo);
        logo.style.display = 'none';
    } else {
        logo.style.display = 'flex';
    }
}

function updateHeader() {
    $('header-xp').textContent = state.xp;
    $('header-streak').textContent = state.streak;
    $('header-hearts').textContent = state.hearts;
}

/* ================================================================
       MODAL CORAZONES
       ================================================================ */
function showHeartModal() {
    const overlay = $('modal-overlay');
    overlay.classList.remove('hidden');
    overlay.innerHTML = `
        <div class="modal-box">
            <div class="modal-icon"><i class="fas fa-heart-crack" style="color:var(--danger)"></i></div>
            <div class="modal-title">Sin corazones</div>
            <div class="modal-text">Te has quedado sin corazones. Vuelve al inicio para intentarlo de nuevo.</div>
            <button class="btn-duo btn-danger btn-full" onclick="closeModal(); showHome();">
                VOLVER AL INICIO
            </button>
        </div>
    `;
}
function closeModal() {
    $('modal-overlay').classList.add('hidden');
}

/* ================================================================
       PANTALLA HOME — ÁRBOL DE HABILIDADES
       ================================================================ */
function showHome() {
    showScreen('home-screen');
    state.hearts = 5;
    updateHeader();
    renderSkillTree();
}

function isLessonUnlocked(idx) {
    if (idx === 0) return true;
    const prev = LESSONS[idx - 1];
    return state.progress[prev.id] && state.progress[prev.id].completed;
}

function getLessonStatus(idx) {
    const lesson = LESSONS[idx];
    if (state.progress[lesson.id] && state.progress[lesson.id].completed) return 'completed';
    if (isLessonUnlocked(idx)) return 'available';
    return 'locked';
}

function renderSkillTree() {
    const tree = $('skill-tree');
    tree.innerHTML = '';

    LESSONS.forEach((lesson, idx) => {
        const status = getLessonStatus(idx);
        const prog = state.progress[lesson.id];
        const stars = prog ? prog.stars : 0;
        const connectorClass = status === 'completed' ? 'conn-completed' : (status === 'available' ? 'conn-available' : 'conn-locked');

        let starsHTML = '';
        if (status === 'completed') {
            starsHTML = '<div class="node-stars">';
            for (let s = 1; s <= 3; s++) {
                starsHTML += `<i class="fas fa-star ${s <= stars ? 'star-earned' : 'star-empty'}"></i>`;
            }
            starsHTML += '</div>';
        }

        let innerIcon = '';
        if (status === 'completed') innerIcon = '<i class="fas fa-check"></i>';
        else if (status === 'locked') innerIcon = '<i class="fas fa-lock" style="font-size:18px"></i>';
        else innerIcon = `<span style="font-weight:900;font-size:22px">${idx + 1}</span>`;

        const node = document.createElement('div');
        node.className = `skill-node node-${status}`;
        node.dataset.idx = idx;
        node.innerHTML = `
            <div class="node-connector ${connectorClass}"></div>
            <div class="node-circle">${innerIcon}</div>
            <div class="node-info">
                <span class="node-title">${lesson.title}</span>
                <span class="node-desc">${lesson.desc}</span>
                ${starsHTML}
            </div>
        `;

        if (status !== 'locked') {
            node.style.cursor = 'pointer';
            node.onclick = () => {
                playSound('click');
                showLessonIntro(idx);
            };
        }

        tree.appendChild(node);
    });

    // Animación de entrada escalonada
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    tree.querySelectorAll('.skill-node').forEach((n, i) => {
        n.style.transitionDelay = `${i * 0.08}s`;
        observer.observe(n);
    });
}

/* ================================================================
       PANTALLA INTRO DE LECCIÓN
       ================================================================ */
function showLessonIntro(idx) {
    const lesson = LESSONS[idx];
    const status = getLessonStatus(idx);
    const prog = state.progress[lesson.id];

    showScreen('intro-screen');
    const screen = $('intro-screen');

    let btnText = 'COMENZAR';
    let btnClass = 'btn-primary';
    let metaText = `${lesson.questions.length} preguntas`;

    if (status === 'completed') {
        btnText = 'PRACTICAR';
        metaText += ` · Mejor puntuación: ${prog.bestAccuracy}%`;
    }

    screen.innerHTML = `
        <div class="intro-icon"><i class="fas ${lesson.icon}"></i></div>
        <div class="intro-title">${lesson.title}</div>
        <div class="intro-desc">${lesson.explanation}</div>
        <div class="intro-meta">${metaText}</div>
        <button class="btn-duo ${btnClass}" style="padding:16px 48px;font-size:17px" onclick="startLesson(${idx})">
            ${btnText}
        </button>
    `;
}

/* ================================================================
       LECCIÓN — INICIO Y FLUJO
       ================================================================ */
function startLesson(idx) {
    playSound('click');
    state.currentLesson = idx;
    state.currentQuestionIdx = 0;
    state.lessonCorrect = 0;
    state.lessonTotal = 0;
    state.lessonFirstTry = 0;
    state.hearts = 5;
    state.selectedOption = null;
    state.answered = false;
    showScreen('lesson-screen');
    updateHeader();
    renderQuestion();
}

function renderQuestion() {
    const lesson = LESSONS[state.currentLesson];
    const q = lesson.questions[state.currentQuestionIdx];
    const total = lesson.questions.length;
    const pct = (state.currentQuestionIdx / total) * 100;

    $('progress-fill').style.width = pct + '%';
    state.selectedOption = null;
    state.answered = false;
    state.woSelected = [];
    state.woBank = shuffle([...(q.words || [])]);

    const container = $('question-container');
    container.classList.remove('anim-slide-in');
    void container.offsetWidth;
    container.classList.add('anim-slide-in');

    let html = `<div class="question-label">${q.label}</div>`;
    switch (q.type) {
        case 'mc': html += renderMC(q); break;
        case 'fill': html += renderFill(q); break;
        case 'tf': html += renderTF(q); break;
        case 'wordOrder': html += renderWO(q); break;
    }
    container.innerHTML = html;
    bindQuestionEvents(q);

    const btn = $('check-btn');
    btn.disabled = true;
    btn.textContent = 'COMPROBAR';
    btn.className = 'btn-duo btn-primary btn-full';
    btn.onclick = () => checkAnswer();

    if (q.type === 'fill') {
        const inp = container.querySelector('.fill-input');
        if (inp) setTimeout(() => inp.focus(), 100);
    }
}

/* --- Renderizado por tipo --- */
function renderMC(q) {
    let html = `<div class="question-text">${q.text}</div><div class="options-list">`;
    q.options.forEach((opt, i) => {
        html += `
            <div class="option-card" data-idx="${i}" role="button" tabindex="0" aria-label="Opción ${i + 1}: ${opt}">
                <span class="option-marker">${i + 1}</span>
                <span>${opt}</span>
            </div>`;
    });
    html += '</div>';
    return html;
}

function renderFill(q) {
    const parts = q.text.split('___');
    let displayText = parts[0] + '<span class="blank-highlight">______</span>' + (parts[1] || '');
    return `
        <div class="question-text">${displayText}</div>
        <input type="text" class="fill-input" placeholder="Escribe tu respuesta..." autocomplete="off" autocapitalize="off" spellcheck="false">
    `;
}

function renderTF(q) {
    return `
        <div class="question-text" style="font-size:22px;text-align:center;padding:8px 0">"${q.text}"</div>
        <div style="display:flex;gap:12px;margin-top:16px">
            <div class="option-card tf-option" data-val="true" role="button" tabindex="0" style="flex:1;justify-content:center;text-align:center">
                <i class="fas fa-check" style="color:var(--primary);font-size:20px"></i>
                <span>Correcto</span>
            </div>
            <div class="option-card tf-option" data-val="false" role="button" tabindex="0" style="flex:1;justify-content:center;text-align:center">
                <i class="fas fa-xmark" style="color:var(--danger);font-size:20px"></i>
                <span>Incorrecto</span>
            </div>
        </div>
    `;
}

function renderWO(q) {
    let bankHTML = state.woBank.map((w, i) => `<span class="wo-chip" data-bank-idx="${i}">${w}</span>`).join('');
    return `
        <div class="wo-answer-area" id="wo-answer"></div>
        <div class="wo-bank" id="wo-bank">${bankHTML}</div>
    `;
}

/* --- Event binding por tipo --- */
function bindQuestionEvents(q) {
    const container = $('question-container');

    if (q.type === 'mc') {
        container.querySelectorAll('.option-card').forEach(card => {
            const handler = () => {
                if (state.answered) return;
                playSound('click');
                container.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
                state.selectedOption = parseInt(card.dataset.idx);
                $('check-btn').disabled = false;
            };
            card.onclick = handler;
            card.onkeydown = (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handler(); } };
        });
    } else if (q.type === 'fill') {
        const inp = container.querySelector('.fill-input');
        inp.oninput = () => {
            state.selectedOption = inp.value.trim();
            $('check-btn').disabled = !inp.value.trim();
        };
        inp.onkeydown = (e) => {
            if (e.key === 'Enter' && inp.value.trim()) checkAnswer();
        };
    } else if (q.type === 'tf') {
        container.querySelectorAll('.tf-option').forEach(card => {
            const handler = () => {
                if (state.answered) return;
                playSound('click');
                container.querySelectorAll('.tf-option').forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
                state.selectedOption = card.dataset.val === 'true';
                $('check-btn').disabled = false;
            };
            card.onclick = handler;
            card.onkeydown = (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handler(); } };
        });
    } else if (q.type === 'wordOrder') {
        bindWordOrderEvents();
    }
}

/* --- Word Order events --- */
function bindWordOrderEvents() {
    const answerArea = $('wo-answer');
    const bankArea = $('wo-bank');

    bankArea.querySelectorAll('.wo-chip').forEach(chip => {
        chip.onclick = () => {
            if (state.answered) return;
            playSound('click');
            const idx = parseInt(chip.dataset.bankIdx);
            const word = state.woBank.splice(idx, 1)[0];
            state.woSelected.push(word);
            rerenderWO();
            $('check-btn').disabled = state.woSelected.length === 0;
        };
    });

    answerArea.addEventListener('click', (e) => {
        const chip = e.target.closest('.wo-chip');
        if (!chip || state.answered) return;
        playSound('click');
        const idx = parseInt(chip.dataset.selIdx);
        const word = state.woSelected.splice(idx, 1)[0];
        state.woBank.push(word);
        rerenderWO();
        $('check-btn').disabled = state.woSelected.length === 0;
    });
}

function rerenderWO() {
    const answerArea = $('wo-answer');
    const bankArea = $('wo-bank');

    answerArea.innerHTML = state.woSelected.map((w, i) =>
        `<span class="wo-chip chip-selected" data-sel-idx="${i}">${w}</span>`
    ).join('');

    bankArea.innerHTML = state.woBank.map((w, i) =>
        `<span class="wo-chip" data-bank-idx="${i}">${w}</span>`
    ).join('');

    bindWordOrderEvents();
}

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

/* ================================================================
       COMPROBAR RESPUESTA
       ================================================================ */
function checkAnswer() {
    if (state.answered) {
        nextQuestion();
        return;
    }

    const lesson = LESSONS[state.currentLesson];
    const q = lesson.questions[state.currentQuestionIdx];
    let isCorrect = false;
    const container = $('question-container');

    state.answered = true;
    state.lessonTotal++;

    if (q.type === 'mc') {
        isCorrect = state.selectedOption === q.correct;
        const cards = container.querySelectorAll('.option-card');
        cards.forEach((c, i) => {
            c.classList.add('disabled');
            if (i === q.correct) c.classList.add('correct');
            if (i === state.selectedOption && !isCorrect) c.classList.add('wrong');
        });
    } else if (q.type === 'fill') {
        const userAns = String(state.selectedOption).trim().toLowerCase();
        isCorrect = q.answer.some(a => a.toLowerCase() === userAns);
        const inp = container.querySelector('.fill-input');
        inp.disabled = true;
        inp.classList.add(isCorrect ? 'input-correct' : 'input-wrong');
        if (!isCorrect) {
            inp.value += `  →  ${q.answer[0]}`;
        }
    } else if (q.type === 'tf') {
        isCorrect = state.selectedOption === q.correct;
        const cards = container.querySelectorAll('.tf-option');
        cards.forEach(c => {
            c.classList.add('disabled');
            const val = c.dataset.val === 'true';
            if (val === q.correct) c.classList.add('correct');
            if (val === state.selectedOption && !isCorrect) c.classList.add('wrong');
        });
    } else if (q.type === 'wordOrder') {
        const userSentence = state.woSelected.join(' ');
        isCorrect = userSentence.toLowerCase() === q.correct.toLowerCase();
        const answerChips = $('wo-answer').querySelectorAll('.wo-chip');
        answerChips.forEach(chip => {
            chip.style.cursor = 'default';
            chip.classList.add(isCorrect ? 'chip-correct' : 'chip-wrong');
        });
        $('wo-bank').querySelectorAll('.wo-chip').forEach(c => c.style.cursor = 'default');
        if (!isCorrect) {
            const resultDiv = document.createElement('div');
            resultDiv.className = 'wo-result result-wrong';
            resultDiv.innerHTML = `<i class="fas fa-xmark"></i> Respuesta correcta: <strong>${q.correct}</strong>`;
            container.appendChild(resultDiv);
        }
    }

    // Feedback
    if (isCorrect) {
        state.lessonCorrect++;
        state.lessonFirstTry++;
        playSound('correct');
    } else {
        state.hearts = Math.max(0, state.hearts - 1);
        playSound('wrong');
        container.classList.add('anim-shake');
        setTimeout(() => container.classList.remove('anim-shake'), 500);
        updateHeader();
    }

    // Mostrar explicación
    const expDiv = document.createElement('div');
    expDiv.className = 'explanation-box';
    expDiv.innerHTML = `<i class="fas fa-lightbulb" style="color:var(--gold);margin-right:6px"></i> ${q.explanation}`;
    container.appendChild(expDiv);

    // Cambiar botón a CONTINUAR
    const btn = $('check-btn');
    btn.disabled = false;
    btn.textContent = 'CONTINUAR';
    btn.className = 'btn-duo btn-secondary btn-full';

    // Sin corazones → forzar modal
    if (state.hearts <= 0) {
        btn.disabled = true;
        setTimeout(() => showHeartModal(), 1200);
    }
}

function nextQuestion() {
    playSound('click');
    const lesson = LESSONS[state.currentLesson];
    state.currentQuestionIdx++;
    if (state.currentQuestionIdx >= lesson.questions.length) {
        finishLesson();
    } else {
        renderQuestion();
    }
}

/* ================================================================
       FIN DE LECCIÓN — RESULTADOS
       ================================================================ */
function finishLesson() {
    const lesson = LESSONS[state.currentLesson];
    const completed = state.hearts > 0;
    const accuracy = state.lessonTotal > 0 ? Math.round((state.lessonCorrect / state.lessonTotal) * 100) : 0;

    let stars = 0;
    if (completed) {
        if (accuracy === 100) stars = 3;
        else if (accuracy >= 80) stars = 2;
        else stars = 1;
    }

    let xpEarned = 0;
    if (completed) {
        xpEarned = state.lessonCorrect * 10 + (stars * 15);
        state.xp += xpEarned;
        state.streak++;

        const prev = state.progress[lesson.id];
        if (!prev || stars > prev.stars) {
            state.progress[lesson.id] = { completed: true, stars, bestAccuracy: Math.max(accuracy, prev ? prev.bestAccuracy : 0) };
        } else if (prev) {
            state.progress[lesson.id].bestAccuracy = Math.max(accuracy, prev.bestAccuracy);
        }
    } else {
        state.streak = 0;
    }

    saveProgress();
    updateHeader();

    showScreen('results-screen');
    const screen = $('results-screen');

    const iconClass = completed ? 'icon-success' : 'icon-fail';
    const iconFA = completed ? 'fa-trophy' : 'fa-heart-crack';
    const title = completed ? 'Lección completada' : 'Lección incompleta';
    const subtitle = completed
        ? `${lesson.title} — ${accuracy}% de precisión`
        : 'Te quedaste sin corazones. Inténtalo de nuevo.';

    let starsHTML = '';
    if (completed) {
        starsHTML = '<div class="result-stars">';
        for (let s = 1; s <= 3; s++) {
            starsHTML += `<i class="fas fa-star ${s <= stars ? 'star-earned' : 'star-empty'}"></i>`;
        }
        starsHTML += '</div>';
    }

    screen.innerHTML = `
        <div class="result-icon ${iconClass}"><i class="fas ${iconFA}"></i></div>
        <div class="result-title">${title}</div>
        <div class="result-subtitle">${subtitle}</div>
        ${starsHTML}
        ${completed ? `<div class="result-new-xp"><i class="fas fa-star"></i> +${xpEarned} XP</div>` : ''}
        <div class="result-stats">
            <div class="result-stat-card">
                <div class="result-stat-value" style="color:var(--primary)">${state.lessonCorrect}</div>
                <div class="result-stat-label">Correctas</div>
            </div>
            <div class="result-stat-card">
                <div class="result-stat-value" style="color:var(--danger)">${state.lessonTotal - state.lessonCorrect}</div>
                <div class="result-stat-label">Incorrectas</div>
            </div>
            <div class="result-stat-card">
                <div class="result-stat-value" style="color:var(--secondary)">${accuracy}%</div>
                <div class="result-stat-label">Precisión</div>
            </div>
        </div>
        <button class="btn-duo btn-primary btn-full" style="max-width:400px" onclick="showHome()">
            CONTINUAR
        </button>
    `;

    if (completed) {
        playSound('complete');
        setTimeout(() => launchConfetti(), 300);
    }
}

/* ================================================================
       INICIALIZACIÓN
       ================================================================ */
loadProgress();
showHome();
