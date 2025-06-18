"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select"
import { ShoppingCart, Globe, LogIn, UserPlus, Menu, Check } from "lucide-react"
import Image from "next/image"
import { languages, formatPrice } from "@/lib/i18n"

const botLobbyServices = [
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
    popular: true,
    features: {
      pt: ["🚀 Farming rápido e eficiente", "🛡️ 100% seguro e confiável", "⚡ Suporte 24/7 disponível"],
      en: ["🚀 Fast and efficient farming", "🛡️ 100% safe and reliable", "⚡ 24/7 support available"],
    },
  },
]

export default function BotLobbiesPage() {
  const [language, setLanguage] = useState("pt")

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
              {/* Navigation - Moved to right */}
              <nav className="hidden lg:flex items-center space-x-8">
                <a
                  href="/"
                  className="text-gray-300 hover:text-purple-400 transition-colors flex items-center space-x-2"
                >
                  <span>🏠</span>
                  <span>Início</span>
                </a>

                {/* Services Dropdown */}
                <div className="relative group">
                  <button className="text-purple-400 hover:text-purple-300 transition-colors flex items-center space-x-2">
                    <span>🎮</span>
                    <span className="font-bold">SERVIÇOS</span>
                    <span className="text-xs">▼</span>
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <a
                      href="/services/botlobbies"
                      className="block px-4 py-3 text-purple-400 hover:text-purple-300 hover:bg-gray-800 transition-colors"
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

      {/* Page Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">🎮 BOT LOBBIES</h1>
          <p className="text-gray-400 text-lg">🚀 Lobbies com bots para farming rápido e seguro no Black Ops 6 ⚡</p>
        </div>

        {/* Centered single service */}
        <div className="flex justify-center max-w-6xl mx-auto">
          <div className="w-full max-w-sm">
            {botLobbyServices.map((service) => (
              <Card
                key={service.id}
                className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-all duration-300 group backdrop-blur-sm overflow-hidden"
              >
                <CardHeader className="relative">
                  {service.popular && (
                    <Badge className="absolute top-4 right-4 bg-purple-500 text-white text-xs z-10">
                      <div className="w-2 h-2 bg-orange-400 rounded-full inline-block mr-1"></div>
                      Popular
                    </Badge>
                  )}

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

                    {/* Front Image with Motion Effects - Only Scale for Bot Lobby */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-full h-full flex items-center justify-center group-hover:scale-110 transition-all duration-700 ease-out">
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
                    {formatPrice(service.basePrice, language)} por partida
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                    onClick={() => (window.location.href = `/product/${service.id}`)}
                  >
                    Ver Detalhes
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
