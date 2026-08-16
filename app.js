// State Management
let currentCategory = null;
let currentDay = null;
let currentPlace = null;
let audioObj = null;

// DOM Elements
const appContainer = document.getElementById('app-container');
const backBtn = document.getElementById('back-btn');
const homeBtn = document.getElementById('home-btn');

// Navigation
function navigateTo(view, params = {}) {
    stopAudio(); // Stop any playing audio on navigate
    if (view === 'home') {
        currentCategory = null; currentDay = null; currentPlace = null;
        renderHome();
        backBtn.classList.add('hidden');
        homeBtn.classList.add('hidden');
    } else if (view === 'category') {
        currentCategory = params.category;
        renderCategory(params.category);
        backBtn.classList.remove('hidden');
        homeBtn.classList.remove('hidden');
        backBtn.onclick = () => navigateTo('home');
    } else if (view === 'day') {
        currentDay = params.day;
        renderDay(params.day);
        backBtn.onclick = () => navigateTo('category', { category: currentCategory });
    } else if (view === 'place') {
        currentPlace = params.place;
        renderPlace(params.place);
        backBtn.onclick = () => navigateTo('day', { day: currentDay });
    }
}

homeBtn.onclick = () => navigateTo('home');

// Components
function renderAudioPlayer(src, floating = false) {
    const id = 'audio-' + Math.random().toString(36).substr(2, 9);
    return `
        <div class="audio-player ${floating ? 'floating' : ''}">
            <audio id="${id}" src="${src}"></audio>
            <button class="play-btn" onclick="toggleAudio('${id}')">
                <i class="ph-fill ph-play" id="icon-${id}"></i>
            </button>
            <div class="progress-container">
                <input type="range" class="progress-bar" id="progress-${id}" value="0" min="0" max="100" oninput="seekAudio('${id}', this.value)">
                <div class="time-display">
                    <span id="current-${id}">0:00</span>
                    <span id="duration-${id}">0:00</span>
                </div>
            </div>
        </div>
    `;
}

// Audio Logic
function toggleAudio(id) {
    const audio = document.getElementById(id);
    const icon = document.getElementById(`icon-${id}`);
    
    if (audioObj && audioObj !== audio) {
        audioObj.pause();
        const oldIcon = document.getElementById(`icon-${audioObj.id}`);
        if(oldIcon) { oldIcon.classList.remove('ph-pause'); oldIcon.classList.add('ph-play'); }
    }
    
    audioObj = audio;

    // Force load to grab metadata if it hasn't already
    if (audio.readyState === 0) {
        audio.load();
    }

    if (audio.paused) {
        audio.play().catch(e => console.error("Error playing audio", e));
        icon.classList.remove('ph-play');
        icon.classList.add('ph-pause');
    } else {
        audio.pause();
        icon.classList.remove('ph-pause');
        icon.classList.add('ph-play');
    }

    audio.ontimeupdate = () => {
        const progress = document.getElementById(`progress-${id}`);
        const current = document.getElementById(`current-${id}`);
        const durationEl = document.getElementById(`duration-${id}`);
        
        if(progress && current && !isNaN(audio.duration)) {
            progress.value = (audio.currentTime / audio.duration) * 100;
            current.textContent = formatTime(audio.currentTime);
            
            // Fallback: update duration during playback if it was missed initially
            if (durationEl && (durationEl.textContent === '0:00' || durationEl.textContent === 'NaN:NaN')) {
                durationEl.textContent = formatTime(audio.duration);
            }
        }
    };

    audio.onloadedmetadata = () => {
        const duration = document.getElementById(`duration-${id}`);
        if(duration && !isNaN(audio.duration)) {
            duration.textContent = formatTime(audio.duration);
        }
    };
    
    audio.onended = () => {
        icon.classList.remove('ph-pause');
        icon.classList.add('ph-play');
        const progress = document.getElementById(`progress-${id}`);
        if(progress) progress.value = 0;
        const current = document.getElementById(`current-${id}`);
        if(current) current.textContent = '0:00';
    }
}

