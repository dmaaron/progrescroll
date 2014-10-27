$(function(){
    $(document).on('scroll', function(){
        var allArticles = $('.article-holder').children();
        var currentArticleIndex = 0;
        var currentArticle = allArticles.eq(currentArticleIndex);
        var currentProgressBar = $('.title-holder').children().eq(currentArticleIndex).find('span');
        var articleHeight = currentArticle.height();
        var winScroll = $(window).scrollTop();
        var articleTop = $(currentArticle).offset().top;
        var scrollCent = ((winScroll-articleTop)/articleHeight * 100);
        currentProgressBar.width(''+scrollCent+'%');
    });
});        
                