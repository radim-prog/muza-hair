# 🔥 Firebase Setup Guide - Múza Hair

**Kompletní návod jak připojit Firebase k webu**

---

## 📋 Přehled

Web je připraven pro Firebase integraci. Všechny TODO komentáře jsou v kódu označeny kde přesně Firebase připojit.

**Potřebné Firebase služby:**
- 🔐 Authentication (Email/Password + Google Sign-In)
- 📦 Firestore Database (Users, Products, Orders, Reviews, Wishlist)
- 📁 Firebase Storage (Product images, Gallery images)
- 📊 Analytics (volitelné)

---

## 🚀 Krok 1: Vytvoření Firebase projektu

1. Jdi na https://console.firebase.google.com
2. Klikni "Add project" (nebo "Přidat projekt")
3. Název projektu: `muza-hair` (nebo dle preferencí)
4. Google Analytics: **ANO** (doporučeno)
5. Analytics account: Vytvoř nový nebo vyber existující
6. Klikni "Create project"

---

## 🔧 Krok 2: Registrace Web App

1. V Firebase Console klikni na "Web" ikonu (`</>`)
2. App nickname: `Múza Hair Web`
3. Firebase Hosting: **ANO** (pokud chceš hosting)
4. Klikni "Register app"

**Dostaneš Firebase Config:**

```javascript
const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "muza-hair.firebaseapp.com",
  projectId: "muza-hair",
  storageBucket: "muza-hair.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123",
  measurementId: "G-XXXXXXXXXX"
};
```

**Zkopíruj tento config** - budeš ho potřebovat!

---

## 🔐 Krok 3: Firebase Authentication

### 3.1 Povolit Email/Password

1. V Firebase Console → **Authentication** → **Sign-in method**
2. Klikni na **Email/Password**
3. Enable **Email/Password**
4. **Email link (passwordless sign-in):** VYPNUTO (zatím nepotřebujeme)
5. Klikni **Save**

### 3.2 Povolit Google Sign-In

1. Stejná stránka (Sign-in method)
2. Klikni na **Google**
3. Enable **Google**
4. Project support email: Vyber svůj email
5. Klikni **Save**

### 3.3 Authorized Domains

1. Authentication → **Settings** → **Authorized domains**
2. Přidej:
   - `localhost` (už tam je)
   - `muza-hair.vercel.app` (pokud deploying na Vercel)
   - Tvoje vlastní doména (pokud máš)

---

## 📦 Krok 4: Firestore Database

### 4.1 Vytvoření Database

1. V Firebase Console → **Firestore Database**
2. Klikni **Create database**
3. Security rules: **Start in production mode** (nastavíme později)
4. Cloud Firestore location: **europe-west1** (nebo blíž k ČR)
5. Klikni **Enable**

### 4.2 Security Rules

