import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import Message from './Message.js';

class Chatroom extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            chats: [{
                id:1,
                username: "chandan kuiry",
                content: <p>Hello Guys</p>,
                img: "https://thumbs.dreamstime.com/b/green-ecosystem-forest-tree-102707634.jpg",
            }, {
                id:2,
                username: "rahul dey",
                content: <p>Hii</p>,
                img: "https://thumbs.dreamstime.com/b/green-ecosystem-forest-tree-102707634.jpg",
            }, {
                id:3,
                username: "chandanku",
                content: <p>hii</p>,
                img: "https://avatars2.githubusercontent.com/u/10672205?s=400&u=4d1a09560375044295dcf4f2fe1a5df9e21d186d&v=4",
            }, {
                id:4,
                username: "chandanba",
                content: <p>yup</p>,
                img: "https://thumbs.dreamstime.com/b/green-ecosystem-forest-tree-102707634.jpg",
            }]
        };

        this.submitMessage = this.submitMessage.bind(this);
    }

    componentDidMount() {
        this.scrollToBot();
    }

    componentDidUpdate() {
        this.scrollToBot();
    }

    scrollToBot() {
        ReactDOM.findDOMNode(this.refs.chats).scrollTop = ReactDOM.findDOMNode(this.refs.chats).scrollHeight;
    }

    submitMessage(e) {
        e.preventDefault();

        this.setState({
            chats: this.state.chats.concat([{
                username: "chandan kuiry",
                content: <p>{ReactDOM.findDOMNode(this.refs.msg).value}</p>,
                img: "https://thumbs.dreamstime.com/b/green-ecosystem-forest-tree-102707634.jpg",
            }])
        }, () => {
            ReactDOM.findDOMNode(this.refs.msg).value = "";
        });
    }

    render() {
        const username = "chandan kuiry";
        const { chats } = this.state;

        return (
            <div className="chatroom">
                <h3>Chatapp</h3>
                <ul className="chats" ref="chats">
                    {
                        chats.map((chat) => 
                            <Message key={chat.id} chat={chat} user={username} />
                        )
                    }
                </ul>
                <form className="input" onSubmit={(e) => this.submitMessage(e)}>
                    <input type="text" ref="msg" />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Chatroom;