import {
  Heart,
  Shield,
  Brain,
  Wallet,
  AlertCircle,
  Phone,
  Users,
  BookOpen,
  HelpCircle,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ViolenceTypeCard from "../components/ViolenceTypeCard";
import ResourceCard from "../components/ResourceCard";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-linear-to-br from-primary/5 to-secondary/5 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left: Text */}
              <div className="order-2 md:order-1">
                <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Conscientização & Apoio
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                  Violência Doméstica:{" "}
                  <span className="text-secondary">Conhecer é Proteger</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
                  Este site oferece informações essenciais, recursos de apoio e
                  caminhos para denúncia. Se você ou alguém que conhece está em
                  situação de violência, saiba que há ajuda disponível.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:180"
                    className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity text-center"
                  >
                    Ligar para Denúncia: 180
                  </a>
                  <a
                    href="#recursos"
                    className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/5 transition-colors text-center"
                  >
                    Explorar Recursos
                  </a>
                </div>
              </div>

              {/* Right: Visual */}
              <div className="order-1 md:order-2 flex justify-center">
                <div className="w-full max-w-md aspect-square bg-linear-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                  <Heart size={120} className="text-secondary opacity-40" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre" className="py-16 md:py-24 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                O que é Violência Doméstica?
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                A violência doméstica é qualquer ato ou omissão que cause dano
                físico, sexual, psicológico, econômico ou patrimonial a alguém
                no contexto de uma relação de intimidade ou convivência
                familiar. Afeta pessoas de todas as idades, gêneros e origens.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Segundo a Lei Maria da Penha (Lei nº 11.340/2006), a violência
                doméstica é um crime que viola direitos humanos fundamentais.
                Este site existe para informar, apoiar e conectar vítimas com
                recursos essenciais.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
                <div className="bg-primary/5 rounded-lg p-6">
                  <div className="text-3xl font-bold text-primary mb-2">
                    1 em 4
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Mulheres sofrem violência doméstica
                  </p>
                </div>
                <div className="bg-secondary/5 rounded-lg p-6">
                  <div className="text-3xl font-bold text-secondary mb-2">
                    180
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Número de denúncia 24h
                  </p>
                </div>
                <div className="bg-accent/5 rounded-lg p-6">
                  <div className="text-3xl font-bold text-accent mb-2">24h</div>
                  <p className="text-sm text-muted-foreground">
                    Atendimento contínuo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Violence Types Section */}
        <section
          id="tipos"
          className="py-16 md:py-24 bg-muted/30 border-b border-border"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tipos de Violência Doméstica
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
              A violência doméstica manifesta-se de várias formas. Reconhecer
              cada tipo é fundamental para identificar situações de abuso.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ViolenceTypeCard
                icon={<AlertCircle size={24} />}
                title="Violência Física"
                description="Uso de força corporal que causa lesão, dor ou incapacidade."
                examples={[
                  "Socos, tapas, chutes",
                  "Queimaduras ou cortes",
                  "Asfixia ou estrangulamento",
                  "Arremesso de objetos",
                ]}
              />

              <ViolenceTypeCard
                icon={<Brain size={24} />}
                title="Violência Psicológica"
                description="Ações que causam dano emocional, diminuem autoestima e controlam comportamento."
                examples={[
                  "Humilhação e xingamentos",
                  "Ameaças e intimidação",
                  "Isolamento social",
                  "Críticas constantes",
                ]}
              />

              <ViolenceTypeCard
                icon={<Heart size={24} />}
                title="Violência Sexual"
                description="Qualquer ato sexual não consentido ou forçado."
                examples={[
                  "Estupro conjugal",
                  "Coerção sexual",
                  "Exploração sexual",
                  "Assédio sexual",
                ]}
              />

              <ViolenceTypeCard
                icon={<Wallet size={24} />}
                title="Violência Econômica"
                description="Controle de recursos financeiros e impedimento de autonomia econômica."
                examples={[
                  "Proibição de trabalhar",
                  "Controle do dinheiro",
                  "Destruição de bens",
                  "Impedimento de herança",
                ]}
              />

              <ViolenceTypeCard
                icon={<Shield size={24} />}
                title="Violência Patrimonial"
                description="Destruição, subtração ou retenção de bens e documentos."
                examples={[
                  "Destruição de móveis",
                  "Retenção de documentos",
                  "Danificação de roupas",
                  "Roubo de pertences",
                ]}
              />

              <ViolenceTypeCard
                icon={<Users size={24} />}
                title="Violência Moral"
                description="Ações que afetam a honra, dignidade e reputação."
                examples={[
                  "Calúnia e difamação",
                  "Exposição pública",
                  "Acusações falsas",
                  "Desmoralização",
                ]}
              />
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section
          id="recursos"
          className="py-16 md:py-24 border-b border-border"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Recursos de Ajuda
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
              Se você está em perigo, procure ajuda imediatamente. Existem
              diversos recursos disponíveis 24 horas por dia.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ResourceCard
                icon={<Phone size={24} />}
                title="Central de Denúncia"
                description="Ligue 180 para denunciar violência doméstica. Atendimento 24h, anônimo e gratuito."
                action="Ligar Agora"
                link="180"
                isPhoneLink={true}
              />

              <ResourceCard
                icon={<Shield size={24} />}
                title="Delegacia da Mulher"
                description="Procure a delegacia mais próxima para registrar boletim de ocorrência e solicitar medidas protetivas."
                action="Encontrar Delegacia"
                link="https://www.ssp.sp.gov.br"
              />

              <ResourceCard
                icon={<Users size={24} />}
                title="CRAS - Centro de Referência"
                description="Atendimento social, psicológico e jurídico para vítimas de violência doméstica."
                action="Localizar CRAS"
                link="https://www.guaruja.sp.gov.br/cras"
              />

              <ResourceCard
                icon={<HelpCircle size={24} />}
                title="Apoio Psicológico"
                description="Acesso a profissionais de saúde mental para acompanhamento e suporte emocional."
                action="Solicitar Apoio"
                link="https://cvv.org.br/"
              />

              <ResourceCard
                icon={<BookOpen size={24} />}
                title="Lei Maria da Penha"
                description="Conheça seus direitos e as proteções legais contra violência doméstica."
                action="Ler Lei"
                link="https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2006/lei/l11340.htm"
              />

              <ResourceCard
                icon={<Heart size={24} />}
                title="Abrigos Seguros"
                description="Locais seguros e confidenciais para vítimas que precisam sair de casa imediatamente."
                action="Mais Informações"
                link="https://www.gov.br/mdh"
              />
            </div>
          </div>
        </section>

        {/* Warning Signs Section */}
        <section className="py-16 md:py-24 bg-secondary/5 border-b border-border">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Sinais de Alerta
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
              Reconheça os sinais de que você ou alguém próximo pode estar em
              uma relação abusiva.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-border rounded-lg p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Comportamentos do Agressor
                </h3>
                <ul className="space-y-3">
                  {[
                    "Controla o que você faz e com quem fala",
                    "Isola você de amigos e família",
                    "Faz ameaças ou intimidação",
                    "Tem acesso de raiva ou ciúmes extremo",
                    "Força relações sexuais",
                    "Controla o dinheiro e as finanças",
                    "Nega responsabilidade pelos atos",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-secondary font-bold mt-1">✓</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white border border-border rounded-lg p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Sinais na Vítima
                </h3>
                <ul className="space-y-3">
                  {[
                    "Medo do parceiro ou cônjuge",
                    "Ferimentos frequentes sem explicação clara",
                    "Comportamento submisso ou retraído",
                    "Depressão, ansiedade ou baixa autoestima",
                    "Isolamento social progressivo",
                    "Problemas de saúde crônicos",
                    "Comportamento nervoso ou assustado",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-accent font-bold mt-1">✓</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground border-b border-border">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Você não está sozinho
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Ajuda está disponível 24 horas por dia. Ligar para 180 é gratuito,
              confidencial e seguro.
            </p>
            <a
              href="tel:180"
              className="inline-block bg-accent text-accent-foreground px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity"
            >
              Ligar para Denúncia: 180
            </a>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
              Entre em Contato
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white border border-border rounded-lg p-8 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-primary">
                  <Phone size={24} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Telefone
                </h3>
                <p className="text-muted-foreground mb-4">
                  Denúncia de violência doméstica
                </p>
                <a
                  href="tel:180"
                  className="text-primary font-semibold hover:underline"
                >
                  180
                </a>
              </div>

              <div className="bg-white border border-border rounded-lg p-8 text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-secondary">
                  <Heart size={24} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Apoio Emocional
                </h3>
                <p className="text-muted-foreground mb-4">
                  Suporte psicológico e emocional
                </p>
                <a
                  href="tel:188"
                  className="text-secondary font-semibold hover:underline"
                >
                  188 (CVV)
                </a>
              </div>

              <div className="bg-white border border-border rounded-lg p-8 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-accent">
                  <Users size={24} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Comunidade
                </h3>
                <p className="text-muted-foreground mb-4">
                  Grupos de apoio e orientação
                </p>
                <a
                  href="#"
                  className="text-accent font-semibold hover:underline"
                >
                  Saiba Mais
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
