import mongoose from 'mongoose'

const CounterSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    seq: {
        type: Number,
    }
});

export default mongoose.model('Counter', CounterSchema);
/*
const getSequenceNextValue = (seqName) => {
    return new Promise((resolve, reject) => {
        Counter.findByIdAndUpdate(
            { "_id": seqName },
            { "$inc": { "seq": 1 } }
            , (error, counter) => {
                if (error) {
                    reject(error);
                }
                if(counter) {
                    resolve(counter.seq + 1);
                } else {
                    resolve(null);
                }
            });
    });
};

const insertCounter = (seqName) => {
    const newCounter = new Counter({ _id: seqName, seq: 1 });
    return new Promise((resolve, reject) => {
    newCounter.save()
        .then(data => {
            resolve(data.seq);
        })
        .catch(err => reject(error));
    });
}
module.exports = {
    Counter,
    getSequenceNextValue,
    insertCounter
}*/