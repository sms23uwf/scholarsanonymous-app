import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

    // database.ref('learningobjective_userselect').push({
    //   learningobjectiveid: `-LpSzG9bBC4OaVuTjJP8`,
    //   userid: `i2Gmb0N7izMnhDs1aWp8wvlMxE03`
    // }).then(() => {
    //   console.log('learningobjective_userselected_1 added');
    // }).catch((e) => {
    //   console.log(`learningobjective_userselected_1 failed`);
    // })  


    // database.ref('learningobjective').push({
    //   content: `Gain knowledge of the life of Irving Berlin.`,
    //   knowledgeareaid: '-Lh8Q4GjTg29SwSGDGtL',
    //   knowledgearea: 'Arts and Literature',
    //   courseid: '-LpOnyzhNwjL4HiVlONH',
    //   selected: false
    // }).then(() => {
    //   console.log('lo1 added.');
    // })
    // .catch((e) => {
    //   console.log('lo1 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Describe the history of the Harpsichord in the 18th century.`,
    //   knowledgeareaid: '-Lh8Q4GjTg29SwSGDGtL',
    //   knowledgearea: 'Arts and Literature',
    //   courseid: '--LpOnyzli9cdt0AKkPN4',
    //   selected: false
    // }).then(() => {
    //   console.log('lo2 added.');
    // })
    // .catch((e) => {
    //   console.log('lo2 failed.',e);
    // })
  
    // database.ref('learningobjective').push({
    //   content: `Discuss "Where the Crawdads Sing" by Delia Owens.`,
    //   knowledgeareaid: '-LpOnyzli9cdt0AKkPN4',
    //   knowledgearea: 'Arts and Literature',
    //   courseid: '-LpOnyzmv7qNx1rNHDk8',
    //   selected: false
    // }).then(() => {
    //   console.log('lo3 added.');
    // })
    // .catch((e) => {
    //   console.log('lo3 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Create a beautiful one-of-a-kind charcoal drawing masterpiece.`,
    //   knowledgeareaid: '-LpOnyzli9cdt0AKkPN4',
    //   knowledgearea: 'Arts and Literature',
    //   courseid: '-LpOnyznMKG0yoWSHjBJ',
    //   selected: false
    // }).then(() => {
    //   console.log('lo4 added.');
    // })
    // .catch((e) => {
    //   console.log('lo4 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Understand what are Christmas Traditions and why we have them.`,
    //   knowledgeareaid: '-LpOnyzli9cdt0AKkPN4',
    //   knowledgearea: 'Arts and Literature',
    //   courseid: '-LpOnyznMKG0yoWSHjBK',
    //   selected: false
    // }).then(() => {
    //   console.log('lo5 added.');
    // })
    // .catch((e) => {
    //   console.log('lo5 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Recall stories of favorite Christmas music.`,
    //   knowledgeareaid: '-LpOnyzli9cdt0AKkPN4',
    //   knowledgearea: 'Arts and Literature',
    //   courseid: '-LpOnyznMKG0yoWSHjBK',
    //   selected: false
    // }).then(() => {
    //   console.log('lo6 added.');
    // })
    // .catch((e) => {
    //   console.log('lo6 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Understand the difference between practicing and rehearsing.`,
    //   knowledgeareaid: '-LpOnyzli9cdt0AKkPN4',
    //   knowledgearea: 'Arts and Literature',
    //   courseid: '-LpOnyzoquVLOJZ3nuL_',
    //   selected: false
    // }).then(() => {
    //   console.log('lo7 added.');
    // })
    // .catch((e) => {
    //   console.log('lo7 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Gain insight regarding performance anxiety and exhilaration and the preparation of symphonic pieces.`,
    //   knowledgeareaid: '-LpOnyzli9cdt0AKkPN4',
    //   knowledgearea: 'Arts and Literature',
    //   courseid: '-LpOnyzoquVLOJZ3nuL_',
    //   selected: false
    // }).then(() => {
    //   console.log('lo8 added.');
    // })
    // .catch((e) => {
    //   console.log('lo8 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Read pieces from beloved story tellers Marjorie Kinnan Rawlings, Zora Neale Hurston and John D. McDonald.`,
    //   knowledgeareaid: '-LpOnyzli9cdt0AKkPN4',
    //   knowledgearea: 'Arts and Literature',
    //   courseid: '-LpOnyzoquVLOJZ3nuLa',
    //   selected: false
    // }).then(() => {
    //   console.log('lo9 added.');
    // })
    // .catch((e) => {
    //   console.log('lo9 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Have an opportunity to look at the Epic Literature from Homer to the Roman Empire.`,
    //   knowledgeareaid: '-LpOnyzli9cdt0AKkPN4',
    //   knowledgearea: 'Arts and Literature',
    //   courseid: '-LpOnyzpHiwamoUEdplC',
    //   selected: false
    // }).then(() => {
    //   console.log('lo10 added.');
    // })
    // .catch((e) => {
    //   console.log('lo10 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Discuss the book "Growing up in Pensacola" with the author.`,
    //   knowledgeareaid: '-LpOnyzli9cdt0AKkPN4',
    //   knowledgearea: 'Arts and Literature',
    //   courseid: '-LpOnyzpHiwamoUEdplD',
    //   selected: false
    // }).then(() => {
    //   console.log('lo11 added.');
    // })
    // .catch((e) => {
    //   console.log('lo11 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Learn to play a Renaissance flute called the recorder.`,
    //   knowledgeareaid: '-LpOnyzli9cdt0AKkPN4',
    //   knowledgearea: 'Arts and Literature',
    //   courseid: '-LpOnyzqIxY5M1_6_dlP',
    //   selected: false
    // }).then(() => {
    //   console.log('lo12 added.');
    // })
    // .catch((e) => {
    //   console.log('lo12 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Learn how to pick the right volunteer job for you and where to find positions.`,
    //   knowledgeareaid: '-LpOnyzli9cdt0AKkPN4',
    //   knowledgearea: 'Arts and Literature',
    //   courseid: '-LpOnyzrzVqApD7RKjvm',
    //   selected: false
    // }).then(() => {
    //   console.log('lo13 added.');
    // })
    // .catch((e) => {
    //   console.log('lo13 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Learn to explore your own writing, find negative habits and turn them into strengths.`,
    //   knowledgeareaid: '-LpOnyzli9cdt0AKkPN4',
    //   knowledgearea: 'Arts and Literature',
    //   courseid: '-LpOnyzrzVqApD7RKjvn',
    //   selected: false
    // }).then(() => {
    //   console.log('lo14 added.');
    // })
    // .catch((e) => {
    //   console.log('lo14 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Learn how opera seasons are planned, how auditions and casting work and how sets are built and designed.`,
    //   knowledgeareaid: '-LpOnyzli9cdt0AKkPN4',
    //   knowledgearea: 'Arts and Literature',
    //   courseid: '-LpOnyzsszYE3bLEyrno',
    //   selected: false
    // }).then(() => {
    //   console.log('lo15 added.');
    // })
    // .catch((e) => {
    //   console.log('lo15 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Describe how W.A. Mozart transformed opera into something completely different from his predecessors.`,
    //   knowledgeareaid: '-LpOnyzli9cdt0AKkPN4',
    //   knowledgearea: 'Arts and Literature',
    //   courseid: '-LpOnyzsszYE3bLEyrnp',
    //   selected: false
    // }).then(() => {
    //   console.log('lo16 added.');
    // })
    // .catch((e) => {
    //   console.log('lo16 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Follow up to beginner recorder series, discuss additional supplemental literature from the Renaissance period.`,
    //   knowledgeareaid: '-LpOnyzli9cdt0AKkPN4',
    //   knowledgearea: 'Arts and Literature',
    //   courseid: '-LpOnyztySkhW0HS-nL9',
    //   selected: false
    // }).then(() => {
    //   console.log('lo17 added.');
    // })
    // .catch((e) => {
    //   console.log('lo17 failed.',e);
    // })

 
    // database.ref('learningobjective').push({
    //   content: `Describe what makes up the cost of a funeral or a cremation.`,
    //   knowledgeareaid: '-Lh8Q4GntOw0elf36DU3',
    //   knowledgearea: 'Business, Finance, and Technology',
    //   courseid: '-LpOrzZjkHLOw8lg360b',
    //   selected: false
    // }).then(() => {
    //   console.log('lo18 added.');
    // })
    // .catch((e) => {
    //   console.log('lo18 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Learn about some actionable strategies for cash management/savings, asset allocation, diversification and portfolio rebalancing.`,
    //   knowledgeareaid: '-Lh8Q4GntOw0elf36DU3',
    //   knowledgearea: 'Business, Finance, and Technology',
    //   courseid: '-LpOrzZnEtjmUB26mSfj',
    //   selected: false
    // }).then(() => {
    //   console.log('lo19 added.');
    // })
    // .catch((e) => {
    //   console.log('lo19 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Participate in an overview of tax-advantaged investments and strategies.`,
    //   knowledgeareaid: '-Lh8Q4GntOw0elf36DU3',
    //   knowledgearea: 'Business, Finance, and Technology',
    //   courseid: '-LpOrzZo-xoVo1USemrj',
    //   selected: false
    // }).then(() => {
    //   console.log('lo20 added.');
    // })
    // .catch((e) => {
    //   console.log('lo20 failed.',e);
    // })

    //  database.ref('learningobjective').push({
    //    content: `Learn about pairing wines with cheese.`,
    //    knowledgeareaid: '-Lh8Q4GntOw0elf36DU4',
    //    knowledgearea: 'Culinary and Food',
    //    courseid: '-LpPQDi1fE0O11n_i7wT',
    //    selected: false
    //  }).then(() => {
    //    console.log('lo21 added.');
    //  })
    //  .catch((e) => {
    //    console.log('lo21 failed.',e);
    //  })

    //  database.ref('learningobjective').push({
    //   content: `Learn about British food.`,
    //   knowledgeareaid: '-Lh8Q4GntOw0elf36DU4',
    //   knowledgearea: 'Culinary and Food',
    //   courseid: '-LpPQDi5LBkXd1aezqlt',
    //   selected: false
    // }).then(() => {
    //   console.log('lo22 added.');
    // })
    // .catch((e) => {
    //   console.log('lo22 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Learn how to work with proteins, and make an egg batter breading for any occasion.`,
    //   knowledgeareaid: '-Lh8Q4GntOw0elf36DU4',
    //   knowledgearea: 'Culinary and Food',
    //   courseid: '-LpPQDi68uGbdM1MSyV2',
    //   selected: false
    // }).then(() => {
    //   console.log('lo23 added.');
    // })
    // .catch((e) => {
    //   console.log('lo23 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Learn how to make a soup base that could make any type of soup.`,
    //   knowledgeareaid: '-Lh8Q4GntOw0elf36DU4',
    //   knowledgearea: 'Culinary and Food',
    //   courseid: '-LpPQDi71hgV8881bXPH',
    //   selected: false
    // }).then(() => {
    //   console.log('lo24 added.');
    // })
    // .catch((e) => {
    //   console.log('lo24 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Observe demonstrations on baklava and cheesecake making.`,
    //   knowledgeareaid: '-Lh8Q4GntOw0elf36DU4',
    //   knowledgearea: 'Culinary and Food',
    //   courseid: '-LpPQDi8b-uklvVFBep5',
    //   selected: false
    // }).then(() => {
    //   console.log('lo25 added.');
    // })
    // .catch((e) => {
    //   console.log('lo25 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Observe an overview of Don Giovanni and meet the principal artists.`,
    //   knowledgeareaid: '-Lh8Q4GntOw0elf36DU4',
    //   knowledgearea: 'Culinary and Food',
    //   courseid: '-LpPQDi8b-uklvVFBep6',
    //   selected: false
    // }).then(() => {
    //   console.log('lo26 added.');
    // })
    // .catch((e) => {
    //   console.log('lo26 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Observe an overview of Il Trovatore and meet the principal artists.`,
    //   knowledgeareaid: '-Lh8Q4GntOw0elf36DU4',
    //   knowledgearea: 'Culinary and Food',
    //   courseid: '-LpPQDi9cjEzefGTWNJN',
    //   selected: false
    // }).then(() => {
    //   console.log('lo27 added.');
    // })
    // .catch((e) => {
    //   console.log('lo27 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Learn about all the fun things that go on in McGuire’s Irish Pub & Brewery.`,
    //   knowledgeareaid: '-Lh8Q4GntOw0elf36DU4',
    //   knowledgearea: 'Culinary and Food',
    //   courseid: '-LpPQDiAA5adzqW3V2kv',
    //   selected: false
    // }).then(() => {
    //   console.log('lo28 added.');
    // })
    // .catch((e) => {
    //   console.log('lo28 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Learn how beer is made in huge copper vats.`,
    //   knowledgeareaid: '-Lh8Q4GntOw0elf36DU4',
    //   knowledgearea: 'Culinary and Food',
    //   courseid: '-LpPQDiAA5adzqW3V2kv',
    //   selected: false
    // }).then(() => {
    //   console.log('lo29 added.');
    // })
    // .catch((e) => {
    //   console.log('lo29 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Critique International Cuisine prepared by Hospitality Management students.`,
    //   knowledgeareaid: '-Lh8Q4GntOw0elf36DU4',
    //   knowledgearea: 'Culinary and Food',
    //   courseid: '-LpPQDiAA5adzqW3V2kw',
    //   selected: false
    // }).then(() => {
    //   console.log('lo30 added.');
    // })
    // .catch((e) => {
    //   console.log('lo30 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Understand a journey to bring to life a nostalgic restaurant.`,
    //   knowledgeareaid: '-Lh8Q4GntOw0elf36DU4',
    //   knowledgearea: 'Culinary and Food',
    //   courseid: '-LpPQDiDm5WSJXwZ6J0O',
    //   selected: false
    // }).then(() => {
    //   console.log('lo31 added.');
    // })
    // .catch((e) => {
    //   console.log('lo31 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Experience a walking tour of 65 acres of Christmas Lights.`,
    //   knowledgeareaid: '-Lh8Q4Go1urJ9WUPVDyQ',
    //   knowledgearea: 'Culture, Travel, and Tours',
    //   courseid: '-LpQ6QKEGMLVd86Mq7mC',
    //   selected: false
    // }).then(() => {
    //   console.log('lo32 added.');
    // })
    // .catch((e) => {
    //   console.log('lo32 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Learn about the development of the EO Wilson Biophilia Center and what inspired its inception.`,
    //   knowledgeareaid: '-Lh8Q4Go1urJ9WUPVDyQ',
    //   knowledgearea: 'Culture, Travel, and Tours',
    //   courseid: '-LpQ6QKIltjyIHI-UQk-',
    //   selected: false
    // }).then(() => {
    //   console.log('lo33 added.');
    // })
    // .catch((e) => {
    //   console.log('lo33 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Recall details of the disciplines of DNA, fingerprints, drug analysis and crime scene.`,
    //   knowledgeareaid: '-Lh8Q4Go1urJ9WUPVDyQ',
    //   knowledgearea: 'Culture, Travel, and Tours',
    //   courseid: '-LpQ6QKJ92TtJwb-iR5M',
    //   selected: false
    // }).then(() => {
    //   console.log('lo34 added.');
    // })
    // .catch((e) => {
    //   console.log('lo34 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Learn all about the alpacas; their homeland, behavior, anatomy, nutritional needs and their fleece.`,
    //   knowledgeareaid: '-Lh8Q4Go1urJ9WUPVDyQ',
    //   knowledgearea: 'Culture, Travel, and Tours',
    //   courseid: '-LpQ6QKJ92TtJwb-iR5N',
    //   selected: false
    // }).then(() => {
    //   console.log('lo35 added.');
    // })
    // .catch((e) => {
    //   console.log('lo35 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Learn about mixed culture fermentation.`,
    //   knowledgeareaid: '-Lh8Q4Go1urJ9WUPVDyQ',
    //   knowledgearea: 'Culture, Travel, and Tours',
    //   courseid: '-LpQ6QKKGLQo5qHzBvWK',
    //   selected: false
    // }).then(() => {
    //   console.log('lo36 added.');
    // })
    // .catch((e) => {
    //   console.log('lo36 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Hear a historical talk and tour of the Old Sacred Heart Hospital.`,
    //   knowledgeareaid: '-Lh8Q4Go1urJ9WUPVDyQ',
    //   knowledgearea: 'Culture, Travel, and Tours',
    //   courseid: '-LpQ6QKL_yFTRYfIUICf',
    //   selected: false
    // }).then(() => {
    //   console.log('lo37 added.');
    // })
    // .catch((e) => {
    //   console.log('lo37 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Tour the Pensacola Christian College and Planetarium.`,
    //   knowledgeareaid: '-Lh8Q4Go1urJ9WUPVDyQ',
    //   knowledgearea: 'Culture, Travel, and Tours',
    //   courseid: '-LpQ6QKL_yFTRYfIUICg',
    //   selected: false
    // }).then(() => {
    //   console.log('lo38 added.');
    // })
    // .catch((e) => {
    //   console.log('lo38 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Recall the history of Mardi Gras in Pensacola and surrounding communities.`,
    //   knowledgeareaid: '-Lh8Q4Go1urJ9WUPVDyQ',
    //   knowledgearea: 'Culture, Travel, and Tours',
    //   courseid: '-LpQ6QKMqlLVVjZT_7DP',
    //   selected: false
    // }).then(() => {
    //   console.log('lo39 added.');
    // })
    // .catch((e) => {
    //   console.log('lo39 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Learn what a modern day krewe is like and all the preparations required for parade participation.`,
    //   knowledgeareaid: '-Lh8Q4Go1urJ9WUPVDyQ',
    //   knowledgearea: 'Culture, Travel, and Tours',
    //   courseid: '-LpQ6QKMqlLVVjZT_7DP',
    //   selected: false
    // }).then(() => {
    //   console.log('lo40 added.');
    // })
    // .catch((e) => {
    //   console.log('lo40 failed.',e);
    // })


    // start here with lo41

    // database.ref('learningobjective').push({
    //   content: `Learn about the history of the vineyard as well as the health advantages of Muscadine grapes.`,
    //   knowledgeareaid: '-Lh8Q4Go1urJ9WUPVDyQ',
    //   knowledgearea: 'Culture, Travel, and Tours',
    //   courseid: '-LpQ6QKNubaVt56Ee-L_',
    //   selected: false
    // }).then(() => {
    //   console.log('lo41 added.');
    // })
    // .catch((e) => {
    //   console.log('lo41 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Learn how major commodities pass through the port of Pensacola.`,
    //   knowledgeareaid: '-Lh8Q4Go1urJ9WUPVDyQ',
    //   knowledgearea: 'Culture, Travel, and Tours',
    //   courseid: '-LpQ6QKNubaVt56Ee-La',
    //   selected: false
    // }).then(() => {
    //   console.log('lo42 added.');
    // })
    // .catch((e) => {
    //   console.log('lo42 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Recall the history of the port of Pensacola from the mid-1700s.`,
    //   knowledgeareaid: '-Lh8Q4Go1urJ9WUPVDyQ',
    //   knowledgearea: 'Culture, Travel, and Tours',
    //   courseid: '-LpQ6QKNubaVt56Ee-La',
    //   selected: false
    // }).then(() => {
    //   console.log('lo43 added.');
    // })
    // .catch((e) => {
    //   console.log('lo43 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Understand the extensive restoration and maintenance required to bring deteriorated aircraft back to life.`,
    //   knowledgeareaid: '-Lh8Q4Go1urJ9WUPVDyQ',
    //   knowledgearea: 'Culture, Travel, and Tours',
    //   courseid: '-LpQ6QKOatKMZMH6A6Qu',
    //   selected: false
    // }).then(() => {
    //   console.log('lo44 added.');
    // })
    // .catch((e) => {
    //   console.log('lo44 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Visit the oldest surviving home in Pensacola still on its original site.`,
    //   knowledgeareaid: '-Lh8Q4Go1urJ9WUPVDyQ',
    //   knowledgearea: 'Culture, Travel, and Tours',
    //   courseid: '-LpQ6QKOatKMZMH6A6Qv',
    //   selected: false
    // }).then(() => {
    //   console.log('lo45 added.');
    // })
    // .catch((e) => {
    //   console.log('lo45 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Tour a licensed distillery and discuss what craft distilled spirits are all about.`,
    //   knowledgeareaid: '-Lh8Q4Go1urJ9WUPVDyQ',
    //   knowledgearea: 'Culture, Travel, and Tours',
    //   courseid: '-LpQ6QKPVcsZokTslNkU',
    //   selected: false
    // }).then(() => {
    //   console.log('lo46 added.');
    // })
    // .catch((e) => {
    //   console.log('lo46 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Tour Channel 3 WEAR-TV and visit the Control Room and the Production Room.`,
    //   knowledgeareaid: '-Lh8Q4Go1urJ9WUPVDyQ',
    //   knowledgearea: 'Culture, Travel, and Tours',
    //   courseid: '-LpQ6QKQE8rrdCGtAlVB',
    //   selected: false
    // }).then(() => {
    //   console.log('lo47 added.');
    // })
    // .catch((e) => {
    //   console.log('lo47 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Learn about America’s oldest neighborhood, where Don Tristan de Luna and 1500 colonists disembarked along the high bluffs in East Pensacola Heights in 1559 to claim West Florida for Spain.`,
    //   knowledgeareaid: '-Lh8Q4Go1urJ9WUPVDyQ',
    //   knowledgearea: 'Culture, Travel, and Tours',
    //   courseid: '-LpQ6QKPVcsZokTslNkV',
    //   selected: false
    // }).then(() => {
    //   console.log('lo48 added.');
    // })
    // .catch((e) => {
    //   console.log('lo48 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Learn about the ecology of the Weeks Bay estuary while scouting for birds and other wildlife on the water.`,
    //   knowledgeareaid: '-Lh8Q4Go1urJ9WUPVDyQ',
    //   knowledgearea: 'Culture, Travel, and Tours',
    //   courseid: '-LpQ6QKQE8rrdCGtAlVC',
    //   selected: false
    // }).then(() => {
    //   console.log('lo49 added.');
    // })
    // .catch((e) => {
    //   console.log('lo49 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Learn about the rivers that feed the Weeks Bay area system.`,
    //   knowledgeareaid: '-Lh8Q4Go1urJ9WUPVDyQ',
    //   knowledgearea: 'Culture, Travel, and Tours',
    //   courseid: '-LpQ6QKQE8rrdCGtAlVC',
    //   selected: false
    // }).then(() => {
    //   console.log('lo50 added.');
    // })
    // .catch((e) => {
    //   console.log('lo50 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Tour a brewery and learn about beer brewing.`,
    //   knowledgeareaid: '-Lh8Q4Go1urJ9WUPVDyQ',
    //   knowledgearea: 'Culture, Travel, and Tours',
    //   courseid: '-LpQ6QKRmsl1Lwmqkyev',
    //   selected: false
    // }).then(() => {
    //   console.log('lo51 added.');
    // })
    // .catch((e) => {
    //   console.log('lo51 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Learn about their history, care, propagation, unique characteristics, various forms, colors and sizes from two of the biggest camellia connoisseurs in the Pensacola Camellia Club.`,
    //   knowledgeareaid: '-Lh8Q4Go1urJ9WUPVDyQ',
    //   knowledgearea: 'Culture, Travel, and Tours',
    //   courseid: '-LpQ7UwjJmei_QC2gKxv',
    //   selected: false
    // }).then(() => {
    //   console.log('lo52 added.');
    // })
    // .catch((e) => {
    //   console.log('lo52 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Learn about their history, care, propagation, unique characteristics, various forms, colors and sizes from two of the biggest camellia connoisseurs in the Pensacola Camellia Club.`,
    //   knowledgeareaid: '-Lh8Q4Go1urJ9WUPVDyR',
    //   knowledgearea: 'Gardening and Environment',
    //   courseid: '-LpQ7UwjJmei_QC2gKxv',
    //   selected: false
    // }).then(() => {
    //   console.log('lo53 added.');
    // })
    // .catch((e) => {
    //   console.log('lo53 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Hear the experiences of a young girl working for U.S. Army Special Forces in Korea and Vietnam.`,
    //   knowledgeareaid: '-Lh8Q4Go1urJ9WUPVDyS',
    //   knowledgearea: 'History and Current Affairs',
    //   courseid: '-LpQM5DuSLDGWg2_Qqww',
    //   selected: false
    // }).then(() => {
    //   console.log('lo54 added.');
    // })
    // .catch((e) => {
    //   console.log('lo54 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Discuss the Union’s first attempt to capture the Confederate capital in Richmond, Va., during the spring and summer of 1862.`,
    //   knowledgeareaid: '-Lh8Q4Go1urJ9WUPVDyS',
    //   knowledgearea: 'History and Current Affairs',
    //   courseid: '-LpQM5Dz3uZchfBKvHoK',
    //   selected: false
    // }).then(() => {
    //   console.log('lo55 added.');
    // })
    // .catch((e) => {
    //   console.log('lo55 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Hear Jackson’s story of his rise to power via La Florida in general and Pensacola in particular.`,
    //   knowledgeareaid: '-Lh8Q4Go1urJ9WUPVDyS',
    //   knowledgearea: 'History and Current Affairs',
    //   courseid: '-LpQM5E-ZBQHeS27lQlM',
    //   selected: false
    // }).then(() => {
    //   console.log('lo56 added.');
    // })
    // .catch((e) => {
    //   console.log('lo56 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Attend a lecture by a cartoonist and columnist with the Pensacola News Journal.`,
    //   knowledgeareaid: '-Lh8Q4Go1urJ9WUPVDyS',
    //   knowledgearea: 'History and Current Affairs',
    //   courseid: '-LpQM5E0XMODuwsZKub3',
    //   selected: false
    // }).then(() => {
    //   console.log('lo57 added.');
    // })
    // .catch((e) => {
    //   console.log('lo57 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Tour Pensacola’s City Hall and meet with the Mayor of Pensacola, Grover Robinson.`,
    //   knowledgeareaid: '-Lh8Q4Go1urJ9WUPVDyS',
    //   knowledgearea: 'History and Current Affairs',
    //   courseid: '-LpQM5E1rFJa2jfZKS8b',
    //   selected: false
    // }).then(() => {
    //   console.log('lo58 added.');
    // })
    // .catch((e) => {
    //   console.log('lo58 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Hear about decision making in news coverage and the changes in the industry.`,
    //   knowledgeareaid: '-Lh8Q4Go1urJ9WUPVDyS',
    //   knowledgearea: 'History and Current Affairs',
    //   courseid: '-LpQM5E1rFJa2jfZKS8c',
    //   selected: false
    // }).then(() => {
    //   console.log('lo59 added.');
    // })
    // .catch((e) => {
    //   console.log('lo59 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Identify the normative ideas and metaphysics of rightness through the lenses of W.D. Ross’s ethical intuitionism and M.K. Gandhi’s Satyagraha.`,
    //   knowledgeareaid: '-Lh8Q4Go1urJ9WUPVDyS',
    //   knowledgearea: 'History and Current Affairs',
    //   courseid: '-LpQM5E27YDrJou6BleR',
    //   selected: false
    // }).then(() => {
    //   console.log('lo60 added.');
    // })
    // .catch((e) => {
    //   console.log('lo60 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Learn how to park, pay and play in Downtown Pensacola.`,
    //   knowledgeareaid: '-Lh8Q4Go1urJ9WUPVDyS',
    //   knowledgearea: 'History and Current Affairs',
    //   courseid: '-LpQM5E3XceVJYQIJthd',
    //   selected: false
    // }).then(() => {
    //   console.log('lo61 added.');
    // })
    // .catch((e) => {
    //   console.log('lo61 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Discover the true meaning of “rhetorical oratory,” note
    //   the peril it faces today as practiced by some prominent national figures, consider the elements of genuinely great public speech, and review what makes President Franklin Roosevelt’s 1941 request for A “Declaration of War” a stellar work of public discourse.`,
    //   knowledgeareaid: '-Lh8Q4Go1urJ9WUPVDyS',
    //   knowledgearea: 'History and Current Affairs',
    //   courseid: '-LpQM5E3XceVJYQIJthe',
    //   selected: false
    // }).then(() => {
    //   console.log('lo62 added.');
    // })
    // .catch((e) => {
    //   console.log('lo62 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Hear about crossing the Atlantic in a single engine plane.`,
    //   knowledgeareaid: '-Lh8Q4Go1urJ9WUPVDyS',
    //   knowledgearea: 'History and Current Affairs',
    //   courseid: '-LpQM5E4p0bOece-hIOq',
    //   selected: false
    // }).then(() => {
    //   console.log('lo63 added.');
    // })
    // .catch((e) => {
    //   console.log('lo63 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Discuss the Max 8 crashes of Indonesia’s Lion Air Flight 610 and Ethiopian Airlines Flight 302 and the subsequent efforts to determine what went wrong.`,
    //   knowledgeareaid: '-Lh8Q4Go1urJ9WUPVDyS',
    //   knowledgearea: 'History and Current Affairs',
    //   courseid: '-LpQM5E5xv3u3lSwCQTz',
    //   selected: false
    // }).then(() => {
    //   console.log('lo64 added.');
    // })
    // .catch((e) => {
    //   console.log('lo64 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Discuss an essay or other item from the current media.`,
    //   knowledgeareaid: '-Lh8Q4Go1urJ9WUPVDyS',
    //   knowledgearea: 'History and Current Affairs',
    //   courseid: '-LpQM5E5xv3u3lSwCQU-',
    //   selected: false
    // }).then(() => {
    //   console.log('lo65 added.');
    // })
    // .catch((e) => {
    //   console.log('lo65 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `View and discuss artist’s renderings of the completed bridge along with digital animations depicting a “virtual drive” across the new structure.`,
    //   knowledgeareaid: '-Lh8Q4Go1urJ9WUPVDyS',
    //   knowledgearea: 'History and Current Affairs',
    //   courseid: '-LpQM5E67AnpXpfHoo76',
    //   selected: false
    // }).then(() => {
    //   console.log('lo66 added.');
    // })
    // .catch((e) => {
    //   console.log('lo66 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Discuss why has violence increased? Is it poverty or lack of education?`,
    //   knowledgeareaid: '-Lh8Q4Go1urJ9WUPVDyS',
    //   knowledgearea: 'History and Current Affairs',
    //   courseid: '-LpQM5E67AnpXpfHoo77',
    //   selected: false
    // }).then(() => {
    //   console.log('lo67 added.');
    // })
    // .catch((e) => {
    //   console.log('lo67 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `explore the changes in society, education, literature, philosophy, music and the arts from the early 1400s through the late 1500s.`,
    //   knowledgeareaid: '-Lh8Q4Go1urJ9WUPVDyS',
    //   knowledgearea: 'History and Current Affairs',
    //   courseid: '-LpQM5E7pXCu6yzmMrmA',
    //   selected: false
    // }).then(() => {
    //   console.log('lo68 added.');
    // })
    // .catch((e) => {
    //   console.log('lo68 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `View some of the earliest paintings of Florida life created in Florida during the Territorial Period (1821-1845).`,
    //   knowledgeareaid: '-Lh8Q4Go1urJ9WUPVDyS',
    //   knowledgearea: 'History and Current Affairs',
    //   courseid: '-LpQM5E9tm52CJFkF6VW',
    //   selected: false
    // }).then(() => {
    //   console.log('lo69 added.');
    // })
    // .catch((e) => {
    //   console.log('lo69 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `View drawings of George Washington Sully, a Pensacola cotton-broker and nephew of American painter Thomas Sully.`,
    //   knowledgeareaid: '-Lh8Q4Go1urJ9WUPVDyS',
    //   knowledgearea: 'History and Current Affairs',
    //   courseid: '-LpQM5E9tm52CJFkF6VW',
    //   selected: false
    // }).then(() => {
    //   console.log('lo70 added.');
    // })
    // .catch((e) => {
    //   console.log('lo70 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `View 15th century art.`,
    //   knowledgeareaid: '-Lh8Q4Go1urJ9WUPVDyS',
    //   knowledgearea: 'History and Current Affairs',
    //   courseid: '-LpQM5E9tm52CJFkF6VW',
    //   selected: false
    // }).then(() => {
    //   console.log('lo71 added.');
    // })
    // .catch((e) => {
    //   console.log('lo71 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Learn about artists who visited Pensacola.`,
    //   knowledgeareaid: '-Lh8Q4Go1urJ9WUPVDyS',
    //   knowledgearea: 'History and Current Affairs',
    //   courseid: '-LpQM5E9tm52CJFkF6VW',
    //   selected: false
    // }).then(() => {
    //   console.log('lo72 added.');
    // })
    // .catch((e) => {
    //   console.log('lo72 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `View library archives associated with the White House and U.S. Presidents.`,
    //   knowledgeareaid: '-Lh8Q4Go1urJ9WUPVDyS',
    //   knowledgearea: 'History and Current Affairs',
    //   courseid: '-LpQM5E9tm52CJFkF6VX',
    //   selected: false
    // }).then(() => {
    //   console.log('lo73 added.');
    // })
    // .catch((e) => {
    //   console.log('lo73 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Tour the new VT MAE Maintenance Repair Overhaul Hangar.`,
    //   knowledgeareaid: '-Lh8Q4Go1urJ9WUPVDyS',
    //   knowledgearea: 'History and Current Affairs',
    //   courseid: '-LpQM5EAEvN1-gUenlCa',
    //   selected: false
    // }).then(() => {
    //   console.log('lo74 added.');
    // })
    // .catch((e) => {
    //   console.log('lo74 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Discuss changing the tenor of race relations in America.`,
    //   knowledgeareaid: '-Lh8Q4Go1urJ9WUPVDyS',
    //   knowledgearea: 'History and Current Affairs',
    //   courseid: '-LpQM5EAEvN1-gUenlCb',
    //   selected: false
    // }).then(() => {
    //   console.log('lo75 added.');
    // })
    // .catch((e) => {
    //   console.log('lo75 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Learn how to play an ancient game that resembles bowling but is played outdoors.`,
    //   knowledgeareaid: '-Lh8Q4Go1urJ9WUPVDyT',
    //   knowledgearea: 'Science and Health',
    //   courseid: '-LpQSyExu0GCUoD60F49',
    //   selected: false
    // }).then(() => {
    //   console.log('lo76 added.');
    // })
    // .catch((e) => {
    //   console.log('lo76 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Learn about actions underway to enhance the disaster resilience of the community, including efforts by former Administrators of FEMA to educate the community on preparation, response and recovery tactics.`,
    //   knowledgeareaid: '-Lh8Q4Go1urJ9WUPVDyT',
    //   knowledgearea: 'Science and Health',
    //   courseid: '-LpQSyF-kG_0A7k-1_kH',
    //   selected: false
    // }).then(() => {
    //   console.log('lo77 added.');
    // })
    // .catch((e) => {
    //   console.log('lo77 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Increase awareness of our temperment and that of others.`,
    //   knowledgeareaid: '-Lh8Q4Go1urJ9WUPVDyT',
    //   knowledgearea: 'Science and Health',
    //   courseid: '-LpQSyF0Jai9g-7lqJFU',
    //   selected: false
    // }).then(() => {
    //   console.log('lo78 added.');
    // })
    // .catch((e) => {
    //   console.log('lo78 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Learn about the use of drones with specific applications in archaeology such as remote sensing and preservation.`,
    //   knowledgeareaid: '-Lh8Q4Go1urJ9WUPVDyT',
    //   knowledgearea: 'Science and Health',
    //   courseid: '-LpQSyF1LRjHYmf6yZY-',
    //   selected: false
    // }).then(() => {
    //   console.log('lo79 added.');
    // })
    // .catch((e) => {
    //   console.log('lo79 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Learn about the new Lakeview Center Mobile Response program that is increasing access  to mental health and substance abuse treatment in the community.`,
    //   knowledgeareaid: '-Lh8Q4Go1urJ9WUPVDyT',
    //   knowledgearea: 'Science and Health',
    //   courseid: '-LpQSyF28ToY7PGH0RYh',
    //   selected: false
    // }).then(() => {
    //   console.log('lo80 added.');
    // })
    // .catch((e) => {
    //   console.log('lo80 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Discuss possible causes of Tinnitus and treatment plans to help you or your loved find a solution that works.`,
    //   knowledgeareaid: '-Lh8Q4Go1urJ9WUPVDyT',
    //   knowledgearea: 'Science and Health',
    //   courseid: '-LpQSyF28ToY7PGH0RYi',
    //   selected: false
    // }).then(() => {
    //   console.log('lo81 added.');
    // })
    // .catch((e) => {
    //   console.log('lo81 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Learn how Medicare works for you.`,
    //   knowledgeareaid: '-Lh8Q4Go1urJ9WUPVDyT',
    //   knowledgearea: 'Science and Health',
    //   courseid: '-LpQSyF3rYaaYId3vQjL',
    //   selected: false
    // }).then(() => {
    //   console.log('lo82 added.');
    // })
    // .catch((e) => {
    //   console.log('lo82 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Learn about a technique for stress management and emotional control.`,
    //   knowledgeareaid: '-Lh8Q4Go1urJ9WUPVDyT',
    //   knowledgearea: 'Science and Health',
    //   courseid: '-LpQSyF5NFMZXtMsjluI',
    //   selected: false
    // }).then(() => {
    //   console.log('lo83 added.');
    // })
    // .catch((e) => {
    //   console.log('lo83 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Discuss how modern life can impair your daily biological rhythm and spoil your sleep and your health.`,
    //   knowledgeareaid: '-Lh8Q4Go1urJ9WUPVDyT',
    //   knowledgearea: 'Science and Health',
    //   courseid: '-LpQSyF6JTJ5oOAoLW2P',
    //   selected: false
    // }).then(() => {
    //   console.log('lo84 added.');
    // })
    // .catch((e) => {
    //   console.log('lo84 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Learn about ways you can keep or build your strength while sustaining mobility and balance.`,
    //   knowledgeareaid: '-Lh8Q4Go1urJ9WUPVDyT',
    //   knowledgearea: 'Science and Health',
    //   courseid: '-LpQSyF6JTJ5oOAoLW2Q',
    //   selected: false
    // }).then(() => {
    //   console.log('lo85 added.');
    // })
    // .catch((e) => {
    //   console.log('lo85 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Discuss the latest information on the aging process, including brain physiology, telomeres and how lifestyle influences our aging process.`,
    //   knowledgeareaid: '-Lh8Q4Go1urJ9WUPVDyT',
    //   knowledgearea: 'Science and Health',
    //   courseid: '-LpQSyF7Vj_PGijS3uyX',
    //   selected: false
    // }).then(() => {
    //   console.log('lo86 added.');
    // })
    // .catch((e) => {
    //   console.log('lo86 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Gain insight into financial and legal issues that seniors and their adult children must know.`,
    //   knowledgeareaid: '-Lh8Q4Go1urJ9WUPVDyT',
    //   knowledgearea: 'Science and Health',
    //   courseid: '-LpQSyF7Vj_PGijS3uyY',
    //   selected: false
    // }).then(() => {
    //   console.log('lo87 added.');
    // })
    // .catch((e) => {
    //   console.log('lo87 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Present an oral argument that is logical, compelling, and clear to the target audience.`,
    //   knowledgearea: 'Business, Finance, and Technology',
    //   course: '',
    //   selected: false,
    //   pillar1: 10,
    //   pillar2: 70,
    //   pillar3: 10,
    //   pillar4: 10
    // }).then(() => {
    //   console.log('lo2 added.');
    // })
    // .catch((e) => {
    //   console.log('lo2 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Recognize the ethical dilemmas in a business situation and recommend courses of actions to address the issues.`,
    //   knowledgearea: 'Business, Finance, and Technology',
    //   course: '',
    //   selected: false,
    //   pillar1: 10,
    //   pillar2: 20,
    //   pillar3: 10,
    //   pillar4: 60
    // }).then(() => {
    //   console.log('lo3 added.');
    // })
    // .catch((e) => {
    //   console.log('lo3 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Identify legal issues in a business situation and evaluate the interrelationship between regulatory requirements and strategic decision making.`,
    //   knowledgearea: 'Business, Finance, and Technology',
    //   course: '',
    //   selected: false,
    //   pillar1: 10,
    //   pillar2: 40,
    //   pillar3: 40,
    //   pillar4: 10
    // }).then(() => {
    //   console.log('lo4 added.');
    // })
    // .catch((e) => {
    //   console.log('lo4 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Recognize the environmental and social impacts of business decisions and recommend appropriate sustainable practices.`,
    //   knowledgearea: 'Business, Finance, and Technology',
    //   course: '',
    //   selected: false,
    //   pillar1: 10,
    //   pillar2: 30,
    //   pillar3: 10,
    //   pillar4: 50
    // }).then(() => {
    //   console.log('lo5 added.');
    // })
    // .catch((e) => {
    //   console.log('lo5 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Recognize how demographic and personality differences affect the business environment.`,
    //   knowledgearea: 'Business, Finance, and Technology',
    //   course: '',
    //   selected: false,
    //   pillar1: 10,
    //   pillar2: 10,
    //   pillar3: 20,
    //   pillar4: 60
    // }).then(() => {
    //   console.log('lo6 added.');
    // })
    // .catch((e) => {
    //   console.log('lo6 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Evaluate nutrition principles, food plans, preparation techniques and specialized dietary plans.`,
    //   knowledgearea: 'Culinary and Food',
    //   course: '',
    //   selected: false,
    //   pillar1: 20,
    //   pillar2: 60,
    //   pillar3: 10,
    //   pillar4: 10
    // }).then(() => {
    //   console.log('lo7 added.');
    // })
    // .catch((e) => {
    //   console.log('lo7 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Analyze nutrient requirements across the life span addressing the diversity of people, culture, and religions.`,
    //   knowledgearea: 'Culinary and Food',
    //   course: '',
    //   selected: false,
    //   pillar1: 20,
    //   pillar2: 20,
    //   pillar3: 10,
    //   pillar4: 50
    // }).then(() => {
    //   console.log('lo7 added.');
    // })
    // .catch((e) => {
    //   console.log('lo7 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Apply principles of food production to maximize nutrient retention in prepared food.`,
    //   knowledgearea: 'Culinary and Food',
    //   course: '',
    //   selected: false,
    //   pillar1: 20,
    //   pillar2: 60,
    //   pillar3: 10,
    //   pillar4: 10
    // }).then(() => {
    //   console.log('lo7 added.');
    // })
    // .catch((e) => {
    //   console.log('lo7 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Assess the influence of socioeconomic and psythological factors on food and nutrition and behavior.`,
    //   knowledgearea: 'Culinary and Food',
    //   course: '',
    //   selected: false,
    //   pillar1: 20,
    //   pillar2: 30,
    //   pillar3: 10,
    //   pillar4: 40
    // }).then(() => {
    //   console.log('lo7 added.');
    // })
    // .catch((e) => {
    //   console.log('lo7 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Identify the challenges of operating a business in a global environment.`,
    //   knowledgearea: 'Business, Finance, and Technology',
    //   course: '',
    //   selected: false,
    //   pillar1: 20,
    //   pillar2: 20,
    //   pillar3: 0,
    //   pillar4: 60
    // }).then(() => {
    //   console.log('lo7 added.');
    // })
    // .catch((e) => {
    //   console.log('lo7 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Exhibit knowledge of the major cultural, economic, social, and legal environment faced by multinational organizations.`,
    //   knowledgearea: 'Business, Finance, and Technology',
    //   course: '',
    //   selected: false,
    //   pillar1: 20,
    //   pillar2: 20,
    //   pillar3: 0,
    //   pillar4: 60
    // }).then(() => {
    //   console.log('lo7 added.');
    // })
    // .catch((e) => {
    //   console.log('lo7 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Discuss appropriate responses to culgtural differences in a global economy.`,
    //   knowledgearea: 'Business, Finance, and Technology',
    //   course: '',
    //   selected: false,
    //   pillar1: 20,
    //   pillar2: 20,
    //   pillar3: 10,
    //   pillar4: 50
    // }).then(() => {
    //   console.log('lo7 added.');
    // })
    // .catch((e) => {
    //   console.log('lo7 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Design a plan to employ technology to efficiently address a business problem.`,
    //   knowledgearea: 'Business, Finance, and Technology',
    //   course: '',
    //   selected: false,
    //   pillar1: 20,
    //   pillar2: 40,
    //   pillar3: 40,
    //   pillar4: 0
    // }).then(() => {
    //   console.log('lo7 added.');
    // })
    // .catch((e) => {
    //   console.log('lo7 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Utilize appropriate quantitative techniques to analyze business issues.`,
    //   knowledgearea: 'Business, Finance, and Technology',
    //   course: '',
    //   selected: false,
    //   pillar1: 20,
    //   pillar2: 70,
    //   pillar3: 10,
    //   pillar4: 0
    // }).then(() => {
    //   console.log('lo7 added.');
    // })
    // .catch((e) => {
    //   console.log('lo7 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Analyze the formal qualities of a specific work of visual art and situate it within the context of movement or style.`,
    //   knowledgearea: 'Arts and Literature',
    //   course: '',
    //   selected: false,
    //   pillar1: 40,
    //   pillar2: 60,
    //   pillar3: 0,
    //   pillar4: 0
    // }).then(() => {
    //   console.log('lo2 added.');
    // })
    // .catch((e) => {
    //   console.log('lo2 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Develop an informed narrative about a work of art (visual art, music, literature, photography, film, theatre) within the historical context of the work.`,
    //   knowledgearea: 'Arts and Literature',
    //   course: '',
    //   selected: false,
    //   pillar1: 30,
    //   pillar2: 70,
    //   pillar3: 0,
    //   pillar4: 0
    // }).then(() => {
    //   console.log('lo3 added.');
    // })
    // .catch((e) => {
    //   console.log('lo3 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Differentiate between the processes and material used in the production of various works of art.`,
    //   knowledgearea: 'Arts and Literature',
    //   course: '',
    //   selected: false,
    //   pillar1: 70,
    //   pillar2: 30,
    //   pillar3: 0,
    //   pillar4: 0
    // }).then(() => {
    //   console.log('lo4 added.');
    // })
    // .catch((e) => {
    //   console.log('lo4 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Describe how a specific work of art relates to commonly acknowledged ethical principles and personal responsibility, considering both contemporary social norms and those of the time and place where the work of art was produced.`,
    //   knowledgearea: 'Arts and Literature',
    //   course: '',
    //   selected: false,
    //   pillar1: 20,
    //   pillar2: 0,
    //   pillar3: 60,
    //   pillar4: 20
    // }).then(() => {
    //   console.log('lo4 added.');
    // })
    // .catch((e) => {
    //   console.log('lo4 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Analyze how specific works of art reflect diverse cultural experiences and perspectives.`,
    //   knowledgearea: 'Arts and Literature',
    //   course: '',
    //   selected: false,
    //   pillar1: 20,
    //   pillar2: 30,
    //   pillar3: 10,
    //   pillar4: 40
    // }).then(() => {
    //   console.log('lo4 added.');
    // })
    // .catch((e) => {
    //   console.log('lo4 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Demonstrate an understanding of the impact of specific works of art on culture.`,
    //   knowledgearea: 'Arts and Literature',
    //   course: '',
    //   selected: false,
    //   pillar1: 30,
    //   pillar2: 20,
    //   pillar3: 10,
    //   pillar4: 40
    // }).then(() => {
    //   console.log('lo4 added.');
    // })
    // .catch((e) => {
    //   console.log('lo4 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Develop a critical interpretation of a specific work of art that evaluates the work within a specific context (e.gl, genre, historical context, movement).`,
    //   knowledgearea: 'Arts and Literature',
    //   course: '',
    //   selected: false,
    //   pillar1: 30,
    //   pillar2: 20,
    //   pillar3: 40,
    //   pillar4: 10
    // }).then(() => {
    //   console.log('lo4 added.');
    // })
    // .catch((e) => {
    //   console.log('lo4 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Demonstrate an understanding of basic musical concepts.`,
    //   knowledgearea: 'Arts and Literature',
    //   course: '',
    //   selected: false,
    //   pillar1: 80,
    //   pillar2: 10,
    //   pillar3: 10,
    //   pillar4: 0
    // }).then(() => {
    //   console.log('lo4 added.');
    // })
    // .catch((e) => {
    //   console.log('lo4 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Demonstrate knowledge and familiarity with style periods of Western music: Middle-ages, Renaissance, Baroque, Classical, romantic, Twentieth Century/Contemporary.`,
    //   knowledgearea: 'Arts and Literature',
    //   course: '',
    //   selected: false,
    //   pillar1: 80,
    //   pillar2: 10,
    //   pillar3: 10,
    //   pillar4: 0
    // }).then(() => {
    //   console.log('lo4 added.');
    // })
    // .catch((e) => {
    //   console.log('lo4 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Demonstrate an understanding of the role of Art in the economic and cultural life of a society and the opinion, attitudes, and self of self of the individual in society.`,
    //   knowledgearea: 'Arts and Literature',
    //   course: '',
    //   selected: false,
    //   pillar1: 10,
    //   pillar2: 10,
    //   pillar3: 20,
    //   pillar4: 60
    // }).then(() => {
    //   console.log('lo4 added.');
    // })
    // .catch((e) => {
    //   console.log('lo4 failed.',e);
    // })

    // database.ref('learningobjective').push({
    //   content: `Demonstrate an understanding of how a specific piece of music, or the body of work of a specific artist, relates to a cultural context with regard to history, literature, and philosophical and political ideas.`,
    //   knowledgearea: 'Arts and Literature',
    //   course: '',
    //   selected: false,
    //   pillar1: 10,
    //   pillar2: 10,
    //   pillar3: 20,
    //   pillar4: 60
    // }).then(() => {
    //   console.log('lo4 added.');
    // })
    // .catch((e) => {
    //   console.log('lo4 failed.',e);
    // })

  // database.ref(`usercourserecommendation`)
  //   .once('value')
  //   .then((snapshot) => {
  //     const val = snapshot.val();
  //     console.log(val);
  //   })
  //   .catch((e) => {
  //     console.log('Error fetching data',0);
  //   });

