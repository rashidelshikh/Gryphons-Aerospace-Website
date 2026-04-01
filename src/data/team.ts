export type TeamMember = {
    id: string;
    name: string;
    role: string;
    image: string;
    category: 'president' | 'vp' | 'exec';
};

export const team: TeamMember[] = [
    {
        id: '1',
        name: 'Daniel SURNAME',
        role: 'President',
        image: '/images/team/placeholder.jpg',
        category: 'president',
    },
    {
        id: '2',
        name: 'Raell Trinidade',
        role: 'Vice President',
        image: '/images/team/placeholder.jpg',
        category: 'vp',
    },
    {
        id: '3',
        name: 'Steven Au',
        role: 'Design Lead',
        image: '/images/team/placeholder.jpg',
        category: 'exec',
    },
    {
        id: '4',
        name: 'Alex Wingate',
        role: 'Design Captain',
        image: '/images/team/placeholder.jpg',
        category: 'exec',
    },
    {
        id: '5',
        name: 'Maitry',
        role: 'Manufacturing Lead',
        image: '/images/team/placeholder.jpg',
        category: 'exec',
    },
    {
        id: '6',
        name: 'Arseniy',
        role: 'Legal Officer',
        image: '/images/team/placeholder.jpg',
        category: 'exec',
    },
    {
        id: '7',
        name: 'Eric',
        role: 'Flight Instructor',
        image: '/images/team/placeholder.jpg',
        category: 'exec',
    },
];
