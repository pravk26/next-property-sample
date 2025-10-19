import {Schema, model, models} from 'mongoose';
import { unique } from 'next/dist/build/utils';

const UserSchema = Schema({
    email: {
        type: String,
        required: [true, 'Email Id is Required'],
        unique: [true, 'User already exists']
    },
    username: {
        type: String,
        required: [true, 'User name is required']
    },
    image: {
        type: String
    },
    bookmarks: [{
        type: Schema.Types.ObjectId,
        ref: 'Property'
    }]
}, {
    timestamps: true
})

const User = models.User || model('User', UserSchema);