"use client"

import { useState, useEffect } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { translations, formatPrice } from "@/lib/i18n"

const callingCardOptions = [
  {
    key: "frenzyKiller",
    price: 10,
    name: { pt: "Frenzy Killer", en: "Frenzy Killer" },
    description: {
      pt: "Conquiste uma medalha de Frenzy Kill (5 eliminações rápidas).",
      en: "Earn a Frenzy Kill medal (5 rapid eliminations).",
    },
  },
  {
    key: "megaKiller",
    price: 12,
    name: { pt: "Mega Killer", en: "Mega Killer" },
    description: {
      pt: "Conquiste uma medalha de Mega Kill (6 eliminações rápidas).",
      en: "Earn a Mega Kill medal (6 rapid eliminations).",
    },
  },
  {
    key: "ultraKiller",
    price: 15,
    name: { pt: "Ultra Killer", en: "Ultra Killer" },
    description: {
      pt: "Conquiste uma medalha de Ultra Kill (7 eliminações rápidas).",
      en: "Earn an Ultra Kill medal (7 rapid eliminations).",
    },
  },
  {
    key: "chainKiller",
    price: 20,
    name: { pt: "Chain Killer", en: "Chain Killer" },
    description: {
      pt: "Conquiste uma medalha de Kill Chain (mais de 7 eliminações rápidas).",
      en: "Earn a Kill Chain medal (more than 7 rapid eliminations).",
    },
  },
  {
    key: "relentlessKiller",
    price: 30,
    name: { pt: "Relentless Killer", en: "Relentless Killer" },
    description: {
      pt: "Conquiste uma medalha de Relentless (20 eliminações sem morrer).",
      en: "Earn a Relentless medal (20 eliminations without dying).",
    },
  },
  {
    key: "brutalKiller",
    price: 35,
    name: { pt: "Brutal Killer", en: "Brutal Killer" },
    description: {
      pt: "Conquiste uma medalha de Brutal (25 eliminações sem morrer).",
      en: "Earn a Brutal medal (25 eliminations without dying).",
    },
  },
  {
    key: "nuclearKiller",
    price: 50,
    name: { pt: "Nuclear Killer", en: "Nuclear Killer" },
    description: {
      pt: "Conquiste uma Nuke (30 eliminações sem morrer).",
      en: "Earn a Nuke (30 eliminations without dying).",
    },
  },
  {
    key: "veryNuclear",
    price: 150,
    name: { pt: "Very Nuclear", en: "Very Nuclear" },
    description: {
      pt: "Conquiste uma Nuke com 25 armas diferentes (todas as eliminações para cada Nuke devem vir de uma única arma).",
      en: "Earn a Nuke with 25 different weapons (all eliminations for each Nuke must come from a single weapon).",
    },
  },
  {
    key: "accidentallyOnPurpose",
    price: 30,
    name: { pt: "Acidentalmente de Propósito", en: "Accidentally on Purpose" },
    description: { pt: "Mate um inimigo com um perigo ambiental.", en: "Kill an enemy with an environmental hazard." },
  },
  {
    key: "returnToSender",
    price: 30,
    name: { pt: "Devolução", en: "Return to Sender" },
    description: {
      pt: "Mate um inimigo jogando de volta a granada de fragmentação que ele jogou em você.",
      en: "Kill an enemy by throwing back the frag grenade they threw at you.",
    },
  },
  {
    key: "hardStop",
    price: 35,
    name: { pt: "Término Difícil", en: "Hard Stop" },
    description: { pt: "Realize 7 Finalização em uma partida.", en: "Perform 7 Finishing Moves in one match." },
  },
  {
    key: "circus",
    price: 30,
    name: { pt: "Circo", en: "Circus" },
    description: {
      pt: "Conquiste uma medalha de Bankshot (matou um inimigo ricocheteando o Combat Axe em uma superfície).",
      en: "Earn a Bankshot medal (killed an enemy by ricocheting the Combat Axe off a surface).",
    },
  },
  {
    key: "goLong",
    price: 30,
    name: { pt: "Go Loooong!", en: "Go Loooong!" },
    description: {
      pt: "Conquiste uma eliminação de longa distância com Combat Axe, Semtex Stick, ou Drill Charge Stick.",
      en: "Get a long-distance elimination with Combat Axe, Semtex Stick, or Drill Charge Stick.",
    },
  },
  {
    key: "bluntTrauma",
    price: 30,
    name: { pt: "Trauma Contundente", en: "Blunt Trauma" },
    description: {
      pt: "Mate um inimigo com o impacto direto de uma Smoke.",
      en: "Kill an enemy with the direct impact of a Smoke grenade.",
    },
  },
  {
    key: "buzzsaw",
    price: 20,
    name: { pt: "Buzzsaw", en: "Buzzsaw" },
    description: {
      pt: "Conquiste 10 medalhas de Triple Kill (3 eliminações rápidas) ou mais no Hardcore.",
      en: "Earn 10 Triple Kill medals (3 rapid eliminations) or more in Hardcore.",
    },
  },
  {
    key: "tooHardcore",
    price: 20,
    name: { pt: "Demasiado Hardcore para o Hardcore", en: "Too Hardcore for Hardcore" },
    description: {
      pt: "Conquiste 10 eliminações sem morrer 1 vez no Hardcore.",
      en: "Get 10 eliminations without dying once in Hardcore.",
    },
  },
  {
    key: "hundredK",
    price: 1000,
    name: { pt: "100k", en: "100k" },
    description: { pt: "Conquiste 100.000 eliminações", en: "Achieve 100,000 eliminations" },
  },
]

