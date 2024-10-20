const {Router} = require("express");
const router = Router();

// Sign-in endpoint
router.get('/', (req, res) => {

    try {
        // default get page of backend
        res.status(200).send("<!DOCTYPE html>\n" +
            "<html lang=\"en\">\n" +
            "<head>\n" +
            "    <meta charset=\"UTF-8\">\n" +
            "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
            "    <title>Welcome Message</title>\n" +
            "    <style>\n" +
            "        body {\n" +
            "            font-family: 'Arial', sans-serif;\n" +
            "            background-color: #f0f8ff;\n" +
            "            display: flex;\n" +
            "            justify-content: center;\n" +
            "            align-items: center;\n" +
            "            height: 100vh;\n" +
            "            margin: 0;\n" +
            "        }\n" +
            "\n" +
            "        .welcome-message {\n" +
            "            background-color: #4CAF50;\n" +
            "            color: white;\n" +
            "            padding: 20px 40px;\n" +
            "            border-radius: 8px;\n" +
            "            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n" +
            "            text-align: center;\n" +
            "            transition: transform 0.3s, box-shadow 0.3s;\n" +
            "        }\n" +
            "\n" +
            "        .welcome-message:hover {\n" +
            "            transform: translateY(-5px);\n" +
            "            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);\n" +
            "        }\n" +
            "\n" +
            "        .welcome-message h1 {\n" +
            "            margin: 0;\n" +
            "            font-size: 2.5rem;\n" +
            "        }\n" +
            "    </style>\n" +
            "</head>\n" +
            "<body>\n" +
            "    <div class=\"welcome-message\">\n" +
            "        <h1>Welcome, Sanjeev!</h1>\n" +
            "    </div>\n" +
            "</body>\n" +
            "</html>\n")


    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            error: error.message
        });
    }
});

module.exports = router;
