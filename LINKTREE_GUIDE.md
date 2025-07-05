# Guia de Personalização - Página Linktree

## 📋 Visão Geral

Esta é uma página Linktree moderna e elegante, criada com React, TypeScript e Tailwind CSS. O design é minimalista, responsivo e totalmente personalizável.

## 🎨 Personalização

### 1. Alterando Informações Pessoais

No arquivo `src/pages/Index.tsx`, localize o componente `LinktreeHeader` e altere:

```tsx
<LinktreeHeader 
  name="SEU NOME AQUI"
  description="SUA DESCRIÇÃO PERSONALIZADA AQUI"
/>
```

### 2. Substituindo a Foto de Perfil

1. Substitua a imagem em: `src/assets/profile-avatar.jpg`
2. Ou altere a propriedade `profileImage` no componente `LinktreeHeader`

### 3. Personalizando Links e Imagens

No arquivo `src/pages/Index.tsx`, modifique o array `linkData`:

```tsx
const linkData = [
  {
    image: suaImagemPersonalizada,
    link: "https://seulink.com",
    alt: "Descrição da imagem",
    title: "Tooltip que aparece no hover"
  },
  // Adicione mais links conforme necessário
];
```

### 4. Adicionando Novas Imagens

1. Adicione suas imagens em `src/assets/`
2. Importe-as no topo do arquivo `Index.tsx`:
```tsx
import minhaNovaImagem from "@/assets/minha-nova-imagem.jpg";
```

### 5. Personalizando Redes Sociais

No arquivo `src/components/SocialFooter.tsx`, modifique os links padrão:

```tsx
const defaultSocialLinks = [
  {
    icon: Instagram,
    url: "https://instagram.com/SEU_USUARIO",
    label: "Instagram"
  },
  // Adicione ou remova redes sociais
];
```

## 🎨 Personalização Visual

### Cores e Estilo

O sistema de cores está definido em `src/index.css`. Você pode personalizar:

- **Cores principais**: Modifique as variáveis CSS `--primary`, `--secondary`, etc.
- **Gradientes**: Altere `--gradient-subtle` para mudanças no fundo
- **Sombras**: Ajuste `--shadow-soft`, `--shadow-medium`, `--shadow-hover`

### Exemplo de Personalização de Cores

```css
:root {
  --primary: 220 70% 50%;        /* Azul personalizado */
  --secondary: 220 30% 95%;      /* Azul claro */
  --accent: 280 70% 60%;         /* Roxo para destaque */
}
```

## 📱 Responsividade

A página é totalmente responsiva e se adapta automaticamente a:
- Smartphones (design mobile-first)
- Tablets
- Desktops

## 🚀 Funcionalidades

- ✅ Imagens clicáveis com redirecionamento
- ✅ Links externos abrem em nova aba
- ✅ Animações suaves de hover
- ✅ Ícones de redes sociais interativos
- ✅ Design acessível (ARIA labels)
- ✅ Carregamento rápido e otimizado

## 📝 Dicas de Uso

1. **Imagens otimizadas**: Use imagens de tamanho adequado (recomendado: 512x512px para botões)
2. **Links válidos**: Sempre teste os links antes de publicar
3. **Descrições claras**: Use textos descritivos nos campos `alt` e `title`
4. **Consistência visual**: Mantenha um padrão visual nas imagens dos botões

## 🔧 Estrutura de Arquivos

```
src/
├── components/
│   ├── LinktreeHeader.tsx    # Cabeçalho com foto e nome
│   ├── LinkButton.tsx        # Botão de link personalizado
│   └── SocialFooter.tsx      # Rodapé com redes sociais
├── assets/
│   ├── profile-avatar.jpg    # Sua foto de perfil
│   └── link-button-*.jpg     # Imagens dos botões
├── pages/
│   └── Index.tsx            # Página principal
└── index.css               # Sistema de design e cores
```

## 🌟 Próximos Passos

1. Substitua as imagens placeholder pelas suas imagens reais
2. Atualize todos os links para seus canais reais
3. Personalize as cores conforme sua marca
4. Teste em diferentes dispositivos
5. Publique sua página!

---

*Página criada com ❤️ usando React + TypeScript + Tailwind CSS*