const products = [
  {
    id: 1,
    name: {
      pt: "Bot Lobby Black Ops 6",
      en: "Bot Lobby Black Ops 6",
      fr: "Bot Lobby Black Ops 6",
      de: "Bot Lobby Black Ops 6",
    },
    description: {
      pt: "Lobbies com bots para farming rápido e seguro",
      en: "Bot lobbies for fast and safe farming",
      fr: "Lobbies de bots pour farming rapide et sûr",
      de: "Bot-Lobbys für schnelles und sicheres Farming",
    },
    longDescription: {
      pt: "Nossos Bot Lobbies são a melhor forma de fazer farming de XP, camos e desafios no Black Ops 6. Cada lobby custa R$ 15 e você pode escolher quantos lobbies deseja.",
      en: "Our Bot Lobbies are the best way to farm XP, camos and challenges in Black Ops 6. Each lobby costs R$ 15 and you can choose how many lobbies you want.",
      fr: "Nos Bot Lobbies sont le meilleur moyen de farmer l'XP, les camos et les défis dans Black Ops 6. Chaque lobby coûte R$ 15 et vous pouvez choisir combien de lobbies vous voulez.",
      de: "Unsere Bot Lobbys sind der beste Weg, um XP, Camos und Herausforderungen in Black Ops 6 zu farmen. Jede Lobby kostet R$ 15 und Sie können wählen, wie viele Lobbys Sie möchten.",
    },
    basePrice: 15.0,
    type: "botlobby",
    rating: 4.9,
    reviews: 1247,
    image: "/placeholder.svg?height=300&width=500&text=Bot+Lobby+BO6",
    popular: true,
  },
  {
    id: 2,
    name: {
      pt: "Dark Matter",
      en: "Dark Matter",
      fr: "Dark Matter",
      de: "Dark Matter",
    },
    description: {
      pt: "Desbloqueie Dark Matter completo",
      en: "Unlock complete Dark Matter",
      fr: "Débloquez Dark Matter complet",
      de: "Dark Matter komplett freischalten",
    },
    longDescription: {
      pt: "Serviço completo para desbloqueio de Dark Matter. Escolha entre diferentes opções: desde tiros na cabeça até Dark Matter completo em todas as 55 armas.",
      en: "Complete service for Dark Matter unlock. Choose between different options: from headshots to complete Dark Matter on all 55 weapons.",
      fr: "Service complet pour débloquer Dark Matter. Choisissez entre différentes options : des tirs à la tête au Dark Matter complet sur les 55 armes.",
      de: "Kompletter Service zum Freischalten von Dark Matter. Wählen Sie zwischen verschiedenen Optionen: von Kopfschüssen bis hin zu komplettem Dark Matter auf allen 55 Waffen.",
    },
    basePrice: 200.0,
    type: "darkmatter",
    rating: 4.8,
    reviews: 892,
    image: "/placeholder.svg?height=300&width=500&text=Dark+Matter",
    popular: true,
  },
  {
    id: 3,
    name: {
      pt: "Abismo",
      en: "Abysmal",
      fr: "Abyssal",
      de: "Abgrund",
    },
    description: {
      pt: "Camos Abismo completos",
      en: "Complete Abysmal camos",
      fr: "Camos Abyssal complets",
      de: "Vollständige Abgrund-Camos",
    },
    longDescription: {
      pt: "Serviço completo para desbloqueio de camuflagens Abismo. Escolha entre 33 armas ou o pacote completo com 55 armas.",
      en: "Complete service for Abysmal camo unlock. Choose between 33 weapons or the complete package with 55 weapons.",
      fr: "Service complet pour débloquer les camos Abyssal. Choisissez entre 33 armes ou le package complet avec 55 armes.",
      de: "Kompletter Service zum Freischalten von Abgrund-Camos. Wählen Sie zwischen 33 Waffen oder dem kompletten Paket mit 55 Waffen.",
    },
    basePrice: 2000.0,
    type: "abysmal",
    rating: 4.7,
    reviews: 654,
    image: "/placeholder.svg?height=300&width=500&text=Abysmal+Camo",
    popular: false,
  },
  {
    id: 4,
    name: {
      pt: "Nébula",
      en: "Nebula",
      fr: "Nébuleuse",
      de: "Nebel",
    },
    description: {
      pt: "Camos Nébula completos",
      en: "Complete Nebula camos",
      fr: "Camos Nébuleuse complets",
      de: "Vollständige Nebel-Camos",
    },
    longDescription: {
      pt: "Serviço completo para desbloqueio de camuflagens Nébula. Escolha entre 33 armas ou o pacote completo com 55 armas.",
      en: "Complete service for Nebula camo unlock. Choose between 33 weapons or the complete package with 55 weapons.",
      fr: "Service complet pour débloquer les camos Nébuleuse. Choisissez entre 33 armes ou le package complet avec 55 armes.",
      de: "Kompletter Service zum Freischalten von Nebel-Camos. Wählen Sie zwischen 33 Waffen oder dem kompletten Paket mit 55 Waffen.",
    },
    basePrice: 2500.0,
    type: "nebula",
    rating: 4.9,
    reviews: 789,
    image: "/placeholder.svg?height=300&width=500&text=Nebula+Camo",
    popular: true,
  },
  {
    id: 5,
    name: {
      pt: "Cartões de Visitas Diversos",
      en: "Various Calling Cards",
      fr: "Cartes de Visite Diverses",
      de: "Verschiedene Visitenkarten",
    },
    description: {
      pt: "Cartões de visitas exclusivos",
      en: "Exclusive calling cards",
      fr: "Cartes de visite exclusives",
      de: "Exklusive Visitenkarten",
    },
    longDescription: {
      pt: "Desbloqueie cartões de visitas exclusivos e mostre suas conquistas no Black Ops 6. Temos uma grande variedade de cartões disponíveis, desde os mais simples até os mais desafiadores.",
      en: "Unlock exclusive calling cards and show your achievements in Black Ops 6. We have a wide variety of cards available, from the simplest to the most challenging.",
      fr: "Débloquez des cartes de visite exclusives et montrez vos réalisations dans Black Ops 6. Nous avons une grande variété de cartes disponibles, des plus simples aux plus difficiles.",
      de: "Schalten Sie exklusive Visitenkarten frei und zeigen Sie Ihre Erfolge in Black Ops 6. Wir haben eine große Auswahl an Karten verfügbar, von den einfachsten bis zu den anspruchsvollsten.",
    },
    basePrice: 10.0,
    type: "callingcards",
    rating: 4.6,
    reviews: 432,
    image: "/placeholder.svg?height=300&width=500&text=Calling+Cards",
    popular: true,
  },
]

