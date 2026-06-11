const { ImageKit } = require("@imagekit/nodejs");

const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKTI_PRIVATE_KEY,
});

async function uploadFile(buffer) {
  try {

    const result = await imagekit.files.upload({
      file: buffer.toString("base64"),
      fileName: `image-${Date.now()}.jpg`
    });
    
    return result;

  } catch (err) {
    console.error("FULL ERROR:", err);
    throw err;
  }
}

module.exports = uploadFile;