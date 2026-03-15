const translations = {
    EN: {
        // Navbar
        nav: { news: 'News', tools: 'Tools', models: 'Models', mcp: 'MCP', brand: 'Brand Intel', search: 'Search', selectLang: 'Select Language', language: 'Language', toggleTheme: 'Toggle theme' },
        // Hero
        hero: {
            badge: 'Powered by AI Intelligence',
            title1: 'Your Gateway to',
            title2: 'AI Intelligence',
            desc: 'Discover 1000+ AI tools, stay updated with breaking news, compare models, and find the perfect AI solution for your needs — all in one place.',
            searchPlaceholder: 'Search AI tools, news, models...',
            searchBtn: 'AI Search',
            statTools: 'AI Tools', statNews: 'Daily News', statModels: 'AI Models', statMcp: 'MCP Servers',
        },
        // Home sections
        home: {
            featuredTitle: 'Featured', featuredHighlight: 'News', featuredSub: 'Top stories from the AI world', viewAll: 'View All',
            popularTitle: 'Most Popular', trending: 'TRENDING',
            toolsQuickTitle: 'Tools', toolsQuickHighlight: 'Quick Access', toolsQuickSub: 'Popular tools at your fingertips',
            rankingsTitle: 'Monthly', rankingsHighlight: 'Rankings', rankingsSub: 'Updated daily',
            rankTabs: { overall: 'Overall', image: 'Image', video: 'Video', devTools: 'Dev Tools' },
            makeMoneyTitle: 'Ways to', makeMoneyHighlight: 'Make Money', makeMoneyTitle2: 'with AI', makeMoneySub: 'Real case studies and earning potential',
        },
        // Tools page
        tools: {
            title: 'AI', titleHighlight: 'Tools', titleEnd: 'Directory',
            sub: 'Explore 20+ AI tools across every category',
            searchPlaceholder: 'Search tools...',
            filters: 'Filters', compare: 'Compare', aiRecommend: 'AI Recommend',
            allCategories: 'All', rating: 'Rating', tryNow: 'Try Now',
        },
        // News page
        news: {
            title: 'AI', titleHighlight: 'News', titleEnd: 'Hub',
            sub: 'Stay updated with the latest in artificial intelligence',
            searchPlaceholder: 'Search news...',
            latest: 'Latest', trending: 'Trending', research: 'Research', industry: 'Industry',
            readMore: 'Read More', minRead: 'min read', views: 'views',
            newsletterTitle: 'Subscribe to AI Newsletter',
            newsletterSub: 'Get weekly AI insights delivered to your inbox',
            emailPlaceholder: 'Enter your email', subscribe: 'Subscribe',
        },
        // Models page
        models: {
            title: 'AI', titleHighlight: 'Models', titleEnd: 'Explorer',
            sub: 'Compare and explore state-of-the-art AI models',
            searchPlaceholder: 'Search models...',
            allTypes: 'All', compare: 'Compare', benchmark: 'Benchmark',
            leaderboardTitle: 'Model Leaderboard',
            rank: 'Rank', model: 'Model', type: 'Type', params: 'Parameters', score: 'Score',
        },
        // MCP page
        mcp: {
            title: 'MCP', titleHighlight: 'Server', titleEnd: 'Directory',
            sub: 'Discover Model Context Protocol servers and integrations',
            searchPlaceholder: 'Search MCP servers...',
            allCategories: 'All', install: 'Install', docs: 'Docs',
        },
        // Brand page
        brand: {
            title: 'Brand', titleHighlight: 'Intelligence',
            sub: 'AI brand mention tracking and sentiment analysis dashboard',
            totalMentions: 'Total Mentions', positiveSentiment: 'Positive Sentiment',
            topPlatform: 'Top Platform', trendingTopics: 'Trending Topics',
            mentions: 'mentions', industryAvg: 'Industry avg',
            mentionVolume: 'Mention Volume Over Time', sentimentBreakdown: 'Sentiment Breakdown',
            competitorComparison: 'Competitor Comparison',
            trendingTopicsTitle: 'Trending Topics', recentMentions: 'Recent Mentions',
            positive: 'Positive', neutral: 'Neutral', negative: 'Negative',
            vsLastMonth: 'vs last month',
        },
        // Article detail
        article: { backToNews: '← Back to News', share: 'Share', relatedArticles: 'Related Articles', },
        // Footer
        footer: {
            desc: 'Your comprehensive AI intelligence platform. Discover tools, stay updated with news, and find the perfect AI solution.',
            product: 'Product', company: 'Company', resources: 'Resources',
            toolsDir: 'Tools Directory', newsHub: 'AI News Hub', modelsExplorer: 'Models Explorer', mcpDirectory: 'MCP Directory',
            aboutUs: 'About Us', careers: 'Careers', blog: 'Blog', contact: 'Contact',
            documentation: 'Documentation', apiReference: 'API Reference', community: 'Community', support: 'Support',
            rights: 'All rights reserved.', madeWith: 'Made with', forAI: 'for the AI community',
        },
        // Chat
        chat: { title: 'AI Assistant', subtitle: 'Powered by AI • Always Online', placeholder: 'Ask me anything about AI...', send: 'Send' },
        // Search modal
        search: { title: 'AI-Powered Search', placeholder: 'Search tools, news, models...', recentSearches: 'Recent Searches', suggestions: 'Suggestions', noResults: 'No results found', close: 'Close' },
        // Common
        common: { loading: 'Loading...', error: 'Error', free: 'Free', paid: 'Paid', freemium: 'Freemium', openSource: 'Open Source' },
    },
};