const botLobbyQuantities = [1, 2, 3, 5, 8, 10, 12, 15, 20]

const darkMatterOptions = [
  { key: "headshots33", price: 200, name: { pt: "33 armas - Tiros na cabeça", en: "33 weapons - Headshots" } },
  { key: "diamond33", price: 400, name: { pt: "33 armas - Diamante", en: "33 weapons - Diamond" } },
  { key: "darkmatter33", price: 600, name: { pt: "33 armas - Dark Matter", en: "33 weapons - Dark Matter" } },
  {
    key: "darkmatter55",
    price: 1200,
    name: { pt: "55 armas - Dark Matter completo", en: "55 weapons - Complete Dark Matter" },
  },
]

const abysmalOptions = [
  { key: "abysmal33", price: 2000, name: { pt: "33 armas - Abismo", en: "33 weapons - Abysmal" } },
  { key: "abysmal55", price: 3000, name: { pt: "55 armas - Abismo completo", en: "55 weapons - Complete Abysmal" } },
]

const nebulaOptions = [
  { key: "nebula33", price: 2500, name: { pt: "33 armas - Nébula", en: "33 weapons - Nebula" } },
  { key: "nebula55", price: 3500, name: { pt: "55 armas - Nébula completo", en: "55 weapons - Complete Nebula" } },
]

