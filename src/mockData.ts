// Mock data for JKUBS Society Management System
import type { User, Event, Payment, Committee, Announcement, DashboardStats, Track, Badge, Certificate, TrackEnrollment } from './types';

// 17 Tracks organized by category
export const mockTracks: Track[] = [
    // ACADEMIC/PROFESSIONAL TRACKS (10)
    {
        id: '1',
        title: 'Molecular Biology Track',
        description: 'Exploring DNA, RNA, and protein synthesis. Learn about gene expression, molecular cloning, and CRISPR technology.',
        icon: '🧬',
        category: 'academic',
        difficultyLevel: 'intermediate',
        estimatedDuration: '10 weeks'
    },
    {
        id: '2',
        title: 'Biochemistry Core Track',
        description: 'Fundamental biochemical principles including metabolism, enzymology, and cellular biochemistry.',
        icon: '⚗️',
        category: 'academic',
        difficultyLevel: 'beginner',
        estimatedDuration: '8 weeks'
    },
    {
        id: '3',
        title: 'Microbiology & Immunology Track',
        description: 'Study of microorganisms, immune system function, and infectious disease mechanisms.',
        icon: '🦠',
        category: 'academic',
        difficultyLevel: 'intermediate',
        estimatedDuration: '10 weeks'
    },
    {
        id: '4',
        title: 'Bioinformatics & Computational Biology Track',
        description: 'Apply computational tools to biological data. Learn Python, R, and bioinformatics algorithms.',
        icon: '💻',
        category: 'academic',
        difficultyLevel: 'advanced',
        estimatedDuration: '12 weeks'
    },
    {
        id: '5',
        title: 'Cancer Biology & Molecular Medicine Track',
        description: 'Understand cancer mechanisms, oncogenes, tumor suppressors, and precision medicine approaches.',
        icon: '🎗️',
        category: 'academic',
        difficultyLevel: 'advanced',
        estimatedDuration: '12 weeks'
    },
    {
        id: '6',
        title: 'Pharmaceutical Biochemistry Track',
        description: 'Drug discovery, pharmacokinetics, and pharmaceutical development from molecules to medicine.',
        icon: '💊',
        category: 'academic',
        difficultyLevel: 'intermediate',
        estimatedDuration: '10 weeks'
    },
    {
        id: '7',
        title: 'Biotechnology & Industrial Bioprocess Track',
        description: 'Industrial biotechnology, fermentation, bioreactors, and bioprocess optimization.',
        icon: '⚙️',
        category: 'academic',
        difficultyLevel: 'intermediate',
        estimatedDuration: '10 weeks'
    },
    {
        id: '8',
        title: 'Clinical Biochemistry Track',
        description: 'Clinical diagnostics, laboratory medicine, and interpretation of biochemical tests.',
        icon: '🔬',
        category: 'academic',
        difficultyLevel: 'intermediate',
        estimatedDuration: '8 weeks'
    },
    {
        id: '9',
        title: 'Neuroscience & Neurobiology Track',
        description: 'Brain function, neural signaling, neurotransmitters, and neurological disorders.',
        icon: '🧠',
        category: 'academic',
        difficultyLevel: 'advanced',
        estimatedDuration: '12 weeks'
    },
    {
        id: '10',
        title: 'Genomics, Proteomics & Omics Track',
        description: 'High-throughput genomics, proteomics, metabolomics, and systems biology approaches.',
        icon: '🔍',
        category: 'academic',
        difficultyLevel: 'advanced',
        estimatedDuration: '12 weeks'
    },

    // INNOVATION TRACKS (4)
    {
        id: '11',
        title: 'Young Scientists Track',
        description: 'Develop research skills, scientific method, and innovation mindset for early-career scientists.',
        icon: '👨‍🔬',
        category: 'innovation',
        difficultyLevel: 'beginner',
        estimatedDuration: '6 weeks'
    },
    {
        id: '12',
        title: 'Research & Publications Track',
        description: 'Learn research methodology, academic writing, and how to publish scientific papers.',
        icon: '📚',
        category: 'innovation',
        difficultyLevel: 'intermediate',
        estimatedDuration: '8 weeks'
    },
    {
        id: '13',
        title: 'Biotech Entrepreneurship Track',
        description: 'Business fundamentals for biotech startups, commercialization, and innovation management.',
        icon: '💼',
        category: 'innovation',
        difficultyLevel: 'intermediate',
        estimatedDuration: '10 weeks'
    },
    {
        id: '14',
        title: 'Lab Skills & Instrumentation Track',
        description: 'Hands-on laboratory techniques, equipment operation, and safety protocols.',
        icon: '🧪',
        category: 'innovation',
        difficultyLevel: 'beginner',
        estimatedDuration: '6 weeks'
    },

    // COMMUNITY TRACKS (3)
    {
        id: '15',
        title: 'Science Communication Track',
        description: 'Effective communication of scientific concepts to diverse audiences and public engagement.',
        icon: '📢',
        category: 'community',
        difficultyLevel: 'beginner',
        estimatedDuration: '6 weeks'
    },
    {
        id: '16',
        title: 'Leadership & Professional Development Track',
        description: 'Leadership skills, career planning, networking, and professional growth in science.',
        icon: '🌟',
        category: 'community',
        difficultyLevel: 'beginner',
        estimatedDuration: '8 weeks'
    },
    {
        id: '17',
        title: 'Environmental & Agricultural Biochemistry Track',
        description: 'Sustainable agriculture, bioremediation, and environmental conservation through biochemistry.',
        icon: '🌱',
        category: 'community',
        difficultyLevel: 'intermediate',
        estimatedDuration: '10 weeks'
    },
];