// database.ref('knowledgearea').push({
//   content: 'Arts and Literature'
// });

// database.ref('knowledgearea').push({
//   content: 'Business, Finance, and Technology'
// });

// database.ref('knowledgearea').push({
//   content: 'Culinary and Food'
// });

// database.ref('knowledgearea').push({
//   content: 'Culture, Travel, and Tours'
// });

// database.ref('knowledgearea').push({
//   content: 'Gardening and Environment'
// });

//  database.ref('knowledgearea').push({
//     content: 'History and Current Affairs'
//  });

//  database.ref('knowledgearea').push({
//   content: 'Science and Health'
// });

//  database.ref('course').push({
//    content: 'Bon Voyage! Lessons in Foreign Travel',
//    knowledgearea: 'Culture, Travel, and Tours'
//  });

//  database.ref('course').push({
//   content: `De Luna Coffee Company tour and Tasting`,
//   knowledgearea: 'Culture, Travel, and Tours'
// });

// database.ref('course').push({
//   content: `Florida Department of Law Enforcement (FDLE) Crime Lab Tour`,
//   knowledgearea: 'Culture, Travel, and Tours'
// });

// database.ref('course').push({
//   content: `Humming Star Alpacas`,
//   knowledgearea: 'Culture, Travel, and Tours'
// });

