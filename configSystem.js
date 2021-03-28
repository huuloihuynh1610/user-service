export const MONGO_OPTIONS = {
    uri: 'mongodb://mongo:27017/database',
    user: process.env.MONGO_USER,
    pass: process.env.MONGO_PASS,
    db_options: {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      retryWrites: true,
      w: 'majority',
    },
    useFindAndModify: true
  }
  
