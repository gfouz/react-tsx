interface Props {
  red: string
  blue: string
  sushi: string
  emperor: string
  lotus: string
  crete: string
  white: string
  tamarind: string
  sunglow: string
  purple: string
  gondola: string
  cinnamon: string
  malachite: string
  row: (x: string, y: string) => string
  text: (position: string, color: string) => string
  reset: ()=> string
  centered: ()=> string
  article: (width: string) => string
  container: (width: string, size: string) => string
  rowReverse: (x: string, y: string) => string
  column: (x: string, y: string) => string
  columnReverse: (x: string, y: string) => string
}

export const theme: Props = {
  column: (x, y) =>
    `display: flex; 
    flex-direction: column; 
    justify-content:${x || "center"};
    align-items: ${y || "center"}`,
  columnReverse: (x, y) =>
    `display: flex; 
    flex-direction: column-reverse; 
    justify-content:${x || "center"};
    align-items: ${y || "center"}`,
  row: (x, y) =>
    `display: flex; 
    flex-direction: row; 
    justify-content:${x || "center"};
    align-items: ${y || "center"}`,
  rowReverse: (x, y) =>
    `display: flex; 
    flex-direction: row-reverse; 
    justify-content:${x || "center"};
    align-items: ${y || "center"}`,
  text: (position, color) => `
    text-align:${position || "left"};
    color:${color || "#444444"};`,
  article: (width) => `
   max-width: ${width || "400px"};
   text-align: left;
   color:#444444;
  `,
  container: (width) => `
   max-width: ${width || "400px"};
   text-align: center;
   color:#444444;
  `,
  centered: () => `
   display: grid;
   place-items: center;
  `,
  reset: () => `
   margin: 0;
   padding: 0;
   font-size: 16px;
  `,
  crete: "#783a33",
  red:"#fa0002",
  sushi: "#98a843",
  purple: "#623ca3",
  sunglow: "#fecf32",
  blue: "#397afa",
  lotus: "#783a33",
  white: "#ffffff",
  emperor: "#783a33",
  tamarind: "#1c0b1b",
  cinnamon:"#e46b26",
  malachite: "#05bb0c",
  gondola: "#1b0c1a"
};
