(function () {
    var scrollbarLink = document.createElement('link');
    scrollbarLink.rel = 'stylesheet';
    scrollbarLink.href = 'css/scrollbar.css';

    var styleLink = document.createElement('link');
    styleLink.rel = 'stylesheet';
    styleLink.href = 'css/style.css';

    var bootstrapLink = document.createElement('link');
    bootstrapLink.rel = 'stylesheet';
    bootstrapLink.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3/dist/css/bootstrap.min.css";

    var bootswatchLink = document.createElement('link');
    bootswatchLink.rel = 'stylesheet';
    bootswatchLink.href = "https://bootswatch.com/5/pulse/bootstrap.min.css";

    var authorMeta = document.createElement('meta');
    authorMeta.name = 'author';
    authorMeta.content = 'Veillax';

    var ogTypeMeta = document.createElement('meta');
    ogTypeMeta.property = 'og:type';
    ogTypeMeta.content = 'website';

    var ogUrlMeta = document.createElement('meta');
    ogUrlMeta.property = 'og:url';
    ogUrlMeta.content = 'veillax.com';

    var ogDescMeta = document.createElement('meta');
    ogDescMeta.property = 'og:description';
    ogDescMeta.content = 'Now on https://veillax.com!';

    var iconLink = document.createElement('link');
    iconLink.rel = 'icon';
    iconLink.href = 'img/favicon.ico';

    var appleTouchIconLink = document.createElement('link');
    appleTouchIconLink.rel = 'apple-touch-icon';
    appleTouchIconLink.href = 'img/apple-touch-icon.png';

    var viewportMeta = document.createElement('meta');
    viewportMeta.name = 'viewport';
    viewportMeta.content = 'width=device-width, initial-scale=1';

    document.head.appendChild(bootstrapLink);
    document.head.appendChild(bootswatchLink);
    document.head.appendChild(scrollbarLink);
    document.head.appendChild(styleLink);
    document.head.appendChild(authorMeta);
    document.head.appendChild(ogTypeMeta);
    document.head.appendChild(ogUrlMeta);
    document.head.appendChild(ogDescMeta);
    document.head.appendChild(iconLink);
    document.head.appendChild(appleTouchIconLink);
    document.head.appendChild(viewportMeta);

    var footer = document.getElementById('footer-div');
    footer.innerHTML = `
    <footer id="footer" class="bg-dark text-center ">
    <!-- Grid container -->
    <div class="container p-4">
    </div>
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
        Made with ♥ by Veillax</a>
    </div>
    </footer>
    `

    var bootstrapScript = document.createElement('script');
    bootstrapScript.type = 'text/javascript';
    bootstrapScript.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3/dist/js/bootstrap.bundle.min.js";

    document.body.appendChild(bootstrapScript);
})();
