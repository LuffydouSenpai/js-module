function basDePage() {
    window.addEventListener(
        "scroll",
        function () {
            let defil = document.scrollTop |
                document.scrollingElement.scrollTop | window.scrollY;
            if (defil + document.documentElement.clientHeight >=
                document.body.offsetHeight - 100) {
                console.log("bas de page!")
            }
        }
    )
}
export{
    basDePage
}