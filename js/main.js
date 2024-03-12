$(document).ready(function () {
    // Function to check if an element is in the viewport
    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to add animation class
    function addAnimationClass(element, animationClass) {
        if (isInViewport(element)) {
            $(element).addClass("animated " + animationClass);
        }
    }

    // Initial check for animations
    $(".animated").each(function () {
        addAnimationClass(this, $(this).data("animation"));
    });

    // Add animation on scroll
    $(window).on("scroll", function () {
        $(".animated").each(function () {
            addAnimationClass(this, $(this).data("animation"));
        });
    });
});
