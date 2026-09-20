# Proteções do site

As respostas do servidor recebem cabeçalhos em `src/lib/security-headers.ts`.
O arquivo `public/_headers` cobre arquivos estáticos em hospedagens compatíveis
com esse formato. Ao publicar, verificar ambos os caminhos no domínio final.

- `nosniff` impede a interpretação de arquivos como outro tipo de conteúdo.
- A política de referência limita informações enviadas a outros sites.
- Câmera, microfone, localização, pagamento e USB estão desabilitados.
- CSP bloqueia objetos, mudanças na URL-base e envio de formulários. O site
  usa links de WhatsApp; não precisa enviar formulários.
- Incorporação permitida apenas na própria origem e ChatGPT. Revisar essa
  lista ao mudar de plataforma.
- HSTS é aplicado pelo servidor somente quando a URL recebida usa HTTPS,
  sem incluir outros subdomínios nem cadastrar o domínio em listas preload.
- Erros de servidor não podem ser armazenados em cache.

## Limites e verificações

A CSP atual não restringe scripts: ainda é necessário implementar e validar
nonces na renderização SSR e nos scripts adicionados pelo editor antes de
ativar uma política estrita contra XSS. Não adicionar `unsafe-eval` como solução.

Proteção contra DDoS, limitação de requisições e regras de firewall dependem da
hospedagem. Não há autenticação nem banco de dados neste site institucional.
Ao adicionar formulários ou APIs, implementar validação no servidor, limites
de requisições e proteção adequada contra CSRF.

Executar `node --test src/lib/security-headers.test.mjs`, `npx tsc --noEmit`,
`npm run build` e `npm audit --omit=dev`. Não aplicar atualizações forçadas
sem revisar a compatibilidade. Nunca colocar segredos em variáveis `VITE_*`.

Usar `npm ci` e `package-lock.json` como fonte das versões de instalação.
O lockfile antigo do Bun foi removido para não reinstalar dependências
vulneráveis por uma segunda lista de versões desatualizada.

Auditoria npm completa após as atualizações: nenhum alerta conhecido em
17/09/2026. Isso não substitui revisões periódicas nem teste de invasão.
