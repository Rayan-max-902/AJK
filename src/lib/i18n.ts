import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "nav": {
        "home": "Home",
        "about": "About",
        "programs": "Programs",
        "events": "Events",
        "projects": "Projects",
        "sponsorship": "Sponsorship",
        "contact": "Contact",
        "admin": "Admin"
      },
      "hero": {
        "tag": "The Future of Education",
        "title": "AJK ASSOCIATION",
        "subtitle": "JEUNES AL KENDI",
        "description": "Igniting potential through innovation and technology. Join the ranks of future-ready leaders.",
        "explore": "Explore Events",
        "learn": "Learn More"
      },
      "admin": {
        "login": "Verify with Google",
        "denied": "Access Denied. Only authorized admins allowed."
      },
      "programs": {
        "title": "Specialized Pathways",
        "subtitle": "Our curriculum is designed to evolve as fast as the industry. Choose a field that matches your ambition.",
        "dia": {
          "title": "DIA",
          "tag": "AI Development",
          "desc": "Dive deep into neural networks, data science, and the future of cognitive computing.",
          "features": ["Neural Networks", "Machine Learning", "Big Data"],
          "details": "Master the architecture of modern AI systems. From LLMs like Gemini to custom computer vision models, this program covers the mathematical foundations and practical engineering required for the AI era."
        },
        "dai": {
          "title": "DAI",
          "tag": "IT Application Dev",
          "desc": "Master end-to-end software development. From design to deployment, become an expert.",
          "features": ["Full-Stack Dev", "Cloud Computing", "Mobile Apps"],
          "details": "Become a versatile full-stack engineer. You will learn to architect scalable backends and create pixel-perfect frontends using React, Node.js, and modern cloud deployment strategies."
        },
        "cg": {
          "title": "CG",
          "tag": "Accounting & Management",
          "desc": "Become a strategic leader. Learn financial management, business steering, and digital tools.",
          "features": ["Financial Management", "Audit & Consulting", "Digital Business"],
          "details": "Bridge the gap between business and technology. This program focuses on modern accounting practices, strategic management, and the use of ERP systems for organizational excellence."
        },
        "info": {
          "more": "Detailed Branch Information",
          "objectives": "Core Objectives",
          "outcomes": "Professional Outcomes"
        }
      },
      "about": {
        "title": "Who We Are",
        "description": "AJK - Association Jeunes Al Kendi is more than a school; it's an association of visionaries dedicated to redefining the educational landscape through technology.",
        "mission": {
          "title": "Our Mission",
          "desc": "To provide an immersive, tech-driven environment where students can master the tools of the future."
        },
        "vision": {
          "title": "Our Vision",
          "desc": "Leading the digital transformation of education by fostering a community of innovators."
        },
        "inspiration": {
          "title": "Inspiration",
          "desc": "Inspired by the legacy of Al Kendi, we focus on integrity, creativity, and knowledge."
        },
        "legacy": {
          "title": "A Legacy of Impact",
          "desc": "Founded at the intersection of tradition and technology, AJK has consistently produced top-tier talent. Our students don't just learn; they build and succeed.",
          "years": "Years Excellence",
          "growth": "Career Growth"
        }
      },
      "common": {
        "explore": "Explore",
        "participate": "Participate",
        "learn_more": "Learn More",
        "submit": "Submit",
        "loading": "Loading...",
        "error": "An error occurred",
        "open": "Open",
        "closed": "Closed",
        "coming_soon": "Coming Soon",
        "days": "Days",
        "hours": "Hours",
        "minutes": "Minutes",
        "seconds": "Seconds"
      },
      "footer": {
        "desc": "Association Jeunes Al Kendi : Excellence, Innovation and Leadership for youth.",
        "quick_links": "Quick Links",
        "contact": "Contact Us",
        "follow": "Follow Us",
        "rights": "All rights reserved."
      },
      "events": {
        "title": "Upcoming Events",
        "subtitle": "Join our community in these transformative experiences. From hackathons to conferences, we build the future together.",
        "spots": "participants",
        "ends_in": "Ends in",
        "starts_in": "Starts in"
      },
      "projects": {
        "title": "Student Portfolio",
        "subtitle": "Discover the innovative solutions built by our students. Real projects, real impact.",
        "all": "All",
        "view": "View Case Study",
        "impact": "Impact Timeline",
        "community": "Community Projects",
        "labs": "Lab Experiments",
        "ai": "AI Research"
      },
      "sponsorship": {
        "title": "Our Partners",
        "subtitle": "Empower the next generation of leaders. Join our network of forward-thinking sponsors.",
        "bronze": "Bronze",
        "silver": "Silver",
        "gold": "Gold",
        "per_event": "per event",
        "select": "Become a Sponsor",
        "trust": "Trusted by leading institutions",
        "feature_1": "Logo on website",
        "feature_2": "Social media mention",
        "feature_3": "Event booth space",
        "feature_4": "Priority recruitment",
        "feature_5": "Keynote speaking slot"
      },
      "contact": {
        "title": "Get in Touch",
        "subtitle": "Have questions? We're here to help. Contact us for inquiries, partnerships, or support.",
        "form_title": "Send Message",
        "name": "Full Name",
        "email": "Email Address",
        "subject": "Subject",
        "message": "Your Message",
        "sent": "Message sent successfully!",
        "info": "Contact Information",
        "address": "Address",
        "phone": "Phone",
        "email_label": "Email"
      },
      "home": {
        "hero": {
          "title": "Excellence & Tomorrow's Innovation",
          "subtitle": "Association Jeunes Al Kendi: Building the future through technology, research, and youth empowerment.",
          "cta": "Join the Movement",
          "learnMore": "Our Programs"
        },
        "featured": {
          "title": "Flagship Programs",
          "ai": {
            "title": "AI Development",
            "desc": "Mastering machine learning and neural networks."
          },
          "cg": {
            "title": "Accounting & Management",
            "desc": "Expertise in financial systems and organizational leadership."
          },
          "dai": {
            "title": "App Development",
            "desc": "Building the digital ecosystem of tomorrow."
          }
        },
        "impact": {
          "members": "Active Members",
          "projects": "Projects Completed",
          "awards": "Excellence Awards"
        },
        "schedule": {
          "title": "Emploi du Temps Filières",
          "subtitle": "Organisation du temps pour une efficacité maximale par branche",
          "download": "Télécharger le Calendrier Complet",
          "weekly": "Vue Hebdomadaire"
        },
        "events": {
          "title": "Latest Events",
          "subtitle": "Don't miss our upcoming workshops and competitions",
          "viewAll": "View All Events"
        }
      }
    }
  },
  fr: {
    translation: {
      "nav": {
        "home": "Accueil",
        "about": "À Propos",
        "programs": "Filières",
        "events": "Événements",
        "projects": "Projets",
        "sponsorship": "Parrainage",
        "contact": "Contact",
        "admin": "Admin"
      },
      "hero": {
        "tag": "L'Avenir de l'Éducation",
        "title": "ASSOCIATION AJK",
        "subtitle": "JEUNES AL KENDI",
        "description": "Libérer le potentiel par l'innovation et la technologie. Rejoignez les leaders de demain.",
        "explore": "Découvrir",
        "learn": "En savoir plus"
      },
      "admin": {
        "login": "Vérifier avec Google",
        "denied": "Accès Refusé. Seuls les administrateurs autorisés sont admis."
      },
      "programs": {
        "title": "Filières Spécialisées",
        "subtitle": "Notre programme est conçu pour évoluer aussi vite que l'industrie. Choisissez un domaine qui correspond à votre ambition.",
        "dia": {
          "title": "DIA",
          "tag": "Dév. d'Intelligence Artificielle",
          "desc": "Plongez dans le monde des réseaux neuronaux, de la science des données et du futur de l'informatique.",
          "features": ["Réseaux Neuronaux", "Machine Learning", "Big Data"],
          "details": "Maîtrisez l'architecture des systèmes d'IA modernes. Des LLM comme Gemini aux modèles de vision par ordinateur personnalisés, ce programme couvre les fondements mathématiques et l'ingénierie pratique requis pour l'ère de l'IA."
        },
        "dai": {
          "title": "DAI",
          "tag": "Dév. d'Application Informatique",
          "desc": "Maîtrisez le développement logiciel de bout en bout. De la conception à la mise en ligne.",
          "features": ["Full-Stack Dev", "Cloud Computing", "Mobile Apps"],
          "details": "Devenez un ingénieur full-stack polyvalent. Vous apprendrez à concevoir des backends évolutifs et à créer des frontends parfaits en utilisant React, Node.js et les stratégies modernes de déploiement cloud."
        },
        "cg": {
          "title": "CG",
          "tag": "Comptabilité et Gestion",
          "desc": "Devenez un leader stratégique. Apprenez la gestion financière et le pilotage d'entreprise.",
          "features": ["Gestion Financière", "Audit & Conseil", "Digital Business"],
          "details": "Faites le pont entre les affaires et la technologie. Ce programme se concentre sur les pratiques comptables modernes, la gestion stratégique et l'utilisation des systèmes ERP pour l'excellence organisationnelle."
        },
        "info": {
          "more": "Informations détaillées sur la filière",
          "objectives": "Objectifs de la formation",
          "outcomes": "Débouchés professionnels"
        }
      },
      "about": {
        "title": "Qui Sommes-Nous",
        "description": "AJK - Association Jeunes Al Kendi est plus qu'une simple association ; c'est un collectif de visionnaires dédiés à redéfinir l'éducation via la technologie.",
        "mission": {
          "title": "Notre Mission",
          "desc": "Fournir un environnement immersif et technologique où les étudiants maîtrisent les outils du futur."
        },
        "vision": {
          "title": "Notre Vision",
          "desc": "Mener la transformation digitale de l'éducation en favorisant une communauté d'innovateurs."
        },
        "inspiration": {
          "title": "Inspiration",
          "desc": "Inspirés par l'héritage d'Al Kendi, nous nous concentrons sur l'intégrité, la créativité et le savoir."
        },
        "legacy": {
          "title": "Un Héritage d'Impact",
          "desc": "Fondé à l'intersection de la tradition et de la technologie, l'AJK forme les talents de demain. Nos étudiants construisent et réussissent.",
          "years": "Années d'Excellence",
          "growth": "Croissance de Carrière"
        }
      },
      "common": {
        "explore": "Explorer",
        "participate": "Participer",
        "learn_more": "En savoir plus",
        "submit": "Envoyer",
        "loading": "Chargement...",
        "error": "Une erreur est survenue",
        "open": "Ouvert",
        "closed": "Fermé",
        "coming_soon": "Bientôt",
        "days": "Jours",
        "hours": "Heures",
        "minutes": "Minutes",
        "seconds": "Secondes"
      },
      "footer": {
        "desc": "Association Jeunes Al Kendi : Excellence, Innovation et Leadership pour la jeunesse.",
        "quick_links": "Liens Rapides",
        "contact": "Contactez-nous",
        "follow": "Suivez-nous",
        "rights": "Tous droits réservés."
      },
      "events": {
        "title": "Prochains Événements",
        "subtitle": "Rejoignez notre communauté dans ces expériences transformatrices. Des hackathons aux conférences, nous construisons l'avenir ensemble.",
        "spots": "participants",
        "ends_in": "Se termine dans",
        "starts_in": "Commence dans"
      },
      "projects": {
        "title": "Portfolio Étudiant",
        "subtitle": "Découvrez les solutions innovantes construites par nos étudiants. Des projets réels, un impact réel.",
        "all": "Tout",
        "view": "Voir l'étude de cas",
        "impact": "Chronologie de l'Impact",
        "community": "Projets Communautaires",
        "labs": "Expériences de Laboratoire",
        "ai": "Recherche IA"
      },
      "sponsorship": {
        "title": "Nos Partenaires",
        "subtitle": "Donnez les moyens à la prochaine génération de leaders. Rejoignez notre réseau de sponsors visionnaires.",
        "bronze": "Bronze",
        "silver": "Argent",
        "gold": "Or",
        "per_event": "par événement",
        "select": "Devenir Sponsor",
        "trust": "Approuvé par les plus grandes institutions",
        "feature_1": "Logo sur le site",
        "feature_2": "Mention réseaux sociaux",
        "feature_3": "Stand lors des événements",
        "feature_4": "Recrutement prioritaire",
        "feature_5": "Intervention Keynote"
      },
      "contact": {
        "title": "Contactez-nous",
        "subtitle": "Vous avez des questions ? Nous sommes là pour vous aider. Contactez-nous pour toute demande, partenariat ou support.",
        "form_title": "Envoyer un message",
        "name": "Nom Complet",
        "email": "Adresse Email",
        "subject": "Sujet",
        "message": "Votre Message",
        "sent": "Message envoyé avec succès !",
        "info": "Informations de Contact",
        "address": "Adresse",
        "phone": "Téléphone",
        "email_label": "Email"
      },
      "home": {
        "hero": {
          "title": "Excellent & Innovation de demain",
          "subtitle": "Association Jeunes Al Kendi : Construire l'avenir par la technologie, la recherche et l'autonomisation des jeunes.",
          "cta": "Rejoindre le mouvement",
          "learnMore": "Nos Programmes"
        },
        "featured": {
          "title": "Programmes Phares",
          "ai": {
            "title": "Développement d'IA",
            "desc": "Maîtriser l'apprentissage automatique et les réseaux neuronaux."
          },
          "cg": {
            "title": "Comptabilité et Gestion",
            "desc": "Expertise en systèmes financiers et leadership organisationnel."
          },
          "dai": {
            "title": "D'AI (Dev Application)",
            "desc": "Bâtir l'écosystème numérique de demain."
          }
        },
        "impact": {
          "members": "Membres Actifs",
          "projects": "Projets Réalisés",
          "awards": "Prix d'Excellence"
        },
        "schedule": {
          "title": "Emploi du Temps Filières",
          "subtitle": "Organisation du temps pour une efficacité maximale par branche",
          "download": "Télécharger le Calendrier Complet",
          "weekly": "Vue Hebdomadaire"
        },
        "events": {
          "title": "Derniers Événements",
          "subtitle": "Ne manquez pas nos prochains ateliers et compétitions",
          "viewAll": "Voir tous les événements"
        }
      }
    }
  },
  ar: {
    translation: {
      "nav": {
        "home": "الرئيسية",
        "about": "حول الجمعية",
        "programs": "الشعب",
        "events": "الفعاليات",
        "projects": "المشاريع",
        "sponsorship": "الرعاية",
        "contact": "اتصل بنا",
        "admin": "المشرف"
      },
      "hero": {
        "tag": "مستقبل التعليم",
        "title": "جمعية AJK",
        "subtitle": "شباب الكندي",
        "description": "إيقاظ الإمكانيات من خلال الابتكار والتكنولوجيا. انضم إلى صفوف قادة المستقبل.",
        "explore": "استكشف الفعاليات",
        "learn": "اقرأ المزيد"
      },
      "admin": {
        "login": "التحقق عبر جوجل",
        "denied": "تم رفض الوصول. يسمح فقط للمشرفين المعتمدين."
      },
      "programs": {
        "title": "الشعب المتخصصة",
        "subtitle": "تم تصميم مناهجنا لتتطور بسرعة الصناعة. اختر المجال الذي يناسب طموحك.",
        "dia": {
          "title": "DIA",
          "tag": "تطوير الذكاء الاصطناعي",
          "desc": "انغمس في عالم الشبكات العصبية وعلوم البيانات ومستقبل الحوسبة المعرفية.",
          "features": ["الشبكات العصبية", "تعلم الآلة", "البيانات الضخمة"],
          "details": "إتقان هندسة أنظمة الذكاء الاصطناعي الحديثة. من نماذج اللغة الكبيرة مثل Gemini إلى نماذج الرؤية الحاسوبية المخصصة، يغطي هذا البرنامج الأسس الرياضية والهندسة العملية المطلوبة لعصر الذكاء الاصطناعي."
        },
        "dai": {
          "title": "DAI",
          "tag": "تطوير تطبيقات المعلوماتية",
          "desc": "أتقن تطوير البرمجيات من البداية إلى النهاية. من التصميم إلى النشر.",
          "features": ["تطوير شامل", "الحوسبة السحابية", "تطبيقات المحمول"],
          "details": "كن مهندس تطوير شامل متعدد المهارات. ستتعلم هندسة النهايات الخلفية القابلة للتوسع وإنشاء نهايات أمامية مثالية باستخدام React و Node.js واستراتيجيات النشر السحابي الحديثة."
        },
        "cg": {
          "title": "CG",
          "tag": "المحاسبة والتسيير",
          "desc": "كن قائداً استراتيجياً. تعلم الإدارة المالية وتسيير المقاولات والأدوات الرقمية.",
          "features": ["الإدارة المالية", "التدقيق والاستشارة", "الأعمال الرقمية"],
          "details": "سد الفجوة بين الأعمال والتكنولوجيا. يركز هذا البرنامج على الممارسات المحاسبية الحديثة، والإدارة الاستراتيجية، واستخدام أنظمة ERP للتميز التنظيمي."
        },
        "info": {
          "more": "معلومات مفصلة عن الشعبة",
          "objectives": "أهداف التكوين",
          "outcomes": "الآفاق المهنية"
        }
      },
      "about": {
        "title": "من نحن",
        "description": "جمعية شباب الكندي (AJK) هي أكثر من مجرد جمعية؛ إنها تجمع للرؤى المكرسة لإعادة تعريف المشهد التعليمي من خلال التكنولوجيا.",
        "mission": {
          "title": "مهمتنا",
          "desc": "توفير بيئة تقنية غامرة حيث يتقن الطلاب أدوات المستقبل ويطبقونها لحل التحديات."
        },
        "vision": {
          "title": "رؤيتنا",
          "desc": "قيادة التحول الرقمي للتعليم من خلال رعاية مجتمع من المبتكرين الذين يسدون الفجوة بين الذكاء البشري والذكاء الاصطناعي."
        },
        "inspiration": {
          "title": "إلهامنا",
          "desc": "مستوحى من إرث الكندي، نركز على النزاهة والإبداع والسعي الدؤوب للمعرفة في العصر الحديث."
        },
        "legacy": {
          "title": "إرث من التأثير",
          "desc": "تأسست جمعية AJK عند تقاطع التقاليد والتكنولوجيا، وقد أنتجت باستمرار مواهب من الطراز الأول. طلابنا لا يتعلمون فحسب؛ بل يبنون وينجحون.",
          "years": "سنوات التميز",
          "growth": "النمو المهني"
        }
      },
      "common": {
        "explore": "استكشاف",
        "participate": "مشاركة",
        "learn_more": "اقرأ المزيد",
        "submit": "إرسال",
        "loading": "جاري التحميل...",
        "error": "حدث خطأ ما",
        "open": "مفتوح",
        "closed": "مغلق",
        "coming_soon": "قريباً",
        "days": "أيام",
        "hours": "ساعات",
        "minutes": "دقائق",
        "seconds": "ثواني"
      },
      "footer": {
        "desc": "جمعية شباب الكندي: التميز والابتكار والريادة للشباب.",
        "quick_links": "روابط سريعة",
        "contact": "اتصل بنا",
        "follow": "تابعنا",
        "rights": "جميع الحقوق محفوظة."
      },
      "events": {
        "title": "الفعاليات القادمة",
        "subtitle": "انضم إلى مجتمعنا في هذه التجارب التحويلية. من الهاكاثونات إلى المؤتمرات، نبني المستقبل معاً.",
        "spots": "مشارك",
        "ends_in": "ينتهي في",
        "starts_in": "يبدأ في"
      },
      "projects": {
        "title": "معرض الطالب",
        "subtitle": "اكتشف الحلول المبتكرة التي بناها طلابنا. مشاريع حقيقية، تأثير حقيقي.",
        "all": "الكل",
        "view": "عرض حالة الدراسة",
        "impact": "جدول التأثير الزمني",
        "community": "مشاريع مجتمعية",
        "labs": "تجارب مخبرية",
        "ai": "أبحاث الذكاء الاصطناعي"
      },
      "sponsorship": {
        "title": "شركاؤنا",
        "subtitle": "مكن الجيل القادم من القادة. انضم إلى شبكتنا من الرعاة ذوي الرؤية المستقبلية.",
        "bronze": "برونزي",
        "silver": "فضي",
        "gold": "ذهبي",
        "per_event": "لكل فعالية",
        "select": "كن شريكاً",
        "trust": "موثوق به من قبل المؤسسات الرائدة",
        "feature_1": "شعار على الموقع",
        "feature_2": "ذكر في وسائل التواصل",
        "feature_3": "مساحة جناح في الفعاليات",
        "feature_4": "أولوية التوظيف",
        "feature_5": "كلمة رئيسية في الفعاليات"
      },
      "contact": {
        "title": "تواصل معنا",
        "subtitle": "لديك أسئلة؟ نحن هنا للمساعدة. اتصل بنا للاستفسارات، الشراكات، أو الدعم.",
        "form_title": "إرسال رسالة",
        "name": "الاسم الكامل",
        "email": "البريد الإلكتروني",
        "subject": "الموضوع",
        "message": "رسالتك",
        "sent": "تم إرسال الرسالة بنجاح!",
        "info": "معلومات الاتصال",
        "address": "العنوان",
        "phone": "الهاتف",
        "email_label": "البريد الإلكتروني"
      },
      "home": {
        "hero": {
          "title": "تميز وابتكار الغد",
          "subtitle": "جمعية شباب الكندي: بناء المستقبل من خلال التكنولوجيا والبحث وتمكين الشباب.",
          "cta": "انضم إلى الحركة",
          "learnMore": "برامجنا"
        },
        "featured": {
          "title": "البرامج الرائدة",
          "ai": {
            "title": "تطوير الذكاء الاصطناعي",
            "desc": "إتقان تعلم الآلة والشبكات العصبية."
          },
          "cg": {
            "title": "المحاسبة والتسيير",
            "desc": "الخبرة في الأنظمة المالية والقيادة التنظيمية."
          },
          "dai": {
            "title": "تطوير التطبيقات",
            "desc": "بناء النظام الرقمي لغد أفضل."
          }
        },
        "impact": {
          "members": "الأعضاء النشطون",
          "projects": "المشاريع المكتملة",
          "awards": "جوائز التميز"
        },
        "schedule": {
          "title": "جدول الحصص حسب الشعب",
          "subtitle": "تنظيم الوقت لتحقيق أقصى قدر من الكفاءة لكل شعبة",
          "download": "تحميل التقويم الكامل",
          "weekly": "عرض أسبوعي"
        },
        "events": {
          "title": "أحدث الفعاليات",
          "subtitle": "لا تفوت ورش العمل والمسابقات القادمة",
          "viewAll": "عرض جميع الفعاليات"
        }
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
