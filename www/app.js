/* دستور الوحدة الثقافية بين المسلمين — CHARTER OF CULTURAL UNITY — app.js v1.0 */
/* Based on "Dustur al-Wahdah al-Thaqafiyah" by Sheikh Mohammed al-Ghazali (1917-1996) */

// ═══════════════ TRILINGUAL DATA ═══════════════
const T = {
  ar: {
    appTitle: 'دستور الوحدة الثقافية',
    splashSub: 'وحدة الأمة للنشء',
    splashHint: 'اضغط للتخطي',
    sacredRef: 'سورة الأنبياء ٩٢',
    tabHome: 'الرئيسية', tabCards: 'الأركان', tabQuiz: 'المسابقة',
    tabProgress: 'تقدمي', tabAbout: 'الكتاب',
    cardsTitle: 'أركان الوحدة الثقافية',
    cardsDesc: '١٥ ركيزة لوحدة المسلمين الثقافية من كتاب الشيخ محمد الغزالي — كل ركيزة بآية وحديث وتطبيق عملي',
    quizTitle: '🏆 من سيصبح عالِماً؟',
    quizDesc: 'اختبر معلوماتك عن وحدة المسلمين — ٤ خيارات لكل سؤال',
    progressTitle: 'رحلتي نحو الوحدة',
    progressDesc: 'تقدمك وإنجازاتك في رحلة الوحدة',
    helpTitle: '❓ مساعدة',
    duaPanelTitle: '🤲 أدعية الوحدة والأخوّة',
    dailyLabel: '✨ ركيزة اليوم',
    searchPlaceholder: 'ابحث في الأركان...',
    share: 'مشاركة',
    verse: 'الآية',
    hadith: 'الحديث',
    apply: '💡 طبّق الآن',
    youngMode: '🌟 مستكشف صغير',
    teenMode: '📖 باحث شاب',
    xpLabel: 'نقاط الخبرة',
    levelLabel: 'المستوى',
    streakMsg: 'يوم متتالي!',
    readMore: 'اقرأ المزيد',
    nextQ: 'السؤال التالي',
    lifeline5050: '50/50',
    lifelineHint: '💡 تلميح',
    lifelineQuran: '📖 مرجع قرآني',
    correct: 'أحسنت! إجابة صحيحة! 🎉',
    wrong: 'حاول مرة أخرى 💪',
    quizComplete: 'انتهت المسابقة!',
    score: 'النتيجة',
    tryAgain: 'أعد المسابقة',
    badge_beginner: 'مبتدئ',
    badge_reader: 'قارئ',
    badge_scholar: 'عالم',
    badge_persistent: 'مثابر',
    badge_expert: 'خبير',
    splashFeatures: [
      '١٥ ركيزة لوحدة المسلمين الثقافية',
      'مسابقة "من سيصبح عالماً" بالمكافآت',
      'نظام النقاط والشارات والمستويات',
      'وضع مستكشف صغير ووضع باحث شاب'
    ],
  },
  en: {
    appTitle: 'Charter of Cultural Unity',
    splashSub: 'Unity of the Ummah for young minds',
    splashHint: 'tap to skip',
    sacredRef: 'Surah Al-Anbiya 92',
    tabHome: 'Home', tabCards: 'Pillars', tabQuiz: 'Quiz',
    tabProgress: 'Progress', tabAbout: 'Book',
    cardsTitle: 'Pillars of Cultural Unity',
    cardsDesc: '15 pillars of Muslim cultural unity from Sheikh al-Ghazali — each with a verse, hadith, and practical application',
    quizTitle: '🏆 Who Wants to Be a Scholar?',
    quizDesc: 'Test your knowledge about Muslim unity — 4 choices per question',
    progressTitle: 'My Unity Journey',
    progressDesc: 'Your progress and achievements in the unity journey',
    helpTitle: '❓ Help',
    duaPanelTitle: '🤲 Duas for Unity & Brotherhood',
    dailyLabel: "✨ Today's Pillar",
    searchPlaceholder: 'Search pillars...',
    share: 'Share',
    verse: 'Verse',
    hadith: 'Hadith',
    apply: '💡 Apply Now',
    youngMode: '🌟 Young Explorer',
    teenMode: '📖 Teen Scholar',
    xpLabel: 'Experience Points',
    levelLabel: 'Level',
    streakMsg: 'day streak!',
    readMore: 'Read More',
    nextQ: 'Next Question',
    lifeline5050: '50/50',
    lifelineHint: '💡 Hint',
    lifelineQuran: '📖 Quran Ref',
    correct: 'Well done! Correct answer! 🎉',
    wrong: 'Try again next time 💪',
    quizComplete: 'Quiz Complete!',
    score: 'Score',
    tryAgain: 'Retry Quiz',
    badge_beginner: 'Beginner',
    badge_reader: 'Reader',
    badge_scholar: 'Scholar',
    badge_persistent: 'Persistent',
    badge_expert: 'Expert',
    splashFeatures: [
      '15 pillars of Muslim cultural unity',
      '"Who Wants to Be a Scholar?" quiz with rewards',
      'Points, badges, and level system',
      'Young Explorer and Teen Scholar modes'
    ],
  },
  fr: {
    appTitle: "Charte de l'Unite Culturelle",
    splashSub: "L\'unite de la Oumma pour les jeunes",
    splashHint: 'appuyez pour passer',
    sacredRef: 'Sourate Al-Anbiya 92',
    tabHome: 'Accueil', tabCards: 'Piliers', tabQuiz: 'Quiz',
    tabProgress: 'Progres', tabAbout: 'Livre',
    cardsTitle: "Piliers de l'Unite Culturelle",
    cardsDesc: "15 piliers de l'unite culturelle musulmane du livre du Sheikh al-Ghazali — chacun avec un verset, un hadith et une application pratique",
    quizTitle: '🏆 Qui Veut Devenir Savant ?',
    quizDesc: "Testez vos connaissances sur l'unite musulmane — 4 choix par question",
    progressTitle: 'Mon Parcours vers l\'Unite',
    progressDesc: "Vos progres et realisations dans le parcours de l'unite",
    helpTitle: '❓ Aide',
    duaPanelTitle: '🤲 Duas pour l\'Unite et la Fraternite',
    dailyLabel: '✨ Pilier du Jour',
    searchPlaceholder: 'Rechercher les piliers...',
    share: 'Partager',
    verse: 'Verset',
    hadith: 'Hadith',
    apply: '💡 Appliquez Maintenant',
    youngMode: '🌟 Jeune Explorateur',
    teenMode: '📖 Jeune Chercheur',
    xpLabel: "Points d'Experience",
    levelLabel: 'Niveau',
    streakMsg: 'jours consecutifs !',
    readMore: 'Lire Plus',
    nextQ: 'Question Suivante',
    lifeline5050: '50/50',
    lifelineHint: '💡 Indice',
    lifelineQuran: '📖 Ref. Coran',
    correct: 'Bravo ! Bonne reponse ! 🎉',
    wrong: 'Reessayez la prochaine fois 💪',
    quizComplete: 'Quiz Termine !',
    score: 'Score',
    tryAgain: 'Refaire le Quiz',
    badge_beginner: 'Debutant',
    badge_reader: 'Lecteur',
    badge_scholar: 'Savant',
    badge_persistent: 'Perseverant',
    badge_expert: 'Expert',
    splashFeatures: [
      "15 piliers de l'unite culturelle musulmane",
      'Quiz << Qui Veut Devenir Savant ? >> avec recompenses',
      'Systeme de points, badges et niveaux',
      'Modes Jeune Explorateur et Jeune Chercheur'
    ],
  }
};

