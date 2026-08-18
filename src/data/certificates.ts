import { Certificate } from '../types/certificate';

export const certificates: Certificate[] = [
  {
    id: 'cert-aws',
    title: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    issueDate: '2023',
    credentialId: 'AWS-892401-SA',
    credentialUrl: 'https://aws.amazon.com/verification',
    skills: ['AWS', 'Cloud Architecture', 'Serverless', 'Security']
  },
  {
    id: 'cert-meta-react',
    title: 'Meta Front-End Developer Specialization',
    issuer: 'Meta',
    issueDate: '2022',
    credentialId: 'META-FE-99120',
    credentialUrl: 'https://coursera.org/verify/specialization',
    skills: ['React', 'JavaScript', 'UI/UX', 'Testing']
  },
  {
    id: 'cert-tf',
    title: 'TensorFlow Developer Certificate',
    issuer: 'Google',
    issueDate: '2023',
    credentialId: 'GGL-TF-44012',
    credentialUrl: 'https://www.credential.net',
    skills: ['Python', 'Deep Learning', 'Neural Networks', 'TensorFlow']
  }
];
