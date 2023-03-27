import React from 'react';

const commentsData = [
  {
    name:"Rahul_Lakkavarapu",
    text:"This is a comment saying something .............",
    replies:[
      {
        name:"Rahul_Lakkavarapu",
        text:"This is a comment saying something .............",
        replies:[ {
          name:"Rahul_Lakkavarapu",
          text:"This is a comment saying something .............",
          replies:[]
        },
        {
          name:"Rahul_Lakkavarapu",
          text:"This is a comment saying something .............",
          replies:[
            {
              name:"Rahul_Lakkavarapu",
              text:"This is a comment saying something .............",
              replies:[]
            },
            {
              name:"Rahul_Lakkavarapu",
              text:"This is a comment saying something .............",
              replies:[
                {
                  name:"Rahul_Lakkavarapu",
                  text:"This is a comment saying something .............",
                  replies:[]
                },
              ]
            },
          ]
        },]
      },
      {
        name:"Rahul_Lakkavarapu",
        text:"This is a comment saying something .............",
        replies:[]
      },
      {
        name:"Rahul_Lakkavarapu",
        text:"This is a comment saying something .............",
        replies:[]
      },
      {
        name:"Rahul_Lakkavarapu",
        text:"This is a comment saying something .............",
        replies:[]
      },
      
    ]
  },
  {
    name:"Rahul_Lakkavarapu",
    text:"This is a comment saying something .............",
    replies:[]
  },
  {
    name:"Rahul_Lakkavarapu",
    text:"This is a comment saying something .............",
    replies:[]
  },
  {
    name:"Rahul_Lakkavarapu",
    text:"This is a comment saying something .............",
    replies:[]
  },
  {
    name:"Rahul_Lakkavarapu",
    text:"This is a comment saying something .............",
    replies:[]
  },
  {
    name:"Rahul_Lakkavarapu",
    text:"This is a comment saying something .............",
    replies:[]
  },
  
]

const Comment = ({data}) =>{

  const {name,text,replies} = data;


  return (
  <div className="flex bg-gray-100 shadow-sm rounded-lg my-2">
    <img className="w-7 h-7"
     alt="user" 
     src= "https://cdn-icons-png.flaticon.com/512/149/149071.png"/>
    <div className="px-3">
      <p className="font-bold">{name}</p>
      <p>{text}</p>
    </div>
    
    </div>);

};

const CommentsList = ({comments}) =>{
  return comments.map((comment,index) => (
    <div key ={index} >
        <Comment data={comment} />
        <div className="pl-5 border border-l-black ml-5">
            <CommentsList comments={comment.replies}/>
        </div>
    </div>

    
  ));

}


const CommentsContainer = () => {
  return (
    <div className="m-2 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>

      <CommentsList comments={commentsData} />
    </div>
  )
};

export default CommentsContainer;