// ═══════════════ 15 PILLAR CARDS DATA ═══════════════
const CARDS = [
  {
    id:1, emoji:'🕌',
    ar:{title:'دستور الوحدة الإسلامية',desc:'يدعو الغزالي في هذا الكتاب إلى وحدة المسلمين على الثوابت الكبرى. الشهادتان هما الأساس الجامع لكل المسلمين على اختلاف مذاهبهم. الخلاف في الفروع طبيعي — لكن الوحدة في الأصول واجبة لمواجهة التحديات.',verse:'إِنَّ هَذِهِ أُمَّتُكُمْ أُمَّةً وَاحِدَةً وَأَنَا رَبُّكُمْ فَاعْبُدُونِ',verseRef:'الأنبياء ٩٢',hadith:'بُني الإسلام على خمس: شهادة أن لا إله إلا الله وأن محمداً رسول الله — متفق عليه',action:'تذكّر اليوم أن كل من نطق الشهادتين هو أخوك في الدين مهما اختلفت جنسيته',young:'كلنا مسلمون! نقول "لا إله إلا الله" معاً — وهذا يجعلنا عائلة واحدة كبيرة 🕌'},
    en:{title:'Shared Creed',desc:'Al-Ghazali calls in "Constitution of Unity": The two testimonies of faith (Shahada) are the foundation uniting all Muslims regardless of their schools of thought or ethnicities. There is no god but Allah and Muhammad is His Messenger — this bond unites 1.5 billion Muslims worldwide.',verse:'This community of yours is one community and I am your Lord, so worship Me',verseRef:'Al-Anbiya 92',hadith:'Islam is built upon five pillars: the testimony that there is no god but Allah and Muhammad is His Messenger — Agreed upon',action:'Remember today that everyone who says the Shahada is your brother or sister in faith, regardless of nationality',young:'We are all Muslims! We say "There is no god but Allah" together — and that makes us one big family 🕌'},
    fr:{title:'Le Credo Commun',desc:'Al-Ghazali appelle dans "Constitution de l\'Unité": Les deux attestations de foi (Shahada) sont le fondement unissant tous les musulmans quelles que soient leurs ecoles de pensee ou ethnicites. Il n\'y a de dieu qu\'Allah et Muhammad est Son Messager — ce lien unit 1,5 milliard de musulmans dans le monde.',verse:'Cette communaute qui est la votre est une communaute unique et Je suis votre Seigneur',verseRef:'Al-Anbiya 92',hadith:'L\'Islam est bati sur cinq piliers : l\'attestation qu\'il n\'y a de dieu qu\'Allah et que Muhammad est Son Messager — Unanimement reconnu',action:'Rappelez-vous aujourd\'hui que quiconque prononce la Shahada est votre frere ou soeur dans la foi',young:'Nous sommes tous musulmans ! Nous disons "Il n\'y a de dieu qu\'Allah" ensemble — et cela fait de nous une grande famille 🕌'}
  },
  {
    id:2, emoji:'📖',
    ar:{title:'القرآن الموحِّد',desc:'يدعو الغزالي في "دستور الوحدة": القرآن الكريم هو الكتاب الواحد الذي يقرأه كل المسلمين بنفس اللفظ العربي. لا يختلف حرف واحد في مصاحف المسلمين من جاكرتا إلى الرباط. هذا الكتاب هو الميثاق الثقافي الأول.',verse:'إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ',verseRef:'الحجر ٩',hadith:'خيركم من تعلّم القرآن وعلّمه — رواه البخاري',action:'اقرأ صفحة من القرآن اليوم وتأمل كيف يقرأها مسلم في أقصى الأرض بنفس النطق',young:'القرآن كتابنا الواحد! كل المسلمين في العالم يقرأون نفس الكلمات بنفس اللغة 📖'},
    en:{title:'The Quran as Unifier',desc:'Al-Ghazali calls in "Constitution of Unity": The Holy Quran is the single book read by all Muslims in the same Arabic wording. Not a single letter differs in the copies of the Quran from Jakarta to Rabat. This book is the first cultural charter binding the Ummah.',verse:'Indeed, it is We who sent down the Reminder and indeed, We will be its guardian',verseRef:'Al-Hijr 9',hadith:'The best among you are those who learn the Quran and teach it — Bukhari',action:'Read a page of the Quran today and reflect on how a Muslim at the other end of the world reads the exact same words',young:'The Quran is our one book! Every Muslim in the world reads the same words in the same language 📖'},
    fr:{title:'Le Coran Unificateur',desc:'Al-Ghazali appelle dans "Constitution de l\'Unité": Le Saint Coran est le livre unique lu par tous les musulmans avec les memes mots arabes. Pas une seule lettre ne differe dans les exemplaires du Coran de Jakarta a Rabat. Ce livre est la premiere charte culturelle liant la Oumma.',verse:'C\'est Nous qui avons fait descendre le Rappel et c\'est Nous qui en sommes les gardiens',verseRef:'Al-Hijr 9',hadith:'Les meilleurs d\'entre vous sont ceux qui apprennent le Coran et l\'enseignent — Bukhari',action:'Lisez une page du Coran aujourd\'hui et reflechissez a comment un musulman a l\'autre bout du monde lit les memes mots',young:'Le Coran est notre livre unique ! Chaque musulman dans le monde lit les memes mots dans la meme langue 📖'}
  },
  {
    id:3, emoji:'🤝',
    ar:{title:'اختلاف الفقه رحمة',desc:'يدعو الغزالي في "دستور الوحدة": تعدد المذاهب الفقهية ليس تفرقاً بل ثراء. الإمام أبو حنيفة ومالك والشافعي وأحمد كلهم اجتهدوا من نفس المصادر. الاختلاف في الفروع طبيعي ما دامت الأصول واحدة.',verse:'وَلَوْ شَاءَ رَبُّكَ لَجَعَلَ النَّاسَ أُمَّةً وَاحِدَةً وَلَا يَزَالُونَ مُخْتَلِفِينَ',verseRef:'هود ١١٨',hadith:'إذا حكم الحاكم فاجتهد ثم أصاب فله أجران وإذا أخطأ فله أجر — متفق عليه',action:'تعلّم اليوم عن مذهب فقهي غير مذهبك واكتشف حكمته',young:'المذاهب مثل الألوان — كلها جميلة وكلها إسلام! التنوع يجعلنا أغنى 🌈'},
    en:{title:'Diversity in Fiqh is Mercy',desc:'Al-Ghazali calls in "Constitution of Unity": The plurality of legal schools is not division but richness. Imams Abu Hanifa, Malik, Shafi\'i, and Ahmad all derived rulings from the same sources. Differences in branches are natural as long as the fundamentals remain united.',verse:'If your Lord had willed, He would have made mankind one nation; but they will not cease to differ',verseRef:'Hud 118',hadith:'If a judge makes a ruling and is correct, they receive two rewards; if wrong, one reward — Agreed upon',action:'Learn today about a school of thought different from yours and discover its wisdom',young:'Schools of thought are like colors — all beautiful and all Islam! Diversity makes us richer 🌈'},
    fr:{title:'La Diversite du Fiqh est Misericorde',desc:'Al-Ghazali appelle dans "Constitution de l\'Unité": La pluralite des ecoles juridiques n\'est pas une division mais une richesse. Les Imams Abu Hanifa, Malik, Shafi\'i et Ahmad ont tous derive leurs jugements des memes sources. Les differences dans les branches sont naturelles tant que les fondements restent unis.',verse:'Si ton Seigneur l\'avait voulu, Il aurait fait des gens une seule communaute ; mais ils ne cessent d\'etre en desaccord',verseRef:'Hud 118',hadith:'Si un juge rend un verdict et a raison, il recoit deux recompenses ; s\'il se trompe, une recompense — Unanimement reconnu',action:'Apprenez aujourd\'hui sur une ecole de pensee differente de la votre et decouvrez sa sagesse',young:'Les ecoles de pensee sont comme les couleurs — toutes belles et toutes Islam ! La diversite nous enrichit 🌈'}
  },
  {
    id:4, emoji:'🚫',
    ar:{title:'رفض الطائفية',desc:'التعصب المذهبي مرض يفتك بالأمة. الشيخ الغزالي يحذر من تكفير المسلمين بعضهم بعضاً. الطائفية سلاح في يد أعداء الأمة يستخدمونه لتفريقها وإضعافها.',verse:'وَلَا تَكُونُوا كَالَّذِينَ تَفَرَّقُوا وَاخْتَلَفُوا مِنْ بَعْدِ مَا جَاءَهُمُ الْبَيِّنَاتُ',verseRef:'آل عمران ١٠٥',hadith:'لا ترجعوا بعدي كفاراً يضرب بعضكم رقاب بعض — متفق عليه',action:'إذا سمعت كلاماً طائفياً اليوم ارفضه بأدب وذكّر بأن المسلمين إخوة',young:'لا تكره أحداً لأنه من مذهب مختلف! كلنا مسلمون وكلنا إخوة 🚫'},
    en:{title:'Rejecting Sectarianism',desc:'Al-Ghazali calls in "Constitution of Unity": Sectarian fanaticism is a disease that destroys the Ummah. Sheikh al-Ghazali warns against Muslims declaring each other disbelievers. Sectarianism is a weapon in the hands of the Ummah\'s enemies used to divide and weaken it.',verse:'And do not be like those who became divided and differed after clear proofs had come to them',verseRef:'Al Imran 105',hadith:'Do not return after me to disbelief, striking the necks of one another — Agreed upon',action:'If you hear sectarian talk today, politely reject it and remind others that Muslims are brothers',young:'Don\'t dislike anyone because they follow a different school! We are all Muslims and all siblings 🚫'},
    fr:{title:'Rejeter le Sectarisme',desc:'Al-Ghazali appelle dans "Constitution de l\'Unité": Le fanatisme sectaire est une maladie qui detruit la Oumma. Le Sheikh al-Ghazali met en garde contre les musulmans qui se declarent mutuellement mecreants. Le sectarisme est une arme dans les mains des ennemis de la Oumma.',verse:'Et ne soyez pas comme ceux qui se sont divises et qui ont diverge apres que les preuves claires leur furent venues',verseRef:'Al Imran 105',hadith:'Ne revenez pas apres moi a la mecreance en vous frappant les uns les autres — Unanimement reconnu',action:'Si vous entendez des propos sectaires aujourd\'hui, refusez-les poliment et rappelez que les musulmans sont freres',young:'N\'aime pas moins quelqu\'un parce qu\'il suit une ecole differente ! Nous sommes tous musulmans et tous freres 🚫'}
  },
  {
    id:5, emoji:'🛡️',
    ar:{title:'وعي العدو المشترك',desc:'يدعو الغزالي في "دستور الوحدة": الأمة الإسلامية تواجه تحديات مشتركة من الاستعمار الثقافي والغزو الفكري. الوعي بهذه التحديات يوحّد الصفوف. لا يجوز أن نتقاتل فيما بيننا والعدو يتربص بنا جميعاً.',verse:'وَالَّذِينَ كَفَرُوا بَعْضُهُمْ أَوْلِيَاءُ بَعْضٍ إِلَّا تَفْعَلُوهُ تَكُنْ فِتْنَةٌ فِي الْأَرْضِ وَفَسَادٌ كَبِيرٌ',verseRef:'الأنفال ٧٣',hadith:'المؤمن للمؤمن كالبنيان يشدّ بعضه بعضاً — متفق عليه',action:'اقرأ اليوم عن تحدٍّ يواجه المسلمين في بلد آخر وفكّر كيف يمكنك المساعدة',young:'نحن مثل فريق واحد! عندما نتعاون معاً لا يستطيع أحد هزيمتنا 🛡️'},
    en:{title:'Common Challenge Awareness',desc:'Al-Ghazali calls in "Constitution of Unity": The Muslim Ummah faces shared challenges from cultural colonialism and intellectual invasion. Awareness of these challenges unites the ranks. We must not fight among ourselves while external threats target us all.',verse:'Those who disbelieve are allies of one another. If you do not do the same, there will be fitnah on earth and great corruption',verseRef:'Al-Anfal 73',hadith:'The believer to the believer is like a building, each part strengthens the other — Agreed upon',action:'Read today about a challenge facing Muslims in another country and think how you can help',young:'We are like one team! When we work together, nobody can defeat us 🛡️'},
    fr:{title:'Conscience du Defi Commun',desc:'Al-Ghazali appelle dans "Constitution de l\'Unité": La Oumma musulmane fait face a des defis communs du colonialisme culturel et de l\'invasion intellectuelle. La conscience de ces defis unit les rangs. Nous ne devons pas nous battre entre nous alors que des menaces exterieures nous ciblent tous.',verse:'Ceux qui ont mecru sont allies les uns des autres. Si vous ne le faites pas, il y aura une fitna sur terre et un grand desordre',verseRef:'Al-Anfal 73',hadith:'Le croyant pour le croyant est comme une construction dont chaque partie renforce l\'autre — Unanimement reconnu',action:'Lisez aujourd\'hui sur un defi auquel font face les musulmans dans un autre pays et reflechissez a comment vous pouvez aider',young:'Nous sommes comme une seule equipe ! Quand nous travaillons ensemble, personne ne peut nous vaincre 🛡️'}
  },
  {
    id:6, emoji:'📜',
    ar:{title:'التاريخ المشترك',desc:'يدعو الغزالي في "دستور الوحدة": يتقاسم المسلمون تاريخاً مجيداً يمتد أكثر من ١٤ قرناً. من فتح مكة إلى الأندلس إلى بغداد، هذا التاريخ المشترك هو مصدر فخر وقوة يجمع الأمة حول هوية واحدة.',verse:'كُنْتُمْ خَيْرَ أُمَّةٍ أُخْرِجَتْ لِلنَّاسِ',verseRef:'آل عمران ١١٠',hadith:'من لم يهتم بأمر المسلمين فليس منهم — رواه الطبراني',action:'اقرأ اليوم عن شخصية إسلامية عظيمة من بلد مختلف عن بلدك',young:'تاريخنا مليء بالأبطال من كل مكان! اكتشف بطلاً مسلماً جديداً اليوم 📜'},
    en:{title:'Shared History',desc:'Al-Ghazali calls in "Constitution of Unity": Muslims share a glorious history spanning over 14 centuries. From the conquest of Makkah to Andalusia to Baghdad, this shared history is a source of pride and strength uniting the Ummah around one identity.',verse:'You are the best community produced for mankind',verseRef:'Al Imran 110',hadith:'Whoever does not concern himself with the affairs of Muslims is not one of them — Tabarani',action:'Read today about a great Islamic figure from a country different from yours',young:'Our history is full of heroes from everywhere! Discover a new Muslim hero today 📜'},
    fr:{title:'L\'Histoire Commune',desc:'Les musulmans partagent une histoire glorieuse s\'etendant sur plus de 14 siecles. De la conquete de La Mecque a l\'Andalousie a Bagdad, cette histoire commune est une source de fierte et de force unissant la Oumma autour d\'une seule identite.',verse:'Vous etes la meilleure communaute suscitee pour les gens',verseRef:'Al Imran 110',hadith:'Quiconque ne se soucie pas des affaires des musulmans n\'est pas des leurs — Tabarani',action:'Lisez aujourd\'hui sur une grande figure islamique d\'un pays different du votre',young:'Notre histoire est pleine de heros de partout ! Decouvrez un nouveau heros musulman aujourd\'hui 📜'}
  },
  {
    id:7, emoji:'🗣️',
    ar:{title:'العربية جسر التواصل',desc:'اللغة العربية هي لغة القرآن والعبادة والعلم الإسلامي. تعلّمها يتيح لكل مسلم فهم مصادره مباشرة. العربية ليست ملكاً للعرب بل هي لغة الإسلام المشتركة.',verse:'إِنَّا أَنْزَلْنَاهُ قُرْآنًا عَرَبِيًّا لَعَلَّكُمْ تَعْقِلُونَ',verseRef:'يوسف ٢',hadith:'أحبوا العرب لثلاث: لأني عربي، والقرآن عربي، وكلام أهل الجنة عربي — رواه الطبراني',action:'تعلّم ثلاث كلمات عربية جديدة اليوم إذا لم تكن العربية لغتك الأم',young:'العربية لغة جميلة! تعلّم كلمة جديدة كل يوم — ستفهم القرآن أفضل 🗣️'},
    en:{title:'Arabic as a Bridge',desc:'The Arabic language is the language of the Quran, worship, and Islamic scholarship. Learning it allows every Muslim to understand their sources directly. Arabic does not belong to Arabs alone — it is the shared language of Islam.',verse:'Indeed, We have sent it down as an Arabic Quran so that you might understand',verseRef:'Yusuf 2',hadith:'Love the Arabs for three reasons: because I am Arab, the Quran is Arabic, and the speech of the people of Paradise is Arabic — Tabarani',action:'Learn three new Arabic words today if Arabic is not your mother tongue',young:'Arabic is a beautiful language! Learn a new word every day — you will understand the Quran better 🗣️'},
    fr:{title:'L\'Arabe comme Pont',desc:'La langue arabe est la langue du Coran, du culte et du savoir islamique. Son apprentissage permet a chaque musulman de comprendre directement ses sources. L\'arabe n\'appartient pas aux Arabes seuls — c\'est la langue commune de l\'Islam.',verse:'Nous l\'avons fait descendre en un Coran arabe afin que vous raisonniez',verseRef:'Yusuf 2',hadith:'Aimez les Arabes pour trois raisons : car je suis arabe, le Coran est arabe, et la langue des gens du Paradis est arabe — Tabarani',action:'Apprenez trois nouveaux mots arabes aujourd\'hui si l\'arabe n\'est pas votre langue maternelle',young:'L\'arabe est une belle langue ! Apprends un nouveau mot chaque jour — tu comprendras mieux le Coran 🗣️'}
  },
  {
    id:8, emoji:'🏛️',
    ar:{title:'إسهامات الحضارة الإسلامية',desc:'الحضارة الإسلامية قدمت للعالم إنجازات في الطب والفلك والرياضيات والفلسفة. ابن سينا وابن الهيثم والخوارزمي جمعهم الإسلام رغم اختلاف أصولهم. هذا الإرث المشترك مصدر وحدة.',verse:'قُلْ هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ',verseRef:'الزمر ٩',hadith:'من سلك طريقاً يلتمس فيه علماً سهّل الله له طريقاً إلى الجنة — رواه مسلم',action:'ابحث اليوم عن عالم مسلم أثّر في حضارة العالم وشارك معلومة عنه',young:'العلماء المسلمون اخترعوا أشياء مذهلة! هل تعلم أن الخوارزمي اخترع الجبر؟ 🏛️'},
    en:{title:'Islamic Civilization Contributions',desc:'Islamic civilization gave the world achievements in medicine, astronomy, mathematics, and philosophy. Ibn Sina, Ibn al-Haytham, and al-Khwarizmi were united by Islam despite their different origins. This shared legacy is a source of unity.',verse:'Say: Are those who know equal to those who do not know?',verseRef:'Az-Zumar 9',hadith:'Whoever follows a path seeking knowledge, Allah will make easy for them a path to Paradise — Muslim',action:'Research today a Muslim scholar who influenced world civilization and share a fact about them',young:'Muslim scholars invented amazing things! Did you know al-Khwarizmi invented algebra? 🏛️'},
    fr:{title:'Contributions de la Civilisation Islamique',desc:'Al-Ghazali appelle dans "Constitution de l\'Unité": La civilisation islamique a offert au monde des realisations en medecine, astronomie, mathematiques et philosophie. Ibn Sina, Ibn al-Haytham et al-Khwarizmi ont ete unis par l\'Islam malgre leurs origines differentes. Cet heritage commun est une source d\'unite.',verse:'Dis : Sont-ils egaux, ceux qui savent et ceux qui ne savent pas ?',verseRef:'Az-Zumar 9',hadith:'Quiconque emprunte un chemin a la recherche du savoir, Allah lui facilitera un chemin vers le Paradis — Muslim',action:'Recherchez aujourd\'hui un savant musulman qui a influence la civilisation mondiale et partagez un fait sur lui',young:'Les savants musulmans ont invente des choses incroyables ! Savais-tu qu\'al-Khwarizmi a invente l\'algebre ? 🏛️'}
  },
  {
    id:9, emoji:'🧑‍🤝‍🧑',
    ar:{title:'تبادل الشباب',desc:'يجب أن يتعرف شباب المسلمين على إخوانهم في البلاد الأخرى. تبادل الزيارات والبرامج التعليمية بين الشباب يكسر الحواجز ويبني صداقات حقيقية تتجاوز الحدود.',verse:'يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُمْ مِنْ ذَكَرٍ وَأُنْثَى وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا',verseRef:'الحجرات ١٣',hadith:'إنّ الله لا ينظر إلى صوركم ولا أموالكم ولكن ينظر إلى قلوبكم وأعمالكم — رواه مسلم',action:'تواصل اليوم مع مسلم من بلد آخر عبر الإنترنت وتعرّف على ثقافته',young:'تعرّف على صديق مسلم من بلد آخر! اكتشف ماذا يأكل وكيف يعيش 🧑‍🤝‍🧑'},
    en:{title:'Youth Exchange',desc:'Muslim youth must get to know their brothers and sisters in other countries. Exchange visits and educational programs among young people break barriers and build real friendships beyond borders.',verse:'O mankind, We have created you from a male and a female and made you peoples and tribes that you may know one another',verseRef:'Al-Hujurat 13',hadith:'Allah does not look at your appearance or wealth, but rather at your hearts and deeds — Muslim',action:'Connect today with a Muslim from another country online and learn about their culture',young:'Make friends with a Muslim from another country! Discover what they eat and how they live 🧑‍🤝‍🧑'},
    fr:{title:'Echange de Jeunes',desc:'Les jeunes musulmans doivent connaitre leurs freres et soeurs dans d\'autres pays. Les visites d\'echange et les programmes educatifs entre jeunes brisent les barrieres et construisent de vraies amities au-dela des frontieres.',verse:'O humanite, Nous vous avons crees d\'un male et d\'une femelle et Nous avons fait de vous des peuples et des tribus pour que vous vous connaissiez',verseRef:'Al-Hujurat 13',hadith:'Allah ne regarde pas vos apparences ni vos richesses, mais plutot vos coeurs et vos actes — Muslim',action:'Connectez-vous aujourd\'hui avec un musulman d\'un autre pays en ligne et apprenez sa culture',young:'Fais-toi un ami musulman d\'un autre pays ! Decouvre ce qu\'il mange et comment il vit 🧑‍🤝‍🧑'}
  },
  {
    id:10, emoji:'🎓',
    ar:{title:'وحدة التعليم',desc:'يجب أن تتقارب المناهج التعليمية في البلاد الإسلامية في الأسس. تعليم القرآن والسيرة النبوية والتاريخ الإسلامي يجب أن يكون مشتركاً حتى ينشأ جيل يعرف هويته.',verse:'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ',verseRef:'العلق ١',hadith:'طلب العلم فريضة على كل مسلم — رواه ابن ماجه',action:'اقترح على مدرستك نشاطاً ثقافياً عن بلد إسلامي مختلف',young:'تخيّل أنك وصديقك في ماليزيا تتعلمون نفس القصص عن الرسول! هذا رائع 🎓'},
    en:{title:'Educational Unity',desc:'Educational curricula across Muslim countries should share common foundations. Teaching the Quran, Prophetic biography, and Islamic history must be shared so a generation grows up knowing its identity.',verse:'Read in the name of your Lord who created',verseRef:'Al-Alaq 1',hadith:'Seeking knowledge is an obligation upon every Muslim — Ibn Majah',action:'Suggest to your school a cultural activity about a different Muslim country',young:'Imagine you and your friend in Malaysia learn the same stories about the Prophet! How cool is that 🎓'},
    fr:{title:'L\'Unite Educative',desc:'Les programmes educatifs des pays musulmans devraient partager des fondements communs. L\'enseignement du Coran, de la biographie prophetique et de l\'histoire islamique doit etre partage pour qu\'une generation grandisse en connaissant son identite.',verse:'Lis au nom de ton Seigneur qui a cree',verseRef:'Al-Alaq 1',hadith:'La quete du savoir est une obligation pour chaque musulman — Ibn Majah',action:'Suggerez a votre ecole une activite culturelle sur un pays musulman different',young:'Imagine que toi et ton ami en Malaisie apprenez les memes histoires sur le Prophete ! C\'est genial 🎓'}
  },
  {
    id:11, emoji:'📺',
    ar:{title:'التعاون الإعلامي',desc:'الإعلام سلاح ذو حدين. إعلام إسلامي موحّد يمكنه مواجهة التشويه وبناء صورة حقيقية عن الإسلام. التعاون الإعلامي بين الدول الإسلامية ضرورة لا ترف.',verse:'ادْعُ إِلَى سَبِيلِ رَبِّكَ بِالْحِكْمَةِ وَالْمَوْعِظَةِ الْحَسَنَةِ',verseRef:'النحل ١٢٥',hadith:'بلّغوا عني ولو آية — رواه البخاري',action:'شارك اليوم محتوى إيجابياً عن الإسلام والمسلمين على وسائل التواصل',young:'شارك قصة جميلة عن الإسلام مع أصدقائك! الكلمة الطيبة تصل بعيداً 📺'},
    en:{title:'Media Cooperation',desc:'Media is a double-edged sword. A unified Islamic media can counter distortion and build a true image of Islam. Media cooperation between Muslim countries is a necessity, not a luxury.',verse:'Invite to the way of your Lord with wisdom and good instruction',verseRef:'An-Nahl 125',hadith:'Convey from me even if it is one verse — Bukhari',action:'Share positive content about Islam and Muslims on social media today',young:'Share a beautiful story about Islam with your friends! A kind word travels far 📺'},
    fr:{title:'La Cooperation Mediatique',desc:'Les medias sont une arme a double tranchant. Des medias islamiques unifies peuvent contrer la deformation et construire une vraie image de l\'Islam. La cooperation mediatique entre pays musulmans est une necessite, pas un luxe.',verse:'Appelle au sentier de ton Seigneur par la sagesse et la bonne exhortation',verseRef:'An-Nahl 125',hadith:'Transmettez de ma part ne serait-ce qu\'un verset — Bukhari',action:'Partagez aujourd\'hui du contenu positif sur l\'Islam et les musulmans sur les reseaux sociaux',young:'Partage une belle histoire sur l\'Islam avec tes amis ! Un bon mot voyage loin 📺'}
  },
  {
    id:12, emoji:'💰',
    ar:{title:'التعاون الاقتصادي',desc:'الاقتصاد الإسلامي المشترك يمكن أن يحقق الاكتفاء الذاتي للأمة. التجارة بين الدول الإسلامية يجب أن تكون أولوية. المقاطعة الاقتصادية سلاح مشروع عند الحاجة.',verse:'وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَى وَلَا تَعَاوَنُوا عَلَى الْإِثْمِ وَالْعُدْوَانِ',verseRef:'المائدة ٢',hadith:'ما من مسلم يغرس غرساً فيأكل منه إنسان أو طير أو بهيمة إلا كان له به صدقة — متفق عليه',action:'ابحث عن منتج من بلد إسلامي واشتره دعماً للتعاون الاقتصادي',young:'عندما نشتري من بعضنا البعض نصبح أقوى! ابحث عن منتج من بلد مسلم 💰'},
    en:{title:'Economic Cooperation',desc:'A shared Islamic economy can achieve self-sufficiency for the Ummah. Trade between Muslim countries must be a priority. Economic boycott is a legitimate tool when needed.',verse:'And cooperate in righteousness and piety, but do not cooperate in sin and aggression',verseRef:'Al-Ma\'idah 2',hadith:'No Muslim plants a tree or sows a seed from which a person, bird, or animal eats without it being charity for them — Agreed upon',action:'Look for a product from a Muslim country and buy it to support economic cooperation',young:'When we buy from each other we become stronger! Look for a product from a Muslim country 💰'},
    fr:{title:'La Cooperation Economique',desc:'Une economie islamique commune peut realiser l\'autosuffisance de la Oumma. Le commerce entre pays musulmans doit etre une priorite. Le boycott economique est un outil legitime en cas de besoin.',verse:'Entraidez-vous dans la bienfaisance et la piete, et ne vous entraidez pas dans le peche et l\'agression',verseRef:'Al-Ma\'idah 2',hadith:'Aucun musulman ne plante un arbre ou ne seme une graine dont une personne, un oiseau ou un animal mange sans que ce soit une charite pour lui — Unanimement reconnu',action:'Cherchez un produit d\'un pays musulman et achetez-le pour soutenir la cooperation economique',young:'Quand nous achetons les uns aux autres nous devenons plus forts ! Cherche un produit d\'un pays musulman 💰'}
  },
  {
    id:13, emoji:'⚔️',
    ar:{title:'الدفاع المشترك',desc:'المسلمون يجب أن ينصروا بعضهم عند العدوان. الدفاع المشترك ليس فقط عسكرياً بل يشمل الدفاع الدبلوماسي والإعلامي والاقتصادي. أمة تترك جزءاً منها يُظلم لا تستحق العزة.',verse:'وَإِنِ اسْتَنْصَرُوكُمْ فِي الدِّينِ فَعَلَيْكُمُ النَّصْرُ',verseRef:'الأنفال ٧٢',hadith:'انصر أخاك ظالماً أو مظلوماً — رواه البخاري',action:'ادعُ اليوم لإخوانك المسلمين المستضعفين في أي مكان في العالم',young:'عندما يحتاج أخوك المسلم المساعدة، ساعده! حتى الدعاء يساعد ⚔️'},
    en:{title:'Joint Defense',desc:'Muslims must support each other against aggression. Joint defense is not only military but includes diplomatic, media, and economic defense. An Ummah that abandons part of itself to oppression does not deserve honor.',verse:'And if they seek help from you in religion, then you must help',verseRef:'Al-Anfal 72',hadith:'Support your brother whether he is an oppressor or oppressed — Bukhari',action:'Make dua today for your Muslim brothers and sisters who are oppressed anywhere in the world',young:'When your Muslim brother needs help, help them! Even making dua helps ⚔️'},
    fr:{title:'La Defense Commune',desc:'Les musulmans doivent se soutenir mutuellement face a l\'agression. La defense commune n\'est pas seulement militaire mais inclut la defense diplomatique, mediatique et economique. Une Oumma qui abandonne une partie d\'elle-meme a l\'oppression ne merite pas l\'honneur.',verse:'Et s\'ils vous demandent de l\'aide dans la religion, vous devez les aider',verseRef:'Al-Anfal 72',hadith:'Soutiens ton frere qu\'il soit oppresseur ou opprime — Bukhari',action:'Faites des duas aujourd\'hui pour vos freres et soeurs musulmans opprimes partout dans le monde',young:'Quand ton frere musulman a besoin d\'aide, aide-le ! Meme les duas aident ⚔️'}
  },
  {
    id:14, emoji:'🎭',
    ar:{title:'المهرجانات الثقافية',desc:'إقامة مهرجانات ثقافية إسلامية مشتركة تعرّف المسلمين ببعضهم. الفنون والأدب والموسيقى الراقية تقرّب القلوب. الثقافة المشتركة تبني جسوراً لا جدراناً.',verse:'وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا',verseRef:'الحجرات ١٣',hadith:'إن الله جميل يحب الجمال — رواه مسلم',action:'احضر حدثاً ثقافياً إسلامياً أو شارك في تنظيم واحد في مجتمعك',young:'المهرجانات ممتعة! تخيّل مهرجاناً فيه أكلات وأناشيد من كل البلاد الإسلامية 🎭'},
    en:{title:'Cultural Festivals',desc:'Holding shared Islamic cultural festivals introduces Muslims to each other. Arts, literature, and refined music bring hearts together. Shared culture builds bridges, not walls.',verse:'And We made you peoples and tribes that you may know one another',verseRef:'Al-Hujurat 13',hadith:'Indeed Allah is beautiful and loves beauty — Muslim',action:'Attend an Islamic cultural event or help organize one in your community',young:'Festivals are fun! Imagine a festival with food and songs from every Muslim country 🎭'},
    fr:{title:'Les Festivals Culturels',desc:'Organiser des festivals culturels islamiques communs fait se connaitre les musulmans entre eux. Les arts, la litterature et la musique raffinee rapprochent les coeurs. La culture commune construit des ponts, pas des murs.',verse:'Et Nous avons fait de vous des peuples et des tribus pour que vous vous connaissiez',verseRef:'Al-Hujurat 13',hadith:'Allah est beau et aime la beaute — Muslim',action:'Assistez a un evenement culturel islamique ou aidez a en organiser un dans votre communaute',young:'Les festivals sont amusants ! Imagine un festival avec de la nourriture et des chansons de chaque pays musulman 🎭'}
  },
  {
    id:15, emoji:'🤲',
    ar:{title:'الاحترام عند الاختلاف',desc:'الخلاف في الرأي لا يفسد للودّ قضية. الشيخ الغزالي يؤكد أن المسلمين يمكنهم الاختلاف في الفروع مع الحفاظ على الأخوّة. آداب الحوار في الإسلام تضمن احتراماً متبادلاً.',verse:'وَقُولُوا لِلنَّاسِ حُسْنًا',verseRef:'البقرة ٨٣',hadith:'ليس منا من لم يرحم صغيرنا ويوقر كبيرنا — رواه الترمذي',action:'إذا اختلفت مع أحد اليوم في مسألة دينية، حاوره بأدب واحترام',young:'يمكننا أن نختلف ونبقى أصدقاء! المهم أن نتكلم بلطف واحترام 🤲'},
    en:{title:'Mutual Respect in Disagreement',desc:'Difference of opinion should not ruin brotherhood. Sheikh al-Ghazali emphasizes that Muslims can disagree on details while maintaining brotherly bonds. The etiquette of dialogue in Islam ensures mutual respect.',verse:'And speak to people good words',verseRef:'Al-Baqarah 83',hadith:'He is not one of us who does not show mercy to our young and respect our elders — Tirmidhi',action:'If you disagree with someone today on a religious matter, discuss it with politeness and respect',young:'We can disagree and still be friends! The important thing is to speak kindly and respectfully 🤲'},
    fr:{title:'Le Respect Mutuel dans le Desaccord',desc:'La divergence d\'opinion ne doit pas ruiner la fraternite. Le Sheikh al-Ghazali souligne que les musulmans peuvent diverger sur les details tout en maintenant les liens fraternels. L\'etiquette du dialogue en Islam assure le respect mutuel.',verse:'Et parlez aux gens en bons termes',verseRef:'Al-Baqarah 83',hadith:'N\'est pas des notres celui qui ne montre pas de misericorde envers nos jeunes et de respect envers nos aines — Tirmidhi',action:'Si vous etes en desaccord avec quelqu\'un aujourd\'hui sur une question religieuse, discutez-en avec politesse et respect',young:'Nous pouvons etre en desaccord et rester amis ! L\'important est de parler gentiment et respectueusement 🤲'}
  }
];

