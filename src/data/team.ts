export type TeamMember = {
    id: string;
    name: string;
    role: string;
    image: string;
    category: 'exec' | 'general';
};

export const team: TeamMember[] = [
    {
        id: '1',
        name: 'Sarah Jenkins',
        role: 'Project Lead',
        image: '/images/team/placeholder.svg',
        category: 'exec',
    },
    {
        id: '2',
        name: 'David Chen',
        role: 'Chief Engineer',
        image: '/images/team/placeholder.svg',
        category: 'exec',
    },
    {
        id: '3',
        name: 'Emily Rose',
        role: 'Propulsion Lead',
        image: '/images/team/placeholder.svg',
        category: 'exec',
    },
    {
        id: '4',
        name: 'Michael Chang',
        role: 'Aerodynamics Lead',
        image: '/images/team/placeholder.svg',
        category: 'general',
    },
    {
        id: '5',
        name: 'Jessica Smith',
        role: 'Avionics Engineer',
        image: '/images/team/placeholder.jpg',
        category: 'general',
    },
    {
        id: '6',
        name: 'Robert Wilson',
        role: 'Recovery Specialist',
        image: '/images/team/placeholder.jpg',
        category: 'general',
    },
];
