export const removeItem = (itemType, id)=>
{
    return{
        type: "REMOVE_ITEM",
        payload:{
            itemType,
            id,
        }
    }
}


const dummyArticle = {
    id: 1,
    title: 'Wake me up when Vue ends',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    twitterName: 'hello_roman',
    articleUrl: 'https://youtube.com/helloroman',
    created: '1 day',
  };