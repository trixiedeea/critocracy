export function setupBoard() {
  const board = document.getElementById('game-board');
  const ctx = board.getContext('2d');
  ctx.fillStyle = "#fff";
  ctx.fillRect(1594ps, 1024px, board.width, board.height);
}
// ===== Player Spaces =====
const purplePath = [
  {
    pathColor: "purple",
    coordinates: [
      [8, 472], [188, 472], [188, 562], [8, 562]
    ],
    next: [
      [164, 465], [203, 492], [205, 546], [168, 579]
    ],
    type: "start"
  },
  {
    pathColor: "purple",
    coordinates: [[164, 465]],
    next: [[179, 440]],
    type: "regular"
  },
  {
    pathColor: "purple",
    coordinates: [[179, 440]],
    next: [[187, 407]],
    type: "regular"
  },
  {
    pathColor: "purple",
    coordinates: [[187, 407]],
    next: [[205, 377]],
    type: "regular"
  },
  {
    pathColor: "purple",
    coordinates: [[205, 377]],
    next: [[216, 350]],
    type: "regular"
  },
  {
    pathColor: "purple",
    coordinates: [[216, 350]],
    next: [[257, 304]],
    type: "regular"
  },
  {
    pathColor: "purple",
    coordinates: [[257, 304]],
    next: [[280, 286]],
    type: "regular"
  },
  {
    pathColor: "purple",
    coordinates: [[280, 286]],
    next: [[311, 277]],
    type: "regular"
  },
  {
    pathColor: "purple",
    coordinates: [[311, 277]],
    next: [[350, 270]],
    type: "regular"
  },
  {
    pathColor: "purple",
    coordinates: [[350, 270]],
    next: [[383, 272]],
    type: "regular"
  },
  {
    pathColor: "purple",
    coordinates: [[383, 272]],
    next: [[417, 268]],
    type: "regular"
  },
  {
    pathColor: "purple",
    coordinates: [[417, 268]],
    next: [[454, 275]],
    type: "regular"
  },
  {
    pathColor: "purple",
    coordinates: [[454, 275]],
    next: [[483, 285]],
    type: "regular"
  },
  {
    pathColor: "purple",
    coordinates: [[483, 285]],
    next: [[505, 291]],
    type: "regular"
  },
  {
    pathColor: "purple",
    coordinates: [[505, 291]],
    next: [[569, 328]],
    type: "regular"
  },
  {
    pathColor: "purple",
    coordinates: [[569, 328]],
    next: [[611, 371]],
    type: "draw"
  },
  {
    pathColor: "purple",
    coordinates: [[611, 371]],
    next: [[633, 401]],
    type: "regular"
  },
  {
    pathColor: "purple",
    coordinates: [[633, 401]],
    next: [[644, 431]],
    type: "regular"
  },
  {
    pathColor: "purple",
    coordinates: [[644, 431]],
    next: [[664, 463]],
    type: "regular"
  },
  {
    pathColor: "purple",
    coordinates: [[664, 463]],
    next: [[703, 518]],
    type: "regular"
  },
  {
    pathColor: "purple",
    coordinates: [[703, 518]],
    next: [[720, 542]],
    type: "draw"
  },
  {
    pathColor: "purple",
    coordinates: [[720, 542]],
    next: [[774, 602]],
    type: "regular"
  },
  {
    pathColor: "purple",
    coordinates: [[774, 602]],
    next: [[794, 631]],
    type: "regular"
  },
  {
    pathColor: "purple",
    coordinates: [[794, 631]],
    next: [[835, 686]],
    type: "draw"
  },
  {
    pathColor: "purple",
    coordinates: [[835, 686]],
    next: [[854, 714]],
    type: "regular"
  },
  {
    pathColor: "purple",
    coordinates: [[854, 714]],
    next: [[884, 729]],
    type: "regular"
  },
  {
    pathColor: "purple",
    coordinates: [[884, 729]],
    next: [[911, 750]],
    type: "regular"
  },
  {
    pathColor: "purple",
    coordinates: [[911, 750]],
    next: [[929, 758]],
    type: "regular"
  },
  {
    pathColor: "purple",
    coordinates: [[929, 758]],
    next: [[994, 784]],
    type: "draw"
  },
  {
    pathColor: "purple",
    coordinates: [[994, 784]],
    next: [[1049, 793]],
    type: "regular"
  },
  {
    pathColor: "purple",
    coordinates: [[1049, 793]],
    next: [[1080, 797]],
    type: "draw"
  },
  {
    pathColor: "purple",
    coordinates: [[1080, 797]],
    next: [[1111, 796]],
    type: "regular"
  },
  {
    pathColor: "purple",
    coordinates: [[1111, 796]],
    next: [[1174, 785]],
    type: "regular"
  },
  {
    pathColor: "purple",
    coordinates: [[1174, 785]],
    next: [[1207, 777]],
    type: "regular"
  },
  {
    pathColor: "purple",
    coordinates: [[1207, 777]],
    next: [[1236, 763]],
    type: "regular"
  },
  {
    pathColor: "purple",
    coordinates: [[1236, 763]],
    next: [[1281, 724]],
    type: "draw"
  },
  {
    pathColor: "purple",
    coordinates: [[1281, 724]],
    next: [[1300, 696]],
    type: "regular"
  },
  {
    pathColor: "purple",
    coordinates: [[1300, 696]],
    next: [[1319, 666]],
    type: "regular"
  },
  {
    pathColor: "purple",
    coordinates: [[1319, 666]],
    next: [[1328, 636]],
    type: "regular"
  },
  {
    pathColor: "purple",
    coordinates: [[1328, 636]],
    next: [[1340, 576]],
    type: "draw"
  },
  {
    pathColor: "purple",
    coordinates: [
      [1331, 471], [1331, 559], [1511, 559], [1511, 471]
    ],
    type: "finish"
  },
  // Choicepoint: shared polygon, appears in purple & one other
  {
    pathColor: "purple",
    coordinates: [
      [524, 276], [505, 321], [547, 339], [568, 300], [524, 276]
    ],
    next: [[566, 273], [569, 328]],
    type: "choicepoint"
  },
  {
    pathColor: "purple",
    coordinates: [
      [750, 535], [777, 566], [746, 604], [716, 569], [752, 532]
    ],
    next: [[776, 536], [774, 602]],
    type: "choicepoint"
  },
  {
    pathColor: "purple",
    coordinates: [
      [951, 742], [991, 758], [978, 805], [932, 786], [948, 742]
    ],
    next: [[979, 739], [994, 784]],
    type: "choicepoint"
  }
];
const bluePath = [
  {
    pathColor: "blue",
    coordinates: [
      [8, 472], [188, 472], [188, 562], [8, 562]
    ],
    next: [
      [164, 465], [203, 492], [205, 546], [168, 579]
    ],
    type: "start"
  },
  {
    pathColor: "blue",
    coordinates: [[203, 492]],
    next: [[231, 468]],
    type: "regular"
  },
  {
    pathColor: "blue",
    coordinates: [[231, 468]],
    next: [[287, 416]],
    type: "regular"
  },
  {
    pathColor: "blue",
    coordinates: [[287, 416]],
    next: [[313, 383]],
    type: "regular"
  },
  {
    pathColor: "blue",
    coordinates: [[313, 383]],
    next: [[344, 356]],
    type: "regular"
  },
  {
    pathColor: "blue",
    coordinates: [[344, 356]],
    next: [[382, 340]],
    type: "regular"
  },
  {
    pathColor: "blue",
    coordinates: [[382, 340]],
    next: [[416, 337]],
    type: "regular"
  },
  {
    pathColor: "blue",
    coordinates: [[416, 337]],
    next: [[443, 367]],
    type: "regular"
  },
  {
    pathColor: "blue",
    coordinates: [[443, 367]],
    next: [[458, 402]],
    type: "regular"
  },
  {
    pathColor: "blue",
    coordinates: [[458, 402]],
    next: [[502, 529]],
    type: "regular"
  },
  {
    pathColor: "blue",
    coordinates: [[502, 529]],
    next: [[515, 565]],
    type: "regular"
  },
  {
    pathColor: "blue",
    coordinates: [[515, 565]],
    next: [[534, 636]],
    type: "draw"
  },
  {
    pathColor: "blue",
    coordinates: [[534, 636]],
    next: [[541, 676]],
    type: "regular"
  },
  {
    pathColor: "blue",
    coordinates: [[541, 676]],
    next: [[548, 705]],
    type: "regular"
  },
  {
    pathColor: "blue",
    coordinates: [[548, 705]],
    next: [[559, 743]],
    type: "regular"
  },
  {
    pathColor: "blue",
    coordinates: [[559, 743]],
    next: [[587, 837]],
    type: "choicepoint"
  },
  {
    pathColor: "blue",
    coordinates: [[587, 837]],
    next: [[606, 871]],
    type: "regular"
  },
  {
    pathColor: "blue",
    coordinates: [[606, 871]],
    next: [[644, 896]],
    type: "regular"
  },
  {
    pathColor: "blue",
    coordinates: [[644, 896]],
    next: [[676, 908]],
    type: "draw"
  },
  {
    pathColor: "blue",
    coordinates: [[676, 908]],
    next: [[717, 919]],
    type: "regular"
  },
  {
    pathColor: "blue",
    coordinates: [[717, 919]],
    next: [[753, 916]],
    type: "regular"
  },
  {
    pathColor: "blue",
    coordinates: [[753, 916]],
    next: [[792, 916]],
    type: "regular"
  },
  {
    pathColor: "blue",
    coordinates: [[792, 916]],
    next: [[836, 909]],
    type: "regular"
  },
  {
    pathColor: "blue",
    coordinates: [[836, 909]],
    next: [[910, 868]],
    type: "draw"
  },
  {
    pathColor: "blue",
    coordinates: [[910, 868]],
    next: [[934, 843]],
    type: "regular"
  },
  {
    pathColor: "blue",
    coordinates: [[934, 843]],
    next: [[950, 811]],
    type: "regular"
  },
  {
    pathColor: "blue",
    coordinates: [[950, 811]],
    next: [[985, 711]],
    type: "draw"
  },
  {
    pathColor: "blue",
    coordinates: [[985, 711]],
    next: [[997, 679]],
    type: "regular"
  },
  {
    pathColor: "blue",
    coordinates: [[997, 679]],
    next: [[999, 647]],
    type: "regular"
  },
  {
    pathColor: "blue",
    coordinates: [[999, 647]],
    next: [[984, 579]],
    type: "regular"
  },
  {
    pathColor: "blue",
    coordinates: [[984, 579]],
    next: [[984, 543]],
    type: "regular"
  },
  {
    pathColor: "blue",
    coordinates: [[984, 543]],
    next: [[1078, 531]],
    type: "draw"
  },
  {
    pathColor: "blue",
    coordinates: [[1078, 531]],
    next: [[1090, 501]],
    type: "regular"
  },
  {
    pathColor: "blue",
    coordinates: [[1090, 501]],
    next: [[1080, 470]],
    type: "draw"
  },
  {
    pathColor: "blue",
    coordinates: [[1080, 470]],
    next: [[1069, 409]],
    type: "regular"
  },
  {
    pathColor: "blue",
    coordinates: [[1069, 409]],
    next: [[1080, 384]],
    type: "draw"
  },
  {
    pathColor: "blue",
    coordinates: [[1080, 384]],
    next: [[1107, 359]],
    type: "regular"
  },
  {
    pathColor: "blue",
    coordinates: [[1107, 359]],
    next: [[1141, 357]],
    type: "regular"
  },
  {
    pathColor: "blue",
    coordinates: [[1141, 357]],
    next: [[1167, 370]],
    type: "regular"
  },
  {
    pathColor: "blue",
    coordinates: [[1167, 370]],
    next: [[1194, 394]],
    type: "regular"
  },
  {
    pathColor: "blue",
    coordinates: [[1194, 394]],
    next: [[1216, 414]],
    type: "regular"
  },
  {
    pathColor: "blue",
    coordinates: [[1216, 414]],
    next: [[1263, 454]],
    type: "regular"
  },
  {
    pathColor: "blue",
    coordinates: [[1263, 454]],
    next: [[1288, 475]],
    type: "draw"
  },
  {
    pathColor: "blue",
    coordinates: [
      [1331, 471], [1331, 559], [1511, 559], [1511, 471]
    ],
    type: "finish"
  },
  // Choicepoints
  {
    pathColor: "blue",
    coordinates: [
      [460, 476], [504, 458], [522, 506], [477, 518], [460, 476]
    ],
    next: [[523, 476], [502, 529]],
    type: "choicepoint"
  },
  {
    pathColor: "blue",
    coordinates: [
      [533, 759], [540, 805], [590, 788], [578, 745], [532, 758]
    ],
    next: [[587, 758], [574, 808]],
    type: "choicepoint"
  },
  {
    pathColor: "blue",
    coordinates: [
      [980, 514], [1029, 513], [1044, 557], [996, 556], [978, 517]
    ],
    next: [[1036, 573], [1051, 533]],
    type: "choicepoint"
  },
  {
    pathColor: "blue",
    coordinates: [
      [951, 742], [991, 758], [978, 805], [932, 786], [948, 742]
    ],
    next: [[979, 739], [994, 784]],
    type: "choicepoint"
  }
];

