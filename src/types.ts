// Type definitions for JKUBS Society Management System

export type UserRole = 'member' | 'committee' | 'admin' | 'chairman' | 'secretary' | 'treasurer' | 'research_lead' | 'mentorship_lead' | 'outreach_lead';

export type MembershipStatus = 'current' | 'overdue' | 'none';

export type EventStatus = 'draft' | 'published' | 'cancelled' | 'completed';

export type RSVPStatus = 'attending' | 'maybe' | 'declined';

export type PaymentMethod = 'manual' | 'mpesa' | 'card' | 'bank';

export type PaymentStatus = 'pending' | 'completed' | 'failed';

export interface User {
    id: string;
    email: string;
    fullName: string;
    studentId: string;
    department: string;
    yearOfStudy: number;
    role: UserRole;
    joinedAt: string;
    verified: boolean;
    profile?: UserProfile;
}

export interface UserProfile {
    userId: string;
    phone?: string;
    bio?: string;
    photoUrl?: string;
    duesStatus: MembershipStatus;
    emergencyContact?: string;
    track?: string;
    twitter?: string;
    linkedin?: string;
    github?: string;
    location?: string;
}

export interface Track {
    id: string;
    title: string;
    description: string;
    icon: string;
}

export interface Event {
    id: string;
    title: string;
    description: string;
    startAt: string;
    endAt: string;
    location: string;
    capacity?: number;
    createdBy: string;
    status: EventStatus;
    imageUrl?: string;
    rsvpCount?: number;
    attendeeCount?: number;
    eventType?: 'Workshop' | 'Study Group' | 'Meetup' | 'Conference' | 'Social';
}

export interface RSVP {
    id: string;
    eventId: string;
    userId: string;
    status: RSVPStatus;
    checkedInAt?: string;
    user?: User;
}

export interface Payment {
    id: string;
    userId: string;
    amount: number;
    currency: string;
    method: PaymentMethod;
    reference: string;
    status: PaymentStatus;
    createdAt: string;
    user?: User;
}

export interface Committee {
    id: string;
    name: string;
    description: string;
    chairId: string;
    memberCount?: number;
    chair?: User;
}

export interface CommitteeMember {
    id: string;
    committeeId: string;
    userId: string;
    role: string;
    user?: User;
}

export interface Announcement {
    id: string;
    title: string;
    body: string;
    publishedBy: string;
    publishedAt: string;
    pinned: boolean;
    author?: User;
}

export interface Document {
    id: string;
    title: string;
    fileUrl: string;
    uploadedBy: string;
    tags: string[];
    uploadedAt: string;
    uploader?: User;
}

export interface Election {
    id: string;
    title: string;
    description: string;
    startAt: string;
    endAt: string;
    createdBy: string;
    resultsPublished: boolean;
    totalVotes?: number;
}

export interface DashboardStats {
    totalMembers: number;
    activeMembers: number;
    upcomingEvents: number;
    duesCollected: number;
    pendingPayments: number;
    recentAnnouncements: number;
}
