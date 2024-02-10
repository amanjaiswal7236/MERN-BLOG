import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        unique: true
    },
    content: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: false,
        default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hostinger.com%2Ftutorials%2Fhow-to-write-a-blog-post&psig=AOvVaw1Qu4yJR3tS6eePIMJkwKVW&ust=1707383969044000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMCroIrzmIQDFQAAAAAdAAAAABAE"

    },
    category: {
        type: String,
        required: true,
        default: "uncategorized"
    },
    
},{timestamps:true});

const Post = mongoose.model('Post', postSchema);

export default Post;