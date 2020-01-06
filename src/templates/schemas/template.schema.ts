import * as mongoose from 'mongoose';

const TemplateStatus = {
  type: String,
  enum: ['draft', 'saved', 'published'],
  default: 'draft',
};

const TemplateComponentValue = {
  name: { type: String, required: true },
  value: mongoose.Schema.Types.Mixed,
};

const TemplateComponent = {
  name:  { type: String, required: true },
  value: TemplateComponentValue,
};

export const TemplateSchema = new mongoose.Schema({
  description: { type: String, default: '' },
  version:     { type: String, required: true, unique: true },
  status:      TemplateStatus,

  // Template components
  components:  [TemplateComponent],

  // Domain's information
  info: {
    client:   { type: String, required: true },
    subject:  { type: String, required: true },
    campaign: { type: String, required: true },
  },
});
