// Chinese and French for the Lowe website. English is in the page itself (what search engines
// read); this file swaps the text when the visitor picks 中文 or FR, and remembers the choice.
(function () {
  var T = {
    zh: {
      "nav.features": "功能", "nav.how": "工作原理", "nav.teachers": "教师与学校", "nav.premium": "高级版", "nav.get": "获取 Lowe",
      "hero.title": "你说出来，他们就能懂。",
      "hero.lead": "Lowe 是为在华国际学生打造的智能助手。翻译任何内容、礼貌地给老师写信、获得带来源的学校官方答案、听懂中文授课、办理各种手续——全部用你自己的语言。",
      "hero.open": "在浏览器中打开 Lowe →", "hero.get": "小程序、Windows、安卓",
      "facts.langs": "种语言", "facts.platforms": "种使用方式", "facts.free": "免费开始",
      "story.title": "为什么会有 Lowe",
      "story.p1": "我是 Lowe（江树臣），来自喀麦隆，在湖南工学院学习软件工程。我会说英语和法语，刚来中国时，身边几乎一切都是中文：国际交流处的通知、给老师的消息、银行、医院，甚至课堂本身。",
      "story.p2": "翻译软件只能翻译字词，却不知道如何礼貌地给老师写信、学校在哪里公布了补考时间、办居留许可需要带什么。于是我做出了自己需要的助手，并分享给身边的同学。",
      "story.quote": "“任何学生都不应该因为通知是用一门还在学习的语言写的，而错过考试、截止日期或一节课。”",
      "features.title": "学生所需的一切，尽在一处", "features.lead": "围绕在华学习生活的真实场景而设计。",
      "f.translate.t": "翻译一切", "f.translate.d": "11 种语言之间任意互译，附拼音。可以打字、说话或拍照翻译通知，并根据场合（老师、银行、医院、房东）调整语气。",
      "f.draft.t": "给老师写信", "f.draft.d": "用你的语言说出需求，Lowe 帮你写出礼貌的中文消息，并附回译，让你清楚自己发了什么。",
      "f.ask.t": "咨询学校信息", "f.ask.d": "只根据学校官网作答，并注明来源。尚未公布的信息，Lowe 会如实说明，不会猜测。",
      "f.live.t": "听懂课堂", "f.live.d": "把手机对着老师：Lowe 逐句显示中文、拼音和翻译，课后还能保存回看。",
      "f.classroom.t": "学习老师的课件", "f.classroom.d": "老师分享课件，你就能用自己的语言学习，附讲解和小测验，适用于所有专业。",
      "f.notices.t": "不错过任何通知", "f.notices.d": "国际交流处通知和老师公告，翻译后集中在一个列表中。",
      "f.leave.t": "规范请假", "f.leave.d": "在手机上填写学校官方请假单、手写签名、上传证明，老师一键审批。",
      "f.learn.t": "学习中文", "f.learn.d": "HSK 词汇间隔复习、标出超纲词的分级阅读，以及完整词典。",
      "f.papers.t": "办理手续", "f.papers.d": "居留许可、银行卡、手机卡、体检等的分步指南，让刚到中国的头几周更轻松。",
      "f.safety.t": "关键时刻的帮助", "f.safety.d": "校园保卫处、国际交流处和紧急电话，以及可直接出示给司机、药师或医生的常用语。",
      "shot.ask": "问答（附来源）", "shot.live": "课堂实时翻译", "shot.draft": "给老师的消息", "shot.leave": "请假申请", "shot.notices": "学校通知", "shot.hsk": "HSK 学习", "shot.papers": "手续指南", "shot.safety": "安全求助",
      "how.title": "Lowe 如何工作",
      "how.s1.t": "用你的语言提问", "how.s1.d": "打字、说话或拍照。Lowe 用你的语言回答：英语、法语、阿拉伯语、俄语等 11 种语言。",
      "how.s2.t": "Lowe 核对真实来源", "how.s2.d": "学校相关问题只依据每晚更新的学校官网作答，每个答案都注明出处。",
      "how.s3.t": "AI 清晰表达", "how.s3.d": "使用国产大模型（DeepSeek、豆包）进行翻译和讲解，针对礼貌用语和学生场景优化，在国内无需 VPN。",
      "how.s4.t": "你的数据属于你", "how.s4.d": "Lowe 只存储必要信息，从不记录你输入的内容，你可以随时下载或删除自己的全部数据。",
      "t.title": "面向教师与学校", "t.teachers": "教师", "t.schools": "学校",
      "t.l1": "中文管理后台：一键审批请假，官方请假单可直接打印", "t.l2": "课件只需分享一次，每位学生都能用母语理解", "t.l3": "为课堂上的国际学生实时翻译授课内容", "t.l4": "发布公告，每位学生都能用自己的语言阅读",
      "t.s1": "国际学生从第一周起就能更好地理解课程和校规", "t.s2": "减少国际交流处的重复咨询：答案来自学校已发布的通知", "t.s3": "不含个人内容的使用统计，以及覆盖全体国际学生的校园授权", "t.s4": "运行于国内云服务；小程序已完成 ICP 备案",
      "p.title": "免费开始，离不开时再升级。", "p.lead": "每位新同学都可免费体验 14 天高级版。之后基础功能永久免费，高级版让整个学期更轻松。",
      "p.free": "永久免费", "p.f1": "翻译、给老师写信、学校问答（每日额度）", "p.f2": "通知、请假、课表、安全求助", "p.f3": "常用语、文化提示、词典、手续指南",
      "p.prem": "高级版", "p.p1": "无限制课堂实时翻译与课堂保存", "p.p2": "不限次数的拍照翻译", "p.p3": "老师课件讲解、小测验与 AI 辅导", "p.p4": "更高的每日 AI 额度",
      "p.month": "月度", "p.permonth": "每月", "p.popular": "最受欢迎", "p.semester": "学期", "p.persem": "5 个月", "p.year": "年度", "p.peryear": "12 个月",
      "p.how": "在网页版中扫描微信或支付宝收款码付款，确认到账后即刻开通高级版。高校可为全体国际学生购买校园授权。",
      "faq.title": "常见问题",
      "faq.q1": "需要 VPN 吗？", "faq.a1": "不需要。Lowe 运行在国内云服务和国产大模型上，在中国大陆可正常使用。",
      "faq.q2": "支持哪些语言？", "faq.a2": "英语、中文、法语、西班牙语、葡萄牙语、阿拉伯语、俄语、韩语、日语、越南语和德语。",
      "faq.q3": "Lowe 的学校信息会出错吗？", "faq.a3": "Lowe 只依据学校官网回答学校问题并注明来源；尚未公布的信息会如实说明，不会猜测。重要日期请向老师或国际交流处确认。",
      "faq.q4": "我的数据安全吗？", "faq.a4": "Lowe 只存储最少的信息，日志中从不记录你输入的内容，你可以下载或删除全部数据。详见应用内的隐私政策。",
      "faq.q5": "只适用于湖南工学院吗？", "faq.a5": "翻译、写作、课堂翻译和中文学习适用于在华的所有学生。学校问答和通知目前覆盖湖南工学院，可以扩展到更多高校。",
      "get.title": "获取 Lowe", "get.mp": "微信：扫描此码打开 Lowe 小程序", "get.web": "网页版：任何手机或电脑都能用（iPhone：分享 → 添加到主屏幕）", "get.win": "Windows：在 Microsoft Store 搜索“LOWE TEKAM”", "get.android": "安卓：下载应用",
      "get.note": "当前网址为临时地址，学校认可的域名正在配置中；本页面会始终链接到正确的地址。",
      "foot.made": "由湖南工学院的一名国际学生开发，服务在华的所有国际学生。", "foot.data": "Lowe 使用的开放数据：CC-CEDICT、HSK 词表（complete-hsk-vocabulary）、Make Me a Hanzi、Tatoeba。"
    },
    fr: {
      "nav.features": "Fonctions", "nav.how": "Fonctionnement", "nav.teachers": "Enseignants et écoles", "nav.premium": "Premium", "nav.get": "Obtenir Lowe",
      "hero.title": "Dites-le. Ils comprendront.",
      "hero.lead": "Lowe est l'assistant des étudiants internationaux en Chine. Traduisez tout, écrivez poliment à vos enseignants, obtenez les réponses officielles de l'école avec leurs sources, suivez des cours donnés en chinois et faites vos démarches, dans votre langue.",
      "hero.open": "Ouvrir Lowe dans le navigateur →", "hero.get": "Mini-programme, Windows, Android",
      "facts.langs": "langues", "facts.platforms": "façons de l'utiliser", "facts.free": "pour commencer",
      "story.title": "Pourquoi Lowe existe",
      "story.p1": "Je suis Lowe (江树臣), étudiant international camerounais en génie logiciel au Hunan Institute of Technology (湖南工学院). Je parle anglais et français, et à mon arrivée en Chine presque tout autour de moi était en chinois : les avis du bureau international, les messages aux enseignants, la banque, l'hôpital, et même les cours.",
      "story.p2": "Les applications de traduction traduisent des mots, mais elles ne savent pas écrire poliment à un enseignant, où l'école a publié les dates de rattrapage, ni quoi apporter pour un permis de séjour. J'ai donc construit l'assistant dont j'avais besoin, et je l'ai partagé avec les étudiants autour de moi.",
      "story.quote": "« Aucun étudiant ne devrait manquer un examen, une date limite ou un cours parce qu'il était écrit dans une langue qu'il apprend encore. »",
      "features.title": "Tout ce dont un étudiant a besoin, au même endroit", "features.lead": "Pensé pour les vrais moments de la vie étudiante en Chine.",
      "f.translate.t": "Tout traduire", "f.translate.d": "Entre 11 langues, avec le pinyin. Écrivez, parlez ou photographiez un avis. Le ton s'adapte à la situation : enseignant, banque, hôpital, propriétaire.",
      "f.draft.t": "Écrire à votre enseignant", "f.draft.d": "Dites ce dont vous avez besoin dans votre langue ; Lowe rédige un message poli en chinois, avec une retraduction pour savoir exactement ce que vous envoyez.",
      "f.ask.t": "Questions sur l'école", "f.ask.d": "Réponses uniquement tirées des sites officiels de l'école, avec la source. Si ce n'est pas encore publié, Lowe le dit au lieu de deviner.",
      "f.live.t": "Comprendre vos cours", "f.live.d": "Tournez votre téléphone vers l'enseignant : Lowe affiche ce qui est dit en chinois, avec le pinyin et une traduction, phrase par phrase. Gardez le cours pour le relire.",
      "f.classroom.t": "Étudier les diapositives", "f.classroom.d": "Les enseignants partagent leurs diapositives ; vous les recevez dans votre langue, avec des explications et des quiz, pour toutes les filières.",
      "f.notices.t": "Ne manquer aucun avis", "f.notices.d": "Les avis du bureau international et les annonces de vos enseignants, traduits, dans une seule liste.",
      "f.leave.t": "Demander un congé correctement", "f.leave.d": "Remplissez le formulaire officiel sur votre téléphone, signez du doigt, joignez un justificatif. L'enseignant l'approuve en un geste.",
      "f.learn.t": "Apprendre le chinois", "f.learn.d": "Vocabulaire HSK avec révision espacée, lecture graduée qui signale les mots au-dessus de votre niveau, et un dictionnaire complet.",
      "f.papers.t": "Faire vos démarches", "f.papers.d": "Des guides pas à pas pour le permis de séjour, la carte bancaire, la carte SIM, la visite médicale et plus, pour des premières semaines plus simples.",
      "f.safety.t": "De l'aide quand il le faut", "f.safety.d": "Sécurité du campus, bureau international et numéros d'urgence, avec des phrases prêtes à montrer à un chauffeur, un pharmacien ou un médecin.",
      "shot.ask": "Questions, avec sources", "shot.live": "Traduction du cours en direct", "shot.draft": "Message à un enseignant", "shot.leave": "Demande de congé", "shot.notices": "Avis de l'école", "shot.hsk": "HSK", "shot.papers": "Guides de démarches", "shot.safety": "Sécurité",
      "how.title": "Comment fonctionne Lowe",
      "how.s1.t": "Vous demandez, dans votre langue", "how.s1.d": "Écrivez, parlez ou prenez une photo. Lowe répond dans votre langue : anglais, français, arabe, russe et sept autres.",
      "how.s2.t": "Lowe vérifie de vraies sources", "how.s2.d": "Les questions sur l'école sont traitées uniquement à partir des pages officielles, lues chaque nuit. Chaque réponse indique sa source.",
      "how.s3.t": "L'IA l'écrit clairement", "how.s3.d": "Des modèles d'IA chinois (DeepSeek, Doubao) traduisent et expliquent, réglés pour la politesse et les étudiants. Ça marche en Chine sans VPN.",
      "how.s4.t": "Vos données restent à vous", "how.s4.d": "Lowe garde seulement le nécessaire, n'enregistre jamais ce que vous tapez, et vous pouvez tout télécharger ou tout supprimer à tout moment.",
      "t.title": "Pour les enseignants et les écoles", "t.teachers": "Enseignants", "t.schools": "Écoles",
      "t.l1": "Un tableau de bord en chinois : approuver les congés en un geste, formulaire officiel prêt à imprimer", "t.l2": "Partager ses diapositives une fois ; chaque étudiant les comprend dans sa langue", "t.l3": "Traduction en direct du cours pour les étudiants internationaux présents", "t.l4": "Publier des annonces que chaque étudiant lit dans sa langue",
      "t.s1": "Les étudiants internationaux suivent mieux les cours et le règlement dès la première semaine", "t.s2": "Moins de questions répétées au bureau international : les réponses viennent de vos avis publiés", "t.s3": "Des statistiques d'usage sans contenu personnel, et une licence campus pour tous vos étudiants internationaux", "t.s4": "Fonctionne sur des services cloud chinois ; le mini-programme est enregistré ICP",
      "p.title": "Gratuit pour commencer. Premium quand on ne peut plus s'en passer.", "p.lead": "Chaque nouvel étudiant reçoit 14 jours de Premium gratuits. Ensuite, l'essentiel reste gratuit pour toujours, et Premium débloque ce qui rend tout un semestre plus facile.",
      "p.free": "Gratuit, toujours", "p.f1": "Traduction, messages aux enseignants, réponses sur l'école (quota quotidien)", "p.f2": "Avis, congés, emploi du temps, sécurité", "p.f3": "Phrases utiles, culture, dictionnaire, guides de démarches",
      "p.prem": "Premium", "p.p1": "Traduction des cours en direct illimitée et cours enregistrés", "p.p2": "Traduction de photos sans limite", "p.p3": "Les diapositives de vos enseignants expliquées, avec quiz et tuteur IA", "p.p4": "Un quota IA quotidien bien plus élevé",
      "p.month": "Mensuel", "p.permonth": "par mois", "p.popular": "Le plus choisi", "p.semester": "Semestre", "p.persem": "5 mois", "p.year": "Année", "p.peryear": "12 mois",
      "p.how": "Payez dans l'application web en scannant un code WeChat Pay ou Alipay ; Premium s'active dès que le paiement est confirmé. Les universités peuvent acheter une licence campus pour tous leurs étudiants internationaux.",
      "faq.title": "Questions",
      "faq.q1": "Faut-il un VPN ?", "faq.a1": "Non. Lowe fonctionne sur des services cloud et des modèles d'IA chinois, donc normalement en Chine continentale.",
      "faq.q2": "Quelles langues ?", "faq.a2": "Anglais, chinois, français, espagnol, portugais, arabe, russe, coréen, japonais, vietnamien et allemand.",
      "faq.q3": "Lowe peut-il se tromper sur l'école ?", "faq.a3": "Lowe répond aux questions sur l'école uniquement à partir des pages officielles et montre la source. Quand une information n'est pas publiée, il le dit au lieu de deviner. Vérifiez toujours les dates importantes auprès de votre enseignant ou du bureau international.",
      "faq.q4": "Mes données sont-elles en sécurité ?", "faq.a4": "Lowe garde le minimum, n'enregistre jamais ce que vous tapez dans ses journaux, et vous permet de télécharger ou de supprimer toutes vos données. Voir la page de confidentialité dans l'application.",
      "faq.q5": "Seulement pour le HNIT ?", "faq.a5": "Traduction, rédaction, traduction des cours et apprentissage du chinois servent à tout étudiant en Chine. Les réponses et avis de l'école couvrent pour l'instant le Hunan Institute of Technology ; d'autres universités peuvent être ajoutées.",
      "get.title": "Obtenir Lowe", "get.mp": "WeChat : scannez ce code pour ouvrir le mini-programme Lowe", "get.web": "Application web : sur tout téléphone ou ordinateur (sur iPhone : Partager → Sur l'écran d'accueil)", "get.win": "Windows : cherchez « LOWE TEKAM » dans le Microsoft Store", "get.android": "Android : télécharger l'application",
      "get.note": "L'adresse web est provisoire, le temps que le domaine approuvé soit configuré ; cette page renverra toujours vers la bonne.",
      "foot.made": "Créé par un étudiant international du Hunan Institute of Technology, pour les étudiants internationaux partout en Chine.", "foot.data": "Données ouvertes utilisées par Lowe : CC-CEDICT, listes HSK (complete-hsk-vocabulary), Make Me a Hanzi, Tatoeba."
    }
  };
  var original = {};
  var nodes = document.querySelectorAll("[data-i18n]");
  nodes.forEach(function (el) { original[el.getAttribute("data-i18n")] = el.textContent; });
  function apply(lang) {
    var dict = T[lang] || {};
    nodes.forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      el.textContent = dict[k] || original[k];
    });
    document.documentElement.lang = lang === "zh" ? "zh-CN" : lang;
    document.querySelectorAll(".lang button").forEach(function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang)); });
    try { localStorage.setItem("lowe.site.lang", lang); } catch (e) { /* private mode */ }
  }
  document.querySelectorAll(".lang button").forEach(function (b) {
    b.addEventListener("click", function () { apply(b.getAttribute("data-lang")); });
  });
  var saved = null;
  try { saved = localStorage.getItem("lowe.site.lang"); } catch (e) { /* private mode */ }
  var guess = saved || ((navigator.language || "").indexOf("zh") === 0 ? "zh" : (navigator.language || "").indexOf("fr") === 0 ? "fr" : "en");
  if (guess !== "en") apply(guess);
})();
