/* 返回顶部 */
$(document).ready(function() {
    var backToTopBtn = $('#backToTopBtn');

    // 显示/隐藏按钮
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            backToTopBtn.fadeIn();
        } else {
            backToTopBtn.fadeOut();
        }
    });

    // 返回顶部功能
    backToTopBtn.click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });
});