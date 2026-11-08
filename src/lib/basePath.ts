// Préfixe des fichiers statiques quand le site est publié dans un sous-dossier (GitHub Pages).
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ''

export const asset = (path: string) => `${BASE_PATH}${path}`
