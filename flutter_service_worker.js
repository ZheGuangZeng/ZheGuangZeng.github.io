'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "fa444c3c10772326900dad9737052d7b",
"/": "fa444c3c10772326900dad9737052d7b",
"main.dart.js": "c89e5bf68f27a683e0081f758a23663a",
"assets/LICENSE": "48d25a0bb8f3b2f2cc8080e1ea405b33",
"assets/AssetManifest.json": "1f30d2efff64dc849418c18e54e62e78",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/20047.json": "5147f5503ed08d92eca7a37ccda02d63",
"assets/assets/51104.json": "6718b63869470e5dc5e3c5db13de4f53",
"assets/assets/20010.json": "49047078409437e112e14d06991260f8",
"assets/assets/gsa_albums.json": "a554876b56dc1977f57690e82e6e6585",
"assets/assets/albums_other.json": "c436fc9d3d6c2791e04d555733aa945e",
"assets/assets/dew_itunes.png": "df2ed33d435102a481a171a4b3564dd7",
"assets/assets/20006.json": "c142cd5f37de0ee093a585ac7220d39a",
"assets/assets/6020.json": "9ade26bf5afb9b1fe96beb2db72c3b93",
"assets/assets/20051.json": "15ad3f658146c97d0f6fe40e979fb813",
"assets/assets/6372.json": "b4109a551fa1d132311fa852fa939a35",
"assets/assets/bible_esv_albums.json": "1fcd4b91f115f39caed27c3f9dbdbc0a",
"assets/assets/bible_ot.png": "8d5dffc38dce975d59860eba0e4a79b9",
"assets/assets/day_by_day.jpg": "f5bc62d2b26b20a91d6aa941d2f34df1",
"assets/assets/21011.json": "374788ad5708359569bfc2c3b30fbeb8",
"assets/assets/6364.json": "6a518ef22426fd6faf242bacaeaff195",
"assets/assets/51108.json": "7f55c5c5fd70b234805083e3a304be2c",
"assets/assets/ba_albums.json": "81e9c100983c9d35d42ffbf916ee6909",
"assets/assets/album_category_113_art.jpg": "666cdf6199daff3604eea743dde9768f",
"assets/assets/otg_qihang.png": "8996a93a49f57c9ea6f92d9abe14746c",
"assets/assets/yu_albums.json": "b7d4a8973075a2f6de8af7bdc12e8767",
"assets/assets/6391.json": "b425c5207ede9576fd6a183028d55a3e",
"assets/assets/20026.json": "0aa303370f7d4efca05f3c9bd66ae788",
"assets/assets/20071.json": "1ee8d070fb53384e1b8695c1914ae378",
"assets/assets/20067.json": "ca28e52ba53c73042c98252323cf22e4",
"assets/assets/6387.json": "1f5bac96ec3fcd2241c6de173cfbb4e6",
"assets/assets/6368.json": "6c35e104e0a344e88113d318189b576e",
"assets/assets/20030.json": "1199f51de6e54cbc101262bb9992a3e7",
"assets/assets/20031.json": "cbc4a4fcae9f7f8e0771a21429513580",
"assets/assets/6386.json": "94207388a3d1dedac261a2aa2c0cdc05",
"assets/assets/otg_xuanxiu.png": "3ceac550477934d6d04359bbb2ac99b2",
"assets/assets/6369.json": "4072aec533f0aa9e6104274e6df9998c",
"assets/assets/otg_bixiu.png": "98ebcb119df608f0cbf6fecba005fef1",
"assets/assets/20066.json": "3a6d646f628d2ed4245cc2bb409d0c40",
"assets/assets/joy.jpg": "e8d9fa0d7f2d085c2ca38c02da753c97",
"assets/assets/albums_ly_otg.json": "049587083218b7bb06b05d17ba84d001",
"assets/assets/hg_albums.json": "6306a430665f1f138ef54a9fa5990a2b",
"assets/assets/cw_albums.json": "c1d99921a170632e70b1e812761143f6",
"assets/assets/20070.json": "936ab11f39d5ceb09509502f6fecc180",
"assets/assets/it_albums.json": "5087799c3e57c1503a7d4603d5308d0a",
"assets/assets/20027.json": "74f24d84534333600826201441762ef7",
"assets/assets/6390.json": "455e83a3db76862daae828dfe8fd30fb",
"assets/assets/zdfj_songs.json": "3e1f98370387d0eaef3d580a6124dacf",
"assets/assets/51109.json": "79af68d1b5fc2193dfc89d802e0bd083",
"assets/assets/6365.json": "9c7fcda95f07b3b35359ce39c0742883",
"assets/assets/evnbyevn.jpg": "cc71be9e5eac8e0cc86b512ecd7d6486",
"assets/assets/bible_nt.png": "b42c6c29e9fdfdf3e1c88a428ae7d67a",
"assets/assets/6373.json": "693a625134c07365e11dc9ea5617a890",
"assets/assets/bm_albums.json": "3a25fb300f3527c89f41ee7de20f0ff7",
"assets/assets/6021.json": "7538516bfee58d4668a4bdd51653b1dc",
"assets/assets/20050.json": "82eef6da8c42bc8746e5393d580a9aca",
"assets/assets/vof_albums.json": "fa5252e724146b1eb93bf2eda64fc535",
"assets/assets/20007.json": "327e6586e2a8425386f37637c81394b5",
"assets/assets/banner.jpg": "632d5eed6854d77989b4d8f8d9275ede",
"assets/assets/20011.json": "a273f7c2f17512b236762d0541c198e8",
"assets/assets/se_albums.json": "6ebc14f40ea8804b5ac5040a70721c03",
"assets/assets/20046.json": "2f6e155e7ded46270f7b37d2ae6da90e",
"assets/assets/51105.json": "8212478e0638ea3b080a14fdff916874",
"assets/assets/6529.json": "491ac2e3a4640886e082f54511564ddb",
"assets/assets/6378.json": "6aae7d5317d9b0dd24cc3658917b1de7",
"assets/assets/20020.json": "ecebde40b31759f83b5b4b14e3f97201",
"assets/assets/6010.json": "c52910bcae4a6297e1e3d170898289fc",
"assets/assets/20061.json": "f91ad6293e08cfc3a6883b53da045206",
"assets/assets/6381.json": "4757ff4e04961d461933cc17d0d66043",
"assets/assets/20036.json": "bfaa5c6ed0191bcf122d181cf60223dd",
"assets/assets/51102.json": "31f7b1dc5b2e4d4c2567ac407aad0116",
"assets/assets/20041.json": "e4810586e57b1c69ffd71fdfdf7c5064",
"assets/assets/20016.json": "e4aa9234be85cc320f12eb6c66f2b10d",
"assets/assets/20000.json": "993d132ff9163ef48ec16a7c44ea2ff6",
"assets/assets/6358.json": "1e68c2d8fa95c455c1fb41b7d3f30aab",
"assets/assets/artist.json": "c9858b76f937a8257c1e453d55f2a66d",
"assets/assets/gv_albums.json": "29c99c270b01f884809145773fe8492a",
"assets/assets/20057.json": "70eb0c1c7d932f1fb70159f2cfc7e6a5",
"assets/assets/6374.json": "5608923629e144ad7ca47a8f7892d555",
"assets/assets/otg_shige.png": "83bd5370575f76cf3bb6aef7fbeeff15",
"assets/assets/6362.json": "86563641a2395298a1812378b724b79f",
"assets/assets/6363.json": "529eda7355afcf58a54baf5afc1d8e88",
"assets/assets/dp_all_songs.json": "f3208fde49ad54091078365d04a1fbc9",
"assets/assets/im_albums.json": "4fec49cd7336d959d5e21f690aafd104",
"assets/assets/6375.json": "f34790cb66cf0d31859c883c7f8755d3",
"assets/assets/gl_albums.json": "35edc0138a29b76f61674108466a9cd0",
"assets/assets/20056.json": "bd333c0c2b1d5c3a766e512f318a5f1d",
"assets/assets/6359.json": "aed136de0eb2517c290f01e0e922fb42",
"assets/assets/20001.json": "ed880cf88a8ce57450ca98c71139a8fb",
"assets/assets/20017.json": "42e2ba3a4dcc51349f43d556c4b8c5df",
"assets/assets/51103.json": "77569fdcc261fbe2d447714ee3ee6c83",
"assets/assets/bible_verse.json": "049f4784daf0c27e860b4cfd3184debc",
"assets/assets/20040.json": "71aac0d7cc10b50d0ad16bb27191b0a9",
"assets/assets/20037.json": "d35d4ea9213008f32cda0bef81cea02b",
"assets/assets/6380.json": "4b54beb3b639d86a0a7ecc9c5c92d1d6",
"assets/assets/20060.json": "d0e19bcbb16cdca690ca2e4a6abea9ff",
"assets/assets/hw_albums.json": "9e5a12b8904cbe3db0f9aaf324e7c17d",
"assets/assets/up_albums.json": "e7deffbe1ba665e42264f3f4f4ffbb48",
"assets/assets/20076.json": "c5bc83e06f3c0e46df4dfcfcb1f62285",
"assets/assets/20021.json": "fa51c29de8079b49602254aa69ce1e12",
"assets/assets/6379.json": "2fc454e13ce8258151906f903f651937",
"assets/assets/bible_chapter.json": "b1ad6b03b65c2f8f627e029fac039b3f",
"assets/assets/20034.json": "2248bc63264f1e0e132b8affc3d39dfe",
"assets/assets/6383.json": "8d360cedd29d435505907c85c5dacf21",
"assets/assets/20063.json": "8804fd79c5aa76c257d992659e695ef9",
"assets/assets/bs_albums.json": "c066c85b31919b23c17e97ca50361ba2",
"assets/assets/20075.json": "7849636977400ca72ec8151b28696df1",
"assets/assets/20022.json": "38f545eadfcd7093b23a7068be03102a",
"assets/assets/20059.json": "076ccd8b4e8e88012a35320a4fc5873f",
"assets/assets/20018.json": "a592eeea4e397564a8579c27c2df91a9",
"assets/assets/bible_book.json": "7da8cb1133e28c3c3282c29c4b1d8516",
"assets/assets/6360.json": "23782927cf6d28184a3a5d5a0da50de5",
"assets/assets/20038.json": "1344d65198df43c4e3ed0c179b340d77",
"assets/assets/sit.jpg": "0e0f9b40b0a1be364497ef178f2945f7",
"assets/assets/6376.json": "e7fdc270a63ae6d5c17a79834f887f59",
"assets/assets/mw_albums.json": "582426c6cc693e89a6f80fbb134b3017",
"assets/assets/lv_2.jpg": "27a1f1251d1b7bcbf033e85797d777e7",
"assets/assets/20055.json": "a4ee3706e8e24ede2a9e53f8f01bc868",
"assets/assets/20002.json": "e10de504f51855d1ebf59a92dfdbe120",
"assets/assets/lv_3.png": "5a1f3382d905093a761f31659b1ff84b",
"assets/assets/ee_albums.json": "596d1da35a8b194392697209d5677bd6",
"assets/assets/sr_albums.json": "61e6e2a3f70cfd7ab66dd3b977bc0609",
"assets/assets/20014.json": "aa8700d25cb65ec6ebf47c20906f5c84",
"assets/assets/otg_jinxuan.png": "b193e13f04b230e7d9eeb56ec36fc469",
"assets/assets/tr_albums.json": "d984afbf4a99cbee7de5da423438300c",
"assets/assets/20043.json": "79ccaca3991953101aaa69db38e4a8c4",
"assets/assets/51100.json": "766008c5badd3f66b80705331f2f90dc",
"assets/assets/20042.json": "d813022e6665039a9cf2849be9770bed",
"assets/assets/51101.json": "ac91d562d062ae129742abd25be1e3f4",
"assets/assets/th_albums.json": "c2187aba008de4fa61990060c95a590c",
"assets/assets/otg_teji.png": "e8fa1869ad6816c8fe4c24a0511f1eb5",
"assets/assets/9000.json": "8941db1f8fc051a95f3446d6def01500",
"assets/assets/20015.json": "7643e85760a95890fa1b7e928f226683",
"assets/assets/other_album_category.jpg": "4bab7e8958f64c76939d0162fc039c37",
"assets/assets/20003.json": "bdd713b78ff8b9e095cdd5d6ec15bacd",
"assets/assets/20054.json": "8e142e3513ec1f61a8b042f691a9a942",
"assets/assets/6530.json": "ecbe1b144767c5d114cc5aa245c06e0c",
"assets/assets/utmost_itunes.jpg": "688e1fa3372b0880aea2914d1c4c3e57",
"assets/assets/6377.json": "7039d2189c53d3869fa78210a68c3b3f",
"assets/assets/abs_devotional_lts.png": "372b2c8a4be79cc85142514e881a3a5f",
"assets/assets/otg_xianxiu.png": "806c0ed698a2fbbcc82ff77694d3fb44",
"assets/assets/gn_albums.json": "7520db2302720790cafa74d7c6f13bee",
"assets/assets/20039.json": "ffdd11f76a78b0443b496f519444f7c6",
"assets/assets/6361.json": "4a5e7fd8be5a3beed52cb9428f369fa9",
"assets/assets/bible_haomuren_albums.json": "f83fd10ec4d5183a2cc4552871e041bd",
"assets/assets/20019.json": "c6ac8f533abb827eff3fda53acb54f7f",
"assets/assets/6357.json": "1ad62a322d6766e9a01156238d01a799",
"assets/assets/artistCategory.json": "edffe69723f2c29285e1b0a8afb6ce4f",
"assets/assets/20058.json": "b6b375fc59b1ca6ebc3f89d0490d6372",
"assets/assets/wga_albums.json": "6a20293899e4b30617888cbf75191f47",
"assets/assets/20023.json": "a7ebca59a44c3233c23e4796c6164064",
"assets/assets/20074.json": "b11506e753d66e8b0f814fdf886bc48c",
"assets/assets/albums_zdfj.json": "6fd308a099ff5a974f6610005e7bd666",
"assets/assets/20062.json": "54f5df7153893cf24821b7b6556547c3",
"assets/assets/bible_topics.png": "64ea1869361c4a6edab989b594a5f890",
"assets/assets/6382.json": "010561a0e810d0ab06fc4f5927df170c",
"assets/assets/21018.json": "6ed12fac62159c86b5694334de3fd088",
"assets/assets/20035.json": "36d5ac27bb6c9392f42472a39e2298ab",
"assets/assets/6366.json": "22fa8c3413695b81a0ec6b71a780b573",
"assets/assets/6389.json": "12b0220436c276e0c1c8d3dd19862929",
"assets/assets/20069.json": "c20167e9d9fe5c8a78e50d27c428f32e",
"assets/assets/aw_albums.json": "3c46aa981b70f134905e0f35e87050a6",
"assets/assets/albumCategory.json": "31856697b301ea97942747fe44b979a0",
"assets/assets/6370.json": "bb0ed96a21841bae2f91e216ba5e1a58",
"assets/assets/20028.json": "8a02620adf2a790ebea993c661a1fe82",
"assets/assets/livingwater.jpg": "a32208c949aa60d2ef18eb3a87b0b48b",
"assets/assets/bible_esv_songs.json": "310fe6ea5b9fcce4f66c93e3072e520f",
"assets/assets/20053.json": "e7b8aeb8d4f37a9b935625659923b696",
"assets/assets/20004.json": "a6b9fdcbf0784ecd4bb4907a7943ab71",
"assets/assets/20012.json": "2d57205ef7948bf8ad70d995d933812b",
"assets/assets/51106.json": "f7d81be75d97a4424c0f0dd4f9d637e1",
"assets/assets/20045.json": "ccbab293ab113c191f3b3ae0e9d42986",
"assets/assets/20032.json": "d48c261929c3dd21d9f08656e9d27bd4",
"assets/assets/6385.json": "f275444b414b1680414c463a09c76ec7",
"assets/assets/20065.json": "4168e0821b1445f00a8cf3ca5db37f39",
"assets/assets/bc_albums.json": "0a9bf80972bf6bec51b8af60f9b57b15",
"assets/assets/20073.json": "2b3ba79b76fbab1814fc80cd0a9f9f10",
"assets/assets/ns_albums.json": "a3da09a9a484ebe58f65d25112c14ffc",
"assets/assets/20024.json": "53fcf5a071292f1bd9bd266d60d80396",
"assets/assets/zdfj_category.png": "fb3a49325ae8d4c54c26da949aecf82c",
"assets/assets/20008.json": "a0e10bd7d7b78a53d3b0e6bf54a46e48",
"assets/assets/bible_haomuren_songs.json": "0bd644856c5745e9b830c06b6211efa0",
"assets/assets/20049.json": "bf78900fc18551089f59daf1d4432b46",
"assets/assets/albums_hmr_otg.json": "7c1290c97eba94e6aa711c3e8812ab85",
"assets/assets/20048.json": "0057a194a862af006c1c7269212473d9",
"assets/assets/otg_jinshen.png": "8cd77a76b36fc87608b51d2a6ac29742",
"assets/assets/bf_albums.json": "89d43ffbd19a1423be095d57a6c50f67",
"assets/assets/20009.json": "f2373231fe6442e954a95aec681c425b",
"assets/assets/6392.json": "8aaa973f84299d34965f2bc379c9ceb9",
"assets/assets/ws_albums.json": "eacfc8abd29bf202c6aae9936837ab83",
"assets/assets/20025.json": "5cc2300ac65d01b6a1559d8b66a42854",
"assets/assets/20072.json": "7a777404e7fa9cbb0243d3ecac1cbbd6",
"assets/assets/20064.json": "1b2ef82f99a2c04528992f3c9102a298",
"assets/assets/6384.json": "0aa06512f0ce80890f0e4b60a627ded3",
"assets/assets/otg_jiangtai.png": "f19f855c99018da6f258594eb9c0add7",
"assets/assets/20033.json": "190a6c6faaa4eb7cf90563e3f3afabf7",
"assets/assets/51107.json": "abba26f14415039b849d80b2c02f8a49",
"assets/assets/20044.json": "96db63d11511999a33385bb38fac23d4",
"assets/assets/ly_otg_songs.json": "23de98f540b61370c12d02bb7c6c64c9",
"assets/assets/20013.json": "febb9a9c4ea1b8528007a1d0fc6d7a3f",
"assets/assets/20005.json": "dd269d2b3f4e1f995bf4b57f737a3e47",
"assets/assets/20052.json": "416402c4362bd2de371bc2f243d62d1d",
"assets/assets/hmr_otg_songs.json": "4dd506a9e9ed07a64c740854a1516b92",
"assets/assets/20029.json": "a5a928e240d92bac298f0d549396b88f",
"assets/assets/6371.json": "3e9cd55550000d46d6d8f9be95693dc6",
"assets/assets/sg_albums.json": "2dee44f88620d40d8cff43a05b1b358a",
"assets/assets/20068.json": "a22af910ab902e5d3207944f5986fd8e",
"assets/assets/6019.json": "0a33477a509276d99deb231664511c73",
"assets/assets/cc_albums.json": "799008e8fac82b06282ffa9e78485745",
"assets/assets/6367.json": "8d9406f0f559b2526212a5a369b4ff71",
"assets/assets/6388.json": "b3c1c42d61aed967322c0545fc7783b1",
"assets/assets/21012.json": "43d57936a1822c8d96fbe891cd5424e2"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
