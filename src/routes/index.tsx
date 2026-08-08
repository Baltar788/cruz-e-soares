import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowDownRight, ArrowRight, BriefcaseBusiness, Check, ChevronRight,
  Instagram, Landmark, Mail, MapPin, Menu, MessageCircle, Scale,
  ShieldCheck, Tractor, X,
} from "lucide-react";

export const Route = createFileRoute("/")({ component: Index });

const whatsapp = "https://wa.me/5512991091341?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta.";

const areas = [
  { icon: Scale, number: "01", title: "Direito Civil", text: "Contratos, responsabilidade civil, família, sucessões e soluções seguras para conflitos do cotidiano." },
  { icon: Tractor, number: "02", title: "Agronegócio", text: "Assessoria estratégica para produtores rurais, contratos agrários, crédito rural e proteção patrimonial." },
  { icon: ShieldCheck, number: "03", title: "Direito Previdenciário", text: "Planejamento, concessão e revisão de benefícios do INSS, com análise individual e acompanhamento próximo." },
  { icon: BriefcaseBusiness, number: "04", title: "Direito Trabalhista", text: "Defesa dos direitos de trabalhadores e consultoria preventiva para relações empresariais mais seguras." },
];

const professionals = [
  { name: "Gustavo Cruz", role: "Advogado", image: "/foto-1.jpeg", text: "Atuação estratégica, técnica e próxima para conduzir cada demanda com clareza e responsabilidade." },
  { name: "Dra. Soares", role: "Advogada", image: "/foto-2.jpeg", text: "Experiência, escuta atenta e dedicação na construção de soluções jurídicas consistentes e personalizadas." },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cookies, setCookies] = useState(false);

  useEffect(() => setCookies(!localStorage.getItem("cookiesAceitos")), []);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a href="#inicio" className="brand" aria-label="Cruz e Soares — início">
          <img src="/logo-transparent.png" alt="Cruz & Soares Sociedade de Advogados" />
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#escritorio">O escritório</a>
          <a href="#atuacao">Atuação</a>
          <a href="#equipe">Equipe</a>
          <a href="#contato">Contato</a>
        </nav>
        <a className="header-cta" href={whatsapp} target="_blank" rel="noreferrer">
          Agendar consulta <ArrowDownRight size={17} />
        </a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu" aria-expanded={menuOpen}>
          {menuOpen ? <X /> : <Menu />}
        </button>
        {menuOpen && (
          <nav className="mobile-nav">
            {[['escritorio','O escritório'],['atuacao','Atuação'],['equipe','Equipe'],['contato','Contato']].map(([id,label]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}<ChevronRight size={18}/></a>
            ))}
          </nav>
        )}
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className="hero-image" />
          <div className="hero-shade" />
          <div className="hero-content">
            <span className="eyebrow light">Sociedade de Advogados • Taubaté, SP</span>
            <h1>Direito com estratégia.<br/><em>Atendimento com propósito.</em></h1>
            <p>Soluções jurídicas personalizadas para proteger o que importa para você, sua família e sua empresa.</p>
            <div className="hero-actions">
              <a className="button gold" href={whatsapp} target="_blank" rel="noreferrer">Fale com um advogado <ArrowRight size={18}/></a>
              <a className="text-link light-link" href="#atuacao">Conheça nossa atuação <ArrowDownRight size={17}/></a>
            </div>
          </div>
          <div className="hero-proof">
            <div><strong>Ética</strong><span>em cada decisão</span></div>
            <div><strong>Clareza</strong><span>durante todo o processo</span></div>
            <div><strong>Estratégia</strong><span>para resultados seguros</span></div>
          </div>
        </section>

        <section id="escritorio" className="section about">
          <div className="section-label"><span>01</span> O escritório</div>
          <div className="about-grid">
            <div>
              <span className="eyebrow">Nossa essência</span>
              <h2>Excelência jurídica começa com <em>escuta e confiança.</em></h2>
            </div>
            <div className="about-copy">
              <p className="lead">Na Cruz & Soares, cada caso é tratado de forma única. Unimos experiência, atualização constante e visão estratégica para oferecer uma advocacia próxima, transparente e resolutiva.</p>
              <p>Nossa atuação é pautada pela ética, pelo sigilo e por uma comunicação clara — para que você compreenda cada etapa e tome decisões com segurança.</p>
              <div className="values">
                {['Atendimento personalizado','Comunicação clara','Sigilo absoluto','Foco em soluções'].map(value => <span key={value}><Check size={16}/>{value}</span>)}
              </div>
            </div>
          </div>
        </section>

        <section id="atuacao" className="section practice">
          <div className="section-label inverse"><span>02</span> Áreas de atuação</div>
          <div className="section-heading inverse-heading">
            <div><span className="eyebrow light">Conhecimento que protege</span><h2>Atuação jurídica<br/><em>completa e estratégica.</em></h2></div>
            <p>Orientação especializada para prevenir riscos, solucionar conflitos e preservar direitos.</p>
          </div>
          <div className="practice-grid">
            {areas.map(({icon: Icon, number, title, text}) => (
              <article className="practice-card" key={title}>
                <div className="card-top"><span>{number}</span><Icon size={28}/></div>
                <h3>{title}</h3><p>{text}</p>
                <a href={whatsapp} target="_blank" rel="noreferrer" aria-label={`Consultar sobre ${title}`}>Consultar especialista <ArrowRight size={16}/></a>
              </article>
            ))}
          </div>
        </section>

        <section id="equipe" className="section team">
          <div className="section-label"><span>03</span> Nossa equipe</div>
          <div className="section-heading">
            <div><span className="eyebrow">Experiência e proximidade</span><h2>Profissionais dedicados<br/>à <em>sua tranquilidade.</em></h2></div>
            <p>Uma equipe que combina conhecimento técnico, visão humana e compromisso real com cada cliente.</p>
          </div>
          <div className="team-grid">
            {professionals.map((person, i) => (
              <article className="person" key={person.name}>
                <div className="person-photo"><img src={person.image} alt={person.name}/><span>0{i+1}</span></div>
                <div className="person-info"><span>{person.role}</span><h3>{person.name}</h3><p>{person.text}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="manifesto">
          <Landmark size={34}/>
          <blockquote>“Mais do que representar causas, construímos caminhos jurídicos seguros para o futuro.”</blockquote>
          <span>Cruz & Soares • Sociedade de Advogados</span>
        </section>

        <section id="contato" className="section contact">
          <div className="contact-copy">
            <div className="section-label inverse"><span>04</span> Contato</div>
            <span className="eyebrow light">Vamos conversar</span>
            <h2>Seu caso merece<br/><em>atenção especializada.</em></h2>
            <p>Conte brevemente o que precisa. Nossa equipe retornará para entender sua situação e orientar os próximos passos.</p>
            <a className="button gold" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={19}/> Iniciar conversa no WhatsApp</a>
          </div>
          <div className="contact-card">
            <h3>Canais de atendimento</h3>
            <a href="mailto:contato@cruzesoares.adv.br"><Mail/><span><small>E-mail</small>contato@cruzesoares.adv.br</span></a>
            <a href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle/><span><small>WhatsApp</small>(12) 99109-1341</span></a>
            <div><MapPin/><span><small>Atendimento</small>Taubaté e região • Presencial e online</span></div>
            <div className="contact-note">Atendimento mediante agendamento prévio.</div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-main">
          <img src="/logo-transparent.png" alt="Cruz & Soares"/>
          <p>Advocacia estratégica, ética e próxima para pessoas e empresas.</p>
          <div className="social"><a href="https://instagram.com/cruzesoares.adv" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram/></a><a href="mailto:contato@cruzesoares.adv.br" aria-label="E-mail"><Mail/></a></div>
        </div>
        <div className="footer-bottom"><span>© 2026 Cruz & Soares. Todos os direitos reservados.</span><span>OAB/SP 203.791 • Em conformidade com o Código de Ética da OAB.</span></div>
      </footer>

      <a className="whatsapp-float" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Fale pelo WhatsApp"><MessageCircle/></a>
      {cookies && <div className="cookie"><p>Usamos cookies essenciais para melhorar sua experiência, em conformidade com a LGPD.</p><button onClick={() => { localStorage.setItem('cookiesAceitos','true'); setCookies(false); }}>Entendi</button></div>}
    </div>
  );
}