// database.ref('course').push({
//   content: `McGuire's Irish Pub & Brewery Tour`,
//   knowledgearea: 'Culture, Travel, and Tours'
// });

// database.ref('course').push({
//   content: `Museum Plaza Walking Tour`,
//   knowledgearea: 'Culture, Travel, and Tours'
// });

// database.ref('course').push({
//   content: `Pensacola Blue Wahoos Game on the Winn-Dixie Party Deck`,
//   knowledgearea: 'Culture, Travel, and Tours'
// });

// database.ref('course').push({
//   content: `Sunset Dolphin Cruise`,
//   knowledgearea: 'Culture, Travel, and Tours'
// });

// database.ref('course').push({
//   content: `WUWF Public Radio Station Talk 'N' Tour`,
//   knowledgearea: 'Culture, Travel, and Tours'
// });

//  database.ref('course').push({
//    content: `American Civil War: The Battle of Gettysburg`,
//    knowledgearea: 'History and Current Affairs'
//  });

//  database.ref('course').push({
//   content: `Big Brothers Big Sisters: Experiences in the Ozarks`,
//   knowledgearea: 'History and Current Affairs'
// });

// database.ref('course').push({
//   content: `Chaos and Cartooning with Andy Marlette`,
//   knowledgearea: 'History and Current Affairs'
// });

