import React, { useState } from 'react'
import "./css/QuoraHeader.css"
import HomeIcon from '@mui/icons-material/Home';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import AssignmentIcon from '@mui/icons-material/Assignment';
import HailIcon from '@mui/icons-material/Hail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Avatar, Button,Input } from '@mui/material';
import { Modal } from 'react-responsive-modal';
import CloseIcon from '@mui/icons-material/Close';
import "react-responsive-modal/styles.css"
import SnowshoeingIcon from '@mui/icons-material/Snowshoeing';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



const QuoraHeader = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [inputUrl, setInputurl] = useState("")
    const close = (<CloseIcon />);

    return (
        <div className='qHeader'>
            <div className="qHeader-content">
                <div className="qHeader__logo">
                    {/* <img src="https://qph.cf2.quoracdn.net/main-qimg-4d340b8b704ccfc33ac16dd261b6c121-lq" alt=""
                        style={{ height: "40px", width: "40px" }}
                    /> */}
                    <div className="qHeader__icons">
                        <div className="qHeader__icon"><HomeIcon /></div>
                        <div className="qHeader__icon"><FeaturedPlayListIcon /></div>
                        <div className="qHeader__icon"><AssignmentIcon /></div>
                        <div className="qHeader__icon"><HailIcon /></div>
                        <div className="qHeader__icon"><NotificationsIcon /></div>
                        <div className="qHeader__input">
                            <SearchIcon />
                            <input type="text" placeholder='Search here ' />
                        </div>
                        <div className="qHeader__Rem">
                            <Avatar />
                        </div>
                        <Button onClick={() => setIsModalOpen(true)}> Add Questions </Button>
                        <Modal
                            open={isModalOpen}
                            closeIcon={close}
                            onClose={() => setIsModalOpen(false)}
                            closeOnEsc
                            center
                            closeOnOverlayClick={false}
                            styles={{
                                overlay: {
                                    height: "auto",
                                },
                            }}
                        >
                            <div className="modal__title">
                                <h5>Add Question</h5>
                                <h5>Share Link</h5>
                            </div>
                            <div className="modal__info">
                                <Avatar className="avatar" />
                                <div className="modal__scope">
                                    <SnowshoeingIcon />
                                    <p>Public</p>
                                    <ExpandMoreIcon />
                                </div>
                            </div>
                            <div className="modal__Field">
                                <Input
                                    // value={question}
                                    // onChange={(e) => setQuestion(e.target.value)}
                                    type=" text"
                                    placeholder="Start your question with 'What', 'How', 'Why', etc. "
                                />
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                    }}
                                >
                                    <input
                                        type="text"
                                       value={inputUrl}
                                       onChange={(e) => setInputurl(e.target.value)}
                                        style={{
                                            margin: "5px 0",
                                            border: "1px solid lightgray",
                                            padding: "10px",
                                            outline: "2px solid #000",
                                        }}
                                        placeholder="Optional: inclue a link that gives context"
                                    />
                                    
                                        <img
                                            style={{
                                                height: "40vh",
                                                objectFit: "contain",
                                            }}
                                            src={inputUrl}
                                            alt="displayimage"
                                        />
                                
                                </div>
                            </div>
                            <div className="modal__buttons">
                                <button className="cancle" onClick={() => setIsModalOpen(false)}>
                                    Cancel
                                </button>
                                <button  type="submit" className="add">
                                    Add Question
                                </button>
                            </div>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuoraHeader
