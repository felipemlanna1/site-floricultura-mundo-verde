import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { WhatsappLogo, InstagramLogo, MapPin, Star, Clock, Flower, Leaf, PottedPlant, Truck, ArrowUp, List, X, Phone, Heart, Envelope } from '@phosphor-icons/react'

const WHATSAPP = "5548984703741"
const PHONE_MAIN = "(48) 4141-3206"
const PHONE_CELL = "(48) 98470-3741"
const ADDRESS = "Rod. Joao Gualberto Soares, 3223 - Ingleses Norte, Florianopolis - SC"
const EMAIL = "floricultura.mundoverde@yahoo.com.br"

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }
const stagger = { visible: { transition: { staggerChildren: 0.12 } } }

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])
  const links = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Produtos', href: '#produtos' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Avaliacoes', href: '#avaliacoes' },
    { label: 'Contato', href: '#contato' },
  ]
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2">
          <Leaf size={28} weight="duotone" className="text-green-700" />
          <span className="font-['Playfair_Display'] text-xl font-bold text-green-800">Mundo Verde</span>
        </a>
        <div className="hidden md:flex gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className={`text-sm font-medium transition ${scrolled ? 'text-gray-600 hover:text-green-700' : 'text-white/90 hover:text-white'}`}>{l.label}</a>
          ))}
        </div>
        <a href={`https://wa.me/${WHATSAPP}?text=Ola! Gostaria de encomendar flores.`} target="_blank" rel="noopener" className="hidden md:flex items-center gap-2 bg-green-700 hover:bg-green-600 text-white px-5 py-2.5 rounded-full text-sm font-bold transition">
          <WhatsappLogo size={18} weight="duotone" /> Encomendar
        </a>
        <button onClick={() => setOpen(!open)} className={`md:hidden ${scrolled ? 'text-green-800' : 'text-white'}`}>
          {open ? <X size={28} /> : <List size={28} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-white/95 backdrop-blur-xl border-t border-green-100">
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map(l => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-gray-600 hover:text-green-700 transition font-medium text-sm">{l.label}</a>
              ))}
              <a href={`https://wa.me/${WHATSAPP}?text=Ola! Gostaria de encomendar flores.`} target="_blank" rel="noopener" className="flex items-center justify-center gap-2 bg-green-700 text-white px-5 py-3 rounded-full font-bold">
                <WhatsappLogo size={18} weight="duotone" /> Encomendar
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src="./images/hero.jpg" alt="Floricultura Mundo Verde" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-green-950/60" />
      </div>
      <motion.div initial="hidden" animate="visible" variants={stagger} className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
          <Flower size={16} weight="duotone" /> Desde 2015 em Ingleses
        </motion.div>
        <motion.h1 variants={fadeUp} className="font-['Playfair_Display'] text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-6">
          Floricultura<br /><span className="text-green-300">Mundo Verde</span>
        </motion.h1>
        <motion.p variants={fadeUp} className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Flores frescas, plantas ornamentais, paisagismo e decoracao. Levando beleza e vida ao seu dia em Florianopolis desde 2015.
        </motion.p>
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={`https://wa.me/${WHATSAPP}?text=Ola! Gostaria de encomendar um buque de flores!`} target="_blank" rel="noopener" className="flex items-center justify-center gap-2 bg-green-700 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-bold transition transform hover:scale-105 shadow-lg shadow-green-700/30">
            <WhatsappLogo size={24} weight="duotone" /> Encomendar Flores
          </a>
          <a href="#produtos" className="flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white px-8 py-4 rounded-full text-lg transition hover:bg-white/10">
            <PottedPlant size={24} weight="duotone" /> Ver Produtos
          </a>
        </motion.div>
        <motion.div variants={fadeUp} className="mt-10 flex justify-center gap-1 items-center">
          {[...Array(5)].map((_, i) => <Star key={i} size={20} weight="fill" className="text-yellow-400" />)}
          <span className="text-white/60 ml-2 text-sm">4.7 estrelas no Google</span>
        </motion.div>
      </motion.div>
    </section>
  )
}

