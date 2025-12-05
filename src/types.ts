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
    eventType?: 'Workshop' | 'Study Group' | 'Meetup' | 'Conference' | 'Social' | 'Field Visit' | 'Info Session' | 'Seminar' | 'Networking' | 'Hackathon' | 'Career Fair' | 'Lecture';
    price?: number;
    currency?: string;
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
    type?: 'dues' | 'event' | 'donation' | 'other';
    method: PaymentMethod;
    reference: string;
    status: PaymentStatus;
    createdAt: string;
    eventId?: string;
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

// Student Stories - Success stories and achievements
export interface Story {
    id: string;
    title: string;
    studentName: string;
    studentId?: string;
    achievement: string;
    story: string;
    tags: string[];
    photoUrl?: string;
    publishedAt: string;
    featured?: boolean;
}

// Track Enrollment System
export interface TrackEnrollment {
    id: string;
    userId: string;
    trackId: string;
    enrolledAt: string;
    status: 'active' | 'completed' | 'dropped';
    progress: number; // 0-100
    completedModules: string[]; // Array of module IDs
    user?: User;
    track?: Track;
}

// Track Modules/Content System
export interface TrackModule {
    id: string;
    trackId: string;
    title: string;
    description: string;
    content: string; // Rich text/markdown content
    order: number;
    duration?: string; // e.g., "2 hours"
    resources?: ModuleResource[];
    quiz?: Quiz;
    published: boolean;
    createdAt: string;
}

export interface ModuleResource {
    id: string;
    title: string;
    type: 'video' | 'pdf' | 'link' | 'file';
    url: string;
    description?: string;
}

export interface Quiz {
    id: string;
    moduleId: string;
    questions: QuizQuestion[];
    passingScore: number; // e.g., 70
}

export interface QuizQuestion {
    id: string;
    question: string;
    options: string[];
    correctAnswer: number; // Index of correct option
    explanation?: string;
}

// Module Progress Tracking
export interface ModuleProgress {
    id: string;
    enrollmentId: string;
    moduleId: string;
    userId: string;
    status: 'not_started' | 'in_progress' | 'completed';
    completedAt?: string;
    quizScore?: number;
    timeSpent?: number; // minutes
}

