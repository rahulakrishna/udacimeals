
const musicData = [
    { artist: 'Adele', name: '25', sales: 1731000 },
    { artist: 'Drake', name: 'Views', sales: 1608000 },
    { artist: 'Beyonce', name: 'Lemonade', sales: 1554000 },
    { artist: 'Chris Stapleton', name: 'Traveller', sales: 1085000 },
    { artist: 'Pentatonix', name: 'A Pentatonix Christmas', sales: 904000 },
    { artist: 'Original Broadway Cast Recording', name: 'Hamilton: An American Musical', sales: 820000 },
    { artist: 'Twenty One Pilots', name: 'Blurryface', sales: 738000 },
    { artist: 'Prince', name: 'The Very Best of Prince', sales: 668000 },
    { artist: 'Rihanna', name: 'Anti', sales: 603000 },
    { artist: 'Justin Bieber', name: 'Purpose', sales: 554000 }
];

const totalAlbumSales=musicData.filter((music)=>music.artist.length+music.name.length<25).reduce((accumulator,music)=>{
  return accumulator+=music.sales
},0)

console.log('Total Sales',totalAlbumSales);

const data = [
    { name: 'Tyler', favoriteIceCreams: ['Strawberry', 'Vanilla', 'Chocolate', 'Cookies & Cream'] },
    { name: 'Richard', favoriteIceCreams: ['Cookies & Cream', 'Mint Chocolate Chip', 'Chocolate', 'Vanilla'] },
    { name: 'Amanda', favoriteIceCreams: ['Chocolate', 'Rocky Road', 'Pistachio', 'Banana'] },
    { name: 'Andrew', favoriteIceCreams: ['Vanilla', 'Chocolate', 'Mint Chocolate Chip'] },
    { name: 'David', favoriteIceCreams: ['Vanilla', 'French Vanilla', 'Vanilla Bean', 'Strawberry'] },
    { name: 'Karl', favoriteIceCreams: ['Strawberry', 'Chocolate', 'Mint Chocolate Chip'] }
];

console.log('Ice Creams!');

let iceCreamNames=[]
let iceCreamCount=[]
results={}
data.reduce((accumulator,icecream)=>{
  icecream.favoriteIceCreams.forEach((ice)=>{
    if(!(iceCreamNames.includes(ice))){
      iceCreamNames.push(ice)
    }
    iceCreamCount.push(ice)
  })
},0)

iceCreamNames.forEach((name)=>{
  count=0
  iceCreamCount.forEach((icecream)=>{
    if(icecream==name){
      count+=1
    }
  })
  results[name]=count
})
console.log(results);
