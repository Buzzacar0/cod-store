"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select"
import {
  ShoppingCart,
  Menu,
  Globe,
  Monitor,
  Gamepad2,
  LogIn,
  UserPlus,
  MessageCircle,
  Users,
  Zap,
  Shield,
  Check,
} from "lucide-react"
import Image from "next/image"
import { translations, languages, formatPrice } from "@/lib/i18n"

const popularServices = [
  {
    id: 1,
    name: {
      pt: "Bot Lobby Black Ops 6",
      en: "Bot Lobby Black Ops 6",
      fr: "Bot Lobby Black Ops 6",
      de: "Bot Lobby Black Ops 6",
    },
    basePrice: 15.0,
    backgroundImage: "/fundo_site.png",
    frontImage: "/botlobby_frente.png",
    type: "botlobby",
    rank: "#1",
    features: {
      pt: ["🚀 Farming rápido e eficiente", "🛡️ 100% seguro e confiável", "⚡ Suporte 24/7 disponível"],
      en: ["🚀 Fast and efficient farming", "🛡️ 100% safe and reliable", "⚡ 24/7 support available"],
    },
  },
  {
    id: 2,
    name: {
      pt: "Dark Matter",
      en: "Dark Matter",
      fr: "Dark Matter",
      de: "Dark Matter",
    },
    basePrice: 200.0,
    backgroundImage: "/fundo_site.png",
    frontImage: "/darkmatter_frente.png",
    type: "weapon",
    rank: "#2",
    features: {
      pt: ["✅ Desbloqueio garantido", "🔫 Todas as armas disponíveis", "⚡ Entrega rápida e segura"],
      en: ["✅ Guaranteed unlock", "🔫 All weapons available", "⚡ Fast and safe delivery"],
    },
  },
  {
    id: 5,
    name: {
      pt: "Cartões de Visitas Diversos",
      en: "Various Calling Cards",
      fr: "Cartes de Visite Diverses",
      de: "Verschiedene Visitenkarten",
    },
    basePrice: 10.0,
    backgroundImage: "/fundo_site.png",
    frontImage: "/darkops_frente.png",
    type: "card",
    rank: "#3",
    features: {
      pt: ["🏆 Conquistas exclusivas", "🎯 Vários tipos disponíveis", "💰 Preços acessíveis"],
      en: ["🏆 Exclusive achievements", "🎯 Various types available", "💰 Affordable prices"],
    },
  },
]

