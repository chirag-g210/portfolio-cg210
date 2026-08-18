import { CodingProfile } from '../types/codingProfile';

export const codingProfiles: CodingProfile[] = [
  {
    id: 'leetcode',
    platform: 'LeetCode',
    username: 'chirag_gupta',
    profileUrl: 'https://leetcode.com',
    badge: 'Knight Badge (Top 3.5%)',
    rating: '1,940 Max Rating',
    solvedCount: '750+ Problems Solved',
    globalRank: 'Top 5000 Worldwide',
    highlights: ['350+ Medium, 120+ Hard', 'Active 100+ Day Contest Streak'],
    color: 'from-amber-500 to-orange-600'
  },
  {
    id: 'github',
    platform: 'GitHub',
    username: 'chirag-gupta',
    profileUrl: 'https://github.com',
    badge: 'Arctic Code Vault Contributor',
    rating: '1,200+ Contributions',
    solvedCount: '35+ Repositories',
    globalRank: '1.2k+ Open Source Stars',
    highlights: ['Core Maintainer of 3 UI Libraries', 'Top 1% Yearly Contributions'],
    color: 'from-purple-600 to-indigo-600'
  },
  {
    id: 'codeforces',
    platform: 'Codeforces',
    username: 'chirag_g',
    profileUrl: 'https://codeforces.com',
    badge: 'Specialist',
    rating: '1,560 Max Rating',
    solvedCount: '400+ Problems',
    globalRank: 'Division 2 Competitor',
    highlights: ['Participated in 45+ Rated Contests', 'Graph Theory & DP Specialist'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'codechef',
    platform: 'CodeChef',
    username: 'chirag_gupta',
    profileUrl: 'https://codechef.com',
    badge: '4★ Star Coder',
    rating: '1,820 Max Rating',
    solvedCount: '300+ Problems',
    globalRank: 'Global Rank < 2000',
    highlights: ['Division 1 Qualifier', 'Long Challenge Top Finisher'],
    color: 'from-orange-600 to-pink-600'
  }
];
