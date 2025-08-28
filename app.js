// Enhanced Application for Nouvelles Sherbrooke 24/7 - Dynamic & Interactive

// Application data with reordered categories (local first)
const appData = {
  "lastUpdate": "2025-08-28T19:50:00Z",
  "source": "Nouvelles Sherbrooke 24/7",
  "categories": [
    {
      "id": "local",
      "name": "Actualités locales",
      "icon": "🏛️", 
      "color": "#059669",
      "description": "Nouvelles de la ville et région",
      "subcategories": ["Politique municipale", "Développement urbain", "Services publics", "Communauté"]
    },
    {
      "id": "all",
      "name": "Toutes les actualités",
      "icon": "📰",
      "color": "#3b82f6",
      "description": "L'ensemble des nouvelles",
      "subcategories": ["Récentes", "Populaires", "Recommandées"]
    },
    {
      "id": "sports", 
      "name": "Sports",
      "icon": "⚽",
      "color": "#0891b2",
      "description": "Phoenix, Vert & Or et sports locaux",
      "subcategories": ["Phoenix de Sherbrooke", "Vert & Or", "Sports amateurs", "Événements"]
    },
    {
      "id": "culture",
      "name": "Culture & Événements",
      "icon": "🎭",
      "color": "#7c3aed", 
      "description": "Festivals, spectacles, expositions",
      "subcategories": ["Festivals", "Spectacles", "Expositions", "Vie nocturne"]
    },
    {
      "id": "economie",
      "name": "Économie",
      "icon": "💼",
      "color": "#ea580c",
      "description": "Entreprises, emploi, développement",
      "subcategories": ["Nouvelles entreprises", "Emploi", "Immobilier", "Startups"]
    },
    {
      "id": "education",
      "name": "Éducation",
      "icon": "🎓",
      "color": "#16a34a",
      "description": "Université, cégeps, écoles",
      "subcategories": ["Université de Sherbrooke", "Cégep", "Écoles primaires", "Formation continue"]
    },
    {
      "id": "shocking",
      "name": "Faits Divers",
      "icon": "⚠️",
      "color": "#dc2626",
      "description": "Événements marquants",
      "subcategories": ["Enquêtes policières", "Accidents", "Tribunaux", "Urgences"]
    }
  ],
  "news": [
    {
      "id": "local_001",
      "title": "Conseil municipal : adoption du nouveau règlement sur les terrasses",
      "summary": "La Ville de Sherbrooke facilite l'installation de terrasses pour les restaurateurs du centre-ville avec de nouvelles mesures d'assouplissement.",
      "content": "Le conseil municipal a adopté à l'unanimité un nouveau règlement permettant aux restaurants du centre-ville d'installer plus facilement des terrasses saisonnières. Cette mesure vise à dynamiser le secteur de la restauration locale et à améliorer l'expérience des citoyens en centre-ville.",
      "category": "local",
      "priority": "high",
      "timestamp": "2025-08-28T15:30:00Z",
      "source": "Ville de Sherbrooke",
      "location": "Centre-ville de Sherbrooke",
      "image": "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=400&fit=crop",
      "breaking": true,
      "likes": 127,
      "comments": 23,
      "views": 1542,
      "readTime": "3 min"
    },
    {
      "id": "local_002", 
      "title": "Nouveau parc canin inauguré dans le secteur Jacques-Cartier",
      "summary": "Un espace de 5000 m² dédié aux chiens et leurs propriétaires ouvre officiellement ce weekend avec aires de jeux et parcours d'agilité.",
      "content": "La Ville de Sherbrooke inaugure son plus grand parc canin situé près du parc Jacques-Cartier. L'espace comprend des zones séparées pour petits et grands chiens, des parcours d'agilité et des équipements pour les propriétaires.",
      "category": "local",
      "priority": "normal",
      "timestamp": "2025-08-28T12:00:00Z",
      "source": "La Tribune",
      "location": "Secteur Jacques-Cartier",
      "image": "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&h=400&fit=crop",
      "breaking": false,
      "likes": 89,
      "comments": 15,
      "views": 892,
      "readTime": "2 min"
    },
    {
      "id": "sports_001",
      "title": "Phoenix de Sherbrooke : signature d'un espoir européen de 17 ans",
      "summary": "L'équipe sherbrookoise fait l'acquisition d'un jeune défenseur tchèque très prometteur pour renforcer sa brigade défensive.",
      "content": "Le Phoenix de Sherbrooke annonce la signature de Tomáš Novák, un défenseur tchèque de 17 ans repêché récemment. Ce jeune talent européen devrait apporter de la profondeur à la formation sherbrookoise.",
      "category": "sports",
      "priority": "normal",
      "timestamp": "2025-08-28T14:15:00Z",
      "source": "Le Sherbrooke.info",
      "location": "Palais des Sports",
      "image": "https://images.unsplash.com/photo-1578867109908-4e06ff89d4e6?w=800&h=400&fit=crop",
      "breaking": false,
      "likes": 156,
      "comments": 34,
      "views": 2103,
      "readTime": "4 min"
    },
    {
      "id": "culture_001",
      "title": "Sherbrooke accueillera le Festival international du film documentaire en 2026",
      "summary": "La ville est choisie pour organiser la première édition québécoise de ce prestigieux événement cinématographique international.",
      "content": "Sherbrooke a été sélectionnée parmi plusieurs villes canadiennes pour accueillir la première édition québécoise du Festival international du film documentaire. L'événement se déroulera au centre-ville en mai 2026.",
      "category": "culture",
      "priority": "high",
      "timestamp": "2025-08-28T11:30:00Z",
      "source": "EstrieePlus.com",
      "location": "Centre-ville de Sherbrooke",
      "image": "https://images.unsplash.com/photo-1489599117607-48fb9c0d8f60?w=800&h=400&fit=crop",
      "breaking": true,
      "likes": 234,
      "comments": 47,
      "views": 3156,
      "readTime": "5 min"
    },
    {
      "id": "economie_001",
      "title": "Boom technologique : 3 nouvelles startups s'installent au Carrefour de l'innovation",
      "summary": "Le secteur tech sherbrookois continue sa croissance avec l'arrivée de trois jeunes entreprises spécialisées en IA et robotique.",
      "content": "Le Carrefour de l'innovation de l'Université de Sherbrooke accueille trois nouvelles startups prometteuses. Ces entreprises, spécialisées en intelligence artificielle et robotique, créeront une cinquantaine d'emplois hautement qualifiés.",
      "category": "economie",
      "priority": "high",
      "timestamp": "2025-08-28T10:45:00Z",
      "source": "Innovation Sherbrooke",
      "location": "Université de Sherbrooke",
      "image": "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop",
      "breaking": false,
      "likes": 178,
      "comments": 29,
      "views": 1876,
      "readTime": "3 min"
    },
    {
      "id": "education_001",
      "title": "UdeS : nouveau laboratoire de réalité virtuelle inauguré en génie",
      "summary": "Un investissement de 2,8M$ permet à la Faculté de génie de se doter d'équipements de pointe en réalité virtuelle et augmentée.",
      "content": "L'Université de Sherbrooke inaugure un laboratoire ultramoderne de réalité virtuelle au sein de sa Faculté de génie. Ces nouveaux équipements permettront aux étudiants de travailler sur des projets innovants en collaboration avec l'industrie.",
      "category": "education",
      "priority": "normal",
      "timestamp": "2025-08-28T09:20:00Z",
      "source": "UdeS Communications",
      "location": "Campus de l'Université",
      "image": "https://images.unsplash.com/photo-1592659762303-90081d34b277?w=800&h=400&fit=crop",
      "breaking": false,
      "likes": 203,
      "comments": 18,
      "views": 1432,
      "readTime": "4 min"
    }
  ],
  "trending_topics": [
    "Terrasses centre-ville",
    "Phoenix signature", 
    "Festival documentaire",
    "Parc canin",
    "Startups tech",
    "Laboratoire VR"
  ],
  "live_stats": {
    "current_visitors": 1247,
    "articles_read_today": 8934,
    "most_popular": "Festival international du film documentaire",
    "breaking_count": 2
  },
  "local_weather": {
    "temperature": "22°C",
    "condition": "Partiellement nuageux",
    "feels_like": "24°C",
    "humidity": "65%"
  },
  "quick_links": [
    {"name": "🏛️ Ville de Sherbrooke", "url": "https://www.sherbrooke.ca"},
    {"name": "🎓 Université de Sherbrooke", "url": "https://www.usherbrooke.ca"},
    {"name": "🏒 Phoenix de Sherbrooke", "url": "https://phoenixsherbrooke.com"},
    {"name": "🚌 Transport STS", "url": "https://www.sts.qc.ca"},
    {"name": "🌄 Tourisme Sherbrooke", "url": "https://www.destinationsherbrooke.com"},
    {"name": "🏥 Hôpital CHUS", "url": "https://www.santeestrie.qc.ca"},
    {"name": "🗺️ Google Maps Sherbrooke", "url": "https://maps.google.com/maps?q=Sherbrooke,QC"},
    {"name": "🌤️ Météo Sherbrooke", "url": "https://weather.gc.ca/city/pages/qc-30_metric_e.html"}
  ],
  "events_this_weekend": [
    "🛍️ Marché de la gare - Samedi 9h",
    "🎵 Concert au Parc Quintal - Dimanche 14h", 
    "🏛️ Visite guidée du Musée - Samedi 13h",
    "🏒 Match Phoenix vs Rimouski - Dimanche 19h"
  ],
  "ticker_messages": [
    "🏛️ Nouveau règlement terrasses adopté au conseil municipal",
    "🐕 Inauguration du parc canin Jacques-Cartier ce weekend",
    "🏒 Phoenix signe un jeune espoir européen de 17 ans",
    "🎬 Sherbrooke accueillera le Festival du film documentaire 2026",
    "💼 3 nouvelles startups tech au Carrefour de l'innovation",
    "🎓 Nouveau labo VR inauguré à l'Université de Sherbrooke"
  ]
};

