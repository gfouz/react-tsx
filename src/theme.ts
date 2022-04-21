interface Props {
    row: (x:string, y:string)=> string,
    text: (position:string, color:string)=> string,
    article: (width: string)=> string,
    rowReverse: (x:string, y:string)=> string,
    column: (x:string, y:string)=> string,
    columnReverse: (x:string, y:string)=> string,
}

export const theme: Props = {
    column: (x, y) =>
    `display: flex; 
    flex-direction: column; 
    justify-content:${ x || "center"};
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
   text: (position, color)=> `
    text-align:${position || "left"};
    color:${color || "#444444"};`,
   article: (width)=> `
   max-width: ${width || "400px"};
   text-align: left;
   color:#444444;
  `
};   
