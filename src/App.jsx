import { useState, useEffect } from 'react'
import './App.css'
import { 
  FaHeart, FaHome, FaGift, FaEnvelope, FaQuoteLeft, FaBook,
  FaStar, FaMusic, FaSun, FaRing, FaCoffee, FaMoon, FaGem,
  FaSeedling, FaGlassCheers
} from 'react-icons/fa'
import { 
  GiRose, GiButterfly, GiDiamondRing, GiBigDiamondRing,
  GiChocolateBar, GiStaryu
} from 'react-icons/gi'
import { 
  IoSparkles, IoHeartSharp, IoGift
} from 'react-icons/io5'
import { 
  RiHeartsFill, RiHeartFill, RiHeart3Fill
} from 'react-icons/ri'

// Navigation Component
const Navigation = ({ currentPage, setCurrentPage }) => {
  const pages = [
    { id: 'home', label: 'Home', icon: FaHome },
    { id: 'memories', label: 'Memories', icon: FaBook },
    { id: 'quotes', label: 'Love Notes', icon: FaEnvelope },
    { id: 'quiz', label: 'Our Story', icon: RiHeartsFill },
    { id: 'gifts', label: 'Gifts', icon: FaGift }
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-rose-950/90 via-pink-900/90 to-red-950/90 backdrop-blur-md border-b border-pink-500/30 shadow-lg">
      <div className="flex justify-center items-center gap-1 sm:gap-4 py-3 px-2 overflow-x-auto">
        {pages.map(page => {
          const IconComponent = page.icon
          return (
            <button
              key={page.id}
              onClick={() => setCurrentPage(page.id)}
              className={`flex items-center gap-1 sm:gap-2 text-xs sm:text-base px-1.5 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all duration-300 whitespace-nowrap ${
                currentPage === page.id
                  ? 'bg-pink-500 text-white shadow-lg shadow-pink-500/50 scale-105'
                  : 'bg-white/10 text-pink-200 hover:bg-white/20 hover:scale-105'
              }`}
            >
              <IconComponent className="text-base sm:text-lg" />
              <span className="font-quicksand font-medium hidden sm:inline">{page.label}</span>
              <span className="font-quicksand font-medium sm:hidden">{page.label.split(' ')[0]}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}

// Floating Hearts Component
const FloatingHearts = () => {
  const hearts = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 4,
    size: 10 + Math.random() * 20
  }))

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="absolute animate-float text-pink-400 opacity-60"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
            fontSize: `${heart.size}px`
          }}
        >
          <FaHeart className="text-pink-400" />
        </div>
      ))}
    </div>
  )
}

// Pulsing Heart Component
const PulsingHeart = () => (
  <div className="relative flex items-center justify-center my-6 sm:my-8">
    <div className="text-6xl sm:text-8xl md:text-9xl animate-heartbeat cursor-pointer hover:scale-110 transition-transform text-pink-500">
      <IoHeartSharp />
    </div>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full bg-pink-400/20 animate-ping" />
    </div>
  </div>
)

