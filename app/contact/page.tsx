"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  ShoppingCart,
  Globe,
  LogIn,
  UserPlus,
  Menu,
  MessageCircle,
  Phone,
  Mail,
  Clock,
  Users,
  Zap,
  Shield,
} from "lucide-react"
import Image from "next/image"
import { languages } from "@/lib/i18n"

export default function ContactPage() {
  const [language, setLanguage] = useState("pt")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    alert("Mensagem enviada! Entraremos em contato em breve.")
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
                  <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                  <span>Início</span>
                </a>

                <div className="relative group">
                  <button className="text-gray-300 hover:text-purple-400 transition-colors flex items-center space-x-1">
                    <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                    <span>SERVIÇOS</span>
                    <span className="text-xs">▼</span>
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <a
                      href="/services/botlobbies"
                      className="block px-4 py-3 text-gray-300 hover:text-purple-400 hover:bg-gray-800 transition-colors"
                    >
                      <div className="w-2 h-2 bg-purple-500 rounded-full inline-block mr-2"></div>
                      BOT LOBBIES
                    </a>
                    <a
                      href="/services/calling-cards"
                      className="block px-4 py-3 text-gray-300 hover:text-purple-400 hover:bg-gray-800 transition-colors"
                    >
                      <div className="w-2 h-2 bg-purple-500 rounded-full inline-block mr-2"></div>
                      CARTÕES DE VISITA
                    </a>
                    <a
                      href="/services/camuflagens"
                      className="block px-4 py-3 text-gray-300 hover:text-purple-400 hover:bg-gray-800 transition-colors"
                    >
                      <div className="w-2 h-2 bg-purple-500 rounded-full inline-block mr-2"></div>
                      CAMUFLAGENS
                    </a>
                  </div>
                </div>

                <a
                  href="/about"
                  className="text-gray-300 hover:text-purple-400 transition-colors flex items-center space-x-1"
                >
                  <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
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

      {/* Contact Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">ENTRE EM CONTATO</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Estamos aqui para ajudar! Escolha a melhor forma de entrar em contato conosco
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Methods */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white mb-6">Fale Conosco Agora</h2>

            {/* Discord */}
            <Card className="bg-[#5865F2]/10 border-[#5865F2]/30 hover:border-[#5865F2]/50 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#5865F2] rounded-lg flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-white">Discord</CardTitle>
                    <CardDescription className="text-gray-300">Suporte 24/7 • Resposta imediata</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Nossa comunidade no Discord é o melhor lugar para obter suporte rápido e interagir com outros
                  jogadores.
                </p>
                <Button
                  className="w-full bg-[#5865F2] hover:bg-[#4752C4] text-white"
                  onClick={() => window.open("https://discord.gg/CsfSzGmnDb", "_blank")}
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Entrar no Discord
                </Button>
              </CardContent>
            </Card>

            {/* WhatsApp */}
            <Card className="bg-green-600/10 border-green-600/30 hover:border-green-600/50 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-white">WhatsApp</CardTitle>
                    <CardDescription className="text-gray-300">
                      Grupo oficial • Atualizações em tempo real
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Participe do nosso grupo oficial no WhatsApp para receber atualizações e suporte direto.
                </p>
                <Button
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => window.open("https://chat.whatsapp.com/FtJUIHobAqT02hqXCyA4sE", "_blank")}
                >
                  <div className="w-2 h-2 bg-white rounded-full inline-block mr-2"></div>
                  Entrar no Grupo
                </Button>
              </CardContent>
            </Card>

            {/* Instagram */}
            <Card className="bg-pink-600/10 border-pink-600/30 hover:border-pink-600/50 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">IG</span>
                  </div>
                  <div>
                    <CardTitle className="text-white">Instagram</CardTitle>
                    <CardDescription className="text-gray-300">
                      Novidades • Promoções • Conteúdo exclusivo
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Siga nosso Instagram para ficar por dentro das novidades, promoções e conteúdo exclusivo.
                </p>
                <Button
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                  onClick={() => window.open("https://www.instagram.com/upgradestorecod/", "_blank")}
                >
                  <div className="w-2 h-2 bg-white rounded-full inline-block mr-2"></div>
                  Seguir no Instagram
                </Button>
              </CardContent>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                <Users className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">1K+</div>
                <div className="text-sm text-gray-400">Membros</div>
              </div>
              <div className="text-center p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                <Clock className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-sm text-gray-400">Suporte</div>
              </div>
              <div className="text-center p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                <Zap className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">&lt;5min</div>
                <div className="text-sm text-gray-400">Resposta</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Envie uma Mensagem</CardTitle>
                <CardDescription className="text-gray-400">
                  Prefere enviar uma mensagem? Preencha o formulário abaixo e entraremos em contato.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="text-white font-medium mb-2 block">Nome</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Seu nome completo"
                      className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-white font-medium mb-2 block">Email</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu@email.com"
                      className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-white font-medium mb-2 block">Assunto</label>
                    <Select>
                      <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                        <span>Selecione um assunto</span>
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700">
                        <SelectItem value="support" className="text-white">
                          Suporte Técnico
                        </SelectItem>
                        <SelectItem value="billing" className="text-white">
                          Dúvidas sobre Pagamento
                        </SelectItem>
                        <SelectItem value="services" className="text-white">
                          Informações sobre Serviços
                        </SelectItem>
                        <SelectItem value="partnership" className="text-white">
                          Parcerias
                        </SelectItem>
                        <SelectItem value="other" className="text-white">
                          Outros
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-white font-medium mb-2 block">Mensagem</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Descreva sua dúvida ou solicitação..."
                      className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 min-h-[120px]"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    <Mail className="h-4 w-4 mr-2" />
                    Enviar Mensagem
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-purple-600/10 border border-purple-500/30 rounded-lg">
                  <div className="flex items-center space-x-2 text-purple-400 mb-2">
                    <Shield className="h-4 w-4" />
                    <span className="font-medium">Garantia de Resposta</span>
                  </div>
                  <p className="text-sm text-gray-300">
                    Respondemos todas as mensagens em até 24 horas. Para suporte urgente, use nosso Discord.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
