document.addEventListener(
    "DOMContentLoaded",
    function () {

        const links =
            document.querySelectorAll("a");

        links.forEach(function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    const destination =
                        this.getAttribute("href");

                    if (
                        destination &&
                        !destination.startsWith("#") &&
                        !destination.startsWith("http")
                    ) {

                        event.preventDefault();

                        document.body.classList
                            .add("page-exit");

                        setTimeout(
                            function () {

                                window.location.href =
                                    destination;

                            },
                            600
                        );

                    }

                }
            );

        });

    }
);