// Application state
let currentCategory = 'local'; // Changed default to local
let currentNews = [];
let sensitiveContentRevealed = false;
let currentFilter = 'recent';
let savedArticles = [];
let likedArticles = [];
let isDarkMode = false;
let currentLanguage = 'fr';
let pollVoted = false;
let liveStats = { ...appData.live_stats };

// Utility functions
function formatDate(timestamp) {
  const date = new Date(timestamp);
  const now = new Date();
  const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
  
  if (diffInHours < 1) {
    return 'il y a moins d\'une heure';
  } else if (diffInHours < 24) {
    return `il y a ${diffInHours} heure${diffInHours > 1 ? 's' : ''}`;
  } else {
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) {
      return `il y a ${diffInDays} jour${diffInDays > 1 ? 's' : ''}`;
    } else {
      return date.toLocaleDateString('fr-CA', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }
  }
}

function formatDateTime(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleDateString('fr-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

function animateNumber(element, start, end, duration = 2000) {
  const range = end - start;
  const increment = range / (duration / 16);
  let current = start;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= end) {
      current = end;
      clearInterval(timer);
    }
    element.textContent = Math.floor(current).toLocaleString();
  }, 16);
}

// Live features
function updateLiveTime() {
  const timeElement = document.getElementById('live-time');
  if (timeElement) {
    const now = new Date();
    const timeString = now.toLocaleTimeString('fr-CA', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    timeString.textContent = `⏰ ${timeString}`;
  }
}

function updateVisitorCount() {
  const visitorElement = document.getElementById('visitor-count');
  const liveVisitorElement = document.getElementById('live-visitors');
  
  // Simulate live visitor count changes
  liveStats.current_visitors += Math.floor(Math.random() * 10) - 5;
  liveStats.current_visitors = Math.max(1000, liveStats.current_visitors);
  
  if (visitorElement) {
    visitorElement.textContent = liveStats.current_visitors.toLocaleString();
  }
  if (liveVisitorElement) {
    liveVisitorElement.textContent = liveStats.current_visitors.toLocaleString();
  }
}

function updateArticlesRead() {
  const articlesElement = document.getElementById('articles-read');
  
  // Simulate articles being read
  liveStats.articles_read_today += Math.floor(Math.random() * 3);
  
  if (articlesElement) {
    animateNumber(articlesElement, liveStats.articles_read_today - 10, liveStats.articles_read_today);
  }
}

// Initialize ticker
function initTicker() {
  const tickerContent = document.getElementById('ticker-content');
  if (!tickerContent) return;
  
  tickerContent.innerHTML = appData.ticker_messages
    .map(message => `<span class="ticker__item">${message}</span>`)
    .join('');
}

// Initialize categories
function initCategories() {
  const categoriesGrid = document.getElementById('categories-grid');
  if (!categoriesGrid) return;
  
  categoriesGrid.innerHTML = appData.categories.map(category => {
    const newsCount = category.id === 'all' 
      ? appData.news.length 
      : appData.news.filter(news => news.category === category.id).length;
    
    const isWarning = category.id === 'shocking';
    
    return `
      <div class="category-card ${isWarning ? 'category-card--warning' : ''} ${category.id === currentCategory ? 'active' : ''}" 
           data-category="${category.id}">
        <span class="category-card__icon">${category.icon}</span>
        <h3 class="category-card__name">${category.name}</h3>
        <p class="category-card__description">${category.description}</p>
        <span class="category-card__count">${newsCount} article${newsCount !== 1 ? 's' : ''}</span>
      </div>
    `;
  }).join('');
}

// Initialize sidebar widgets
function initSidebar() {
  // Trending topics
  const trendingList = document.getElementById('trending-list');
  if (trendingList) {
    trendingList.innerHTML = appData.trending_topics
      .map(topic => `<div class="trending-item">#${topic}</div>`)
      .join('');
  }
  
  // Events this weekend
  const eventsList = document.getElementById('events-list');
  if (eventsList) {
    eventsList.innerHTML = appData.events_this_weekend
      .map(event => `<div class="event-item">${event}</div>`)
      .join('');
  }
  
  // Quick links
  const quickLinks = document.getElementById('quick-links');
  if (quickLinks) {
    quickLinks.innerHTML = appData.quick_links
      .map(link => `<a href="${link.url}" target="_blank" class="quick-link">${link.name}</a>`)
      .join('');
  }
}

// Theme toggle
function toggleTheme() {
  isDarkMode = !isDarkMode;
  const themeToggle = document.getElementById('theme-toggle');
  
  if (isDarkMode) {
    document.documentElement.setAttribute('data-color-scheme', 'dark');
    if (themeToggle) themeToggle.textContent = '☀️ Mode clair';
  } else {
    document.documentElement.setAttribute('data-color-scheme', 'light');
    if (themeToggle) themeToggle.textContent = '🌙 Mode sombre';
  }
}

// Language toggle
function toggleLanguage() {
  currentLanguage = currentLanguage === 'fr' ? 'en' : 'fr';
  const langToggle = document.getElementById('lang-toggle');
  
  if (langToggle) {
    langToggle.textContent = currentLanguage === 'fr' ? 'EN' : 'FR';
  }
  
  // In a real app, this would trigger translation
  showNotification(`Langue changée vers ${currentLanguage === 'fr' ? 'Français' : 'English'}`);
}

// Search functionality
function initSearch() {
  const searchInput = document.getElementById('search-input');
  const searchSuggestions = document.getElementById('search-suggestions');
  
  if (!searchInput || !searchSuggestions) return;
  
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    
    if (query.length < 2) {
      searchSuggestions.classList.add('hidden');
      return;
    }
    
    const suggestions = appData.news
      .filter(news => 
        news.title.toLowerCase().includes(query) || 
        news.summary.toLowerCase().includes(query)
      )
      .slice(0, 5)
      .map(news => `
        <div class="search-suggestion" data-news-id="${news.id}">
          <strong>${news.title}</strong>
          <div style="font-size: 12px; color: var(--color-text-secondary);">${news.summary.substring(0, 100)}...</div>
        </div>
      `);
    
    if (suggestions.length > 0) {
      searchSuggestions.innerHTML = suggestions.join('');
      searchSuggestions.classList.remove('hidden');
    } else {
      searchSuggestions.classList.add('hidden');
    }
  });
  
  // Hide suggestions when clicking outside
  document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !searchSuggestions.contains(e.target)) {
      searchSuggestions.classList.add('hidden');
    }
  });
}

