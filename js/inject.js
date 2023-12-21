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



    document.head.appendChild(bootstrapLink);
    document.head.appendChild(bootswatchLink);
    document.head.appendChild(scrollbarLink);
    document.head.appendChild(styleLink);

    var navDiv = document.getElementById('navbar-div');
    navDiv.innerHTML = `
    <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
    <div class="container-fluid">
    <a class="navbar-brand" href="index.html"><img alt="Logo" src="https://raw.githubusercontent.com/Veillax/veillax.github.io/main/img/1683420300-32.ico"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav me-auto">
            <li class="nav-item">
            <a class="nav-link active" href="#">Home
                <span class="visually-hidden">(current)</span>
            </a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">About</a>
            </li>
        </ul>

        </div>
    </div>
    </nav>
    `;

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