function seekAudio(id, percent) {
    const audio = document.getElementById(id);
    if(audio && !isNaN(audio.duration)) {
        audio.currentTime = (percent / 100) * audio.duration;
    }
}

function stopAudio() {
    if(audioObj) {
        audioObj.pause();
        audioObj = null;
    }
}

function formatTime(seconds) {
    if (isNaN(seconds) || !isFinite(seconds)) return '0:00';
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
}

// Views
function renderHome() {
    appContainer.innerHTML = `
        <main class="home-content">
            <h2 class="welcome-title">Si, Si, Si, nos vamos a París</h2>
            
            <p class="welcome-subtitle">Intro Adulto</p>
            <div class="home-intro-player">
                ${renderAudioPlayer('audio/intro-francia.mp3')}
            </div>
            
            <p class="welcome-subtitle">Intro Juvenil</p>
            <div class="home-intro-player">
                ${renderAudioPlayer('audio/intro-juvenil-francia.mp3')}
            </div>
            
            <p class="section-divider">Selecciona tu experiencia</p>

            <div class="category-cards">
                <div class="category-card" style="background-image: url('images/adulto.png')" onclick="navigateTo('category', {category: 'adulto'})">
                    <div class="card-overlay"></div>
                    <h3>Adulto</h3>
                    <p>Descubre la historia profunda</p>
                </div>
                <div class="category-card" style="background-image: url('images/juvenil.png')" onclick="navigateTo('category', {category: 'juvenil'})">
                    <div class="card-overlay"></div>
                    <h3>Juvenil</h3>
                    <p>Una aventura inolvidable</p>
                </div>
            </div>
        </main>
    `;
}

function renderCategory(category) {
    const title = category === 'adulto' ? 'Adulto' : 'Juvenil';
    let daysHtml = '';
    
    for (const key in daysData) {
        const day = daysData[key];
        daysHtml += `
            <div class="day-card" style="background-image: url('${day.image}')" onclick="navigateTo('day', {day: '${key}'})">
                <div class="card-overlay"></div>
                <h3>${day.title}</h3>
                <p>${day.places.length} audioguías</p>
            </div>
        `;
    }

    appContainer.innerHTML = `
        <main class="home-content">
            <h2 class="welcome-title">${title}</h2>
            <p class="section-divider" style="margin-top:-10px;">Elige el día de tu visita</p>
            <div class="category-cards">
                ${daysHtml}
            </div>
        </main>
    `;
}

function renderDay(dayKey) {
    const day = daysData[dayKey];
    let placesHtml = '';
    
    day.places.forEach((place, index) => {
        const img = place.images && place.images.length > 0 ? place.images[0] : 'images/placeholder.png';
        placesHtml += `
            <div class="place-item" onclick="navigateTo('place', {place: '${place.id}'})">
                <img src="${img}" class="place-thumb" alt="${place.name}">
                <div class="place-number">${index + 1}</div>
                <div class="place-info">
                    <h3>${place.name}</h3>
                    <p>${place.description}</p>
                </div>
                <i class="ph-bold ph-caret-right" style="color:var(--text-secondary)"></i>
            </div>
        `;
    });

    appContainer.innerHTML = `
        <main class="day-content">
            <h2 class="day-title">${day.title}</h2>
            <p class="day-subtitle">Audioguías disponibles</p>
            <div class="places-list">
                ${placesHtml}
            </div>
        </main>
    `;
}

function renderPlace(placeId) {
    const day = daysData[currentDay];
    const place = day.places.find(p => p.id === placeId);
    const img = place.images && place.images.length > 0 ? place.images[0] : 'images/placeholder.png';
    const audioSrc = currentCategory === 'adulto' ? place.audioAdulto : place.audioJuvenil;

    appContainer.innerHTML = `
        <div class="hero-image" style="background-image: url('${img}')">
            <div class="hero-overlay"></div>
        </div>
        <main class="detail-content">
            <h1 class="place-title">${place.name}</h1>
            <div class="location-badge">${day.title}</div>
            <p class="place-description">${place.description}</p>
            
            ${renderAudioPlayer(audioSrc, true)}
        </main>
    `;
}

// Init
navigateTo('home');