// Filter functions
function applyFilter(filter) {
  currentFilter = filter;
  
  // Update filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    if (btn.dataset.filter === filter) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  
  updateNewsList();
}

// Category selection
function selectCategory(categoryId) {
  currentCategory = categoryId;
  
  // Update category selection UI
  const cards = document.querySelectorAll('.category-card');
  cards.forEach(card => {
    if (card.dataset.category === currentCategory) {
      card.classList.add('active');
    } else {
      card.classList.remove('active');
    }
  });
  
  // Update section title
  const sectionTitle = document.getElementById('section-title');
  const category = appData.categories.find(cat => cat.id === currentCategory);
  if (sectionTitle && category) {
    sectionTitle.textContent = category.name;
  }
  
  updateNewsList();
}

// Update news list with filters
function updateNewsList() {
  let filteredNews = [];
  
  if (currentCategory === 'all') {
    filteredNews = [...appData.news];
  } else {
    filteredNews = appData.news.filter(news => news.category === currentCategory);
  }
  
  // Apply filters
  switch (currentFilter) {
    case 'recent':
      filteredNews.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
      break;
    case 'popular':
      filteredNews.sort((a, b) => (b.views || 0) - (a.views || 0));
      break;
    case 'breaking':
      filteredNews = filteredNews.filter(news => news.breaking);
      break;
    case 'saved':
      filteredNews = filteredNews.filter(news => savedArticles.includes(news.id));
      break;
  }
  
  currentNews = filteredNews;
  renderNews();
  updateNewsCount();
}

