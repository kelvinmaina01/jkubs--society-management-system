import { motion } from 'framer-motion';
import { mockUsers } from '../../mockData';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const TeamPage = () => {
    // Filter for Executive Committee
    const execTeam = mockUsers.filter(user =>
        user.role === 'executive_admin' ||
        ['chairman', 'secretary', 'treasurer'].includes(user.role)
    );

    // Filter for Track Leads
    const trackLeads = mockUsers.filter(user => user.role === 'track_lead');

    const TeamMemberCard = ({ member, role }: { member: any, role?: string }) => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card group hover:shadow-xl transition-all duration-300 text-center p-6"
        >
            <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 animate-pulse group-hover:animate-none transition-all" />
                <img
                    src={member.profile?.photoUrl || `https://ui-avatars.com/api/?name=${member.fullName}&background=random`}
                    alt={member.fullName}
                    className="w-full h-full rounded-full object-cover relative z-10 border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-300"
                />
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-1">{member.fullName}</h3>
            <p className="text-primary-blue font-medium text-sm mb-4">{member.position || role || 'Team Member'}</p>

            {member.profile?.bio && (
                <p className="text-slate-600 text-sm mb-6 line-clamp-3">
                    {member.profile.bio}
                </p>
            )}

            <div className="flex justify-center gap-4">
                {member.profile?.linkedin && (
                    <a href={`https://linkedin.com/in/${member.profile.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#0077b5] transition-colors">
                        <Linkedin className="w-5 h-5" />
                    </a>
                )}
                {member.profile?.twitter && (
                    <a href={`https://twitter.com/${member.profile.twitter}`} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#1DA1F2] transition-colors">
                        <Twitter className="w-5 h-5" />
                    </a>
                )}
                <a href={`mailto:${member.email}`} className="text-slate-400 hover:text-red-500 transition-colors">
                    <Mail className="w-5 h-5" />
                </a>
            </div>
        </motion.div>
    );

    return (
        <div className="min-h-screen bg-slate-50 pt-20 pb-20">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="heading-lg mb-6">Meet Our Team</h1>
                    <p className="text-slate-600 text-lg">
                        The dedicated students working behind the scenes to make JKUBS a vibrant community
                        for biochemistry and biotechnology excellence.
                    </p>
                </div>

                {/* Executive Committee Section */}
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="h-px bg-slate-200 flex-grow"></div>
                        <h2 className="text-2xl font-bold text-slate-800 uppercase tracking-wider">Executive Committee</h2>
                        <div className="h-px bg-slate-200 flex-grow"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {execTeam.map((member) => (
                            <TeamMemberCard key={member.id} member={member} />
                        ))}
                    </div>
                </div>

                {/* Track Leads Section */}
                <div>
                    <div className="flex items-center gap-4 mb-10">
                        <div className="h-px bg-slate-200 flex-grow"></div>
                        <h2 className="text-2xl font-bold text-slate-800 uppercase tracking-wider">Track Leads</h2>
                        <div className="h-px bg-slate-200 flex-grow"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {trackLeads.map((member) => (
                            <TeamMemberCard
                                key={member.id}
                                member={member}
                                role={member.assignedTrackId ? `Lead: ${mockUsers.find(u => u.id === member.id)?.profile?.track || 'Track Lead'}` : 'Track Lead'}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamPage;
