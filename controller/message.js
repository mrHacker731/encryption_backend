const CryptoJS = require("crypto-js");

const encryptMessage = (req, res) => {
   try {
    const { message,key } = req.body;
    if (!message) {
      return res.send(error(404, "message not found"));
    }
    if (!key) {
        return res.send(error(404, "plese provide encryption key"));
      }
  
    // Encrypt the message using AES encryption and the encryption key
    const encryptedMessage = CryptoJS.AES.encrypt(
      message,
      key
    ).toString();
  
    return res.send(encryptedMessage);
   } catch (error) {
    console.log(error);
   }
  };
  
  const decryptMessage = (req, res) => {
   try {
    const { message,key } = req.body;
    if (!message) {
      return res.send(error(404, "message not found"));
    }
    if (!key) {
        return res.send(error(404, "plese give dcryption key"));
      }
    // Decrypt the message using AES decryption and the encryption key
    const decryptedMessage = CryptoJS.AES.decrypt(
      message,
      key
    ).toString(CryptoJS.enc.Utf8);
  
    return res.send(decryptedMessage);
   } catch (error) {
    console.log(error);
   }
  };

  module.exports = {
    encryptMessage,
    decryptMessage
  }