// ═══════════════ QUIZ DATA (10 Questions) ═══════════════
const QUIZ = [
  {
    ar:{q:'أكمل الآية: "إنّ هذه أمتكم أمةً ... وأنا ربكم فاعبدون"',opts:['عظيمة','واحدة','قوية','كبيرة'],correct:1,hint:'الآية في سورة الأنبياء تؤكد وحدة الأمة',quran:'الأنبياء ٩٢'},
    en:{q:'Complete the verse: "This community of yours is ... community and I am your Lord"',opts:['A great','One','A strong','A large'],correct:1,hint:'This verse in Surah Al-Anbiya affirms the unity of the Ummah',quran:'Al-Anbiya 92'},
    fr:{q:'Completez le verset : "Cette communaute qui est la votre est une communaute ... et Je suis votre Seigneur"',opts:['Grande','Unique','Forte','Vaste'],correct:1,hint:'Ce verset dans Sourate Al-Anbiya affirme l\'unite de la Oumma',quran:'Al-Anbiya 92'}
  },
  {
    ar:{q:'كم عدد المذاهب الفقهية الكبرى في الإسلام السنّي؟',opts:['٢','٣','٤','٥'],correct:2,hint:'أبو حنيفة ومالك والشافعي وأحمد',quran:'هود ١١٨'},
    en:{q:'How many major schools of jurisprudence are there in Sunni Islam?',opts:['2','3','4','5'],correct:2,hint:'Abu Hanifa, Malik, Shafi\'i, and Ahmad',quran:'Hud 118'},
    fr:{q:'Combien d\'ecoles de jurisprudence majeures y a-t-il en Islam sunnite ?',opts:['2','3','4','5'],correct:2,hint:'Abu Hanifa, Malik, Shafi\'i et Ahmad',quran:'Hud 118'}
  },
  {
    ar:{q:'أي آية تحثّ على التعارف بين الشعوب؟',opts:['آل عمران ١١٠','الحجرات ١٣','البقرة ٢٥٦','المائدة ٢'],correct:1,hint:'سورة الحجرات فيها "لتعارفوا"',quran:'الحجرات ١٣'},
    en:{q:'Which verse encourages getting to know one another among peoples?',opts:['Al Imran 110','Al-Hujurat 13','Al-Baqarah 256','Al-Ma\'idah 2'],correct:1,hint:'Surah Al-Hujurat contains "that you may know one another"',quran:'Al-Hujurat 13'},
    fr:{q:'Quel verset encourage les peuples a se connaitre mutuellement ?',opts:['Al Imran 110','Al-Hujurat 13','Al-Baqarah 256','Al-Ma\'idah 2'],correct:1,hint:'Sourate Al-Hujurat contient "pour que vous vous connaissiez"',quran:'Al-Hujurat 13'}
  },
  {
    ar:{q:'من هو العالم المسلم الذي اخترع الجبر؟',opts:['ابن سينا','ابن الهيثم','الخوارزمي','الرازي'],correct:2,hint:'اسمه أصل كلمة Algorithm بالإنجليزية',quran:'الزمر ٩'},
    en:{q:'Which Muslim scholar invented algebra?',opts:['Ibn Sina','Ibn al-Haytham','Al-Khwarizmi','Al-Razi'],correct:2,hint:'His name is the origin of the word "Algorithm" in English',quran:'Az-Zumar 9'},
    fr:{q:'Quel savant musulman a invente l\'algebre ?',opts:['Ibn Sina','Ibn al-Haytham','Al-Khwarizmi','Al-Razi'],correct:2,hint:'Son nom est a l\'origine du mot "Algorithme" en anglais',quran:'Az-Zumar 9'}
  },
  {
    ar:{q:'ما الآية التي تأمر بالتعاون على البرّ والتقوى؟',opts:['البقرة ٢٨٦','المائدة ٢','النساء ١','التوبة ٧١'],correct:1,hint:'في سورة المائدة "وتعاونوا على البرّ والتقوى"',quran:'المائدة ٢'},
    en:{q:'Which verse commands cooperation in righteousness and piety?',opts:['Al-Baqarah 286','Al-Ma\'idah 2','An-Nisa 1','At-Tawbah 71'],correct:1,hint:'In Surah Al-Ma\'idah: "cooperate in righteousness and piety"',quran:'Al-Ma\'idah 2'},
    fr:{q:'Quel verset ordonne l\'entraide dans la bienfaisance et la piete ?',opts:['Al-Baqarah 286','Al-Ma\'idah 2','An-Nisa 1','At-Tawbah 71'],correct:1,hint:'Dans Sourate Al-Ma\'idah : "entraidez-vous dans la bienfaisance et la piete"',quran:'Al-Ma\'idah 2'}
  },
  {
    ar:{q:'أكمل الحديث: "المؤمن للمؤمن كـ..."',opts:['الأخ','البنيان','الماء','الشجرة'],correct:1,hint:'يشدّ بعضه بعضاً',quran:'الأنفال ٧٣'},
    en:{q:'Complete the hadith: "The believer to the believer is like a..."',opts:['Brother','Building','Water','Tree'],correct:1,hint:'Each part strengthens the other',quran:'Al-Anfal 73'},
    fr:{q:'Completez le hadith : "Le croyant pour le croyant est comme une..."',opts:['Frere','Construction','Eau','Arbre'],correct:1,hint:'Dont chaque partie renforce l\'autre',quran:'Al-Anfal 73'}
  },
  {
    ar:{q:'في أي لغة نزل القرآن الكريم؟',opts:['الفارسية','التركية','العربية','العبرية'],correct:2,hint:'لغة النبي محمد ﷺ',quran:'يوسف ٢'},
    en:{q:'In which language was the Holy Quran revealed?',opts:['Persian','Turkish','Arabic','Hebrew'],correct:2,hint:'The language of Prophet Muhammad (PBUH)',quran:'Yusuf 2'},
    fr:{q:'Dans quelle langue le Saint Coran a-t-il ete revele ?',opts:['Persan','Turc','Arabe','Hebreu'],correct:2,hint:'La langue du Prophete Muhammad (PSL)',quran:'Yusuf 2'}
  },
  {
    ar:{q:'ماذا تعني "لا تفرّقوا" في القرآن؟',opts:['لا تسافروا','لا تتشتتوا وتختلفوا','لا تتكلموا','لا تجتمعوا'],correct:1,hint:'الله ينهانا عن الانقسام والتفرق',quran:'آل عمران ١٠٣'},
    en:{q:'What does "do not become divided" mean in the Quran?',opts:['Do not travel','Do not split and dispute','Do not speak','Do not gather'],correct:1,hint:'Allah forbids us from division and splitting',quran:'Al Imran 103'},
    fr:{q:'Que signifie "ne vous divisez pas" dans le Coran ?',opts:['Ne voyagez pas','Ne vous divisez pas et ne disputez pas','Ne parlez pas','Ne vous rassemblez pas'],correct:1,hint:'Allah nous interdit la division et la separation',quran:'Al Imran 103'}
  },
  {
    ar:{q:'مؤلف كتاب "دستور الوحدة الثقافية بين المسلمين" هو:',opts:['يوسف القرضاوي','سيد قطب','محمد الغزالي','حسن البنا'],correct:2,hint:'عالم مصري لُقب بأديب الدعوة',quran:'الأنبياء ٩٢'},
    en:{q:'The author of "Charter of Cultural Unity Among Muslims" is:',opts:['Yusuf al-Qaradawi','Sayyid Qutb','Mohammed al-Ghazali','Hasan al-Banna'],correct:2,hint:'An Egyptian scholar nicknamed "The Literary Preacher"',quran:'Al-Anbiya 92'},
    fr:{q:'L\'auteur de "Charte de l\'Unite Culturelle entre les Musulmans" est :',opts:['Yusuf al-Qaradawi','Sayyid Qutb','Mohammed al-Ghazali','Hasan al-Banna'],correct:2,hint:'Un savant egyptien surnomme "Le Litteraire de la Predication"',quran:'Al-Anbiya 92'}
  },
  {
    ar:{q:'أكمل الآية: "واعتصموا بحبل الله ... ولا تفرقوا"',opts:['بعضكم','جميعاً','دائماً','أبداً'],correct:1,hint:'الآية تأمر بالاعتصام الجماعي',quran:'آل عمران ١٠٣'},
    en:{q:'Complete the verse: "And hold firmly to the rope of Allah ... and do not become divided"',opts:['Some of you','All together','Always','Never'],correct:1,hint:'The verse commands collective holding',quran:'Al Imran 103'},
    fr:{q:'Completez le verset : "Et cramponnez-vous ... au cable d\'Allah et ne soyez pas divises"',opts:['Certains d\'entre vous','Tous ensemble','Toujours','Jamais'],correct:1,hint:'Le verset ordonne l\'accrochage collectif',quran:'Al Imran 103'}
  }
];

