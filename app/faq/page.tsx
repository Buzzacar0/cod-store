"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select"
import {
  ShoppingCart,
  Globe,
  LogIn,
  UserPlus,
  Menu,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  Shield,
  Clock,
  CreditCard,
} from "lucide-react"
import Image from "next/image"
import { languages } from "@/lib/i18n"

const faqData = [
  {
    category: "Geral",
    icon: <MessageCircle className="h-5 w-5" />,
    questions: [
      {
        question: "O que é a Upgrade Store?",
        answer:
          "A Upgrade Store é uma plataforma especializada em serviços de progressão para Call of Duty Black Ops 6. Oferecemos bot lobbies, desbloqueio de camuflagens e cartões de visita de forma segura e rápida.",
      },
      {
        question: "Os serviços são seguros?",
        answer:
          "Sim! Todos os nossos serviços são 100% seguros. Utilizamos métodos aprovados e nossa equipe tem anos de experiência. Nunca houve banimentos relacionados aos nossos serviços.",
      },
      {
        question: "Como funciona o processo?",
        answer:
          "Após a compra, você receberá instruções detalhadas por Discord ou WhatsApp. Nossa equipe entrará em contato para agendar o serviço no melhor horário para você.",
      },
    ],
  },
  {
    category: "Bot Lobbies",
    icon: <Shield className="h-5 w-5" />,
    questions: [
      {
        question: "O que são Bot Lobbies?",
        answer:
          "Bot Lobbies são partidas especiais onde você joga contra bots (inteligência artificial) em vez de jogadores reais. Isso permite farming rápido de XP, camos e desafios.",
      },
      {
        question: "Quanto custa cada lobby?",
        answer:
          "Cada bot lobby custa R$ 15. Você pode comprar quantos lobbies desejar, com descontos para compras em maior quantidade.",
      },
      {
        question: "Quanto tempo demora cada partida?",
        answer: "Cada partida de bot lobby dura aproximadamente 10-15 minutos, dependendo do modo de jogo escolhido.",
      },
    ],
  },
  {
    category: "Camuflagens",
    icon: <CreditCard className="h-5 w-5" />,
    questions: [
      {
        question: "Quais camuflagens vocês desbloqueiam?",
        answer:
          "Oferecemos desbloqueio de Dark Matter, Abismo, Nébula e outras camuflagens especiais. Temos opções para 33 armas ou o pacote completo com 55 armas.",
      },
      {
        question: "Quanto tempo leva para desbloquear?",
        answer:
          "O tempo varia conforme o pacote escolhido: Dark Matter (1-7 dias), Abismo (3-10 dias), Nébula (3-10 dias). Oferecemos opções de entrega expressa.",
      },
      {
        question: "Posso escolher quais armas desbloquear?",
        answer: "Sim! Você pode especificar quais armas deseja priorizar no desbloqueio das camuflagens.",
      },
    ],
  },
  {
    category: "Pagamento e Entrega",
    icon: <Clock className="h-5 w-5" />,
    questions: [
      {
        question: "Quais formas de pagamento aceitam?",
        answer:
          "Aceitamos PIX, cartão de crédito, débito e transferência bancária. O PIX oferece desconto especial e aprovação instantânea.",
      },
      {
        question: "Como funciona a entrega?",
        answer:
          "Após o pagamento, nossa equipe entrará em contato via Discord ou WhatsApp para agendar o serviço. Você receberá atualizações regulares do progresso.",
      },
      {
        question: "Oferecem garantia?",
        answer:
          "Sim! Todos os nossos serviços têm garantia total. Se houver qualquer problema, refazemos o serviço sem custo adicional.",
      },
    ],
  },
]

