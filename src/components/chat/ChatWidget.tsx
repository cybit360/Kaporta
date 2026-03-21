'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { MessageCircle, X, Send, Phone, ExternalLink, Minimize2 } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date;
}

const FAQ_RESPONSES: { keywords: string[]; answer: string }[] = [
  {
    keywords: ['service', 'services', 'what do you do', 'offer', 'provide'],
    answer:
      'We offer Quarrying & Mining, Concrete Production, Haulage & Logistics, Civil Engineering & Construction, Power & Energy Solutions, and Equipment Rental.',
  },
  {
    keywords: ['hour', 'hours', 'open', 'time', 'schedule', 'when'],
    answer: "We're open Monday\u2013Saturday, 8:00 AM \u2013 6:00 PM.",
  },
  {
    keywords: ['location', 'address', 'where', 'office', 'find you', 'headquarters'],
    answer:
      'Our headquarters is at Benguema Firing Range, Waterloo, Freetown, Sierra Leone.',
  },
  {
    keywords: ['contact', 'phone', 'call', 'email', 'reach', 'whatsapp'],
    answer:
      'Call us at +232 78341012, email kaportaq1@gmail.com, or WhatsApp us.',
  },
  {
    keywords: ['quote', 'estimate', 'price', 'cost', 'pricing', 'how much'],
    answer:
      'Pricing varies by project. Visit our Request a Quote page to get a personalized estimate.',
  },
  {
    keywords: ['career', 'job', 'jobs', 'hiring', 'work', 'vacancy', 'internship'],
    answer:
      'Check our Careers page for current openings and internship programs.',
  },
  {
    keywords: ['quarry', 'mining', 'stone', 'aggregate', 'crushed'],
    answer:
      'We produce premium-grade crushed stones, aggregates, and precast concrete blocks from our state-of-the-art quarry and crushing plant.',
  },
  {
    keywords: ['concrete', 'cement', 'block', 'ready-mix'],
    answer:
      'Our industrial-grade concrete production plants produce high-quality ready-mix concrete, precast products, and concrete blocks meeting international standards.',
  },
  {
    keywords: ['haulage', 'logistics', 'transport', 'delivery', 'fleet', 'truck'],
    answer:
      'We offer comprehensive haulage and logistics with a fleet of well-maintained vehicles, covering all of Sierra Leone.',
  },
  {
    keywords: ['construction', 'engineering', 'building', 'road', 'bridge', 'civil'],
    answer:
      'Our civil engineering team delivers infrastructure, road construction, bridge building, and commercial construction projects to the highest standards.',
  },
  {
    keywords: ['power', 'energy', 'generator', 'solar', 'electricity'],
    answer:
      'We provide hybrid power solutions including generators, solar panels, and full system installations with maintenance support.',
  },
  {
    keywords: ['equipment', 'rental', 'hire', 'excavator', 'crane', 'bulldozer'],
    answer:
      'We offer excavators, bulldozers, loaders, cranes, dump trucks, and more \u2014 all regularly maintained and operated by trained professionals.',
  },
  {
    keywords: ['about', 'company', 'who', 'history', 'founded'],
    answer:
      'Kaporta Investment Sierra Leone Limited was founded in 2008 and has over 15 years of experience in construction and logistics across West Africa.',
  },
  {
    keywords: ['project', 'projects', 'portfolio', 'past work'],
    answer:
      'We have completed major infrastructure, commercial, and government projects across Sierra Leone. Visit our Projects page to see our portfolio.',
  },
];

const SUGGESTED_QUESTIONS = [
  'What services do you offer?',
  'What are your hours?',
  'How do I request a quote?',
  'Where are you located?',
];

const GREETING: Message = {
  id: 0,
  text: 'Hello! How can we help you today?',
  sender: 'bot',
  timestamp: new Date(),
};

