
async function tableOfContent() {
    const { default: $ } = await import('jquery');
    var $toc = $('#TableOfContents');
    if ($toc.length > 0) {
        var $window = $(window);

        const onScroll = () => {
            var currentScroll = $window.scrollTop();
            var h = $('.post-text h1, .post-text h2, .post-text h3, .post-text h4, .post-text h5, .post-text h6');
            var id = "";
            h.each(function (i, e) {
                const $event = $(e);
                if ($event.offset().top - 10 <= currentScroll) {
                    id = $event.attr('id');
                }
            });
            var active = $toc.find('a.active');
            if (active.length == 1 && active.eq(0).attr('href') == '#' + id) return true;

            active.each(function (i, e) {
                $(e).removeClass('active').siblings('ul').hide();
            });
            $toc.find('a[href="#' + id + '"]').parentsUntil('#TableOfContents').each(function (i, e) {
                $(e).children('a').addClass('active').siblings('ul').show();
            });
        }

        $window.on('scroll', onScroll);
        $(function () {
            $toc.find('a').parent('li').find('ul').hide();
            onScroll();
            // No reason to add this line
            // document.getElementsByClassName('post-toc')[0].style.display = '';
        });
    }
}

export default tableOfContent;