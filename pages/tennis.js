import React from 'react';
import Link from 'next/link';
import Header from './components/shared/Header/Header';
import Layout from './components/shared/Layout/Layout';
import styles from './tennis.module.scss';

const focuses = [
    "Footwork",
    "Cross court rally",
    "Longest rally",
    "Return winners",
    "Down the line shots",
    "Aces",
    "Net points won",
    "Slices",
    "Angled shots",
    "Serve plus one",
    "Heavy Topspin forehands",
    "Flat forehands",
    "Forehand winners",
    "Backhand winners",
    "No errors on backhand",
    "No errors on forehand",
    "Topspin returns"
];

const quotes = [
    {
        "author": "Billie Jean King",
        "text": "Champions keep playing until they get it right."
    },
    {
        "author": "Roger Federer",
        "text": "I’m a very positive thinker, and I think that is what helps me the most in difficult moments."
    },
    {
        "author": "Serena Williams",
        "text": "A champion is defined not by their wins but by how they can recover when they fall."
    },
    {
        "author": "Venus Williams",
        "text": "Just believe in yourself. Even if you don’t, pretend that you do and, at some point, you will."
    },
    {
        "author": "John McEnroe",
        "text": "You cannot be serious!"
    },
    {
        "author": "Novak Djokovic",
        "text": "You have to believe in yourself when no one else does – that makes you a winner right there."
    },
    {
        "author": "Arthur Ashe",
        "text": "Start where you are. Use what you have. Do what you can."
    },
    {
        "author": "Steffi Graf",
        "text": "You can’t measure success if you have never failed."
    },
    {
        "author": "Bjorn Borg",
        "text": "My greatest point is my persistence. I never give up in a match."
    },
    {
        "author": "Kim Clijsters",
        "text": "I’d rather have the attitude of a champion than the trophy of a loser."
    },
    {
        "author": "Martina Navratilova",
        "text": "Tennis is a moving experience. It’s more than just hitting a ball."
    },
]

function getRandomItem(focuses) {
    return focuses[Math.floor(Math.random() * focuses.length)];
}


const About = (props) => {
    const quote = getRandomItem(quotes);
    return(
        <div>
            <Layout>
                <Header titleText={'Jackson Breyer'} />
                <p>Your Secret Tennis Mission is...</p>
                <h2>{getRandomItem(focuses)}</h2>
                <div className={styles.quote}>{quote.text} —{quote.author}</div>
            </Layout>
        </div>
    );
};
export default About;