function Sobre() {
  return (
    <section id="sobre" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <img src="./images/buque-rosas.jpg" alt="Buque de rosas Mundo Verde" className="rounded-3xl shadow-xl w-full aspect-[4/3] object-cover" />
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-6">
          <motion.span variants={fadeUp} className="text-green-700 uppercase tracking-widest text-sm font-bold">Sobre Nos</motion.span>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-['Playfair_Display'] text-green-900 leading-tight">Beleza e Vida em Cada <span className="text-green-600">Detalhe</span></motion.h2>
          <motion.p variants={fadeUp} className="text-gray-600 text-lg leading-relaxed">
            A Floricultura Mundo Verde esta localizada em Ingleses, Florianopolis, oferecendo desde 2015 as mais belas flores, plantas e servicos de paisagismo da regiao. Somos apaixonados por transformar ambientes com a beleza da natureza.
          </motion.p>
          <motion.p variants={fadeUp} className="text-gray-600 text-lg leading-relaxed">
            Trabalhamos com flores frescas, plantas ornamentais, mudas para horta e jardim, vasos decorativos, adubos e tudo que voce precisa para seu espaco verde. Entregamos em toda Florianopolis!
          </motion.p>
          <motion.div variants={fadeUp} className="grid grid-cols-3 gap-6 pt-4">
            {[
              { num: '10+', label: 'Anos' },
              { num: '4.7', label: 'Estrelas' },
              { num: '35+', label: 'Avaliacoes' },
            ].map(s => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-['Playfair_Display'] font-bold text-green-700">{s.num}</p>
                <p className="text-gray-500 text-sm">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function Produtos() {
  const cats = [
    { icon: <Flower size={40} weight="duotone" />, title: 'Buques e Arranjos', desc: 'Rosas, lirios, orquideas e flores do campo. Buques para todas as ocasioes: aniversarios, casamentos e datas especiais.', color: 'bg-pink-50 border-pink-200 text-pink-700' },
    { icon: <PottedPlant size={40} weight="duotone" />, title: 'Plantas e Mudas', desc: 'Plantas ornamentais, suculentas, samambaias, palmeiras e mudas para horta. Variedade para ambientes internos e externos.', color: 'bg-green-50 border-green-200 text-green-700' },
    { icon: <Leaf size={40} weight="duotone" />, title: 'Paisagismo', desc: 'Projetos de paisagismo personalizados para residencias e empresas. Planejamento, execucao e manutencao.', color: 'bg-emerald-50 border-emerald-200 text-emerald-700' },
    { icon: <Heart size={40} weight="duotone" />, title: 'Presentes', desc: 'Cestas decoradas, vasos especiais, cachepots e kits presente. Perfeito para surpreender quem voce ama.', color: 'bg-rose-50 border-rose-200 text-rose-700' },
    { icon: <PottedPlant size={40} weight="duotone" />, title: 'Vasos e Acessorios', desc: 'Vasos ceramicos, plasticos e cimento. Pratinhos, suportes, substratos, adubos e ferramentas de jardinagem.', color: 'bg-amber-50 border-amber-200 text-amber-700' },
    { icon: <Truck size={40} weight="duotone" />, title: 'Entrega em Floripa', desc: 'Entregamos em toda Florianopolis e regiao. Encomende pelo WhatsApp e receba no conforto da sua casa.', color: 'bg-sky-50 border-sky-200 text-sky-700' },
  ]
  return (
    <section id="produtos" className="py-24 px-6 bg-green-50/50">
      <div className="max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
          <motion.span variants={fadeUp} className="text-green-700 uppercase tracking-widest text-sm font-bold">Produtos e Servicos</motion.span>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-['Playfair_Display'] text-green-900 mt-3">O Que <span className="text-green-600">Oferecemos</span></motion.h2>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cats.map(c => (
            <motion.div key={c.title} variants={fadeUp} className={`${c.color} border rounded-2xl p-8 hover:shadow-lg transition group`}>
              <div className="mb-4 group-hover:scale-110 transition-transform">{c.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{c.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function Galeria() {
  const fotos = [
    { src: './images/buque-rosas.jpg', title: 'Buques de Rosas' },
    { src: './images/orquideas.jpg', title: 'Orquideas' },
    { src: './images/plantas.jpg', title: 'Plantas Ornamentais' },
    { src: './images/paisagismo.jpg', title: 'Paisagismo' },
  ]
  return (
    <section id="galeria" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
          <motion.span variants={fadeUp} className="text-green-700 uppercase tracking-widest text-sm font-bold">Galeria</motion.span>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-['Playfair_Display'] text-green-900 mt-3">Nossas <span className="text-green-600">Criações</span></motion.h2>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 gap-6">
          {fotos.map(f => (
            <motion.div key={f.title} variants={fadeUp} className="group relative overflow-hidden rounded-3xl aspect-[4/3] shadow-md">
              <img src={f.src} alt={f.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-green-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <h3 className="text-white text-xl font-bold">{f.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function Avaliacoes() {
  const reviews = [
    { name: 'Camila R.', text: 'Floricultura maravilhosa! Sempre encontro tudo que preciso para meu jardim. Atendimento excelente e precos justos.', stars: 5 },
    { name: 'Roberto S.', text: 'Encomendei um buque para o aniversario da minha esposa e ficou lindo! Entrega pontual e flores fresquissimas.', stars: 5 },
    { name: 'Patricia M.', text: 'Melhor floricultura de Ingleses! Grande variedade de plantas e mudas. A equipe e super atenciosa e entende muito.', stars: 5 },
  ]
  return (
    <section id="avaliacoes" className="py-24 px-6 bg-green-50/50">
      <div className="max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
          <motion.span variants={fadeUp} className="text-green-700 uppercase tracking-widest text-sm font-bold">Avaliacoes</motion.span>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-['Playfair_Display'] text-green-900 mt-3">O Que Nossos Clientes <span className="text-green-600">Dizem</span></motion.h2>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-3 gap-8">
          {reviews.map(r => (
            <motion.div key={r.name} variants={fadeUp} className="bg-white border border-green-100 rounded-2xl p-8 shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(r.stars)].map((_, i) => <Star key={i} size={18} weight="fill" className="text-yellow-500" />)}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed italic">"{r.text}"</p>
              <p className="text-green-800 font-bold">{r.name}</p>
              <p className="text-gray-400 text-sm">Google Reviews</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="py-24 px-6 bg-green-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img src="./images/paisagismo.jpg" alt="" className="w-full h-full object-cover" />
      </div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-3xl mx-auto text-center relative z-10">
        <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-['Playfair_Display'] text-white leading-tight mb-6">Encomende Suas <span className="text-green-200">Flores</span> Hoje</motion.h2>
        <motion.p variants={fadeUp} className="text-green-100/70 text-lg mb-10">
          Surpreenda alguem especial ou transforme seu espaco com a beleza da natureza. Entregamos em toda Florianopolis!
        </motion.p>
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={`https://wa.me/${WHATSAPP}?text=Ola! Gostaria de encomendar flores para entrega em Florianopolis!`} target="_blank" rel="noopener" className="flex items-center justify-center gap-2 bg-white text-green-800 hover:bg-green-50 px-8 py-4 rounded-full text-lg font-bold transition transform hover:scale-105 shadow-lg">
            <WhatsappLogo size={24} weight="duotone" /> Encomendar pelo WhatsApp
          </a>
          <a href={`tel:${PHONE_MAIN.replace(/\D/g,'')}`} className="flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white px-8 py-4 rounded-full text-lg transition hover:bg-white/10">
            <Phone size={24} weight="duotone" /> Ligar Agora
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

function Contato() {
  return (
    <section id="contato" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-8">
          <motion.span variants={fadeUp} className="text-green-700 uppercase tracking-widest text-sm font-bold">Contato</motion.span>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-['Playfair_Display'] text-green-900 leading-tight">Venha Nos <span className="text-green-600">Visitar</span></motion.h2>
          <motion.div variants={fadeUp} className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin size={28} weight="duotone" className="text-green-700 shrink-0 mt-1" />
              <div>
                <h4 className="text-green-900 font-bold">Endereco</h4>
                <p className="text-gray-600">{ADDRESS}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <WhatsappLogo size={28} weight="duotone" className="text-green-700 shrink-0 mt-1" />
              <div>
                <h4 className="text-green-900 font-bold">WhatsApp</h4>
                <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener" className="text-gray-600 hover:text-green-700 transition">{PHONE_CELL}</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone size={28} weight="duotone" className="text-green-700 shrink-0 mt-1" />
              <div>
                <h4 className="text-green-900 font-bold">Telefone</h4>
                <a href={`tel:${PHONE_MAIN.replace(/\D/g,'')}`} className="text-gray-600 hover:text-green-700 transition">{PHONE_MAIN}</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Envelope size={28} weight="duotone" className="text-green-700 shrink-0 mt-1" />
              <div>
                <h4 className="text-green-900 font-bold">Email</h4>
                <a href={`mailto:${EMAIL}`} className="text-gray-600 hover:text-green-700 transition">{EMAIL}</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock size={28} weight="duotone" className="text-green-700 shrink-0 mt-1" />
              <div>
                <h4 className="text-green-900 font-bold">Horario</h4>
                <p className="text-gray-600">Seg - Sab: 8h as 18h</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <img src="./images/plantas.jpg" alt="Plantas da Floricultura Mundo Verde" className="rounded-3xl w-full aspect-square object-cover shadow-xl" />
        </motion.div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-green-900 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Leaf size={22} weight="duotone" className="text-green-300" />
          <span className="font-['Playfair_Display'] text-lg font-bold text-white">Mundo Verde</span>
        </div>
        <p className="text-green-200/50 text-sm">&copy; 2026 Floricultura Mundo Verde. Todos os direitos reservados.</p>
        <div className="flex gap-4">
          <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener" className="text-green-200/50 hover:text-green-300 transition"><WhatsappLogo size={24} weight="duotone" /></a>
          <a href={`tel:${PHONE_MAIN.replace(/\D/g,'')}`} className="text-green-200/50 hover:text-green-300 transition"><Phone size={24} weight="duotone" /></a>
        </div>
      </div>
    </footer>
  )
}

function ScrollTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const h = () => setShow(window.scrollY > 400)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])
  if (!show) return null
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 z-50 bg-green-700 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition">
      <ArrowUp size={24} />
    </button>
  )
}

function WhatsAppFloat() {
  return (
    <a href={`https://wa.me/${WHATSAPP}?text=Ola! Gostaria de informacoes sobre flores e plantas.`} target="_blank" rel="noopener" className="fixed bottom-6 left-6 z-50 bg-green-600 hover:bg-green-500 text-white p-4 rounded-full shadow-xl transition transform hover:scale-110">
      <WhatsappLogo size={28} weight="fill" />
    </a>
  )
}

export default function App() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Hero />
      <Sobre />
      <Produtos />
      <Galeria />
      <Avaliacoes />
      <CTA />
      <Contato />
      <Footer />
      <ScrollTop />
      <WhatsAppFloat />
    </div>
  )
}
