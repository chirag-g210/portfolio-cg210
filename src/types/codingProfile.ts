export interface CodingProfile {
  id: string;
  platform: string;
  username: string;
  profileUrl: string;
  badge?: string;
  rating?: string;
  solvedCount?: string;
  globalRank?: string;
  highlights: string[];
  color: string;
}
