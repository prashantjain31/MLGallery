exports.spamHamClassifier = async (req, res) => {
    
    var spawn = require("child_process").spawn;
    var process = await spawn('python',["./ML_Codes/spam_ham/spam_ham.py", req.body.message]);

    await process.stdout.on('data', (data) => {
        if(data == 1) {
            res.json({
                result: "Spam"
            })
            return;
        } else if(data == 0) {
            res.json({
                result: "Ham"   
            })
            return;
        }
        res.json({
            result: "Failed to compute"
        })
    });

    // To check error uncomment this and run server there will be
    // several warnings about vesions you can ignore them

    // process.stderr.on('data', (data) => {
    //     console.error(`stderr: ${data}`);
    // });
}