export const mockGalleryImages = [
    'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1564325724739-bae0bd08762c?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=800',
];

export const mockUsers: User[] = [
    {
        id: 'admin-1',
        email: 'admin@jkubs.org',
        fullName: 'System Admin',
        studentId: 'ADMIN/001',
        department: 'ICT',
        yearOfStudy: 4,
        role: 'super_admin',
        joinedAt: '2023-01-01T00:00:00Z',
        verified: true,
        status: 'active',
        profile: {
            userId: 'admin-1',
            bio: 'System Administrator',
            photoUrl: 'https://ui-avatars.com/api/?name=System+Admin&background=000000&color=fff',
            duesStatus: 'current',
            location: 'Juja, Kenya'
        }
    },
    {
        id: 'lead-1',
        email: 'lead@jkubs.org',
        fullName: 'Test Track Lead',
        studentId: 'LEAD/999',
        department: 'Biochemistry',
        yearOfStudy: 3,
        role: 'track_lead',
        joinedAt: '2023-01-01T00:00:00Z',
        verified: true,
        status: 'active',
        profile: {
            userId: 'lead-1',
            bio: 'Test Track Lead Account',
            photoUrl: 'https://ui-avatars.com/api/?name=Track+Lead&background=7C3AED&color=fff',
            duesStatus: 'current',
            track: 'Biochemistry & Metabolism',
            location: 'Juja, Kenya'
        }
    },
    {
        id: '1',
        email: 'chair@jkubs.org',
        fullName: 'Shiphra Wangu',
        studentId: 'EXEC/001',
        department: 'Biochemistry',
        yearOfStudy: 4,
        role: 'executive_admin',
        position: 'Chairperson',
        joinedAt: '2023-01-01T00:00:00Z',
        verified: true,
        status: 'active',
        profile: {
            userId: '1',
            bio: 'Passionate about leadership and biochemistry. Serving as the Chairperson of JKUBS.',
            photoUrl: 'https://ui-avatars.com/api/?name=Shiphra+Wangu&background=0D8ABC&color=fff',
            duesStatus: 'current',
            track: 'Biochemistry & Metabolism',
            twitter: 'shiphra_wangu',
            linkedin: 'shiphra-wangu',
            location: 'Nairobi, Kenya'
        }
    },
    {
        id: '2',
        email: 'treasurer@jkubs.org',
        fullName: 'James Mwangi',
        studentId: 'EXEC/002',
        department: 'Microbiology',
        yearOfStudy: 3,
        role: 'executive_admin',
        position: 'Treasurer',
        joinedAt: '2023-02-15T00:00:00Z',
        verified: true,
        status: 'active',
        profile: {
            userId: '2',
            bio: 'Managing finances and ensuring transparency. Love microbiology.',
            photoUrl: 'https://ui-avatars.com/api/?name=James+Mwangi&background=10B981&color=fff',
            duesStatus: 'current',
            track: 'Microbiology & Infectious Diseases',
            location: 'Nakuru, Kenya'
        }
    },
    {
        id: '3',
        email: 'member@student.jkuat.ac.ke',
        fullName: 'Mary Wanjiru',
        studentId: 'SC200/0001/2021',
        department: 'Genomic Sciences',
        yearOfStudy: 2,
        role: 'member',
        joinedAt: '2023-09-10T00:00:00Z',
        verified: true,
        status: 'active',
        profile: {
            userId: '3',
            bio: 'Aspiring geneticist. Excited to learn more about genomics.',
            photoUrl: 'https://ui-avatars.com/api/?name=Mary+Wanjiru&background=F59E0B&color=fff',
            duesStatus: 'overdue',
            track: 'Molecular Biology & Genetics',
            location: 'Juja, Kenya'
        }
    },
    {
        id: '4',
        email: 'secretary@jkubs.org',
        fullName: 'David Kamau',
        studentId: 'EXEC/003',
        department: 'Biotechnology',
        yearOfStudy: 3,
        role: 'executive_admin',
        position: 'Secretary',
        joinedAt: '2023-03-01T00:00:00Z',
        verified: true,
        status: 'active',
        profile: {
            userId: '4',
            bio: 'Keeping records and organizing events. Biotech enthusiast.',
            photoUrl: 'https://ui-avatars.com/api/?name=David+Kamau&background=8B5CF6&color=fff',
            duesStatus: 'current',
            track: 'Biotechnology & Synthetic Biology',
            location: 'Thika, Kenya'
        }
    },
    {
        id: '12',
        email: 'lead.biochem@jkubs.org',
        fullName: 'Kevin Omondi',
        studentId: 'LEAD/002',
        department: 'Biochemistry',
        yearOfStudy: 3,
        role: 'track_lead',
        assignedTrackId: '2', // Biochemistry Core Track
        position: 'Track Lead - Biochemistry',
        joinedAt: '2023-01-01T00:00:00Z',
        verified: true,
        status: 'active',
        profile: {
            userId: '12',
            bio: 'Focusing on metabolic pathways and enzymology. Exploring enzyme kinetics in metabolic disorders.',
            photoUrl: 'https://ui-avatars.com/api/?name=Kevin+Omondi&background=059669',
            duesStatus: 'current',
            track: 'Biochemistry & Metabolism',
            twitter: 'kevin_biochem',
            linkedin: 'kevin-omondi-biochem',
            location: 'Juja, Kenya'
        }
    },
    {
        id: '13',
        email: 'lead.micro@jkubs.org',
        fullName: 'Grace Wanjiku',
        studentId: 'LEAD/003',
        department: 'Microbiology',
        yearOfStudy: 4,
        role: 'track_lead',
        assignedTrackId: '3', // Microbiology & Immunology Track
        position: 'Track Lead - Microbiology',
        joinedAt: '2023-01-01T00:00:00Z',
        verified: true,
        status: 'active',
        profile: {
            userId: '13',
            bio: 'Investigating antibiotic resistance in local pathogens. Working on novel antimicrobial compounds from medicinal plants.',
            photoUrl: 'https://ui-avatars.com/api/?name=Grace+Wanjiku&background=DC2626',
            duesStatus: 'current',
            track: 'Microbiology & Infectious Diseases',
            twitter: 'grace_microbe',
            linkedin: 'grace-wanjiku-micro',
            location: 'Nairobi, Kenya'
        }
    },
    {
        id: '14',
        email: 'lead.biotech@jkubs.org',
        fullName: 'Brian Kipkorir',
        studentId: 'LEAD/004',
        department: 'Biotechnology',
        yearOfStudy: 3,
        role: 'track_lead',
        assignedTrackId: '7', // Biotechnology & Industrial Bioprocess Track
        position: 'Track Lead - Biotechnology',
        joinedAt: '2023-01-01T00:00:00Z',
        verified: true,
        status: 'active',
        profile: {
            userId: '14',
            bio: 'Developing synthetic biology tools for agriculture. Creating drought-resistant crop varieties using bioengineering.',
            photoUrl: 'https://ui-avatars.com/api/?name=Brian+Kipkorir&background=EA580C',
            duesStatus: 'current',
            track: 'Biotechnology & Synthetic Biology',
            linkedin: 'brian-kipkorir',
            github: 'bkipkorir',
            location: 'Eldoret, Kenya'
        }
    },
    {
        id: '15',
        email: 'lead.bioinf@jkubs.org',
        fullName: 'Ian Njoroge',
        studentId: 'LEAD/005',
        department: 'Computer Science',
        yearOfStudy: 4,
        role: 'track_lead',
        assignedTrackId: '4', // Bioinformatics & Computational Biology Track
        position: 'Track Lead - Bioinformatics',
        joinedAt: '2023-01-01T00:00:00Z',
        verified: true,
        status: 'active',
        profile: {
            userId: '15',
            bio: 'Applying ML algorithms to genomic data. Building tools for disease prediction using bioinformatics.',
            photoUrl: 'https://ui-avatars.com/api/?name=Ian+Njoroge&background=7C3AED',
            duesStatus: 'current',
            track: 'Bioinformatics & Computational Biology',
            twitter: 'ian_bioinf',
            linkedin: 'ian-njoroge-bioinf',
            github: 'injoroge',
            location: 'Nairobi, Kenya'
        }
    },
    {
        id: '16',
        email: 'lead.cancer@jkubs.org',
        fullName: 'Linda Achieng',
        studentId: 'LEAD/006',
        department: 'Biochemistry',
        yearOfStudy: 4,
        role: 'track_lead',
        assignedTrackId: '5', // Cancer Biology & Molecular Medicine Track
        position: 'Track Lead - Cancer Biology',
        joinedAt: '2023-01-01T00:00:00Z',
        verified: true,
        status: 'active',
        profile: {
            userId: '16',
            bio: 'Researching novel biomarkers for early cancer detection. Passionate about precision medicine and personalized treatments.',
            photoUrl: 'https://ui-avatars.com/api/?name=Linda+Achieng&background=EC4899',
            duesStatus: 'current',
            track: 'Cancer Biology & Precision Medicine',
            twitter: 'linda_cancer_res',
            linkedin: 'linda-achieng',
            location: 'Kisumu, Kenya'
        }
    },
    {
        id: '17',
        email: 'lead.pharma@jkubs.org',
        fullName: 'Samuel Kamau',
        studentId: 'LEAD/007',
        department: 'Pharmacy',
        yearOfStudy: 3,
        role: 'track_lead',
        assignedTrackId: '6', // Pharmaceutical Biochemistry Track
        position: 'Track Lead - Pharmaceutical Biochemistry',
        joinedAt: '2023-01-01T00:00:00Z',
        verified: true,
        status: 'active',
        profile: {
            userId: '17',
            bio: 'Studying ethnopharmacology and drug safety. Researching traditional herbal medicines for modern drug development.',
            photoUrl: 'https://ui-avatars.com/api/?name=Samuel+Kamau&background=0891B2',
            duesStatus: 'current',
            track: 'Pharmacology, Drug Discovery & Toxicology',
            twitter: 'sam_pharma',
            linkedin: 'samuel-kamau-pharma',
            location: 'Nairobi, Kenya'
        }
    },
    {
        id: '18',
        email: 'lead.diag@jkubs.org',
        fullName: 'Mercy Chebet',
        studentId: 'LEAD/008',
        department: 'Medical Lab Science',
        yearOfStudy: 4,
        role: 'track_lead',
        assignedTrackId: '8', // Clinical Biochemistry Track
        position: 'Track Lead - Clinical Biochemistry',
        joinedAt: '2023-01-01T00:00:00Z',
        verified: true,
        status: 'active',
        profile: {
            userId: '18',
            bio: 'Improving diagnostic accuracy for tropical diseases. Working on rapid diagnostic tests for malaria and tuberculosis.',
            photoUrl: 'https://ui-avatars.com/api/?name=Mercy+Chebet&background=F59E0B',
            duesStatus: 'current',
            track: 'Medical Diagnostics & Clinical Laboratory Science',
            linkedin: 'mercy-chebet-mls',
            location: 'Nakuru, Kenya'
        }
    },
    {
        id: '19',
        email: 'lead.env@jkubs.org',
        fullName: 'David Mutua',
        studentId: 'LEAD/009',
        department: 'Biochemistry',
        yearOfStudy: 3,
        role: 'track_lead',
        assignedTrackId: '17', // Environmental & Agricultural Biochemistry Track
        position: 'Track Lead - Environmental Biochemistry',
        joinedAt: '2023-01-01T00:00:00Z',
        verified: true,
        status: 'active',
        profile: {
            userId: '19',
            bio: 'Bioremediation of industrial effluents. Developing microbial solutions for pollution cleanup and environmental restoration.',
            photoUrl: 'https://ui-avatars.com/api/?name=David+Mutua&background=059669',
            duesStatus: 'current',
            track: 'Environmental & Industrial Biochemistry',
            twitter: 'david_enviro',
            linkedin: 'david-mutua-env',
            github: 'dmutua',
            location: 'Machakos, Kenya'
        }
    },
    {
        id: '20',
        email: 'lead.healthtech@jkubs.org',
        fullName: 'Faith Kananu',
        studentId: 'LEAD/010',
        department: 'Biomedical Engineering',
        yearOfStudy: 4,
        role: 'track_lead',
        assignedTrackId: '9', // Neuroscience & Neurobiology Track (Health Tech)
        position: 'Track Lead - Health Technology',
        joinedAt: '2023-01-01T00:00:00Z',
        verified: true,
        status: 'active',
        profile: {
            userId: '20',
            bio: 'Designing low-cost medical devices. Creating accessible healthcare technology for underserved communities.',
            photoUrl: 'https://ui-avatars.com/api/?name=Faith+Kananu&background=0B5FFF',
            duesStatus: 'current',
            track: 'Health Technology, & Biomedical Engineering',
            twitter: 'faith_healthtech',
            linkedin: 'faith-kananu',
            github: 'fkananu',
            location: 'Nairobi, Kenya'
        }
    }
];

