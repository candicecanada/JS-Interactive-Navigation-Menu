// Chaoqun Ding

// Store your full name in a Javascript variable.
let myName = "Chaoqun Ding";

// Add HTML content to the main tag:
// an <h2> element with the text ‘COMP2132 Practical Exam’
// a <p> element with text that displayed the value of your full name variable
$("main").html(`<h2>COMP2132 Practical Exam</h2><p>The Javascript used by this HTML page was authored by ${myName}</p>`);

// - Do not display the .sub-nav elements when the page first loads
$(".sub-nav").hide();

// - Clicking on "Products" or "Services" should toggle the display of the associated .sub-nav
// - A mouseenter on "Products" or "Services" should display the appropriate .sub-nav
// - A mouseleave on a .sub-nav should hide that .sub-nav
// - No more than one .sub-nav should show at a time
// - When showing or hiding a .sub-nav animate the transition (eg: fade in/out,or slide up/down, etc)

$("#products").on("click", toggleProducts)
$("#products").on("mouseenter", handleMouseEnterProducts)
$("#products").on("mouseleave", function(){
    // if enter and leave sub-nav:
    $(".sub-nav:first").on("mouseleave", handleMouseLeaveProducts);
});

$("#services").on("click", toggleServices)
$("#services").on("mouseenter", handleMouseEnterServices)
$("#services").on("mouseleave", function(){
    $(".sub-nav:last").on("mouseleave", handleMouseLeaveServices)
});

$("nav ul li:first, nav ul li:last").on("mouseenter", function(){
    handleMouseLeaveProducts();
    handleMouseLeaveServices();
})

// show sub nav of products
function toggleProducts(){
    $(".sub-nav:last").slideUp();
    $(".sub-nav:first").slideToggle();
}

// show sub nav of services
function toggleServices(){
    $(".sub-nav:first").slideUp();
    $(".sub-nav:last").slideToggle();
}

function handleMouseEnterProducts(){
    $(".sub-nav:last").slideUp();
    $(".sub-nav:first").slideDown();
}

function handleMouseEnterServices(){
    $(".sub-nav:first").slideUp();
    $(".sub-nav:last").slideDown();
}

function handleMouseLeaveProducts(){
    $(".sub-nav:first").slideUp();
}

function handleMouseLeaveServices(){
    $(".sub-nav:last").slideUp();
}