// ═══════════════ DUAS DATA ═══════════════
const DUAS = [
  { ar:{label:'دعاء الأخوّة',text:'اللَّهُمَّ أَلِّفْ بَيْنَ قُلُوبِنَا وَأَصْلِحْ ذَاتَ بَيْنِنَا وَاهْدِنَا سُبُلَ السَّلَامِ',tr:'رواه أبو داود'},
    en:{label:'Dua for Brotherhood',text:'اللَّهُمَّ أَلِّفْ بَيْنَ قُلُوبِنَا وَأَصْلِحْ ذَاتَ بَيْنِنَا وَاهْدِنَا سُبُلَ السَّلَامِ',tr:'O Allah, unite our hearts, mend our relations, and guide us to the paths of peace — Abu Dawud'},
    fr:{label:'Dua pour la Fraternite',text:'اللَّهُمَّ أَلِّفْ بَيْنَ قُلُوبِنَا وَأَصْلِحْ ذَاتَ بَيْنِنَا وَاهْدِنَا سُبُلَ السَّلَامِ',tr:'O Allah, unis nos coeurs, repare nos relations et guide-nous vers les chemins de la paix — Abu Dawud'} },
  { ar:{label:'دعاء الوحدة',text:'رَبَّنَا اغْفِرْ لَنَا وَلِإِخْوَانِنَا الَّذِينَ سَبَقُونَا بِالْإِيمَانِ وَلَا تَجْعَلْ فِي قُلُوبِنَا غِلًّا لِلَّذِينَ آمَنُوا',tr:'الحشر ١٠'},
    en:{label:'Dua for Unity',text:'رَبَّنَا اغْفِرْ لَنَا وَلِإِخْوَانِنَا الَّذِينَ سَبَقُونَا بِالْإِيمَانِ وَلَا تَجْعَلْ فِي قُلُوبِنَا غِلًّا لِلَّذِينَ آمَنُوا',tr:'Our Lord, forgive us and our brothers who preceded us in faith, and put no hatred in our hearts for those who believe — Al-Hashr 10'},
    fr:{label:'Dua pour l\'Unite',text:'رَبَّنَا اغْفِرْ لَنَا وَلِإِخْوَانِنَا الَّذِينَ سَبَقُونَا بِالْإِيمَانِ وَلَا تَجْعَلْ فِي قُلُوبِنَا غِلًّا لِلَّذِينَ آمَنُوا',tr:'Notre Seigneur, pardonne-nous ainsi qu\'a nos freres qui nous ont precedes dans la foi, et ne mets pas de haine dans nos coeurs pour ceux qui croient — Al-Hashr 10'} },
  { ar:{label:'دعاء النصرة',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',tr:'البقرة ٢٥٠'},
    en:{label:'Dua for Support',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',tr:'Our Lord, pour upon us patience, plant firmly our feet, and give us victory — Al-Baqarah 250'},
    fr:{label:'Dua pour le Soutien',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',tr:'Notre Seigneur, deverse sur nous la patience, affermis nos pas et donne-nous la victoire — Al-Baqarah 250'} },
  { ar:{label:'دعاء الهداية',text:'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً',tr:'آل عمران ٨'},
    en:{label:'Dua for Guidance',text:'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً',tr:'Our Lord, do not let our hearts deviate after You have guided us, and grant us mercy from You — Al Imran 8'},
    fr:{label:'Dua pour la Guidance',text:'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً',tr:'Notre Seigneur, ne fais pas devier nos coeurs apres que Tu nous as guides et accorde-nous une misericorde — Al Imran 8'} },
  { ar:{label:'دعاء التوفيق',text:'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',tr:'البقرة ٢٠١'},
    en:{label:'Dua for Success',text:'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',tr:'Our Lord, give us good in this world and good in the Hereafter, and protect us from the Fire — Al-Baqarah 201'},
    fr:{label:'Dua pour le Succes',text:'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',tr:'Notre Seigneur, donne-nous le bien dans ce monde et le bien dans l\'Au-dela, et protege-nous du Feu — Al-Baqarah 201'} }
];

// ═══════════════ XP / BADGE SYSTEM ═══════════════
const XP_KEY = 'dustur-xp';
const BADGES_KEY = 'dustur-badges';
const READ_KEY = 'dustur-read';
const STREAK_KEY = 'dustur-streak';
const MODE_KEY = 'dustur-mode';
const QUIZ_BEST_KEY = 'dustur-quiz-best';

const BADGE_DEFS = [
  { id:'beginner', emoji:'🌱', xp:0, ar:'مبتدئ', en:'Beginner', fr:'Debutant' },
  { id:'reader', emoji:'📖', xp:100, ar:'قارئ', en:'Reader', fr:'Lecteur' },
  { id:'scholar', emoji:'🎓', xp:300, ar:'عالم', en:'Scholar', fr:'Savant' },
  { id:'persistent', emoji:'🔥', xp:500, ar:'مثابر', en:'Persistent', fr:'Perseverant' },
  { id:'expert', emoji:'🏆', xp:1000, ar:'خبير', en:'Expert', fr:'Expert' }
];

function getXP() { return parseInt(localStorage.getItem(XP_KEY) || '0'); }
function addXP(pts) {
  const xp = getXP() + pts;
  localStorage.setItem(XP_KEY, xp);
  checkBadges(xp);
  updateXPDisplay();
  return xp;
}
function getLevel(xp) {
  if (xp >= 1000) return 5;
  if (xp >= 500) return 4;
  if (xp >= 300) return 3;
  if (xp >= 100) return 2;
  return 1;
}
function getEarnedBadges() { return JSON.parse(localStorage.getItem(BADGES_KEY) || '[]'); }
function checkBadges(xp) {
  const earned = getEarnedBadges();
  BADGE_DEFS.forEach(b => {
    if (xp >= b.xp && !earned.includes(b.id)) {
      earned.push(b.id);
      localStorage.setItem(BADGES_KEY, JSON.stringify(earned));
      showToast(`${b.emoji} ${b[lang]}!`);
      playSound('success');
    }
  });
}
function getReadCards() { return JSON.parse(localStorage.getItem(READ_KEY) || '[]'); }
function markCardRead(id) {
  const read = getReadCards();
  if (!read.includes(id)) {
    read.push(id);
    localStorage.setItem(READ_KEY, JSON.stringify(read));
    addXP(10);
  }
}

// ═══════════════ STREAK ═══════════════
function getStreak() { return JSON.parse(localStorage.getItem(STREAK_KEY) || '{"count":0,"lastDate":""}'); }
function updateStreak() {
  const today = new Date().toDateString();
  const s = getStreak();
  if (s.lastDate === today) return s.count;
  const yesterday = new Date(); yesterday.setDate(yesterday.getDate()-1);
  if (s.lastDate === yesterday.toDateString()) { s.count++; } else if (s.lastDate !== today) { s.count = 1; }
  s.lastDate = today;
  localStorage.setItem(STREAK_KEY, JSON.stringify(s));
  return s.count;
}

// ═══════════════ AGE MODE ═══════════════
let ageMode = localStorage.getItem(MODE_KEY) || 'teen';
function toggleAgeMode() {
  ageMode = ageMode === 'young' ? 'teen' : 'young';
  localStorage.setItem(MODE_KEY, ageMode);
  document.body.classList.toggle('young-mode', ageMode === 'young');
  renderAll();
  showToast(ageMode === 'young' ? T[lang].youngMode : T[lang].teenMode);
  playSound('theme');
}

// ═══════════════ LANGUAGE & THEME ═══════════════
let lang = document.documentElement.lang || 'ar';
let currentTheme = document.documentElement.dataset.theme || 'nature';
const THEMES = ['nature','night','ocean'];
const THEME_ICONS = { nature:'🌿', night:'🌙', ocean:'🌊' };
let currentPrincipleIdx = -1;

function setLang(l) {
  lang = l;
  document.documentElement.lang = l;
  document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('.lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  renderAll();
}

function cycleTheme() {
  const idx = (THEMES.indexOf(currentTheme) + 1) % THEMES.length;
  currentTheme = THEMES[idx];
  document.documentElement.dataset.theme = currentTheme;
  { const _e=document.getElementById('themeIcon'); if(_e) _e.textContent=THEME_ICONS[currentTheme]; }
  playSound('theme');
}

// ═══════════════ RENDER ALL ═══════════════
function renderAll() {
  const t = T[lang];
  { const _e=document.getElementById('appTitle'); if(_e) _e.textContent=t.appTitle; }
  { const _e=document.getElementById('splashSub'); if(_e) _e.textContent=t.splashSub; }
  { const _e=document.getElementById('splashHint'); if(_e) _e.textContent=t.splashHint; }
  { const _e=document.getElementById('tabHome'); if(_e) _e.textContent=t.tabHome; }
  { const _e=document.getElementById('tabCards'); if(_e) _e.textContent=t.tabCards; }
  { const _e=document.getElementById('tabQuiz'); if(_e) _e.textContent=t.tabQuiz; }
  { const _e=document.getElementById('tabProgress'); if(_e) _e.textContent=t.tabProgress; }
  { const _e=document.getElementById('tabAbout'); if(_e) _e.textContent=t.tabAbout; }
  { const _e=document.getElementById('cardsTitle'); if(_e) _e.textContent=t.cardsTitle; }
  { const _e=document.getElementById('cardsDesc'); if(_e) _e.textContent=t.cardsDesc; }
  { const _e=document.getElementById('quizTitle'); if(_e) _e.textContent=t.quizTitle; }
  { const _e=document.getElementById('quizDesc'); if(_e) _e.textContent=t.quizDesc; }
  { const _e=document.getElementById('progressTitle'); if(_e) _e.textContent=t.progressTitle; }
  { const _e=document.getElementById('progressDesc'); if(_e) _e.textContent=t.progressDesc; }
  { const _e=document.getElementById('helpTitle'); if(_e) _e.textContent=t.helpTitle; }
  { const _e=document.getElementById('duaPanelTitle'); if(_e) _e.textContent=t.duaPanelTitle; }
  { const _e=document.getElementById('ageModeBtn'); if(_e) _e.textContent=ageMode === 'young' ? t.youngMode : t.teenMode; }
  renderHome();
  renderCards();
  renderProgress();
  renderAbout();
  renderHelp();
  renderDuas();
  renderTicker();
}

// ═══════════════ RENDER: HOME ═══════════════
function renderHome() {
  const t = T[lang];
  const dayIdx = new Date().getDate() % CARDS.length;
  const card = CARDS[dayIdx];
  const d = card[lang];
  (document.getElementById('dailyCard')||{}).innerHTML= `
    <div class="daily-label">${t.dailyLabel}</div>
    <div class="daily-title">${card.emoji} ${d.title}</div>
    <div class="daily-body">${ageMode === 'young' ? d.young : d.desc}</div>
    <div class="daily-action" onclick="switchTab('cards');toggleCard('card-${card.id}')">${t.readMore} &#8594;</div>`;
  (document.getElementById('homeGrid')||{}).innerHTML= CARDS.map(c => {
    const dd = c[lang];
    return `<div class="home-card" onclick="switchTab('cards');toggleCard('card-${c.id}')">
      <span class="hc-icon">${c.emoji}</span>
      <div class="hc-title">${dd.title}</div>
    </div>`;
  }).join('');
}

// ═══════════════ RENDER: CARDS ═══════════════
function renderCards() {
  const t = T[lang];
  const readCards = getReadCards();
  const container = document.getElementById('cardsContainer');
  if (!container) return;
  const searchHTML = `<div class="search-bar"><span class="search-icon">🔍</span><input class="search-input" id="cardsSearch" placeholder="${t.searchPlaceholder}" oninput="filterCards(this.value)"></div>`;
  container.innerHTML = searchHTML + CARDS.map(c => {
    const d = c[lang];
    const isRead = readCards.includes(c.id);
    return `
    <div class="trait-card scroll-reveal ${isRead ? 'read' : ''}" id="card-${c.id}">
      <div class="trait-head" onclick="toggleCard('card-${c.id}');markCardRead(${c.id})">
        <span class="trait-num">${c.id}</span>
        <span class="trait-emoji">${c.emoji}</span>
        <span class="trait-title">${d.title}</span>
        ${isRead ? '<span class="trait-read-badge">&#10003;</span>' : ''}
        <span class="trait-chev">&#9660;</span>
      </div>
      <div class="trait-body">
        <div class="trait-inner">
          <div class="trait-desc">${ageMode === 'young' ? d.young : d.desc}</div>
          <div class="verse-box">
            <div class="verse-arabic">${d.verse}</div>
            <div class="verse-ref">${d.verseRef}</div>
          </div>
          <div class="hadith-box">
            <span class="hadith-label">📜 ${t.hadith}</span>
            <div class="hadith-text">${d.hadith}</div>
          </div>
          <div class="action-box">
            <span class="action-icon">💡</span>
            <span>${d.action}</span>
          </div>
          <button class="share-btn" onclick="shareCard(${c.id})"><span class="share-icon">📤</span> ${t.share}</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

function filterCards(query) {
  const cards = document.querySelectorAll('.trait-card');
  const q = query.toLowerCase();
  cards.forEach(card => {
    const title = card.querySelector('.trait-title').textContent.toLowerCase();
    const desc = card.querySelector('.trait-desc') ? card.querySelector('.trait-desc').textContent.toLowerCase() : '';
    card.style.display = (!q || title.includes(q) || desc.includes(q)) ? '' : 'none';
  });
}

function shareCard(id) {
  const card = CARDS.find(c => c.id === id);
  if (!card) return;
  const d = card[lang];
  const text = `${card.emoji} ${d.title}\n${d.desc}\n\n${d.verse} — ${d.verseRef}`;
  if (navigator.share) { navigator.share({ title: d.title, text }); }
  else { navigator.clipboard.writeText(text).then(() => showToast(lang==='ar'?'تم النسخ':'Copied!')); }
}

// ═══════════════ RENDER: QUIZ ═══════════════
let quizState = { current: 0, score: 0, answers: [], lifelines: { fifty: true, hint: true, quran: true }, active: false };

function renderQuiz() {
  quizState = { current: 0, score: 0, answers: [], lifelines: { fifty: true, hint: true, quran: true }, active: true };
  showQuizQuestion();
}

function showQuizQuestion() {
  const t = T[lang];
  const container = document.getElementById('quizContainer');
  if (!container) return;
  const result = document.getElementById('quizResult');
  result.classList.add('hidden');
  if (quizState.current >= QUIZ.length) { showQuizResult(); return; }
  const q = QUIZ[quizState.current][lang];
  const total = QUIZ.length;
  const num = quizState.current + 1;
  container.innerHTML = `
    <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${num/total*100}%"></div></div>
    <div class="quiz-counter">${num} / ${total}</div>
    <div class="quiz-question-card scroll-reveal">
      <div class="quiz-q-text">${q.q}</div>
      <div class="quiz-options" id="quizOpts">
        ${q.opts.map((opt, i) => `<button class="quiz-opt" id="qopt-${i}" onclick="answerQuiz(${i})">${opt}</button>`).join('')}
      </div>
      <div class="quiz-lifelines">
        <button class="lifeline-btn ${quizState.lifelines.fifty?'':'used'}" onclick="useFiftyFifty()" ${quizState.lifelines.fifty?'':'disabled'}>${t.lifeline5050}</button>
        <button class="lifeline-btn ${quizState.lifelines.hint?'':'used'}" onclick="useHint()" ${quizState.lifelines.hint?'':'disabled'}>${t.lifelineHint}</button>
        <button class="lifeline-btn ${quizState.lifelines.quran?'':'used'}" onclick="useQuranRef()" ${quizState.lifelines.quran?'':'disabled'}>${t.lifelineQuran}</button>
      </div>
      <div id="quizFeedback" class="quiz-feedback hidden"></div>
    </div>`;
}

function answerQuiz(idx) {
  if (!quizState.active) return;
  const q = QUIZ[quizState.current][lang];
  const correct = q.correct;
  const opts = document.querySelectorAll('.quiz-opt');
  opts.forEach((o, i) => {
    o.disabled = true;
    if (i === correct) o.classList.add('correct');
    if (i === idx && i !== correct) o.classList.add('wrong');
  });
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  if (idx === correct) {
    quizState.score++;
    addXP(5);
    feedback.innerHTML = `<span class="fb-correct">${T[lang].correct}</span>`;
    playSound('success');
  } else {
    feedback.innerHTML = `<span class="fb-wrong">${T[lang].wrong}</span>`;
    playSound('click');
  }
  quizState.answers.push(idx);
  quizState.current++;
  setTimeout(() => showQuizQuestion(), 1800);
}

function useFiftyFifty() {
  if (!quizState.lifelines.fifty) return;
  quizState.lifelines.fifty = false;
  const q = QUIZ[quizState.current][lang];
  const correct = q.correct;
  const wrongIdxs = [0,1,2,3].filter(i => i !== correct);
  const toHide = wrongIdxs.sort(() => Math.random() - 0.5).slice(0, 2);
  toHide.forEach(i => { const el = document.getElementById('qopt-'+i); if(el) { el.style.visibility='hidden'; el.disabled=true; }});
  document.querySelector('.lifeline-btn').classList.add('used');
  playSound('click');
}

function useHint() {
  if (!quizState.lifelines.hint) return;
  quizState.lifelines.hint = false;
  const q = QUIZ[quizState.current][lang];
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  feedback.innerHTML = `<span class="fb-hint">💡 ${q.hint}</span>`;
  playSound('click');
}

function useQuranRef() {
  if (!quizState.lifelines.quran) return;
  quizState.lifelines.quran = false;
  const q = QUIZ[quizState.current][lang];
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  feedback.innerHTML = `<span class="fb-quran">📖 ${q.quran}</span>`;
  playSound('click');
}

function showQuizResult() {
  const t = T[lang];
  const total = QUIZ.length;
  const pct = Math.round(quizState.score / total * 100);
  const best = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0');
  if (pct > best) localStorage.setItem(QUIZ_BEST_KEY, pct);
  addXP(20);
  let emoji, title;
  if (pct >= 80) { emoji = '🏆'; title = lang==='ar'?'عالم حقيقي!':lang==='fr'?'Un vrai savant !':'A True Scholar!'; }
  else if (pct >= 50) { emoji = '📖'; title = lang==='ar'?'جيد جداً!':lang==='fr'?'Tres bien !':'Very Good!'; }
  else { emoji = '🌱'; title = lang==='ar'?'واصل التعلم!':lang==='fr'?'Continue d\'apprendre !':'Keep Learning!'; }
  (document.getElementById('quizContainer')||{}).innerHTML= '';
  const result = document.getElementById('quizResult');
  result.classList.remove('hidden');
  result.innerHTML = `
    <div class="qr-emoji">${emoji}</div>
    <div class="qr-score">${quizState.score}/${total}</div>
    <div class="qr-title">${title}</div>
    <div class="qr-desc">${pct}%</div>
    <button class="quiz-submit" onclick="renderQuiz()">${t.tryAgain}</button>`;
  result.scrollIntoView({ behavior: 'smooth' });
  if (pct >= 80) launchConfetti();
  quizState.active = false;
}

// ═══════════════ RENDER: PROGRESS ═══════════════
function renderProgress() {
  const t = T[lang];
  const xp = getXP();
  const level = getLevel(xp);
  const streak = getStreak().count;
  const readCards = getReadCards();
  const earned = getEarnedBadges();
  const bestQuiz = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0');
  const nextBadge = BADGE_DEFS.find(b => !earned.includes(b.id));
  const nextXP = nextBadge ? nextBadge.xp : 1000;
  const progressPct = Math.min(100, (xp / nextXP) * 100);

  (document.getElementById('progressContainer')||{}).innerHTML= `
    <div class="progress-xp-card">
      <div class="xp-header">
        <span class="xp-icon">⭐</span>
        <span class="xp-amount">${xp} ${t.xpLabel}</span>
      </div>
      <div class="xp-bar-wrap">
        <div class="xp-bar"><div class="xp-bar-fill" style="width:${progressPct}%"></div></div>
        <span class="xp-level">${t.levelLabel} ${level}</span>
      </div>
      ${nextBadge ? `<div class="xp-next">${lang==='ar'?'التالي:':lang==='fr'?'Suivant:':'Next:'} ${nextBadge.emoji} ${nextBadge[lang]} (${nextBadge.xp} XP)</div>` : ''}
    </div>
    ${streak > 0 ? `<div class="streak-badge">🔥 ${streak} ${t.streakMsg}</div>` : ''}
    <div class="progress-stats">
      <div class="stat-card"><span class="stat-num">${readCards.length}</span><span class="stat-label">${lang==='ar'?'ركيزة مقروءة':lang==='fr'?'Piliers lus':'Pillars Read'}</span><span class="stat-total">/ ${CARDS.length}</span></div>
      <div class="stat-card"><span class="stat-num">${bestQuiz}%</span><span class="stat-label">${lang==='ar'?'أفضل نتيجة':lang==='fr'?'Meilleur score':'Best Quiz'}</span></div>
      <div class="stat-card"><span class="stat-num">${earned.length}</span><span class="stat-label">${lang==='ar'?'شارات':lang==='fr'?'Badges':'Badges'}</span><span class="stat-total">/ ${BADGE_DEFS.length}</span></div>
    </div>
    <div class="badges-section">
      <h3 class="badges-title">${lang==='ar'?'🏅 الشارات':lang==='fr'?'🏅 Badges':'🏅 Badges'}</h3>
      <div class="badges-grid">
        ${BADGE_DEFS.map(b => `<div class="badge-item ${earned.includes(b.id)?'earned':'locked'}"><span class="badge-emoji">${b.emoji}</span><span class="badge-name">${b[lang]}</span><span class="badge-xp">${b.xp} XP</span></div>`).join('')}
      </div>
    </div>`;
}

function updateXPDisplay() {
  const panel = document.getElementById('panel-progress');
  if (panel && panel.classList.contains('active')) renderProgress();
}

// ═══════════════ RENDER: ABOUT ═══════════════
function renderAbout() {
  const about = {
    ar: {
      disclaimerTitle: '⚠️ تنبيه مهم',
      disclaimer: 'هذا التطبيق مستوحى من كتاب الشيخ محمد الغزالي رحمه الله، وليس بديلاً عن قراءة الكتاب الأصلي. المحتوى ملخصات تعليمية مبسطة وليست نقلاً حرفياً. قد تحتوي على تبسيط لأفكار المؤلف. يُرجى الرجوع للكتاب الأصلي وللعلماء المتخصصين.',
      authorName: 'الشيخ محمد الغزالي',
      authorDates: '١٩١٧ — ١٩٩٦',
      authorBio: 'عالم ومفكر إسلامي مصري، لُقب بـ"أديب الدعوة". ألّف أكثر من ٩٤ كتاباً. درس في الأزهر، ودرّس في جامعة الأمير عبد القادر بقسنطينة (الجزائر). حاصل على جائزة الملك فيصل.',
      bookTitle: 'عن الكتاب',
      bookDesc: '«دستور الوحدة الثقافية بين المسلمين» كتاب يدعو إلى توحيد الصف الإسلامي ثقافياً. يرى الشيخ الغزالي أن الوحدة لا تعني إلغاء التنوع بل تنظيمه ضمن إطار العقيدة المشتركة. يتناول الكتاب أركان الوحدة الثقافية من اللغة والتاريخ والتعليم والإعلام والاقتصاد.',
      sourcesTitle: 'المصادر',
      sources: ['كتاب "دستور الوحدة الثقافية بين المسلمين" — الشيخ محمد الغزالي','القرآن الكريم','صحيح البخاري ومسلم','سنن الترمذي وأبي داود'],
      contact: 'تواصل: abdelhak.bourdim@gmail.com'
    },
    en: {
      disclaimerTitle: '⚠️ Important Notice',
      disclaimer: 'I am not a scholar or mufti. This is a humble effort by a Muslim who loves Sheikh al-Ghazali\'s books. Content is derived from the book and trusted Islamic sources. This is not a fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Egyptian Islamic scholar and thinker, nicknamed "The Literary Preacher." Author of 94+ books. Studied at Al-Azhar, taught at the University of Emir Abdelkader in Constantine, Algeria. King Faisal Award winner.',
      bookTitle: 'About the Book',
      bookDesc: '"Charter of Cultural Unity Among Muslims" is a book calling for cultural unification of the Muslim ranks. Sheikh al-Ghazali argues that unity does not mean eliminating diversity but organizing it within the framework of shared creed. The book covers pillars of cultural unity including language, history, education, media, and economics.',
      sourcesTitle: 'Sources',
      sources: ['"Charter of Cultural Unity Among Muslims" — Sheikh Mohammed al-Ghazali','The Holy Quran','Sahih al-Bukhari and Muslim','Sunan at-Tirmidhi and Abu Dawud'],
      contact: 'Contact: abdelhak.bourdim@gmail.com'
    },
    fr: {
      disclaimerTitle: '⚠️ Avis Important',
      disclaimer: 'Je ne suis ni savant ni mufti. C\'est un effort humble d\'un musulman qui aime les livres du Sheikh al-Ghazali. Le contenu est tire du livre et de sources islamiques fiables. Ce n\'est pas une fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Savant et penseur islamique egyptien, surnomme "Le Litteraire de la Predication". Auteur de plus de 94 livres. Diplome d\'Al-Azhar, professeur a l\'Universite Emir Abdelkader de Constantine (Algerie). Laureat du Prix Roi Faysal.',
      bookTitle: 'A Propos du Livre',
      bookDesc: '"Charte de l\'Unite Culturelle entre les Musulmans" est un livre appelant a l\'unification culturelle des rangs musulmans. Le Sheikh al-Ghazali soutient que l\'unite ne signifie pas eliminer la diversite mais l\'organiser dans le cadre du credo commun. Le livre couvre les piliers de l\'unite culturelle incluant la langue, l\'histoire, l\'education, les medias et l\'economie.',
      sourcesTitle: 'Sources',
      sources: ['"Charte de l\'Unite Culturelle entre les Musulmans" — Sheikh Mohammed al-Ghazali','Le Saint Coran','Sahih al-Bukhari et Muslim','Sunan at-Tirmidhi et Abu Dawud'],
      contact: 'Contact : abdelhak.bourdim@gmail.com'
    }
  };
  const a = about[lang];
  (document.getElementById('aboutContainer')||{}).innerHTML= `
    <div class="about-disclaimer">
      <div class="about-disclaimer-title">${a.disclaimerTitle}</div>
      <p>${a.disclaimer}</p>
    </div>
    <div class="about-author">
      <span class="about-author-icon">📚</span>
      <div class="about-author-info">
        <div class="about-author-name">${a.authorName}</div>
        <div class="about-author-dates">${a.authorDates}</div>
        <div class="about-author-bio">${a.authorBio}</div>
      </div>
    </div>
    <div class="about-section">
      <div class="about-section-title">${a.bookTitle}</div>
      <p class="about-text">${a.bookDesc}</p>
    </div>
    <div class="about-section">
      <div class="about-section-title">${a.sourcesTitle}</div>
      ${a.sources.map(s => `<p class="about-text">&#8226; ${s}</p>`).join('')}
    </div>
    <div class="about-section">
      <p class="about-text">${a.contact}</p>
    </div>`;
}

// ═══════════════ RENDER: HELP ═══════════════
function renderHelp() {
  const help = {
    ar: [
      {title:'⚠️ تنبيه',body:'لست عالماً. هذا جهد متواضع لنشر حكمة الشيخ الغزالي بطريقة تفاعلية.'},
      {title:'📚 المصادر',body:'كتاب "دستور الوحدة الثقافية بين المسلمين" للشيخ محمد الغزالي، القرآن الكريم، السنة النبوية.'},
      {title:'✨ المميزات',body:'ثلاث لغات (عربي/إنجليزي/فرنسي)، ٣ أنماط، ١٥ ركيزة، مسابقة تفاعلية، نظام نقاط وشارات، وضعان للأعمار.'},
      {title:'🌟 وضع مستكشف صغير',body:'للأطفال ٧-١٢ سنة — نصوص مبسطة بالإيموجي، خط أكبر.'},
      {title:'📖 وضع باحث شاب',body:'للشباب ١٣+ — نصوص كاملة مع آيات وأحاديث وتحليل.'},
    ],
    en: [
      {title:'⚠️ Disclaimer',body:'I am not a scholar. This is a humble effort to share Sheikh al-Ghazali\'s wisdom interactively.'},
      {title:'📚 Sources',body:'"Charter of Cultural Unity Among Muslims" by Sheikh Mohammed al-Ghazali, the Holy Quran, Prophetic Sunnah.'},
      {title:'✨ Features',body:'Three languages (AR/EN/FR), 3 themes, 15 pillars, interactive quiz, XP and badges system, 2 age modes.'},
      {title:'🌟 Young Explorer',body:'For kids 7-12 — simplified text with emojis, larger font.'},
      {title:'📖 Teen Scholar',body:'For teens 13+ — full text with verses, hadiths, and analysis.'},
    ],
    fr: [
      {title:'⚠️ Avertissement',body:'Je ne suis pas un savant. C\'est un effort humble pour partager la sagesse du Sheikh al-Ghazali.'},
      {title:'📚 Sources',body:'"Charte de l\'Unite Culturelle entre les Musulmans" par Sheikh Mohammed al-Ghazali, le Saint Coran, la Sunnah.'},
      {title:'✨ Fonctionnalites',body:'Trois langues (AR/EN/FR), 3 themes, 15 piliers, quiz interactif, systeme XP et badges, 2 modes d\'age.'},
      {title:'🌟 Jeune Explorateur',body:'Pour enfants 7-12 ans — texte simplifie avec emojis, police plus grande.'},
      {title:'📖 Jeune Chercheur',body:'Pour ados 13+ — texte complet avec versets, hadiths et analyse.'},
    ]
  };
  (document.getElementById('helpBody')||{}).innerHTML= help[lang].map(h => `
    <div class="help-item">
      <div class="help-item-title">${h.title}</div>
      <div>${h.body}</div>
    </div>`).join('');
}

// ═══════════════ RENDER: DUAS ═══════════════
function renderDuas() {
  (document.getElementById('duaPanelContent')||{}).innerHTML= DUAS.map(d => {
    const dd = d[lang];
    return `<div class="dua-item">
      <div class="dua-item-label">${dd.label}</div>
      <div class="dua-item-ar">${dd.text}</div>
      <div class="dua-item-tr">${dd.tr}</div>
    </div>`;
  }).join('');
}

// ═══════════════ TICKER ═══════════════
function renderTicker() {
  const tips = {
    ar: ['📖 اقرأ ركيزة جديدة كل يوم','🏆 اجمع النقاط واربح الشارات','🌟 جرب وضع المستكشف الصغير','🤲 لا تنسَ دعاء الوحدة والأخوّة','⭐ أكمل ١٥ ركيزة لتصبح خبيراً'],
    en: ['📖 Read a new pillar every day','🏆 Collect points and earn badges','🌟 Try Young Explorer mode','🤲 Don\'t forget duas for unity','⭐ Complete all 15 pillars to become an Expert'],
    fr: ['📖 Lisez un nouveau pilier chaque jour','🏆 Collectez des points et gagnez des badges','🌟 Essayez le mode Jeune Explorateur','🤲 N\'oubliez pas les duas pour l\'unite','⭐ Completez les 15 piliers pour devenir Expert']
  };
  const items = tips[lang];
  const doubled = [...items, ...items];
  const ticker = document.getElementById('tickerText');
  ticker.innerHTML = doubled.map(t => `<span class="tc">&nbsp;&nbsp;${t}&nbsp;&nbsp;•</span>`).join('');
  ticker.style.animation = `tickerMarquee ${items.length * 6}s linear infinite`;
}

// ═══════════════ SPLASH SCREEN ═══════════════
let splashTimer;
function initSplash() {
  const features = document.getElementById('splashFeatures');
  if (features) {
    features.innerHTML = T[lang].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3+i*0.3}s">${f}</div>`
    ).join('');
  }
  let count = 5;
  const counter = document.getElementById('splashCount');
  splashTimer = setInterval(() => {
    count--;
    if (counter) counter.textContent = count;
    if (count <= 0) dismissSplash();
  }, 1000);
}
function dismissSplash() {
  clearInterval(splashTimer);
  const splash = document.getElementById('splash');
  if (splash) { splash.classList.add('hidden'); setTimeout(() => splash.remove(), 600); }
}

// ═══════════════ TAB SWITCHING ═══════════════
function initTabs() {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const name = tab.dataset.tab;
      switchTab(name);
    });
  });
}
function switchTab(name) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  const panel = document.getElementById('panel-' + name);
  const tabBtn = document.querySelector(`.tab[data-tab="${name}"]`);
  if (panel) panel.classList.add('active');
  if (tabBtn) tabBtn.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  playSound('click');
  setTimeout(() => {
    document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => {
      if (window._scrollObserver) window._scrollObserver.observe(el);
    });
    initTypewriter();
  }, 100);
  // Auto-render quiz when switching to quiz tab
  if (name === 'quiz' && document.getElementById('quizContainer') && !document.getElementById('quizContainer').innerHTML.trim()) {
    renderQuiz();
  }
}