// Update news count
function updateNewsCount() {
  const newsCount = document.getElementById('news-count');
  if (newsCount) {
    const count = currentNews.length;
    newsCount.textContent = `${count} article${count !== 1 ? 's' : ''}`;
  }
}

// Render news
function renderNews() {
  const newsGrid = document.getElementById('news-grid');
  if (!newsGrid) return;
  
  if (currentNews.length === 0) {
    newsGrid.innerHTML = '<p class="text-center">Aucune actualité disponible dans cette catégorie.</p>';
    return;
  }
  
  newsGrid.innerHTML = currentNews.map(news => {
    const category = appData.categories.find(cat => cat.id === news.category);
    const isLiked = likedArticles.includes(news.id);
    const isSaved = savedArticles.includes(news.id);
    
    return `
      <article class="news-card" data-news-id="${news.id}">
        ${news.breaking ? '<span class="news-card__breaking">Dernière heure</span>' : ''}
        <img class="news-card__image" src="${news.image}" alt="${news.title}" loading="lazy" />
        <div class="news-card__content">
          <div class="news-card__meta">
            <span class="news-card__category category-${news.category}" style="background-color: ${category?.color || '#3b82f6'}">${category?.icon || '📰'} ${category?.name || 'Actualités'}</span>
            <span class="news-card__date">${formatDate(news.timestamp)}</span>
            <span class="news-card__reading-time">⏱️ ${news.readTime || '3 min'}</span>
          </div>
          <h3 class="news-card__title">${news.title}</h3>
          <p class="news-card__summary">${news.summary}</p>
          <div class="news-card__engagement">
            <span class="engagement-stat">👀 ${news.views || 0}</span>
            <span class="engagement-stat ${isLiked ? 'liked' : ''}">👍 ${news.likes || 0}</span>
            <span class="engagement-stat">💬 ${news.comments || 0}</span>
            ${isSaved ? '<span class="saved-indicator">🔖</span>' : ''}
          </div>
          <div class="news-card__source">${news.source} • 📍 ${news.location}</div>
        </div>
      </article>
    `;
  }).join('');
}

