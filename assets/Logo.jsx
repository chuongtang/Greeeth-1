import * as React from 'react';

function SvgComponent(props) {
  return (
    <svg
      xmlSpace="preserve"
      width={100}
      height={100}
      style={{
        shapeRendering: 'geometricPrecision',
        textRendering: 'geometricPrecision',
        imageRendering: 'optimizeQuality',
        fillRule: 'evenodd',
        clipRule: 'evenodd',
      }}
      viewBox="0 0 12700 12700"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      <g>
        <metadata />
        <path
          // eslint-disable-next-line max-len
          d="M1808 9580l0 33c111,-4 172,-49 250,-66 118,-25 122,0 265,-47l259 -55c308,-58 476,-88 803,-134 271,-39 861,-80 1157,-104 193,-15 390,-30 592,-43 920,-55 1482,-63 2406,11 90,7 209,21 296,22l881 62c191,24 365,53 554,72 90,9 182,24 273,35 99,12 195,22 287,34 188,25 893,218 1061,196l0 -31c-22,-37 -550,-250 -662,-270 -69,-12 -189,-28 -237,-61 4,-30 18,-34 36,-51 34,-33 71,-128 104,-176 92,-133 284,-581 335,-756l87 -286c108,-386 135,-514 136,-951 0,-61 7,-122 7,-186 0,-64 -6,-124 -6,-186 -2,-100 -16,-238 -31,-329 -74,-451 -144,-741 -314,-1152 -75,-180 -151,-330 -239,-488 -171,-310 -457,-692 -706,-941 -153,-155 -311,-295 -485,-427 -139,-104 -190,-134 -324,-226 -38,-26 -78,-46 -116,-69 -406,-238 -849,-423 -1316,-506 -192,-34 -413,-76 -634,-77l-405 0c-467,3 -1021,150 -1454,333 -131,56 -410,199 -534,277 -19,12 -44,29 -63,40 -24,14 -35,26 -60,41 -118,72 -350,250 -457,347 -507,458 -903,969 -1196,1625 -122,273 -242,596 -304,899 -23,115 -77,613 -77,727 -2,137 -1,247 9,383 15,229 72,482 103,710 29,211 139,415 205,603 74,212 72,239 182,425 22,39 47,87 69,134 49,105 166,190 115,247 -22,24 -247,96 -297,109 -109,29 -408,132 -503,206l-52 47zm2585 -1703l-58 15c42,105 146,58 262,65l-7 50c50,-14 30,-41 122,-33 53,5 95,25 149,26l-29 -124c-5,-14 -1,-7 -7,-20 -6,-12 -6,-12 -12,-19 -64,10 -44,56 -126,49l-30 -58c-1,-2 -3,-5 -4,-7 -26,0 -246,-8 -248,7l-12 49zm497 -2c22,8 45,14 58,34 11,15 9,17 12,29l11 34c0,2 1,5 3,7 5,-1 213,-40 214,-40 80,-33 44,-123 115,-143 40,30 54,102 80,152 44,2 42,-10 75,-21 46,-15 42,4 85,3 3,-34 -25,-107 -39,-137 -281,-13 -110,-137 -98,-258 -79,9 -130,137 -265,151 -49,6 -43,0 -70,34 -54,67 -117,85 -151,110 -43,31 -16,-2 -30,45zm-103 2392l153 0 2 -536c94,-13 323,13 390,-9l0 -152c-67,-12 -231,-3 -308,-3 -115,0 -173,-1 -221,89 -35,65 -24,509 -16,611zm3435 -3l0 -154 -269 -4 0 -374 265 -3 4 -159c-84,-12 -192,15 -264,-9 -20,-63 9,-156 -10,-226l-148 -1c-10,50 -4,583 -4,679 0,110 3,196 94,241 43,22 274,21 332,10zm88 3l160 1 0 -539 376 -1 5 537 158 3c0,-116 17,-528 -15,-603 -38,-88 -107,-98 -212,-98 -101,0 -211,4 -311,-1l-1 -230 -158 0 -2 931zm-2208 -3l1 -154 -544 -4 2 -105 539 -2c5,-60 8,-263 -6,-313 -28,-99 -106,-119 -191,-119 -104,-1 -209,-1 -313,0 -242,1 -185,234 -185,446 0,296 99,255 379,255 83,0 244,9 318,-4zm-161 -432l1 -102 -379 -2c-19,134 1,107 128,107 67,0 190,7 250,-3zm1737 436l0 -161 -543 0 2 -107 540 -1c5,-69 9,-252 -7,-308 -25,-89 -90,-125 -188,-124 -105,0 -209,0 -313,0 -245,0 -190,227 -190,446 0,109 0,185 82,235 66,40 506,22 617,20zm-542 -436l378 3 1 -106 -376 -1 -3 104zm-247 434l1 -158 -541 -1 0 -105 536 -2c10,-42 9,-261 0,-304 -20,-87 -87,-129 -189,-129 -104,0 -208,0 -312,0 -247,0 -193,209 -193,438 0,105 -9,186 79,241 68,42 207,22 300,22 95,0 228,8 319,-2zm-541 -436c38,12 324,8 379,3l0 -104 -378 0 -1 101zm-1688 -53l-348 -3 -3 163 190 1 1 167 -529 2 0 -546 526 0 3 75 163 0c-2,-92 -1,-233 -170,-238 -85,-2 -533,-16 -596,20 -44,26 -75,63 -83,125 -7,50 -10,550 4,603 14,53 55,99 99,113 58,19 324,9 407,9 146,0 267,20 322,-93 27,-54 21,-318 14,-398zm-1696 -605l75 -9c2,-44 -39,-84 -57,-114 -23,-35 -40,-65 -65,-104 -45,-72 -85,-146 -126,-219 -20,-37 -36,-76 -55,-115 -20,-40 -38,-77 -56,-119 -236,-549 -357,-1128 -350,-1732 6,-513 134,-1094 344,-1559 76,-168 95,-188 177,-344 72,-138 169,-287 271,-422 144,-190 155,-211 314,-379 228,-238 467,-444 758,-627 133,-83 305,-185 449,-245 165,-68 319,-141 498,-193 655,-193 1152,-228 1842,-138 387,51 940,259 1281,446 353,193 727,482 976,756 160,176 163,171 316,376 525,705 851,1660 780,2668 -34,498 -89,688 -239,1146 -39,119 -158,375 -214,478 -51,92 -230,379 -245,459 120,-14 254,-299 308,-405 113,-221 241,-499 308,-743 25,-92 47,-195 75,-283 54,-171 74,-434 92,-615 52,-526 -68,-1371 -278,-1831 -87,-191 -126,-292 -227,-481 -160,-296 -386,-602 -593,-819 -318,-334 -777,-693 -1219,-894 -42,-19 -71,-36 -122,-56 -43,-17 -76,-35 -119,-55 -79,-35 -179,-64 -259,-95 -87,-35 -187,-51 -276,-80 -127,-41 -453,-95 -606,-103 -782,-42 -1403,43 -2095,357 -118,54 -350,189 -454,253 -1260,781 -2010,2227 -1923,3732 24,420 118,821 238,1170 79,229 116,278 215,493 48,104 202,360 261,445zm-545 -2344c0,227 9,522 67,740 57,213 65,344 149,578 77,215 174,426 275,630 19,39 47,73 69,114 39,72 97,161 139,234 106,5 255,-86 347,-129 53,-26 131,-40 184,-55 132,-37 296,99 386,7 104,-106 459,-192 547,-182l3 66c38,-9 55,-41 79,-66 41,-40 57,-19 103,-5 77,22 325,-132 404,-180 132,-79 60,29 221,-9l185 -38c78,-13 38,5 57,17 45,27 202,-17 246,-27 21,-5 103,-25 114,-23 34,6 47,56 90,46 7,-2 89,-49 96,-56 24,-23 40,-67 30,-112 -17,-79 -55,-142 -84,-209 -32,-72 -76,-123 -105,-192 -70,-170 -46,-267 -244,-354 -67,-29 -144,-61 -219,-78 -224,-50 -95,-113 -419,74 -30,18 -73,31 -107,46 -81,34 -56,-1 -109,-25 -57,25 -91,66 -167,94 -31,12 -178,57 -204,56 -14,-15 -30,-47 -51,-54 -56,3 -84,41 -130,42 0,-37 35,-85 40,-142 -67,20 -69,120 -144,26 -56,-72 -54,-76 -77,-177 -23,16 -27,24 -35,61 -5,27 -5,56 -18,75 -20,22 -89,-2 -113,-5 -62,-8 -57,-8 -81,-61 -44,-96 52,-104 66,-201 -64,6 -82,22 -126,40 -45,19 -73,-12 -114,-29 13,-32 -2,-3 15,-20 19,-19 27,2 30,-40 -84,3 -118,36 -109,-99 124,-46 178,-21 234,-147 18,-43 49,-78 82,-112 55,-58 34,-53 131,-64 200,-22 365,-163 431,-129 33,18 76,69 121,77 28,-14 45,-37 73,-57 146,-105 368,-111 533,-47 78,31 170,3 241,-22 -11,-27 -50,-62 -88,-63 -38,-1 -54,37 -101,44 -67,-57 -50,-91 -156,-107 -47,-8 -68,-14 -105,-28 -161,-65 -61,-51 -227,76 -180,136 -161,121 -255,-22 -118,-4 -133,147 -395,60 1,-68 128,-121 137,-179 -93,11 -176,82 -339,85 17,-60 95,-71 124,-123 15,-26 6,-73 -1,-101 -5,-17 -10,-25 -13,-44 -21,-109 76,-45 133,-99 27,-26 48,-54 82,-86 9,-72 -10,-128 5,-204 24,-118 68,-59 84,-135 -58,3 -78,21 -121,30 -17,-35 -13,-88 -14,-134 -40,9 -37,22 -64,52 -68,76 -46,64 19,130 26,27 53,37 65,76 -40,44 -199,109 -248,115 -11,-23 -129,-215 -146,-223 -35,16 -73,100 -118,116l-113 -186c19,-30 59,-33 71,-67 -31,-33 -105,-52 -108,-102 74,-36 287,-70 303,-93 -20,-63 -163,-20 -221,-22l-11 -20c-16,-34 -47,-159 -46,-192l111 2c-8,-61 -42,-77 -42,-127l185 8c-8,-33 1,-17 -26,-40 -34,-29 -90,-51 -96,-99 146,-48 201,23 322,25l-21 -102c93,11 119,67 335,35 84,-13 291,-94 376,-130 14,-6 25,-10 42,-17 27,-12 25,-6 38,-30 -58,0 -106,9 -155,23 -173,50 -127,-24 -299,10 -38,7 -134,19 -170,15 9,-80 141,-106 207,-135 0,-25 -43,-119 -67,-119l-111 28c10,41 21,23 28,69 -75,30 -278,10 -327,-52 10,-40 90,-85 85,-118 -23,-39 -82,-60 -93,-85 59,-33 287,42 356,40l-23 -146 286 4c-91,-91 -82,10 -78,-215 59,1 174,25 212,16 30,-7 52,-21 96,-24 123,-10 75,53 171,-54 22,-24 59,-36 69,-54 -62,-5 -113,-3 -168,-16 -45,-11 -103,-30 -126,-66 10,-11 0,-4 16,-13 39,-24 222,-60 270,-71 72,-15 49,6 98,27 28,-12 52,-36 57,-70 -44,-40 -184,-46 -139,-118 36,-38 317,10 369,14 44,3 91,-2 135,2 48,3 473,15 468,68 -2,16 -41,20 -56,32 -19,13 -7,2 -19,19 2,1 6,0 7,3 4,9 151,13 169,19 -1,49 -57,91 -57,139 25,16 105,55 145,57 0,-79 -33,-110 -38,-190 29,-9 54,-15 82,-28 80,-36 111,-20 54,-104 -16,-23 -33,-51 -34,-78 88,-1 192,44 284,56 34,4 317,26 317,27 15,16 2,-9 9,17 26,112 -25,88 189,77 93,-5 71,35 135,62 30,-16 51,-44 76,-69l248 127c23,14 78,69 99,95 33,43 13,118 18,176 110,2 234,-93 369,-47 6,86 -100,189 -106,240l185 -19c-18,37 -63,55 -74,95 39,15 92,32 131,47 27,11 113,30 124,58 -43,21 -201,52 -212,85 58,18 122,10 190,40 57,25 105,70 103,140 -104,57 -142,-15 -324,-10l11 -77c-113,25 -55,92 -173,-75 -25,-35 -53,-90 -92,-104 6,65 26,147 26,213 1,42 -72,145 -101,144 -33,-1 -115,-89 -131,-125 -14,-32 0,-38 -29,-48l-12 92c-6,20 -32,15 -55,16 -24,2 -50,1 -74,2 -17,-25 -40,-43 -54,-75 -46,-6 -111,-2 -142,20 -47,33 -50,53 -102,72 -38,-19 -132,-148 -161,-146 -14,7 -92,65 -97,73 3,23 53,89 80,89 45,1 70,-57 133,-18 19,11 23,27 49,23 26,-3 35,-14 80,-16 67,-3 108,9 157,27 -4,56 -26,55 -30,105 84,-7 179,-47 274,-21l1 119c198,1 264,-113 324,-124 32,27 67,93 85,132 138,14 58,-61 341,51 34,14 76,22 102,47 -8,31 -9,34 -30,54 -29,-11 -25,-16 -46,-33 -17,-15 -26,-19 -47,-13 -33,9 -74,34 -104,47l26 17c1,0 29,9 31,9 7,59 -23,99 -22,156 2,58 -7,-39 2,14 7,37 135,46 228,87 40,17 31,14 54,49 50,77 136,159 72,288 -80,-4 -91,-110 -168,-127 6,103 32,191 30,309 -99,4 -206,-7 -286,-38 3,-31 15,-19 41,-46 4,-3 17,-18 20,-21 33,-38 23,-72 -16,-110 -25,-24 -230,-78 -259,-81l23 146c-138,82 -114,147 -312,121 -85,-11 -189,-26 -270,-62 -26,-12 -44,-25 -73,-26 -23,168 45,46 316,181 31,16 43,12 48,50 19,135 -144,36 -183,11l-17 51c-33,0 -64,-9 -95,3 -2,0 -4,2 -6,3 42,38 129,38 203,35 80,-4 159,-22 228,13l7 -15c24,-56 41,-39 105,-34 138,13 297,12 401,102 -7,58 -78,84 -95,136 55,36 179,9 230,-102 141,0 335,-28 372,102 -17,26 -76,62 -79,88l161 -8c-6,25 -83,133 -114,132 -47,-2 -196,-200 -420,-145 -1,43 28,34 74,58 69,37 234,72 282,128 -13,30 -26,27 -59,41 -17,7 -37,15 -39,36 59,8 220,54 269,77 -1,86 -3,85 -65,116 -34,17 -70,72 -68,119 27,16 80,21 90,50 -32,12 -80,1 -116,4 -114,7 -14,153 -106,185 -32,11 -59,20 -88,30 -40,14 -31,29 -78,29 -46,-75 -6,-140 -141,-122 -28,43 -20,102 -45,153 -29,59 -87,39 -130,7 -74,-56 -58,-5 -93,-102 -15,-43 -57,-79 -107,-78 -3,61 56,42 20,129 -21,50 -38,79 -58,129 -17,45 -69,59 -127,61 -97,3 -65,-48 -94,-94 -15,-16 -58,-15 -78,-26 9,-60 50,-38 63,-95 -104,-41 -147,-12 -252,-25l47 -201 71 11c-29,-157 -136,6 -212,-2 -41,-5 -37,-37 -91,-24 -44,10 -33,28 -101,28 -14,-19 -69,-71 -88,-88 -105,-93 -274,98 -287,218 85,-27 131,-127 186,-161 77,7 188,119 207,195 -1,19 -23,33 -35,45 -15,15 -26,26 -41,39 5,67 55,83 50,140 -65,1 -125,-37 -164,-73 -59,-53 -125,3 -203,-6 -46,-71 -70,-87 -181,-81 -135,229 -201,125 -207,485 -2,160 8,514 60,632 50,0 90,-6 135,9 63,22 60,-2 109,-21 20,25 30,70 42,101 24,-3 66,-32 106,-42 107,-29 44,-26 97,-57l23 40c7,23 7,30 15,52l143 -18c0,31 -6,43 4,63 59,-28 30,-82 131,-96 30,-4 84,-16 107,-16 47,-2 47,14 98,23 118,19 48,77 139,92 78,13 100,58 151,24 23,-14 -7,-1 24,-15 86,37 29,48 161,46 116,-2 99,13 186,27 20,-34 -6,-20 25,-42 45,22 43,60 101,66 70,8 108,40 135,40 18,-36 17,-44 56,-53l13 64c44,-9 58,-64 109,-64l24 110c46,10 42,-7 77,-4 34,2 31,18 69,28 86,21 100,-24 152,-35 15,35 22,69 33,110 51,-5 84,-52 133,-57l-2 128c44,-22 42,-86 71,-92 33,-7 216,109 263,146l39 30c19,17 13,18 36,30 38,-28 227,-336 265,-408 78,-152 148,-302 216,-468 128,-317 218,-777 247,-1110 39,-437 -15,-860 -97,-1240 -39,-178 -104,-354 -162,-523 -29,-86 -64,-144 -103,-233 -16,-37 -39,-67 -57,-109 -67,-156 -169,-292 -254,-434 -84,-141 -270,-343 -378,-472 -206,-247 -570,-517 -842,-687l-328 -178c-332,-163 -674,-257 -1037,-331 -46,-10 -100,-14 -145,-23 -172,-35 -365,-32 -542,-32 -167,0 -294,18 -447,30 -140,12 -481,78 -609,128 -54,21 -129,35 -186,58l-351 139c-58,20 -104,53 -164,81 -29,14 -53,25 -80,40l-231 139c-250,168 -472,338 -679,546 -208,210 -381,430 -541,684 -30,49 -59,105 -90,154 -59,92 -124,216 -167,321 -26,64 -49,112 -73,173 -42,103 -98,254 -124,364 -9,39 -13,62 -23,98 -43,160 -86,334 -100,515 -13,164 -24,300 -24,473z"
          style={{
            fill: 'white',
          }}
        />
      </g>
    </svg>
  );
}

export default SvgComponent;