// database.ref('course').push({
//   content: `Conversation with Fred Levin: The Story of My Life in Law`,
//   knowledgearea: 'History and Current Affairs'
// });

// database.ref('course').push({
//   content: `Discovering Your Ancestral Heritage: Mixing Genealogy, History, Geography and Travel`,
//   knowledgearea: 'History and Current Affairs'
// });

// database.ref('course').push({
//   content: `Downtown Pensacola Parking Workshop`,
//   knowledgearea: 'History and Current Affairs'
// });

// database.ref('course').push({
//   content: `On the Other Hand...Current Affairs Discussions`,
//   knowledgearea: 'History and Current Affairs'
// });

// database.ref('course').push({
//   content: `Open Burning and Open Detonation of Waste Military Munitions`,
//   knowledgearea: 'History and Current Affairs'
// });

// database.ref('course').push({
//   content: `Tiny House Movement and Construction`,
//   knowledgearea: 'History and Current Affairs'
// });

// database.ref('course').push({
//   content: `United States Citizenship Test: Can you Pass`,
//   knowledgearea: 'History and Current Affairs'
// });

//  database.ref('course').push({
//    content: `Stay Healthy, Get a Pet!`,
//    knowledgearea: 'Science and Health'
//  });

//  database.ref('course').push({
//   content: `SThe Connection Between Hearing Loss and Health, Including Dementia and Depression`,
//   knowledgearea: 'Science and Health'
// });

