# VirkaCrafts Sanity Studio

یہ آپ کا private content-management panel ہے۔ اس میں صرف Sanity project کے authorised users login کر کے content add یا edit کر سکتے ہیں۔ عام visitors اسے استعمال نہیں کر سکتے۔

## اس Studio میں کیا موجود ہے؟

- **Products & Patterns:** crochet patterns، image، PDF، قیمت، checkout link اور step images
- **Courses:** basic/intermediate/advanced courses اور ان کے متعلقہ stitch guides
- **Stitch Guides:** US/UK abbreviations، symbol، instructions، step images اور GIF/WebP animation files

## CLI کے بغیر GitHub اور Vercel سے deploy کرنے کا طریقہ

1. GitHub پر login کریں اور **New repository** بنائیں، مثلاً `virkacrafts-sanity-studio`۔ اسے Private رکھنا بہتر ہے۔
2. Repository کھولیں، **Add file → Upload files** پر click کریں۔ اس folder کے اندر موجود تمام files اور `schemaTypes` folder upload کریں۔
3. [vercel.com](https://vercel.com) پر GitHub کے ذریعے login کریں۔
4. **Add New → Project** منتخب کریں، اپنی `virkacrafts-sanity-studio` repository import کریں۔
5. Build settings میں یہ values رکھیں:
   - Framework preset: **Other**
   - Build command: `npm run build`
   - Output directory: `dist`
   - Install command: `npm install`
6. **Deploy** click کریں۔ Vercel آپ کو URL دے گا، مثلاً `https://virkacrafts-sanity-studio.vercel.app`۔
7. Sanity Manage میں اپنے project `itnvs0vu` کو کھولیں → **API → CORS Origins** → **Add CORS origin**۔ Vercel والا URL add کریں اور credentials allow کریں۔
8. Vercel URL کھولیں اور اسی Sanity account سے login کریں جس سے project بنایا تھا۔ اب آپ content add کر سکتی ہیں۔

## اپنی website سے تعلق

آپ کی website پہلے سے Sanity project `itnvs0vu` اور dataset `production` پڑھنے کے لیے configured ہے۔ Studio میں publish کیا ہوا content website پر دکھائی دے گا۔ اگر فوراً نظر نہ آئے تو browser refresh کریں؛ CDN caching کی وجہ سے مختصر تاخیر ہو سکتی ہے۔

## پہلا content کیسے add کریں؟

1. Studio کے left menu میں **Products & Patterns** کھولیں اور **Create** منتخب کریں۔
2. Pattern title، category، difficulty اور main image لازمی بھریں۔
3. PDF upload کریں۔ Free pattern کے لیے `Free PDF download` کو enabled رکھیں۔ Paid printable کے لیے اسے بند کریں، پھر price اور checkout URL لگائیں۔
4. **Publish** دبائیں۔
5. بالکل اسی طرح Courses اور Stitch Guides بھی بنائیں۔

## اہم حفاظت

- Sanity API token، password یا secret key کسی GitHub file میں نہ لکھیں۔
- `production` dataset کی visibility اور CORS configuration صرف Sanity Manage سے manage کریں۔
- Editors شامل کرنے کے لیے Sanity Manage → Project → Members استعمال کریں۔

## بعد میں custom domain

Vercel project settings میں `studio.virkacrafts.com` add کیا جا سکتا ہے۔ DNS record Vercel کی ہدایات کے مطابق بنائیں، پھر اس final domain کو بھی Sanity CORS Origins میں شامل کر دیں۔
