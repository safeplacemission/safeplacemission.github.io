// List of available locales
const availableLocales = ['en', 'pt', 'kh'];

// Default locale.
const defaultLanguage = 'en';

// Manually detect users' language, strip languages such as `en-GB` to just `en`.
let language = (window.navigator.userLanguage || window.navigator.language).substr(0, 2);

// Detects if the user has previously selected a language
const selectedLang = localStorage.getItem('selectedLanguage');
if (selectedLang && availableLocales.includes(selectedLang)) {
	language = selectedLang;
}

// If `?lang=` exists in URL params & is valid, then use that instead, and save it in localStorage
const urlParams = new URLSearchParams(window.location.search);
const langFromUrl = urlParams.get('lang');
if (langFromUrl && availableLocales.includes(langFromUrl)) {
  language = langFromUrl;
  localStorage.setItem('selectedLanguage', language);
  urlParams.delete('lang');
}

// Set `pageLanguage` only if its available within our locales, otherwise default.
let pageLanguage = defaultLanguage;
if (availableLocales.includes(language)) {
  pageLanguage = language;
}

// Locale translations.
const locales = {

  // English
  en: {
	"keywords": "safe place mission, safe home, NGO, cambodia, asia, child, abuse, sponsor, donate, mission",
	"description": "We fight against child abuse and human trafficking in Cambodia.",
	"header": {
		"home": "Main",
		"program": "Safe Home",
		"donate": "Donate & Sponsor",
		"language": "<i class='fas fa-globe-americas'></i> Language",
		"en": "English",
		"pt": "Português",
		"kh": "ភាសាខ្មែរ",
	},
	"footer": {
		"policy": "CHILD PROTECTION POLICY",
		"organization": "&copy; Safe Place Mission",
	},
    "index": {
		"title": "Safe Place Mission",
		"subtitle": "Rescue and change <b>lives</b> in Cambodia",
		"buttonDonateFloat": "&nbsp Donate & Sponsor",
		"buttonDonate": "Donate & Sponsor",
		"buttonProgram": "Safe Home Program",
		"buttonTeam": "Who we are",
		"teamDescriptionA": "We are <b>Quésede Eger</b> and <b>Flávio de Souza</b>, Brazilians and Christians. After years working on social programs in Brazil, we moved to Cambodia in 2016 to fight against human trafficking and child abuse.",
		"teamDescriptionB": "Read more about our <b><a href=#mission>mission</a></b> and <b><a href=#work>projects</a></b>.",
		"missionDescriptionA": "<b>Cambodia</b> is a Southeast Asian country which suffers from a huge social disruption due to its past. Even though the government is acting against child abuse, children become victims everyday; moreover, many of them don’t receive love, education and decent food.",
		"missionDescriptionB": "<b>Safe Place Mission</b> is a NGO that cooperates with families who live in a risky situation in order to provide safety, education and a better future for their children so they can lead a change in Cambodia.",
		"missionDescriptionC": "Get to know our <b><a href=#work>projects</a></b>.",
		"programTitle": "<b>Safe Home Program</b>",
		"programDescription": "Rescue, accomodation, healthy food, education and protection for Cambodian children who live at risk of abuse. <b><a>Click to read more</a></b> or",
		"programButton": "Donate & Sponsor",
		"signupDescription": "<h3>Would you like to subscribe for our newsletter?</h3>",
	},
	"safehome": {
		"video": "<object data='https://www.youtube.com/embed/tltPbh8kLk8?rel=0?version=3&autoplay=1&loop=1&controls=1&showinfo=0&cc_load_policy=1&hl=en&cc_lang_pref=en' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope;' ></object>",
		"title": "Safe Home Program",
		"subtitle": "&nbsp Kampot, Cambodia",
		"description": "<b>Safe Home</b> is a group home for children located in Kampot, a province of Cambodia. We welcome children from unstructured families who can’t emotionally and financially support, raise, and keep them safe from human trafficking and sexual abuse.",
		"button": "Donate & Sponsor",		
		"signupDescription": "<h3>Would you like to subscribe for program updates?</h3>",
		"infoHeader": "<h3>What does the program cover?</h3>",
		"infoDescription1": "We cooperate with NGOs, community leaders and families to rescue children who live in a risky situation to move and be raised at Safe Home until they graduate. Our group home can support up to 30 children.",
		"infoDescription2": "All children eat <b>healthy food</b> made with love, receive a <b>good education</b> in private school, take extra English language classes and enjoy plenty of playful activities everyday.",
		"infoDescription3": "Every house repairs and children activities are organized by missionaries and volunteers, who guarantee all children are raised with <b>love</b> and as in a <b>family</b>.",
	},
	"donations": {
		"quote": "<b>Rescuing and changing lives in Cambodia</b> is only possible thanks to many supporters around the world. <b>You are about to join us and be part of the change</b>.",
		"popular": "Most popular",
		"readmore": "Read more",
		"sponsorTitle": "Sponsorship",
		"sponsorDescription": "Become part of a child life with our sponsor program and receive exclusive news, pictures and content.",
		"donateTitle": "Donation",
		"donateDescription" : "Donate the amount at your choice, once or monthly, to help with our mission and Safe Home program.",
		"partnerTitle": "Partnership",
		"partnerDescription": "Do you believe you can help us in any other way? Get in touch!",
		"partnerContent": "You can also help by becoming a partner or volunteer, by providing a product or service related to our mission, or by advocating for our program. Get in touch with us using your preferred channel:",
		"donateContent1": "<b>How can your donation help us?</b>",
		"donateContent2": "<b>Children</b> — Providing meals, education, healthcare, entertainment, culture and clothes for all children supported by the program including any new rescued child.",
		"donateContent3": "<b>Home</b> — Financially support the facilities where children and our team live, including common bills such as renting, water, electricity, cleaning, and repairs.",
		"donateContent4": "<b>Team</b> — Guarantee people support to manage, cook, and take care of the children. Moreover, it covers our expenses with partners, paperwork and rescue missions.",
		"sponsorContent1": "When you <b>sponsor a child</b> you become part of our family by offering monthly financial support for a Cambodian child of our Safe Home program. That means you will contribute to make sure one child receives meals, education, clothes, entertainment and a better future. In addition, we will share with you pictures, videos and news during his/her development.",
		"sponsorContent2": "<b>How much would you like to donate?</b>",
		"sponsorValue1": "<b>$30</b>/month",
		"sponsorValue2": "<b>$50</b>/month",
		"sponsorValue3": "<b>$150</b>/month",
		"sponsorValue4": "<b>Other amount</b>",
		"sponsorValue5": "<b>(VIP) US$300</b>/month",
		"sponsorShared": "<b>Shared Sponsorship</b> — You will help financially one child along with other sponsors. This group can be organized by us or yourself. All sponsors of that child will receive pictures, videos and news no matter how much each sponsor donates.",
		"sponsorVIP1": "<b>Exclusive Sponsorship</b> — You will invest US$300/month for a period of one year (minimum) to financially support one child. As you will be the only sponsor you will exclusively receive pictures, videos and news of this child.",
		"sponsorVIP2": "Are you interested in this opportunity? Get in touch with us via <b><a href='https://wa.me/85570397508/?text=Hello%2C%20I%20want%20to%20sponsor%20a%20child%2C%20can%20you%20help%20me%3F'>Whatsapp (+855 70397508)</a></b> or <b><a href='mailto:safeplacemission@gmail.com'>safeplacemission@gmail.com</a></b> for any question and to start the process.",
	},
	"payments": {
		"header": "<b>Payment Options</b>",
		"country": "From which country will you donate?",
		"australia": "Australia",
		"brazil": "Brazil",
		"cambodia": "Cambodia",
		"international": "International (any other country)",
		"method": "Please choose a payment method:",
		"paypal" : "<a href='https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=C6LRND6BHP2RE&locale.x=en' class='button'><i class='fas fa-credit-card'></i>&nbsp <b>Credit Card</b> or <b>PayPal</b></a>",
		"or": "or",
		"brazilPix": "<b>PIX</b> or <b>Bank Transfer</b>",
		"brazilBankTitle": "<b>Brazilian Banking Information</b>",
		"brazilPixBeneficiary": "Beneficiary:",
		"brazilPixKey": "PIX Key:",
		"brazilBankTransfer": "Bank Transfer",
		"brazilWarning": "PS: If you have any issue related to the CNPJ code, try the following: ",
		"receipt": "<i>You may opt to send us a receipt of your donation in order to receive news about Safe Home:</br> Contact us via <b><a href='https://wa.me/85570397508/?text=Hello%2C%20there%20is%20a%20receipt%20of%20the%20bank%20transfer%20attached%20bellow%2C%20can%20you%20help%20me%3F'>Whatsapp (+855 70397508)</a></b> or <b><a href='mailto:safeplacemission@gmail.com'>safeplacemission@gmail.com</a></b>.</i>",
		"swiftTitle": "Cambodia / International (SWIFT)",
		"swiftBeneficiary": "Beneficiary:",
		"swiftCurrency": "Currency: USD (American Dollar)",
		"swiftAccount": "Account number:",
		"swiftAccountType": "Account type: Current",
		"swiftCode": "SWIFT code:",
		"swiftBankName": "Bank Name:",
		"swiftBankAddress": "Bank address:",
		"thanks" : "Thank you very much for your support!",
	},
	"donateDescription1": "Our mission is only possible thanks to many supporters around the world. Join us now.",
	"donateDescription2": "<b>Donate to change lives with us.</b>",
	"donateButton": "Donate & Sponsor",
  },

  // Portuguese
  pt: {
	"keywords": "safe place mission, safe home, ONG, cambodia, camboja, asia, criança, doação, missão, evangelho",
	"description": "Combatemos o impacto da violência e abusos contra crianças no Camboja.",
	"header": {
		"home": "Início",
		"program": "Lar Seguro",
		"donate": "Doe & Apadrinhe",
		"language": "<i class='fas fa-globe-americas'></i> Idioma",
		"en": "English",
		"pt": "Português",
		"kh": "ភាសាខ្មែរ",
	},
	"footer": {
		"policy": "CHILD PROTECTION POLICY",
		"organization": "&copy; Safe Place Mission",
	},
    "index": {
		"title": "Safe Place Mission",
		"subtitle": "Resgatar e transformar <b>vidas</b> no Camboja",
		"buttonDonateFloat": "&nbsp Doe & Apadrinhe",
		"buttonDonate": "Doe & Apadrinhe",
		"buttonProgram": "Projeto Lar Seguro",
		"buttonTeam": "Quem somos",
		"teamDescriptionA": "Somos <b>Quésede Eger</b> e <b>Flávio de Souza</b>, brasileiros e cristãos. Após anos atuando em projetos sociais no Brasil, nos mudamos para o Camboja em 2016 para dedicar nossas vidas no combate à violência e abusos contra crianças.",
		"teamDescriptionB": "Conheça a nossa <b><a href=#mission>missão</a></b> e <b><a href=#work>projetos</a></b>.",
		"missionDescriptionA": "O <b>Camboja</b> é um país do Sudeste Asiático que possui uma enorme desestruturação humana e social. Embora o governo realize ações para combater abusos e a prostituição infantil, crianças são vítimas todos os dias, além de viver sem carinho, educação e um alimento digno.",
		"missionDescriptionB": "A <b>Safe Place Mission</b> é uma ONG que atua com famílias em situações de risco para que estas crianças recebam amor, um futuro próspero, e possam espalhar essa mudança pelo país.",
		"missionDescriptionC": "Conheça mais sobre os <b><a href=#work>nossos projetos</a></b>.",		
		"programTitle": "<b>Projeto Safe Home (Lar Seguro)</b>",
		"programDescription": "Resgate, acomodação, alimentação, educação e proteção às crianças cambojanas que vivem em situação de risco. <b><a>Clique aqui e saiba mais</a></b> ou",
		"programButton": "Doe & Apadrinhe",
		"signupDescription": "<h3>Gostaria de acompanhar as nossas novidades?</h3>",
    },
	"safehome": {
		"video": "<object data='https://www.youtube.com/embed/tltPbh8kLk8?rel=0?version=3&autoplay=1&loop=1&controls=1&showinfo=0&cc_load_policy=1&hl=pt&cc_lang_pref=pt' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope;' ></object>",		
		"title": "Projeto Lar Seguro",
		"subtitle": "&nbsp Kampot, Camboja",
		"description": "A <b>Safe Home (Lar Seguro)</b> é uma casa lar para crianças localizado em Kampot, no interior do Camboja. Nós acolhemos crianças de famílias que não possuem suporte emocional e financeiro para sustentá-las e mantê-las em segurança de abusos e exploração sexual.",
		"button": "Doe & Apadrinhe",		
		"signupDescription": "<h3>Que tal acompanhar as novidades do projeto?</h3>",
		"infoHeader": "<h3>Qual é o trabalho realizado pelo projeto?</h3>",
		"infoDescription1": "Com apoio de ONGs parceiras e indicações, resgatamos crianças que vivem em situação de risco para morar na Safe Home até se formarem. Atualmente nosso espaço tem capacidade para até 30 crianças.",
		"infoDescription2": "Todas as crianças que vivem na Safe Home recebem <b>alimentação</b> nutritiva feita com carinho, <b>educação</b> em escolas de boa qualidade, além de aulas de inglês, música e diversas atividades lúdicas.",
		"infoDescription3": "Tanto a manutenção quanto às atividades do projeto são ministradas por missionários e voluntários, que se dedicam para garantir que todas as crianças cresçam com <b>amor</b> e convivam em <b>família</b>.",
	},
	"donations": {
		"quote": "<b>Resgatar e transformar vidas no Camboja</b> só é possivel graças a ajuda de diversos doadores ao redor do mundo, sendo em sua maioria famílias brasileiras. <b>Você está prestes a fazer parte desta transformação</b>.",
		"popular": "Mais popular",
		"readmore": "Saiba mais",
		"sponsorTitle": "Apadrinhamento",
		"sponsorDescription": "Faça parte do crescimento de uma criança contribuindo todo mês e receba notícias, fotos e conteúdo exclusivo!",
		"donateTitle": "Doação Livre",
		"donateDescription": "Doe um valor único ou recorrente de sua escolha para contribuir diretamente com a nossa missão e o projeto Safe Home.",
		"partnerTitle": "Parcerias",
		"partnerDescription": "Você acredita que pode nos ajudar de alguma outra forma? Conte pra gente!",
		"partnerContent": "Você também pode contribuir se tornando um parceiro ou voluntário, fornecendo algum produto ou serviço que ajude nossa causa ou até mesmo divulgando nosso projeto. Vamos conversar? Entre em contato conosco por meio de um dos nosso canais oficiais de comunicações:",
		"donateContent1": "<b>Como a sua doação ajuda a Safe Place?</b>",
		"donateContent2": "<b>Crianças</b> — Fornecer alimentação, educação, saúde, lazer, cultura e roupas para todas as crianças da Safe Home e possibilitar que todas as novas crianças resgatadas recebam o mesmo tratamento.",
		"donateContent3": "<b>Espaço</b> — Garantir o espaço físico aonde as crianças e missionários convivem, incluindo contas de aluguel, água, luz, gás, materiais de construção, limpeza e reparos.",
		"donateContent4": "<b>Equipe</b> — Cobrir os gastos essenciais da nossa equipe para que atuem com total dedicação às crianças, além de gastos com parceiros, documentação e viagens para resgate de novas crianças.",
		"sponsorContent1": "Ao <b>apadrinhar uma criança</b> você se torna parte da nossa família ao ajudar financeiramente, todos os meses, uma criança cambojana do projeto. O valor será destinado ao projeto Safe Home e distribuído para que a criança receba alimentação, educação, roupas, lazer e um futuro próspero. Em troca, além do carinho por ajudar o futuro desta criança, você receberá notícias, fotos e videos da criança durante todo o seu desenvolvimento.",
		"sponsorContent2": "<b>Quanto você pretende contribuir?</b>",
		"sponsorValue1": "<b>R$30</b>/mês",
		"sponsorValue2": "<b>R$50</b>/mês",
		"sponsorValue3": "<b>R$150</b>/mês",
		"sponsorValue4": "<b>Outro valor</b>",
		"sponsorValue5": "<b>(Exclusivo) US$300</b>/mês",
		"sponsorShared": "<b>Apadrinhamento Coletivo</b> — Você compartilhará os cuidados financeiros com outros padrinhos. O grupo pode ser tanto organizado por nós ou por você. Todos os padrinhos da criança receberão fotos, videos e novidades - independente do valor doado.",
		"sponsorVIP1": "<b>Apadrinhamento Exclusivo</b> — Você investirá mensalmente, durante um ano, US$300/mês (dólares) para o cuidado de uma criança. Você será o único padrinho desta criança, ou seja, receberá fotos, videos e novidades sobre ela com exclusividade.",
		"sponsorVIP2": "Gostou da ideia? Entre em contato com a gente via <b><a href='https://wa.me/85570397508/?text=Ol%C3%A1%2C%20gostaria%20de%20me%20tornar%20um%20padrinho%20exclusivo%2C%20pode%20me%20ajudar%3F'>WhatsApp (+855 70397508)</a></b> ou <b><a href='mailto:safeplacemission@gmail.com'>safeplacemission@gmail.com</a></b> para esclarecer dúvidas e combinarmos os detalhes.",
	},
	"payments": {
		"header": "<b>Opções de Pagamento</b>",
		"country": "De qual país você gostaria de doar?",
		"australia": "Austrália",
		"brazil": "Brasil",
		"cambodia": "Camboja",
		"international": "Internacional (outros países)",
		"method": "Escolha uma das opções abaixo:",
		"paypal" : "<a href='https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=L7RCZNAPPPXCY' class='button'><i class='fas fa-credit-card'></i>&nbsp  <b>Cartão</b> ou <b>PayPal</b></a>",
		"or": "ou",
		"brazilPix": "<b>PIX</b> ou <b>Depósito</b>",
		"brazilBankTitle": "<b>Dados Bancários</b>",
		"brazilPixBeneficiary": "Beneficiário:",
		"brazilPixKey": "Chave:",
		"brazilBankTransfer": "Depósito / DOC",
		"brazilWarning": "Obs: Caso o CNPJ não entre no sistema do seu banco, tente iniciar o CNPJ com zero, como a seguir: ",
		"receipt": "<i>Favor nos enviar um comprovante do depósito para que você possa ser identificado e passe a receber novidades do projeto:</br><b><a href='https://wa.me/85570397508/?text=Ol%C3%A1%2C%20segue%20o%20comprovante%20da%20minha%20oferta%20abaixo%2C%20pode%20me%20ajudar%3F'>Whatsapp (+855 70397508)</a></b> ou <b><a href='mailto:safeplacemission@gmail.com'>safeplacemission@gmail.com</a></b>.</i>",
		"swiftTitle": "Conta no Camboja / Internacional (SWIFT)",
		"swiftBeneficiary": "Beneficiário:",
		"swiftCurrency": "Moeda: USD (Dólar Americano)",
		"swiftAccount": "Número da Conta:",
		"swiftAccountType": "Tipo de Conta: Conta Corrente",
		"swiftCode": "Código SWIFT:",
		"swiftBankName": "Nome do Banco:",
		"swiftBankAddress": "Endereço do Banco:",
		"thanks" : "Muito obrigado por sua contribuição!",
	},
	"donateDescription1": "Nossa missão só é possivel graças a ajuda de diversos doadores ao redor do mundo, sendo em sua maioria famílias brasileiras.",
	"donateDescription2": "<b>Doe para transformar vidas conosco.</b>",
	"donateButton": "Doe & Apadrinhe",
  },
  
  // Khmer
  kh: {
	"keywords": "សេហ្វ ផ្លេស មិសសិន ផ្ទះសុវត្ថិភាព អង្គការក្រៅរដ្ឋាភិបាល ប្រទេសកម្ពុជា  ទ្វីបអាស៊ី ការរំលោភបំពានកុមារ អ្នកឧបត្ថម្ភ បរិច្ចាក បេសកកម្ម",
	"description": "យើងប្រយុទ្ធប្រឆាំងនឹងការរំលោភបំពានលើកុមារ និងការជួញដូរមនុស្សនៅក្នុងប្រទសកម្ពុជា",
	"header": {
		"home": "ចម្បង",
		"program": "ផ្ទះសុវត្ថិភាព",
		"donate": "បរិច្ចាកប្រាក់ និងអ្នកឧបត្ថម្ភ",
		"language": "<i class='fas fa-globe-americas'></i> ភាសា",
		"en": "English",
		"pt": "Português",
		"kh": "ភាសាខ្មែរ",
	},
	"footer": {
		"policy": "គោលនយោបាយការការពារកុមារ",
		"organization": "&copy; Safe Place Mission",
	},
    "index": {
		"title": "អង្គការ សេហ្វ ផ្លេស មិសសិន",
		"subtitle": "ជួយសង្រ្គោះ និងផ្លាស់ប្តូរជីវិតកុមារនៅក្នុងប្រទេសកម្ពុជា",
		"buttonDonateFloat": "&nbsp បរិច្ចាកប្រាក់ និងអ្នកឧបត្ថម្ភ",
		"buttonDonate": "បរិច្ចាកប្រាក់ និងអ្នកឧបត្ថម្ភ",
		"buttonProgram": "កម្មវិធីផ្ទះសុវត្ថិភាព",
		"buttonTeam": "យើងជាអ្នកណា",
		"teamDescriptionA": "យើងជាលោក កេសិដេ អ៊ិចហ្គឺ ននិងលោក ហ្លាវីយ៉ូ ជាជនជាតិប្រស៊ីល និងជាអ្នកកាន់សាសនាគ្រឹស្រ្ត។​ បន្ទាប់ពីបានធ្វើការជាច្រើនឆ្នាំនៅប្រទេសប្រេស៊ីល ហើយក៍បានមកប្រទេសកម្ពុជាក្នុងឆ្នាំ២០១៦ដើម្បីប្រយុទ្ធប្រឆាំងការជួញដូរមនុស្ស និងការរំលោភបំពានកុមារ។",
		"teamDescriptionB": "សូមអានបន្ថែមពីបេសកកម្ម និងគម្រោងរបស់យើង",
		"missionDescriptionA": "ប្រទេសកម្ពុជាស្ថិតក្នុងតំបន់អាស៊ីអាគ្នេយ៍ភាគខាងត្បូងដែលទទួលរងភាពចលាចលយ៉ាងធ្ងន់ថ្ងរពីអតីតកាល ទោះបីរដ្ឋាភិបាលធ្វើការប្រយុទ្ធប្រឆាំងនឹងការំលោភបំពានលើកុមារក៍ដោយ កុមារជាច្រើនបាយក្លាយជាជនរងគ្រោះរៀងរាល់ថ្ងៃ។ លើសពីនេះទៀតកុមារមិនទទួលបាននូវក្តីស្រលាញ់ ការអប់រំ  និងម្ហូបអាហារសមរម្យឡើយ។",
		"missionDescriptionB": "សេហ្វ ផ្លេស មិសសិនជាងអង្គការមួយដែលធ្វើការជាមួយគ្រួសារដែលរស់នៅក្នុងស្ថានភាពមានហានីភ័យដើម្បីផ្តល់សុវត្ថិភាពដល់ពួកគេ ការអប់រំ និងអនាគតល្អប្រសើរចំពោះកូនរបស់គេ ដូច្នោះកុមារទាំងនោះនឹងនាំឱ្យមានការផ្លាស់ប្តូរក្នុងប្រទេសកម្ពុជា។",
		"missionDescriptionC": "<b><a href=#work>សូមមកស្គាល់គម្រោងរបស់យើង</a></b>.",
		"programTitle": "<b>កម្មវិធីផ្ទះសុវត្ថិភាព</b>",
		"programDescription": "ជួយសង្រ្គោះ កន្លែងស្នាក់នៅ អាហារមានសុខភាព ការអប់រំ និងការការពារកុមារកម្ពុជាដែលរស់នៅក្នុងហានីភ័យនៃការរំលោភបំពាន <b><a>សូមចុចទីនេះដើម្បីអាន ឬបរិច្ចាកប្រាក់ និងអ្នកឧបត្ថម្ភ</a></b>",
		"programButton": "បរិច្ចាកប្រាក់ និងអ្នកឧបត្ថម្ភ",
		"signupDescription": "<h3>តើអ្នកចង់ចុះឈ្មោះជាវដើម្បីទទួលបានព្រឹត្តិបត្រព័ត៌មានយើងទេ?</h3>",
	},
	"safehome": {
		"video": "<object data='https://www.youtube.com/embed/tltPbh8kLk8?rel=0?version=3&autoplay=1&loop=1&controls=1&showinfo=0&cc_load_policy=1&hl=kh&cc_lang_pref=kh' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope;' ></object>",
		"title": "កម្មវិធីផ្ទះសុវត្ថិភាព",
		"subtitle": "&nbsp ខេត្តកំពត ប្រទេសកម្ពុជា",
		"description": "ផ្ទះសុវត្ថិភាពជាក្រុមផ្ទះមួយសម្រាប់កុមារស្ថិតនៅខេត្តកំពតនៃប្រទេសកម្ពុជា។​ យើងស្វាគមន៍កុមារមកពីគ្រូសារដែលមិនមានរចនាសម្ព័ន្ធដែលមិនមានការគាំទ្រផ្នែកផ្លូវចិត្តនិងហិរញ្ញវត្ថុ។ ចិញ្ចឹម និងថែរក្សាពួកគេឱ្យមានសុវត្ថិភាពពីការជួញដូរមនុស្ស និងការរំលោភបំពានផ្លូវភេទ។",
		"button": "បរិច្ចាកប្រាក់ និងអ្នកឧបត្ថម្ភ",		
		"signupDescription": "<h3>តើអ្នកចង់ចុះឈ្មោះជាវដើម្បីទទួលបាននូវបច្ចុប្បន្នភាពកម្មវិធីយើងទេ?</h3>",
		"infoHeader": "<h3>តើកម្មវិធីមានអ្វីខ្លះ?</h3>",
		"infoDescription1": "យើងធ្វើការរួមគ្នាជាមួយអង្គការក្រៅរដ្ឋាភិបាលផ្សេងៗ ជាមួយអ្នកដឹកនាំសហគមន៍ គ្រួសារដើម្បីជួយសង្រ្គោះកុមារដែលស្ថិតក្នុងស្ថាភាពហានីភ័យ និងផ្លាស់ប្តូរ ចិញ្ចឹមគេនៅផ្ទះសុវត្ថិភាពរហូតពួកគាត់រៀនចប់មហាវិទ្យាល័យ។ ផ្ទះសុវត្ថិភាពអាចរសនៅបានរហូតដល់៣០នាក់។",
		"infoDescription2": "កុមារបរិភោគអាហារដែលមានសុខភាព ធ្វើដោយក្តីស្រលាញ់ ទទួលបានការអប់រំល្អពីសាលាឯកជន រៀនភាសាអង់គ្លេស និងរីករាយនឹងការលេងសកម្មភាពជាច្រើនទៀតរៀងរាល់ថ្ងៃ។",
		"infoDescription3": "គ្រប់ផ្ទះរស់នៅត្រូវបានជួសជុល និងសកម្មភាពរបស់កុមារត្រូវរៀបចំចាត់ចែងដោយអ្នកផ្សព្វផ្សាយ សាសនា និងអ្នកស្មគ្រចិត្តដែលធានាបានកុមារទាំងអស់ទទួលបាននូវការចិញ្ចឹមថែរក្សាដោយក្តីស្រលាញ់ដូចជាគ្រូសារមួយ។",
	},
	"donations": {
		"quote": "ការជួយសង្រ្គោះ និងការផ្លាស់ប្តូរជីវិតកុមារនៅប្រទេសកម្ពុជាយើងមានតែការថ្លែងអំណរគុណចំពោះអ្នកគាំទ្រនៅជុំវិញពិភពលោក។​ សូមចូលរួមជាមួយយើងឥឡូវនេះ។ <b>មានតែអ្នកចូលរួមជាមួយយើងទេ ទើបអ្នកជាផ្នែកមួយនៃការផ្លាស់ប្តូរ។</b>.",
		"popular": "មានប្រជាប្រិយបំផុត",
		"readmore": "សូមអានបន្ថែម",
		"sponsorTitle": "ការជួយឧបត្ថម្ភ",
		"sponsorDescription": "ក្លាយជាផ្នែកមួយនៃជីវិតរបស់កុមារដោយមានកម្មវិធីឧបត្ថម្ភ និងទទួលបានព័ត៌មានផ្តាច់មុខ រូបភាព​ និងមាតិកា។",
		"donateTitle": "ការបរិច្ចាកប្រាក់",
		"donateDescription" : "បរិច្ចាកចំនួនទឹកប្រាក់តាមជម្រើសរបស់អ្នក ម្តង ឬប្រចាំខែដើម្បីជួយបេសកកម្មរបស់យើង និងកម្មវិធីផ្ទះសុត្ថិភាព។",
		"partnerTitle": "ភាពជាដៃគូ",
		"partnerDescription": "តើអ្នកជឿថាអ្នកអាចជួយយើងតាមវិធីណាមួយផ្សេងបានទេ? សូមទាក់ទង",
		"partnerContent": "អ្នកអាចជួយដោយគ្រាន់តែក្លាយជាដៃគូ អ្នកស្មគ្រចិត្តដោយផ្តល់នូវផលិតផល សេវាកម្ម ទាក់ទងនឹងបេសកកម្មរបស់យើង ឬក៍ដោយការតស៊ូមតិដើម្បីកម្មវិធីរបស់យើង។ សូមទាក់ទាងជាមួយយើងដោយប្រើបណ្តាញណាមួយដែលអ្នកពេញចិត្ត។",
		"donateContent1": "<b>តើការបរិច្ចាកប្រាក់របស់អ្នកអាចជួយយើងដូចម្តេច?</b>",
		"donateContent2": "<b>ចំពោះកុមារ </b> ការផ្តល់ម្ហូបអាហារ ការអប់រំ ការថែទាំសុខភាព ការកំសាន្ត វប្បធម៌ សំលៀកបំពាក់ដល់កុមារ បានគាំទ្រដោយកម្មវិធីរាប់បញ្ចូលទាំងការជួយកុមារថ្មីផងដែរ។",
		"donateContent3": "<b>ចំពោះផ្ទះ </b>  គាំទ្រហិរញ្ញវត្ថុលើកទីកន្លែងដែលកុមារ និងក្រុមការងាររស់នៅ រួមមានការចំណាយរួមលើថ្លៃផ្ទះជួល ថ្លៃទឹក ភ្លើង ការសម្អាត និងការជួសជុល។",
		"donateContent4": "<b>ក្រុមការងារ  </b> ធានាបាននូវមនុស្សដើម្បីគាំទ្រចាត់ចែង ចំអិនអាហារ និងការថែទាំកុមារ។ ជាងនេះទៀតវាគ្របដណ្តប់លើការចំណាយផ្សេងៗទៀត ជាមួយដៃគូ ការងាររដ្ឋបាល និងជួយលើបេសកកម្ម។",
		"sponsorContent1": "ពេលអ្នកឧបត្ថម្ភក្មេងម្នាក់ នោះអ្នកនឹងក្លាយជាផ្នែកមួយនៃគ្រួសាររបស់យើងដោយការផ្តល់គាំទ្រហិរញ្ញវត្ថុជាប្រចាំខែចំពោះកុមារកម្ពុជាម្នាក់របស់ សេហ្វ ផ្លេស មិសសិន។នេះមានន័យថាអ្នកនឹងរួមចំណែកដើម្បីប្រាកដថាកុមារម្នាក់ទទួលបានអាហារ ការអប់រំ សំលៀកបំពាក់ ការកំសាន្ត និងអនាគតល្អប្រសើរ។ បន្ថែមលើនេះ យើងនឹងចែករំលែករូបភាព និងវិដេអូដល់អ្នក និងព័ត៌មានផ្សេងទៀតអំឡុងពេលការអភិវឌ្ឍរបស់កុមារ។",
		"sponsorContent2": "<b>តើថវិកាប៉ុន្មានដែលអ្នកចង់បរិច្ចាក?</b>",
		"sponsorValue1": "<b>៣០ដុ</b>ល្លាក្នុង១ខែ",
		"sponsorValue2": "<b>៥០ដុ</b>ល្លាក្នុង១ខែ",
		"sponsorValue3": "<b>១៥០ដុ</b>ល្លាក្នុង១ខែ",
		"sponsorValue4": "<b>ចំនួនផ្សេងៗទៀត</b>",
		"sponsorValue5": "<b>(វីអាយភី) ​៣០០ដុ</b>ល្លាក្នុង១ខែ",
		"sponsorShared": "<b>រួមចំណែកគ្នាការជួយឧបត្ថម្</b>  អ្នកនឹងជួយហិរញ្ញវត្ថុលើកុមារម្នាក់ រួមជាមួយអ្នកឧបត្ថម្ភដទៃទៀត។ ក្រុមនេះយើងខ្ញុំអាចរៀបចំចាត់ចែង ឬរៀបចំដោយខ្លួនអ្នក។ អ្នកឧបត្ថម្ភទាំងអស់របស់កុមារនោះ នឹងទទួលបានរូបភាព វិដេអូ និងព័ត៌មានដោយគ្មានបញ្ហាទោះជាអ្នកឧបត្ថម្ភនិមួយៗផ្តល់ឱ្យប៉ុន្មានក៍ដោយ។",
		"sponsorVIP1": "<b>ការឧបត្ថម្ភផ្តាច់មុខ</b> អ្នកនឹងដាក់ប្រាក់៣០០ដុល្លាអាមេរិចក្នុង១ខែក្នុងរយៈពេល១ឆ្នាំចំពោះការជួយហិរញ្ញវត្ថុកុមារម្នាក់។ ព្រោះអ្នកនឹងក្លាយជាអ្នកឧបត្ថម្ភតែម្នាក់ នោះអ្នកនឹងទទួលបានរូបភាព វិដេអូ និងព័ត៌មានផ្តាច់មុខពីកុមារម្នាក់នេះ។",
		"sponsorVIP2": "តើអ្នកចាប់អារម្មណ៍ទទួលយកឱកាសនេះទេ? សូមទាក់ទងជាមួយយ់ងតាមរយៈ វេបសាយឬ អ៊ីម៉េលរបស់ សេហ្វ ផ្លេស មិសសិន និង​លេខទូរស័ព្ទ០៧០ ៣៩ ៧៥ ០៨",
	},
	"payments": {
		"header": "<b>ជម្រើសក្នុងបង់ប្រាក់</b>",
		"country": "បរិច្ចាកប្រាក់ពីប្រទេសណា?",
		"australia": "អូស្រ្តាលី",
		"brazil": "ប្រេស៊ីល",
		"cambodia": "កម្ពុជា",
		"international": "អន្តរជាតិផ្សេងទៀត",
		"method": "សូមជ្រើសរើសវិធីបង់ប្រាក់",
		"paypal" : "<a href='https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=C6LRND6BHP2RE&locale.x=en' class='button'><i class='fas fa-credit-card'></i>&nbsp <b>កាតឥណទាន</b></a>",
		"or": "or",
		"brazilPix": "<b>PIX</b> or <b>Bank Transfer</b>",
		"brazilBankTitle": "<b>Brazilian Banking Information</b>",
		"brazilPixBeneficiary": "Beneficiary:",
		"brazilPixKey": "PIX Key:",
		"brazilBankTransfer": "Bank Transfer",
		"brazilWarning": "PS: If you have any issue related to the CNPJ code, try the following: ",
		"receipt": "<i>You may opt to send us a receipt of your donation in order to receive news about Safe Home:</br> Contact us via <b><a href='https://wa.me/85570397508/?text=Hello%2C%20there%20is%20a%20receipt%20of%20the%20bank%20transfer%20attached%20bellow%2C%20can%20you%20help%20me%3F'>Whatsapp (+855 70397508)</a></b> or <b><a href='mailto:safeplacemission@gmail.com'>safeplacemission@gmail.com</a></b>.</i>",
		"swiftTitle": "Cambodia / International (SWIFT)",
		"swiftBeneficiary": "អ្នកទទួលផលរបស់",
		"swiftCurrency": "រូបិយបណ្ណប្រាក់ដុល្លាអាមេរិច",
		"swiftAccount": "Account number:",
		"swiftAccountType": "Account type: Current",
		"swiftCode": "SWIFT code:",
		"swiftBankName": "Bank Name:",
		"swiftBankAddress": "Bank address:",
		"thanks" : "សូមអរគុណអ្នកខ្លាំងណាស់ដែលបានជួយគាំទ្រយើងខ្ញុំ។",
	},
	"donateDescription1": "បេសកកម្មរបស់យើងមានតែការថ្លែងអំណរគុណចំពោះអ្នកគាំទ្រនៅជុំវិញពិភពលោក។​ សូមចូលរួមជាមួយយើងឥឡូវនេះ",
	"donateDescription2": "<b>ធ្វើការបរិច្ចាកដើម្បីផ្លាស់ប្តូរគេជាមួយយើង</b>",
	"donateButton": "បរិច្ចាកប្រាក់ និងអ្នកឧបត្ថម្ភ",
  },
};


// https://stackoverflow.com/questions/25512305/ie-8-or-older-cannot-render-khmer-text
// https://stackoverflow.com/questions/23948474/alternative-web-font-to-render-khmer/26058015#26058015


// Get all page elements to be translated.
const elements = document.querySelectorAll('[data-i18n]');

// Get JSON object of translations.
const json = locales[pageLanguage];

// On each element, found the translation from JSON file & update.
elements.forEach((element, index) => {
  const key = element.getAttribute('data-i18n');
  let text = key.split('.').reduce((obj, i) => (obj ? obj[i] : null), json);

  // Does this text have any variables? (eg {something})
  const variables = text.match(/{(.*?)}/g);
  if (variables) {

    // Iterate each variable in the text.
    variables.forEach((variable) => {

      // Filter all `data-*` attributes for this element to find the matching key.
      Object.entries(element.dataset).filter(([key, value]) => {
        if (`{${key}}` === variable) {
          try {
            // Attempt to run actual JavaScript code.
            text = text.replace(`${variable}`, new Function(`return (${value})`)());
          } catch (error) {
            // Probably just static text replacement.
            text = text.replace(`${variable}`, value);
          }
        }
      })
    });
  }

  // Regular text replacement for given locale.
  element.innerHTML = text;
});
