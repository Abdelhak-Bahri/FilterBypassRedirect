function onPageShow(){

   browser.tabs.query({ currentWindow: true, active: true }, function(tabs){
        var url = tabs[0].url;
        var title = tabs[0].title;
        browser.tabs.create({ url: "https://www.filterbypass.me/s.php?k=" + url + "&b=12", selected: true })     
    });
};


document.addEventListener("pageshow", onPageShow());