const cyanPath = [
  {
    pathColor: "cyan",
    coordinates: [
      [8, 472], [188, 472], [188, 562], [8, 562]
    ],
    next: [
      [164, 465], [203, 492], [205, 546], [168, 579]
    ],
    type: "start"
  },
  {
    pathColor: "cyan",
    coordinates: [[205, 546]],
    next: [[224, 573]],
    type: "regular"
  },
  {
    pathColor: "cyan",
    coordinates: [[224, 573]],
    next: [[243, 596]],
    type: "regular"
  },
  {
    pathColor: "cyan",
    coordinates: [[243, 596]],
    next: [[266, 619]],
    type: "regular"
  },
  {
    pathColor: "cyan",
    coordinates: [[266, 619]],
    next: [[324, 656]],
    type: "regular"
  },
  {
    pathColor: "cyan",
    coordinates: [[324, 656]],
    next: [[351, 672]],
    type: "draw"
  },
  {
    pathColor: "cyan",
    coordinates: [[351, 672]],
    next: [[387, 675]],
    type: "regular"
  },
  {
    pathColor: "cyan",
    coordinates: [[387, 675]],
    next: [[412, 669]],
    type: "regular"
  },
  {
    pathColor: "cyan",
    coordinates: [[412, 669]],
    next: [[434, 659]],
    type: "regular"
  },
  {
    pathColor: "cyan",
    coordinates: [[434, 659]],
    next: [[458, 646]],
    type: "regular"
  },
  {
    pathColor: "cyan",
    coordinates: [[458, 646]],
    next: [[456, 611]],
    type: "regular"
  },
  {
    pathColor: "cyan",
    coordinates: [[456, 611]],
    next: [[450, 582]],
    type: "regular"
  },
  {
    pathColor: "cyan",
    coordinates: [[450, 582]],
    next: [[435, 550]],
    type: "regular"
  },
  {
    pathColor: "cyan",
    coordinates: [[435, 550]],
    next: [[453, 503]],
    type: "regular"
  },
  {
    pathColor: "cyan",
    coordinates: [[453, 503]],
    next: [[523, 476]],
    type: "draw"
  },
  {
    pathColor: "cyan",
    coordinates: [[523, 476]],
    next: [[532, 443]],
    type: "regular"
  },
  {
    pathColor: "cyan",
    coordinates: [[532, 443]],
    next: [[523, 417]],
    type: "regular"
  },
  {
    pathColor: "cyan",
    coordinates: [[523, 417]],
    next: [[512, 386]],
    type: "regular"
  },
  {
    pathColor: "cyan",
    coordinates: [[512, 386]],
    next: [[516, 351]],
    type: "regular"
  },
  {
    pathColor: "cyan",
    coordinates: [[516, 351]],
    next: [[566, 273]],
    type: "choicepoint"
  },
  {
    pathColor: "cyan",
    coordinates: [[566, 273]],
    next: [[585, 248]],
    type: "regular"
  },
  {
    pathColor: "cyan",
    coordinates: [[585, 248]],
    next: [[638, 210]],
    type: "draw"
  },
  {
    pathColor: "cyan",
    coordinates: [[638, 210]],
    next: [[672, 205]],
    type: "regular"
  },
  {
    pathColor: "cyan",
    coordinates: [[672, 205]],
    next: [[705, 197]],
    type: "draw"
  },
  {
    pathColor: "cyan",
    coordinates: [[705, 197]],
    next: [[739, 196]],
    type: "regular"
  },
  {
    pathColor: "cyan",
    coordinates: [[739, 196]],
    next: [[803, 200]],
    type: "regular"
  },
  {
    pathColor: "cyan",
    coordinates: [[803, 200]],
    next: [[833, 205]],
    type: "regular"
  },
  {
    pathColor: "cyan",
    coordinates: [[833, 205]],
    next: [[864, 218]],
    type: "regular"
  },
  {
    pathColor: "cyan",
    coordinates: [[864, 218]],
    next: [[919, 254]],
    type: "regular"
  },
  {
    pathColor: "cyan",
    coordinates: [[919, 254]],
    next: [[941, 276]],
    type: "regular"
  },
  {
    pathColor: "cyan",
    coordinates: [[941, 276]],
    next: [[980, 347]],
    type: "choicepoint"
  },
  {
    pathColor: "cyan",
    coordinates: [[980, 347]],
    next: [[989, 414]],
    type: "draw"
  },
  {
    pathColor: "cyan",
    coordinates: [[989, 414]],
    next: [[996, 453]],
    type: "regular"
  },
  {
    pathColor: "cyan",
    coordinates: [[996, 453]],
    next: [[999, 479]],
    type: "regular"
  },
  {
    pathColor: "cyan",
    coordinates: [[999, 479]],
    next: [[1050, 594]],
    type: "regular"
  },
  {
    pathColor: "cyan",
    coordinates: [[1050, 594]],
    next: [[1065, 620]],
    type: "draw"
  },
  {
    pathColor: "cyan",
    coordinates: [[1065, 620]],
    next: [[1093, 645]],
    type: "regular"
  },
  {
    pathColor: "cyan",
    coordinates: [[1093, 645]],
    next: [[1124, 655]],
    type: "regular"
  },
  {
    pathColor: "cyan",
    coordinates: [[1124, 655]],
    next: [[1193, 658]],
    type: "draw"
  },
  {
    pathColor: "cyan",
    coordinates: [[1193, 658]],
    next: [[1231, 639]],
    type: "regular"
  },
  {
    pathColor: "cyan",
    coordinates: [[1231, 639]],
    next: [[1247, 613]],
    type: "regular"
  },
  {
    pathColor: "cyan",
    coordinates: [[1247, 613]],
    next: [[1273, 594]],
    type: "regular"
  },
  {
    pathColor: "cyan",
    coordinates: [[1273, 594]],
    next: [[1310, 544]],
    type: "regular"
  },
  {
    pathColor: "cyan",
    coordinates: [
      [1331, 471], [1331, 559], [1511, 559], [1511, 471]
    ],
    type: "finish"
  },
  // Choicepoints
  {
    pathColor: "cyan",
    coordinates: [
      [460, 476], [504, 458], [522, 506], [477, 518], [460, 476]
    ],
    next: [[523, 476], [502, 529]],
    type: "choicepoint"
  },
  {
    pathColor: "cyan",
    coordinates: [
      [524, 276], [505, 321], [547, 339], [568, 300], [524, 276]
    ],
    next: [[566, 273], [569, 328]],
    type: "choicepoint"
  },
  {
    pathColor: "cyan",
    coordinates: [
      [962, 272], [925, 295], [952, 334], [990, 314], [970, 277]
    ],
    next: [[988, 289], [980, 347]],
    type: "choicepoint"
  },
  {
    pathColor: "cyan",
    coordinates: [
      [980, 514], [1029, 513], [1044, 557], [996, 556], [978, 517]
    ],
    next: [[1036, 573], [1051, 533]],
    type: "choicepoint"
  }
];