export default function FAQPage() {
  const [language, setLanguage] = useState("pt")
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  const toggleExpanded = (id: string) => {
    setExpandedItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="relative z-50 bg-black/80 backdrop-blur-sm border-b border-purple-500/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image src="/logo.png" alt="Upgrade Store Logo" width={32} height={32} className="rounded" />
              <h1 className="text-xl font-bold">
                <span className="text-white">UPGRADE</span>
                <span className="text-purple-500">STORE</span>
              </h1>
            </div>

            <div className="flex items-center space-x-4">
              {/* Navigation */}
              <nav className="hidden lg:flex items-center space-x-8">
                <a
                  href="/"
                  className="text-gray-300 hover:text-purple-400 transition-colors flex items-center space-x-1"
                >
                  <span>🏠</span>
                  <span>Início</span>
                </a>

                <div className="relative group">
                  <button className="text-gray-300 hover:text-purple-400 transition-colors flex items-center space-x-1">
                    <span>⚙️</span>
                    <span>Serviços</span>
                    <span className="text-xs">▼</span>
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <a
                      href="/services/botlobbies"
                      className="block px-4 py-3 text-gray-300 hover:text-purple-400 hover:bg-gray-800 transition-colors"
                    >
                      🤖 Bot Lobbies
                    </a>
                    <a
                      href="/services/calling-cards"
                      className="block px-4 py-3 text-gray-300 hover:text-purple-400 hover:bg-gray-800 transition-colors"
                    >
                      💳 Cartões de Visita
                    </a>
                    <a
                      href="/services/camuflagens"
                      className="block px-4 py-3 text-gray-300 hover:text-purple-400 hover:bg-gray-800 transition-colors"
                    >
                      🎨 Camuflagens
                    </a>
                  </div>
                </div>

                <a
                  href="/about"
                  className="text-gray-300 hover:text-purple-400 transition-colors flex items-center space-x-1"
                >
                  <span>👥</span>
                  <span>Quem Somos</span>
                </a>
              </nav>

              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className="w-24 bg-gray-900 border-gray-700 text-white text-sm">
                  <Globe className="h-4 w-4" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-gray-700">
                  {Object.entries(languages).map(([code, name]) => (
                    <SelectItem key={code} value={code} className="text-white hover:bg-purple-600">
                      {name.split(" ")[0]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
                <LogIn className="h-4 w-4 mr-1" />
                Login
              </Button>
              <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
                <UserPlus className="h-4 w-4 mr-1" />
                Cadastro
              </Button>

              <Button variant="ghost" className="text-white hover:text-purple-400 relative">
                <ShoppingCart className="h-5 w-5" />
                <Badge className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs">0</Badge>
              </Button>

              <Button variant="ghost" className="lg:hidden text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* FAQ Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">❓ Perguntas Frequentes</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre nossos serviços
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center text-white">
                  {category.icon}
                </div>
                <h2 className="text-2xl font-bold text-white">{category.category}</h2>
              </div>

              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const itemId = `${categoryIndex}-${faqIndex}`
                  const isExpanded = expandedItems.includes(itemId)

                  return (
                    <Card
                      key={faqIndex}
                      className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-all duration-300"
                    >
                      <CardHeader className="cursor-pointer" onClick={() => toggleExpanded(itemId)}>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-white text-lg">{faq.question}</CardTitle>
                          {isExpanded ? (
                            <ChevronUp className="h-5 w-5 text-purple-400" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-purple-400" />
                          )}
                        </div>
                      </CardHeader>

                      {isExpanded && (
                        <CardContent className="pt-0">
                          <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                        </CardContent>
                      )}
                    </Card>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <div className="bg-gray-900/50 border border-purple-500/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Não encontrou sua resposta?</h3>
            <p className="text-gray-400 mb-6">Nossa equipe está sempre pronta para ajudar! Entre em contato conosco.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-[#5865F2] hover:bg-[#4752C4] text-white"
                onClick={() => window.open("https://discord.gg/CsfSzGmnDb", "_blank")}
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Discord
              </Button>
              <Button
                className="bg-green-600 hover:bg-green-700 text-white"
                onClick={() => window.open("https://chat.whatsapp.com/FtJUIHobAqT02hqXCyA4sE", "_blank")}
              >
                💬 WhatsApp
              </Button>
              <Button
                variant="outline"
                className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
                onClick={() => (window.location.href = "/contact")}
              >
                Página de Contato
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
