type IconKey = 'mail' | 'phone' | 'map';

export const TEXTS = {
    header: {
        bt_hero: "Início",
        bt_features: "Serviços",
        bt_about: "Sobre",
        cta: "Fale conosco",
    },

    hero: {
        badge: "Soluções em Tecnologia",
        title: {
            a: "Transforme seu",
            b: "negócio com",
            c: "tecnologia"
        },

        desc: "Desenvolvemos soluções tecnológicas personalizadas para micro e pequenas empresas que querem crescer no mundo digital.",
        bt: {
            cta: "Solicitar Orçamento",
            features: "Serviços"
        }
    },

    features: {
        badge: "O que fazemos",
        title: "Soluções completas para sua empresa",
        desc: "Oferecemos serviços de tecnologia personalizados para impulsionar o crescimento do seu negócio.",
        services: {
            webDevelopment: {
                title: "Desenvolvimento Web",
                desc: "Sites e sistemas web personalizados, responsivos e otimizados para seu negócio crescer online.",
            },

            mobileDevelopment: {
                title: "Aplicativos Mobile",
                desc: "Apps nativos e híbridos para Android e iOS, com design intuitivo e performance excepcional."
            },

            cloudComputing: {
                title: "Cloud Computing",
                desc: "Migração e gestão de infraestrutura em nuvem para maior segurança e escalabilidade."
            },

            businessIntelligence: {
                title: "Business Intelligence",
                desc: "Análise de dados e dashboards inteligentes para tomada de decisões estratégicas."
            },

            digitalSecurity: {
                title: "Segurança Digital",
                desc: "Proteção de dados, backup automático e implementação de melhores práticas de segurança."
            },

            technicalSupport: {
                title: "Suport Técnico",
                desc: "Atendimento personalizado e suporte contínuo para garantir o funcionamento perfeito."
            }
        }
    },

    about: {
        badge: "Quem somos",
        title: {
            a: "Tecnologia que impulsiona",
            b: "resultados"
        },
        desc: "A Zior é especializada em desenvolver soluções tecnológicas para micro e pequenas empresas que desejam se destacar no mercado digital.",
        subDesc: "Nossa missão é tornar a tecnologia acessível e eficiente, oferecendo serviços de qualidade com atendimento personalizado. Acreditamos que toda empresa, independente do tamanho, merece ter acesso às melhores ferramentas digitais.",
        strengths: [
            "Soluções personalizadas para cada negócio",
            "Suporte técnico contínuo",
            "Preços justos e transparentes",
            "Prazos de entrega respeitados",
            "Equipe especializada e certificada",
            "Tecnologias modernas e atualizadas",
        ],
        stats: [
            { value: "50+", desc: "Projetos Entregues" },
            { value: "98%", desc: "Clientes Satisfeitos" },
            { value: "5+", desc: "Anos de Experiência" },
            { value: "24/7", desc: "Suporte Disponível" }
        ]
    },

    contact: {
        badge: "Fale Conosco",
        title: {
            a: "Vamos conversar sobre seu",
            b: "projeto?"
        },
        desc: "Entre em contato e descubra como podemos transformar suas ideias em realidade.",
        titleType: "Informações de Contato",
        type: [
            { name: "Email", value: "contato@zior.com.br", icon: "mail" as IconKey },
            { name: "Telefone", value: "(61) 9 8243-4750", icon: "phone" as IconKey },
            { name: "Localização", value: "Santa Maria, DF - Brasil", icon: "map" as IconKey },
        ],
        contactForm: [
            { label: "Nome completo *", placeHolder: "Seu nome", type: "text" },
            { label: "Email *", placeHolder: "seu@email.com", type: "email" },
            { label: "Telefone *", placeHolder: "(00) 00000-0000", type: "tel" },
            { label: "Mensagem *", placeHolder: "Conte-nos sobre seu projeto...", type: "text" },
        ],
        cta: "Enviar Mensagem",
    },

    footer: {
        desc: "Transformando ideias em soluções tecnológicas para micro e pequenas empresas.",
        features: {
            title: "Serviços",
            items: [
                "Desenvolvimento Web",
                "Aplicativos Mobile",
                "Cloud Computing",
                "Business Intelligence",
                "Segurança Digital"
            ]
        },
        company: {
            title: "Empresa",
            items: [
                "Sobre Nós",
                "Portfólio",
                "Blog",
                "Carreiras"
            ]
        },
        contact: {
            title: "Contato",
            items: [
                "contato@zior.com.br",
                "(11) 99999-9999",
                "São Paulo, SP",
                "Brasil"
            ]
        },
        rights: "© 2026 Zior Technology. Todos os direitos reservados.",
        legal: {
            privacyPolicy: "Política de Privacidade",
            terms: "Termos de Uso"
        }
    },
};