// database.ref('knowledgearea').push({
//   content: 'Business, Finance, and Technology'
// });

// database.ref('knowledgearea').push({
//   content: 'Culinary and Food'
// });

// database.ref('knowledgearea').push({
//   content: 'Culture, Travel, and Tours'
// });

// database.ref('knowledgearea').push({
//   content: 'Gardening and Environment'
// });

//  database.ref('knowledgearea').push({
//     content: 'History and Current Affairs'
//  });

//  database.ref('knowledgearea').push({
//   content: 'Science and Health'
// });

  //  database.ref('knowledgearea').on('value', (snapshot) => {
  //    const knowledgeareas = [];
  //    snapshot.forEach((childSnapshot) => {
  //      knowledgeareas.push({
  //        id: childSnapshot.key,
  //        ...childSnapshot.val()
  //      });
  //    });
  //    console.log(knowledgeareas);
  //  });

  //  database.ref('learningobjective').on('value', (snapshot) => {
  //   const learningobjectives = [];
  //   snapshot.forEach((childSnapshot) => {
  //     learningobjectives.push({
  //       id: childSnapshot.key,
  //       ...childSnapshot.val()
  //     });
  //   });
  //   console.log(learningobjectives);
  // });

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // database.ref('expenses')
// //   .once('value')
// //   .then((snapshot) => {
// //     const expenses = [];

