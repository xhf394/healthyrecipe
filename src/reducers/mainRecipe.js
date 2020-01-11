const INITIAL_STATE = {
  mainRecipies: {
    Vegetable: [
    {
    foodId: 'food_ai215e5b85pdh5ajd4aafa3w2zm8',
    label: 'Carrots',
      nutrients: {
    ENERC_KCAL: 41,
      PROCNT: 0.93,
      FAT: 0.24,
      CHOCDF: 9.58,
      FIBTG: 2.8
    },
    category: 'Generic foods',
    categoryLabel: 'food'
    },
    {
    foodId: 'food_aahw0jha9f8337ajbopx9aec6z7i',
    label: 'Broccoli',
    nutrients: {
      ENERC_KCAL: 34,
      PROCNT: 2.82,
      FAT: 0.37,
      CHOCDF: 6.64,
      FIBTG: 2.6
    },
    category: 'Generic foods',
    categoryLabel: 'food'
  },
  {
    foodId: 'food_bvlose6arfl26ra396sjrb7hetqh',
    label: 'white mushroom',
    nutrients: {
      ENERC_KCAL: 22,
      PROCNT: 3.09,
      FAT: 0.34,
      CHOCDF: 3.26,
      FIBTG: 1
    },
    category: 'Generic foods',
    categoryLabel: 'food'
  },
  {
    foodId: 'food_avmg2xfbv1p91yavoxjg7bddvfaz',
    label: 'Kale',
    nutrients: {
      ENERC_KCAL: 49,
      PROCNT: 4.28,
      FAT: 0.93,
      CHOCDF: 8.75,
      FIBTG: 3.6
    },
    category: 'Generic foods',
    categoryLabel: 'food'
  },
  {
    foodId: 'food_buj0e74bxco8n0betbsnzayddt6a',
    label: 'Turnips',
    nutrients: {
      ENERC_KCAL: 28,
      PROCNT: 0.9,
      FAT: 0.1,
      CHOCDF: 6.43,
      FIBTG: 1.8
    },
    category: 'Generic foods',
    categoryLabel: 'food'
  },
  {
    foodId: 'food_aoceuc6bshdej1bbsdammbnj6l6o',
    label: 'Spinach',
    nutrients: {
      ENERC_KCAL: 23,
      PROCNT: 2.86,
      FAT: 0.39,
      CHOCDF: 3.63,
      FIBTG: 2.2
    },
    category: 'Generic foods',
    categoryLabel: 'food'
  },
  {
    foodId: 'food_b7bgzddbqq26mia27xpv7acn083m',
    label: 'Asparagus',
    nutrients: {
      ENERC_KCAL: 20,
      PROCNT: 2.2,
      FAT: 0.12,
      CHOCDF: 3.88,
      FIBTG: 2.1
    },
    category: 'Generic foods',
    categoryLabel: 'food'
  },
   {
    foodId: 'food_aceucvpau4a8v6atkx5eabxyoqdn',
    label: 'green bean',
    nutrients: {
      ENERC_KCAL: 31,
      PROCNT: 1.83,
      FAT: 0.22,
      CHOCDF: 6.97,
      FIBTG: 2.7
    },
    category: 'Generic foods',
    categoryLabel: 'food'
  },
  {
    foodId: 'food_buqfaxubzh6hi5asev8a5aj9sr71',
    label: 'Cauliflower',
    nutrients: {
      ENERC_KCAL: 25,
      PROCNT: 1.92,
      FAT: 0.28,
      CHOCDF: 4.97,
      FIBTG: 2
    },
    category: 'Generic foods',
    categoryLabel: 'food'
  },
  {
    foodId: 'food_bofj0lnbbcv11zblx10sob7clgvp',
    label: 'Beets',
    nutrients: {
      ENERC_KCAL: 43,
      PROCNT: 1.61,
      FAT: 0.17,
      CHOCDF: 9.56,
      FIBTG: 2.8
    },
    category: 'Generic foods',
    categoryLabel: 'food'
  },
  {
    foodId: 'food_a6k79rrahp8fe2b26zussa3wtkqh',
    label: 'tomato',
    nutrients: {
      ENERC_KCAL: 18,
      PROCNT: 0.88,
      FAT: 0.2,
      CHOCDF: 3.89,
      FIBTG: 1.2
    },
    category: 'Generic foods',
    categoryLabel: 'food'
  },
  {
    foodId: 'food_bmrvi4ob4binw9a5m7l07amlfcoy',
    label: 'Onions',
    nutrients: {
      ENERC_KCAL: 40,
      PROCNT: 1.1,
      FAT: 0.1,
      CHOCDF: 9.34,
      FIBTG: 1.7
    },
    category: 'Generic foods',
    categoryLabel: 'food'
  },
  {
    foodId: 'food_ac9n68caswlpggbp7727varlyjk5',
    label: 'Eggplant',
    nutrients: {
      ENERC_KCAL: 25,
      PROCNT: 0.98,
      FAT: 0.18,
      CHOCDF: 5.88,
      FIBTG: 3
    },
    category: 'Generic foods',
    categoryLabel: 'food'
  },
  {
    foodId: 'food_bg68yf2b3dlfusawgs590bjloxfd',
    label: 'sweet potato',
    nutrients: {
      ENERC_KCAL: 86,
      PROCNT: 1.57,
      FAT: 0.05,
      CHOCDF: 20.12,
      FIBTG: 3
    },
    category: 'Generic foods',
    categoryLabel: 'food'
  }
  ],
  Meat: [
  {
    foodId: 'food_aisetlvawqaqp8a2uc28uaf46l5m',
    label: 'pork loin',
    nutrients: {
      ENERC_KCAL: 198,
      PROCNT: 19.74,
      FAT: 12.58
    },
    category: 'Generic foods',
    categoryLabel: 'food'
  },
  {
    foodId: 'food_bknby1la98smrsbwnthinbam42nj',
    label: 'beef chuck',
    nutrients: {
      ENERC_KCAL: 130,
      PROCNT: 21.64,
      FAT: 4.81,
      CHOCDF: 0.12
    },
    category: 'Generic foods',
    categoryLabel: 'food'
  },
  {
    foodId: 'food_bx8qx9map5nzuwbwhyi7fbtmcf3m',
    label: 'lamb',
    nutrients: {
      ENERC_KCAL: 648,
      PROCNT: 6.27,
      FAT: 68.87
    },
    category: 'Generic foods',
    categoryLabel: 'food'
  },
  {
    foodId: 'food_bmyxrshbfao9s1amjrvhoauob6mo',
    label: 'broiler chicken',
    nutrients: {
      ENERC_KCAL: 215,
      PROCNT: 18.6,
      FAT: 15.06
    },
    category: 'Generic foods',
    categoryLabel: 'food'
  },
   {
    foodId: 'food_a9m7tjlaizm6qwb80yipna6dvd20',
    label: 'turkey',
    nutrients: {
      ENERC_KCAL: 143,
      PROCNT: 21.64,
      FAT: 5.64,
      CHOCDF: 0.13
    },
    category: 'Generic foods',
    categoryLabel: 'food'
  },
  {
    foodId: 'food_acoijgfbzqxhtcbf6e983bhnm2pr',
    label: 'duck',
    nutrients: {
      ENERC_KCAL: 404,
      PROCNT: 11.49,
      FAT: 39.34
    },
    category: 'Generic foods',
    categoryLabel: 'food'
  },
  {
    foodId: 'food_aqu160rboo5ajpbrc5q8qa9xbcgv',
    label: 'goose',
    nutrients: {
      ENERC_KCAL: 371,
      PROCNT: 15.86,
      FAT: 33.62
    },
    category: 'Generic foods',
    categoryLabel: 'food'
  }
  ],
  Fruits: [
  {
    foodId: 'food_a1gb9ubb72c7snbuxr3weagwv0dd',
    label: 'apple',
    nutrients: {
      ENERC_KCAL: 52,
      PROCNT: 0.26,
      FAT: 0.17,
      CHOCDF: 13.81,
      FIBTG: 2.4
    },
    category: 'Generic foods',
    categoryLabel: 'food'
  },
  {
    foodId: 'food_b0bnl8oayiqhs2at63ifxbm6i3o3',
    label: 'orange',
    nutrients: {
      ENERC_KCAL: 47,
      PROCNT: 0.94,
      FAT: 0.12,
      CHOCDF: 11.75,
      FIBTG: 2.4
    },
    category: 'Generic foods',
    categoryLabel: 'food'
  },
   {
    foodId: 'food_b8pgy4cbnid3sfawqjg92a63pq85',
    label: 'Peaches, raw',
    nutrients: {
      ENERC_KCAL: 39,
      PROCNT: 0.91,
      FAT: 0.25,
      CHOCDF: 9.54,
      FIBTG: 1.5
    },
    category: 'Generic foods',
    categoryLabel: 'food'
  },
  {
    foodId: 'food_b0yuze4b1g3afpanijno5abtiu28',
    label: 'avocado',
    nutrients: {
      ENERC_KCAL: 160,
      PROCNT: 2,
      FAT: 14.66,
      CHOCDF: 8.53,
      FIBTG: 6.7
    },
    category: 'Generic foods',
    categoryLabel: 'food'
  },
  {
    foodId: 'food_bjsfxtcaidvmhaa3afrbna43q3hu',
    label: 'Bananas',
    nutrients: {
      ENERC_KCAL: 89,
      PROCNT: 1.09,
      FAT: 0.33,
      CHOCDF: 22.84,
      FIBTG: 2.6
    },
    category: 'Generic foods',
    categoryLabel: 'food'
  },
  {
    foodId: 'food_bv3hog1bd5qa4oafi7lb3bjz8i92',
    label: 'cherries',
    nutrients: {
      ENERC_KCAL: 63,
      PROCNT: 1.06,
      FAT: 0.2,
      CHOCDF: 16.01,
      FIBTG: 2.1
    },
    category: 'Generic foods',
    categoryLabel: 'food'
  },
  {
    foodId: 'food_an1dqoib8xj3tyb3pr7c0abi4rbw',
    label: 'Mangos',
    nutrients: {
      ENERC_KCAL: 60,
      PROCNT: 0.82,
      FAT: 0.38,
      CHOCDF: 14.98,
      FIBTG: 1.6
    },
    category: 'Generic foods',
    categoryLabel: 'food'
  },
  {
    foodId: 'food_bqj114aab4xnl6b6j3dt0bi4sznd',
    label: 'kiwifruit',
    nutrients: {
      ENERC_KCAL: 61,
      PROCNT: 1.14,
      FAT: 0.52,
      CHOCDF: 14.66,
      FIBTG: 3
    },
    category: 'Generic foods',
    categoryLabel: 'food'
  },
  {
    foodId: 'food_bncple4a2uagu1b4hov92budz2vs',
    label: 'green grape',
    nutrients: {
      ENERC_KCAL: 69,
      PROCNT: 0.72,
      FAT: 0.16,
      CHOCDF: 18.1,
      FIBTG: 0.9
    },
    category: 'Generic foods',
    categoryLabel: 'food'
  },
  {
    foodId: 'food_b4s2ibkbrrucmbabbaxhfau8ay42',
    label: 'Strawberries',
    nutrients: {
      ENERC_KCAL: 32,
      PROCNT: 0.67,
      FAT: 0.3,
      CHOCDF: 7.68,
      FIBTG: 2
    },
    category: 'Generic foods',
    categoryLabel: 'food'
  },
  {
    foodId: 'food_b5maw38amr54vpat8d5vhbgmqfxn',
    label: 'pineapple',
    nutrients: {
      ENERC_KCAL: 50,
      PROCNT: 0.54,
      FAT: 0.12,
      CHOCDF: 13.12,
      FIBTG: 1.4
    },
    category: 'Generic foods',
    categoryLabel: 'food'
  },
  {
    foodId: 'food_bq6stkiaxkwhxia9q4v7wanjnew0',
    label: 'Pears',
    nutrients: {
      ENERC_KCAL: 57,
      PROCNT: 0.36,
      FAT: 0.14,
      CHOCDF: 15.23,
      FIBTG: 3.1
    },
    category: 'Generic foods',
    categoryLabel: 'food'
  }
  ],
  Cereal: [
  {
    foodId: 'food_a3049hmbqj5wstaeeb3udaz6uaqv',
    label: 'wheat bread',
    nutrients: {
      ENERC_KCAL: 267,
      PROCNT: 10.72,
      FAT: 3.24,
      CHOCDF: 48.68,
      FIBTG: 4
    },
    category: 'Generic foods',
    categoryLabel: 'food'
  },
  {
    foodId: 'food_bpumdjzb5rtqaeabb0kbgbcgr4t9',
    label: 'rice',
    nutrients: {
      ENERC_KCAL: 360,
      PROCNT: 6.61,
      FAT: 0.58,
      CHOCDF: 79.34
    },
    category: 'Generic foods',
    categoryLabel: 'food'
  },
  {
    foodId: 'food_akjf74ibll2id8aqb8xbha4t4axl',
    label: 'Oats',
    nutrients: {
      ENERC_KCAL: 389,
      PROCNT: 16.89,
      FAT: 6.9,
      CHOCDF: 66.27,
      FIBTG: 10.6
    },
    category: 'Generic foods',
    categoryLabel: 'food'
  },
  {
    foodId: 'food_aefg3gqa71nrtpbhjfo3yb36kd81',
    label: 'egg noodle',
    nutrients: {
      ENERC_KCAL: 384,
      PROCNT: 14.16,
      FAT: 4.44,
      CHOCDF: 71.27,
      FIBTG: 3.3
    },
    category: 'Generic foods',
    categoryLabel: 'food'
  },
  {
    foodId: 'food_adc1nzdb5zh4wya5q99krac7k8q6',
    label: 'whole grain cereal',
    nutrients: {
      ENERC_KCAL: 337,
      PROCNT: 11,
      FAT: 1.5,
      CHOCDF: 81.4,
      FIBTG: 11.8
    },
    category: 'Generic foods',
    categoryLabel: 'food'
  },
  {
    foodId: 'food_btstgycbd4sqzma2c239qaeuy5at',
    label: 'popcorn',
    nutrients: {
      ENERC_KCAL: 500,
      PROCNT: 9,
      FAT: 28.1,
      CHOCDF: 58.1,
      FIBTG: 10
    },
    category: 'Generic foods',
    categoryLabel: 'food'
  }
  ],
  Seafood:[
  {
    foodId: 'food_b38bejhbq9loe2bbb7bnmbcpteft',
    label: 'shrimp',
    nutrients: {
      ENERC_KCAL: 71,
      PROCNT: 13.61,
      FAT: 1.01,
      CHOCDF: 0.91
    },
    category: 'Generic foods',
    categoryLabel: 'food'
  },
   {
    foodId: 'food_bhncugnadgibupafbeeapbislbom',
    label: 'salmon',
    nutrients: {
      ENERC_KCAL: 208,
      PROCNT: 20.42,
      FAT: 13.42
    },
    category: 'Generic foods',
    categoryLabel: 'food'
  },
  {
    foodId: 'food_bu5s7alaj4fjv8bf9qxvnba38oay',
    label: 'fresh tuna',
    nutrients: {
      ENERC_KCAL: 109,
      PROCNT: 24.4,
      FAT: 0.49
    },
    category: 'Generic foods',
    categoryLabel: 'food'
  },
  {
    foodId: 'food_ar6pjbvaxqtlqia7jewa4brld7p9',
    label: 'fish',
    nutrients: {
      ENERC_KCAL: 96,
      PROCNT: 20.08,
      FAT: 1.7
    },
    category: 'Generic foods',
    categoryLabel: 'food'
  },
  {
    foodId: 'food_b12syzgajx227eahiup7wb240d41',
    label: 'clam',
    nutrients: {
      ENERC_KCAL: 86,
      PROCNT: 14.67,
      FAT: 0.96,
      CHOCDF: 3.57
    },
    category: 'Generic foods',
    categoryLabel: 'food'
  },
  {
    foodId: 'food_bwtqhijay7i09vavtaoklapjisp0',
    label: 'oyster',
    nutrients: {
      ENERC_KCAL: 81,
      PROCNT: 9.45,
      FAT: 2.3,
      CHOCDF: 4.95
    },
    category: 'Generic foods',
    categoryLabel: 'food'
  },
  {
    foodId: 'food_bh1p624aayc0w5a0wkxw7apbit8c',
    label: 'blue crab',
    nutrients: {
      ENERC_KCAL: 87,
      PROCNT: 18.06,
      FAT: 1.08,
      CHOCDF: 0.04
    },
    category: 'Generic foods',
    categoryLabel: 'food'
  },
  ],
  Others: [
  ],
  },
  suggestedList: ['startfruit', 'peanut', 'litchi', 'longan'],
}

const mainRecipeReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
  	default: return state;
  }	
};

export default mainRecipeReducer;