// Generate translations for other languages using key mapping
const langData = {
    ES: {
        nav: { news: 'Noticias', tools: 'Herramientas', models: 'Modelos', mcp: 'MCP', brand: 'Intel de Marca', search: 'Buscar', selectLang: 'Seleccionar Idioma', language: 'Idioma', toggleTheme: 'Cambiar tema' },
        hero: { badge: 'Impulsado por Inteligencia Artificial', title1: 'Tu Puerta a la', title2: 'Inteligencia Artificial', desc: 'Descubre más de 1000 herramientas de IA, mantente actualizado con noticias de última hora, compara modelos y encuentra la solución de IA perfecta — todo en un solo lugar.', searchPlaceholder: 'Buscar herramientas, noticias, modelos...', searchBtn: 'Búsqueda IA', statTools: 'Herramientas IA', statNews: 'Noticias Diarias', statModels: 'Modelos IA', statMcp: 'Servidores MCP' },
        home: { featuredTitle: 'Noticias', featuredHighlight: 'Destacadas', featuredSub: 'Principales historias del mundo de la IA', viewAll: 'Ver Todo', popularTitle: 'Más Popular', trending: 'TENDENCIA', toolsQuickTitle: 'Acceso', toolsQuickHighlight: 'Rápido', toolsQuickSub: 'Herramientas populares a tu alcance', rankingsTitle: 'Rankings', rankingsHighlight: 'Mensuales', rankingsSub: 'Actualizado diariamente', rankTabs: { overall: 'General', image: 'Imagen', video: 'Video', devTools: 'Dev' }, makeMoneyTitle: 'Formas de', makeMoneyHighlight: 'Ganar Dinero', makeMoneyTitle2: 'con IA', makeMoneySub: 'Casos reales y potencial de ganancias' },
        tools: { title: 'Directorio de', titleHighlight: 'Herramientas', titleEnd: 'IA', sub: 'Explora más de 20 herramientas de IA', searchPlaceholder: 'Buscar herramientas...', filters: 'Filtros', compare: 'Comparar', aiRecommend: 'IA Recomienda', allCategories: 'Todas', rating: 'Puntuación', tryNow: 'Probar' },
        news: { title: 'Centro de', titleHighlight: 'Noticias', titleEnd: 'IA', sub: 'Mantente al día con lo último en inteligencia artificial', searchPlaceholder: 'Buscar noticias...', latest: 'Últimas', trending: 'Tendencias', research: 'Investigación', industry: 'Industria', readMore: 'Leer Más', minRead: 'min lectura', views: 'vistas', newsletterTitle: 'Suscríbete al Boletín de IA', newsletterSub: 'Recibe información semanal de IA en tu correo', emailPlaceholder: 'Tu correo electrónico', subscribe: 'Suscribirse' },
        models: { title: 'Explorador de', titleHighlight: 'Modelos', titleEnd: 'IA', sub: 'Compara y explora modelos de IA de vanguardia', searchPlaceholder: 'Buscar modelos...', allTypes: 'Todos', compare: 'Comparar', benchmark: 'Benchmark', leaderboardTitle: 'Tabla de Clasificación', rank: 'Posición', model: 'Modelo', type: 'Tipo', params: 'Parámetros', score: 'Puntuación' },
        mcp: { title: 'Directorio de', titleHighlight: 'Servidores', titleEnd: 'MCP', sub: 'Descubre servidores e integraciones del Protocolo MCP', searchPlaceholder: 'Buscar servidores MCP...', allCategories: 'Todas', install: 'Instalar', docs: 'Docs' },
        brand: { title: 'Inteligencia de', titleHighlight: 'Marca', sub: 'Panel de seguimiento y análisis de sentimiento de marca IA', totalMentions: 'Menciones Totales', positiveSentiment: 'Sentimiento Positivo', topPlatform: 'Plataforma Principal', trendingTopics: 'Temas Tendencia', mentions: 'menciones', industryAvg: 'Promedio industria', mentionVolume: 'Volumen de Menciones', sentimentBreakdown: 'Desglose de Sentimiento', competitorComparison: 'Comparación de Competidores', trendingTopicsTitle: 'Temas Tendencia', recentMentions: 'Menciones Recientes', positive: 'Positivo', neutral: 'Neutral', negative: 'Negativo', vsLastMonth: 'vs mes anterior' },
        article: { backToNews: '← Volver a Noticias', share: 'Compartir', relatedArticles: 'Artículos Relacionados' },
        footer: { desc: 'Tu plataforma integral de inteligencia artificial.', product: 'Producto', company: 'Empresa', resources: 'Recursos', toolsDir: 'Directorio de Herramientas', newsHub: 'Centro de Noticias IA', modelsExplorer: 'Explorador de Modelos', mcpDirectory: 'Directorio MCP', aboutUs: 'Sobre Nosotros', careers: 'Carreras', blog: 'Blog', contact: 'Contacto', documentation: 'Documentación', apiReference: 'Referencia API', community: 'Comunidad', support: 'Soporte', rights: 'Todos los derechos reservados.', madeWith: 'Hecho con', forAI: 'para la comunidad IA' },
        chat: { title: 'Asistente IA', subtitle: 'Con IA • Siempre en línea', placeholder: 'Pregúntame sobre IA...', send: 'Enviar' },
        search: { title: 'Búsqueda con IA', placeholder: 'Buscar herramientas, noticias, modelos...', recentSearches: 'Búsquedas Recientes', suggestions: 'Sugerencias', noResults: 'Sin resultados', close: 'Cerrar' },
        common: { loading: 'Cargando...', error: 'Error', free: 'Gratis', paid: 'De pago', freemium: 'Freemium', openSource: 'Código Abierto' },
    },
    ZH: {
        nav: { news: '新闻', tools: '工具', models: '模型', mcp: 'MCP', brand: '品牌情报', search: '搜索', selectLang: '选择语言', language: '语言', toggleTheme: '切换主题' },
        hero: { badge: '由人工智能驱动', title1: '通往', title2: '人工智能的大门', desc: '发现1000+AI工具，获取最新新闻，比较模型，找到满足您需求的完美AI解决方案——一站式服务。', searchPlaceholder: '搜索AI工具、新闻、模型...', searchBtn: 'AI搜索', statTools: 'AI工具', statNews: '每日新闻', statModels: 'AI模型', statMcp: 'MCP服务器' },
        home: { featuredTitle: '精选', featuredHighlight: '新闻', featuredSub: 'AI世界的热门故事', viewAll: '查看全部', popularTitle: '最受欢迎', trending: '热门', toolsQuickTitle: '工具', toolsQuickHighlight: '快速访问', toolsQuickSub: '热门工具触手可及', rankingsTitle: '月度', rankingsHighlight: '排名', rankingsSub: '每日更新', rankTabs: { overall: '综合', image: '图像', video: '视频', devTools: '开发工具' }, makeMoneyTitle: '用AI', makeMoneyHighlight: '赚钱', makeMoneyTitle2: '的方法', makeMoneySub: '真实案例和收入潜力' },
        tools: { title: 'AI', titleHighlight: '工具', titleEnd: '目录', sub: '探索20+类别的AI工具', searchPlaceholder: '搜索工具...', filters: '筛选', compare: '对比', aiRecommend: 'AI推荐', allCategories: '全部', rating: '评分', tryNow: '试试看' },
        news: { title: 'AI', titleHighlight: '新闻', titleEnd: '中心', sub: '获取人工智能最新动态', searchPlaceholder: '搜索新闻...', latest: '最新', trending: '热门', research: '研究', industry: '行业', readMore: '阅读更多', minRead: '分钟阅读', views: '浏览', newsletterTitle: '订阅AI简报', newsletterSub: '每周AI洞察直达您的邮箱', emailPlaceholder: '输入邮箱', subscribe: '订阅' },
        models: { title: 'AI', titleHighlight: '模型', titleEnd: '探索器', sub: '比较和探索最先进的AI模型', searchPlaceholder: '搜索模型...', allTypes: '全部', compare: '对比', benchmark: '基准测试', leaderboardTitle: '模型排行榜', rank: '排名', model: '模型', type: '类型', params: '参数', score: '分数' },
        mcp: { title: 'MCP', titleHighlight: '服务器', titleEnd: '目录', sub: '发现模型上下文协议服务器和集成', searchPlaceholder: '搜索MCP服务器...', allCategories: '全部', install: '安装', docs: '文档' },
        brand: { title: '品牌', titleHighlight: '情报', sub: 'AI品牌提及追踪和情感分析仪表板', totalMentions: '总提及量', positiveSentiment: '积极情感', topPlatform: '主要平台', trendingTopics: '热门话题', mentions: '提及', industryAvg: '行业平均', mentionVolume: '提及量趋势', sentimentBreakdown: '情感分析', competitorComparison: '竞品对比', trendingTopicsTitle: '热门话题', recentMentions: '最新提及', positive: '积极', neutral: '中立', negative: '消极', vsLastMonth: '对比上月' },
        article: { backToNews: '← 返回新闻', share: '分享', relatedArticles: '相关文章' },
        footer: { desc: '您的综合AI情报平台。', product: '产品', company: '公司', resources: '资源', toolsDir: '工具目录', newsHub: 'AI新闻中心', modelsExplorer: '模型探索器', mcpDirectory: 'MCP目录', aboutUs: '关于我们', careers: '招聘', blog: '博客', contact: '联系', documentation: '文档', apiReference: 'API参考', community: '社区', support: '支持', rights: '版权所有。', madeWith: '用', forAI: '为AI社区制作' },
        chat: { title: 'AI助手', subtitle: 'AI驱动 • 全天候在线', placeholder: '问我关于AI的任何问题...', send: '发送' },
        search: { title: 'AI智能搜索', placeholder: '搜索工具、新闻、模型...', recentSearches: '最近搜索', suggestions: '建议', noResults: '未找到结果', close: '关闭' },
        common: { loading: '加载中...', error: '错误', free: '免费', paid: '付费', freemium: '免费增值', openSource: '开源' },
    },
    JA: {
        nav: { news: 'ニュース', tools: 'ツール', models: 'モデル', mcp: 'MCP', brand: 'ブランド情報', search: '検索', selectLang: '言語を選択', language: '言語', toggleTheme: 'テーマ切替' },
        hero: { badge: 'AI知能搭載', title1: 'AIへの', title2: 'ゲートウェイ', desc: '1000以上のAIツールを発見し、最新ニュースを入手、モデルを比較し、最適なAIソリューションを見つけましょう。', searchPlaceholder: 'AIツール、ニュース、モデルを検索...', searchBtn: 'AI検索', statTools: 'AIツール', statNews: 'デイリーニュース', statModels: 'AIモデル', statMcp: 'MCPサーバー' },
        home: { featuredTitle: '注目の', featuredHighlight: 'ニュース', featuredSub: 'AI世界のトップストーリー', viewAll: 'すべて見る', popularTitle: '人気', trending: 'トレンド', toolsQuickTitle: 'ツール', toolsQuickHighlight: 'クイックアクセス', toolsQuickSub: '人気ツールをすぐに', rankingsTitle: '月間', rankingsHighlight: 'ランキング', rankingsSub: '毎日更新', rankTabs: { overall: '総合', image: '画像', video: '動画', devTools: '開発ツール' }, makeMoneyTitle: 'AIで', makeMoneyHighlight: '稼ぐ', makeMoneyTitle2: '方法', makeMoneySub: '実例と収益ポテンシャル' },
        tools: { title: 'AI', titleHighlight: 'ツール', titleEnd: 'ディレクトリ', sub: '20以上のカテゴリのAIツールを探索', searchPlaceholder: 'ツールを検索...', filters: 'フィルター', compare: '比較', aiRecommend: 'AI推奨', allCategories: 'すべて', rating: '評価', tryNow: '試す' },
        news: { title: 'AI', titleHighlight: 'ニュース', titleEnd: 'ハブ', sub: '人工知能の最新情報を入手', searchPlaceholder: 'ニュースを検索...', latest: '最新', trending: 'トレンド', research: '研究', industry: '産業', readMore: '続きを読む', minRead: '分で読める', views: '閲覧', newsletterTitle: 'AIニュースレター登録', newsletterSub: '毎週のAI情報をお届け', emailPlaceholder: 'メールアドレス', subscribe: '登録' },
        models: { title: 'AI', titleHighlight: 'モデル', titleEnd: 'エクスプローラー', sub: '最先端AIモデルの比較と探索', searchPlaceholder: 'モデルを検索...', allTypes: 'すべて', compare: '比較', benchmark: 'ベンチマーク', leaderboardTitle: 'モデルランキング', rank: '順位', model: 'モデル', type: 'タイプ', params: 'パラメータ', score: 'スコア' },
        mcp: { title: 'MCP', titleHighlight: 'サーバー', titleEnd: 'ディレクトリ', sub: 'MCPサーバーと統合を発見', searchPlaceholder: 'MCPサーバーを検索...', allCategories: 'すべて', install: 'インストール', docs: 'ドキュメント' },
        brand: { title: 'ブランド', titleHighlight: 'インテリジェンス', sub: 'AIブランド言及追跡と感情分析ダッシュボード', totalMentions: '合計言及数', positiveSentiment: 'ポジティブ感情', topPlatform: 'トップ', trendingTopics: 'トレンドトピック', mentions: '言及', industryAvg: '業界平均', mentionVolume: '言及量の推移', sentimentBreakdown: '感情分析', competitorComparison: '競合比較', trendingTopicsTitle: 'トレンドトピック', recentMentions: '最近の言及', positive: 'ポジティブ', neutral: 'ニュートラル', negative: 'ネガティブ', vsLastMonth: '先月比' },
        article: { backToNews: '← ニュースに戻る', share: '共有', relatedArticles: '関連記事' },
        footer: { desc: '総合AIインテリジェンスプラットフォーム。', product: '製品', company: '会社', resources: 'リソース', toolsDir: 'ツールディレクトリ', newsHub: 'AIニュース', modelsExplorer: 'モデルエクスプローラー', mcpDirectory: 'MCPディレクトリ', aboutUs: '会社概要', careers: '採用', blog: 'ブログ', contact: 'お問合せ', documentation: 'ドキュメント', apiReference: 'APIリファレンス', community: 'コミュニティ', support: 'サポート', rights: '全著作権所有。', madeWith: '', forAI: 'AIコミュニティのために' },
        chat: { title: 'AIアシスタント', subtitle: 'AI搭載 • 常時オンライン', placeholder: 'AIについて何でも聞いてください...', send: '送信' },
        search: { title: 'AI検索', placeholder: 'ツール、ニュース、モデルを検索...', recentSearches: '最近の検索', suggestions: '候補', noResults: '結果なし', close: '閉じる' },
        common: { loading: '読み込み中...', error: 'エラー', free: '無料', paid: '有料', freemium: 'フリーミアム', openSource: 'オープンソース' },
    },
    FR: {
        nav: { news: 'Actualités', tools: 'Outils', models: 'Modèles', mcp: 'MCP', brand: 'Intel Marque', search: 'Rechercher', selectLang: 'Choisir la langue', language: 'Langue', toggleTheme: 'Changer le thème' },
        hero: { badge: "Propulsé par l'IA", title1: 'Votre Portail vers', title2: "l'Intelligence Artificielle", desc: "Découvrez plus de 1000 outils d'IA, restez informé des dernières nouvelles, comparez les modèles et trouvez la solution IA parfaite.", searchPlaceholder: 'Rechercher outils, actualités, modèles...', searchBtn: 'Recherche IA', statTools: 'Outils IA', statNews: 'Actualités', statModels: 'Modèles IA', statMcp: 'Serveurs MCP' },
        home: { featuredTitle: 'Actualités', featuredHighlight: 'Vedettes', featuredSub: "Les meilleures histoires du monde de l'IA", viewAll: 'Voir Tout', popularTitle: 'Plus Populaire', trending: 'TENDANCE', toolsQuickTitle: 'Accès', toolsQuickHighlight: 'Rapide', toolsQuickSub: 'Outils populaires à portée de main', rankingsTitle: 'Classements', rankingsHighlight: 'Mensuels', rankingsSub: 'Mis à jour quotidiennement', rankTabs: { overall: 'Général', image: 'Image', video: 'Vidéo', devTools: 'Dev' }, makeMoneyTitle: "Gagner de l'", makeMoneyHighlight: 'Argent', makeMoneyTitle2: "avec l'IA", makeMoneySub: 'Études de cas et potentiel de revenus' },
        tools: { title: "Répertoire d'", titleHighlight: 'Outils', titleEnd: 'IA', sub: "Explorez plus de 20 outils d'IA", searchPlaceholder: 'Rechercher des outils...', filters: 'Filtres', compare: 'Comparer', aiRecommend: 'IA Recommande', allCategories: 'Tous', rating: 'Note', tryNow: 'Essayer' },
        news: { title: 'Hub', titleHighlight: "d'Actualités", titleEnd: 'IA', sub: "Restez informé des dernières avancées en IA", searchPlaceholder: 'Rechercher des actualités...', latest: 'Récentes', trending: 'Tendances', research: 'Recherche', industry: 'Industrie', readMore: 'Lire Plus', minRead: 'min de lecture', views: 'vues', newsletterTitle: 'Newsletter IA', newsletterSub: 'Recevez les infos IA hebdomadaires', emailPlaceholder: 'Votre email', subscribe: "S'abonner" },
        models: { title: 'Explorateur de', titleHighlight: 'Modèles', titleEnd: 'IA', sub: 'Comparez et explorez les modèles IA de pointe', searchPlaceholder: 'Rechercher des modèles...', allTypes: 'Tous', compare: 'Comparer', benchmark: 'Benchmark', leaderboardTitle: 'Classement des Modèles', rank: 'Rang', model: 'Modèle', type: 'Type', params: 'Paramètres', score: 'Score' },
        mcp: { title: 'Répertoire', titleHighlight: 'Serveurs', titleEnd: 'MCP', sub: 'Découvrez les serveurs MCP et intégrations', searchPlaceholder: 'Rechercher serveurs MCP...', allCategories: 'Tous', install: 'Installer', docs: 'Docs' },
        brand: { title: 'Intelligence', titleHighlight: 'de Marque', sub: "Tableau de bord d'analyse de marque IA", totalMentions: 'Mentions Totales', positiveSentiment: 'Sentiment Positif', topPlatform: 'Plateforme Top', trendingTopics: 'Sujets Tendance', mentions: 'mentions', industryAvg: 'Moy. industrie', mentionVolume: 'Volume de Mentions', sentimentBreakdown: 'Analyse des Sentiments', competitorComparison: 'Comparaison Concurrents', trendingTopicsTitle: 'Sujets Tendance', recentMentions: 'Mentions Récentes', positive: 'Positif', neutral: 'Neutre', negative: 'Négatif', vsLastMonth: 'vs mois dernier' },
        article: { backToNews: '← Retour aux Actualités', share: 'Partager', relatedArticles: 'Articles Similaires' },
        footer: { desc: "Votre plateforme complète d'intelligence artificielle.", product: 'Produit', company: 'Entreprise', resources: 'Ressources', toolsDir: "Répertoire d'Outils", newsHub: 'Actualités IA', modelsExplorer: 'Explorateur de Modèles', mcpDirectory: 'Répertoire MCP', aboutUs: 'À propos', careers: 'Carrières', blog: 'Blog', contact: 'Contact', documentation: 'Documentation', apiReference: 'Référence API', community: 'Communauté', support: 'Support', rights: 'Tous droits réservés.', madeWith: 'Fait avec', forAI: "pour la communauté IA" },
        chat: { title: 'Assistant IA', subtitle: 'IA • Toujours en ligne', placeholder: "Posez-moi une question sur l'IA...", send: 'Envoyer' },
        search: { title: 'Recherche IA', placeholder: 'Rechercher outils, actualités, modèles...', recentSearches: 'Recherches Récentes', suggestions: 'Suggestions', noResults: 'Aucun résultat', close: 'Fermer' },
        common: { loading: 'Chargement...', error: 'Erreur', free: 'Gratuit', paid: 'Payant', freemium: 'Freemium', openSource: 'Open Source' },
    },
    DE: {
        nav: { news: 'Nachrichten', tools: 'Werkzeuge', models: 'Modelle', mcp: 'MCP', brand: 'Marken-Intel', search: 'Suchen', selectLang: 'Sprache wählen', language: 'Sprache', toggleTheme: 'Thema wechseln' },
        hero: { badge: 'Angetrieben von KI', title1: 'Ihr Tor zur', title2: 'Künstlichen Intelligenz', desc: 'Über 1000 KI-Tools entdecken, mit aktuellen Nachrichten informiert bleiben, Modelle vergleichen und die perfekte KI-Lösung finden.', searchPlaceholder: 'KI-Tools, Nachrichten, Modelle suchen...', searchBtn: 'KI-Suche', statTools: 'KI-Tools', statNews: 'Tägl. News', statModels: 'KI-Modelle', statMcp: 'MCP-Server' },
        home: { featuredTitle: 'Ausgewählte', featuredHighlight: 'Nachrichten', featuredSub: 'Top-Geschichten aus der KI-Welt', viewAll: 'Alle Anzeigen', popularTitle: 'Beliebteste', trending: 'TREND', toolsQuickTitle: 'Schnell', toolsQuickHighlight: 'Zugriff', toolsQuickSub: 'Beliebte Tools griffbereit', rankingsTitle: 'Monats', rankingsHighlight: 'Rankings', rankingsSub: 'Täglich aktualisiert', rankTabs: { overall: 'Gesamt', image: 'Bild', video: 'Video', devTools: 'Dev-Tools' }, makeMoneyTitle: 'Mit KI', makeMoneyHighlight: 'Geld verdienen', makeMoneyTitle2: '', makeMoneySub: 'Echte Fallstudien und Verdienstpotenzial' },
        tools: { title: 'KI', titleHighlight: 'Werkzeug', titleEnd: 'Verzeichnis', sub: 'Über 20 KI-Werkzeuge erkunden', searchPlaceholder: 'Werkzeuge suchen...', filters: 'Filter', compare: 'Vergleichen', aiRecommend: 'KI-Empfehlung', allCategories: 'Alle', rating: 'Bewertung', tryNow: 'Testen' },
        news: { title: 'KI', titleHighlight: 'Nachrichten', titleEnd: 'Hub', sub: 'Bleiben Sie über KI-Entwicklungen informiert', searchPlaceholder: 'Nachrichten suchen...', latest: 'Neueste', trending: 'Trends', research: 'Forschung', industry: 'Industrie', readMore: 'Weiterlesen', minRead: 'Min Lesezeit', views: 'Aufrufe', newsletterTitle: 'KI-Newsletter abonnieren', newsletterSub: 'Wöchentliche KI-Einblicke erhalten', emailPlaceholder: 'Ihre E-Mail', subscribe: 'Abonnieren' },
        models: { title: 'KI', titleHighlight: 'Modell', titleEnd: 'Explorer', sub: 'Modernste KI-Modelle vergleichen und erkunden', searchPlaceholder: 'Modelle suchen...', allTypes: 'Alle', compare: 'Vergleichen', benchmark: 'Benchmark', leaderboardTitle: 'Modell-Rangliste', rank: 'Rang', model: 'Modell', type: 'Typ', params: 'Parameter', score: 'Punktzahl' },
        mcp: { title: 'MCP', titleHighlight: 'Server', titleEnd: 'Verzeichnis', sub: 'MCP-Server und Integrationen entdecken', searchPlaceholder: 'MCP-Server suchen...', allCategories: 'Alle', install: 'Installieren', docs: 'Doku' },
        brand: { title: 'Marken', titleHighlight: 'Intelligenz', sub: 'KI-Markenerwähnungs- und Stimmungsanalyse-Dashboard', totalMentions: 'Gesamterwähnungen', positiveSentiment: 'Positive Stimmung', topPlatform: 'Top-Plattform', trendingTopics: 'Trending-Themen', mentions: 'Erwähnungen', industryAvg: 'Branchenschnitt', mentionVolume: 'Erwähnungsvolumen', sentimentBreakdown: 'Stimmungsanalyse', competitorComparison: 'Wettbewerbsvergleich', trendingTopicsTitle: 'Trending-Themen', recentMentions: 'Neueste Erwähnungen', positive: 'Positiv', neutral: 'Neutral', negative: 'Negativ', vsLastMonth: 'ggü. Vormonat' },
        article: { backToNews: '← Zurück zu Nachrichten', share: 'Teilen', relatedArticles: 'Verwandte Artikel' },
        footer: { desc: 'Ihre umfassende KI-Intelligenz-Plattform.', product: 'Produkt', company: 'Unternehmen', resources: 'Ressourcen', toolsDir: 'Werkzeug-Verzeichnis', newsHub: 'KI-Nachrichten', modelsExplorer: 'Modell-Explorer', mcpDirectory: 'MCP-Verzeichnis', aboutUs: 'Über uns', careers: 'Karriere', blog: 'Blog', contact: 'Kontakt', documentation: 'Dokumentation', apiReference: 'API-Referenz', community: 'Community', support: 'Support', rights: 'Alle Rechte vorbehalten.', madeWith: 'Gemacht mit', forAI: 'für die KI-Community' },
        chat: { title: 'KI-Assistent', subtitle: 'KI-gestützt • Immer online', placeholder: 'Fragen Sie mich etwas über KI...', send: 'Senden' },
        search: { title: 'KI-Suche', placeholder: 'Tools, Nachrichten, Modelle suchen...', recentSearches: 'Letzte Suchen', suggestions: 'Vorschläge', noResults: 'Keine Ergebnisse', close: 'Schließen' },
        common: { loading: 'Wird geladen...', error: 'Fehler', free: 'Kostenlos', paid: 'Kostenpflichtig', freemium: 'Freemium', openSource: 'Open Source' },
    },
    HI: {
        nav: { news: 'समाचार', tools: 'उपकरण', models: 'मॉडल', mcp: 'MCP', brand: 'ब्रांड इंटेल', search: 'खोजें', selectLang: 'भाषा चुनें', language: 'भाषा', toggleTheme: 'थीम बदलें' },
        hero: { badge: 'AI द्वारा संचालित', title1: 'AI की दुनिया का', title2: 'आपका द्वार', desc: '1000+ AI टूल खोजें, ताज़ा समाचार पाएं, मॉडल की तुलना करें और अपनी ज़रूरतों के लिए सही AI समाधान खोजें।', searchPlaceholder: 'AI टूल, समाचार, मॉडल खोजें...', searchBtn: 'AI खोज', statTools: 'AI उपकरण', statNews: 'दैनिक समाचार', statModels: 'AI मॉडल', statMcp: 'MCP सर्वर' },
        home: { featuredTitle: 'चुनिंदा', featuredHighlight: 'समाचार', featuredSub: 'AI दुनिया की शीर्ष कहानियाँ', viewAll: 'सभी देखें', popularTitle: 'सबसे लोकप्रिय', trending: 'ट्रेंडिंग', toolsQuickTitle: 'त्वरित', toolsQuickHighlight: 'पहुँच', toolsQuickSub: 'लोकप्रिय उपकरण आपकी उंगलियों पर', rankingsTitle: 'मासिक', rankingsHighlight: 'रैंकिंग', rankingsSub: 'रोज़ अपडेट', rankTabs: { overall: 'समग्र', image: 'छवि', video: 'वीडियो', devTools: 'डेव' }, makeMoneyTitle: 'AI से', makeMoneyHighlight: 'पैसे कमाएं', makeMoneyTitle2: '', makeMoneySub: 'वास्तविक केस स्टडी और कमाई की संभावना' },
        tools: { title: 'AI', titleHighlight: 'उपकरण', titleEnd: 'निर्देशिका', sub: '20+ श्रेणियों में AI उपकरण खोजें', searchPlaceholder: 'उपकरण खोजें...', filters: 'फ़िल्टर', compare: 'तुलना', aiRecommend: 'AI सुझाव', allCategories: 'सभी', rating: 'रेटिंग', tryNow: 'आज़माएं' },
        news: { title: 'AI', titleHighlight: 'समाचार', titleEnd: 'हब', sub: 'AI में नवीनतम अपडेट प्राप्त करें', searchPlaceholder: 'समाचार खोजें...', latest: 'नवीनतम', trending: 'ट्रेंडिंग', research: 'अनुसंधान', industry: 'उद्योग', readMore: 'और पढ़ें', minRead: 'मिनट पढ़ने का समय', views: 'दृश्य', newsletterTitle: 'AI न्यूज़लेटर सदस्यता', newsletterSub: 'साप्ताहिक AI जानकारी प्राप्त करें', emailPlaceholder: 'ईमेल दर्ज करें', subscribe: 'सदस्यता लें' },
        models: { title: 'AI', titleHighlight: 'मॉडल', titleEnd: 'एक्सप्लोरर', sub: 'अत्याधुनिक AI मॉडल की तुलना और खोज करें', searchPlaceholder: 'मॉडल खोजें...', allTypes: 'सभी', compare: 'तुलना', benchmark: 'बेंचमार्क', leaderboardTitle: 'मॉडल लीडरबोर्ड', rank: 'रैंक', model: 'मॉडल', type: 'प्रकार', params: 'पैरामीटर', score: 'स्कोर' },
        mcp: { title: 'MCP', titleHighlight: 'सर्वर', titleEnd: 'निर्देशिका', sub: 'MCP सर्वर और एकीकरण खोजें', searchPlaceholder: 'MCP सर्वर खोजें...', allCategories: 'सभी', install: 'इंस्टॉल', docs: 'दस्तावेज़' },
        brand: { title: 'ब्रांड', titleHighlight: 'इंटेलिजेंस', sub: 'AI ब्रांड उल्लेख ट्रैकिंग और भावना विश्लेषण', totalMentions: 'कुल उल्लेख', positiveSentiment: 'सकारात्मक भावना', topPlatform: 'शीर्ष प्लेटफ़ॉर्म', trendingTopics: 'ट्रेंडिंग विषय', mentions: 'उल्लेख', industryAvg: 'उद्योग औसत', mentionVolume: 'उल्लेख मात्रा', sentimentBreakdown: 'भावना विश्लेषण', competitorComparison: 'प्रतियोगी तुलना', trendingTopicsTitle: 'ट्रेंडिंग विषय', recentMentions: 'हाल के उल्लेख', positive: 'सकारात्मक', neutral: 'तटस्थ', negative: 'नकारात्मक', vsLastMonth: 'पिछले महीने से' },
        article: { backToNews: '← समाचार पर वापस', share: 'शेयर', relatedArticles: 'संबंधित लेख' },
        footer: { desc: 'आपका व्यापक AI प्लेटफ़ॉर्म।', product: 'उत्पाद', company: 'कंपनी', resources: 'संसाधन', toolsDir: 'उपकरण निर्देशिका', newsHub: 'AI समाचार', modelsExplorer: 'मॉडल एक्सप्लोरर', mcpDirectory: 'MCP निर्देशिका', aboutUs: 'हमारे बारे में', careers: 'करियर', blog: 'ब्लॉग', contact: 'संपर्क', documentation: 'दस्तावेज़ीकरण', apiReference: 'API संदर्भ', community: 'समुदाय', support: 'सहायता', rights: 'सर्वाधिकार सुरक्षित।', madeWith: 'बनाया गया', forAI: 'AI समुदाय के लिए' },
        chat: { title: 'AI सहायक', subtitle: 'AI संचालित • हमेशा ऑनलाइन', placeholder: 'AI के बारे में कुछ भी पूछें...', send: 'भेजें' },
        search: { title: 'AI खोज', placeholder: 'उपकरण, समाचार, मॉडल खोजें...', recentSearches: 'हाल की खोजें', suggestions: 'सुझाव', noResults: 'कोई परिणाम नहीं', close: 'बंद करें' },
        common: { loading: 'लोड हो रहा है...', error: 'त्रुटि', free: 'मुफ़्त', paid: 'सशुल्क', freemium: 'फ्रीमियम', openSource: 'ओपन सोर्स' },
    },
    AR: {
        nav: { news: 'أخبار', tools: 'أدوات', models: 'نماذج', mcp: 'MCP', brand: 'ذكاء العلامة', search: 'بحث', selectLang: 'اختر اللغة', language: 'اللغة', toggleTheme: 'تغيير السمة' },
        hero: { badge: 'مدعوم بالذكاء الاصطناعي', title1: 'بوابتك إلى', title2: 'الذكاء الاصطناعي', desc: 'اكتشف أكثر من 1000 أداة ذكاء اصطناعي، تابع آخر الأخبار، قارن النماذج وابحث عن الحل المثالي.', searchPlaceholder: 'البحث عن أدوات، أخبار، نماذج...', searchBtn: 'بحث ذكي', statTools: 'أدوات AI', statNews: 'أخبار يومية', statModels: 'نماذج AI', statMcp: 'خوادم MCP' },
        home: { featuredTitle: 'أخبار', featuredHighlight: 'مميزة', featuredSub: 'أبرز القصص من عالم الذكاء الاصطناعي', viewAll: 'عرض الكل', popularTitle: 'الأكثر شعبية', trending: 'رائج', toolsQuickTitle: 'وصول', toolsQuickHighlight: 'سريع', toolsQuickSub: 'أدوات شائعة في متناول يدك', rankingsTitle: 'تصنيفات', rankingsHighlight: 'شهرية', rankingsSub: 'تحديث يومي', rankTabs: { overall: 'عام', image: 'صور', video: 'فيديو', devTools: 'تطوير' }, makeMoneyTitle: 'اربح', makeMoneyHighlight: 'المال', makeMoneyTitle2: 'بالذكاء الاصطناعي', makeMoneySub: 'دراسات حالة حقيقية وإمكانات الربح' },
        tools: { title: 'دليل', titleHighlight: 'أدوات', titleEnd: 'الذكاء الاصطناعي', sub: 'استكشف أكثر من 20 أداة ذكاء اصطناعي', searchPlaceholder: 'البحث عن أدوات...', filters: 'تصفية', compare: 'مقارنة', aiRecommend: 'توصية AI', allCategories: 'الكل', rating: 'التقييم', tryNow: 'جرب الآن' },
        news: { title: 'مركز', titleHighlight: 'أخبار', titleEnd: 'الذكاء الاصطناعي', sub: 'ابقَ على اطلاع بأحدث تطورات الذكاء الاصطناعي', searchPlaceholder: 'البحث في الأخبار...', latest: 'الأحدث', trending: 'الرائج', research: 'أبحاث', industry: 'صناعة', readMore: 'اقرأ المزيد', minRead: 'دقائق قراءة', views: 'مشاهدات', newsletterTitle: 'اشترك في نشرة AI', newsletterSub: 'احصل على رؤى AI الأسبوعية', emailPlaceholder: 'بريدك الإلكتروني', subscribe: 'اشترك' },
        models: { title: 'مستكشف', titleHighlight: 'نماذج', titleEnd: 'الذكاء الاصطناعي', sub: 'قارن واستكشف أحدث نماذج الذكاء الاصطناعي', searchPlaceholder: 'البحث عن نماذج...', allTypes: 'الكل', compare: 'مقارنة', benchmark: 'معيار', leaderboardTitle: 'لوحة تصنيف النماذج', rank: 'المرتبة', model: 'النموذج', type: 'النوع', params: 'المعاملات', score: 'النتيجة' },
        mcp: { title: 'دليل', titleHighlight: 'خوادم', titleEnd: 'MCP', sub: 'اكتشف خوادم MCP والتكاملات', searchPlaceholder: 'البحث عن خوادم MCP...', allCategories: 'الكل', install: 'تثبيت', docs: 'وثائق' },
        brand: { title: 'ذكاء', titleHighlight: 'العلامة التجارية', sub: 'لوحة تحليل العلامة التجارية وتتبع الإشارات', totalMentions: 'إجمالي الإشارات', positiveSentiment: 'المشاعر الإيجابية', topPlatform: 'أفضل منصة', trendingTopics: 'مواضيع رائجة', mentions: 'إشارات', industryAvg: 'متوسط الصناعة', mentionVolume: 'حجم الإشارات', sentimentBreakdown: 'تحليل المشاعر', competitorComparison: 'مقارنة المنافسين', trendingTopicsTitle: 'مواضيع رائجة', recentMentions: 'إشارات حديثة', positive: 'إيجابي', neutral: 'محايد', negative: 'سلبي', vsLastMonth: 'مقابل الشهر الماضي' },
        article: { backToNews: '← العودة للأخبار', share: 'مشاركة', relatedArticles: 'مقالات ذات صلة' },
        footer: { desc: 'منصتك الشاملة للذكاء الاصطناعي.', product: 'المنتج', company: 'الشركة', resources: 'الموارد', toolsDir: 'دليل الأدوات', newsHub: 'أخبار AI', modelsExplorer: 'مستكشف النماذج', mcpDirectory: 'دليل MCP', aboutUs: 'من نحن', careers: 'وظائف', blog: 'مدونة', contact: 'اتصل بنا', documentation: 'التوثيق', apiReference: 'مرجع API', community: 'المجتمع', support: 'الدعم', rights: 'جميع الحقوق محفوظة.', madeWith: 'صنع بـ', forAI: 'لمجتمع الذكاء الاصطناعي' },
        chat: { title: 'مساعد AI', subtitle: 'مدعوم بـ AI • متصل دائماً', placeholder: 'اسألني أي شيء عن AI...', send: 'إرسال' },
        search: { title: 'بحث ذكي', placeholder: 'البحث عن أدوات، أخبار، نماذج...', recentSearches: 'عمليات بحث حديثة', suggestions: 'اقتراحات', noResults: 'لا توجد نتائج', close: 'إغلاق' },
        common: { loading: 'جاري التحميل...', error: 'خطأ', free: 'مجاني', paid: 'مدفوع', freemium: 'مجاني جزئياً', openSource: 'مفتوح المصدر' },
    },
};

// Merge EN as base, then overlay each language
Object.keys(langData).forEach(code => {
    translations[code] = langData[code];
});

export default translations;
