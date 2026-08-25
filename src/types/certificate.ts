export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  category: string;
  issueDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  image?: string;
  skills?: string[];
  iconName?: string;
}
