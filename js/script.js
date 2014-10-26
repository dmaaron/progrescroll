$(function(){
    $(document).on('scroll', function(){
        var allArticles = $('.article-holder').children();
        console.log(allArticles.length);
        
        var articleHeight = $('.article-holder').height();
        var winScroll = $(window).scrollTop();
        var articleTop = $('.article-holder').offset().top;
        var scrollCent = ((winScroll-articleTop)/articleHeight * 100);
        $('span').width(''+scrollCent+'%');
    });
});