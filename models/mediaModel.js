import mongoose from 'mongoose';

const MediaSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: [100, 'Title cannot exceed 100 characters']
  },
  link: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  description: {
    type: String,
    required: false,
    trim: true,
    maxlength: [500, 'Description cannot exceed 500 characters']
  },
  type: {
    type: String,
    enum: ['image', 'video', 'audio'],
    default: 'image',
    required: true
  },
  owner: {
    type: String,
    ref: 'User'
  }
});

// Virtuals
MediaSchema.virtual('thumbnail').get(function() {
  return `${this.link}?size=small`;
});

// Pre-save hook to update timestamps
MediaSchema.pre('save', function(next) {
  this.updatedAt = Date.now(); // Corrected dot notation
  next();
});

// Static method to create a thumbnail URL
MediaSchema.statics.createThumbnailUrl = function(link) {
  return `${link}?size=small`;
};

export default mongoose.model('Media', MediaSchema);
