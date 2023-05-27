import React from 'react'
import "./css/Post.css"
import { Avatar } from '@mui/material'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import RepeatIcon from '@mui/icons-material/Repeat';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ShareIcon from '@mui/icons-material/Share';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Post = () => {
  return (
    <div className='post'>
      <div className="post__info">
        <Avatar/>
        <h4>Rohit Sharma</h4>
        <small>2hrs ago</small>
      </div>
      <div className="post__body">
        <div className='post__question'>
        <p>where was the stand situated and how was it made?</p>
        <button className='post__btnAnswer'>Answers</button>
        </div>
      </div>
      <div className="post__footer">
        <div className='post__footerAction'>
            <ArrowUpwardIcon/>
            <ArrowDownwardIcon/>
        </div>
           <RepeatIcon/>
           <ChatBubbleIcon/>
           <div className='post__footerLeft'>
            <ShareIcon/>
            <MoreHorizIcon/>
           </div>
      </div>
      <p style={{
        color:"rgba(0,0,0,0.5)",
        fontSize:"12px",
        fontWeight:"bolder",
        margin:"10px 0"
      }}>1 answers</p>
      <div className="post__answer" style={{
                margin:"5px 0px 0px 0px",
                padding:"5px 0px 0px 20px",
                borderTop:"1px solid lightgray"

            }}>
        <div className="post-answer-container" style={{
            display:"flex",
            flexDirection:"column",
            width:"100%",
            padding:"10px 5px",
            borderTop:"1px solid lightgray"
        }}>
            <div className="post-answered" style={{
                display:"flex",
                alignItems:"center",
                width:"100%",
                padding:"10px 5px",
                marginBottom:"10px",
                fontSize:"12px",
                fontWeight:"bold",
                color:"#888"
            }}>
                <Avatar/>
                <div className="post-info" style={{
                    margin:"0px 10px"
                }}>
                    <p>
                        Ritik Pathak
                    </p>
                    <span>5m ago</span>
                </div>
            </div>
            <div className="post-answer" >
                here is the answer from ritik
            </div>
        </div>
      </div>
    </div>
  )
}

export default Post