// //     snapshot.forEach((childSnapshot) => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val()
// //       });
// //     });

// //     console.log(expenses);
// //   });

// // database.ref('expenses').on('value', (snapshot) => {
// //   const expenses = [];

// //   snapshot.forEach((childSnapshot) => {
// //     expenses.push({
// //       id: childSnapshot.key,
// //       ...childSnapshot.val()
// //     });
// //   });

// //   console.log(expenses);
// // });

// database.ref('expenses').push({
//   description: 'Rent',
//   note: '',
//   amount: 109500,
//   createdAt: 976123498763
// });






// // database.ref('notes/-Krll52aVDQ3X6dOtmS7').remove();

// // database.ref('notes').push({
// //   title: 'Course Topics',
// //   body: 'React Native, Angular, Python'
// // });

// // database.ref().on('value', (snapshot) => {
// //   const val = snapshot.val();
// //   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// // })

// // Setup data sub -> Andrew is a Software Developer at Amazon.

// // Change the data and make sure it reprints

// // database.ref('location/city')
// //   .once('value')
// //   .then((snapshot) => {
// //     const val = snapshot.val();
// //     console.log(val);
// //   })
// //   .catch((e) => {
// //     console.log('Error fetching data', e);
// //   });

// // database.ref().set({
// //   name: 'Andrew Mead',
// //   age: 26,
// //   stressLevel: 6,
// //   job: {
// //     title: 'Software developer',
// //     company: 'Google'
// //   },
// //   location: {
// //     city: 'Philadelphia',
// //     country: 'United States'
// //   }
// // }).then(() => {
// //   console.log('Data is saved!');
// // }).catch((e) => {
// //   console.log('This failed.', e);
// // });

// // database.ref().update({
// //   stressLevel: 9,
// //   'job/company': 'Amazon',
// //   'location/city': 'Seattle'
// // });

// // database.ref()
// //   .remove()
// //   .then(() => {
// //     console.log('Data was removed');
// //   }).catch((e) => {
// //     console.log('Did not remove data', e);
// //   });
