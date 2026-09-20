# Publicação do site

O projeto está configurado para **Cloudflare Workers**. A publicação produz o
Worker em `.output/server` e os arquivos públicos otimizados em `.output/public`.

## Antes da primeira publicação

1. Crie um projeto Workers na conta Cloudflare e escolha o nome `cruz-e-soares`.
2. Crie um token de API com permissão de edição de Workers para a conta.
3. Defina `CLOUDFLARE_API_TOKEN` e `CLOUDFLARE_ACCOUNT_ID` nas variáveis do
ambiente da máquina ou do serviço de CI. Nunca as coloque em arquivos do projeto.

## Comandos

```bash
npm ci
npm run build
npm run deploy
```

O comando de build remove da pasta de publicação fotos antigas que não são mais
usadas pelo site. Os arquivos originais continuam preservados em `public/`.

## Domínio e busca orgânica

Depois de publicar, vincule o domínio no painel da Cloudflare e confirme que o
HTTPS está ativo. Em seguida, informe o domínio final para que `sitemap.xml`, a
URL canônica e a imagem de compartilhamento possam apontar para o endereço real.

O endereço, WhatsApp, metadados básicos, `robots.txt`, cache de imagens e
cabeçalhos de segurança já estão incluídos na publicação.
