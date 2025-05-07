(function () {
    // Create a function to efficiently append multiple elements
    function appendElements(parent, elements) {
        const fragment = document.createDocumentFragment();
        elements.forEach(el => fragment.appendChild(el));
        parent.appendChild(fragment);
    }

    // Group critical and non-critical resources
    const criticalResources = [
        { type: 'link', rel: 'stylesheet', href: window.location.origin + '/css/style.css' },
        { type: 'link', rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3/dist/css/bootstrap.min.css' },
        { type: 'meta', name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ];

    const nonCriticalResources = [
        { type: 'link', rel: 'stylesheet', href: window.location.origin + '/css/scrollbar.css' },
        { type: 'link', rel: 'stylesheet', href: window.location.origin + '/css/docs.css' },
        { type: 'link', rel: 'stylesheet', href: 'https://bootswatch.com/5/flatly/bootstrap.min.css' },
        { type: 'link', rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0' },
        { type: 'meta', name: 'author', content: 'Veillax' },
        { type: 'meta', property: 'og:type', content: 'website' },
        { type: 'meta', property: 'og:url', content: 'veillax.com' },
        { type: 'meta', property: 'og:description', content: 'Now on https://veillax.com!' },
        { type: 'link', rel: 'icon', href: window.location.origin + '/img/favicon.ico' },
        { type: 'link', rel: 'apple-touch-icon', href: window.location.origin + '/img/apple-touch-icon.png' },
        { type: 'div', innerHTML: `<script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/prism.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/plugins/toolbar/prism-toolbar.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/plugins/show-language/prism-show-language.min.js"></script>` },
        { type: 'div', innerHTML: `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-okaidia.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/plugins/toolbar/prism-toolbar.min.css">` }
    ];

    // Create and append critical resources immediately
    const criticalElements = criticalResources.map(resource => {
        const element = document.createElement(resource.type);
        Object.entries(resource).forEach(([key, value]) => {
            if (key !== 'type') element[key] = value;
        });
        return element;
    });
    appendElements(document.head, criticalElements);

    // Defer non-critical resources
    window.addEventListener('load', () => {
        const nonCriticalElements = nonCriticalResources.map(resource => {
            const element = document.createElement(resource.type);
            Object.entries(resource).forEach(([key, value]) => {
                if (key !== 'type') element[key] = value;
            });
            return element;
        });
        appendElements(document.head, nonCriticalElements);
    });

    var footer = document.getElementById('footer-div');
    if(typeof(element) != 'undefined' && element != null) {
    footer.innerHTML = `<footer id="footer" class="bg-dark text-center "><!-- Grid container --><div class="container p-4"></div><div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">Made with ♥ by Veillax</a></div></footer>`
    }
    var bootstrapScript = document.createElement('script');
    bootstrapScript.type = 'text/javascript';
    bootstrapScript.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3/dist/js/bootstrap.bundle.min.js";

    var popperScript = document.createElement('script');
    popperScript.type = 'text/javascript';
    popperScript.src = "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js";

    document.body.appendChild(bootstrapScript);
    document.body.appendChild(popperScript);

    var gmiLink = document.createElement('link');
    gmiLink.rel = 'stylesheet';
    gmiLink.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0';

    // Add this with your other font imports
    var codeFontLink = document.createElement('link');
    codeFontLink.rel = 'stylesheet';
    codeFontLink.href = 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap';
    document.head.appendChild(codeFontLink);

    // Add Bootswatch Flatly theme
    var bootswatchLink = document.createElement('link');
    bootswatchLink.rel = 'stylesheet';
    bootswatchLink.href = 'https://cdn.jsdelivr.net/npm/bootswatch@5.3.2/dist/flatly/bootstrap.min.css';
    document.head.appendChild(bootswatchLink);

    // Add Bootstrap JavaScript (needed for some components)
    var bootstrapScript = document.createElement('script');
    bootstrapScript.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js';
    document.head.appendChild(bootstrapScript);
})();