export const mockEvents: Event[] = [
    {
        id: '1',
        title: 'Biochemistry Research Symposium 2025',
        description: 'Annual research symposium featuring student presentations, keynote speeches from industry experts, and networking opportunities. Join us for a day of learning and innovation!',
        startAt: '2025-12-15T09:00:00Z',
        endAt: '2025-12-15T17:00:00Z',
        location: 'JKUAT Main Auditorium',
        capacity: 200,
        createdBy: '1',
        status: 'published',
        rsvpCount: 87,
        attendeeCount: 0,
        eventType: 'Conference',
    },
    {
        id: '2',
        title: 'Lab Safety Workshop',
        description: 'Mandatory workshop covering essential laboratory safety protocols, chemical handling, and emergency procedures.',
        startAt: '2025-12-05T14:00:00Z',
        endAt: '2025-12-05T16:00:00Z',
        location: 'Chemistry Lab Block B',
        capacity: 50,
        createdBy: '4',
        status: 'published',
        rsvpCount: 42,
        attendeeCount: 0,
        eventType: 'Workshop',
    },
    {
        id: '3',
        title: 'JKUBS General Meeting',
        description: 'General body meeting to discuss semester plans, treasury report, and upcoming events. All members are encouraged to attend.',
        startAt: '2025-11-30T16:00:00Z',
        endAt: '2025-11-30T18:00:00Z',
        location: 'Lecture Hall 5',
        capacity: 100,
        createdBy: '1',
        status: 'published',
        rsvpCount: 65,
        attendeeCount: 58,
        eventType: 'Meetup',
    },
    {
        id: '4',
        title: 'Career Mentorship Program',
        description: 'Connect with alumni working in pharmaceutical, research, and biotech industries. Learn about career paths and opportunities.',
        startAt: '2026-01-20T15:00:00Z',
        endAt: '2026-01-20T18:00:00Z',
        location: 'Virtual (Zoom)',
        createdBy: '2',
        status: 'draft',
        rsvpCount: 12,
        attendeeCount: 0,
        eventType: 'Workshop',
    },
];

