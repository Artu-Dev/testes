window.addEventListener("load", ()=>{
  registerSW();
});

async function registerSW() {
  if('serviceWorker' in navigator){
    try {
      await navigator.serviceWorker.register('./sw.js');
    } catch (error) {
      console.log("SW registration falied");
      console.error(error);
    }
  }
}