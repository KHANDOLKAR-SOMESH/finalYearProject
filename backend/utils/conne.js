import mongoose from "mongoose";


const uri = 'mongodb://localhost:27017/Deepfake';

const connfun = ()=>{

  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected Successfully');
  })
  .catch((error) => {
    console.error(' connection error:', error);
  });
}
export default connfun;