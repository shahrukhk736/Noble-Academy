import ExamInterface from './components/ExamInterface';
import React, { useState, useEffect, useMemo } from 'react';

import { 
  Eye, EyeOff, User, Clock, ChevronLeft, LogIn, UserPlus, LogOut, CheckCircle, Database, 
  History, BookOpen, AlertCircle, ExternalLink, GraduationCap, LayoutDashboard, Settings, 
  ArrowRight, Award, Zap, ShieldCheck, Mail, Lock, Loader2, Phone, Building2, 
  BookText, Users, UserCircle, ChevronDown, MapPin, Target, BarChart3, 
  CheckSquare, Lightbulb 
} from 'lucide-react';


// --- ASSET PATHS ---
const LOGO_SMALL = "New Small Logo.png";
const LOGO_BANNER = "old flyers.png";
const LOGO_GREY = "New Logo Grey.jpg";
const LOGO_SMALLW = "small.png";

const handleLogout = () => {
    // 1. Clear the local storage session
    localStorage.removeItem('noble_user');
    localStorage.removeItem('noble_profile');

    // 2. Clear React state
    setUser(null);
    setProfile(null);
    setAllResults([]);

    // 3. Go back to Home
    setScreen('landing');
  };

// --- TG EAPCET PYQ-LEVEL CONTENT BANK ---
const TG_EAPCET_BANK = {
  math: [
    { text: "If the area of the region bounded by y = x², y = |2 - x²| and y = 2 is A, then 3A is equal to:", options: ["8√2 - 4", "16√2 - 8", "8√2 - 2", "4√2 - 1"], correct: 1 },
    { text: "The sum of the series cot⁻¹(2) + cot⁻¹(8) + cot⁻¹(18) + cot⁻¹(32) + ... up to n terms is:", options: ["tan⁻¹(n/(n+1))", "tan⁻¹(n+1)", "tan⁻¹(n/(n+2))", "tan⁻¹(n)"], correct: 0 },
    { text: "Let f(x) be a polynomial of degree 4 such that f(1)=1, f(2)=2, f(3)=3, f(4)=4. If f(5)=30, find the leading coefficient.", options: ["1/24", "1", "25/24", "1/12"], correct: 2 },
    { text: "The number of real roots of the equation e^(sin x) - e^(-sin x) - 4 = 0 is:", options: ["0", "1", "2", "Infinite"], correct: 0 },
    { text: "If the eccentricity of the ellipse x²/a² + y²/b² = 1 is 1/2 and the distance between foci is 4, find a² + b².", options: ["12", "20", "28", "16"], correct: 2 },
  ],
  physics: [
    { text: "A small block of mass m is pushed against a spring of constant k on a smooth horizontal table. The block is released and hits a vertical wall at distance L. If collision is perfectly elastic, the time taken to return to spring is:", options: ["π√(m/k) + 2L/v", "2π√(m/k) + L/v", "π/2√(m/k) + 2L/v", "π√(m/k) + L/v"], correct: 0 },
    { text: "In a Bohr model, the ratio of the magnetic moment of an electron to its angular momentum is:", options: ["e/m", "e/2m", "2e/m", "e/πm"], correct: 1 },
    { text: "An ideal gas undergoes a process where P = kV³. The molar heat capacity for this process is:", options: ["Cv + R/2", "Cv + 3R/4", "Cv + R/4", "Cv + R"], correct: 2 },
  ],
  chemistry: [
    { text: "The major product formed when 2-bromo-3-methylbutane reacts with alcoholic KOH is:", options: ["2-methyl-2-butene", "3-methyl-1-butene", "2-methyl-1-butene", "2-methylbutane"], correct: 0 },
    { text: "Which of the following complexes is paramagnetic and has tetrahedral geometry?", options: ["[Ni(CO)₄]", "[NiCl₄]²⁻", "[Ni(CN)₄]²⁻", "[PdCl₄]²⁻"], correct: 1 },
    { text: "The standard reduction potentials of Zn²⁺/Zn and Fe²⁺/Fe are -0.76V and -0.44V respectively. The EMF of the cell Zn | Zn²⁺(0.1M) || Fe²⁺(0.01M) | Fe is:", options: ["0.32V", "0.29V", "0.35V", "1.20V"], correct: 1 },
  ]
};

const formatTime = (seconds) => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
};

// --- COMPONENTS ---