// ═══════════════ SCROLL REVEAL ═══════════════
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) return;
  window._scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        window._scrollObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => window._scrollObserver.observe(el));
}

// ═══════════════ KEYBOARD NAVIGATION ═══════════════
function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const hp = document.getElementById('helpPanel');
      if (!hp.classList.contains('hidden')) { toggleHelp(); return; }
      const dp = document.getElementById('duaPanel');
      if (!dp.classList.contains('hidden')) { toggleDuaPanel(); return; }
      document.querySelectorAll('.trait-card.open').forEach(c => c.classList.remove('open'));
    }
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      const panel = document.getElementById('panel-cards');
      if (!panel || !panel.classList.contains('active')) return;
      if (document.activeElement && document.activeElement.id === 'cardsSearch') return;
      e.preventDefault();
      const cards = Array.from(document.querySelectorAll('.trait-card')).filter(c => c.style.display !== 'none');
      if (!cards.length) return;
      if (currentPrincipleIdx >= 0 && currentPrincipleIdx < cards.length) cards[currentPrincipleIdx].classList.remove('open');
      const dir = document.documentElement.dir === 'rtl' ? (e.key==='ArrowRight'?-1:1) : (e.key==='ArrowRight'?1:-1);
      currentPrincipleIdx = Math.max(0, Math.min(cards.length-1, currentPrincipleIdx+dir));
      cards[currentPrincipleIdx].classList.add('open');
      cards[currentPrincipleIdx].scrollIntoView({ behavior:'smooth', block:'center' });
      playSound('click');
    }
  });
}

