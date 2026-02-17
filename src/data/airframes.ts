export type Airframe = {
    id: string;
    name: string;
    description: string;
    status: 'In Development' | 'Competed';
    image: string;
};

export const airframes: Airframe[] = [
    {
        id: '1',
        name: 'Gryphon I',
        description: 'Our inaugural sounding rocket, designed for 10k ft apogee. Competed in IREC 2024.',
        status: 'Competed',
        image: '/images/team/placeholder.svg',
    },
    {
        id: '2',
        name: 'Gryphon II (Project Helios)',
        description: 'Advanced composite airframe with active stabilization control system. Targeting 30k ft.',
        status: 'In Development',
        image: '/images/team/placeholder.svg',
    },
    {
        id: '3',
        name: 'UAV Sentinel',
        description: 'Autonomous surveillance drone for search and rescue operations.',
        status: 'In Development',
        image: '/images/team/placeholder.svg',
    },
];