export const mockPayments: Payment[] = [
    {
        id: '1',
        userId: '1',
        amount: 500,
        currency: 'KES',
        method: 'mpesa',
        reference: 'QWE123RTY456',
        status: 'completed',
        createdAt: '2024-09-10T10:30:00Z',
    },
    {
        id: '2',
        userId: '2',
        amount: 500,
        currency: 'KES',
        method: 'mpesa',
        reference: 'ASD789FGH012',
        status: 'completed',
        createdAt: '2024-09-12T14:20:00Z',
    },
    {
        id: '3',
        userId: '3',
        amount: 500,
        currency: 'KES',
        method: 'manual',
        reference: 'PENDING-003',
        status: 'pending',
        createdAt: '2024-11-01T09:15:00Z',
    },
    {
        id: '4',
        userId: '4',
        amount: 500,
        currency: 'KES',
        method: 'bank',
        reference: 'BANK345XYZ',
        status: 'completed',
        createdAt: '2024-09-08T11:45:00Z',
    },
];

export const mockCommittees: Committee[] = [
    {
        id: '1',
        name: 'Executive Committee',
        description: 'Main governing body of JKUBS responsible for strategic decisions and leadership.',
        chairId: '1',
        memberCount: 5,
    },
    {
        id: '2',
        name: 'Academic Affairs',
        description: 'Organizes academic workshops, seminars, and study groups for members.',
        chairId: '4',
        memberCount: 8,
    },
    {
        id: '3',
        name: 'Social & Welfare',
        description: 'Plans social events, team building activities, and supports member welfare.',
        chairId: '2',
        memberCount: 6,
    },
];