function findResponse(input: string): string {
  const lower = input.toLowerCase();
  for (const faq of FAQ_RESPONSES) {
    if (faq.keywords.some((kw) => lower.includes(kw))) {
      return faq.answer;
    }
  }
  return "Thanks for your message! For specific inquiries, please call us at +232 78341012 or email kaportaq1@gmail.com. You can also submit a Request a Quote form for project estimates.";
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState('');
  const [hasUnread, setHasUnread] = useState(false);
  const [nextId, setNextId] = useState(1);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && !isMinimized) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, isMinimized]);

  const sendMessage = useCallback(
    (text: string) => {
      if (!text.trim()) return;

      const userMsg: Message = {
        id: nextId,
        text: text.trim(),
        sender: 'user',
        timestamp: new Date(),
      };

      const botReply: Message = {
        id: nextId + 1,
        text: findResponse(text),
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMsg]);
      setNextId((prev) => prev + 2);
      setInput('');

      // Simulate typing delay
      setTimeout(() => {
        setMessages((prev) => [...prev, botReply]);
        if (isMinimized) {
          setHasUnread(true);
        }
      }, 600);
    },
    [nextId, isMinimized]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleToggle = () => {
    if (!isOpen) {
      setIsOpen(true);
      setIsMinimized(false);
      setHasUnread(false);
    } else if (isMinimized) {
      setIsMinimized(false);
      setHasUnread(false);
    } else {
      setIsOpen(false);
    }
  };

  const handleMinimize = () => {
    setIsMinimized(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsMinimized(false);
  };

  const showSuggestions = messages.length <= 1;

  return (
    <>
      {/* Chat panel */}
      {isOpen && !isMinimized && (
        <div
          className="fixed bottom-20 right-4 sm:right-6 z-[90] w-[calc(100vw-2rem)] sm:w-[400px] h-[500px] max-h-[70vh] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden animate-slide-up"
          role="complementary"
          aria-label="Chat support"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-deep-blue text-white flex-shrink-0">
            <div>
              <h3 className="text-sm font-heading font-semibold">
                Kaporta Group Support
              </h3>
              <p className="text-[11px] text-white/70">
                Typically replies instantly
              </p>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={handleMinimize}
                className="p-1.5 rounded-md hover:bg-white/10 transition-colors"
                aria-label="Minimize chat"
              >
                <Minimize2 className="h-4 w-4" />
              </button>
              <button
                onClick={handleClose}
                className="p-1.5 rounded-md hover:bg-white/10 transition-colors"
                aria-label="Close chat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-soft-white/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-deep-blue text-white rounded-br-md'
                      : 'bg-white text-charcoal border border-gray-100 rounded-bl-md shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />

            {/* Suggested questions */}
            {showSuggestions && (
              <div className="space-y-2 pt-1">
                <p className="text-[11px] text-concrete-gray font-medium uppercase tracking-wider">
                  Suggested Questions
                </p>
                {SUGGESTED_QUESTIONS.map((q) => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    className="block w-full text-left px-3 py-2 text-sm text-deep-blue bg-white border border-deep-blue/15 rounded-xl hover:bg-deep-blue/5 hover:border-deep-blue/30 transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quick actions */}
          <div className="flex items-center gap-2 px-4 py-2 border-t border-gray-100 bg-white flex-shrink-0">
            <Link
              href="/quote"
              className="flex items-center gap-1 px-3 py-1.5 text-[11px] font-semibold bg-construction-yellow/15 text-construction-yellow-dark rounded-full hover:bg-construction-yellow/25 transition-colors"
            >
              <ExternalLink className="h-3 w-3" />
              Request Quote
            </Link>
            <a
              href="tel:+23278341012"
              className="flex items-center gap-1 px-3 py-1.5 text-[11px] font-semibold bg-forest-green/10 text-forest-green-dark rounded-full hover:bg-forest-green/20 transition-colors"
            >
              <Phone className="h-3 w-3" />
              Call Us
            </a>
            <a
              href="https://wa.me/23278341012"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-1.5 text-[11px] font-semibold bg-green-50 text-green-700 rounded-full hover:bg-green-100 transition-colors"
            >
              <MessageCircle className="h-3 w-3" />
              WhatsApp
            </a>
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 px-4 py-3 border-t border-gray-100 bg-white flex-shrink-0"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 text-sm text-charcoal placeholder:text-concrete-gray/60 bg-soft-white rounded-full px-4 py-2.5 outline-none border border-gray-200 focus:border-deep-blue/30 transition-colors"
              aria-label="Chat message"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-2.5 bg-deep-blue text-white rounded-full hover:bg-deep-blue-light disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex-shrink-0"
              aria-label="Send message"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={handleToggle}
        className="fixed bottom-4 right-4 sm:right-6 z-[90] w-14 h-14 bg-construction-yellow text-deep-blue rounded-full shadow-lg hover:bg-construction-yellow-dark hover:shadow-xl transition-all duration-200 flex items-center justify-center group"
        aria-label={isOpen ? 'Close chat' : 'Open chat support'}
      >
        {isOpen && !isMinimized ? (
          <X className="h-6 w-6" />
        ) : (
          <>
            <MessageCircle className="h-6 w-6" />
            {/* Notification dot */}
            {hasUnread && (
              <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-forest-green rounded-full border-2 border-white" />
            )}
          </>
        )}
      </button>
    </>
  );
}
