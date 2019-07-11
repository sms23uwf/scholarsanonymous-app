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

  //  database.ref('usercourserecommendation').push({
  //    userid: 'PH4wUCr2freJP9ihfqp1kCcBaIe2',
  //    counter: 1,
  //    course: {
  //      content: `McGuire's Irish Pub & Brewery Tour`,
  //      knowledgearea: 'Culture, Travel, and Tours'
  //     }
  //  }).then(() => {
  //    console.log('ucr1 added.');
  //  })
  //  .catch((e) => {
  //    console.log('ucr1 failed.',e);
  //  })

    // database.ref('learningobjective').push({
    //   content: `Prepare a written business report that is clear, logical, concise, grammatically correct, and clear to the target audience.`,
    //   knowledgearea: 'Business, Finance, and Technology',
    //   course: '',
    //   selected: false,
    //   pillar1: 10,
    //   pillar2: 70,
    //   pillar3: 10,
    //   pillar4: 10
    // }).then(() => {
    //   console.log('lo1 added.');
    // })
    // .catch((e) => {
    //   console.log('lo1 failed.',e);
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

   database.ref('knowledgearea').on('value', (snapshot) => {
     const knowledgeareas = [];
     snapshot.forEach((childSnapshot) => {
       knowledgeareas.push({
         id: childSnapshot.key,
         ...childSnapshot.val()
       });
     });
     console.log(knowledgeareas);
   });

   database.ref('learningobjective').on('value', (snapshot) => {
    const learningobjectives = [];
    snapshot.forEach((childSnapshot) => {
      learningobjectives.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      });
    });
    console.log(learningobjectives);
  });

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