V **Firestore Database** → **Rules** nahraď kód tímto:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // Helper funkce
    function isAuthenticated() {
      return request.auth != null;
    }

    function isOwner(userId) {
      return request.auth.uid == userId;
    }

    // Users collection
    match /users/{userId} {
      allow read: if isAuthenticated();
      allow write: if isOwner(userId);
    }

    // Products collection (public read, admin write)
    match /products/{productId} {
      allow read: if true;
      allow write: if false; // Pouze admin může přidávat produkty
    }

    // Orders collection
    match /orders/{orderId} {
      allow read: if isAuthenticated() && resource.data.userId == request.auth.uid;
      allow create: if isAuthenticated();
      allow update: if false; // Pouze admin může měnit objednávky
    }

    // Reviews collection
    match /reviews/{reviewId} {
      allow read: if true; // Všichni můžou číst recenze
      allow create: if isAuthenticated();
      allow update, delete: if isAuthenticated() && resource.data.userId == request.auth.uid;
    }

    // Wishlist (subcollection v users)
    match /users/{userId}/wishlist/{itemId} {
      allow read, write: if isOwner(userId);
    }

    // Gallery submissions
    match /gallery/{galleryId} {
      allow read: if true;
      allow create: if isAuthenticated();
      allow update, delete: if isAuthenticated() && resource.data.userId == request.auth.uid;
    }

    // API usage tracking (pro rate limiting)
    match /api_usage/{usageId} {
      allow read: if isAuthenticated() && resource.data.userId == request.auth.uid;
      allow create: if isAuthenticated();
    }
  }
}
```

Klikni **Publish**

### 4.3 Composite Indexes

V **Firestore Database** → **Indexes** vytvoř:

**Index 1: Orders sorting**
- Collection ID: `orders`
- Fields:
  - `userId` Ascending
  - `createdAt` Descending
- Query scope: Collection

**Index 2: Reviews filtering**
- Collection ID: `reviews`
- Fields:
  - `productId` Ascending
  - `rating` Descending
- Query scope: Collection

**Index 3: Products filtering**
- Collection ID: `products`
- Fields:
  - `method` Ascending
  - `shade` Ascending
  - `length` Ascending
- Query scope: Collection

---

## 📁 Krok 5: Firebase Storage

### 5.1 Vytvoření Storage

1. V Firebase Console → **Storage**
2. Klikni **Get started**
3. Security rules: **Start in production mode**
4. Storage location: **europe-west1**
5. Klikni **Done**

### 5.2 Storage Rules

V **Storage** → **Rules** nahraď kód tímto:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {

    // Helper funkce
    function isAuthenticated() {
      return request.auth != null;
    }

    function isImage() {
      return request.resource.contentType.matches('image/.*');
    }

    function isUnder25MB() {
      return request.resource.size < 25 * 1024 * 1024;
    }

    // Product images (public read, admin write)
    match /products/{productId}/{fileName} {
      allow read: if true;
      allow write: if false; // Pouze admin
    }

    // User uploads (AI Color-Match, Gallery)
    match /uploads/{userId}/{fileName} {
      allow read: if true; // Public read (pro gallery)
      allow write: if isAuthenticated()
                   && request.auth.uid == userId
                   && isImage()
                   && isUnder25MB();
      allow delete: if isAuthenticated() && request.auth.uid == userId;
    }

    // Temporary OCR uploads (auto-delete po 24h)
    match /temp/{userId}/{fileName} {
      allow read, write: if isAuthenticated() && request.auth.uid == userId;
    }
  }
}
```

Klikni **Publish**

### 5.3 CORS Configuration (důležité!)

Pro přístup k Storage z webu potřebuješ nastavit CORS.

Vytvoř soubor `cors.json`:

```json
[
  {
    "origin": ["http://localhost:3000", "https://muza-hair.vercel.app"],
    "method": ["GET", "HEAD"],
    "maxAgeSeconds": 3600
  }
]
```

Nahraj přes `gsutil`:

```bash
gsutil cors set cors.json gs://muza-hair.appspot.com
```

---

## 🔑 Krok 6: Environment Variables

Vytvoř soubor `.env.local` v root složce projektu:

```bash
# Firebase Config
NEXT_PUBLIC_FIREBASE_API_KEY=AIza...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=muza-hair.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=muza-hair
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=muza-hair.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abc123
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-XXXXXXXXXX

# Gemini AI (pro OCR)
GEMINI_API_KEY=your_gemini_api_key_here
```

**DŮLEŽITÉ:** Přidej `.env.local` do `.gitignore` (už tam je)!

---

## 📝 Krok 7: Aktualizace Firebase Config v Kódu

Otevři `/src/lib/firebase.ts` a nahraď placeholder config:

```typescript
import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
```

---

## 🗃️ Krok 8: Seed Data (Produkty)

Vytvoř script pro nahrání produktů do Firestore:

Vytvoř soubor `/scripts/seed-products.ts`:

