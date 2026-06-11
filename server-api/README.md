# API desativada no export estático

A rota `meta/conversion` (Meta Conversions API server-side) foi movida para fora
de `app/` porque o site é publicado como export estático (`output: "export"`)
na Hostinger, que não executa código de servidor Node.js.

O Meta Pixel continua disparando o evento "Lead" no navegador
(components/whatsapp-cta.tsx). O envio server-side via sendBeacon para
`/api/meta/conversion` falha silenciosamente (404) sem afetar o site.

Para reativar: mova `server-api/meta` de volta para `app/api/` e remova
`output: "export"` do next.config.js (requer hospedagem Node.js/VPS).
