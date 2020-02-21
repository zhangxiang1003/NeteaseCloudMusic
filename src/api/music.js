import ajax from './ajax.js';
let baseUrl = "https://musicapi.leanapp.cn";
export default {
    /* 搜索页面接口 */
    //1.热门搜索接口
    gethotsongs() {
        return ajax(baseUrl + '/search/hot');
    },
    //2.输入关键字搜索接口
    searchResult(keywords) {
        return ajax(baseUrl + '/search', { keywords })
    },

    /* index页面需要的接口 */
    /* 1.获取轮播 */
    getBanner() {
        return ajax(baseUrl + '/banner');
    },

    /* 2.最新音乐 */
    getNewSong() {
        return ajax(baseUrl + '/personalized/newsong');
    },

    /* 3.精选歌单 */
    getsongsheet() {
        return ajax(baseUrl + '/top/playlist');
    },
    /* 4.推荐mv */
    getRecommendMv() {
        return ajax(baseUrl + '/personalized/mv');
    },
    /*5. 点进去的最新mv */
    getNewMv() {
        return ajax(baseUrl + '/mv/first')
    },

    /*6. 推荐电台 */
    getDjRadios() {
        return ajax(baseUrl + '/program/recommend')
    },

    /*7. 最新专辑 */
    getNewEst() {
        return ajax(baseUrl + '/album/newest');
    },
    /* 8.获取歌单详情 */
    getlistDetail(id) {
        return ajax(baseUrl + '/playlist/detail', { id })
    },
    /* 9.获取mv详情 */
    getmvDetail(mvid) {
        return ajax(baseUrl + '/mv/detail', { mvid })
    },
    /* 10.获取电台节目 */
    getradioDetail(rid) {
        return ajax(baseUrl + '/dj/program', { rid })
    },
    /* 11.获取专辑详情 */
    getalbumDetail(id) {
        return ajax(baseUrl + '/album', { id })
    },


    /* 排行榜页面需要的接口  idx为  0,1,2,3*/
    getTopList(idx) {
        return ajax(baseUrl + '/top/list', { idx })
    },

    /* 歌手榜单页面 */
    //1.获取歌手榜单
    getSonger() {
        return ajax(baseUrl + '/toplist/artist');
    },
    //2.获取对应歌手的歌单
    getArtistplaylist(id) {
        return ajax(baseUrl + '/artists', { id });
    },

    /* 音乐播放页面 */
    //1.获取音乐播放url
    getSongplayUrl(id) {
        return ajax(baseUrl + '/music/url', { id })
    },
    //2.获取音乐单曲详情
    getsongDetail(ids) {
        return ajax(baseUrl + '/song/detail', { ids })
    },
}