const Header = ({ syncStatus, timer, user, onLogout, setScreen, setAuthMode }) => (
  <header className="bg-[#21293c] text-white p-3 flex justify-between items-center border-b-4 border-[#f3b54a] sticky top-0 z-50 shadow-xl">
    <div className="flex items-center gap-4">
      <div className="rounded-lg flex items-center h-10 px-2 cursor-pointer hover:scale-105 transition-transform" onClick={() => window.location.reload()}>
        <img src={LOGO_BANNER} className="w-64 h-auto object-contain mt-5" alt="Logo" />
      </div>
      <div className="hidden lg:block border-l border-slate-700 pl-4">
        <h1 className="text-[30px] font-black text-[#f3b54a] uppercase tracking-[0.1em]">Noble Academic Portal</h1>
        <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">{syncStatus === 'syncing' ? 'Cloud Synchronizing...' : 'Session Secured'}</p>
      </div>
    </div>
    
    <div className="flex items-center gap-6">
      {timer !== null && (
        <div className="flex items-center gap-3 bg-[#1a202e] px-5 py-1.5 rounded-xl border border-slate-700">
          <Clock size={16} className="text-[#f3b54a]" />
          <span className="font-mono text-xl font-black text-white">{timer}</span>
        </div>
      )}

      {/* --- REPLACE THIS SECTION --- */}
      {user ? (
        <div className="flex items-center gap-3 pl-4 border-l border-slate-700">
          <div className="text-right hidden sm:block">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Student Name</p>
            <p className="text-[25px] font-bold text-white">{user.name || 'Student'}</p>
          </div>
          <button onClick={onLogout} className="w-8 h-8 rounded-lg bg-[#f3b54a] flex items-center justify-center shadow-lg hover:bg-red-500 hover:text-white transition-colors group">
            <LogOut size={16} className="group-hover:scale-110 transition-transform" />
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-8">
          <button 
            onClick={() => { setAuthMode('login'); setScreen('login'); }}
            className="flex items-center gap-2 text-[13px] font-black text-white uppercase tracking-wider hover:text-[#f3b54a] transition-all"
          >
            <LogIn size={18} />
            <span>Login</span>
          </button>
          <button 
            onClick={() => { setAuthMode('signup'); setScreen('login'); }}
            className="flex items-center gap-2 bg-[#f3b54a] text-[#21293c] px-6 py-3 rounded-2xl text-[13px] font-black uppercase tracking-wider hover:bg-white transition-all shadow-xl active:scale-95"
          >
            <UserPlus size={18} />
            <span>Create Account</span>
          </button>
        </div>
      )}
    </div>
  </header>
);

const App = () => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [screen, setScreen] = useState('landing'); 
  const [authMode, setAuthMode] = useState('login'); 
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState('');
  const [loading, setLoading] = useState(false);
  
  // Registration Fields
  const [studentName, setStudentName] = useState('');
  const [collegeName, setCollegeName] = useState('');
  const [studentClass, setStudentClass] = useState('');
  const [group, setGroup] = useState('');
  const [contactNo, setContactNo] = useState('');

  const [selectedMock, setSelectedMock] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [activeSubject, setActiveSubject] = useState('math');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [timeLeft, setTimeLeft] = useState(180 * 60);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [syncStatus, setSyncStatus] = useState('idle');
  const [allResults, setAllResults] = useState([]);

useEffect(() => {
  // Check if a user session exists in local storage
  const savedUser = localStorage.getItem('noble_user');
  const savedProfile = localStorage.getItem('noble_profile');
  
  if (savedUser && savedProfile) {
    setUser(JSON.parse(savedUser));
    setProfile(JSON.parse(savedProfile));
    // setScreen('dashboard');
  }
}, []);