// Show news modal with enhanced engagement
function showNewsModal(news) {
  const modal = document.getElementById('news-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalCategory = document.getElementById('modal-category');
  const modalDate = document.getElementById('modal-date');
  const modalSource = document.getElementById('modal-source');
  const modalLocation = document.getElementById('modal-location');
  const modalImage = document.getElementById('modal-image');
  const modalContent = document.getElementById('modal-content');
  const modalViews = document.getElementById('modal-views');
  const modalLikes = document.getElementById('modal-likes');
  const modalComments = document.getElementById('modal-comments');
  const modalReadingTime = document.getElementById('modal-reading-time');
  
  if (!modal) return;
  
  const category = appData.categories.find(cat => cat.id === news.category);
  
  if (modalTitle) modalTitle.textContent = news.title;
  if (modalCategory) {
    modalCategory.textContent = `${category?.icon || '📰'} ${category?.name || 'Actualités'}`;
    modalCategory.style.backgroundColor = category?.color || '#3b82f6';
  }
  if (modalDate) modalDate.textContent = formatDateTime(news.timestamp);
  if (modalSource) modalSource.textContent = `Source: ${news.source}`;
  if (modalLocation) modalLocation.textContent = `📍 ${news.location}`;
  if (modalImage) {
    modalImage.src = news.image;
    modalImage.alt = news.title;
  }
  if (modalContent) modalContent.textContent = news.content;
  if (modalViews) modalViews.textContent = `👀 ${news.views || 0} vues`;
  if (modalLikes) modalLikes.textContent = `👍 ${news.likes || 0} j'aime`;
  if (modalComments) modalComments.textContent = `💬 ${news.comments || 0} commentaires`;
  if (modalReadingTime) modalReadingTime.textContent = `⏱️ ${news.readTime || '3 min'} de lecture`;
  
  // Update engagement buttons
  const likeBtn = document.getElementById('like-btn');
  const saveBtn = document.getElementById('save-btn');
  
  if (likeBtn) {
    likeBtn.textContent = likedArticles.includes(news.id) ? '👍 Aimé' : '👍 J\'aime';
    likeBtn.classList.toggle('liked', likedArticles.includes(news.id));
  }
  
  if (saveBtn) {
    saveBtn.textContent = savedArticles.includes(news.id) ? '🔖 Sauvegardé' : '🔖 Sauvegarder';
    saveBtn.classList.toggle('saved', savedArticles.includes(news.id));
  }
  
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  
  // Increment view count
  news.views = (news.views || 0) + 1;
  updateArticlesRead();
}

// Hide modal
function hideModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
  
  // Hide share options
  const shareOptions = document.getElementById('share-options');
  if (shareOptions) {
    shareOptions.classList.add('hidden');
  }
}