// ═══════════════ UTILITIES ═══════════════
function toggleCard(id) {
  const card = document.getElementById(id);
  if (card) { card.classList.toggle('open'); playSound('click'); }
}
function toggleHelp() { document.getElementById('helpPanel').classList.toggle('hidden'); playSound('click'); }
function toggleDuaPanel() { document.getElementById('duaPanel').classList.toggle('hidden'); playSound('click'); }
function showToast(msg) {
  const t = document.getElementById('toast');
  const m = document.getElementById('toastMsg');
  if (t && m) { m.textContent = msg; t.style.display = 'block'; setTimeout(() => t.style.display = 'none', 2500); }
}
function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => { if (btn) btn.classList.toggle('visible', window.scrollY > 300); });
}

// ═══════════════ SOUND EFFECTS ═══════════════
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;
function playSound(type) {
  try {
    if (!audioCtx) audioCtx = new AudioCtx();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    gain.gain.value = 0.06;
    if (type==='click') { osc.frequency.value=800; osc.type='sine'; gain.gain.value=0.04; }
    else if (type==='success') { osc.frequency.value=523; osc.type='sine'; gain.gain.value=0.06; }
    else if (type==='theme') { osc.frequency.value=440; osc.type='triangle'; gain.gain.value=0.05; }
    osc.start(); osc.stop(audioCtx.currentTime + 0.1);
  } catch(e) {}
}

