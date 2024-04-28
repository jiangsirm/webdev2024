const express =require("express")
const router = express.Router();

const userInfo = [
    {name: "xiaoZhi", id: 2333},
    {name: "Zhulan", id: 114514}
];

router.get("/", function(req, res) {
    const user = req.query.name;
    const UserFound = [];

    for (let i = 0; i < userInfo.length; i++) {
        const curUser = userInfo[i];
        if (user !== undefined){
            if (curUser.name.startsWith(user)) {
                UserFound.push(curUser);
            }
        } else {
            return res.json(userInfo);
        }
    }
    return res.send(UserFound);
})

router.get("/:userId", function(req, res) {
    const userId = req.params.userId;

    for (let i = 0; i < userInfo.length; i++) {
        const curUser = userInfo[i];
        if (curUser.id === Number(userId)){
            return res.status(200).json(curUser);
        }
    }
    return res.status(404).send(userId + " is not in the record.");
})

router.post("/", function(req, res) {
    const trainer = req.body;
    const userName = trainer.name;
    const newId = Math.floor(Math.random() * 115155);

    if (!userName) {
        return res.status(401).send("missing infor");
    }

    userInfo.push({
        name: userName,
        id: newId
    })

    return res.status(200).send(userName + " is added to the info");

})

module.exports = router;