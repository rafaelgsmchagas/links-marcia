# Deployment Guide

## Problema Atual com Netlify

O projeto é uma aplicação full-stack com backend Node.js/Express e banco de dados PostgreSQL. O Netlify só suporta sites estáticos, causando o erro "Page not found".

## Opções de Deployment

### 1. Replit (Recomendado)
- ✅ Funciona perfeitamente (já configurado)
- ✅ Suporta full-stack
- ✅ Banco de dados PostgreSQL incluído
- ✅ URL: Seu Repl URL do Replit

### 2. Vercel (Recomendado para produção)
1. Importe o repositório GitHub no Vercel
2. Configure as variáveis de ambiente:
   - `DATABASE_URL` (seu banco PostgreSQL)
3. Vercel detectará automaticamente o projeto Next.js/React

### 3. Railway
1. Conecte o repositório GitHub no Railway
2. Configure as variáveis de ambiente
3. Railway fará deploy do backend automaticamente

### 4. Heroku
1. Configure o Procfile
2. Adicione as variáveis de ambiente
3. Deploy via Git

## Para usar apenas Frontend no Netlify

Se quiser usar só o frontend no Netlify (sem funcionalidades do backend):

1. Remova as dependências do backend
2. Substitua as calls da API por dados estáticos
3. Use apenas o diretório `client/`

## Configuração Atual

O projeto está configurado para:
- ✅ Desenvolvimento local: `npm run dev`
- ✅ Build de produção: `npm run build`
- ✅ Replit deployment: Automático
- ⚠️ Netlify: Não compatível com backend

## Próximos Passos

1. **Para produção**: Use Vercel ou Railway
2. **Para desenvolvimento**: Continue usando Replit
3. **Para frontend estático**: Refatore para remover dependências do backend