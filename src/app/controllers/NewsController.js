class NewsController {
    index(req, res) {
        res.render('news');
    }
    // news/:slug
    show(req, res) {
        res.send('lỗi BỐN KHÔNG BỐN ');
    }
}
module.exports = new NewsController();
