

/* TO UPDATE/ADD SCRIPTS

* for each game in the map, the key must match the 'value' of the option tag that selects that game
*/

var preloadedScripts = new Map([

['null',
``],
    
['fighters',
`1433 8020 70d8 245a ff40 3018 1878 4cc6
c3c0 c0c0 c0c0 c0c0 c0e0 80e0 20e0 e0a0
e080 80e0 a0e0 a0a0 e080 8080 e0e0 80e0
80e0 e080 e080 80e0 4040 40e0 e080 80a0
e0a0 a0e0 a0a0 e040 4040 40e0 a0c0 a0a0
ff0a 44a0 ff10 1028 286c 6cba aa18 245a
7ee7 5a6d 006b 00a2 1160 0061 00d0 1871
0831 2012 6d60 3e61 00d0 1871 0831 2012
79a2 036e 1e61 1cde 13a2 066c 1c61 01dc
13a2 0960 1c61 0dd0 1600 ee60 0561 05a2
19d0 1570 04a2 1ed0 1570 04a2 23d0 1570
04a2 28d0 1570 04a2 2dd0 1560 0561 0fa2
32d0 1570 04a2 37d0 1570 04a2 3cd0 1570
04a2 41d0 1570 04a2 46d0 1570 04a2 2dd0
1570 04a2 4bd0 1570 04a2 19d0 1570 0f71
ffa2 55d0 1870 0371 fda2 02d0 1170 f871
f7a2 5dd0 16a2 5060 0061 18d0 1570 0830
4013 0bf2 0a42 0500 e000 e000 ee81 e062
1c60 07e0 a171 ff60 09e0 a171 0141 0161
0241 3a61 39a2 03de 238e 10de 2300 ee60
08e0 9e00 ee6d 0160 07e0 a16d 0260 09e0
a16d 0389 e079 0268 1ba2 02d9 8100 eea2
02d9 8178 ff4d 0279 ff4d 0379 0149 026d
0349 3c6d 0248 006d 004d 0000 eed9 814f
0000 ee6d 0000 ee81 c062 0160 01e0 a171
ff60 03e0 a171 0141 0161 0241 3761 36a2
06dc 238c 10dc 2300 ee60 02e0 9e00 ee6b
0160 01e0 a16b 0260 03e0 a16b 0387 c077
0366 0176 03a2 02d7 6100 eea2 02d7 6176
014b 0277 ff4b 0377 0147 026b 0347 3c6b
0246 206b 004b 0000 eed7 614f 0000 ee6b
0000 ee61 1cde 13a2 02d9 8114 0b00 ee61
01dc 13a2 02d7 6114 0b00 ee00 e014 1100
ee22 6323 1d3f 0014 0b23 873f 0014 0b3d
0023 5f4d 0023 3f3b 0023 cb4b 0023 a914
1300 ee22 9b24 1100 ee`],
    
['invaders',
`13ee 0000 0000 3078 3030 4800 0000 0000
0000 0000 0000 0808 1c1c 1c00 0000 0000
0000 0000 0008 081c 1c1c 0000 0000 0080
003c 4240 4040 3c02 0202 423c 0000 0000
3c42 4242 427c 4040 4040 4000 0000 0018
2442 4242 427e 4242 4242 0000 0000 3c42
4040 4040 4040 4042 3c00 0000 003e 4040
4040 7e40 4040 403e 0000 0000 e040 4040
4040 4040 4040 e000 0000 00c1 a1a1 9191
8989 8585 8383 0000 0000 8282 8282 8282
8244 4428 1000 0000 0030 4844 4242 4242
4244 4830 0000 0000 3c42 4242 427c 6050
4844 4200 0000 81d0 82e0 6007 e0a1 71ff
6009 e0a1 7101 4100 6101 4138 6137 a211
ddef 8d10 8e20 a211 ddef 00ee 6006 e09e
00ee 6901 8bd0 7b04 8ae0 7a04 a22f dba1
00ee a22f dba1 7aff 4a00 6900 4900 00ee
dba1 4f00 00ee 6900 00ee 8170 8250 8460
80c0 4232 68ff 4232 7605 4232 7c05 4107
6801 4107 7605 4107 7c05 8184 8284 a202
d74a d50a 8710 8520 8460 d74a 84c0 d54a
00ee 600a 6100 a230 d01f 7008 7100 a23f
d01f 7008 7100 a24e d01f 7008 7100 a25d
d01f 7008 7100 a26c d01f 6001 610f a27b
d01f 7005 7100 a28a d01f 700a 7100 a299
d01f 7008 7100 a24e d01f 7008 7100 a2a8
d01f 7008 7100 a26c d01f 7008 7100 a2b7
d01f 7008 7100 a230 d01f f20a 4207 00e0
00e0 00ee a202 6718 6600 d76a 6520 6c00
d5ca 6d19 6e15 a211 ddef 22c6 231a 4614
00ee 3900 2302 4900 22ec 13da 00ee 2352
6801 23c4 00ee`],

['pong',
`131f 8080 8080 8080 8080 8080 8080 8080
8001 0101 0101 0101 0101 0101 0101 0101
8000 0000 0000 0000 0000 0000 0000 003c
4281 8080 809f 9181 423c 0000 0000 2424
0081 423c 0000 0000 0000 0000 0081 e082
d060 01e0 a172 ff60 04e0 a172 01a2 02de
d88e 108d 20a2 02de d800 ee81 6082 7060
03e0 a172 ff60 06e0 a172 01a2 11d6 7886
1087 20a2 11d6 7800 ee00 ee81 4082 3081
a445 0372 ff45 0472 0142 0165 0442 1e65
0341 0065 0045 0078 0145 0012 d941 3f65
0545 057b 0145 0512 d9a2 20d4 3184 1083
20a2 20d4 3100 ee60 1461 03fb 29d0 1560
2761 03f8 29d0 1500 ee00 e060 40f0 18f0
15f0 0730 0012 e113 1f00 eea2 2f60 1561
07d0 1f60 1f61 07d0 1fa2 3e60 1a61 16d0
1800 ee60 3ef0 15f0 0730 0013 0700 e022
eb60 40f0 15f0 0730 0013 1500 e000 ee6e
016d 0c66 3767 0c64 1f63 1065 036a 0122
c7a2 20d4 31a2 02de d8a2 11d6 784b 0513
5548 0513 5522 4d3f 006a 0122 6b3f 006a
ff22 8b13 3d23 0300 00ee`]
])