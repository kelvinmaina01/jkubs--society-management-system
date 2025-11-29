// Mock data for JKUBS Society Management System
import type { User, Event, Payment, Committee, Announcement, DashboardStats } from './types';

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
    {
        id: '5',
        email: 'alice.wamaitha@student.jkuat.ac.ke',
        fullName: 'Alice Wamaitha',
        studentId: 'BIO/2021/055',
        department: 'Biochemistry',
        yearOfStudy: 4,
        role: 'research_lead',
        joinedAt: '2022-02-10T09:00:00Z',
        verified: true,
        profile: {
            userId: '5',
            bio: 'Research Lead. Spearheading our journal club and lab projects.',
            photoUrl: 'https://ui-avatars.com/api/?name=Alice+Wamaitha&background=8B5CF6&color=fff',
            duesStatus: 'current'
        }
    },
    {
        id: '6',
        email: 'john.kamau@student.jkuat.ac.ke',
        fullName: 'John Kamau',
        studentId: 'BIO/2021/066',
        department: 'Molecular Biology',
        yearOfStudy: 3,
        role: 'mentorship_lead',
        joinedAt: '2022-03-15T11:00:00Z',
        verified: true,
        profile: {
            userId: '6',
            bio: 'Mentorship Lead. Connecting students with alumni and industry mentors.',
            photoUrl: 'https://ui-avatars.com/api/?name=John+Kamau&background=EC4899&color=fff',
            duesStatus: 'current'
        }
    },
    {
        id: '7',
        email: 'sarah.njoroge@student.jkuat.ac.ke',
        fullName: 'Sarah Njoroge',
        studentId: 'BIO/2022/077',
        department: 'Biochemistry',
        yearOfStudy: 2,
        role: 'outreach_lead',
        joinedAt: '2023-05-20T10:00:00Z',
        verified: true,
        profile: {
            userId: '7',
            bio: 'Outreach Lead. Coordinating community service and high school visits.',
            photoUrl: 'https://ui-avatars.com/api/?name=Sarah+Njoroge&background=14B8A6&color=fff',
            duesStatus: 'current'
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