export default function UpgradeStore() {
  const [language, setLanguage] = useState("pt")
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  const t = translations[language]

  const handleCardClick = (serviceId: number) => {
    if (expandedCard === serviceId) {
      setExpandedCard(null)
    } else {
      setExpandedCard(serviceId)
    }
  }

  // Function to get motion effects based on service type
  const getMotionEffects = (type: string) => {
    if (type === "botlobby" || type === "card") {
      // Bot Lobby and Calling Cards: Only scale, no rotation or translation
      return "group-hover:scale-110 transition-all duration-700 ease-out"
    } else if (type === "weapon") {
      // Weapons: Scale + rotation + translation (diagonal effect)
      return "group-hover:scale-110 transition-all duration-700 ease-out group-hover:rotate-2 group-hover:translate-y-[-8px]"
    } else {
      // Others: Just scale
      return "group-hover:scale-105 transition-all duration-500 ease-out"
    }
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="relative z-50 bg-black/80 backdrop-blur-sm border-b border-purple-500/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <Image src="/logo.png" alt="Upgrade Store Logo" width={32} height={32} className="rounded" />
              <h1 className="text-xl font-bold">
                <span className="text-white">UPGRADE</span>
                <span className="text-purple-500">STORE</span>
              </h1>
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-4">
              {/* Navigation */}
              <nav className="hidden lg:flex items-center space-x-8">
                <a
                  href="/"
                  className="text-purple-400 hover:text-purple-300 transition-colors flex items-center space-x-2"
                >
                  <span>🏠</span>
                  <span>Início</span>
                </a>

                {/* Services Dropdown */}
                <div className="relative group">
                  <button className="text-gray-300 hover:text-purple-400 transition-colors flex items-center space-x-2">
                    <span>🎮</span>
                    <span className="font-bold">SERVIÇOS</span>
                    <span className="text-xs">▼</span>
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <a
                      href="/services/botlobbies"
                      className="block px-4 py-3 text-gray-300 hover:text-purple-400 hover:bg-gray-800 transition-colors"
                    >
                      <span className="mr-2">🎮</span>
                      BOT LOBBIES
                    </a>
                    <a
                      href="/services/calling-cards"
                      className="block px-4 py-3 text-gray-300 hover:text-purple-400 hover:bg-gray-800 transition-colors"
                    >
                      <span className="mr-2">🏆</span>
                      CARTÕES DE VISITA
                    </a>
                    <a
                      href="/services/camuflagens"
                      className="block px-4 py-3 text-gray-300 hover:text-purple-400 hover:bg-gray-800 transition-colors"
                    >
                      <span className="mr-2">🎨</span>
                      CAMUFLAGENS
                    </a>
                  </div>
                </div>

                <a
                  href="/about"
                  className="text-gray-300 hover:text-purple-400 transition-colors flex items-center space-x-2"
                >
                  <span>👥</span>
                  <span>Quem Somos</span>
                </a>
              </nav>

              {/* Language Selector */}
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

              {/* Auth Buttons */}
              <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
                <LogIn className="h-4 w-4 mr-1" />
                Login
              </Button>
              <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
                <UserPlus className="h-4 w-4 mr-1" />
                Cadastro
              </Button>

              {/* Cart */}
              <Button variant="ghost" className="text-white hover:text-purple-400 relative">
                <ShoppingCart className="h-5 w-5" />
                <Badge className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs">0</Badge>
              </Button>

              {/* Mobile Menu */}
              <Button variant="ghost" className="lg:hidden text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-32 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <div className="text-white whitespace-nowrap">A melhor loja de serviços</div>
              <div className="text-purple-500 whitespace-nowrap">para a franquia Call Of Duty! 🚀</div>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
              Serviços profissionais de alta performance com entrega garantida, suporte especializado 24/7 e a melhor
              experiência de progressão do mercado.
            </p>

            <div className="mt-20">
              <h3 className="text-2xl font-semibold mb-4">
                <span className="text-white">Disponível em </span>
                <span className="text-purple-500">Todas as Plataformas</span>
              </h3>
              <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
                Não importa onde você joga, nós temos a solução para elevar seu nível no Black Ops 6.
              </p>

              {/* Platform Icons - Redesigned */}
              <div className="flex justify-center items-center space-x-12 max-w-4xl mx-auto">
                {/* PC */}
                <div className="flex flex-col items-center space-y-4 flex-1">
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-500 to-gray-600 rounded-2xl flex items-center justify-center shadow-lg shadow-gray-500/25 border border-gray-400/30 hover:scale-110 transition-all duration-300 cursor-pointer">
                    <Monitor className="h-10 w-10 text-white" />
                  </div>
                  <div className="text-center">
                    <h4 className="text-white font-semibold text-lg">PC</h4>
                    <p className="text-gray-400 text-sm font-medium">Suporte Completo! ✅</p>
                  </div>
                </div>

                {/* PlayStation */}
                <div className="flex flex-col items-center space-y-4 flex-1">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/25 border border-blue-500/30 hover:scale-110 transition-all duration-300 cursor-pointer">
                    <Gamepad2 className="h-10 w-10 text-white" />
                  </div>
                  <div className="text-center">
                    <h4 className="text-white font-semibold text-lg">PlayStation</h4>
                    <p className="text-blue-400 text-sm font-medium">Suporte Completo! ✅</p>
                  </div>
                </div>

                {/* Xbox */}
                <div className="flex flex-col items-center space-y-4 flex-1">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/25 border border-green-400/30 hover:scale-110 transition-all duration-300 cursor-pointer">
                    <Gamepad2 className="h-10 w-10 text-white" />
                  </div>
                  <div className="text-center">
                    <h4 className="text-white font-semibold text-lg">Xbox</h4>
                    <p className="text-green-400 text-sm font-medium">Suporte Completo! ✅</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services with Layered Images */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-4">Serviços Mais Populares</h3>
            <p className="text-gray-400 text-lg">Os serviços mais procurados pelos nossos clientes</p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Services Grid with Layered Images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {popularServices.map((service) => (
                <Card
                  key={service.id}
                  className={`bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-all duration-500 group backdrop-blur-sm cursor-pointer transform-gpu overflow-hidden ${
                    expandedCard === service.id
                      ? "scale-110 z-20 shadow-2xl shadow-purple-500/20 border-purple-500"
                      : "hover:scale-105"
                  }`}
                  onClick={() => handleCardClick(service.id)}
                >
                  <CardHeader className="relative">
                    <Badge className="absolute top-4 right-4 bg-purple-500 text-white text-xs z-10">
                      <div className="w-2 h-2 bg-orange-400 rounded-full inline-block mr-1"></div>
                      {service.rank}
                    </Badge>

                    {/* Layered Image Container */}
                    <div className="aspect-video relative overflow-hidden rounded-lg mb-4 bg-gray-800">
                      {/* Background Image with Opacity */}
                      <div className="absolute inset-0">
                        <Image
                          src={service.backgroundImage || "/placeholder.svg"}
                          alt="Background"
                          fill
                          className="object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500"
                        />
                      </div>

                      {/* Front Image with Motion Effects */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div
                          className={`relative w-full h-full flex items-center justify-center ${getMotionEffects(service.type)}`}
                        >
                          <Image
                            src={service.frontImage || "/placeholder.svg"}
                            alt={service.name[language]}
                            width={280}
                            height={160}
                            className="object-contain drop-shadow-2xl group-hover:drop-shadow-[0_0_30px_rgba(147,51,234,0.5)] transition-all duration-700"
                          />

                          {/* Glow Effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-lg blur-xl"></div>
                        </div>
                      </div>

                      {/* Animated Border Glow */}
                      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-purple-500/30 animate-pulse"></div>
                      </div>
                    </div>

                    <CardTitle className="text-white text-xl mb-4">{service.name[language]}</CardTitle>

                    {/* Feature Bullet Points */}
                    <div className="space-y-2 mb-4">
                      {service.features[language].map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-purple-400 mb-4">
                      {service.id === 1
                        ? `${formatPrice(service.basePrice, language)} por partida`
                        : `A partir de ${formatPrice(service.basePrice, language)}`}
                    </div>

                    {/* Expanded Content */}
                    {expandedCard === service.id && (
                      <div className="mt-4 p-4 bg-purple-600/10 rounded-lg border border-purple-500/20 animate-in slide-in-from-top duration-300">
                        <div className="flex items-center justify-center space-x-4 text-sm text-gray-300">
                          <div className="flex items-center space-x-1">
                            <Shield className="h-4 w-4 text-green-400" />
                            <span>100% Seguro</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Zap className="h-4 w-4 text-yellow-400" />
                            <span>Entrega Rápida</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                  <CardFooter>
                    <Button
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                      onClick={(e) => {
                        e.stopPropagation()
                        window.location.href = `/product/${service.id}`
                      }}
                    >
                      Ver Detalhes
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Discord Call-to-Action Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gray-900/80 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-12 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 rounded-2xl"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl"></div>

              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center">
                    <MessageCircle className="h-10 w-10 text-white" />
                  </div>
                </div>

                <h3 className="text-4xl font-bold text-white mb-4">Junte-se à Nossa Comunidade</h3>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Entre no nosso Discord e faça parte de uma comunidade de mais de{" "}
                  <span className="text-purple-400 font-bold">1K+ jogadores</span>! Receba suporte 24/7, participe de
                  eventos exclusivos e conecte-se com outros gamers.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="flex flex-col items-center p-4">
                    <Users className="h-8 w-8 text-purple-400 mb-2" />
                    <h4 className="text-white font-semibold mb-1">Comunidade Ativa</h4>
                    <p className="text-gray-400 text-sm text-center">Mais de 1K+ membros online</p>
                  </div>
                  <div className="flex flex-col items-center p-4">
                    <Shield className="h-8 w-8 text-green-400 mb-2" />
                    <h4 className="text-white font-semibold mb-1">Suporte 24/7</h4>
                    <p className="text-gray-400 text-sm text-center">Ajuda sempre disponível</p>
                  </div>
                  <div className="flex flex-col items-center p-4">
                    <Zap className="h-8 w-8 text-yellow-400 mb-2" />
                    <h4 className="text-white font-semibold mb-1">Eventos Exclusivos</h4>
                    <p className="text-gray-400 text-sm text-center">Promoções e sorteios</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button
                    size="lg"
                    className="bg-[#5865F2] hover:bg-[#4752C4] text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
                    onClick={() => window.open("https://discord.gg/CsfSzGmnDb", "_blank")}
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Entrar no Discord
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 text-lg rounded-xl transition-all duration-300"
                    onClick={() => (window.location.href = "/contact")}
                  >
                    Falar com Suporte
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-black/80 border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-4">SERVIÇOS:</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="/services/botlobbies" className="hover:text-purple-400 transition-colors">
                    Bot Lobbies
                  </a>
                </li>
                <li>
                  <a href="/services/calling-cards" className="hover:text-purple-400 transition-colors">
                    Cartões de Visitas
                  </a>
                </li>
                <li>
                  <a href="/services/camuflagens" className="hover:text-purple-400 transition-colors">
                    Camuflagens
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Suporte:</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="/faq" className="hover:text-purple-400 transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-purple-400 transition-colors">
                    Contato
                  </a>
                </li>
                <li>Termos de Uso</li>
                <li>Privacidade</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Entre em contato conosco:</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="https://discord.gg/CsfSzGmnDb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Discord
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/upgradestorecod/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://chat.whatsapp.com/FtJUIHobAqT02hqXCyA4sE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-400 transition-colors"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Upgrade Store. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
