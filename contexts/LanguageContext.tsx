import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ru' | 'vi' | 'id';

interface Translations {
  [key: string]: {
    nav_features: string;
    nav_process: string;
    nav_pricing: string;
    nav_contact: string;
    hero_badge: string;
    hero_title_1: string;
    hero_title_highlight: string;
    hero_tagline: string;
    hero_cta_primary: string;
    hero_cta_secondary: string;
    stats_reply: string;
    stats_reply_desc: string;
    stats_conversion: string;
    stats_conversion_desc: string;
    stats_safe: string;
    stats_safe_desc: string;
    features_eyebrow: string;
    features_title: string;
    feat_train_title: string;
    feat_train_desc: string;
    feat_247_title: string;
    feat_247_desc: string;
    feat_rapid_title: string;
    feat_rapid_desc: string;
    process_title: string;
    step_1_title: string;
    step_1_desc: string;
    step_2_title: string;
    step_2_desc: string;
    step_3_title: string;
    step_3_desc: string;
    cta_title: string;
    cta_desc: string;
    cta_btn: string;
    cta_footer: string;
    // New Feature Page Keys
    fp_hero_badge: string;
    fp_hero_title: string;
    fp_hero_desc: string;
    fp_s1_title: string;
    fp_s1_desc: string;
    fp_s2_title: string;
    fp_s2_desc: string;
    fp_s3_title: string;
    fp_s3_desc: string;
    // Proof of Value Slider Keys
    pov_badge: string;
    pov_title: string;
    pov_desc: string;
    pov_1_metric: string;
    pov_1_title: string;
    pov_1_desc: string;
    pov_1_source: string;
    pov_2_metric: string;
    pov_2_title: string;
    pov_2_desc: string;
    pov_2_source: string;
    pov_3_metric: string;
    pov_3_title: string;
    pov_3_desc: string;
    pov_3_source: string;
    pov_4_metric: string;
    pov_4_title: string;
    pov_4_desc: string;
    pov_4_source: string;
    pov_5_metric: string;
    pov_5_title: string;
    pov_5_desc: string;
    pov_5_source: string;
    pov_6_metric: string;
    pov_6_title: string;
    pov_6_desc: string;
    pov_6_source: string;
    pov_7_metric: string;
    pov_7_title: string;
    pov_7_desc: string;
    pov_7_source: string;
    pov_8_metric: string;
    pov_8_title: string;
    pov_8_desc: string;
    pov_8_source: string;
    pov_9_metric: string;
    pov_9_title: string;
    pov_9_desc: string;
    pov_9_source: string;
    pov_10_metric: string;
    pov_10_title: string;
    pov_10_desc: string;
    pov_10_source: string;
    pov_paused: string;
  };
}

