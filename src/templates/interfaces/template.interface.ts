import { Document } from 'mongoose';

export interface TemplateComponent {
  name: string;
  value: object;
}

export interface TemplateInfo {
  client: string;
  campaign: string;
  subject: string;
}

export interface Template extends Document {
  id: string;
  description: string;
  version: string;
  status: string;
  components: TemplateComponent[];
  info: TemplateInfo
}
