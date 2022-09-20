const { count } = require('console');
const express = require('express');
const mongoose = require('mongoose');
const Quote = require('./Quote')

const app = express();
app.use(express.urlencoded())
app.use(express.json())


mongoose.connect("mongodb+srv://shailesh123:rYbeOdoWZtY9NdKU@cluster0.e1ege.mongodb.net/Pawan-DB?retryWrites=true&w=majority")
    .then(() => console.log("Mongodb conected Successfully "))
    .catch(err => console.log(err))


const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


app.post('/add', async (req, res) => {
    try {
        let postData = req.body
        const data = await Quote.create(postData);
        res.json(data)
    } catch (error) {
        console.log(error)
    }

});

    var counter = 1

app.get('/list', async (req, res) => {
    try {

        console.log(counter)
        counter++;
        if(counter >= 7){
            counter = 1;
        }
        const data = await Quote.find();
        res.json(data[counter]);
    } catch (error) {
        console.log(error)
    }
});





const quotes = [
    {
        id: 1,
        quote: "Friendship is Love without his wings!"
    },
    {
        id: 2,
        quote: "A short saying often contains much wisdom."
    },
    {
        id: 3,
        quote: "Wisdom is a kind of knowledge. It is knowledge of the nature, career, and consequences of human values."
    },
    {
        id: 4,
        quote: "The three great essentials to achieve anything worth while are: Hard work, Stick-to-itiveness, and Common sense."
    },
    {
        id: 5,
        quote: "If you are bitter, you are like a dry leaf that you can just squash, and you can get blown away by the wind. There is much more wisdom in forgiveness."
    },
    {
        id: 6,
        "quote": "Applause is a receipt, not a bill."
    },
    {
        id: 7,
        quote: "The greatest obstacle to being heroic is the doubt whether one may not be going to prove one's self a fool; the truest heroism is to resist the doubt; and the profoundest wisdom, to know when it ought to be resisted, and when it be obeyed."
    },
    {
        id: 8,
        quote: "The eye sees only what the mind is prepared to comprehend."
    },
    {
        id: 9,
        quote: "Take things as they are. Punch when you have to punch. Kick when you have to kick."
    },
    {
        id: 10,
        quote: "Can you imagine what I would do if I could do all I can?"
    },
    {
        id: 11,
        quote: "Knowledge speaks, but wisdom listens."
    },
    {
        id: 12,
        quote: "A tree is known by its fruit; a man by his deeds. A good deed is never lost; he who sows courtesy reaps friendship, and he who plants kindness gathers love."
    },
    {
        id: 13,
        quote: "Whatever happens, take responsibility."
    },
    {
        id: 14,
        quote: "Kind words do not cost much. Yet they accomplish much."
    },
    {
        id: 15,
        quote: "You can tell whether a man is clever by his answers. You can tell whether a man is wise by his questions."
    },
    {
        id: 16,
        quote: "Be Impeccable With Your Word. Speak with integrity. Say only what you mean. Avoid using the word to speak against yourself or to gossip about others. Use the power of your word in the direction of truth and love."
    },
    {
        id: 17,
        quote: "Who looks outside, dreams; who looks inside, awakes."
    },
    {
        id: 18,
        quote: "By believing passionately in something that does not yet exist, we create it."
    },
    {
        id: 19,
        quote: "Give me a lever long enough and a fulcrum on which to place it, and I shall move the world."
    },
    {
        id: 20,
        quote: "Science and technology revolutionize our lives, but memory, tradition and myth frame our response."
    }
];