const translations: Translations = {
  en: {
    nav_features: 'Features',
    nav_process: 'How it Works',
    nav_pricing: 'Pricing',
    nav_contact: 'Get Started',
    hero_badge: 'Accepting new clients for Q4',
    hero_title_1: 'Custom AI Chatbots',
    hero_title_highlight: 'Built for Business',
    hero_tagline: 'We create tailored AI chatbots that understand your business, speak your brand voice, and serve your customers 24/7. Deployed in days, not months.',
    hero_cta_primary: 'Build My Bot',
    hero_cta_secondary: 'View Features',
    stats_reply: 'Instant Replies',
    stats_reply_desc: 'Under 200ms response time.',
    stats_conversion: 'Sales Conversion',
    stats_conversion_desc: '+40% lead capture rate.',
    stats_safe: 'Brand Safe',
    stats_safe_desc: 'Strict guardrails engaged.',
    features_eyebrow: 'Why BotForge?',
    features_title: 'Better interactions, automatically.',
    feat_train_title: 'Custom Training',
    feat_train_desc: 'Trained on your specific documents and FAQs.',
    feat_247_title: '24/7 Availability',
    feat_247_desc: 'Works nights, weekends, and holidays.',
    feat_rapid_title: 'Rapid Deployment',
    feat_rapid_desc: 'Live on your site in as little as 3 days.',
    process_title: 'From Idea to AI in 3 Steps',
    step_1_title: 'Consultation',
    step_1_desc: 'We analyze your business needs.',
    step_2_title: 'Training',
    step_2_desc: 'Fine-tuning models to your brand.',
    step_3_title: 'Launch',
    step_3_desc: 'Simple embed code, live instantly.',
    cta_title: 'Ready to automate your growth?',
    cta_desc: 'Custom AI chatbots built for your business — deployed in days, not months.',
    cta_btn: 'Get Your Free Audit',
    cta_footer: 'No credit card required.',
    fp_hero_badge: 'Technology Stack',
    fp_hero_title: 'Capabilities Unlocked',
    fp_hero_desc: 'Explore the neural architecture that powers BotForge. From context awareness to enterprise-grade security, see what makes our bots tick.',
    fp_s1_title: 'Contextual Memory Core',
    fp_s1_desc: 'Our bots don\'t just answer; they remember. With a 128k token context window, BotForge agents recall previous interactions, user preferences, and complex conversation threads to provide truly personalized support.',
    fp_s2_title: 'Adaptive Tone Engine',
    fp_s2_desc: 'Formal for banking, playful for e-commerce. Our proprietary style-transfer layer adapts the AI\'s voice to perfectly match your brand guidelines, ensuring consistency across every interaction.',
    fp_s3_title: 'Ironclad Security Guardrails',
    fp_s3_desc: 'Sleep soundly knowing your bot stays on topic. We implement deterministic guardrails that prevent hallucinations, block competitor mentions, and ensure compliance with your business rules.',
    // Proof of Value Slider
    pov_badge: 'Data-Backed Results',
    pov_title: 'Proof of Value',
    pov_desc: 'Real statistics from industry research showing measurable ROI of AI-powered customer support.',
    pov_1_metric: '30%',
    pov_1_title: 'Cost Reduction',
    pov_1_desc: 'Chatbots reduce customer service costs by automating routine inquiries and reducing the need for large support teams.',
    pov_1_source: 'IBM / Chatbots Magazine',
    pov_2_metric: '$3.50',
    pov_2_title: 'ROI Per $1 Invested',
    pov_2_desc: 'AI-powered customer service delivers strong financial returns through efficiency gains and improved customer retention.',
    pov_2_source: 'KPMG',
    pov_3_metric: '37%',
    pov_3_title: 'Faster Response Time',
    pov_3_desc: 'AI chatbots provide instant responses, dramatically cutting wait times and improving the overall support experience.',
    pov_3_source: 'Gorgias',
    pov_4_metric: '27%',
    pov_4_title: 'Higher CSAT Scores',
    pov_4_desc: 'Faster resolutions, 24/7 availability, and consistent responses contribute to measurably higher customer satisfaction.',
    pov_4_source: 'Zowie',
    pov_5_metric: '80%',
    pov_5_title: 'Automated Inquiries',
    pov_5_desc: 'The majority of customer questions are repetitive—ideal candidates for AI automation, freeing human agents for complex issues.',
    pov_5_source: 'IBM / Gartner',
    pov_6_metric: '13.8%',
    pov_6_title: 'Agent Productivity Boost',
    pov_6_desc: 'AI assistance helps human agents work more efficiently with suggested responses and automated ticket routing.',
    pov_6_source: 'Plivo',
    pov_7_metric: '44%',
    pov_7_title: 'Faster Resolution',
    pov_7_desc: 'Automated handling of common questions and intelligent routing accelerates the entire resolution process.',
    pov_7_source: 'Plivo',
    pov_8_metric: '64%',
    pov_8_title: 'Value 24/7 Availability',
    pov_8_desc: 'Round-the-clock support meets modern customer expectations for instant assistance regardless of time zone.',
    pov_8_source: 'Fullview',
    pov_9_metric: '62%',
    pov_9_title: 'Prefer Chatbots',
    pov_9_desc: 'When given the choice between immediate AI assistance and waiting in queue, the majority choose speed.',
    pov_9_source: 'Tidio',
    pov_10_metric: '68%',
    pov_10_title: 'Peak Staffing Savings',
    pov_10_desc: 'AI chatbots provide elastic capacity that scales instantly during high-demand periods without hiring temporary staff.',
    pov_10_source: 'Plivo',
    pov_paused: 'Paused',
  },
  ru: {
    nav_features: 'Функции',
    nav_process: 'Как это работает',
    nav_pricing: 'Цены',
    nav_contact: 'Начать',
    hero_badge: 'Открыт набор клиентов на 4 кв.',
    hero_title_1: 'Кастомные ИИ-боты',
    hero_title_highlight: 'Для вашего бизнеса',
    hero_tagline: 'Мы создаем индивидуальных ИИ-чатботов, которые понимают ваш бизнес, говорят голосом вашего бренда и обслуживают клиентов 24/7. Запуск за дни, а не месяцы.',
    hero_cta_primary: 'Создать бота',
    hero_cta_secondary: 'Функции',
    stats_reply: 'Мгновенные ответы',
    stats_reply_desc: 'Отклик менее 200мс.',
    stats_conversion: 'Конверсия',
    stats_conversion_desc: '+40% захвата лидов.',
    stats_safe: 'Безопасность',
    stats_safe_desc: 'Строгие правила бренда.',
    features_eyebrow: 'Почему BotForge?',
    features_title: 'Лучшее взаимодействие, автоматически.',
    feat_train_title: 'Кастомное обучение',
    feat_train_desc: 'Обучен на ваших документах и FAQ.',
    feat_247_title: 'Доступность 24/7',
    feat_247_desc: 'Работает ночью и в выходные.',
    feat_rapid_title: 'Быстрый запуск',
    feat_rapid_desc: 'На вашем сайте всего за 3 дня.',
    process_title: 'От идеи до ИИ за 3 шага',
    step_1_title: 'Консультация',
    step_1_desc: 'Анализ потребностей бизнеса.',
    step_2_title: 'Обучение',
    step_2_desc: 'Настройка моделей под ваш бренд.',
    step_3_title: 'Запуск',
    step_3_desc: 'Простой код для вставки.',
    cta_title: 'Готовы автоматизировать рост?',
    cta_desc: 'Кастомные ИИ-чатботы для бизнеса — запуск за дни, а не месяцы.',
    cta_btn: 'Получить аудит',
    cta_footer: 'Кредитная карта не требуется.',
    fp_hero_badge: 'Технологии',
    fp_hero_title: 'Возможности разблокированы',
    fp_hero_desc: 'Изучите нейронную архитектуру BotForge. От понимания контекста до безопасности корпоративного уровня.',
    fp_s1_title: 'Контекстная память',
    fp_s1_desc: 'Наши боты помнят всё. С окном контекста 128k токенов агенты BotForge вспоминают предыдущие взаимодействия и предпочтения пользователей.',
    fp_s2_title: 'Адаптивный тон',
    fp_s2_desc: 'Формальный для банков, игривый для e-commerce. Наш движок адаптирует голос ИИ под ваш бренд.',
    fp_s3_title: 'Железная безопасность',
    fp_s3_desc: 'Спите спокойно. Мы внедряем детерминированные ограничения, предотвращающие галлюцинации и упоминание конкурентов.',
    // Proof of Value Slider (TODO: Translate)
    pov_badge: 'Data-Backed Results',
    pov_title: 'Proof of Value',
    pov_desc: 'Real statistics from industry research showing measurable ROI of AI-powered customer support.',
    pov_1_metric: '30%',
    pov_1_title: 'Cost Reduction',
    pov_1_desc: 'Chatbots reduce customer service costs by automating routine inquiries and reducing the need for large support teams.',
    pov_1_source: 'IBM / Chatbots Magazine',
    pov_2_metric: '$3.50',
    pov_2_title: 'ROI Per $1 Invested',
    pov_2_desc: 'AI-powered customer service delivers strong financial returns through efficiency gains and improved customer retention.',
    pov_2_source: 'KPMG',
    pov_3_metric: '37%',
    pov_3_title: 'Faster Response Time',
    pov_3_desc: 'AI chatbots provide instant responses, dramatically cutting wait times and improving the overall support experience.',
    pov_3_source: 'Gorgias',
    pov_4_metric: '27%',
    pov_4_title: 'Higher CSAT Scores',
    pov_4_desc: 'Faster resolutions, 24/7 availability, and consistent responses contribute to measurably higher customer satisfaction.',
    pov_4_source: 'Zowie',
    pov_5_metric: '80%',
    pov_5_title: 'Automated Inquiries',
    pov_5_desc: 'The majority of customer questions are repetitive—ideal candidates for AI automation, freeing human agents for complex issues.',
    pov_5_source: 'IBM / Gartner',
    pov_6_metric: '13.8%',
    pov_6_title: 'Agent Productivity Boost',
    pov_6_desc: 'AI assistance helps human agents work more efficiently with suggested responses and automated ticket routing.',
    pov_6_source: 'Plivo',
    pov_7_metric: '44%',
    pov_7_title: 'Faster Resolution',
    pov_7_desc: 'Automated handling of common questions and intelligent routing accelerates the entire resolution process.',
    pov_7_source: 'Plivo',
    pov_8_metric: '64%',
    pov_8_title: 'Value 24/7 Availability',
    pov_8_desc: 'Round-the-clock support meets modern customer expectations for instant assistance regardless of time zone.',
    pov_8_source: 'Fullview',
    pov_9_metric: '62%',
    pov_9_title: 'Prefer Chatbots',
    pov_9_desc: 'When given the choice between immediate AI assistance and waiting in queue, the majority choose speed.',
    pov_9_source: 'Tidio',
    pov_10_metric: '68%',
    pov_10_title: 'Peak Staffing Savings',
    pov_10_desc: 'AI chatbots provide elastic capacity that scales instantly during high-demand periods without hiring temporary staff.',
    pov_10_source: 'Plivo',
    pov_paused: 'Paused',
  },
  vi: {
    nav_features: 'Tính năng',
    nav_process: 'Cách hoạt động',
    nav_pricing: 'Bảng giá',
    nav_contact: 'Bắt đầu',
    hero_badge: 'Đang nhận khách hàng mới Q4',
    hero_title_1: 'Chatbot AI Tùy Chỉnh',
    hero_title_highlight: 'Dành Cho Doanh Nghiệp',
    hero_tagline: 'Chúng tôi tạo ra các chatbot AI phù hợp, hiểu rõ doanh nghiệp, nói tiếng nói thương hiệu và phục vụ khách hàng của bạn 24/7. Triển khai trong vài ngày, không phải vài tháng.',
    hero_cta_primary: 'Tạo Bot Ngay',
    hero_cta_secondary: 'Xem Tính Năng',
    stats_reply: 'Phản hồi tức thì',
    stats_reply_desc: 'Thời gian dưới 200ms.',
    stats_conversion: 'Chuyển đổi',
    stats_conversion_desc: '+40% tỷ lệ khách hàng.',
    stats_safe: 'An toàn thương hiệu',
    stats_safe_desc: 'Tuân thủ nghiêm ngặt.',
    features_eyebrow: 'Tại sao chọn BotForge?',
    features_title: 'Tương tác tốt hơn, tự động hóa.',
    feat_train_title: 'Huấn luyện riêng',
    feat_train_desc: 'Học từ tài liệu và FAQ của bạn.',
    feat_247_title: 'Hỗ trợ 24/7',
    feat_247_desc: 'Làm việc cả đêm và cuối tuần.',
    feat_rapid_title: 'Triển khai nhanh',
    feat_rapid_desc: 'Hoạt động chỉ sau 3 ngày.',
    process_title: 'Từ ý tưởng đến AI trong 3 bước',
    step_1_title: 'Tư vấn',
    step_1_desc: 'Phân tích nhu cầu doanh nghiệp.',
    step_2_title: 'Huấn luyện',
    step_2_desc: 'Tinh chỉnh mô hình theo thương hiệu.',
    step_3_title: 'Ra mắt',
    step_3_desc: 'Mã nhúng đơn giản, chạy ngay.',
    cta_title: 'Sẵn sàng tự động hóa?',
    cta_desc: 'Chatbot AI tùy chỉnh cho doanh nghiệp — triển khai trong vài ngày.',
    cta_btn: 'Nhận tư vấn miễn phí',
    cta_footer: 'Không cần thẻ tín dụng.',
    fp_hero_badge: 'Công nghệ',
    fp_hero_title: 'Mở Khóa Tiềm Năng',
    fp_hero_desc: 'Khám phá kiến trúc thần kinh của BotForge. Từ nhận thức ngữ cảnh đến bảo mật cấp doanh nghiệp.',
    fp_s1_title: 'Bộ nhớ ngữ cảnh',
    fp_s1_desc: 'Bot của chúng tôi không chỉ trả lời; chúng ghi nhớ. Với cửa sổ ngữ cảnh 128k token, BotForge nhớ các tương tác trước đó và sở thích người dùng.',
    fp_s2_title: 'Động cơ giọng điệu',
    fp_s2_desc: 'Trang trọng cho ngân hàng, vui tươi cho thương mại điện tử. AI điều chỉnh giọng điệu để phù hợp hoàn hảo với thương hiệu của bạn.',
    fp_s3_title: 'Hàng rào bảo mật',
    fp_s3_desc: 'Yên tâm tuyệt đối. Chúng tôi thiết lập các rào cản ngăn chặn ảo giác và chặn việc nhắc đến đối thủ cạnh tranh.',
    // Proof of Value Slider (TODO: Translate)
    pov_badge: 'Data-Backed Results',
    pov_title: 'Proof of Value',
    pov_desc: 'Real statistics from industry research showing measurable ROI of AI-powered customer support.',
    pov_1_metric: '30%',
    pov_1_title: 'Cost Reduction',
    pov_1_desc: 'Chatbots reduce customer service costs by automating routine inquiries and reducing the need for large support teams.',
    pov_1_source: 'IBM / Chatbots Magazine',
    pov_2_metric: '$3.50',
    pov_2_title: 'ROI Per $1 Invested',
    pov_2_desc: 'AI-powered customer service delivers strong financial returns through efficiency gains and improved customer retention.',
    pov_2_source: 'KPMG',
    pov_3_metric: '37%',
    pov_3_title: 'Faster Response Time',
    pov_3_desc: 'AI chatbots provide instant responses, dramatically cutting wait times and improving the overall support experience.',
    pov_3_source: 'Gorgias',
    pov_4_metric: '27%',
    pov_4_title: 'Higher CSAT Scores',
    pov_4_desc: 'Faster resolutions, 24/7 availability, and consistent responses contribute to measurably higher customer satisfaction.',
    pov_4_source: 'Zowie',
    pov_5_metric: '80%',
    pov_5_title: 'Automated Inquiries',
    pov_5_desc: 'The majority of customer questions are repetitive—ideal candidates for AI automation, freeing human agents for complex issues.',
    pov_5_source: 'IBM / Gartner',
    pov_6_metric: '13.8%',
    pov_6_title: 'Agent Productivity Boost',
    pov_6_desc: 'AI assistance helps human agents work more efficiently with suggested responses and automated ticket routing.',
    pov_6_source: 'Plivo',
    pov_7_metric: '44%',
    pov_7_title: 'Faster Resolution',
    pov_7_desc: 'Automated handling of common questions and intelligent routing accelerates the entire resolution process.',
    pov_7_source: 'Plivo',
    pov_8_metric: '64%',
    pov_8_title: 'Value 24/7 Availability',
    pov_8_desc: 'Round-the-clock support meets modern customer expectations for instant assistance regardless of time zone.',
    pov_8_source: 'Fullview',
    pov_9_metric: '62%',
    pov_9_title: 'Prefer Chatbots',
    pov_9_desc: 'When given the choice between immediate AI assistance and waiting in queue, the majority choose speed.',
    pov_9_source: 'Tidio',
    pov_10_metric: '68%',
    pov_10_title: 'Peak Staffing Savings',
    pov_10_desc: 'AI chatbots provide elastic capacity that scales instantly during high-demand periods without hiring temporary staff.',
    pov_10_source: 'Plivo',
    pov_paused: 'Paused',
  },
  id: {
    nav_features: 'Fitur',
    nav_process: 'Cara Kerja',
    nav_pricing: 'Harga',
    nav_contact: 'Mulai',
    hero_badge: 'Menerima klien baru Q4',
    hero_title_1: 'Chatbot AI Kustom',
    hero_title_highlight: 'Untuk Bisnis Anda',
    hero_tagline: 'Kami membuat chatbot AI khusus yang memahami bisnis Anda, berbicara dengan suara merek Anda, dan melayani pelanggan 24/7. Disebarkan dalam hitungan hari, bukan bulan.',
    hero_cta_primary: 'Buat Bot Saya',
    hero_cta_secondary: 'Lihat Fitur',
    stats_reply: 'Balasan Instan',
    stats_reply_desc: 'Respon di bawah 200ms.',
    stats_conversion: 'Konversi Penjualan',
    stats_conversion_desc: '+40% tingkat prospek.',
    stats_safe: 'Aman untuk Merek',
    stats_safe_desc: 'Standar keamanan ketat.',
    features_eyebrow: 'Mengapa BotForge?',
    features_title: 'Interaksi lebih baik, otomatis.',
    feat_train_title: 'Pelatihan Kustom',
    feat_train_desc: 'Dilatih dengan dokumen & FAQ Anda.',
    feat_247_title: 'Tersedia 24/7',
    feat_247_desc: 'Bekerja malam & akhir pekan.',
    feat_rapid_title: 'Penyebaran Cepat',
    feat_rapid_desc: 'Live di situs dalam 3 hari.',
    process_title: 'Dari Ide ke AI dalam 3 Langkah',
    step_1_title: 'Konsultasi',
    step_1_desc: 'Analisis kebutuhan bisnis.',
    step_2_title: 'Pelatihan',
    step_2_desc: 'Menyesuaikan model dengan merek.',
    step_3_title: 'Peluncuran',
    step_3_desc: 'Kode embed sederhana, langsung aktif.',
    cta_title: 'Siap untuk otomatisasi?',
    cta_desc: 'Chatbot AI kustom untuk bisnis — siap dalam hitungan hari.',
    cta_btn: 'Audit Gratis',
    cta_footer: 'Tanpa kartu kredit.',
    fp_hero_badge: 'Teknologi',
    fp_hero_title: 'Kapabilitas Terbuka',
    fp_hero_desc: 'Jelajahi arsitektur neural BotForge. Dari kesadaran konteks hingga keamanan tingkat perusahaan.',
    fp_s1_title: 'Memori Kontekstual',
    fp_s1_desc: 'Bot kami mengingat interaksi sebelumnya. Dengan jendela konteks 128k token, agen BotForge mengingat preferensi pengguna untuk dukungan yang personal.',
    fp_s2_title: 'Mesin Nada Adaptif',
    fp_s2_desc: 'Formal untuk bank, ceria untuk e-commerce. Lapisan transfer gaya kami menyesuaikan suara AI agar sesuai dengan merek Anda.',
    fp_s3_title: 'Keamanan Berlapis',
    fp_s3_desc: 'Tidur nyenyak mengetahui bot Anda aman. Kami menerapkan pagar pembatas deterministik yang mencegah halusinasi dan penyebutan pesaing.',
    // Proof of Value Slider (TODO: Translate)
    pov_badge: 'Data-Backed Results',
    pov_title: 'Proof of Value',
    pov_desc: 'Real statistics from industry research showing measurable ROI of AI-powered customer support.',
    pov_1_metric: '30%',
    pov_1_title: 'Cost Reduction',
    pov_1_desc: 'Chatbots reduce customer service costs by automating routine inquiries and reducing the need for large support teams.',
    pov_1_source: 'IBM / Chatbots Magazine',
    pov_2_metric: '$3.50',
    pov_2_title: 'ROI Per $1 Invested',
    pov_2_desc: 'AI-powered customer service delivers strong financial returns through efficiency gains and improved customer retention.',
    pov_2_source: 'KPMG',
    pov_3_metric: '37%',
    pov_3_title: 'Faster Response Time',
    pov_3_desc: 'AI chatbots provide instant responses, dramatically cutting wait times and improving the overall support experience.',
    pov_3_source: 'Gorgias',
    pov_4_metric: '27%',
    pov_4_title: 'Higher CSAT Scores',
    pov_4_desc: 'Faster resolutions, 24/7 availability, and consistent responses contribute to measurably higher customer satisfaction.',
    pov_4_source: 'Zowie',
    pov_5_metric: '80%',
    pov_5_title: 'Automated Inquiries',
    pov_5_desc: 'The majority of customer questions are repetitive—ideal candidates for AI automation, freeing human agents for complex issues.',
    pov_5_source: 'IBM / Gartner',
    pov_6_metric: '13.8%',
    pov_6_title: 'Agent Productivity Boost',
    pov_6_desc: 'AI assistance helps human agents work more efficiently with suggested responses and automated ticket routing.',
    pov_6_source: 'Plivo',
    pov_7_metric: '44%',
    pov_7_title: 'Faster Resolution',
    pov_7_desc: 'Automated handling of common questions and intelligent routing accelerates the entire resolution process.',
    pov_7_source: 'Plivo',
    pov_8_metric: '64%',
    pov_8_title: 'Value 24/7 Availability',
    pov_8_desc: 'Round-the-clock support meets modern customer expectations for instant assistance regardless of time zone.',
    pov_8_source: 'Fullview',
    pov_9_metric: '62%',
    pov_9_title: 'Prefer Chatbots',
    pov_9_desc: 'When given the choice between immediate AI assistance and waiting in queue, the majority choose speed.',
    pov_9_source: 'Tidio',
    pov_10_metric: '68%',
    pov_10_title: 'Peak Staffing Savings',
    pov_10_desc: 'AI chatbots provide elastic capacity that scales instantly during high-demand periods without hiring temporary staff.',
    pov_10_source: 'Plivo',
    pov_paused: 'Paused',
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof typeof translations['en']) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: keyof typeof translations['en']) => {
    return translations[language][key] || translations['en'][key];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};