// Love Letter Component
const LoveLetter = ({ isOpen, setIsOpen }) => (
  <div className="my-8 sm:my-12 flex flex-col items-center px-4">
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={`relative cursor-pointer transition-all duration-700 ${isOpen ? 'scale-105 sm:scale-110' : 'hover:scale-105'}`}
    >
      {/* Envelope */}
      <div className={`w-64 sm:w-72 md:w-96 h-40 sm:h-48 md:h-56 bg-gradient-to-br from-rose-200 to-pink-300 rounded-lg shadow-2xl transition-all duration-500 ${isOpen ? 'opacity-50' : ''}`}>
        <div className="absolute top-0 left-0 right-0 h-20 sm:h-24 md:h-28 bg-gradient-to-br from-rose-300 to-pink-400 rounded-t-lg" 
             style={{ clipPath: 'polygon(0 0, 50% 100%, 100% 0)' }} />
        <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 text-3xl sm:text-4xl text-rose-700">
          <FaEnvelope />
        </div>
      </div>
      
      {/* Letter content */}
      <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${isOpen ? 'opacity-100 -translate-y-16 sm:-translate-y-20' : 'opacity-0'}`}>
        <div className="bg-white/95 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl shadow-2xl max-w-xs sm:max-w-sm border-2 border-pink-200">
          <p className="font-dancing text-lg sm:text-xl md:text-2xl text-rose-600 text-center leading-relaxed">
            Dear Rifat, every moment with you feels like a beautiful dream I never want to wake up from. You are my everything. <FaHeart className="inline text-rose-500" />
          </p>
        </div>
      </div>
    </div>
    <p className="mt-4 text-pink-300 text-xs sm:text-sm animate-pulse flex items-center justify-center gap-2">
      <span>{isOpen ? 'Click to close' : 'Click to open the letter'}</span>
      <FaEnvelope />
    </p>
  </div>
)

// Reasons I Love You Component
const ReasonsILoveYou = () => {
  const reasons = [
    { icon: IoSparkles, color: "text-yellow-300", reason: "Your beautiful smile lights up my world" },
    { icon: FaStar, color: "text-purple-300", reason: "The way you laugh makes my heart skip a beat" },
    { icon: GiRose, color: "text-rose-400", reason: "Your kindness inspires me every day" },
    { icon: RiHeart3Fill, color: "text-pink-400", reason: "You make every ordinary moment magical" },
    { icon: GiButterfly, color: "text-purple-400", reason: "Being with you feels like home" },
    { icon: RiHeartsFill, color: "text-pink-300", reason: "You're my best friend and my soulmate" },
    { icon: FaStar, color: "text-yellow-400", reason: "Your strength and courage inspire me" },
    { icon: FaMusic, color: "text-blue-300", reason: "You're the melody in my heart" },
    { icon: FaSun, color: "text-yellow-400", reason: "You brighten even the darkest days" },
  ]

  return (
    <div className="my-12 sm:my-16">
      <h2 className="font-dancing text-3xl sm:text-4xl md:text-5xl text-center text-pink-200 mb-8 sm:mb-10 px-4">
        Why I Love You, Rifat
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto px-4">
        {reasons.map((item, index) => {
          const IconComponent = item.icon
          return (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-pink-300/30 hover:bg-white/20 hover:border-pink-300/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-pink-500/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`text-3xl sm:text-4xl mb-3 group-hover:scale-125 transition-transform duration-300 ${item.color}`}>
                <IconComponent />
              </div>
              <p className="text-pink-100 font-quicksand text-base sm:text-lg">
                {item.reason}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// Memory Timeline Component
const MemoryTimeline = () => {
  const memories = [
    { date: "First Meeting", memory: "The moment I first saw you, I knew you were special", icon: FaStar, color: "text-yellow-300" },
    { date: "First Date", memory: "Nervous butterflies, endless conversation, and the beginning of forever", icon: GiRose, color: "text-rose-400" },
    // { date: "First Kiss", memory: "Time stood still and my heart knew it was home", icon: FaHeart, color: "text-red-400" },
    { date: "The Proposal", memory: "I asked you to be mine forever, and you said yes!", icon: GiDiamondRing, color: "text-yellow-200" },
    { date: "Every Day", memory: "Loving you more with each passing moment", icon: RiHeartsFill, color: "text-pink-400" },
    { date: "Our Future", memory: "Forever and always, my beautiful Rifat", icon: IoSparkles, color: "text-yellow-300" }
  ]

  return (
    <div className="my-12 sm:my-16 px-4">
      <h2 className="font-dancing text-3xl sm:text-4xl md:text-5xl text-center text-pink-200 mb-10 sm:mb-16">
        Our Beautiful Journey
      </h2>
      <div className="max-w-3xl mx-auto">
        {memories.map((item, index) => {
          const IconComponent = item.icon
          return (
            <div
              key={index}
              className={`flex gap-4 sm:gap-6 mb-8 sm:mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            >
              <div className="flex flex-col items-center">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-linear-to-br from-pink-400 to-rose-500 flex items-center justify-center text-xl sm:text-3xl shadow-lg shrink-0 ${item.color}`}>
                  <IconComponent />
                </div>
              {index < memories.length - 1 && (
                <div className="w-0.5 h-16 sm:h-24 bg-gradient-to-b from-pink-400 to-transparent mt-2" />
              )}
            </div>
            <div className={`flex-1 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
              <h3 className="font-dancing text-xl sm:text-2xl text-pink-300 mb-2">{item.date}</h3>
              <p className="text-pink-100 font-quicksand text-sm sm:text-base leading-relaxed">{item.memory}</p>
            </div>
          </div>
          )
        })}
      </div>
    </div>
  )
}