// Engagement actions
function toggleLike(newsId) {
  const news = appData.news.find(n => n.id === newsId);
  if (!news) return;
  
  const index = likedArticles.indexOf(newsId);
  if (index > -1) {
    likedArticles.splice(index, 1);
    news.likes = Math.max(0, (news.likes || 0) - 1);
  } else {
    likedArticles.push(newsId);
    news.likes = (news.likes || 0) + 1;
  }
  
  showNotification(index > -1 ? 'J\'aime retiré' : 'Article aimé!');
  updateNewsList(); // Refresh to show updated like count
}

function toggleSave(newsId) {
  const index = savedArticles.indexOf(newsId);
  if (index > -1) {
    savedArticles.splice(index, 1);
    showNotification('Article retiré des favoris');
  } else {
    savedArticles.push(newsId);
    showNotification('Article sauvegardé!');
  }
  
  updateNewsList(); // Refresh to show saved indicator
}

function showShareOptions() {
  const shareOptions = document.getElementById('share-options');
  if (shareOptions) {
    shareOptions.classList.toggle('hidden');
  }
}

// Share functions
function shareToWhatsApp() {
  const url = window.location.href;
  window.open(`https://wa.me/?text=${encodeURIComponent(url)}`, '_blank');
}

function shareToEmail() {
  const subject = 'Actualité intéressante de Sherbrooke';
  const body = `Je pense que cet article pourrait t'intéresser: ${window.location.href}`;
  window.open(`mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
}

function copyLink() {
  navigator.clipboard.writeText(window.location.href).then(() => {
    showNotification('Lien copié dans le presse-papiers!');
  });
}

// Poll functionality
function vote(option) {
  if (pollVoted) {
    showNotification('Vous avez déjà voté!');
    return;
  }
  
  pollVoted = true;
  document.querySelectorAll('.poll-option').forEach(btn => {
    btn.disabled = true;
    if (btn.dataset.vote === option) {
      btn.style.background = 'var(--color-primary)';
      btn.style.color = 'white';
    }
  });
  
  showNotification(`Merci pour votre vote: ${option}!`);
}

// Notification system
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: var(--color-primary);
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    box-shadow: var(--shadow-lg);
    z-index: 9999;
    animation: slideIn 0.3s ease;
  `;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// Content warning
function showContentWarning() {
  const warning = document.getElementById('content-warning');
  if (warning) {
    warning.classList.remove('hidden');
  }
}

function hideContentWarning() {
  const warning = document.getElementById('content-warning');
  if (warning) {
    warning.classList.add('hidden');
  }
}

// Initialize application
function init() {
  initTicker();
  initCategories();
  initSidebar();
  initSearch();
  
  // Set up intervals for live updates
  setInterval(updateLiveTime, 1000);
  setInterval(updateVisitorCount, 10000); // Every 10 seconds
  setInterval(updateArticlesRead, 30000); // Every 30 seconds
  
  // Update last update time
  const lastUpdateElement = document.getElementById('last-update');
  if (lastUpdateElement) {
    lastUpdateElement.textContent = formatDate(appData.lastUpdate);
  }
  
  // Initial live time update
  updateLiveTime();
  
  // Event delegation for all interactive elements
  document.addEventListener('click', function(event) {
    const target = event.target;
    const closest = target.closest.bind(target);
    
    // Category clicks
    const categoryCard = closest('.category-card');
    if (categoryCard) {
      event.preventDefault();
      const categoryId = categoryCard.dataset.category;
      
      if (categoryId === 'shocking' && !sensitiveContentRevealed) {
        showContentWarning();
        return;
      }
      
      selectCategory(categoryId);
      return;
    }
    
    // News card clicks
    const newsCard = closest('.news-card');
    if (newsCard && !closest('.engagement-stat')) {
      event.preventDefault();
      const newsId = newsCard.dataset.newsId;
      const news = appData.news.find(n => n.id === newsId);
      if (news) showNewsModal(news);
      return;
    }
    
    // Filter buttons
    const filterBtn = closest('.filter-btn');
    if (filterBtn) {
      event.preventDefault();
      applyFilter(filterBtn.dataset.filter);
      return;
    }
    
    // Search suggestions
    const searchSuggestion = closest('.search-suggestion');
    if (searchSuggestion) {
      event.preventDefault();
      const newsId = searchSuggestion.dataset.newsId;
      const news = appData.news.find(n => n.id === newsId);
      if (news) showNewsModal(news);
      document.getElementById('search-suggestions')?.classList.add('hidden');
      return;
    }
    
    // Poll options
    const pollOption = closest('.poll-option');
    if (pollOption) {
      event.preventDefault();
      vote(pollOption.dataset.vote);
      return;
    }
    
    // Trending items
    const trendingItem = closest('.trending-item');
    if (trendingItem) {
      event.preventDefault();
      const topic = trendingItem.textContent.replace('#', '');
      showNotification(`Recherche pour: ${topic}`);
      return;
    }
    
    // Handle specific button clicks by ID
    const buttonActions = {
      'modal-close': () => hideModal('news-modal'),
      'modal-backdrop': () => hideModal('news-modal'),
      'newsletter-close': () => hideModal('newsletter-modal'),
      'newsletter-backdrop': () => hideModal('newsletter-modal'),
      'cancel-warning': () => hideContentWarning(),
      'reveal-content': () => {
        sensitiveContentRevealed = true;
        hideContentWarning();
        selectCategory('shocking');
      },
      'theme-toggle': () => toggleTheme(),
      'lang-toggle': () => toggleLanguage(),
      'newsletter-btn': () => document.getElementById('newsletter-modal')?.classList.remove('hidden'),
      'breaking-close': () => document.getElementById('breaking-alert')?.classList.add('hidden'),
      'refresh-news': () => {
        showNotification('Actualisation en cours...');
        updateArticlesRead();
        updateNewsList();
      },
      'like-btn': () => {
        const modal = document.getElementById('news-modal');
        const newsId = document.querySelector('.news-card.active')?.dataset.newsId;
        if (newsId) toggleLike(newsId);
      },
      'save-btn': () => {
        const modal = document.getElementById('news-modal');
        const newsId = document.querySelector('.news-card.active')?.dataset.newsId;
        if (newsId) toggleSave(newsId);
      },
      'share-btn': () => showShareOptions(),
      'comment-btn': () => showNotification('Fonctionnalité de commentaires bientôt disponible!'),
      'open-chat': () => showNotification('Chat en direct bientôt disponible!')
    };
    
    if (buttonActions[target.id]) {
      event.preventDefault();
      buttonActions[target.id]();
      return;
    }
    
    // Share button clicks
    if (target.classList.contains('share-btn')) {
      event.preventDefault();
      if (target.classList.contains('whatsapp')) shareToWhatsApp();
      else if (target.classList.contains('email')) shareToEmail();
      else if (target.classList.contains('copy')) copyLink();
      else if (target.classList.contains('messenger')) showNotification('Partage Messenger bientôt disponible!');
      return;
    }
  });
  
  // Keyboard shortcuts
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      const newsModal = document.getElementById('news-modal');
      const newsletterModal = document.getElementById('newsletter-modal');
      const warning = document.getElementById('content-warning');
      
      if (newsModal && !newsModal.classList.contains('hidden')) {
        hideModal('news-modal');
      } else if (newsletterModal && !newsletterModal.classList.contains('hidden')) {
        hideModal('newsletter-modal');
      } else if (warning && !warning.classList.contains('hidden')) {
        hideContentWarning();
      }
    }
  });
  
  // Load with local category as default
  selectCategory('local');
  
  // Show welcome notification
  setTimeout(() => {
    showNotification('Bienvenue sur Nouvelles Sherbrooke 24/7! 🎉');
  }, 1000);
}

// Service Worker registration
function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    const swCode = `
      const CACHE_NAME = 'sherbrooke-news-24-7-v1';
      const urlsToCache = [
        '/',
        '/style.css',
        '/app.js'
      ];

      self.addEventListener('install', (event) => {
        event.waitUntil(
          caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(urlsToCache))
        );
      });

      self.addEventListener('fetch', (event) => {
        event.respondWith(
          caches.match(event.request)
            .then((response) => {
              return response || fetch(event.request);
            })
        );
      });
    `;
    
    const blob = new Blob([swCode], { type: 'application/javascript' });
    const swUrl = URL.createObjectURL(blob);
    
    navigator.serviceWorker.register(swUrl)
      .then(() => console.log('Service Worker enregistré'))
      .catch(() => console.log('Erreur Service Worker'));
  }
}

// Start application
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Register service worker after init
setTimeout(registerServiceWorker, 2000);