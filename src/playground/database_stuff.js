// database.ref('knowledgearea').push({
//   content: 'Biology'
// }).then(() => {
//   console.log('bio Knowledge Area added.');
// })
// .catch((e) => {
//   console.log('bio not added.',e);
// });

// database.ref('knowledgearea').push({
//   content: 'Computer Science'
// }).then(() => {
//   console.log('CS Knowledge Area added.');
// })
// .catch((e) => {
//   console.log('CS not added.',e);
// });

// database.ref('knowledgearea').push({
//   content: 'History'
// }).then(() => {
//   console.log('History Knowledge Area added.');
// })
// .catch((e) => {
//   console.log('History not added.',e);
// });

// database.ref('knowledgearea').push({
//   content: 'Psychology'
// }).then(() => {
//   console.log('psych Knowledge Area added.');
// })
// .catch((e) => {
//   console.log('psych not added.',e);
// });

// database.ref('knowledgearea').push({
//   content: 'Sociology'
// }).then(() => {
//   console.log('sociology Knowledge Area added.');
// })
// .catch((e) => {
//   console.log('sociology not added.',e);
// });



// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//   database.ref().off('value', onValueChange);
// }, 15000);



//  database.ref().set({
//   name: 'steve',
//   age: 65,
//   location: {
//     city: 'Navarre',
//     state: 'Florida'
//   }
// }).then(() => {
//   console.log('Data is saved');
// }).catch((e) => {
//   console.log('This failed.',0);
// }) 