```typescript
import { db } from '@/lib/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { MOCK_PRODUCTS } from '@/lib/mock-data';

async function seedProducts() {
  console.log('Seeding products...');

  for (const product of MOCK_PRODUCTS) {
    await addDoc(collection(db, 'products'), product);
    console.log(`Added: ${product.name}`);
  }

  console.log('Done!');
}

seedProducts();
```

Spusť:

```bash
npx tsx scripts/seed-products.ts
```

---

## ✅ Krok 9: TODO Komentáře v Kódu

Všechny TODO komentáře najdeš v těchto souborech:

**Authentication:**
- `/src/app/prihlasit/page.tsx` - Login
- `/src/app/registrace/page.tsx` - Registration
- `/src/app/ucet/page.tsx` - User dashboard

**Firestore Queries:**
- `/src/app/ucet/objednavky/page.tsx` - Orders
- `/src/app/ucet/oblibene/page.tsx` - Wishlist
- `/src/app/recenze/page.tsx` - Reviews
- `/src/app/galerie/page.tsx` - Gallery

**Storage:**
- `/src/app/ai-color-match/page.tsx` - Image upload

**Nahraď komentáře:**

```typescript
// TODO: Get from Firebase Auth
const user = useUser(); // Vytvoř useUser hook

// TODO: Get from Firebase Firestore
const orders = useOrders(user.uid); // Vytvoř useOrders hook

// TODO: Upload to Firebase Storage
await uploadBytes(ref(storage, path), file);
```

---

## 🚀 Krok 10: Deploy na Vercel (volitelné)

### 10.1 Vercel CLI

```bash
npm install -g vercel
vercel login
```

### 10.2 Deploy

```bash
vercel
```

### 10.3 Environment Variables na Vercel

V Vercel Dashboard → Settings → Environment Variables přidej všechny z `.env.local`

### 10.4 Production Deploy

```bash
vercel --prod
```

---

## 🎯 Testing Checklist po Firebase připojení

- [ ] Registrace nového uživatele (email/password)
- [ ] Registrace přes Google
- [ ] Login existujícího uživatele
- [ ] Logout
- [ ] Reset hesla
- [ ] Vytvoření objednávky (uloží se do Firestore)
- [ ] Zobrazení historie objednávek
- [ ] Přidání produktu do wishlistu
- [ ] Odebrání z wishlistu
- [ ] Nahrání obrázku (AI Color-Match)
- [ ] Vytvoření recenze
- [ ] Zobrazení recenzí
- [ ] Gallery submissions

---

## 📊 Firebase Pricing (odhad)

**Spark Plan (Free):**
- Authentication: 10,000 phone auth/měsíc (email unlimited)
- Firestore: 1 GB storage, 50K reads/day, 20K writes/day
- Storage: 5 GB, 1 GB download/day
- **Pro malý e-shop: DOSTATEČNÉ** ✅

**Blaze Plan (Pay as you go):**
- Potřebuješ pouze pokud překročíš free limity
- Cca $0.05 za 100,000 dokumentů

**Odhad nákladů pro Múza Hair:**
- 100 objednávek/měsíc: **$0** (v rámci free tier)
- 1000 objednávek/měsíc: **~$0.50** (50 Kč)

---

## 🆘 Troubleshooting

**Problém:** Firebase není definován
**Řešení:** Zkontroluj že máš správně nastavené env variables

**Problém:** 403 Forbidden při nahrávání obrázků
**Řešení:** Zkontroluj Storage Rules a CORS config

**Problém:** Cannot read user data
**Řešení:** Zkontroluj Firestore Rules

**Problém:** Google Sign-In nefunguje
**Řešení:** Zkontroluj Authorized Domains v Authentication

---

## 📞 Kontakt

Pokud potřebuješ pomoc s Firebase setupem:
- Firebase Docs: https://firebase.google.com/docs
- Next.js + Firebase: https://firebase.google.com/docs/web/setup

---

**Status:** 📝 Připraveno pro Firebase
**Verze:** 2.0
**Datum:** 2025-10-23
