const mongoose = require("mongoose");

const courcesShema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter product Name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please Enter product Description"],
  },
  price: {
    type: Number,
    required: [true, "Please Enter product Price"],
    maxLength: [8, "Price cannot exceed 8 characters"],
  },

  courseTitle: {
    type: String,
    required: [true, "Please Enter Product Category"],
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please Enter Product Category"],
  },
  Stock: {
    type: Number,
    required: [true, "Please Enter product Stock"],
    maxLength: [4, "Stock cannot exceed 4 characters"],
    default: 1,
  },
  about: {
    type: String,
    required: [true, "Please Enter about"],
  },
  goal: {
    type: String,
    required: [true, "Please Enter gaol"],
  },
  mission: {
    type: String,
    required: [true, "Please Enter mission"],
  },
  lat: {
    type: Number,
    required: [true, "Please Enter course location"],
  },
  log: {
    type: Number,
    required: [true, "Please Enter course location"],
  },

  boxOneImage: {
    public_id: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  boxOneTitle: {
    type: String,
  },
  boxTwoImage: {
    public_id: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  boxTwoTitle: {
    type: String,
  },
  boxThreeImage: {
    public_id: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  boxThreeTitle: {
    type: String,
  },
  //     numOfReviews: {
  //       type: Number,
  //       default: 0,
  //     },
  //     brand: {
  //       type: String,
  //       required: true,
  //     },
  //     reviews: [
  //       {
  //         user: {
  //           type: mongoose.Schema.ObjectId,
  //           ref: "User",
  //           required: true,
  //         },
  //         rating: {
  //           type: Number,
  //           required: true,
  //         },
  //         comment: {
  //           type: String,
  //           required: true,
  //         },
  //         name: {
  //           type: String,
  //           required: true,
  //         },
  //         profileUrl: {
  //           type: String,
  //           required: true,
  //         },
  //         time: {
  //           type: String,
  //           required: true,
  //         },
  //       },
  //     ],
  //     // product ta je uplode korse ta callet korar jonno
  //     user: {
  //       type: mongoose.Schema.ObjectId,
  //       ref: "User",
  //       required: true,
  //     },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const coursesModal = new mongoose.model("Courses", courcesShema);

module.exports = coursesModal;