// Love Quotes Component
const LoveQuotes = () => {
  const quotes = [
    { quote: "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.", author: "For My Rifat" },
    { quote: "You are my today and all of my tomorrows.", author: "Forever Promise" },
    { quote: "I love you not only for what you are, but for what I am when I am with you.", author: "My Truth" },
    { quote: "Every love story is beautiful, but ours is my favorite.", author: "Our Story" },
    { quote: "You are the finest, loveliest, tenderest person I have ever known.", author: "My Everything" },
    { quote: "I would find you in any lifetime.", author: "Eternal Love" }
  ]

  const [currentQuote, setCurrentQuote] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="my-12 sm:my-16 px-4">
      <h2 className="font-dancing text-3xl sm:text-4xl md:text-5xl text-center text-pink-200 mb-10 sm:mb-16">
        Words From My Heart
      </h2>
      <div className="max-w-2xl mx-auto">
        <div className="relative min-h-[200px] sm:min-h-[250px] flex items-center justify-center">
          {quotes.map((item, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex flex-col items-center justify-center p-6 sm:p-8 transition-opacity duration-1000 ${
                index === currentQuote ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <FaQuoteLeft className="text-4xl sm:text-6xl mb-4 sm:mb-6 text-pink-300" />
              <p className="font-quicksand text-lg sm:text-xl md:text-2xl text-pink-100 text-center leading-relaxed mb-4 sm:mb-6">
                {item.quote}
              </p>
              <p className="font-dancing text-xl sm:text-2xl text-pink-300">— {item.author}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-6 sm:mt-8">
          {quotes.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentQuote(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentQuote ? 'bg-pink-400 w-6 sm:w-8' : 'bg-pink-400/30'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

// Interactive Quiz Component
const LoveQuiz = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)

  const questions = [
    {
      q: "What makes Rifat special?",
      options: ["Everything", "Her smile", "Her heart", "All of the above"],
      correct: 3
    },
    {
      q: "How much do I love you?",
      options: ["A lot", "So much", "More than words", "Infinitely"],
      correct: 3
    },
    {
      q: "What's our future together?",
      options: ["Bright", "Beautiful", "Forever", "All of these"],
      correct: 3
    }
  ]

  const handleAnswer = (questionIndex, answerIndex) => {
    setSelectedAnswers({ ...selectedAnswers, [questionIndex]: answerIndex })
  }

  const checkResults = () => {
    setShowResults(true)
  }

  const allCorrect = questions.every((q, i) => selectedAnswers[i] === q.correct)

  return (
    <div className="my-12 sm:my-16 px-4">
      <h2 className="font-dancing text-3xl sm:text-4xl md:text-5xl text-center text-pink-200 mb-8 sm:mb-12">
        Our Love Story Quiz
      </h2>
      <div className="max-w-2xl mx-auto">
        {questions.map((question, qIndex) => (
          <div key={qIndex} className="mb-6 sm:mb-8 bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-pink-300/30">
            <h3 className="font-quicksand text-lg sm:text-xl text-pink-200 mb-4">{question.q}</h3>
            <div className="space-y-2 sm:space-y-3">
              {question.options.map((option, oIndex) => (
                <button
                  key={oIndex}
                  onClick={() => handleAnswer(qIndex, oIndex)}
                  className={`w-full text-left px-4 py-2 sm:py-3 rounded-xl transition-all duration-300 text-sm sm:text-base ${
                    selectedAnswers[qIndex] === oIndex
                      ? 'bg-pink-500 text-white shadow-lg'
                      : 'bg-white/5 text-pink-100 hover:bg-white/10'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}
        <button
          onClick={checkResults}
          className="w-full bg-linear-to-r from-pink-500 to-rose-500 text-white font-quicksand text-base sm:text-lg py-3 sm:py-4 rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
        >
          <span>See Results</span>
          <RiHeartsFill />
        </button>
        {showResults && (
          <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-pink-300/30 text-center">
            <div className="text-4xl sm:text-6xl mb-4 text-pink-400">
              {allCorrect ? <FaGlassCheers /> : <RiHeartsFill />}
            </div>
            <p className="font-dancing text-2xl sm:text-3xl text-pink-200 mb-2">
              {allCorrect ? 'Perfect!' : 'Every answer about us is right!'}
            </p>
            <p className="font-quicksand text-base sm:text-lg text-pink-100 flex items-center justify-center gap-2">
              <span>Because our love is perfect in every way, Rifat!</span>
              <RiHeart3Fill className="text-pink-400" />
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

// Virtual Gifts Component
const VirtualGifts = () => {
  const gifts = [
    { icon: FaSeedling, color: "text-green-400", name: "A Bouquet", message: "Fresh roses just for you" },
    { icon: GiChocolateBar, color: "text-yellow-700", name: "Chocolates", message: "Sweet, just like you" },
    { icon: FaGem, color: "text-cyan-300", name: "A Diamond", message: "Rare and precious, like our love" },
    { icon: GiRose, color: "text-rose-400", name: "A Rose", message: "Beauty that never fades" },
    { icon: FaCoffee, color: "text-yellow-800", name: "Coffee Date", message: "Let's make more memories" },
    { icon: FaMoon, color: "text-yellow-200", name: "The Moon", message: "I'd give you the moon and stars" },
    { icon: FaEnvelope, color: "text-rose-300", name: "Love Letter", message: "Written from my heart" },
    { icon: FaMusic, color: "text-purple-400", name: "Our Song", message: "The soundtrack of our love" },
    { icon: FaStar, color: "text-yellow-300", name: "A Star", message: "Named after you" }
  ]

  const [opened, setOpened] = useState([])

  const openGift = (index) => {
    if (!opened.includes(index)) {
      setOpened([...opened, index])
    }
  }

  return (
    <div className="my-12 sm:my-16 px-4">
      <h2 className="font-dancing text-3xl sm:text-4xl md:text-5xl text-center text-pink-200 mb-8 sm:mb-12">
        Virtual Gifts for Rifat
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-6 max-w-4xl mx-auto">
        {gifts.map((gift, index) => {
          const IconComponent = gift.icon
          return (
            <div
              key={index}
              onClick={() => openGift(index)}
              className={`cursor-pointer transition-all duration-500 ${
                opened.includes(index) ? 'scale-105' : 'hover:scale-105'
              }`}
            >
              <div className="bg-linear-to-br from-pink-400/20 to-rose-500/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border-2 border-pink-300/30 hover:border-pink-300/60 transition-all duration-300 shadow-lg">
                <div className={`text-4xl sm:text-6xl mb-2 sm:mb-3 text-center animate-bounce ${opened.includes(index) ? gift.color : 'text-pink-400'}`}>
                  {opened.includes(index) ? <IconComponent /> : <IoGift />}
                </div>
              <h3 className="font-dancing text-base sm:text-xl text-pink-200 text-center mb-1 sm:mb-2">
                {opened.includes(index) ? gift.name : 'Tap to Open'}
              </h3>
              {opened.includes(index) && (
                <p className="font-quicksand text-xs sm:text-sm text-pink-100 text-center">
                  {gift.message}
                </p>
              )}
            </div>
          </div>
          )
        })}
      </div>
      <p className="text-center text-pink-300 font-quicksand mt-6 sm:mt-8 text-sm sm:text-base flex items-center justify-center gap-2">
        <span>Click each gift to unwrap it!</span>
        <IoGift />
      </p>
    </div>
  )
}



// Countdown Component
const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({})
  const valentinesDay = new Date('2026-02-14T00:00:00')

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      const diff = valentinesDay - now

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60)
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const isValentines = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0

  if (isValentines) {
    return (
      <div className="text-center my-8 sm:my-12 px-4">
        <h2 className="font-dancing text-3xl sm:text-5xl md:text-6xl text-pink-200 animate-pulse flex items-center justify-center gap-3">
          <FaGlassCheers className="text-yellow-300" />
          <span>Happy Valentine's Day, Rifat!</span>
          <FaHeart className="text-pink-400" />
        </h2>
      </div>
    )
  }

  return (
    <div className="text-center my-8 sm:my-12 px-4">
      <h3 className="font-dancing text-xl sm:text-2xl md:text-3xl text-pink-300 mb-4 sm:mb-6">
        Counting down to our special day...
      </h3>
      <div className="flex justify-center gap-2 sm:gap-4 flex-wrap">
        {[
          { value: timeLeft.days, label: 'Days' },
          { value: timeLeft.hours, label: 'Hours' },
          { value: timeLeft.minutes, label: 'Minutes' },
          { value: timeLeft.seconds, label: 'Seconds' }
        ].map((item, i) => (
          <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 min-w-[70px] sm:min-w-[80px] md:min-w-[100px] border border-pink-300/30">
            <div className="font-dancing text-2xl sm:text-3xl md:text-5xl text-white">
              {item.value ?? '--'}
            </div>
            <div className="text-pink-300 text-xs sm:text-sm mt-1 font-quicksand">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Promise Ring Component
const PromiseRing = () => (
  <div className="my-12 sm:my-16 text-center px-4">
    <div className="inline-block p-6 sm:p-8 rounded-full bg-gradient-to-br from-yellow-200/20 to-yellow-500/20 border border-yellow-300/30 animate-pulse">
      <div className="text-5xl sm:text-7xl md:text-8xl text-yellow-200">
        <GiBigDiamondRing />
      </div>
    </div>
    <h3 className="font-dancing text-2xl sm:text-3xl md:text-4xl text-pink-200 mt-4 sm:mt-6 mb-3 sm:mb-4">
      My Promise to You, Rifat
    </h3>
    <p className="font-quicksand text-pink-100 max-w-md mx-auto text-base sm:text-lg leading-relaxed">
      I promise to love you, cherish you, and make you smile every single day. 
      You're not just my fiancée — you're my forever. <FaHeart className="inline text-pink-400" />
    </p>
  </div>
)

// Home Page Component
const HomePage = ({ letterOpen, setLetterOpen }) => (
  <>
    <header className="text-center mb-6 sm:mb-8 px-4">
      <h1 className="font-dancing text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white drop-shadow-lg animate-fadeIn">
        Happy Valentine's Day
      </h1>
      <p className="font-dancing text-xl sm:text-2xl md:text-4xl text-pink-200 mt-3 sm:mt-4 animate-fadeIn animation-delay-300 flex items-center justify-center gap-2">
        <span>My Beautiful Rifat</span>
        <FaHeart className="text-pink-400" />
      </p>
    </header>

    <PulsingHeart />
    
    <Countdown />
    
    <div className="max-w-3xl mx-auto text-center my-8 sm:my-12 px-4">
      <p className="font-quicksand text-lg sm:text-xl md:text-2xl text-pink-100 leading-relaxed">
        Every day with you is a blessing. You've filled my life with so much love, 
        joy, and meaning. I can't wait to spend forever with you. 
      </p>
      <span className="flex items-center justify-center gap-2 mt-3 sm:mt-4 font-dancing text-2xl sm:text-3xl text-white">
        <span>You are my everything</span>
        <IoSparkles className="text-yellow-300" />
      </span>
    </div>

    <LoveLetter isOpen={letterOpen} setIsOpen={setLetterOpen} />
    
    <ReasonsILoveYou />
    
    <PromiseRing />
  </>
)

// Main App Component
function App() {
  const [letterOpen, setLetterOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage letterOpen={letterOpen} setLetterOpen={setLetterOpen} />
      case 'memories':
        return <MemoryTimeline />
      case 'quotes':
        return <LoveQuotes />
      case 'quiz':
        return <LoveQuiz />
      case 'gifts':
        return <VirtualGifts />
      default:
        return <HomePage letterOpen={letterOpen} setLetterOpen={setLetterOpen} />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-900 via-pink-800 to-red-900 relative overflow-x-hidden">
      <FloatingHearts />
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <div className="relative z-10 pt-20 pb-8 sm:pt-24 sm:pb-12 px-4">
        {renderPage()}

        <footer className="text-center mt-12 sm:mt-16 pb-6 sm:pb-8">
          <div className="font-dancing text-2xl sm:text-3xl md:text-5xl text-white mb-3 sm:mb-4">
            Forever & Always
          </div>
          <div className="flex justify-center gap-1 sm:gap-2 text-xl sm:text-2xl">
            {[RiHeart3Fill, FaHeart, RiHeartFill, RiHeart3Fill, FaHeart, RiHeartFill, RiHeart3Fill].map((HeartIcon, i) => (
              <HeartIcon 
                key={i} 
                className="animate-bounce text-pink-400" 
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
          <p className="text-pink-300/60 mt-4 sm:mt-6 font-quicksand text-xs sm:text-sm px-4 flex items-center justify-center gap-2">
            <span>Made with all my love, just for you Rifat</span>
            <FaHeart className="text-pink-400" />
          </p>
        </footer>
      </div>
    </div>
  )
}

export default App
