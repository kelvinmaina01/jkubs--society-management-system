// Type definitions for JKUBS Society Management System

// New role system for three-tier architecture
export type UserRole = 'super_admin' | 'executive_admin' | 'track_lead' | 'event_coordinator' | 'member';

export type MembershipStatus = 'current' | 'overdue' | 'none';

export type EventStatus = 'draft' | 'published' | 'cancelled' | 'completed';

export type RSVPStatus = 'attending' | 'maybe' | 'declined';

export type PaymentMethod = 'manual' | 'mpesa' | 'card' | 'bank';

export type PaymentStatus = 'pending' | 'completed' | 'failed';

export type TrackCategory = 'academic' | 'innovation' | 'community';

export type BadgeType = 'track_completion' | 'event_attendance' | 'leadership' | 'contribution';

export type CertificateType = 'track_completion' | 'event_participation' | 'workshop_completion';

export interface User {
    id: string;
    email: string;
    fullName: string;
    studentId: string;
    department: string;
    yearOfStudy: number;
    role: UserRole;
    position?: string; // Executive titles: Chairman, Treasurer, Secretary, etc.
    assignedTrackId?: string; // For track leads - which track they manage
    joinedAt: string;
    verified: boolean;
    status: 'pending' | 'active' | 'suspended' | 'rejected';
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
    category: TrackCategory;
    leadId?: string;
    enrollmentCount?: number;
    contentCount?: number;
    difficultyLevel?: 'beginner' | 'intermediate' | 'advanced';
    estimatedDuration?: string; // e.g., "8 weeks"
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

// Track System Interfaces
export interface TrackEnrollment {
    id: string;
    trackId: string;
    userId: string;
    enrolledAt: string;
    status: 'active' | 'completed' | 'paused' | 'withdrawn';
    progress: number; // 0-100
    completedAt?: string;
    track?: Track;
    user?: User;
}

export interface TrackContent {
    id: string;
    trackId: string;
    title: string;
    description: string;
    contentType: 'lesson' | 'challenge' | 'resource' | 'quiz';
    order: number;
    duration?: number; // minutes
    createdBy: string;
    createdAt: string;
    track?: Track;
}

export interface TrackProgress {
    id: string;
    enrollmentId: string;
    contentId: string;
    userId: string;
    completedAt?: string;
    status: 'not_started' | 'in_progress' | 'completed';
    score?: number;
}

// Badge System
export interface Badge {
    id: string;
    title: string;
    description: string;
    icon: string;
    badgeType: BadgeType;
    requirements: string;
    trackId?: string;
}

export interface UserBadge {
    id: string;
    userId: string;
    badgeId: string;
    earnedAt: string;
    badge?: Badge;
    user?: User;
}

// Certificate System
export interface Certificate {
    id: string;
    title: string;
    userId: string;
    certificateType: CertificateType;
    issuedAt: string;
    trackId?: string;
    eventId?: string;
    certificateUrl?: string;
    verificationCode: string;
    user?: User;
    track?: Track;
    event?: Event;
}
