const initialState = {
    twitters: [
        {
          id: '1',
          title: 'Hello Roman',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
          created: '1 day',
          twitterName: 'hello_roman',
        },
        {
          id: '2',
          title: 'Saab guy',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
          created: '1 day',
          twitterName: 'Saab',
        },
        {
          id: '3',
          title: 'React router stuff',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
          created: '5 days',
          twitterName: 'mjackson',
        },
        {
          id: '4',
          title: 'Super animacje!',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
          created: '10 days',
          twitterName: 'sarah_edo',
        },
      ];,
    articles: [
      {
        id: 1,
        title: 'Hello Roman',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        created: '1 day',
        articleUrl: 'https://youtube.com/helloroman',
      },
    ],
    notes: [
      {
        id: 1,
        title: 'Hello Roman',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        created: '1 day',
      },
    ],
  };
  
  const rootReducer = (state = initialState, action) => {
    console.log(action);
  };
  
  export default rootReducer;
  