const deliveryOptions = [
  { key: "1day", multiplier: 1.75, name: { pt: "1 dia (+75%)", en: "1 day (+75%)" } },
  { key: "1to5days", multiplier: 1.5, name: { pt: "1-5 dias (+50%)", en: "1-5 days (+50%)" } },
  { key: "1to7days", multiplier: 1, name: { pt: "1-7 dias (preço normal)", en: "1-7 days (normal price)" } },
]

export default function ProductDetails({ params }: { params: { id: string } }) {
  const [language, setLanguage] = useState("pt")
  const [selectedPlatform, setSelectedPlatform] = useState("")
  const [selectedQuantity, setSelectedQuantity] = useState(1)
  const [selectedOption, setSelectedOption] = useState("")
  const [selectedDelivery, setSelectedDelivery] = useState("1to7days")
  const [finalPrice, setFinalPrice] = useState(0)

  const t = translations[language]
  const productId = Number.parseInt(params.id)
  const product = products.find((p) => p.id === productId)

  useEffect(() => {
    if (!product) return

    let price = 0

    if (product.type === "botlobby") {
      price = product.basePrice * selectedQuantity
    } else if (product.type === "darkmatter") {
      const option = darkMatterOptions.find((opt) => opt.key === selectedOption)
      if (option) {
        const deliveryMultiplier = deliveryOptions.find((d) => d.key === selectedDelivery)?.multiplier || 1
        price = option.price * deliveryMultiplier
      }
    } else if (product.type === "abysmal") {
      const option = abysmalOptions.find((opt) => opt.key === selectedOption)
      if (option) {
        const deliveryMultiplier = deliveryOptions.find((d) => d.key === selectedDelivery)?.multiplier || 1
        price = option.price * deliveryMultiplier
      }
    } else if (product.type === "nebula") {
      const option = nebulaOptions.find((opt) => opt.key === selectedOption)
      if (option) {
        const deliveryMultiplier = deliveryOptions.find((d) => d.key === selectedDelivery)?.multiplier || 1
        price = option.price * deliveryMultiplier
      }
    } else if (product.type === "callingcards") {
      const option = callingCardOptions.find((opt) => opt.key === selectedOption)
      if (option) {
        const deliveryMultiplier = deliveryOptions.find((d) => d.key === selectedDelivery)?.multiplier || 1
        price = option.price * deliveryMultiplier
      }
    }

    setFinalPrice(price)
  }, [product, selectedQuantity, selectedOption, selectedDelivery])

  if (!product) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">Produto não encontrado</div>
    )
  }

  const renderOptions = () => {
    if (product.type === "botlobby") {
      return (
        <div className="space-y-4">
          <div>
            <label className="text-white font-medium mb-2 block">Quantidade de Bot Lobbies:</label>
            <Select value={selectedQuantity.toString()} onValueChange={(value) => setSelectedQuantity(Number(value))}>
              <SelectTrigger className="bg-gray-900 border-gray-700 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border-gray-700">
                {botLobbyQuantities.map((qty) => (
                  <SelectItem key={qty} value={qty.toString()} className="text-white hover:bg-purple-600">
                    {qty} {qty === 1 ? "lobby" : "lobbies"} - {formatPrice(product.basePrice * qty, language)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      )
    }

    if (product.type === "darkmatter") {
      return (
        <div className="space-y-4">
          <div>
            <label className="text-white font-medium mb-2 block">Selecione uma opção:</label>
            <Select value={selectedOption} onValueChange={setSelectedOption}>
              <SelectTrigger className="bg-gray-900 border-gray-700 text-white">\