export const mockAnnouncements: Announcement[] = [
    {
        id: '1',
        title: 'Dues Payment Reminder',
        body: 'Kindly pay your semester dues of KES 500 by December 1st to maintain active membership status. Payment can be made via M-PESA or bank transfer.',
        publishedBy: '2',
        publishedAt: '2024-11-20T08:00:00Z',
        pinned: true,
        author: {
            id: '2',
            email: 'treasurer@jkubs.org',
            fullName: 'James Mwangi',
            studentId: 'EXEC/002',
            department: 'Microbiology',
            yearOfStudy: 3,
            role: 'executive_admin',
            position: 'Treasurer',
            joinedAt: '2023-02-15T00:00:00Z',
            verified: true,
            status: 'active'
        }
    },
    {
        id: '2',
        title: 'Research Symposium Registration Open',
        body: 'Registration for the Annual Biochemistry Research Symposium is now open! Submit your abstract by November 30th. Limited slots available.',
        publishedBy: '1',
        publishedAt: '2024-11-15T12:00:00Z',
        pinned: true,
        author: {
            id: '1',
            email: 'chair@jkubs.org',
            fullName: 'Shiphra Wangu',
            studentId: 'EXEC/001',
            department: 'Biochemistry',
            yearOfStudy: 4,
            role: 'executive_admin',
            position: 'Chairman',
            joinedAt: '2023-01-01T00:00:00Z',
            verified: true,
            status: 'active'
        }
    },
    {
        id: '3',
        title: 'New Lab Equipment Arrival',
        body: 'We are excited to announce the arrival of new spectrophotometers and centrifuges in the main lab. Training sessions will be scheduled next week.',
        publishedBy: '4',
        publishedAt: '2024-11-10T14:30:00Z',
        pinned: false,
        author: {
            id: '4',
            email: 'secretary@jkubs.org',
            fullName: 'David Kamau',
            studentId: 'EXEC/003',
            department: 'Biotechnology',
            yearOfStudy: 3,
            role: 'executive_admin',
            position: 'Secretary',
            joinedAt: '2023-03-01T00:00:00Z',
            verified: true,
            status: 'active'
        }
    },
];

