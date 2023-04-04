const { encryptMessage, decryptMessage } = require("../controller/message");

const router = require("express").Router();

router.post("/encrypt",encryptMessage);
router.post("/decrypt",decryptMessage);

module.exports = router;