import environ
from pathlib import Path
from datetime import timedelta

env = environ.Env(
    DEBUG=(bool,False)
)

BASE_DIR = Path(__file__).resolve().parent.parent

environ.Env.read_env(BASE_DIR/ '.env')

SECRET_KEY = env('SECRET_KEY')


DEBUG = env('DEBUG')

ALLOWED_HOSTS = []


INSTALLED_APPS = [
    'jazzmin',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'rest_framework_simplejwt.token_blacklist',
    'accounts',
    'core',
    'social_auth',
    'corsheaders',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'Bugvaultify.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'Bugvaultify.wsgi.application'



DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

AUTH_USER_MODEL = 'accounts.User'

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    )
}
SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME':timedelta(minutes=10),
    'REFRESH_TOKEN_LIFETIME': timedelta(days=1),
    'AUTH_HEADER_TYPES':('Bearer',),
}


CORS_ALLOW_ALL_ORIGINS = False  # Set to True to allow all origins (not recommended in production)
CORS_ALLOWED_ORIGINS = [
    "http://localhost:5173",  # React frontend running on Vite
]

GOOGLE_CLIENT_ID= env('GOOGLE_CLIENT_ID')
GOOGLE_CLIENT_SECRET=env('GOOGLE_SECRET')
SOCIAL_AUTH_PASSWORD=env('SOCIAL_AUTH_PASSWORD')


AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]




LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True



STATIC_URL = 'static/'


DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'


# Looking to send emails in production? Check out our Email API/SMTP product!
EMAIL_HOST = 'sandbox.smtp.mailtrap.io'
EMAIL_HOST_USER = '75c208fdc6f9f5'
EMAIL_HOST_PASSWORD = '8a37a4c1ae8fe2'
EMAIL_PORT = '2525'






JAZZMIN_SETTINGS = {
    "site_title": "Easer Tracker",

    "site_header": "Easer Tracker",

    "site_brand": "DEVxNET",

    "site_logo": "https://discordbanners.vercel.app/static/img/logo.svg",

    "login_logo": None,

    "login_logo_dark": None,

    "site_logo_classes": "img-circle",

    "site_icon": None,

    "welcome_sign": "Welcome to the Easer Tracker Admin Panel", 

    "copyright": "DEVxNET ",

    "search_model": ["auth.User", "auth.Group"],

    "user_avatar": None,

    "topmenu_links": [

        {"name": "Home",  "url": "admin:index", "permissions": ["auth.view_user"]},

        {"name": "Support", "url": "https://github.com/sandyddeveloper", "new_window": True},

        {"model": "auth.User"},

        {"app": "books"},
    ],
    "usermenu_links": [
        {"name": "Support", "url": "https://github.com/sandyddeveloper", "new_window": True},
        {"model": "auth.user"}
    ],

    "show_sidebar": True,

    "navigation_expanded": True,

    "hide_apps": [],

    "hide_models": [],

    "order_with_respect_to": ["auth", "books", "books.author", "books.book"],

    "custom_links": {
        "books": [{
            "name": "Make Messages", 
            "url": "make_messages", 
            "icon": "fas fa-comments",
            "permissions": ["books.view_book"]
        }]
    },

    "icons": {
        "auth": "fas fa-users-cog",
        "auth.user": "fas fa-user",
        "auth.Group": "fas fa-users",
    },
    "default_icon_parents": "fas fa-chevron-circle-right",
    "default_icon_children": "fas fa-circle",
    "related_modal_active": False,

    "custom_css": None,
    "custom_js": None,
    "use_google_fonts_cdn": True,
    "show_ui_builder": False,

    "changeform_format": "horizontal_tabs",
    "changeform_format_overrides": {"auth.user": "collapsible", "auth.group": "vertical_tabs"},
    "language_chooser": False,
}
JAZZMIN_UI_TWEAKS = {
    "navbar_small_text": False,  
    "footer_small_text": False,  
    "body_small_text": False,  
    "brand_small_text": False,  
    "brand_colour": "navbar-primary",  # Matches primary theme  
    "accent": "accent-info",  # Use "info" for better visibility  
    "navbar": "navbar-dark",  
    "no_navbar_border": True,  
    "navbar_fixed": True,  # Keeps navbar always visible  
    "layout_boxed": False,  
    "footer_fixed": True,  
    "sidebar_fixed": True,  
    "sidebar": "sidebar-dark-info",  # Uses info color for contrast  
    "sidebar_nav_small_text": False,  
    "sidebar_disable_expand": False,  
    "sidebar_nav_child_indent": True,  
    "sidebar_nav_compact_style": True,  # More compact for better UI  
    "sidebar_nav_legacy_style": False,  
    "sidebar_nav_flat_style": True,  # Flat style for modern design  
    "theme": "cyborg",  # "cyborg" for a hacker-style dark mode  
    "dark_mode_theme": "darkly",  
    "button_classes": {  
        "primary": "btn-primary",  
        "secondary": "btn-outline-secondary",  # Outlined for better contrast  
        "info": "btn-info",  
        "warning": "btn-warning",  
        "danger": "btn-danger",  
        "success": "btn-success"  
    },  
    "actions_sticky_top": True,  # Keeps actions visible  
}
