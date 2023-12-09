// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { exec } = require('child_process');

const app = express();
app.use(cors());
const port = 8080; 

app.use(bodyParser.json());

app.post('/generate-image', (req, res) => {
    const description = req.body.description;

    if (!description) {
        return res.status(400).send('No description provided');
    }

    exec(`python3 ../image_gen.py "${description}"`, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return res.status(500).send('Error generating image');
        }

        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);

        // Assuming stdout will contain the URL of the generated image
        res.send({ imageUrl: stdout.trim() });
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
