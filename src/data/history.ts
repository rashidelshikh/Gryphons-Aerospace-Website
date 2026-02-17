export type TimelineEvent = {
    year: string;
    title: string;
    description: string;
    image?: string;
};

export const history: TimelineEvent[] = [
    {
        year: '2023',
        title: 'Team Founded',
        description: 'Gryphons Aerospace was established by a group of passionate engineering students at the University of Guelph.',
        image: '/images/team/placeholder.svg',
    },
    {
        year: '2024',
        title: 'First Launch',
        description: 'Successful launch of Gryphon I at the Spaceport America Cup, reaching an altitude of 10,500 ft.',
        image: '/images/team/placeholder.svg',
    },
    {
        year: '2025',
        title: 'Expansion',
        description: 'Expanded into UAS development with the Sentinel project and grew the team to over 40 members.',
        image: '/images/team/placeholder.svg',
    },
];