// database.ref().update({
//   job: 'Security Architect',
//   'location/city': 'Navarre'
// });

 /* database.ref('location/state')
  .remove()
  .then(() => {
    console.log('Data was removed.');
  })
  .catch((e) => {
    console.log('Data removal failed.',e);
  });
  */

  // database.ref('location/city')
  //   .once('value')
  //   .then((snapshot) => {
  //     const val = snapshot.val();
  //     console.log(val);
  //   })
  //   .catch((e) => {
  //     console.log('Error fetching data', e);
  //   });
 

  var csId = '';

  // database.ref('knowledgearea').once('value')
  // .then((snapshot) => {
  //        const val = snapshot.val();
  //        csId = Object.keys(snapshot.val())[1];

      //    database.ref('fieldofstudy').push({
      //     content: 'Algorithms',
      //     knowledgearea: csId
      //   }).then(() => {
      //     console.log('algorithms fos added.');
      //   })
      //   .catch((e) => {
      //     console.log('algorithms not added.',e);
      //   });
       
      //   database.ref('fieldofstudy').push({
      //    content: 'Cybersecurity',
      //    knowledgearea: csId
      //  }).then(() => {
      //    console.log('cyber fos added.');
      //  })
      //  .catch((e) => {
      //    console.log('cyber not added.',e);
      //  });
       
      //  database.ref('fieldofstudy').push({
      //    content: 'Data structures',
      //    knowledgearea: csId
      //  }).then(() => {
      //    console.log('data structures fos added.');
      //  })
      //  .catch((e) => {
      //    console.log('data structures not added.',e);
      //  });
       
      //    console.log(val);
      //    console.log(csId);
      //  })
      //  .catch((e) => {
      //    console.log('Error fetching data', e);
      //  });

    //    database.ref('fieldofstudy').push({
    //     content: 'Social Justice',
    //     knowledgearea: 'Sociology'
    //   }).then(() => {
    //     console.log('social justice fos added.');
    //   })
    //   .catch((e) => {
    //     console.log('social justice not added.',e);
    //   });
     
    //   database.ref('fieldofstudy').push({
    //    content: 'Colonial/Revolutionary/Early National America',
    //    knowledgearea: 'History'
    //   }).then(() => {
    //    console.log('history1 fos added.');
    //  })
    //  .catch((e) => {
    //    console.log('history1 not added.',e);
    //  });
     
    //  database.ref('fieldofstudy').push({
    //    content: 'History of Science',
    //    knowledgearea: 'History'
    //   }).then(() => {
    //    console.log('history2 fos added.');
    //  })
    //  .catch((e) => {
    //    console.log('history2 not added.',e);
    //  });

    //  database.ref('fieldofstudy').push({
    //   content: 'U.S. 20th Century',
    //   knowledgearea: 'History'
    //  }).then(() => {
    //   console.log('history3 fos added.');
    // })
    // .catch((e) => {
    //   console.log('history3 not added.',e);
    // });

    // database.ref('fieldofstudy').push({
    //   content: 'World/Global/Transnational History',
    //   knowledgearea: 'History'
    //  }).then(() => {
    //   console.log('history4 fos added.');
    // })
    // .catch((e) => {
    //   console.log('history4 not added.',e);
    // });

    // database.ref('fieldofstudy').push({
    //   content: 'Biochemistry and Biophysics',
    //   knowledgearea: 'Biology'
    //  }).then(() => {
    //   console.log('bio fos added.');
    // })
    // .catch((e) => {
    //   console.log('bio not added.',e);
    // });

    // database.ref('fieldofstudy').push({
    //   content: 'Microbiology',
    //   knowledgearea: 'Biology'
    //  }).then(() => {
    //   console.log('bio2 fos added.');
    // })
    // .catch((e) => {
    //   console.log('bio2 not added.',e);
    // });

    // database.ref('fieldofstudy').push({
    //   content: 'Zoology',
    //   knowledgearea: 'Biology'
    //  }).then(() => {
    //   console.log('bio3 fos added.');
    // })
    // .catch((e) => {
    //   console.log('bio3 not added.',e);
    // });

     database.ref('userlearningobjective').push({
       userid: '1',
       learningobjective: 
       { 
         content: 'Describe how various data structures are represented in computer memory.',
         fieldofstudy: 'Data structures'
       }
      }).then(() => {
       console.log('ulo1 lo added.');
     })
     .catch((e) => {
       console.log('ulo1 failed.',e);
     });

     database.ref('userlearningobjective').push({
      userid: '1',
      learningobjective: 
      { 
        content: 'Understand the working of multi-way search tree structures.',
        fieldofstudy: 'Data structures'
      }
     }).then(() => {
      console.log('ulo2 lo added.');
    })
    .catch((e) => {
      console.log('ulo2 failed.',e);
    });

    database.ref('userlearningobjective').push({
      userid: '1',
      learningobjective: 
      { 
        content: 'Write programs that use data structures such as arrays, linked lists, stacks, queues, trees, hash tables, and graphs.',
        fieldofstudy: 'Data structures'
      }
     }).then(() => {
      console.log('ulo3 lo added.');
    })
    .catch((e) => {
      console.log('ulo3 failed.',e);
    });

    database.ref('userlearningobjective').push({
      userid: '1',
      learningobjective: 
      { 
        content: 'Implement various searching and sorting algorithms.',
        fieldofstudy: 'Data structures'
      }
     }).then(() => {
      console.log('ulo4 lo added.');
    })
    .catch((e) => {
      console.log('ulo4 failed.',e);
    });

    database.ref('userlearningobjective').push({
      userid: '1',
      learningobjective: 
      { 
        content: 'Communicate in writing an idea for the implementation and several use cases for a data structure.',
        fieldofstudy: 'Data structures'
      }
     }).then(() => {
      console.log('ulo5 lo added.');
    })
    .catch((e) => {
      console.log('ulo5 failed.',e);
    });

    database.ref('userlearningobjective').push({
      userid: '1',
      learningobjective: 
      { 
        content: 'Discover an opportunity to teach someone the fundamentals of data structues.',
        fieldofstudy: 'Data structures'
      }
     }).then(() => {
      console.log('ulo6 lo added.');
    })
    .catch((e) => {
      console.log('ulo6 failed.',e);
    });

    database.ref('userlearningobjective').push({
      userid: '1',
      learningobjective: 
      { 
        content: 'Understand and describe how more efficient data structures might positively impact health care.',
        fieldofstudy: 'Data structures'
      }
     }).then(() => {
      console.log('ulo7 lo added.');
    })
    .catch((e) => {
      console.log('ulo7 failed.',e);
    });

    database.ref('userlearningobjective').push({
      userid: '1',
      learningobjective: 
      { 
        content: 'Understand the theory of Social Construction of Technology with regard to the pace of progress in advancing data structures.',
        fieldofstudy: 'Data structures'
      }
     }).then(() => {
      console.log('ulo8 lo added.');
    })
    .catch((e) => {
      console.log('ulo8 failed.',e);
    });

    // recommendations mock up

    database.ref('recommendation').push({
      format: 'Article',
      description: 'Introduction to Data Structures',
      content: 'http://www.cseworldonline.com/data-structure/Introduction-Data-Structures.php',
      learningobjective: 
      { 
        content: 'Describe how various data structures are represented in computer memory.',
        fieldofstudy: 'Data structures'
      }
     }).then(() => {
      console.log('ulo1 lo added.');
    })
    .catch((e) => {
      console.log('ulo1 failed.',e);
    });

    database.ref('recommendation').push({
      format: 'Video',
      description: 'What is Computer Memory',
      content: 'https://www.khanacademy.org/computing/computer-science/cryptography/comp-number-theory/v/what-is-computer-memory-prime-adventure-part-7',
      learningobjective: 
      { 
        content: 'Describe how various data structures are represented in computer memory.',
        fieldofstudy: 'Data structures'
      }
     }).then(() => {
      console.log('ulo1 lo added.');
    })
    .catch((e) => {
      console.log('ulo1 failed.',e);
    });

    database.ref('recommendation').push({
      format: 'Tutorial',
      description: 'Introduction to B-Tree',
      content: 'https://www.includehelp.com/data-structure-tutorial/introduction-to-b-tree.aspx',
      learningobjective: 
      { 
        content: 'Understand the working of multi-way search tree structures.',
        fieldofstudy: 'Data structures'
      }
     }).then(() => {
      console.log('ulo1 lo added.');
    })
    .catch((e) => {
      console.log('ulo1 failed.',e);
    });

    database.ref('recommendation').push({
      format: 'Article',
      description: 'B-trees',
      content: 'http://btechsmartclass.com/data_structures/b-trees.html',
      learningobjective: 
      { 
        content: 'Understand the working of multi-way search tree structures.',
        fieldofstudy: 'Data structures'
      }
     }).then(() => {
      console.log('ulo1 lo added.');
    })
    .catch((e) => {
      console.log('ulo1 failed.',e);
    });

    database.ref('recommendation').push({
      format: 'Article',
      description: 'How Big Data Analysis can impact Health Care',
      content: 'https://www.crainsdetroit.com/sponsored-content/big-data-disruption-how-big-data-analytics-can-impact-health-care',
      learningobjective: 
      { 
        content: 'Understand and describe how more efficient data structures might positively impact health care.',
        fieldofstudy: 'Data structures'
      }
     }).then(() => {
      console.log('ulo7 lo added.');
    })
    .catch((e) => {
      console.log('ulo7 failed.',e);
    });
    
    database.ref('recommendation').push({
      format: 'Article',
      description: 'Social Construction of Technology and Data Structure Stagnation',
      content: 'https://journals.sagepub.com/doi/10.1177/2053951718790591',
      learningobjective: 
      { 
        content: 'Understand the theory of Social Construction of Technology with regard to the pace of progress in advancing data structures.',
        fieldofstudy: 'Data structures'
      }
     }).then(() => {
      console.log('ulo7 lo added.');
    })
    .catch((e) => {
      console.log('ulo7 failed.',e);
    });
    
    //  database.ref('learningobjective').push({
    //   content: 'Understand the working of multi-way search tree structures.',
    //   fieldofstudy: 'Data structures'
    //  }).then(() => {
    //   console.log('ds2 lo added.');
    // })
    // .catch((e) => {
    //   console.log('ds2 lo added.',e);
    // });

    // database.ref('learningobjective').push({
    //   content: 'Describe the differences between linear and non-linear data structures in terms of representation in computer memory.',
    //   fieldofstudy: 'Data structures'
    //  }).then(() => {
    //   console.log('ds3 lo added.');
    // })
    // .catch((e) => {
    //   console.log('ds3 lo added.',e);
    // });

    // database.ref('learningobjective').push({
    //   content: 'Write programs that use data structes such as arrayhs, linked lists, stacks, queues, trees, hash tables, and graphs.',
    //   fieldofstudy: 'Data structures'
    //  }).then(() => {
    //   console.log('ds4 lo added.');
    // })
    // .catch((e) => {
    //   console.log('ds4 lo added.',e);
    // });

    // database.ref('learningobjective').push({
    //   content: 'Implement various searching and sorting algorithms.',
    //   fieldofstudy: 'Data structures'
    //  }).then(() => {
    //   console.log('ds5 lo added.');
    // })
    // .catch((e) => {
    //   console.log('ds5 lo added.',e);
    // });

    // database.ref('learningobjective').push({
    //   content: 'Model a given data structure as an Abstract Data Type (ADT).',
    //   fieldofstudy: 'Data structures'
    //  }).then(() => {
    //   console.log('ds6 lo added.');
    // })
    // .catch((e) => {
    //   console.log('ds6 lo added.',e);
    // });

    // database.ref('learningobjective').push({
    //   content: 'Communicate in writing an idea for the implementation and several use cases for a data structure.',
    //   fieldofstudy: 'Data structures'
    //  }).then(() => {
    //   console.log('ds7 lo added.');
    // })
    // .catch((e) => {
    //   console.log('ds7 lo added.',e);
    // });

    // database.ref('learningobjective').push({
    //   content: 'Discover an opportunity to teach someone the fundamentals of data structues.',
    //   fieldofstudy: 'Data structures'
    //  }).then(() => {
    //   console.log('ds8 lo added.');
    // })
    // .catch((e) => {
    //   console.log('ds8 lo added.',e);
    // });

    // database.ref('learningobjective').push({
    //   content: 'Describe the importance of Soft Skills as specifically related to the implementation and application of data structues.',
    //   fieldofstudy: 'Data structures'
    //  }).then(() => {
    //   console.log('ds9 lo added.');
    // })
    // .catch((e) => {
    //   console.log('ds9 lo added.',e);
    // });

    // database.ref('learningobjective').push({
    //   content: 'Understand and describe how more efficient data structures might positively impact health care.',
    //   fieldofstudy: 'Data structures'
    //  }).then(() => {
    //   console.log('ds10 lo added.');
    // })
    // .catch((e) => {
    //   console.log('ds10 lo added.',e);
    // });

    // database.ref('learningobjective').push({
    //   content: 'Understand the theory of Social Construction of Technology with regard to the pace of progress in advancing data structures.',
    //   fieldofstudy: 'Data structures'
    //  }).then(() => {
    //   console.log('ds11 lo added.');
    // })
    // .catch((e) => {
    //   console.log('ds11 lo added.',e);
    // });

    // database.ref('learningobjective').push({
    //   content: 'Describe the desire and necessity to learn data structures in terms of Rational Choice Theory.',
    //   fieldofstudy: 'Data structures'
    //  }).then(() => {
    //   console.log('ds12 lo added.');
    // })
    // .catch((e) => {
    //   console.log('ds12 lo added.',e);
    // });
