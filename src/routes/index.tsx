import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Instagram,
  Landmark,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Scale,
  ShieldCheck,
  Tractor,
  X,
} from "lucide-react";

export const Route = createFileRoute("/")({ component: Index });

const whatsapp = `https://wa.me/551231996132?text=${encodeURIComponent("Olá! Vim pelo site da Cruz & Soares e gostaria de agendar um horário para uma consulta. Quais dias e horários estão disponíveis?")}`;
const address = "Av. Bernardino de Campos, 46 — Centro, Lorena/SP";
const maps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`Cruz & Soares Sociedade de Advogados, ${address}`)}`;

const areas = [
  {
    icon: Scale,
    number: "01",
    title: "Direito Civil",
    text: "Contratos, responsabilidade civil, família, sucessões e soluções seguras para conflitos do cotidiano.",
  },
  {
    icon: Tractor,
    number: "02",
    title: "Agronegócio",
    text: "Assessoria estratégica para produtores rurais, contratos agrários, crédito rural e proteção patrimonial.",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Direito Previdenciário",
    text: "Planejamento, concessão e revisão de benefícios do INSS, com análise individual e acompanhamento próximo.",
  },
  {
    icon: BriefcaseBusiness,
    number: "04",
    title: "Direito Trabalhista",
    text: "Defesa dos direitos de trabalhadores e consultoria preventiva para relações empresariais mais seguras.",
  },
];

const professionals = [
  {
    name: "Dr. Gustavo",
    role: "Advogado",
    image: "/images/gustavo-800.webp",
    text: "Atuação estratégica, técnica e próxima para conduzir cada demanda com clareza e responsabilidade.",
  },
  {
    name: "Dra. Denise",
    role: "Advogada",
    image: "/images/denise-800.webp",
    text: "Experiência, escuta atenta e dedicação na construção de soluções jurídicas consistentes e personalizadas.",
  },
  {
    name: "Dr. Renan",
    role: "Advogado",
    image: "/images/renan-v2-800.webp",
    photoClass: "person-photo-renan",
    text: "Compromisso, atenção e atuação responsável na busca por soluções jurídicas seguras e eficientes.",
  },
  {
    name: "Dr. Rafael",
    role: "Advogado",
    image: "/images/rafael-800.png",
    text: "Atuação cuidadosa, comunicação transparente e dedicação na construção de soluções jurídicas eficazes.",
  },
  { name: "Dr. João", role: "Estagiário", image: "/images/bape-v2-800.webp", text: "" },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeArea, setActiveArea] = useState<number | null>(0);

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
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        {menuOpen && (
          <nav className="mobile-nav">
            {[
              ["escritorio", "O escritório"],
              ["atuacao", "Atuação"],
              ["equipe", "Equipe"],
              ["contato", "Contato"],
            ].map(([id, label]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
                {label}
                <ChevronRight size={18} />
              </a>
            ))}
          </nav>
        )}
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className="hero-image" />
          <div className="hero-shade" />
          <div className="hero-content">
            <span className="eyebrow light">Sociedade de Advogados • Lorena, SP</span>
            <h1>
              Advocacia próxima,
              <br />
              <em>clara e responsável.</em>
            </h1>
            <p>
              Aqui você conversa diretamente com quem vai cuidar do seu caso. Ouvimos com atenção,
              explicamos cada etapa e buscamos o caminho mais seguro para você.
            </p>
            <div className="hero-actions">
              <a className="button gold" href={whatsapp} target="_blank" rel="noreferrer">
                Fale com um advogado <ArrowRight size={18} />
              </a>
              <a className="text-link light-link" href="#atuacao">
                Conheça nossa atuação <ArrowDownRight size={17} />
              </a>
            </div>
          </div>
        </section>

        <section id="escritorio" className="section about">
          <div className="section-label">
            <span>01</span> O escritório
          </div>
          <div className="about-grid">
            <div>
              <span className="eyebrow">Sobre nós</span>
              <h2>
                Antes de qualquer processo,
                <br />
                <em>existe uma história.</em>
              </h2>
            </div>
            <div className="about-copy">
              <p className="lead">
                Sabemos que procurar um advogado costuma acontecer em um momento de dúvida ou
                preocupação. Por isso, começamos ouvindo.
              </p>
              <p>
                Na Cruz & Soares, o atendimento é feito de perto e sem juridiquês desnecessário.
                Você entende o que está acontecendo, conhece as possibilidades e participa das
                decisões ao longo do caminho.
              </p>
              <div className="values">
                {[
                  "Atendimento personalizado",
                  "Comunicação clara",
                  "Sigilo absoluto",
                  "Foco em soluções",
                ].map((value) => (
                  <span key={value}>
                    <Check size={16} />
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="atuacao" className="section practice practice-editorial">
          <div className="section-label inverse">
            <span>02</span> Áreas de atuação
          </div>
          <div className="practice-layout">
            <div className="practice-intro">
              <span className="eyebrow light">Clareza para o próximo passo</span>
              <h2>
                Seu momento.
                <br />
                Seus direitos.
                <br />
                <em>Nossa atenção.</em>
              </h2>
              <p>
                Cada história tem suas particularidades. Encontre a área que se conecta ao seu
                momento e conheça como podemos ajudar.
              </p>
              <div className="practice-guidance">
                <Scale size={24} />
                <span>
                  Uma escuta atenta.
                  <br />
                  <strong>Um caminho construído com você.</strong>
                </span>
              </div>
            </div>
            <div className="practice-accordion">
              {areas.map(({ icon: Icon, number, title, text }, index) => (
                <article
                  className={`practice-entry${activeArea === index ? " is-open" : ""}`}
                  key={title}
                >
                  <h3>
                    <button
                      type="button"
                      className="practice-toggle"
                      id={`area-toggle-${number}`}
                      aria-expanded={activeArea === index}
                      aria-controls={`area-panel-${number}`}
                      onClick={() => setActiveArea(activeArea === index ? null : index)}
                    >
                      <span className="practice-number">{number}</span>
                      <Icon className="practice-icon" size={26} />
                      <span className="practice-title">{title}</span>
                      <ArrowDownRight className="practice-arrow" size={23} />
                    </button>
                  </h3>
                  <div
                    className="practice-panel"
                    id={`area-panel-${number}`}
                    role="region"
                    aria-labelledby={`area-toggle-${number}`}
                    hidden={activeArea !== index}
                  >
                    <p>{text}</p>
                    <a
                      className="practice-consult"
                      href={`https://wa.me/551231996132?text=${encodeURIComponent(`Olá! Vim pelo site da Cruz & Soares e gostaria de agendar um horário para uma consulta sobre ${title}. Quais dias e horários estão disponíveis?`)}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Conversar sobre esta área <ArrowRight size={18} />
                    </a>
                  </div>
                </article>
              ))}
              <p className="practice-help">
                Não sabe por onde começar?{" "}
                <a href={whatsapp} target="_blank" rel="noreferrer">
                  Conte sua situação para nós <ArrowRight size={15} />
                </a>
              </p>
            </div>
          </div>
        </section>

        <section id="equipe" className="section team">
          <div className="section-label">
            <span>03</span> Nossa equipe
          </div>
          <div className="section-heading">
            <div>
              <span className="eyebrow">Quem vai atender você</span>
              <h2>
                Conhecimento técnico
                <br />
                <em>com conversa franca.</em>
              </h2>
            </div>
            <p>
              Uma equipe que combina conhecimento técnico, visão humana e compromisso real com cada
              cliente.
            </p>
          </div>
          <div className="team-grid">
            {professionals.map((person, i) => (
              <article className="person" key={person.name}>
                <div className={`person-photo ${person.photoClass ?? ""}`}>
                  <img src={person.image} alt={person.name} />
                  <span>0{i + 1}</span>
                </div>
                <div className="person-info">
                  <span>{person.role}</span>
                  <h3>{person.name}</h3>
                  {person.text && <p>{person.text}</p>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="manifesto">
          <Landmark size={34} />
          <blockquote>
            “Mais do que representar causas, construímos caminhos jurídicos seguros para o futuro.”
          </blockquote>
          <span>Cruz & Soares • Sociedade de Advogados</span>
        </section>

        <section id="contato" className="section contact">
          <div className="contact-copy">
            <div className="section-label inverse">
              <span>04</span> Contato
            </div>
            <span className="eyebrow light">Vamos conversar</span>
            <h2>
              Vamos conversar
              <br />
              <em>sobre a sua situação?</em>
            </h2>
            <p>
              Conte brevemente o que precisa. Nossa equipe retornará para entender sua situação e
              orientar os próximos passos.
            </p>
            <a className="button gold" href={whatsapp} target="_blank" rel="noreferrer">
              <MessageCircle size={19} /> Iniciar conversa no WhatsApp
            </a>
          </div>
          <div className="contact-card">
            <h3>Canais de atendimento</h3>
            <a href="mailto:contato@cruzesoares.adv.br">
              <Mail />
              <span>
                <small>E-mail</small>contato@cruzesoares.adv.br
              </span>
            </a>
            <a href={whatsapp} target="_blank" rel="noreferrer">
              <MessageCircle />
              <span>
                <small>WhatsApp</small>(12) 3199-6132
              </span>
            </a>
            <div className="contact-location">
              <a className="contact-address" href={maps} target="_blank" rel="noreferrer">
                <MapPin />
                <span>
                  <small>Endereço</small>
                  {address}
                </span>
              </a>
              <a className="directions-link" href={maps} target="_blank" rel="noreferrer">
                Como chegar <ArrowRight size={15} />
              </a>
            </div>
            <div className="contact-note">
              Atendimento presencial e online, mediante agendamento prévio.
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-main">
          <img src="/logo-transparent.png" alt="Cruz & Soares" />
          <p>Advocacia estratégica, ética e próxima para pessoas e empresas.</p>
          <div className="social">
            <a
              href="https://instagram.com/cruzesoares.adv"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <Instagram />
            </a>
            <a href="mailto:contato@cruzesoares.adv.br" aria-label="E-mail">
              <Mail />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Cruz & Soares. Todos os direitos reservados.</span>
          <span>Versão beta — site sujeito a alterações.</span>
        </div>
      </footer>

      <a
        className="whatsapp-float"
        href={whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Fale pelo WhatsApp"
      >
        <MessageCircle />
      </a>
    </div>
  );
}