// ═══════════════ CONFETTI ═══════════════
function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  canvas.style.display = 'block';
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
  const particles = [];
  const colors = ['#2E7D32','#4CAF50','#81C784','#A5D6A7','#FFD54F','#FF8A65','#4FC3F7'];
  for (let i = 0; i < 120; i++) {
    particles.push({ x:Math.random()*canvas.width, y:Math.random()*canvas.height-canvas.height, w:Math.random()*10+5, h:Math.random()*6+3, color:colors[Math.floor(Math.random()*colors.length)], vx:(Math.random()-0.5)*4, vy:Math.random()*3+2, rot:Math.random()*360, rotSpeed:(Math.random()-0.5)*10 });
  }
  let frame = 0;
  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p => { p.x+=p.vx; p.y+=p.vy; p.rot+=p.rotSpeed; ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot*Math.PI/180); ctx.fillStyle=p.color; ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h); ctx.restore(); });
    frame++;
    if (frame < 120) requestAnimationFrame(draw);
    else { ctx.clearRect(0,0,canvas.width,canvas.height); canvas.style.display='none'; }
  }
  draw();
}

// ═══════════════ TYPEWRITER ═══════════════
function initTypewriter() {
  const dailyTitle = document.querySelector('.daily-card .daily-title');
  if (!dailyTitle || dailyTitle.dataset.twDone) return;
  const fullText = dailyTitle.textContent;
  dailyTitle.textContent = '';
  dailyTitle.classList.add('typewriter-text');
  dailyTitle.dataset.twDone = '1';
  let i = 0;
  const speed = Math.max(30, 2000 / fullText.length);
  function typeChar() {
    if (i < fullText.length) { dailyTitle.textContent += fullText.charAt(i); i++; setTimeout(typeChar, speed); }
    else { setTimeout(() => dailyTitle.classList.add('tw-done'), 1500); }
  }
  setTimeout(typeChar, 500);
}

// ═══════════════ SWIPE GESTURES ═══════════════
function initSwipeGestures() {
  let touchStartX = 0, touchStartY = 0;
  const tabOrder = ['home','cards','quiz','progress','about'];
  document.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; touchStartY = e.changedTouches[0].screenY; }, { passive: true });
  document.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].screenX - touchStartX;
    const dy = e.changedTouches[0].screenY - touchStartY;
    if (Math.abs(dx) < 80 || Math.abs(dy) > Math.abs(dx) * 0.5) return;
    const current = tabOrder.findIndex(t => { const p = document.getElementById('panel-'+t); return p && p.classList.contains('active'); });
    if (current < 0) return;
    const isRTL = document.documentElement.dir === 'rtl';
    let next;
    if ((dx > 0 && !isRTL) || (dx < 0 && isRTL)) next = current - 1; else next = current + 1;
    if (next >= 0 && next < tabOrder.length) switchTab(tabOrder[next]);
  }, { passive: true });
}

// ═══════════════ INIT ═══════════════
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.toggle('young-mode', ageMode === 'young');
  updateStreak();
  initSplash();
  renderAll();
  initTabs();
  initScrollReveal();
  initScrollTop();
  initKeyboardNav();
  initSwipeGestures();
  initTypewriter();
});
