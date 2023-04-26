'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "870f35240e5780e25c2ae7ff92eaf74d",
"assets/assets/helpIMG/highResRuinedMF.jpg": "25052b8868be79438e414f1aec2e3133",
"assets/assets/helpIMG/mascot.png": "d38e902674cbb98f9fe87ac5e81eb51b",
"assets/assets/helpIMG/mascot_upscaled.jpg": "dc2be604a6091e0f52603a979ff4af33",
"assets/assets/img/item/0.png": "a94f945d026edf8cbea6f03b758a024c",
"assets/assets/img/item/1001.png": "1fa242e56905ac8d810e3547aec5a42e",
"assets/assets/img/item/1004.png": "0d44b0bed72e4f85261d284fa9b1ddd1",
"assets/assets/img/item/1006.png": "140275ada1943a20f302cd665239a7df",
"assets/assets/img/item/1011.png": "1117976bf5eca55f33746014573c5da0",
"assets/assets/img/item/1018.png": "26900fb47b1ec181da274b877f9d409b",
"assets/assets/img/item/1026.png": "3883d5e60feb662b54e17dc6f0d957cb",
"assets/assets/img/item/1027.png": "090539b27fe42008f9893ba21f68f3fe",
"assets/assets/img/item/1028.png": "1f70f53875f6b7fab512d676f1c55807",
"assets/assets/img/item/1029.png": "b42e840a7ea05ac47d22d9c102f0301a",
"assets/assets/img/item/1031.png": "26cc4c4017a49ce8559c00932e72919a",
"assets/assets/img/item/1033.png": "f39ad69f9d97503fdc959afb76d32570",
"assets/assets/img/item/1035.png": "700605e84c46f26cb0c7c8ed2641ccd8",
"assets/assets/img/item/1036.png": "3ce132a106f63e1a614cb709b7aa610d",
"assets/assets/img/item/1037.png": "dd139da4db44571e0164511648d68f43",
"assets/assets/img/item/1038.png": "dba0572ddc0945dd8a6e2385e219ffe3",
"assets/assets/img/item/1039.png": "1f678553c11891023e97c953f5ad7934",
"assets/assets/img/item/1040.png": "9df14fdb2adda36ae195150561958628",
"assets/assets/img/item/1042.png": "fcae30e3469e21b549596a75681e4de0",
"assets/assets/img/item/1043.png": "67c5f3a98388378edb2280e9af0e8623",
"assets/assets/img/item/1052.png": "9a49d479dbf51687a437a91d88c6f36c",
"assets/assets/img/item/1053.png": "dfb0d0494073a28687c80f629eb38e85",
"assets/assets/img/item/1054.png": "d52a92bd3982bb5de5d5ebd519b9f73e",
"assets/assets/img/item/1055.png": "fb367db1a1a723ca118b9c406064a464",
"assets/assets/img/item/1056.png": "7821d1ada40be141d9b944895139f2dd",
"assets/assets/img/item/1057.png": "0960de0c90cdc517c7b4fe9b03e194e0",
"assets/assets/img/item/1058.png": "03858fe9341eaa4b158ee0dc22b8c86d",
"assets/assets/img/item/1082.png": "1cd78635e25935c6c4c532f41e42b33b",
"assets/assets/img/item/1083.png": "4028d5fbde3b4799007fa13d3867e991",
"assets/assets/img/item/1101.png": "3abe8aaa7682a326926222eaace4a6ad",
"assets/assets/img/item/1102.png": "497e58d3af26627280e1e29cc29af697",
"assets/assets/img/item/1103.png": "55ca6200bd3e7d0442443e0fcaa72d4b",
"assets/assets/img/item/1104.png": "0d44e2e66c2c6ea369642dc42cdd2855",
"assets/assets/img/item/1500.png": "8578158f26927d2d78d7d0a1436ba751",
"assets/assets/img/item/1501.png": "c2aa1b2fd9f851917affb574d65207bd",
"assets/assets/img/item/1502.png": "127594e940f2770a5a5702700678ec84",
"assets/assets/img/item/1503.png": "31e614ff43eae21905e0a89a0b8249c2",
"assets/assets/img/item/1504.png": "8cdfb1016b1781802f6b3c6acd121775",
"assets/assets/img/item/1505.png": "54c115c27064f820dd3431f23ef0a211",
"assets/assets/img/item/1506.png": "127594e940f2770a5a5702700678ec84",
"assets/assets/img/item/1507.png": "15f297ef435ae3e22ea43af648f9cd8e",
"assets/assets/img/item/1508.png": "ea0af1705539e144313553eafb457787",
"assets/assets/img/item/1509.png": "cc8cbf1da29cb792d84fe8939a3d60aa",
"assets/assets/img/item/1510.png": "043b82da243e2193b7c72a8c86d57826",
"assets/assets/img/item/1511.png": "e328b69b58a32a48713e1cba58c1cf61",
"assets/assets/img/item/1512.png": "3efe74e354c1c1fdc1f8fc073fb20131",
"assets/assets/img/item/1515.png": "8cdfb1016b1781802f6b3c6acd121775",
"assets/assets/img/item/1516.png": "3d162c2bb6f52e91487dfa0b248298e2",
"assets/assets/img/item/1517.png": "3d162c2bb6f52e91487dfa0b248298e2",
"assets/assets/img/item/1518.png": "3d162c2bb6f52e91487dfa0b248298e2",
"assets/assets/img/item/1519.png": "3d162c2bb6f52e91487dfa0b248298e2",
"assets/assets/img/item/1520.png": "15f297ef435ae3e22ea43af648f9cd8e",
"assets/assets/img/item/1521.png": "c2aa1b2fd9f851917affb574d65207bd",
"assets/assets/img/item/1522.png": "8cdfb1016b1781802f6b3c6acd121775",
"assets/assets/img/item/2003.png": "7ccd32947a05d8bd466b06fff43a09ea",
"assets/assets/img/item/2010.png": "891a738b162988804193577d2aebc727",
"assets/assets/img/item/2015.png": "f935feefb13db1d8ef21f8915809d0bd",
"assets/assets/img/item/2031.png": "0c250ae1fe8ddc34fb38d7fec2e3aa5b",
"assets/assets/img/item/2033.png": "49925a8fa78d115c605fadc1cd0dc9f0",
"assets/assets/img/item/2051.png": "07399a54e784e511cff56af4ecf216d9",
"assets/assets/img/item/2052.png": "cf6b860cee2e69bc85284f0813794d1f",
"assets/assets/img/item/2055.png": "a0e42654b756885e025ae54b0aae3583",
"assets/assets/img/item/2065.png": "636f266f6602b42bb66c03f7a324768d",
"assets/assets/img/item/2138.png": "37741e3091d62096b184a9a6f31da8cb",
"assets/assets/img/item/2139.png": "07186be044b421879687225e00d72628",
"assets/assets/img/item/2140.png": "0b9d4284c58da3f7085fa06f9fefeabf",
"assets/assets/img/item/2403.png": "aa03c6908bcb396d24132797013f7f95",
"assets/assets/img/item/2419.png": "0093b0c19cb44714dc934c1070c0a65d",
"assets/assets/img/item/2420.png": "0093b0c19cb44714dc934c1070c0a65d",
"assets/assets/img/item/2421.png": "0e114b96a4ace738aadcfc6809b65575",
"assets/assets/img/item/2422.png": "63c9c8a1328c7e153a0e733a229297d9",
"assets/assets/img/item/2423.png": "0093b0c19cb44714dc934c1070c0a65d",
"assets/assets/img/item/2424.png": "0e114b96a4ace738aadcfc6809b65575",
"assets/assets/img/item/3001.png": "ea08367ddc55fa74a888676298cf05e1",
"assets/assets/img/item/3003.png": "b8d373cfb1074ca47d15736086cec364",
"assets/assets/img/item/3004.png": "cbdd9e613d55314770b3134af737a6d4",
"assets/assets/img/item/3006.png": "c058f79f6f3110c2fa1262fc3cde1341",
"assets/assets/img/item/3009.png": "84db077600e4afca9df380ed7af4d589",
"assets/assets/img/item/3011.png": "621cd3a71074e86cba7bf1262ca0c53c",
"assets/assets/img/item/3020.png": "31db1cf4cc5b2e4df8a55c9868d00174",
"assets/assets/img/item/3024.png": "f1c5bed16eb22587950e6b7b1c9ff052",
"assets/assets/img/item/3026.png": "2310cb05885ce2351a08c5dc30d7d71f",
"assets/assets/img/item/3031.png": "e2dd785460bfe1e5b84148eb7088d7bb",
"assets/assets/img/item/3033.png": "e89d2883bbd0b1a4c6710c197180427f",
"assets/assets/img/item/3035.png": "ffd38376b6f2f623f22947edc184a693",
"assets/assets/img/item/3036.png": "457bd92b49ab80fe52c11745af4807b7",
"assets/assets/img/item/3040.png": "11a9d53feba1adc576ea33b259e23c60",
"assets/assets/img/item/3041.png": "3401f839f15b0fec9ac498417ec1f6d1",
"assets/assets/img/item/3042.png": "0f05bf926248df5fcd59140ad2341dd0",
"assets/assets/img/item/3044.png": "75227bc5510c42117e8e7656fb512e82",
"assets/assets/img/item/3046.png": "eed463cc77bd94be14392cbc36e937d8",
"assets/assets/img/item/3047.png": "958b0add77ce99e10ad5d513cb510f20",
"assets/assets/img/item/3050.png": "8d4dc2d9cc67f714a0bbcd7971877eea",
"assets/assets/img/item/3051.png": "0955f6118e4a9aa5311a92ee7f5b0011",
"assets/assets/img/item/3053.png": "d5f2c3a8ac906b450dc18e3e81ee7eaf",
"assets/assets/img/item/3057.png": "1910541ea6e3f52c57dcd18e73b213c6",
"assets/assets/img/item/3065.png": "6952a4397d4b877192ac72b8ee702ae3",
"assets/assets/img/item/3066.png": "ec610eed00c5cc8c108d0384622b2ec1",
"assets/assets/img/item/3067.png": "d30ecdc56e0861a7ef2bbe5fdb5d50bb",
"assets/assets/img/item/3068.png": "6a4bc33f224d301575dfbfaf28b31244",
"assets/assets/img/item/3070.png": "ab84c4b431eb6ad63894edc9a556a109",
"assets/assets/img/item/3071.png": "d26ce3aea0ced991c50e0da60c41e827",
"assets/assets/img/item/3072.png": "cc6ef1250cfea58b9f4f7987345b6316",
"assets/assets/img/item/3074.png": "04a8afb32c7dceb0da2ba39a3adc1ba5",
"assets/assets/img/item/3075.png": "1823b09119a13f4c4f6f316b360f0535",
"assets/assets/img/item/3076.png": "8ca4f14b625713fae33dbbfa7e6cca85",
"assets/assets/img/item/3077.png": "1c67b9de414c178bed231c450b88fb6d",
"assets/assets/img/item/3078.png": "9e22a08cb400d6e87308e926663c87e2",
"assets/assets/img/item/3082.png": "755e5653e708bd862851cc7d1c231e62",
"assets/assets/img/item/3083.png": "a7c5558bf8ccab6fd9035b972f9b47fa",
"assets/assets/img/item/3084.png": "09daa24d54a394c4ed01ac6883581c5f",
"assets/assets/img/item/3085.png": "4b5018b2887cf8c8409e96b00bf98955",
"assets/assets/img/item/3086.png": "1025dd71237ea3e5cc921b36678baf8e",
"assets/assets/img/item/3089.png": "db808636e09875ff194ca3091925be1e",
"assets/assets/img/item/3091.png": "089836d10e47dec526eb9cde9bc173e6",
"assets/assets/img/item/3094.png": "a2100facdb9a3e588a6cd17ec31485b0",
"assets/assets/img/item/3095.png": "63681db1ec21e8a3b2540d5e3cf23ae1",
"assets/assets/img/item/3100.png": "c4e2e7f0a9cb5bed0d36667be004cf46",
"assets/assets/img/item/3102.png": "727282979163113c7190fe12d12bc57e",
"assets/assets/img/item/3105.png": "d80b3264f9c08fed092af518ff9abf79",
"assets/assets/img/item/3107.png": "a2e8abc6f14b36a05ad7c01e7ef1ae74",
"assets/assets/img/item/3108.png": "3f09fc0a3084502ff1a0bae5be73468e",
"assets/assets/img/item/3109.png": "bb711efa8c3d2c2f488c8fd7e089a34b",
"assets/assets/img/item/3110.png": "a0a31f66fce9f896535876f80e5811b0",
"assets/assets/img/item/3111.png": "5c0dabb1ae82b0e40048a5bbd7458983",
"assets/assets/img/item/3112.png": "a6bbcd04c0d698b543d8a9b69bef09c3",
"assets/assets/img/item/3113.png": "0fab3d36c59f08ece3ec81ce6540051d",
"assets/assets/img/item/3114.png": "c5482bf20a2d2e78148d2185a5e2a218",
"assets/assets/img/item/3115.png": "caf931e00015af00c962968e32cbe190",
"assets/assets/img/item/3116.png": "b50b65a55b4524851f943ef6f6a7eda9",
"assets/assets/img/item/3117.png": "23453a1ae9c47839fe6ce036113a3c3f",
"assets/assets/img/item/3119.png": "a0c1e4eee8b8990cb1fd78c4b69db53c",
"assets/assets/img/item/3121.png": "055c1f6afaa9b3f598775e32c47f0848",
"assets/assets/img/item/3123.png": "8c0db442b467b2be222fecf7fa08bcbe",
"assets/assets/img/item/3124.png": "ec0ab78af2b66b9bf523cdd5ca8a181a",
"assets/assets/img/item/3133.png": "48ffb500d3e15c358460ef61392a2660",
"assets/assets/img/item/3134.png": "875a6481b494c9a727a56bb66a18aaa6",
"assets/assets/img/item/3135.png": "edf632c9f43a59bdad34853e00316613",
"assets/assets/img/item/3139.png": "7f4feb8df5689341a293fe3c90eae15a",
"assets/assets/img/item/3140.png": "44424acf53a079f7cb0659b7e1006cd6",
"assets/assets/img/item/3142.png": "9d2ded2552cdd387401979af8f93691d",
"assets/assets/img/item/3143.png": "e092c77ba981ff0158e1fd73a5609507",
"assets/assets/img/item/3145.png": "a6fbe82de09ceea9913219cc578a21e1",
"assets/assets/img/item/3152.png": "b91161db2f7b5f2d45cd5bb413ca555a",
"assets/assets/img/item/3153.png": "4cc14cd06edbdf974b10c8b4f0cd8a68",
"assets/assets/img/item/3155.png": "1dec566287e9db1eb3f10fb8ff316b49",
"assets/assets/img/item/3156.png": "77480ed806ffd39a50550500a596fe43",
"assets/assets/img/item/3157.png": "83790d7c129c8dea4f7c38afe6f0ca20",
"assets/assets/img/item/3158.png": "4ee7682e7e8330cfda9600621339b953",
"assets/assets/img/item/3161.png": "d789aaf04d4de376942baeec54ccaca5",
"assets/assets/img/item/3165.png": "784c0bd6445568d5ba33db4e6a235144",
"assets/assets/img/item/3177.png": "860a478a3489c6bc01f4ba3803dca18a",
"assets/assets/img/item/3179.png": "3f63aafa11653cd887cf04881eaa8fb5",
"assets/assets/img/item/3181.png": "b7a9679aa93dbcba5a6570a38e3aaadc",
"assets/assets/img/item/3184.png": "7536532e664cfdaa1fbdbd08c3d20a6e",
"assets/assets/img/item/3190.png": "8aa6c1718233ec143928a2768185f784",
"assets/assets/img/item/3191.png": "bf85013cf56f815ec8eec1f57a0b7d53",
"assets/assets/img/item/3193.png": "5d188734be190532ec03d1159478ff46",
"assets/assets/img/item/3211.png": "1dc8a3e29fdb9df902bdb43487486e7d",
"assets/assets/img/item/3222.png": "b1dbb603a60aac8f03597c4e2ad39242",
"assets/assets/img/item/3330.png": "9954326ee105cd8dd17ec7d7c6f9561a",
"assets/assets/img/item/3340.png": "d2e3ab0c12dd80aa1af37d2c6f7f3bdf",
"assets/assets/img/item/3363.png": "0b9758816958919966696a58d56f8d4b",
"assets/assets/img/item/3364.png": "a7114ba71233aec98f95c096fa12ac20",
"assets/assets/img/item/3400.png": "97206d47c5795282b993beaef8efa1f7",
"assets/assets/img/item/3504.png": "72b05653e616a03f4fbd01fdda10770e",
"assets/assets/img/item/3508.png": "09c31ef0651c92ec41948a4c6efb3f30",
"assets/assets/img/item/3513.png": "10215dd76d0121c0fca91310e17f6d4b",
"assets/assets/img/item/3599.png": "a405c674bce3b0e0bb733244d9cf332e",
"assets/assets/img/item/3600.png": "4fd7f25db772345d49ae8f40e2fbe2e0",
"assets/assets/img/item/3742.png": "55b30388f9d30b7608d1f40d4e93e3fb",
"assets/assets/img/item/3748.png": "45bd5fb580d35d617faa4f92fc9a6a68",
"assets/assets/img/item/3801.png": "747f5a97f57dc162b14d0da188c1f61b",
"assets/assets/img/item/3802.png": "54dff6543051dd5bb75964ddf91f8728",
"assets/assets/img/item/3803.png": "da98e488f8a6dc80b7d442cd7b22f3df",
"assets/assets/img/item/3814.png": "3107ed5195331636657b6e7bca5a62aa",
"assets/assets/img/item/3850.png": "712d82e48fefd8c3b6d00e4512458dcb",
"assets/assets/img/item/3851.png": "2972faff4ed6994289a19710e7a4bf90",
"assets/assets/img/item/3853.png": "1009c93632ff1e4a9374f94d8701742f",
"assets/assets/img/item/3854.png": "d8792c65c6cb2ef719e0e585d8b125a9",
"assets/assets/img/item/3855.png": "ea0758f5374d82f49451073e2e1704ba",
"assets/assets/img/item/3857.png": "c64edc52997310960621a20eaccfb919",
"assets/assets/img/item/3858.png": "b7a3306f29011b70ade40fe623e87338",
"assets/assets/img/item/3859.png": "642fbc6c9a10b4212451acaef209dab6",
"assets/assets/img/item/3860.png": "5276aa2e6c30b86e5cbb5d67e80c00fe",
"assets/assets/img/item/3862.png": "e7dbc40a614ef90b3f2f2dce46948893",
"assets/assets/img/item/3863.png": "e3e969f95e73b90cd5502fceae165fdd",
"assets/assets/img/item/3864.png": "d27e0e60d0698a244a6c171986e60d2d",
"assets/assets/img/item/3901.png": "f5c4870def32612e435c03b8fd543ad2",
"assets/assets/img/item/3902.png": "71cac5bc38db3788869bc30f08c3bc46",
"assets/assets/img/item/3903.png": "e64a5ca7101fdb7463c3015ea8b13425",
"assets/assets/img/item/3916.png": "939c5cd0a85cc2ca0b75a53e8ee36eb8",
"assets/assets/img/item/4005.png": "936c25e5a5763d802466fe027f1e9400",
"assets/assets/img/item/4401.png": "5a3f484682217a60bfd25875cde2d126",
"assets/assets/img/item/4403.png": "5cd22a0e51918acce789f16bbd0baf4e",
"assets/assets/img/item/4628.png": "a2698a21def9b147176ad11199d32dae",
"assets/assets/img/item/4629.png": "245df34ffc607ce9965e64e9407c39eb",
"assets/assets/img/item/4630.png": "fcb3be2fd2d296f225d15d3affcace79",
"assets/assets/img/item/4632.png": "10d79ca07e66de481484677c499aa0b1",
"assets/assets/img/item/4633.png": "d115a080ce245fa831c8beb7a7ea96f2",
"assets/assets/img/item/4635.png": "d054a0718f559637184ab21e8aa82099",
"assets/assets/img/item/4636.png": "e012e7123622e7b41b4ebff0127fbe5b",
"assets/assets/img/item/4637.png": "ab13df8f4e34c97b745ae58b2f53f9ee",
"assets/assets/img/item/4638.png": "a34513fd58401c33b573849bff92f175",
"assets/assets/img/item/4641.png": "0246e5f992580d3e86f39626f05c6fd1",
"assets/assets/img/item/4642.png": "0955828f74bce5ba4bf47bcd892b7a48",
"assets/assets/img/item/4643.png": "39fb55b905fe18d0bccac0b185e7eb83",
"assets/assets/img/item/4644.png": "cd11059a16fabaa471722381b1a662b1",
"assets/assets/img/item/4645.png": "0f33ed5dd4312bb3c1a662355effbf73",
"assets/assets/img/item/6029.png": "501e8f8be7f048bb5277de8de7aad366",
"assets/assets/img/item/6035.png": "44a1be54f6922f340b0c6d41a86f6018",
"assets/assets/img/item/6333.png": "7987e61dfb8d5e9a2c91df8df6297633",
"assets/assets/img/item/6609.png": "0ed4578495fe9a5e43c2b9d717bbb2dd",
"assets/assets/img/item/6616.png": "a618e946f03ce129c8d1a8c557cb6793",
"assets/assets/img/item/6617.png": "67c9df87052e41128dd5244ded908a64",
"assets/assets/img/item/6630.png": "682db6e72893a7df19432e3509236870",
"assets/assets/img/item/6631.png": "a9bdd65d85e4cfa187ca7a50c363bad3",
"assets/assets/img/item/6632.png": "7bbd54989eaf2c129ae432cc87bf5490",
"assets/assets/img/item/6653.png": "d1d81a59af51fa4be460aaf274a8133e",
"assets/assets/img/item/6655.png": "6f55e83062a459a75b5357f92b5175c2",
"assets/assets/img/item/6656.png": "0870aaea7c5d0c8f3810408e34a5978c",
"assets/assets/img/item/6657.png": "c09dced5cddeb143eca538076714fb55",
"assets/assets/img/item/6660.png": "7c112c1738dbece79d52e9efb089e2c0",
"assets/assets/img/item/6662.png": "8771141ae41bfac71c6361479f096931",
"assets/assets/img/item/6664.png": "fdc8ef3e8466713fe3ec6e4f9a586fe7",
"assets/assets/img/item/6665.png": "7ed17c51c6a94f4bd386594a6bb95bb1",
"assets/assets/img/item/6667.png": "8c6a16080fe0d83b02a9e8129e1f9d95",
"assets/assets/img/item/6670.png": "8437b8426aa3187139c896fed9f3d7a8",
"assets/assets/img/item/6671.png": "c2a7c4604a20ae3c6d0f888c8d88b54b",
"assets/assets/img/item/6672.png": "1c31931fb13d3b065c7dea5c812f5e03",
"assets/assets/img/item/6673.png": "2413e25a812cf6e893eaaff8aa550682",
"assets/assets/img/item/6675.png": "48753fcf9978022a08b4acb3b6a6e2db",
"assets/assets/img/item/6676.png": "5124f4889dedffba93e99c4e98389669",
"assets/assets/img/item/6677.png": "6c5a4c5065e78b610233b6caed4e8f2d",
"assets/assets/img/item/6691.png": "b05d62536772a27b45c54205abda180d",
"assets/assets/img/item/6692.png": "1f8120b87996c3fdd824f1e732bd409e",
"assets/assets/img/item/6693.png": "cc33f9bdc634b80715e284c59760b340",
"assets/assets/img/item/6694.png": "862cbc99bf9c8fec6acc2325b44464a0",
"assets/assets/img/item/6695.png": "c287f3f55dddd43cbe0d82d3db2ec539",
"assets/assets/img/item/6696.png": "42b0e79bd9b66ae6f3ed32c7e3316bf0",
"assets/assets/img/item/7000.png": "cc33f9bdc634b80715e284c59760b340",
"assets/assets/img/item/7001.png": "1f8120b87996c3fdd824f1e732bd409e",
"assets/assets/img/item/7002.png": "b05d62536772a27b45c54205abda180d",
"assets/assets/img/item/7003.png": "fdc8ef3e8466713fe3ec6e4f9a586fe7",
"assets/assets/img/item/7004.png": "6a4bc33f224d301575dfbfaf28b31244",
"assets/assets/img/item/7005.png": "8771141ae41bfac71c6361479f096931",
"assets/assets/img/item/7006.png": "c2a7c4604a20ae3c6d0f888c8d88b54b",
"assets/assets/img/item/7007.png": "1c31931fb13d3b065c7dea5c812f5e03",
"assets/assets/img/item/7008.png": "2413e25a812cf6e893eaaff8aa550682",
"assets/assets/img/item/7009.png": "d115a080ce245fa831c8beb7a7ea96f2",
"assets/assets/img/item/7010.png": "e012e7123622e7b41b4ebff0127fbe5b",
"assets/assets/img/item/7011.png": "b91161db2f7b5f2d45cd5bb413ca555a",
"assets/assets/img/item/7012.png": "d1d81a59af51fa4be460aaf274a8133e",
"assets/assets/img/item/7013.png": "6f55e83062a459a75b5357f92b5175c2",
"assets/assets/img/item/7014.png": "0870aaea7c5d0c8f3810408e34a5978c",
"assets/assets/img/item/7015.png": "682db6e72893a7df19432e3509236870",
"assets/assets/img/item/7016.png": "a9bdd65d85e4cfa187ca7a50c363bad3",
"assets/assets/img/item/7017.png": "7bbd54989eaf2c129ae432cc87bf5490",
"assets/assets/img/item/7018.png": "9e22a08cb400d6e87308e926663c87e2",
"assets/assets/img/item/7019.png": "8aa6c1718233ec143928a2768185f784",
"assets/assets/img/item/7020.png": "636f266f6602b42bb66c03f7a324768d",
"assets/assets/img/item/7021.png": "67c9df87052e41128dd5244ded908a64",
"assets/assets/img/item/7022.png": "936c25e5a5763d802466fe027f1e9400",
"assets/assets/img/item/7023.png": "ea08367ddc55fa74a888676298cf05e1",
"assets/assets/img/item/7024.png": "cd11059a16fabaa471722381b1a662b1",
"assets/assets/img/item/7025.png": "09daa24d54a394c4ed01ac6883581c5f",
"assets/assets/img/item/7026.png": "7ed17c51c6a94f4bd386594a6bb95bb1",
"assets/assets/img/item/7027.png": "8c6a16080fe0d83b02a9e8129e1f9d95",
"assets/assets/img/item/7028.png": "c09dced5cddeb143eca538076714fb55",
"assets/assets/img/item/7050.png": "a5647ffdb758509ebe13081a0256b2b0",
"assets/assets/img/item/8001.png": "792ffd955d8722f676f9a51cabc34aa8",
"assets/assets/img/item/8020.png": "0d3601d5210878c2d6f1fdc07262af7a",
"assets/assets/img/spell/1.png": "65eea722a1fc79fb6469e7246eb0afb8",
"assets/assets/img/spell/11.png": "d79fd9cc23f23592c1085e1b5262cc70",
"assets/assets/img/spell/12.png": "76f3d1cbc7111379f6efe2d1098b04c4",
"assets/assets/img/spell/13.png": "f180beb2bb4d6514f307a02919007678",
"assets/assets/img/spell/14.png": "fc6bf1688506336009ccf19c4955aa18",
"assets/assets/img/spell/21.png": "070120e8064c7769baeb1765e28832cc",
"assets/assets/img/spell/3.png": "37e058ce96cf92adf6831ad5946956f4",
"assets/assets/img/spell/32.png": "5aadf633aa3471816e67d7bcfad929a8",
"assets/assets/img/spell/39.png": "5aadf633aa3471816e67d7bcfad929a8",
"assets/assets/img/spell/4.png": "c4122701056f18d242c22b2c0bd35642",
"assets/assets/img/spell/6.png": "58955cb861c3b51375948a05e260996a",
"assets/assets/img/spell/7.png": "62cc94a564835cd3abd80d74346c35da",
"assets/assets/runesImg/7200_Domination.png": "9657f8b5ea875d0128f430ba700ec589",
"assets/assets/runesImg/7201_Precision.png": "aac41768bdcbd3ad5c329ad0296a60cc",
"assets/assets/runesImg/7202_Sorcery.png": "e8204720f41cbdeda72c953cb1a18f2e",
"assets/assets/runesImg/7203_Whimsy.png": "6d659dfce9ea23bdca233b65ece2b87b",
"assets/assets/runesImg/7204_Resolve.png": "d3d3d59af823d33bebf600e71763e7b7",
"assets/assets/runesImg/8005.png": "e992637041e3b5c322682a109495d3d5",
"assets/assets/runesImg/8008.png": "05b83fa187258ee4526dac5492dacdb8",
"assets/assets/runesImg/8009.png": "bb829c044725400f079510ad32f703f8",
"assets/assets/runesImg/8010.png": "c19c693134ca49f989680256653f55e2",
"assets/assets/runesImg/8014.png": "dbe640abac7527058be4742b8dd540b7",
"assets/assets/runesImg/8017.png": "73b0a6c873d57fd80e243660329ae0de",
"assets/assets/runesImg/8021.png": "c25c041dabb345dcaaf0926a3fec38dc",
"assets/assets/runesImg/8105.png": "8b3cdd92dcf6c9edf542bb9e49339c0c",
"assets/assets/runesImg/8106.png": "b5d00fc65242224b5fc70d2045152f08",
"assets/assets/runesImg/8112.png": "4b2d59635c4c4caaa2effb7b5947b0f5",
"assets/assets/runesImg/8120.png": "c7d0c5c8d381c034e5f8678a5ed81523",
"assets/assets/runesImg/8124.png": "ec6b0f0a7b26d7a0eaa3f681b4acfd43",
"assets/assets/runesImg/8126.png": "42bde66c8ee466888293ba754f7bf4d6",
"assets/assets/runesImg/8128.png": "5bbf9b2f93bb203c8e308c64797dcdd5",
"assets/assets/runesImg/8134.png": "0b8c929343d2a2d9f5bb01045c47fd39",
"assets/assets/runesImg/8135.png": "2fe31887739d92610dc0e45a79988b64",
"assets/assets/runesImg/8136.png": "1392f29f9625faa846334c1ec5dcd918",
"assets/assets/runesImg/8138.png": "4e98668475a96db49333092db679feac",
"assets/assets/runesImg/8139.png": "6f5d32eec6d8e05c3ee53adc97aba0eb",
"assets/assets/runesImg/8143.png": "72308d1aba336463ad6487e8930c09b9",
"assets/assets/runesImg/8210.png": "92c75ff438373b7b76359ef446ff0376",
"assets/assets/runesImg/8214.png": "3923910ad2889c9fac0326adc7f19a95",
"assets/assets/runesImg/8224.png": "d355d1f9b651f40658f5b6ede02ad4dc",
"assets/assets/runesImg/8226.png": "f9a5741190b166f0dd86ce11003f6b6a",
"assets/assets/runesImg/8229.png": "504ec43c3738162679f5a327b46fb04f",
"assets/assets/runesImg/8230.png": "e2551af7e799f1e99ff084889a1b07de",
"assets/assets/runesImg/8232.png": "752bd93f66931b7c1378524248a158a1",
"assets/assets/runesImg/8233.png": "cc152a4fe1335dd34065f9cb5c305992",
"assets/assets/runesImg/8234.png": "6a0b7ee1fa67538fe1c4c751774d3177",
"assets/assets/runesImg/8236.png": "a16d3082ee8089dd48b670743fbc9824",
"assets/assets/runesImg/8237.png": "601ee1e322b1e4392ddce8d005af8a07",
"assets/assets/runesImg/8242.png": "9f1e714c571eb3955c53c3fd9090ce6a",
"assets/assets/runesImg/8275.png": "96e03f55e363dc0b22b9585861a11fae",
"assets/assets/runesImg/8299.png": "2c26b9b1b4a22eda2b942ca354398bff",
"assets/assets/runesImg/8304.png": "e82cd2407356b4ab6615ef4298af49d1",
"assets/assets/runesImg/8306.png": "03aac6b1c6560a16844d9f051c193a72",
"assets/assets/runesImg/8313.png": "dce3073f2649b2120c17c6c41b7af180",
"assets/assets/runesImg/8316.png": "f34fe72fc2923b40a38788a5baf7e03c",
"assets/assets/runesImg/8321.png": "2f3a67e25eadf337eb015e143d1e693e",
"assets/assets/runesImg/8345.png": "180a65fc98c4c604932b3af79fae4e10",
"assets/assets/runesImg/8347.png": "eeffe538e68d0db5eb7ba70355749bb8",
"assets/assets/runesImg/8351.png": "c47ba6a6ab9199fc780df69cb6bdf38c",
"assets/assets/runesImg/8352.png": "16c0e83d006e27502077cf938f2c1b26",
"assets/assets/runesImg/8360.png": "d10c2ee3a8dad10bd7fe0b8866f987a3",
"assets/assets/runesImg/8369.png": "4c213e8a712e8f21e0148ace06c2a354",
"assets/assets/runesImg/8401.png": "35f450a66761d08782a7f68a0b38931d",
"assets/assets/runesImg/8410.png": "05f1943234a43a5d4691ecafdea6e174",
"assets/assets/runesImg/8429.png": "65ab0efeeaa022eb5e95a352b229f1db",
"assets/assets/runesImg/8437.png": "d46c35c97a9df15bda021e47c37aa8da",
"assets/assets/runesImg/8439.png": "9927b76521ddbb4ceba7d9d2764d7721",
"assets/assets/runesImg/8444.png": "8e6937229947486bb9926930c92cd20f",
"assets/assets/runesImg/8446.png": "85af2a13fd5605eaeb2d97c8a09228d8",
"assets/assets/runesImg/8451.png": "754a8f7112dec65c18349cc8dc51aa1c",
"assets/assets/runesImg/8453.png": "d3371ab2de90ca998976338dd698719c",
"assets/assets/runesImg/8463.png": "c59ec2d41d3232547fa731e836035ee3",
"assets/assets/runesImg/8465.png": "3194157835e3826897dcf891256171f8",
"assets/assets/runesImg/8473.png": "b1fe61b9530ca77df84dfea6a7f30245",
"assets/assets/runesImg/9101.png": "a5dcced3ed64f2ae1cefdc8c30c26f60",
"assets/assets/runesImg/9103.png": "2ba29689953cd79ca227205b46b37ba8",
"assets/assets/runesImg/9104.png": "ae0d31518db4cb2f64f70fbd685284d4",
"assets/assets/runesImg/9105.png": "df5f2aee15244f9158fef05ea363cd41",
"assets/assets/runesImg/9111.png": "9c0ba5678f0b68691d02f30b9aba3845",
"assets/assets/runesImg/9923.png": "f81aef86451552b25b2d0ba8a783382d",
"assets/assets/runesImg/CelestialBody.png": "1d1fd085ba248c6d076aefd1f2b147ba",
"assets/assets/runesImg/RunesIcon.png": "ba52ed20cd1b957b8f0e41861c1dbf5e",
"assets/assets/smallChampIcon/Aatrox.png": "e96455b0ee85fc237a8ccaaeeafc26ac",
"assets/assets/smallChampIcon/Ahri.png": "61b0984c73e23c849b8d891fd7dabc9e",
"assets/assets/smallChampIcon/Akali.png": "123c66cbbd0304208a679e3e472e5cd5",
"assets/assets/smallChampIcon/Akshan.png": "7efa1dfb83f1baf2084f58722b5bd50d",
"assets/assets/smallChampIcon/Alistar.png": "e02cf68ed66d13afc1de48c8943deb72",
"assets/assets/smallChampIcon/Amumu.png": "51241201fce1b3e2f2e2b150f43ae611",
"assets/assets/smallChampIcon/Anivia.png": "a89a2a7099d2fb25a3cb2911c7acba08",
"assets/assets/smallChampIcon/Annie.png": "834b094ad3563f8b4e7e98a43e7f7432",
"assets/assets/smallChampIcon/Aphelios.png": "bf5b3b8ba6c0c92c7901098cae9f8e95",
"assets/assets/smallChampIcon/Ashe.png": "f3aec9f72f13dd364a26b96f25360e4c",
"assets/assets/smallChampIcon/AurelionSol.png": "261b1ad7b3e200c1b3cd163141efd026",
"assets/assets/smallChampIcon/Azir.png": "4cff6f86c19fe1e3ada14fb768307d5e",
"assets/assets/smallChampIcon/Bard.png": "c262fbccd73b650c3c1d613e80cc59bf",
"assets/assets/smallChampIcon/Belveth.png": "52f90c16e25945a35aaee52c1055e3fc",
"assets/assets/smallChampIcon/Blitzcrank.png": "4910d6d59d5b0054fd7b571ed0747fe2",
"assets/assets/smallChampIcon/Brand.png": "46ab3a9e32c8d6be1db7df6f0c5f0b0e",
"assets/assets/smallChampIcon/Braum.png": "df4954fe273e06969be9772d421525ad",
"assets/assets/smallChampIcon/Caitlyn.png": "5af5223a6e1ecfead6d61b3595ee1c87",
"assets/assets/smallChampIcon/Camille.png": "839ad3f80d86031b6bd53de052b6d115",
"assets/assets/smallChampIcon/Cassiopeia.png": "f187b6f56f756ef5b921bb22c66fe636",
"assets/assets/smallChampIcon/Chogath.png": "79fffd0e3609efb6e03f9f7fa4f4b6c2",
"assets/assets/smallChampIcon/Corki.png": "5bffc8d43cd16b2e0494e8fac82e51d4",
"assets/assets/smallChampIcon/Darius.png": "fcdbaf7476d05ab68ac9d4f497d53fd2",
"assets/assets/smallChampIcon/Diana.png": "2d888811e3579f06f50c4bd186ef10f9",
"assets/assets/smallChampIcon/Draven.png": "c85c4afb6984130450f7353299928938",
"assets/assets/smallChampIcon/DrMundo.png": "c57104628314c6b7730f6f89137ccb0f",
"assets/assets/smallChampIcon/Ekko.png": "601de18e649d451faa8365af17e29e1d",
"assets/assets/smallChampIcon/Elise.png": "7acf27fc4bae16005c8fc1602b1ad8f0",
"assets/assets/smallChampIcon/Evelynn.png": "1a0fe68d960116aab44ec94e77d7d5b3",
"assets/assets/smallChampIcon/Ezreal.png": "ace76a37b65877cea5d8e676366b4a00",
"assets/assets/smallChampIcon/Fiddlesticks.png": "613f7a6727170f6248e899954432f909",
"assets/assets/smallChampIcon/Fiora.png": "cb9a4716371f6c380cd6aff6efa086fb",
"assets/assets/smallChampIcon/Fizz.png": "e47a80741e7b09c49a14eafc612e9a6d",
"assets/assets/smallChampIcon/Galio.png": "9fdc1fe15783fde0385cb81b276966dd",
"assets/assets/smallChampIcon/Gangplank.png": "8b3e5d5cf99bcd51dbeec8b04cba07fa",
"assets/assets/smallChampIcon/Garen.png": "363d30a16717d9d2e35d408437557181",
"assets/assets/smallChampIcon/Gnar.png": "0282172c0037f9cc778ab6df16f6878e",
"assets/assets/smallChampIcon/Gragas.png": "1d1dbd003fe51753176a8d1b462be48b",
"assets/assets/smallChampIcon/Graves.png": "c09f75c831604570208019b3e58f805d",
"assets/assets/smallChampIcon/Gwen.png": "5a8138570d441015b4004a4011aa674b",
"assets/assets/smallChampIcon/Hecarim.png": "a5ed25eef0ecad2740ad841d9c35c39b",
"assets/assets/smallChampIcon/Heimerdinger.png": "cb6aaf711c362b475a97914337e13c55",
"assets/assets/smallChampIcon/Illaoi.png": "0488f243aff72b493d990339e086b88e",
"assets/assets/smallChampIcon/Irelia.png": "72bc49a5ca87efd7df7c84978b03d89d",
"assets/assets/smallChampIcon/Ivern.png": "b179899d11fb97d447f0942f00068b2b",
"assets/assets/smallChampIcon/Janna.png": "cc69631206ae219e97c874ed34f808d2",
"assets/assets/smallChampIcon/JarvanIV.png": "2fc414d9b709a5bac8110f847ec3ecf0",
"assets/assets/smallChampIcon/Jax.png": "29f21edade9e1f05c746192389b6b5fa",
"assets/assets/smallChampIcon/Jayce.png": "c4bb27335ea405938e0b642285f8353a",
"assets/assets/smallChampIcon/Jhin.png": "541f699646467e1f37014fb3504b2dbb",
"assets/assets/smallChampIcon/Jinx.png": "0feba3374dba2330c93e8e1d43b0b06d",
"assets/assets/smallChampIcon/Kaisa.png": "966ae5ba76acf5c22b1ec9c88872bb28",
"assets/assets/smallChampIcon/Kalista.png": "474e928791a807e2b70247f2f9faa6a0",
"assets/assets/smallChampIcon/Karma.png": "a6faac1f351fb3dd51b63b6b6ae8f3ad",
"assets/assets/smallChampIcon/Karthus.png": "1fa226ab7c4c39928a3d13a6e92465c9",
"assets/assets/smallChampIcon/Kassadin.png": "29134b95b6112e3069e5db938408e1dc",
"assets/assets/smallChampIcon/Katarina.png": "5140d791e46a195de37e593f5a1e8037",
"assets/assets/smallChampIcon/Kayle.png": "f8c117f7b1d412114a54380a55f448ba",
"assets/assets/smallChampIcon/Kayn.png": "a70623821e090289b3a4b5feb997e907",
"assets/assets/smallChampIcon/Kennen.png": "309dabc0ea45a938e955b0ada5cf4bc0",
"assets/assets/smallChampIcon/Khazix.png": "b8adc531a16070ee4037541e8f7dfce5",
"assets/assets/smallChampIcon/Kindred.png": "3511c82481dcb97a58caa98d7f06e89b",
"assets/assets/smallChampIcon/Kled.png": "a16c9536daa3293096d05b96c92d8c59",
"assets/assets/smallChampIcon/KogMaw.png": "47ddd150d9e2ac63fca35dcd04b9c890",
"assets/assets/smallChampIcon/KSante.png": "041b888b52384d1e647fb31a3a728986",
"assets/assets/smallChampIcon/Leblanc.png": "4b472f5e70b54cec4f3c3842f5847e0d",
"assets/assets/smallChampIcon/LeeSin.png": "363b6259cf8a179fb046524c96c9bd94",
"assets/assets/smallChampIcon/Leona.png": "e1ff5ff2caa7993440b73021d607bfa0",
"assets/assets/smallChampIcon/Lillia.png": "be81988bc8459fe3b219a4f6289c68fe",
"assets/assets/smallChampIcon/Lissandra.png": "85cde2a714b8c3ab407749da45718740",
"assets/assets/smallChampIcon/Lucian.png": "25f97ee7a71e2a3b3a7c5bdb5077c9dd",
"assets/assets/smallChampIcon/Lulu.png": "5bd583074bd5f43fe2fb83f119d23625",
"assets/assets/smallChampIcon/Lux.png": "a9be24dd1ec5642ad7bef9b21bcbaa04",
"assets/assets/smallChampIcon/Malphite.png": "562442a4de392723c8e997762140a2c1",
"assets/assets/smallChampIcon/Malzahar.png": "647302bfd09a4b8b8439a5d6e31e3e64",
"assets/assets/smallChampIcon/Maokai.png": "7f95aee6c8470e513bce9d26675ea112",
"assets/assets/smallChampIcon/MasterYi.png": "3129856a4e793a23c6d3f965f47050d2",
"assets/assets/smallChampIcon/Milio.png": "1fd9cbb76993a92bfd8639e86851565c",
"assets/assets/smallChampIcon/MissFortune.png": "c746185cc1e7b4bab12fd3a3fe3c4b5f",
"assets/assets/smallChampIcon/MonkeyKing.png": "971493ccc61b04ac3928c43e91d74d08",
"assets/assets/smallChampIcon/Mordekaiser.png": "e16f94402a9b14428edd23a9f0be0e6d",
"assets/assets/smallChampIcon/Morgana.png": "63e363daa13047d013c81f38113226d4",
"assets/assets/smallChampIcon/Nami.png": "bf2a2bc5ea32d2e064541ce50288a26f",
"assets/assets/smallChampIcon/Nasus.png": "3ddfb85bb3fff87a63283813f66b2d63",
"assets/assets/smallChampIcon/Nautilus.png": "16955aebd0d5cdc4d77de31ae3637500",
"assets/assets/smallChampIcon/Neeko.png": "c374739db8b4bc4abec1b8098a860901",
"assets/assets/smallChampIcon/Nidalee.png": "de04198e0f5400cd97fdd05178f2e982",
"assets/assets/smallChampIcon/Nilah.png": "2900959d8fc8e2e1651efbd4ba891c7c",
"assets/assets/smallChampIcon/Nocturne.png": "e1beeaa7823308840193e542d7b4b922",
"assets/assets/smallChampIcon/Nunu.png": "dd595880f8d0a0d6567b76180c39a997",
"assets/assets/smallChampIcon/Olaf.png": "cf1a2bd780de191ae106c87792581e89",
"assets/assets/smallChampIcon/Orianna.png": "05fda2c15f0a50bb4ce57927b3914511",
"assets/assets/smallChampIcon/Ornn.png": "f1710e586a65a9569f902b217d14d925",
"assets/assets/smallChampIcon/Pantheon.png": "0bab3506fd20b18b96b807e167578973",
"assets/assets/smallChampIcon/Poppy.png": "f72473d6f5ce288ef397ead83e0a1ef8",
"assets/assets/smallChampIcon/Pyke.png": "645ae1a071cfd4c03ea47d5af5366df7",
"assets/assets/smallChampIcon/Qiyana.png": "3ff8ff711e31e34d0ca6bcc35f0a9033",
"assets/assets/smallChampIcon/Quinn.png": "5f5db1381294fdbe12138c96b42a91c9",
"assets/assets/smallChampIcon/Rakan.png": "876c1911f27ef95abad4e7194321ce66",
"assets/assets/smallChampIcon/Rammus.png": "00ea8a20268b5f1fc22797f48130b299",
"assets/assets/smallChampIcon/RekSai.png": "ad8ab0af45de3427f45435b5f10f73de",
"assets/assets/smallChampIcon/Rell.png": "f4e33f3fc36ff9743a690e2787cc79b4",
"assets/assets/smallChampIcon/Renata.png": "124a32089f36bec6c64f2f40d4d028d8",
"assets/assets/smallChampIcon/Renekton.png": "ef8018c38f4b244a14328cad5baf2077",
"assets/assets/smallChampIcon/Rengar.png": "2b894ee86c63fea9a4148a6fe73819f8",
"assets/assets/smallChampIcon/Riven.png": "ff5de012ed4c3a3b6126b1c00bbb07cf",
"assets/assets/smallChampIcon/Rumble.png": "eca71454ed1e47c1a87e702575822961",
"assets/assets/smallChampIcon/Ryze.png": "cc3402680d4d8d238578e3337377d920",
"assets/assets/smallChampIcon/Samira.png": "12b93f6a29ec0760fe0c24eccc858ff7",
"assets/assets/smallChampIcon/Sejuani.png": "b2bb8b222c8d41841f342bacb72d868f",
"assets/assets/smallChampIcon/Senna.png": "c7ff233e17a1f5afc8dddfb1030f6324",
"assets/assets/smallChampIcon/Seraphine.png": "2afc9bd1f8c4d9a8439f237d2a399720",
"assets/assets/smallChampIcon/Sett.png": "29cc19487c14878e11fc1d663eed5023",
"assets/assets/smallChampIcon/Shaco.png": "58d529c87618ffa5bb5fc82cffb2d897",
"assets/assets/smallChampIcon/Shen.png": "5c790b7c32070c5fb84a9063a22e3d49",
"assets/assets/smallChampIcon/Shyvana.png": "ce6d3bbd179061c314f84d7c7e1cb063",
"assets/assets/smallChampIcon/Singed.png": "afebd996acb7c70e24d97edbaa94ad85",
"assets/assets/smallChampIcon/Sion.png": "3da5edccb39bc87974923bad8dda9071",
"assets/assets/smallChampIcon/Sivir.png": "3eb4269d07738eb9841e52fe16057db9",
"assets/assets/smallChampIcon/Skarner.png": "97beae7758d73d0cc15841276d3d92d5",
"assets/assets/smallChampIcon/Sona.png": "d0ecbd827d05d699f86946fe39d0e1cb",
"assets/assets/smallChampIcon/Soraka.png": "ee5df5a0102106cec2ec19e91a0b6776",
"assets/assets/smallChampIcon/Swain.png": "de0368337226aa2e404983eb1b580e41",
"assets/assets/smallChampIcon/Sylas.png": "d96e4ee3b83bde2af80b512a936498b0",
"assets/assets/smallChampIcon/Syndra.png": "abc66ea3de4e70772391cdeef88c894f",
"assets/assets/smallChampIcon/TahmKench.png": "3099e7ed4534b76aa98e6c1db15bcd9f",
"assets/assets/smallChampIcon/Taliyah.png": "018aec8065ff094484c595909437e28f",
"assets/assets/smallChampIcon/Talon.png": "7fbd5c0996acf6ec7db8ef3d29ba3b2f",
"assets/assets/smallChampIcon/Taric.png": "0619d293c7aac851157d2401a68a070a",
"assets/assets/smallChampIcon/Teemo.png": "b9f0a4e8107a6f618499b2c6e6221fef",
"assets/assets/smallChampIcon/Thresh.png": "3106fe8baaa3af34b7b172b70bada81a",
"assets/assets/smallChampIcon/Tristana.png": "268e15a0b5bf9c200b48b20835b8e1c5",
"assets/assets/smallChampIcon/Trundle.png": "05e3f7057cee91d0f272570e045bb208",
"assets/assets/smallChampIcon/Tryndamere.png": "dbaf43dac25c4b99f1974d7693430b70",
"assets/assets/smallChampIcon/TwistedFate.png": "69fea0e7493283799d43ba110ea884a7",
"assets/assets/smallChampIcon/Twitch.png": "60ebdc3a4f3ed141b918dcfa2a79d7e6",
"assets/assets/smallChampIcon/Udyr.png": "f1b5406997c9ce5473161eb4ffd9e7da",
"assets/assets/smallChampIcon/Urgot.png": "5cd2fe4577da86557c8cb3688a741074",
"assets/assets/smallChampIcon/Varus.png": "5703f4d1030e25c3dcc6e55e48e5464c",
"assets/assets/smallChampIcon/Vayne.png": "c491fc593d1ce3628b8bc18da9e241c1",
"assets/assets/smallChampIcon/Veigar.png": "60bd1ac31cfec6e07ae2f544ba02ac74",
"assets/assets/smallChampIcon/Velkoz.png": "b4cb4995eee105d71f42435f648fe845",
"assets/assets/smallChampIcon/Vex.png": "2720602953514e6204b6c78ff810e9de",
"assets/assets/smallChampIcon/Vi.png": "f93cfba0029013441e55d432432a6048",
"assets/assets/smallChampIcon/Viego.png": "0a903ce2b11d98b8f147efa3ae7cbae0",
"assets/assets/smallChampIcon/Viktor.png": "f156bb33988f5bab224ad39c7a22ae20",
"assets/assets/smallChampIcon/Vladimir.png": "59391168e74591a3893098749c04c547",
"assets/assets/smallChampIcon/Volibear.png": "5643839d1fc9d0c12f4a4d1453c0355b",
"assets/assets/smallChampIcon/Warwick.png": "2e4a40cfcfd277d25f08692a10c22815",
"assets/assets/smallChampIcon/Xayah.png": "bf3d497f08636dbab6cbfb551baf3b18",
"assets/assets/smallChampIcon/Xerath.png": "23e3d54273aa34d86b0168996028aa5f",
"assets/assets/smallChampIcon/XinZhao.png": "b93691516485545eb0876a4fcf6d097e",
"assets/assets/smallChampIcon/Yasuo.png": "3038d72946f72df5c5931d78afa2af08",
"assets/assets/smallChampIcon/Yone.png": "a05dad719cb9f5283ee073b121723880",
"assets/assets/smallChampIcon/Yorick.png": "04866dacb07745f3bd049cb73e3d2380",
"assets/assets/smallChampIcon/Yuumi.png": "ccf3c2f591d96c74c1083fd470ee731c",
"assets/assets/smallChampIcon/Zac.png": "d8268d892c39a8f1e9485f92204cf07f",
"assets/assets/smallChampIcon/Zed.png": "134af6895ff7d54d3a205aa0276d4dfe",
"assets/assets/smallChampIcon/Zeri.png": "1a89e479a9484120eae30711aa0c5e06",
"assets/assets/smallChampIcon/Ziggs.png": "f87ceb86378d8c171f4844a9b36b7f4d",
"assets/assets/smallChampIcon/Zilean.png": "d4b08992a3c4917cdd69a05cb1e073d8",
"assets/assets/smallChampIcon/Zoe.png": "2f3b8cda923e3bb723c04666e7d5817c",
"assets/assets/smallChampIcon/Zyra.png": "053b3ae1c3a204593e8d4b4a00d275eb",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "856f13f6661d9681dea5c5790d56ac1a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "c0e1867dd675928c8997dc4825f4e815",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "1491e6d93f9e14b89209bf4c4cce0ee0",
"icons/Icon-512.png": "82df63ee33200365675a57d75462bba5",
"icons/Icon-maskable-192.png": "1491e6d93f9e14b89209bf4c4cce0ee0",
"icons/Icon-maskable-512.png": "82df63ee33200365675a57d75462bba5",
"index.html": "031bfbce0132c12a2f1bbb0ab4bbc385",
"/": "031bfbce0132c12a2f1bbb0ab4bbc385",
"main.dart.js": "e8ac556c88cbe62ed5d8760c275edd3e",
"manifest.json": "964be6b3d6fc403da82f82143bba9ffa",
"version.json": "506d46213cd7a4d3768de214d23adcfa"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
