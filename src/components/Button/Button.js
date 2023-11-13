import { useEffect } from "react";
import { useState } from "react";
import  './Button.css';
function Button(){
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 170 || document.documentElement.scrollTop > 150) {
        document.getElementById("up").style.display = "block";
      } else {
        document.getElementById("up").style.display = "none";
      }
    }
    
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
    return(
        <button id="up" onClick={ scrollToTop}>
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="50px" height="50px" viewBox="0 0 1844.000000 1824.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,1824.000000) scale(0.100000,-0.100000)"
fill="#8513C6" stroke="none">
  <path d="M8710 18099 c-47 -4 -161 -12 -254 -18 -92 -6 -204 -17 -248 -26 -44
-8 -115 -15 -157 -15 -42 0 -107 -7 -145 -15 -38 -8 -112 -19 -165 -25 -53 -5
-111 -14 -130 -20 -19 -5 -70 -14 -115 -20 -45 -6 -103 -17 -131 -25 -106 -29
-182 -48 -245 -60 -92 -18 -393 -97 -535 -140 -66 -20 -140 -43 -165 -50 -45
-12 -331 -110 -425 -145 -500 -185 -1007 -426 -1455 -693 -343 -204 -854 -586
-1215 -908 -356 -316 -936 -916 -1126 -1164 -291 -381 -474 -638 -647 -915
-237 -378 -406 -696 -545 -1025 -41 -99 -99 -234 -127 -300 -80 -183 -156
-386 -200 -530 -23 -71 -45 -143 -51 -160 -6 -16 -16 -48 -21 -70 -6 -22 -19
-63 -29 -90 -10 -28 -19 -62 -19 -75 0 -14 -9 -45 -20 -69 -11 -24 -20 -54
-20 -67 0 -13 -9 -46 -20 -74 -11 -28 -20 -63 -20 -78 0 -15 -9 -53 -20 -85
-11 -31 -20 -72 -20 -90 0 -19 -9 -60 -20 -92 -11 -32 -20 -77 -20 -100 0 -24
-7 -62 -16 -86 -8 -24 -20 -88 -25 -143 -5 -54 -14 -107 -19 -116 -6 -10 -15
-73 -20 -140 -6 -67 -16 -133 -22 -148 -5 -15 -14 -99 -19 -187 -4 -88 -13
-176 -19 -195 -6 -19 -15 -159 -20 -311 -5 -153 -14 -289 -20 -304 -13 -33
-13 -330 0 -354 5 -10 14 -148 19 -307 6 -159 15 -305 21 -324 6 -19 15 -102
19 -185 5 -82 14 -163 20 -179 6 -15 16 -78 21 -140 6 -61 17 -136 25 -166 8
-30 15 -73 15 -97 0 -23 9 -80 19 -125 11 -46 24 -108 31 -138 30 -148 48
-228 59 -253 6 -16 11 -43 11 -60 0 -18 7 -45 16 -62 9 -16 20 -57 25 -91 4
-33 15 -74 24 -90 8 -16 15 -39 15 -51 0 -12 8 -44 19 -70 10 -26 21 -67 25
-91 3 -24 13 -53 20 -65 8 -12 17 -39 20 -59 4 -20 13 -50 21 -65 8 -15 15
-34 15 -41 0 -22 121 -354 157 -432 19 -41 57 -129 83 -195 188 -468 447 -948
769 -1427 176 -261 230 -334 448 -608 335 -419 747 -861 1051 -1125 57 -50
136 -119 175 -154 136 -120 427 -348 627 -492 659 -474 1204 -770 1905 -1033
121 -46 238 -89 260 -96 22 -7 92 -37 156 -66 122 -56 216 -87 414 -137 66
-16 149 -38 185 -48 36 -9 84 -20 106 -23 23 -3 54 -13 70 -21 16 -8 51 -15
77 -15 26 0 62 -7 79 -16 17 -9 73 -20 125 -24 52 -5 100 -13 108 -20 7 -6 51
-15 97 -20 45 -5 101 -16 123 -24 22 -8 65 -15 96 -16 30 0 89 -8 130 -19 41
-10 125 -21 188 -25 62 -3 119 -10 126 -16 7 -6 96 -15 197 -21 100 -5 199
-15 218 -22 51 -17 1046 -17 1077 0 13 8 93 17 197 22 96 6 185 15 196 21 12
6 72 14 133 17 62 2 133 11 158 19 25 8 91 18 146 23 55 5 109 14 120 20 11 5
60 15 108 21 48 6 97 16 108 21 10 6 58 14 107 19 48 5 101 15 118 24 17 9 52
16 77 16 25 0 71 9 102 20 32 11 70 20 85 20 15 0 50 9 78 20 28 11 60 20 70
20 21 0 261 66 370 102 36 12 106 40 155 64 50 23 135 58 190 77 528 184 1061
439 1534 734 238 149 601 399 771 533 63 49 140 109 170 132 127 96 473 402
653 577 48 47 92 88 98 89 13 5 423 454 554 608 288 338 631 823 895 1266 228
383 487 930 643 1363 125 343 302 1036 382 1485 19 107 45 249 59 315 35 166
53 310 66 520 6 99 18 236 27 305 25 194 23 645 -5 920 -12 118 -29 300 -37
405 -15 180 -54 477 -75 568 -5 23 -23 121 -39 217 -113 650 -263 1193 -476
1719 -378 937 -925 1817 -1594 2565 -485 542 -837 868 -1416 1308 -250 190
-582 403 -965 620 -480 273 -1217 579 -1760 732 -240 68 -791 202 -870 211
-30 4 -80 13 -110 20 -30 8 -98 19 -150 25 -52 6 -111 15 -130 20 -19 5 -93
14 -165 19 -71 6 -154 15 -184 21 -30 5 -131 15 -225 20 -94 6 -211 15 -261
20 -109 10 -806 10 -925 -1z m795 -2046 c204 -190 507 -475 675 -633 385 -361
762 -715 1051 -985 123 -115 262 -246 309 -290 47 -45 119 -113 160 -151 41
-39 190 -178 330 -310 141 -131 429 -401 640 -599 211 -198 499 -468 640 -600
141 -132 390 -366 555 -520 165 -154 321 -300 346 -325 l47 -45 6 -200 c3
-110 10 -308 16 -440 6 -132 15 -427 20 -655 6 -228 14 -500 20 -605 5 -104
14 -379 20 -610 6 -231 15 -505 20 -610 5 -104 12 -287 15 -405 3 -118 8 -268
11 -332 4 -76 2 -118 -4 -118 -6 0 -50 37 -99 83 -48 46 -158 148 -243 227
-85 79 -231 217 -325 305 -93 89 -240 227 -326 306 -86 79 -236 221 -335 314
-99 94 -379 357 -624 585 -245 228 -497 465 -560 526 -63 61 -185 175 -270
254 -85 79 -187 173 -225 209 -39 36 -176 165 -305 286 -129 121 -349 328
-490 460 -140 132 -316 296 -390 365 -74 69 -182 170 -240 226 -58 55 -175
165 -260 244 -85 79 -217 202 -294 274 l-138 130 -72 -75 c-39 -41 -159 -169
-266 -284 -107 -116 -251 -269 -320 -340 -69 -72 -213 -225 -320 -340 -107
-116 -251 -269 -320 -340 -69 -72 -215 -227 -325 -345 -110 -118 -250 -267
-311 -330 -61 -63 -141 -149 -179 -190 -70 -76 -474 -505 -941 -999 -142 -151
-292 -311 -333 -355 -41 -45 -187 -200 -325 -346 -139 -146 -316 -335 -396
-420 -79 -85 -234 -249 -344 -365 -111 -115 -233 -246 -273 -290 -40 -43 -74
-77 -77 -74 -7 7 -25 457 -36 914 -6 226 -17 597 -24 825 -8 228 -18 537 -21
685 -3 149 -12 441 -20 650 -8 209 -17 500 -20 646 -6 250 -5 268 12 281 21
16 161 162 354 368 74 80 211 226 304 325 92 99 191 205 220 235 138 148 408
435 489 520 50 52 120 127 156 165 36 39 198 212 360 384 162 173 407 434 544
580 302 322 346 369 461 491 292 309 406 431 451 479 27 30 94 102 150 160
105 111 337 358 559 596 72 77 173 185 225 240 121 126 244 257 388 413 63 67
117 122 120 122 4 0 174 -156 377 -347z m-2509 -9198 l1 -450 241 -3 242 -2 0
-38 c0 -20 -3 -67 -7 -104 l-6 -68 -233 0 -234 0 0 -929 c0 -838 -2 -929 -16
-935 -9 -3 -55 -6 -103 -6 l-88 0 -6 188 c-4 103 -7 523 -7 935 l0 747 -135 0
-135 0 0 105 0 104 136 3 135 3 5 440 c3 242 7 446 10 453 3 9 28 12 101 10
l98 -3 1 -450z m1786 -430 c340 -59 599 -245 762 -546 97 -181 121 -287 120
-534 -1 -176 -3 -197 -28 -280 -32 -107 -98 -250 -157 -337 -53 -79 -185 -211
-262 -261 -150 -100 -313 -159 -483 -178 -391 -42 -759 112 -977 409 -148 202
-228 467 -214 710 15 245 93 455 236 635 144 181 307 291 528 356 141 42 326
52 475 26z m1603 -220 c0 -104 2 -193 3 -197 1 -3 46 38 100 91 198 197 395
286 662 298 415 20 764 -148 974 -466 111 -170 176 -387 176 -594 0 -255 -104
-524 -276 -716 -156 -173 -412 -304 -649 -331 -369 -41 -655 58 -912 317 l-73
74 -2 -658 -3 -658 -105 0 -105 0 -3 1518 -2 1518 107 -3 108 -3 0 -190z"/>
<path d="M8455 6215 c-393 -73 -705 -453 -705 -860 0 -404 292 -765 686 -847
304 -62 629 50 825 286 111 134 181 300 198 474 46 452 -245 856 -682 946 -90
19 -224 19 -322 1z"/>
<path d="M11085 6180 c-321 -49 -603 -309 -684 -629 -29 -116 -29 -305 -1
-416 56 -218 202 -411 399 -528 231 -137 543 -154 787 -42 201 92 358 254 442
457 74 177 82 393 23 568 -97 286 -307 488 -591 570 -86 25 -276 35 -375 20z"/>
</g>
</svg>
        </button>
    );
}

export default Button;