const handleAuth = async (e) => {
  e.preventDefault();
  setLoading(true);
  setAuthError('');

  try {
    // Determine if we are hitting the login or register endpoint
    const endpoint = authMode === 'login' ? '/api/login' : '/api/register';
    
    // Prepare the student data
    const payload = authMode === 'login' 
      ? { loginId, password } 
      : { loginId, password, name: studentName, college: collegeName, class: studentClass, group, contact: contactNo };

    // Send data to your Node.js server
    const response = await fetch(`http://localhost:5000${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await response.json();

    if (response.ok) {
      // SUCCESS: Save the session in the browser's memory
      localStorage.setItem('noble_user', JSON.stringify(data.user));
      localStorage.setItem('noble_profile', JSON.stringify(data.profile));
      
      setUser(data.user);
      setProfile(data.profile);
      setScreen('dashboard'); // Move to the student portal
    } else {
      setAuthError(data.message || 'Authentication failed');
    }
  } catch (err) {
    setAuthError('Cannot connect to Noble Local Server. Is node server.js running?');
  } finally {
    setLoading(false);
  }
};
const handleLogout = () => {
    // 1. Clear the local storage session
    localStorage.removeItem('noble_user');
    localStorage.removeItem('noble_profile');

    // 2. Clear React state
    setUser(null);
    setProfile(null);
    setAllResults([]);

    // 3. Go back to Home
    setScreen('landing');
  };

const startMockTest = async (testNum) => {
  setLoading(true);
  try {
    const seriesName = `MPC Mock Series #${testNum}`;
    const response = await fetch(`http://localhost:5000/api/questions/${encodeURIComponent(seriesName)}`);
    const data = await response.json();

    if (data && data.length > 0) {
      const formattedQs = data.map((q, index) => ({
        // Map Capitalized SQL names to lowercase React properties
        id: q.id || index,
        subject: (q.Subject || 'math').toLowerCase(), 
        number: index + 1,
        text: q.QuestionText,        // Matches 'QuestionText' in SQL
        options: [q.OptionA, q.OptionB, q.OptionC, q.OptionD], // Matches Capitalized SQL
        correctAnswer: parseInt(q.CorrectIndex),              // Matches 'CorrectIndex'
        status: 'not_visited',
        selectedOption: null
      }));

      setQuestions(formattedQs);
      setSelectedMock(testNum);
      setTimeLeft(180 * 60);
      setScreen('instructions');
    } else {
      alert("No data found for " + seriesName);
    }
  } catch (error) {
    alert("Backend connection failed! Ensure server.js is running.");
  } finally {
    setLoading(false);
  }
};

useEffect(() => {
    let interval;
    if (screen === 'test' && timeLeft > 0) interval = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    if (timeLeft <= 0 && screen === 'test') handleFinalSubmit();
    return () => clearInterval(interval);
  }, [screen, timeLeft]);

  const saveProgress = async (updatedQuestions) => {
    if (!user || !selectedMock) return;
    setSyncStatus('syncing');
    try {
      const sessionDoc = doc(db, 'artifacts', appId, 'users', user.uid, 'active_mocks', `mock_${selectedMock}`);
      await setDoc(sessionDoc, { questions: updatedQuestions, timeLeft, lastUpdated: Date.now() });
      setSyncStatus('saved');
    } catch (e) { setSyncStatus('error'); }
  };

  const handleFinalSubmit = async () => {
    if (!user) return;
    const stats = { correct: 0, wrong: 0, skipped: 0, total: questions.length };
    questions.forEach(q => {
      if (q.selectedOption === null) stats.skipped++;
      else if (q.selectedOption === q.correct) stats.correct++;
      else stats.wrong++;
    });

    const finalRes = {
      mockId: selectedMock, score: stats.correct, stats, timestamp: Date.now(),
      subjectBreakdown: {
        math: questions.filter(q => q.subject === 'math' && q.selectedOption === q.correct).length,
        physics: questions.filter(q => q.subject === 'physics' && q.selectedOption === q.correct).length,
        chemistry: questions.filter(q => q.subject === 'chemistry' && q.selectedOption === q.correct).length,
      }
    };
    await setDoc(doc(collection(db, 'artifacts', appId, 'users', user.uid, 'results')), finalRes);
    setScreen('result');
  };

  const updateQuestion = (idx, updates) => {
    const newQs = [...questions];
    newQs[idx] = { ...newQs[idx], ...updates };
    setQuestions(newQs);
    saveProgress(newQs);
  };

  // --- RENDERS ---
  

 if (screen === 'landing') {
  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      <Header 
        syncStatus={syncStatus} 
        timer={null} 
        user={user} 
        onLogout={handleLogout}
        setScreen={setScreen}     // ADD THIS
        setAuthMode={setAuthMode} // ADD THIS
      />
        
        {/* HERO SECTION - 🏠 Home Section */}
        <section className="relative min-h-[90vh] bg-[#21293c] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
  <div className="relative z-10 max-w-5xl">
    {/* The Yellow Badge */}
    <div className="bg-[#f3b54a] text-[#21293c] px-10 py-4 rounded-full text-xl font-black uppercase tracking-[0.2em] mb-12 inline-block shadow-2xl">
      Empowering Future Leaders
    </div>

    {/* The Main Heading */}
    <h1 className="text-5xl md:text-7xl font-black text-white mb-4 leading-none tracking-tighter uppercase">
      Welcome to <br />
      <span className="text-[#f3b54a]">Noble Academy</span>
    </h1>
            <p className="text-slate-300 text-lg md:text-2xl mb-12 max-w-4xl mx-auto font-medium leading-relaxed">
              Empowering students with quality education, strong concepts, and result-oriented guidance. 
              At Noble Academy, we believe every student has the potential to succeed with the right mentorship and environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button onClick={() => user ? setScreen('dashboard') : setScreen('login')} className="bg-[#f3b54a] text-[#21293c] px-14 py-6 rounded-[2rem] font-black text-sm uppercase tracking-widest hover:bg-white hover:scale-105 transition-all shadow-2xl shadow-[#f3b54a]/30">
                {user ? 'Enter NATS Portal' : 'Start Your Journey'}
              </button>
              <a href="#about" className="border-2 border-slate-700 text-white px-14 py-6 rounded-[2rem] font-black text-sm uppercase tracking-widest hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
                Learn More <ChevronDown size={18}/>
              </a>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION - 📘 About Us */}
        <section id="about" className="py-24 bg-slate-50 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <div className="inline-block p-3 bg-white rounded-2xl mb-6 shadow-sm"><BookOpen className="text-[#f3b54a]" size={32}/></div>
                <h2 className="text-4xl md:text-6xl font-black text-[#21293c] mb-8 tracking-tighter uppercase">Building <span className="text-[#f3b54a]">Strong Foundations</span></h2>
                <p className="text-slate-600 text-lg font-medium leading-relaxed mb-8">
                  Noble Academy is a dedicated coaching institute focused on building strong academic foundations. 
                  We specialize in preparing students for school exams and competitive exams with a structured approach.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: <Lightbulb size={20}/>, text: "Concept-based learning" },
                    { icon: <Users size={20}/>, text: "Personalized attention" },
                    { icon: <CheckSquare size={20}/>, text: "Regular assessments" },
                    { icon: <Award size={20}/>, text: "Motivation and mentorship" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                      <div className="text-[#f3b54a]">{item.icon}</div>
                      <span className="font-bold text-[#21293c] text-sm uppercase tracking-tight">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="bg-[#21293c] rounded-[4rem] p-12 text-white relative z-10 border-b-8 border-[#f3b54a]">
                  <h3 className="text-3xl font-black mb-6 uppercase tracking-tighter">Why Choose Us?</h3>
                  <ul className="space-y-6">
                    {["Experienced and dedicated faculty", "Small batch sizes for better attention", "Weekly tests & performance analysis", "Exam-oriented preparation", "Friendly and disciplined environment"].map((li, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <div className="mt-1 w-5 h-5 bg-[#f3b54a] rounded-full flex items-center justify-center shrink-0"><CheckCircle size={12} className="text-[#21293c]"/></div>
                        <p className="text-slate-300 font-bold">{li}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COURSES SECTION - 🎯 Courses Offered */}
        <section className="py-24 bg-white px-6">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-[#21293c] mb-4 tracking-tighter uppercase">Courses <span className="text-[#f3b54a]">Offered</span></h2>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">Comprehensive Academic & Competitive Programs</p>
          </div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Class X", subtitle: "SSC / CBSE / ICSE", icon: <GraduationCap size={40}/> },
              { title: "Intermediate", subtitle: "1st & 2nd Year", icon: <BookText size={40}/> },
              { title: "NEET Foundation", subtitle: "Medical Excellence", icon: <Target size={40}/> },
              { title: "EAPCET Preparation", subtitle: "State Rank Focused", icon: <Zap size={40}/> }
            ].map((course, i) => (
              <div key={i} className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 group hover:bg-[#21293c] transition-all duration-500">
                <div className="text-[#f3b54a] mb-6 group-hover:scale-110 transition-transform">{course.icon}</div>
                <h3 className="text-2xl font-black text-[#21293c] mb-2 group-hover:text-white transition-colors tracking-tighter">{course.title}</h3>
                <p className="text-slate-500 font-bold group-hover:text-slate-400 transition-colors uppercase text-[10px] tracking-widest">{course.subtitle}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TEST SERIES SECTION - 📝 Test Series & Practice */}
        <section className="py-24 bg-slate-900 px-6 text-white overflow-hidden relative">
          <img src={LOGO_SMALLW} className="absolute -top-0 -left--40 w-[500px] opacity-100" alt="" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
               <div className="lg:w-1/3">
                  <div className="bg-[#f3b54a] text-[#21293c] px-4 py-1 rounded-lg font-black uppercase text-[10px] tracking-widest mb-4 inline-block">The Noble Edge</div>
                  <h2 className="text-5xl font-black mb-6 tracking-tighter uppercase">NATS <br/><span className="text-[#f3b54a]">Series</span></h2>
                  <p className="text-slate-400 font-medium mb-10">Our exclusive Noble Academy Test Series is designed to bridge the gap between learning and performing.</p>
                  <button onClick={() => user ? setScreen('dashboard') : setScreen('login')} className="w-full bg-white text-[#21293c] py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-[#f3b54a] transition-all flex items-center justify-center gap-3">{user ? 'Enter Dashboard' : 'Access Portal'} <ExternalLink size={16}/></button>
               </div>
               <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                  {[
                    { title: "Chapter-wise tests", desc: "Granular assessment for each topic." },
                    { title: "Full-length mock exams", desc: "Real-time exam simulation through NATS." },
                    { title: "PYQ Practice", desc: "Solving actual TG EAPCET previous year questions." },
                    { title: "Answer Discussions", desc: "Detailed breakdown of strategies and solutions." }
                  ].map((box, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors">
                      <h4 className="text-[#f3b54a] font-black text-xl mb-2 tracking-tighter uppercase">{box.title}</h4>
                      <p className="text-slate-400 text-sm font-medium">{box.desc}</p>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </section>

        {/* TOLICHOWKI BRANCH INFO */}
        <section className="py-24 bg-white px-6">
          <div className="max-w-7xl mx-auto bg-slate-50 rounded-[4rem] p-12 md:p-20 relative overflow-hidden border border-slate-200 shadow-xl">
             <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-12">
                <div className="md:w-1/2">
                   <h2 className="text-4xl md:text-5xl font-black text-[#21293c] mb-6 tracking-tighter uppercase">Tolichowki</h2>
                   <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <MapPin className="text-[#f3b54a] mt-1" size={24}/>
                        <div>
                          <p className="font-black text-[#21293c] uppercase text-xs tracking-widest mb-1">Branch Location</p>
                          <p className="text-slate-600 font-bold text-lg leading-tight">Tolichowki, Hyderabad</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <Phone className="text-[#f3b54a] mt-1" size={24}/>
                        <div>
                          <p className="font-black text-[#21293c] uppercase text-xs tracking-widest mb-1">Academy Hotline</p>
                          <p className="text-[#21293c] font-black text-3xl tabular-nums tracking-tighter">9030233912</p>
                        </div>
                      </div>
                   </div>
                </div>
                <div className="md:w-1/2 flex justify-center">
  {/* Removed 'bg-white' and 'shadow-2xl' to match the background */}
  <div className="w-64 h-64 p-2 flex items-center justify-center ml-40">
     <img 
       src={LOGO_SMALLW} 
       className="w-full h-full object-contain" 
       alt="Noble Academy Logo" 
     />
  </div>
</div>
             </div>
          </div>
        </section>

        <footer className="bg-[#21293c] text-white p-12 text-center">
          <img src={LOGO_BANNER} className="h-20 mx-auto opacity-30 mb-8 grayscale invert" alt="" />
          <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em] mb-4">© Noble Academy Excellence Portal</p>
          <p className="text-[9px] font-bold text-slate-600 uppercase tracking-widest">Authorized Noble Academy Tolichowki Learning Environment • {new Date().getFullYear()}</p>
        </footer>
      </div>
    );
  }

// LOGIN SCREEN
  if (screen === 'login') {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
        <Header 
          syncStatus={syncStatus} 
          timer={null} 
          user={null} 
          setScreen={setScreen} 
          setAuthMode={setAuthMode} 
        />
        <main className="flex-1 flex items-center justify-center p-6">
          <div className={`w-full bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden transition-all duration-500 ${authMode === 'login' ? 'max-w-md' : 'max-w-2xl'}`}>
            <div className="bg-[#21293c] p-10 text-center relative">
              <img src={LOGO_GREY} className="absolute -top-10 -right-10 opacity-5 w-40" alt="" />
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 p-2 shadow-xl">
                <img src={LOGO_SMALL} alt="" className="w-full h-full object-contain" />
              </div>
              <h2 className="text-2xl font-black text-white tracking-tighter uppercase">
                {authMode === 'login' ? 'Student Login' : 'Registration'}
              </h2>
              <p className="text-slate-400 text-[10px] font-black mt-2 uppercase tracking-[0.2em]">Noble Academy Portal Access</p>
            </div>

            <div className="p-10 space-y-6">
              {authMode === 'login' ? (
                /* Standard Login Form */
                <form onSubmit={handleAuth} className="space-y-6">
                  {authError && (
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 flex items-center gap-3">
                      <AlertCircle className="text-red-500" size={18} />
                      <p className="text-[10px] font-black text-red-700 uppercase">{authError}</p>
                    </div>
                  )}
                  <div className="space-y-4">
                    <div className="space-y-2">
                 {/* 1. Changed Label from Email to Login ID */}
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Login ID</label>
                      
                      <div className="relative">
                        {/* 2. Changed Mail icon to User icon (optional but recommended) */}
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                        
                        <input 
                          type="text" // 3. CRITICAL: Change from "email" to "text"
                          required 
                          value={loginId} // Ensure you renamed your state from 'email' to 'loginId'
                          onChange={(e) => setLoginId(e.target.value)} 
                          placeholder="NA0101" // Updated placeholder for student IDs
                          className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-[#f3b54a] focus:outline-none font-medium transition-all" 
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Password</label>
                      <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                        <input type={showPassword ? "text" : "password"} required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="w-full pl-12 pr-12 py-3.5 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-[#f3b54a] focus:outline-none font-medium transition-all" />
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="w-full bg-[#21293c] text-white py-5 rounded-2xl font-black uppercase text-xs tracking-[0.2em] shadow-xl border-b-4 border-[#f3b54a]">
                    Sign In
                  </button>
                </form>
              ) : (
                /* --- REGISTRATION RESTRICTION MESSAGE --- */
                <div className="py-10 text-center space-y-6">
                  <div className="bg-slate-50 p-8 rounded-[2rem] border-2 border-dashed border-slate-200">
                    <div className="w-16 h-16 bg-[#f3b54a]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Phone className="text-[#f3b54a]" size={32} />
                    </div>
                    <h3 className="text-xl font-black text-[#21293c] uppercase tracking-tighter mb-2">Account Creation Restricted</h3>
                    <p className="text-slate-500 font-bold text-sm leading-relaxed mb-6">
                      Online registration is currently disabled. To create your student account and access the NATS Series, please contact our administration.
                    </p>
                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 inline-block">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Academy Hotline</p>
                      <p className="text-2xl font-black text-[#21293c] tracking-tighter">9030233912</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setAuthMode('login')}
                    className="text-[10px] font-black text-[#f3b54a] uppercase tracking-widest hover:underline"
                  >
                    Return to Login
                  </button>
                </div>
              )}

              {authMode === 'login' && (
                <div className="pt-6 border-t border-slate-100 text-center">
                  <button 
                    type="button" 
                    onClick={() => { setAuthMode('signup'); setAuthError(''); }} 
                    className="text-[10px] font-black text-[#f3b54a] uppercase tracking-widest hover:underline"
                  >
                    New student? Join Noble
                  </button>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    );
  }
  // --- DASHBOARD SCREEN (Add this between Login and Test screens) ---
if (screen === 'dashboard') {
  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
      <Header 
        syncStatus={syncStatus} 
        timer={null} 
        user={user} 
        onLogout={handleLogout}
        setScreen={setScreen}
        setAuthMode={setAuthMode}
      />
      
      <main className="max-w-7xl mx-auto w-full p-8 space-y-8">
        {/* Profile Welcome Card */}
        <div className="bg-[#21293c] rounded-[3rem] p-10 text-white shadow-2xl flex flex-col md:flex-row justify-between items-center border-b-8 border-[#f3b54a]">
          <div>
            <div className="bg-[#f3b54a] text-[#21293c] px-4 py-1 rounded-lg font-black uppercase text-[10px] tracking-widest mb-4 inline-block">Student Dashboard</div>
            <h2 className="text-4xl font-black uppercase tracking-tighter">Welcome, {profile?.name || 'NATS - Portal'}</h2>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mt-2">
              ID: {user?.loginId} • Group: <span className="text-[#f3b54a]">{profile?.group}</span> • {profile?.college}
            </p>
          </div>
          <div className="mt-6 md:mt-0 bg-white/5 p-6 rounded-[2rem] border border-white/10 text-center">
             <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-1">Target Exam</p>
             <p className="text-2xl font-black text-[#f3b54a]">{profile?.group === 'MPC' ? 'TG EAPCET' : 'NEET UG'}</p>
          </div>
        </div>

        {/* Mock Test Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((num) => (
            <div key={num} className="bg-white rounded-[2.5rem] p-8 border-2 border-slate-100 shadow-xl hover:border-[#f3b54a] transition-all group">
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-[#21293c] group-hover:bg-[#f3b54a] transition-colors">
                  <LayoutDashboard size={28} />
                </div>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest">Available</span>
              </div>
              <h3 className="text-xl font-black text-[#21293c] uppercase tracking-tighter mb-2">
                {profile?.group} Mock Series #{num}
              </h3>
              <p className="text-slate-500 text-sm font-medium mb-6">Full syllabus practice test designed for {profile?.group === 'MPC' ? 'Engineering' : 'Medical'} aspirants.</p>
              <button 
                onClick={() => startMockTest(num)}
                className="w-full py-4 bg-[#21293c] text-white rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-[#f3b54a] hover:text-[#21293c] transition-all shadow-lg"
              >
                Start Examination
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
  if (screen === 'test') {
    const currentQuestion = questions[currentIdx];
    const stats = { 
        answered: questions.filter(q => q.status === 'answered').length,
        notAnswered: questions.filter(q => q.status === 'not_answered').length,
        notVisited: questions.filter(q => q.status === 'not_visited').length,
        marked: questions.filter(q => q.status === 'marked').length,
        answeredMarked: questions.filter(q => q.status === 'answered_marked').length
    };
    
    return (
      <div className="h-screen flex flex-col bg-white overflow-hidden font-sans">
        <Header timer={formatTime(timeLeft)} syncStatus={syncStatus} user={user} onLogout={handleLogout} />
        
        <nav className="bg-[#f8fafc] border-b flex px-4 shadow-sm z-40">
          {['math', 'physics', 'chemistry'].map(sub => (
            <button
              key={sub}
              onClick={() => { setActiveSubject(sub); setCurrentIdx(questions.findIndex(q => q.subject === sub)); }}
              className={`px-10 py-4 text-[11px] font-black uppercase tracking-[0.2em] border-b-4 transition-all relative ${activeSubject === sub ? 'border-[#f3b54a] text-[#21293c] bg-white' : 'border-transparent text-slate-400 hover:text-[#21293c]'}`}
            >
              {sub}
              {activeSubject === sub && <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#f3b54a] rounded-full"></div>}
            </button>
          ))}
        </nav>

        <div className="flex-1 flex overflow-hidden">
          <div className="flex-1 flex flex-col overflow-hidden bg-white">
            <div className="p-8 flex-1 overflow-y-auto custom-scrollbar">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-10">
                  <div className="bg-[#21293c] text-white px-6 py-2 rounded-2xl font-black text-sm shadow-lg shadow-[#21293c]/10 tracking-widest uppercase">Question {currentQuestion.number}</div>
                  <div className="h-[2px] flex-1 bg-slate-100"></div>
                  <div className="text-[10px] font-black text-slate-300 uppercase tracking-widest">{activeSubject} Section</div>
                </div>
                <div className="bg-slate-50 p-10 rounded-[2.5rem] border-2 border-slate-100 mb-10 min-h-[220px] shadow-inner flex items-center">
                  <p className="text-2xl font-bold text-[#21293c] leading-relaxed tracking-tight">{currentQuestion.text}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {currentQuestion.options.map((opt, i) => (
                    <button key={i} onClick={() => updateQuestion(currentIdx, { selectedOption: i })} className={`group flex items-center gap-6 p-7 rounded-3xl border-2 transition-all text-left font-bold relative overflow-hidden ${currentQuestion.selectedOption === i ? 'bg-[#21293c] border-[#21293c] text-white scale-[1.02] shadow-2xl' : 'bg-white border-slate-100 hover:border-[#f3b54a]/30 text-slate-600'}`}>
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-black transition-all ${currentQuestion.selectedOption === i ? 'bg-[#f3b54a] text-[#21293c]' : 'bg-slate-100 text-slate-400 group-hover:bg-[#f3b54a]/10 group-hover:text-[#f3b54a]'}`}>{String.fromCharCode(65 + i)}</div>
                      <span className="text-lg">{opt}</span>
                    </button>))}
                </div>
              </div>
            </div>
            <div className="p-8 bg-white border-t flex justify-between items-center shadow-[0_-10px_30px_rgba(0,0,0,0.03)]">
              <div className="flex gap-4"><button onClick={() => updateQuestion(currentIdx, { status: currentQuestion.selectedOption !== null ? 'answered_marked' : 'marked' })} className="px-8 py-5 bg-[#6b46c1] text-white rounded-2xl font-black text-[10px] uppercase shadow-lg shadow-purple-200 transition-all hover:bg-[#553c9a] active:scale-95">Mark Review</button><button onClick={() => updateQuestion(currentIdx, { selectedOption: null, status: 'not_answered' })} className="px-8 py-5 text-slate-400 font-black text-[10px] uppercase hover:text-red-500">Clear</button></div>
              <div className="flex gap-4"><button onClick={() => setCurrentIdx(Math.max(0, currentIdx - 1))} className="px-8 py-5 border-2 border-slate-100 rounded-2xl font-black text-[10px] uppercase tracking-widest text-slate-400">Back</button><button onClick={() => { updateQuestion(currentIdx, { status: currentQuestion.selectedOption !== null ? 'answered' : 'not_answered' }); if (currentIdx < questions.length - 1) setCurrentIdx(currentIdx + 1); }} className="px-14 py-5 bg-[#21293c] text-white rounded-2xl font-black text-[10px] uppercase border-b-4 border-[#f3b54a] shadow-xl shadow-[#21293c]/20 hover:bg-[#1a202e]">Save & Next</button></div>
            </div>
          </div>

          {/* RIGHT: STUDENT PANEL */}
          <aside className="w-[380px] bg-slate-50 border-l border-slate-200 flex flex-col hidden xl:flex">
            <div className="p-6 border-b bg-white">
              <div className="flex items-center gap-4 bg-[#21293c] p-5 rounded-[2rem] text-white shadow-xl">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center p-1.5 shadow-inner"><img src={LOGO_SMALL} alt="Noble" className="w-full h-full object-contain" /></div>
                <div className="overflow-hidden"><p className="font-black uppercase text-[9px] text-[#f3b54a] tracking-widest mb-1">Authenticated Student</p><p className="text-sm font-bold truncate text-white">{profile?.name || "Candidate Name"}</p></div>
              </div>
            </div>
            <div className="p-6 overflow-y-auto custom-scrollbar flex-1 bg-white">
              <h4 className="text-[10px] font-black text-[#21293c] uppercase tracking-widest mb-6 border-b border-slate-50 pb-2">Status Legend</h4>
              
              {/* SHAPES AS PER Reference Capture.JPG */}
              <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-10">
                {/* Answered: Pentagon Up */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#10b981] text-white font-black text-[11px] flex items-center justify-center shadow-lg shadow-green-100" style={{ clipPath: 'polygon(50% 0%, 100% 38%, 100% 100%, 0 100%, 0% 38%)' }}>{stats.answered}</div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Answered</span>
                </div>
                {/* Not Answered: Pentagon Down */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#ef4444] text-white font-black text-[11px] flex items-center justify-center shadow-lg shadow-red-100" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 62%, 50% 100%, 0 62%)' }}>{stats.notAnswered}</div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Not Answered</span>
                </div>
                {/* Not Visited: Square */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-200 text-slate-500 font-black text-[11px] flex items-center justify-center rounded-lg border border-slate-300">{stats.notVisited}</div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Not Visited</span>
                </div>
                {/* Marked for Review: Circle */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#6b46c1] text-white font-black text-[11px] flex items-center justify-center rounded-full shadow-lg shadow-purple-100">{stats.marked}</div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Review</span>
                </div>
                {/* Answered & Marked: Circle with Check */}
                <div className="flex items-center gap-3 col-span-2">
                  <div className="relative">
                    <div className="w-10 h-10 bg-[#6b46c1] text-white font-black text-[11px] flex items-center justify-center rounded-full">{stats.answeredMarked}</div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#10b981] rounded-sm flex items-center justify-center text-[8px] border border-white"><CheckSquare size={10} className="text-white"/></div>
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter leading-tight">Answered & Marked <br/>(Will be evaluated)</span>
                </div>
              </div>

              <div className="flex items-center justify-between mb-4 mt-8"><h4 className="text-[10px] font-black text-[#21293c] uppercase tracking-widest">Question List</h4><span className="bg-[#f3b54a] text-[#21293c] px-2 py-0.5 rounded text-[9px] font-black uppercase">{activeSubject}</span></div>
              <div className="grid grid-cols-5 gap-3 p-1">
                {questions.map((q, idx) => {
                  if (q.subject !== activeSubject) return null;
                  const isActive = idx === currentIdx;
                  let shapeStyle = "bg-white text-slate-400 border-slate-200 rounded-lg";
                  let clip = ""; let checkIcon = false;
                  if (q.status === 'answered') { shapeStyle = "bg-[#10b981] text-white border-transparent"; clip = "polygon(50% 0%, 100% 38%, 100% 100%, 0 100%, 0% 38%)"; }
                  else if (q.status === 'not_answered') { shapeStyle = "bg-[#ef4444] text-white border-transparent"; clip = "polygon(0 0, 100% 0, 100% 62%, 50% 100%, 0 62%)"; }
                  else if (q.status === 'marked') { shapeStyle = "bg-[#6b46c1] text-white border-transparent rounded-full"; }
                  else if (q.status === 'answered_marked') { shapeStyle = "bg-[#6b46c1] text-white border-transparent rounded-full"; checkIcon = true; }
                  return (<button key={q.id} onClick={() => setCurrentIdx(idx)} className={`w-11 h-11 text-[11px] font-black transition-all flex items-center justify-center relative border-2 ${shapeStyle} ${isActive ? 'scale-110 ring-2 ring-[#f3b54a] ring-offset-2 z-10' : ''}`} style={clip ? { clipPath: clip } : {}}>{q.number}{checkIcon && (<div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-[#10b981] rounded-sm border border-white flex items-center justify-center"><CheckSquare size={8} className="text-white"/></div>)}</button>);
                })}
              </div>
            </div>
            <div className="p-8 bg-slate-50 border-t border-slate-200"><button onClick={() => { if (window.confirm("FINAL SUBMISSION?")) handleFinalSubmit(); }} className="w-full bg-[#21293c] text-white py-6 rounded-3xl font-black uppercase text-xs tracking-[0.2em] border-b-4 border-[#f3b54a] shadow-xl hover:bg-[#1a202e] transition-all active:scale-[0.98]">Submit NATS Test</button></div>
          </aside>
        </div>
      </div>
    );
  }

  if (screen === 'result') {
    const latest = allResults.sort((a,b) => b.timestamp - a.timestamp)[0];
    if (!latest) return null;
    return (
      <div className="min-h-screen bg-[#21293c] flex flex-col font-sans text-white p-6 relative overflow-hidden">
        <img src={LOGO_GREY} className="absolute -top-40 -right-40 w-[600px] opacity-5 pointer-events-none" alt="" />
        <main className="max-w-6xl mx-auto w-full flex-1 flex flex-col justify-center relative z-10">
          <div className="bg-[#1a202e] rounded-[4rem] overflow-hidden shadow-2xl border border-slate-800">
            <div className="bg-gradient-to-br from-[#21293c] to-[#1a202e] p-16 text-center border-b-8 border-[#f3b54a]">
                <div className="bg-white w-24 h-24 rounded-3xl mx-auto mb-10 flex items-center justify-center p-3 shadow-2xl rotate-3"><img src={LOGO_SMALL} className="w-full h-full object-contain" alt="" /></div>
                <h2 className="text-6xl font-black mb-4 uppercase leading-none tracking-tighter">NATS #{latest.mockId} <br/><span className="text-[#f3b54a]">Validated</span></h2>
                <p className="text-slate-400 font-bold uppercase tracking-[0.4em] text-xs">Official Performance Score: {profile?.name || "Candidate"}</p>
            </div>
            <div className="p-16"><div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16"><div className="bg-[#21293c] p-10 rounded-[2.5rem] text-center border-t-4 border-[#f3b54a] shadow-2xl"><p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Total Score</p><p className="text-7xl font-black text-white">{latest.score}</p></div><div className="bg-[#21293c] p-10 rounded-[2.5rem] text-center border-t-4 border-[#10b981] shadow-2xl"><p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Accuracy</p><p className="text-7xl font-black text-[#10b981]">{Math.round((latest.score / 160) * 100)}%</p></div><div className="bg-[#21293c] p-10 rounded-[2.5rem] text-center border-t-4 border-blue-500 shadow-2xl"><p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Academy Rank</p><p className="text-7xl font-black text-blue-500">{latest.score > 130 ? 'TOP' : 'ADV'}</p></div></div><div className="flex gap-6"><button onClick={() => setScreen('dashboard')} className="flex-1 bg-white text-[#21293c] font-black py-6 rounded-[2rem] uppercase tracking-widest hover:bg-[#f3b54a] transition-all shadow-xl">Dashboard</button></div></div>
          </div>
        </main>
      </div>
    );
  }
  return null;
};

export default App;