const pinkPath = [
  {
    pathColor: "pink",
    coordinates: [
      [8, 472], [188, 472], [188, 562], [8, 562]
    ],
    next: [
      [164, 465], [203, 492], [205, 546], [168, 579]
    ],
    type: "start"
  },
  {
    pathColor: "pink",
    coordinates: [[168, 579]],
    next: [[179, 604]],
    type: "regular"
  },
  {
    pathColor: "pink",
    coordinates: [[179, 604]],
    next: [[194, 640]],
    type: "regular"
  },
  {
    pathColor: "pink",
    coordinates: [[194, 640]],
    next: [[204, 672]],
    type: "regular"
  },
  {
    pathColor: "pink",
    coordinates: [[204, 672]],
    next: [[237, 724]],
    type: "draw"
  },
  {
    pathColor: "pink",
    coordinates: [[237, 724]],
    next: [[255, 745]],
    type: "regular"
  },
  {
    pathColor: "pink",
    coordinates: [[255, 745]],
    next: [[286, 764]],
    type: "regular"
  },
  {
    pathColor: "pink",
    coordinates: [[286, 764]],
    next: [[315, 777]],
    type: "regular"
  },
  {
    pathColor: "pink",
    coordinates: [[315, 777]],
    next: [[347, 786]],
    type: "regular"
  },
  {
    pathColor: "pink",
    coordinates: [[347, 786]],
    next: [[382, 793]],
    type: "regular"
  },
  {
    pathColor: "pink",
    coordinates: [[382, 793]],
    next: [[417, 794]],
    type: "regular"
  },
  {
    pathColor: "pink",
    coordinates: [[417, 794]],
    next: [[450, 794]],
    type: "regular"
  },
  {
    pathColor: "pink",
    coordinates: [[450, 794]],
    next: [[529, 780]],
    type: "draw"
  },
  {
    pathColor: "pink",
    coordinates: [[529, 780]],
    next: [[587, 758]],
    type: "regular"
  },
  {
    pathColor: "pink",
    coordinates: [[587, 758]],
    next: [[615, 744]],
    type: "regular"
  },
  {
    pathColor: "pink",
    coordinates: [[615, 744]],
    next: [[640, 716]],
    type: "regular"
  },
  {
    pathColor: "pink",
    coordinates: [[640, 716]],
    next: [[683, 667]],
    type: "draw"
  },
  {
    pathColor: "pink",
    coordinates: [[683, 667]],
    next: [[704, 635]],
    type: "regular"
  },
  {
    pathColor: "pink",
    coordinates: [[704, 635]],
    next: [[720, 608]],
    type: "regular"
  },
  {
    pathColor: "pink",
    coordinates: [[720, 608]],
    next: [[776, 536]],
    type: "regular"
  },
  {
    pathColor: "pink",
    coordinates: [[776, 536]],
    next: [[795, 513]],
    type: "choicepoint"
  },
  {
    pathColor: "pink",
    coordinates: [[795, 513]],
    next: [[816, 488]],
    type: "regular"
  },
  {
    pathColor: "pink",
    coordinates: [[816, 488]],
    next: [[834, 454]],
    type: "regular"
  },
  {
    pathColor: "pink",
    coordinates: [[834, 454]],
    next: [[852, 424]],
    type: "regular"
  },
  {
    pathColor: "pink",
    coordinates: [[852, 424]],
    next: [[887, 370]],
    type: "regular"
  },
  {
    pathColor: "pink",
    coordinates: [[887, 370]],
    next: [[902, 350]],
    type: "draw"
  },
  {
    pathColor: "pink",
    coordinates: [[902, 350]],
    next: [[925, 330]],
    type: "regular"
  },
  {
    pathColor: "pink",
    coordinates: [[925, 330]],
    next: [[988, 289]],
    type: "regular"
  },
  {
    pathColor: "pink",
    coordinates: [[988, 289]],
    next: [[1050, 274]],
    type: "choicepoint"
  },
  {
    pathColor: "pink",
    coordinates: [[1050, 274]],
    next: [[1082, 263]],
    type: "draw"
  },
  {
    pathColor: "pink",
    coordinates: [[1082, 263]],
    next: [[1118, 270]],
    type: "regular"
  },
  {
    pathColor: "pink",
    coordinates: [[1118, 270]],
    next: [[1149, 271]],
    type: "regular"
  },
  {
    pathColor: "pink",
    coordinates: [[1149, 271]],
    next: [[1181, 277]],
    type: "regular"
  },
  {
    pathColor: "pink",
    coordinates: [[1181, 277]],
    next: [[1238, 302]],
    type: "draw"
  },
  {
    pathColor: "pink",
    coordinates: [[1238, 302]],
    next: [[1258, 322]],
    type: "regular"
  },
  {
    pathColor: "pink",
    coordinates: [[1258, 322]],
    next: [[1279, 351]],
    type: "regular"
  },
  {
    pathColor: "pink",
    coordinates: [[1279, 351]],
    next: [[1308, 405]],
    type: "draw"
  },
  {
    pathColor: "pink",
    coordinates: [[1308, 405]],
    next: [[1319, 438]],
    type: "regular"
  },
  {
    pathColor: "pink",
    coordinates: [[1319, 438]],
    next: [[1334, 459]],
    type: "regular"
  },
  {
    pathColor: "pink",
    coordinates: [
      [1331, 471], [1331, 559], [1511, 559], [1511, 471]
    ],
    type: "finish"
  },
  // Multi-directional Zones Duplicates
  {
    pathColor: "pink",
    coordinates: [
      [533, 759], [540, 805], [590, 788], [578, 745], [532, 758]
    ],
    next: [[587, 758], [574, 808]],
    type: "choicepoint"
  },
  {
    pathColor: "pink",
    coordinates: [
      [750, 535], [777, 566], [746, 604], [716, 569], [752, 532]
    ],
    next: [[776, 536], [774, 602]],
    type: "choicepoint"
  },
  {
    pathColor: "pink",
    coordinates: [
      [962, 272], [925, 295], [952, 334], [990, 314], [970, 277]
    ],
    next: [[988, 289], [980, 347]],
    type: "choicepoint"
  }
];