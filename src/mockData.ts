// Mock data for JKUBS Society Management System
import type { User, Event, Payment, Committee, Announcement, DashboardStats, Track } from './types';

export const mockTracks: Track[] = [
    { id: '1', title: 'Molecular Biology & Genetics', description: 'Exploring the fundamental mechanisms of life at the molecular level.', icon: '🧬' },
    { id: '2', title: 'Biochemistry & Metabolism', description: 'Studying chemical processes within and relating to living organisms.', icon: '⚗️' },
    { id: '3', title: 'Microbiology & Infectious Diseases', description: 'Investigating microscopic organisms and their impact on health.', icon: '🦠' },
    { id: '4', title: 'Biotechnology & Synthetic Biology', description: 'Engineering biological systems for useful purposes.', icon: '⚙️' },
    { id: '5', title: 'Bioinformatics & Computational Biology', description: 'Applying computational techniques to analyze biological data.', icon: '💻' },
    { id: '6', title: 'Cancer Biology & Precision Medicine', description: 'Understanding cancer development and targeted therapies.', icon: '🎗️' },
    { id: '7', title: 'Pharmacology, Drug Discovery & Toxicology', description: 'Study of drug action and development of new therapeutics.', icon: '💊' },
    { id: '8', title: 'Medical Diagnostics & Clinical Lab Science', description: 'Techniques for diagnosing diseases in clinical settings.', icon: '🔬' },
    { id: '9', title: 'Environmental & Industrial Biochemistry', description: 'Biochemical approaches to environmental and industrial challenges.', icon: '🌱' },
    { id: '10', title: 'Health Tech & Biomedical Engineering', description: 'Intersection of technology and healthcare.', icon: '🏥' },
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
        id: '1',
        email: 'shiphra.wangu@student.jkuat.ac.ke',
        fullName: 'Shiphra Wangu',
        studentId: 'BIO/2021/001',
        department: 'Biochemistry',
        yearOfStudy: 3,
        role: 'chairman',
        joinedAt: '2023-09-01T00:00:00Z',
        verified: true,
        profile: {
            userId: '1',
            phone: '+254712345678',
            bio: 'Chairperson of JKUBS. Leading the society to new heights.',
            photoUrl: 'https://ui-avatars.com/api/?name=Shiphra+Wangu&background=0D8ABC&color=fff',
            duesStatus: 'current',
        },
    },
    {
        id: '2',
        email: 'james.mwangi@student.jkuat.ac.ke',
        fullName: 'James Mwangi',
        studentId: 'BIO/2022/015',
        department: 'Biochemistry',
        yearOfStudy: 2,
        role: 'treasurer',
        joinedAt: '2023-09-05T00:00:00Z',
        verified: true,
        profile: {
            userId: '2',
            phone: '+254723456789',
            bio: 'Treasurer. Managing society finances and dues.',
            photoUrl: 'https://ui-avatars.com/api/?name=James+Mwangi&background=F59E0B&color=fff',
            duesStatus: 'current',
        },
    },
    {
        id: '3',
        email: 'peter.otieno@student.jkuat.ac.ke',
        fullName: 'Peter Otieno',
        studentId: 'BIO/2021/028',
        department: 'Biochemistry',
        yearOfStudy: 3,
        role: 'secretary',
        joinedAt: '2023-09-03T00:00:00Z',
        verified: true,
        profile: {
            userId: '3',
            phone: '+254745678901',
            bio: 'Secretary. Handling correspondence and records.',
            photoUrl: 'https://ui-avatars.com/api/?name=Peter+Otieno&background=10B981&color=fff',
            duesStatus: 'current',
        },
    },
    {
        id: '4',
        email: 'mary.wanjiru@student.jkuat.ac.ke',
        fullName: 'Mary Wanjiru',
        studentId: 'BIO/2023/042',
        department: 'Biochemistry',
        yearOfStudy: 1,
        role: 'member',
        joinedAt: '2024-09-01T00:00:00Z',
        verified: true,
        profile: {
            userId: '4',
            phone: '+254734567890',
            duesStatus: 'overdue',
            photoUrl: 'https://ui-avatars.com/api/?name=Mary+Wanjiru&background=EF4444&color=fff',
        },
    },
    // Track Leads
    {
        id: '11',
        email: 'lead.molbio@jkubs.org',
        fullName: 'Dr. Sarah Kimani',
        studentId: 'LEAD/001',
        department: 'Biochemistry',
        yearOfStudy: 4,
        role: 'committee',
        joinedAt: '2023-01-01T00:00:00Z',
        verified: true,
        profile: {
            userId: '11',
            bio: 'Passionate about DNA replication and repair mechanisms. Research focus on CRISPR gene editing and its applications in disease treatment.',
            photoUrl: 'https://ui-avatars.com/api/?name=Sarah+Kimani&background=4F46E5',
            duesStatus: 'current',
            track: 'Molecular Biology & Genetics',
            twitter: 'sarahkimani_bio',
            linkedin: 'sarah-kimani',
            github: 'skimani',
            location: 'Nairobi, Kenya'
        }
    },
    {
        id: '12',
        email: 'lead.biochem@jkubs.org',
        fullName: 'Kevin Omondi',
        studentId: 'LEAD/002',
        department: 'Biochemistry',
        yearOfStudy: 3,
        role: 'committee',
        joinedAt: '2023-01-01T00:00:00Z',
        verified: true,
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
        role: 'committee',
        joinedAt: '2023-01-01T00:00:00Z',
        verified: true,
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
        role: 'committee',
        joinedAt: '2023-01-01T00:00:00Z',
        verified: true,
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
        role: 'committee',
        joinedAt: '2023-01-01T00:00:00Z',
        verified: true,
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
        role: 'committee',
        joinedAt: '2023-01-01T00:00:00Z',
        verified: true,
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
        role: 'committee',
        joinedAt: '2023-01-01T00:00:00Z',
        verified: true,
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
        role: 'committee',
        joinedAt: '2023-01-01T00:00:00Z',
        verified: true,
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
        role: 'committee',
        joinedAt: '2023-01-01T00:00:00Z',
        verified: true,
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
        role: 'committee',
        joinedAt: '2023-01-01T00:00:00Z',
        verified: true,
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
    },
    {
        id: '2',
        title: 'Research Symposium Registration Open',
        body: 'Registration for the Annual Biochemistry Research Symposium is now open! Submit your abstract by November 30th. Limited slots available.',
        publishedBy: '1',
        publishedAt: '2024-11-15T12:00:00Z',
        pinned: true,
    },
    {
        id: '3',
        title: 'New Lab Equipment Arrival',
        body: 'We are excited to announce the arrival of new spectrophotometers and centrifuges in the main lab. Training sessions will be scheduled next week.',
        publishedBy: '4',
        publishedAt: '2024-11-10T14:30:00Z',
        pinned: false,
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
