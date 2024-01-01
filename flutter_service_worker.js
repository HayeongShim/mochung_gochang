'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "fa62a0f385fd246e09c15612da75b2b8",
"index.html": "10bf26c6110e84ec58beedec2c0ac56f",
"/": "10bf26c6110e84ec58beedec2c0ac56f",
"main.dart.js": "8d5536a07ce4b7dbfdaca041f8aa4088",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9b9f453ec4a7848f6674fb4e251327f4",
".git/config": "025c562d2537c0731a00ab7d8caf6c20",
".git/objects/61/cb3e5be1698c96a005d54969889f7fe11c13a7": "f83158bad4c8ff795518e8696a859e1c",
".git/objects/0d/ba89fe5881ac4fddc8c53c9510e43f632580df": "48b5bc8516c35a2170d6c9a3a3d549f2",
".git/objects/92/8ff56ed5c45eea095541e599511146272d1c96": "17766800bd0111ab94fffaecec35733e",
".git/objects/68/ec7e631c77537fefa844d7fe4e7970190d709f": "06f673299b3270a98955f99ec8ffc0f7",
".git/objects/03/d514e5f73732afc3fd4d307c984bc07cba3476": "ec8d9bacd6d566bd86d80129cfe1f8aa",
".git/objects/32/d256d4b55c364caf76f2aeea84f71ce992c082": "2ddc5f998199356fb2cf68c89b945459",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/69/cb29ddc61dbd0595883361b13c56e686158a00": "b0f6d4fb19cf36ceb6ab1548c19ef7e0",
".git/objects/69/51b6abcad55676bdfd94fda374c201132f5e1e": "0b1d2ff89980c5dbd0dbea46adc657c8",
".git/objects/5f/11c22a8504a71e254e25488c70485c6dc39efb": "cbccd3e5a7709db7e7921783e8d9cdba",
".git/objects/9c/fc828713b71b1a4b5dc1c7f8f079c630941721": "7ccef6a33c317af07757654445c8beec",
".git/objects/9c/8d9ee4cb1db2eeb5b1de8eddd66335fd7aca5b": "2b5b8e114b64de38799fa115df8ad12f",
".git/objects/a4/009ead9550c41428ee1ef4acad0bf291f2a417": "a34aa9b20bf61a2506d2cc3a764bd4b8",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d0/0edb296a9b03f60b44a91f62eb1cecb4b2f772": "33d6562f342bef7227ad9f54f6082cb3",
".git/objects/be/4ee85c45119c464bb87d03d7151550edaab9ac": "263af081173ceb9ca26fa9476f38b108",
".git/objects/b3/9d9da7f6a9e5cc74548fa885437fb1006afcc7": "70cea5738881883c2aa93739335aa3d5",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/da/709c5bdf0edd4662d736c2386a9eb729fd8ed6": "25dbc6b3c075840b243899db5a579de6",
".git/objects/da/5da51e756d6217c87e1b18a29f8a58e8f34e35": "1cf5c15354300b8df8c9cc5d0ae8898f",
".git/objects/a2/3d7b288883dcecdbf9e943d0063c77ee249c9f": "b21b33176a9f99bad1b45faa203115eb",
".git/objects/a2/fb9c3d5efa404e73736c42aba0c0cd71352ca6": "ba9158d5cdee93787b5342aeabf0a98d",
".git/objects/a5/0fc8ba566afac2bee34d1e1d89808e3e75b126": "fd987e3afde89e998c14a79ed1190024",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e2/893ab6176fef805c885b8d6b56340190584806": "0d60012cf61f428e897777e93d3a3f68",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/3eb11f71f5a0b299cf35047605f2bd4f8c1ab5": "3cee9f4ddd33d8d4325fa69fa5b7eed9",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fc/cc7b9c8cb4bf2e50ed8ffe2d216bf775f2e68c": "5cee780847e9f14d5a3568fd47f0bfba",
".git/objects/fc/461c7ba90d212fcaefcd03cb66ac86e3ed0a36": "fa0cd45091a646e6b62a83cfaab3cfa3",
".git/objects/e3/06ceae33d393ec54867741c17110df4c5d4927": "77560b5c117b303db5de3a831955482b",
".git/objects/cf/9984197bcd7dc1d51a71352cdd1327007ad2c4": "fbcfb9fe086f0b017d32a80a98f202e4",
".git/objects/fe/2f99cec931a83748e38ce907a937ca1da291f0": "b38ddee6d97b07e68cb38a850eb11486",
".git/objects/c8/794c6c18e0a4a40d1c960cc15b6762ae6b56b5": "5a80cb176a306564c371e0af52769e78",
".git/objects/c1/65e3a1444bdd039b75146d78fe48cf67186303": "7a4678603da7d80c75e4ababa16fe233",
".git/objects/c6/dab8a7a1d9f41efb86d555c93a9832816a37a0": "64054da53175ea8f28f2bebb51b330eb",
".git/objects/ec/19a442dc632a2d97d090134874a9cae9de920f": "6af145fdc61aa6fc0e4da2a3f93f8752",
".git/objects/ec/0d30503d7cbf1d7dcc26b12318a1fa6bb0bedc": "888f65b2ae7646044c9a76d641ab979e",
".git/objects/27/5ee86b9181ced6fc244b35add568b6769122a3": "c898e29472ae5cbd19c3c18539caa25d",
".git/objects/11/60c8ee4ae0b5130adbd3312fa117e6ce369b62": "e85522ac0537558f35fd226e34315a33",
".git/objects/29/7c5160c787b1c4b1b3995198ff66f3de154ce7": "0169fa82549fa8fd582088c869a483ea",
".git/objects/16/48507199b413a77e12cb8c40d59618f38c2ee4": "bf6e19a683ac5634eba5c750d609051b",
".git/objects/16/cad5d06b30c9d8efea8eb52199ec82a1d54ebc": "d5387a0116a4e1dbcc2449ab9521d6de",
".git/objects/89/b8f25fe1feccfecdfbb60b53822ed50d439c62": "6199d62c315696cfa4a3c0194fbfdd0f",
".git/objects/45/09da07304ed53915e645ddb7927ed88b4e39a3": "6484d29707844dc50d0b51b4384de356",
".git/objects/73/cf239c8baff697e7ceeecf6c79c9c628124e8a": "d544af517671c7e20eabdb240de7279c",
".git/objects/87/86ed025966d56cf4edb8ebf5645f1cc8d830b8": "ac1d47f0cef1b36a592b1865cb0e5e69",
".git/objects/87/7562586890eb1b439c397246ebcede11a5196d": "147b9d713be270b1284dc36e53b1152e",
".git/objects/1a/30b6ff3771506c560ad1168e58182449679c63": "8ed3be275fc6dc92eeb8078cb5e335b4",
".git/objects/1a/22a4fcff9bc4a26e5dd7cdc33f3157a7e1aaac": "ccf4c4d117e639d054b038466cfbd607",
".git/objects/28/5ef263cbc2e8ab4dc879eb07a8d308eaadeca8": "3b7595f8c4373df1eabbf4bfc2fdf0a9",
".git/objects/7b/865a0c5f46d739b93b94863196ff2f92e92a8d": "52b53ab62ed23d8a058e48b607aaa1e2",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/6729864d621ca7e43479dc3dedba46a98ce36a": "d5efa3f8d2f0d5f3747e0b28ff39d766",
".git/objects/4c/80e810a2decbca98cc8ec76f7b8fc098f9b6ae": "ba042ce5f4ad9e3b7195d743fb522478",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/26/3bd4374879f4db2acaf765ee8449498d897f71": "23ab09177869aacc95f147935c507d91",
".git/objects/4d/4baf23e411a1f4734488a92b283d03810c157a": "1e2afc82e26b09dfab6cfd60e1bd5b86",
".git/objects/75/d426e702c45450cebf5b56c2ed3b9c2b8fd03a": "36880e28febc6df31c2942395034ebee",
".git/objects/44/de60ccb699be5b8bf2726f4a0c2816b8fbd976": "92dcec55084a6253ec272cf138a26c62",
".git/objects/2f/1503db5c66c61603a806c1c89dec61b4082d5b": "0dcf5b438729af490654069eecf4e519",
".git/objects/43/01ec1869d66b858c119ccf5b3851688b2a9e44": "4573b2353adc552c0f05e80af1a834e7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9a/1147011fdbfa6f0091dcef873712c3055fbf01": "ee12d753aee124f75e3af8f4847710f5",
".git/objects/9a/fe1652f93a84f6846b39e5b71593ecfbe7e8ce": "a46aaef49a4e67dc1c24442c653f4a0c",
".git/objects/36/bbddc71fc088636aaed72249463fe4dd146886": "348c46e32f19d5548fddc40880286087",
".git/objects/5c/df870b4860237d2e637a9d153cc368695e14a6": "62444ca32e0ea66a3675627444b457cb",
".git/objects/5c/e3900242a4aac9fdf744d4df2f5053b7d05e5c": "1a44402f8c332ffbe083afdc852e3363",
".git/objects/09/882adc515900ac8dd766e583972599395f61a3": "ab4f23c15f7daa0d391b4ddce8025b33",
".git/objects/5d/974b53206f69d96a5a49b98da675bacb7651a0": "1b40c9a987a9b9b0beb6b313d6551522",
".git/objects/5d/f2e2b5ec09a7ea10cc913a1b51ef162482c627": "b5c193d40000a70c26a15494d9822661",
".git/objects/91/975a5aace68809e61d29cd8e079ca5e39b7d87": "8418689c59031b84eb1a7e5a2034c2e0",
".git/objects/62/f8512bda598d59cbf1689e7e47ed2a68bd7a26": "26a57ef845f7d20b5390ca4e4d5a47a6",
".git/objects/96/1be36dccd1619b0c375f54a1b9dbe587a57d52": "5793c1741f1ffd21d24e711e555967c9",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/08/401cbb3a62a993ecd952d1ebfd2592fe6b02fd": "f13841dc924a6bf2554bd4461dd7cad5",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/0a/5f871d135f0877d9ff9ac9249375f3e086bc2a": "9f86a71d8146afac8f31e358be32c868",
".git/objects/d3/9212e50b0e7a6f42aa8a5fe529fe9379c6c85e": "cbbaa966e3ccd64186e50809e32e870e",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/a0/e227b6decfdcf88833f1b3a7b05e31a803205f": "0594897c9dd8cb2749e9350a60c7e6f1",
".git/objects/dc/ee6556a1841fae8002f31de3f1744ae8a5ed9d": "2cc8bb2112710ef01c3a703834e4351d",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/733202eb70bd16efcb9c7ff7bdf529ffd3b9ca": "e6cf462120fb631bca91426071d01573",
".git/objects/db/d82f03582122d2fed772525cdb97207abac89c": "f1df8bc57c23e01d3d1ea2c945430685",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/a6/4e0a716cb46e597e43404a6db7847f81258baa": "693d1ece79433282cd20887126ea61ed",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/bfdad5cb8cc8bada26213cee6ccc15fbb372a7": "b0d72532db82b675d2544dafe00495f0",
".git/objects/c4/23f5a53518892d76a42644cc06add349de8841": "1abeaeb947848280d7ae610afa64beb7",
".git/objects/e6/7e95b887ca53a3d7a5986a0f84067cce30e8f4": "c6fce804b75f413736a49775cff89873",
".git/objects/e6/cb49b5ae482db4421cbb8ffd737e07f3bbe218": "cbeeab05dfda58353a36fbd1dcfdfe67",
".git/objects/e6/1c995398b6b52e60c8511609646af91bf1c481": "9864440e465273d8bf8af3c1cc9e485c",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/c5/85233ce77ee8fb230264ca77cfe45317fc9357": "831c69844c7fe2d3469e6fe3a5b78391",
".git/objects/cb/db03fbb6e002cae8cc8657ae35a5a177f58f80": "961889004496a8c3ea24f4974175c805",
".git/objects/46/5191d90c928419d8e3ddefbb8086f14dbff7d6": "90ae4d7590e50fb2b40522ec863c0e22",
".git/objects/46/3d742e78a7e197fe410c0301c44ae0b2b919e1": "27ba0e2a4faad06aa33efbf3424f288d",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/70/b2b18b913f285f5cd467a532e362e642605a74": "7f64ac4f8d7227be749234fd2dbe5080",
".git/objects/84/f5859c832d2a7b8b5da18c01b0faa2ed7dbda8": "640d77640be14dc5c33729ffdb4684d0",
".git/objects/4a/9d6dae4cad3d44bc50306e8614929451462f5d": "c1103d6eaef8fae08ed1a4ca8f5beddb",
".git/objects/12/1dadce81e9fa495176e54a21b7bec44778abba": "63d3b27c1915a1944b049cbb1b0f1f39",
".git/objects/85/b77b8abad088734a57d9fa0011fb69d35e8963": "d8213e79543945f2765fcd8fa6b8bf5c",
".git/objects/76/8792cff3ee42bfe68044de8842b916366525b3": "a1c5e7b55252e35a848acdca585a6ea3",
".git/objects/1c/7009b2cc5110740c6821d4c2364af6fcbab11a": "335cb97fd6cab6e12df092e96721c8a7",
".git/objects/82/efa7f28f03ec334580254e4bb02dd4bcb876cf": "8b7e49e62c1772cb67ec93b0c64b7e96",
".git/objects/40/15f167002d07a05bc68796b8eaef423d172f8e": "812748727d9e7819f641991e90416663",
".git/objects/2e/0e10280b7721315428b19d2cbc683a7e7f2e71": "2ec5d04cd116153d19f443003cd51735",
".git/objects/8b/b5d29ab669a5b3b54070d844baf25953460c9f": "db90717339e424c4fdcb6851a40b2e71",
".git/objects/13/ca44088ebf09f50f5dc507249300ab89b1e4c7": "de5a26b5c9146a2a2916b811a1e6b54d",
".git/objects/22/2198e5b658e52b1e8392fa85f81b5b0ad89699": "e183403d82efb1b3e5005d5a49e3526b",
".git/objects/22/21adde8f9da0b56b290706a0513057d6d650e2": "736baac056fc0e3b820790b75d97696d",
".git/objects/25/037063a37a8df3a67942716f26ed6ba24b8e92": "c421b822dad5efd67c748e15ef0e2f2b",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d2614ade74ff8005df2ff4edcdb37d8b",
".git/logs/refs/heads/master": "d2614ade74ff8005df2ff4edcdb37d8b",
".git/logs/refs/remotes/origin/master": "08214b2895914e6d98a055202573e356",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "49f90b30bf6c22aeff5b264040b6fbb1",
".git/refs/remotes/origin/master": "49f90b30bf6c22aeff5b264040b6fbb1",
".git/index": "14f465776bbe236d8a858506f633a51a",
".git/COMMIT_EDITMSG": "171e9afc0f85aa52ad098e524ff56c24",
"assets/AssetManifest.json": "311c8e3d3b270e6ff93d45f588d81ca5",
"assets/NOTICES": "8e0ff0322bf2bc800ddaec371ee0f1f7",
"assets/FontManifest.json": "6caa214f216a42dc52d984eb1a97153e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "60a53721fe15d389ce965ada5d3e802c",
"assets/fonts/MaterialIcons-Regular.otf": "0ec33d6f4e95115222113971d3943fed",
"assets/assets/images/green_1.JPG": "dc8604a2480c8161ff1df0e8c7a419a8",
"assets/assets/images/green_0.JPG": "3419bf25c2c92502a95502157d6fbfca",
"assets/assets/images/green_2.JPG": "411cc0dca01de4175ef36e1d49a0e5bc",
"assets/assets/images/green_3.JPG": "ee2012d5db77877196c1468caa2d4f2a",
"assets/assets/images/developed_by.png": "8d038a07647c205f2f6eccaab7d061eb",
"assets/assets/images/green_4.JPG": "d95713fd5768f719ed8fa2d3e1298d87",
"assets/assets/images/0303.png": "11c7591bd60a81f7af75761c4c85a05b",
"assets/assets/images/guide.png": "fef0c6d190cdeee35de766367e4a0759",
"assets/assets/images/wizard.jpg": "bdef253c6ddb8a933a3173cfbea1805c",
"assets/assets/images/wizard.png": "8d8146acb42d2bbd60d29a0f0f179991",
"assets/assets/images/express.png": "4a1c38a44c10ec8ce0bd6d52756bbbc0",
"assets/assets/images/intro.png": "c3a3dbb7c59f543c38f4d56e487293ce",
"assets/assets/images/KakaoTalk_20231125_001141292.jpg": "81845ab31f9a85f7c014aa69934ed088",
"assets/assets/images/white_3.JPG": "f4860f73903c4312a5a2ee5f3f58c3e6",
"assets/assets/images/white_2.JPG": "428fb9ff945717b93346c54b86c61b76",
"assets/assets/images/white_0.JPG": "b4c905c6e1443e170975d09b11e80b2e",
"assets/assets/images/white_1.jpg": "807130cd23ad288cb95bff48e204b30e",
"assets/assets/images/white_5.JPG": "dccc886e2efa36fd010825810a4acb02",
"assets/assets/images/white_4.JPG": "9ad09cb5120c551ae0601c2bb44ff0aa",
"assets/assets/images/place_info.png": "b98feb15619aaa39c7afab0abdf70004",
"assets/assets/images/white_6.JPG": "ce097f88b62d2649d85c2cf0c9745b9a",
"assets/assets/images/white_7.JPG": "dc552dc132abc790a061619e45bbc30d",
"assets/assets/images/blue_2.JPG": "2765e4270d243d0999a68343299e9852",
"assets/assets/images/blue_3.jpg": "1316593aea4efe595227c07178bc23c0",
"assets/assets/images/blue_1.JPG": "41cebe29c6a2acf03ec47351df3c6278",
"assets/assets/images/blue_0.JPG": "acb7fa9d60034f4ad4aee07fc946b311",
"assets/assets/images/place_info_2.png": "064f95658ff7f82c75d9fe66de7c11da",
"assets/assets/images/blue_4.JPG": "f93549ab1c2227be2c68e2844efdcc58",
"assets/assets/images/invitation.png": "68ed18cf0f7bfa0147768fcacce657ac",
"assets/assets/images/blue_5.JPG": "db0742b24c1ff355113592e5b8ac9558",
"assets/assets/images/blue_6.jpg": "e12f931de7563a7a1bca3f250874c33a",
"assets/assets/fonts/GowunBatang-Bold.ttf": "04977f1734ccba2e1525b50660f96458",
"assets/assets/fonts/GowunBatang-Regular.ttf": "9c229195073bb2e4de42ff8a541e6eee",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
