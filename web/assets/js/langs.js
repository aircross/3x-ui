const supportLangs = [
    {
        name: '中文',
        value: 'zh-Hans',
        icon: '🇨🇳',
    },
    {
        name: 'English',
        value: 'en-US',
        icon: '🇺🇸',
    },
    {
        name: 'فارسی',
        value: 'fa-IR',
        icon: '🇮🇷',
    },
    {
        name: 'Русский',
        value: 'ru-RU',
        icon: '🇷🇺',
    },
    {
        name: 'Tiếng Việt',
        value: 'vi-VN',
        icon: '🇻🇳',
    },
    {
        name: 'Español',
        value: 'es-ES',
        icon: '🇪🇸',
    },
    {
        name: 'Indonesian',
        value: 'id-ID',
        icon: '🇮🇩',
    },
    {
        name: 'Український',
        value: 'uk-UA',
        icon: '🇺🇦',
    },
    {
        name: 'Türkçe',
        value: 'tr-TR',
        icon: '🇹🇷',
    },
];

function getLang() {
    let lang = getCookie('lang');

    if (!lang) {
        if (window.navigator) {
            lang = window.navigator.language || window.navigator.userLanguage;

            if (isSupportLang(lang)) {
                setCookie('lang', lang, 150);
            } else {
                setCookie('lang', 'en-US', 150);
                window.location.reload();
            }
        } else {
            setCookie('lang', 'en-US', 150);
            window.location.reload();
        }
    }

    return lang;
}

function setLang(lang) {
    if (!isSupportLang(lang)) {
        lang = 'en-US';
    }

    setCookie('lang', lang, 150);
    window.location.reload();
}

function isSupportLang(lang) {
    for (l of supportLangs) {
        if (l.value === lang) {
            return true;
        }
    }

    return false;
}
