// Fallback font configuration for deployment issues
export const fontFallbacks = {
  archivo: {
    fontFamily: 'var(--erepair-font, Arial, sans-serif)',
    fontWeight: '400',
  },
  titilliumWeb: {
    fontFamily: 'var(--erepair-font-2, Arial, sans-serif)', 
    fontWeight: '400',
  },
  pacifico: {
    fontFamily: 'var(--erepair-font-3, cursive)',
    fontWeight: '400',
  }
}

// CSS variables for fallback fonts
export const fallbackCSS = `
  :root {
    --erepair-font: 'Archivo', Arial, sans-serif;
    --erepair-font-2: 'Titillium Web', Arial, sans-serif;
    --erepair-font-3: 'Pacifico', cursive;
  }
`