export const mockDashboardStats: DashboardStats = {
    totalMembers: 124,
    activeMembers: 98,
    upcomingEvents: 3,
    duesCollected: 49000,
    pendingPayments: 13,
    recentAnnouncements: 3,
};

// Current logged-in user (can be changed for testing different roles)
export let currentUser: User = mockUsers[0]; // Default to admin

export const setCurrentUser = (user: User) => {
    currentUser = user;
};

export const loginUser = (email: string, password: string): User | null => {
    // Mock authentication - in production, this would call an API
    const user = mockUsers.find(u => u.email === email);
    if (user) {
        currentUser = user;
        return user;
    }
    return null;
};

export const logoutUser = () => {
    currentUser = mockUsers[0];
};

export const mockSponsors = [
    {
        id: '1',
        name: 'Google for Developers',
        logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Google_Developers_logo.svg/2560px-Google_Developers_logo.svg.png',
        website: 'https://developers.google.com'
    },
    {
        id: '2',
        name: 'JKUAT',
        logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Jomo_Kenyatta_University_of_Agriculture_and_Technology_Logo.png',
        website: 'http://www.jkuat.ac.ke'
    },
    {
        id: '3',
        name: 'Science Africa',
        logoUrl: 'https://placehold.co/200x80/e2e8f0/1e293b?text=Science+Africa',
        website: '#'
    }
];
