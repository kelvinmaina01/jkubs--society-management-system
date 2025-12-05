import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Building2, Calendar, Camera, Save, X } from 'lucide-react';
import { useAuth, useNotification } from '../../contexts';

const MemberProfile = () => {
    const { user } = useAuth();
    const { success } = useNotification();
    const [isEditing, setIsEditing] = useState(false);

    // Form state
    const [fullName, setFullName] = useState(user?.fullName || '');
    const [phone, setPhone] = useState(user?.profile?.phone || '');
    const [bio, setBio] = useState(user?.profile?.bio || '');

    const [location, setLocation] = useState(user?.profile?.location || '');
    const [twitter, setTwitter] = useState(user?.profile?.twitter || '');
    const [linkedin, setLinkedin] = useState(user?.profile?.linkedin || '');

    const handleSave = () => {
        // In real app, this would call an API
        success('Profile Updated', 'Your profile has been saved successfully');
        setIsEditing(false);
    };

    const handleCancel = () => {
        // Reset form
        setFullName(user?.fullName || '');
        setPhone(user?.profile?.phone || '');
        setBio(user?.profile?.bio || '');
        setLocation(user?.profile?.location || '');
        setTwitter(user?.profile?.twitter || '');
        setLinkedin(user?.profile?.linkedin || '');
        setIsEditing(false);
    };

    if (!user) return null;

    return (
        <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
            {/* Header */}
            <div style={{ marginBottom: '32px' }}>
                <h1 style={{ fontSize: '32px', fontWeight: '700', color: '#111827', marginBottom: '8px' }}>
                    My Profile
                </h1>
                <p style={{ color: '#6B7280' }}>
                    Manage your personal information and preferences
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '350px 1fr', gap: '32px' }}>
                {/* Left Column - Avatar & Quick Info */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{
                            background: 'white',
                            border: '1px solid #E5E7EB',
                            borderRadius: '12px',
                            padding: '32px',
                            textAlign: 'center'
                        }}
                    >
                        {/* Avatar */}
                        <div style={{ position: 'relative', display: 'inline-block', marginBottom: '24px' }}>
                            <div style={{
                                width: '120px',
                                height: '120px',
                                borderRadius: '50%',
                                background: 'linear-gradient(135deg, #1A73E8 0%, #0B5FFF 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '48px',
                                fontWeight: '700',
                                color: 'white',
                                border: '4px solid white',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                            }}>
                                {user.fullName.charAt(0)}
                            </div>
                            <button style={{
                                position: 'absolute',
                                bottom: '0',
                                right: '0',
                                width: '36px',
                                height: '36px',
                                borderRadius: '50%',
                                background: '#1A73E8',
                                border: '2px solid white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                color: 'white'
                            }}>
                                <Camera size={18} />
                            </button>
                        </div>

                        <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#111827', marginBottom: '4px' }}>
                            {user.fullName}
                        </h2>
                        <p style={{ fontSize: '14px', color: '#6B7280', marginBottom: '8px' }}>
                            {user.email}
                        </p>
                        <span style={{
                            display: 'inline-block',
                            padding: '4px 12px',
                            background: '#DBEAFE',
                            color: '#1E40AF',
                            borderRadius: '12px',
                            fontSize: '12px',
                            fontWeight: '600',
                            textTransform: 'capitalize'
                        }}>
                            {user.role.replace('_', ' ')}
                        </span>

                        <hr style={{ margin: '24px 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

                        {/* Quick Stats */}
                        <div style={{ textAlign: 'left' }}>
                            <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <Building2 size={18} color="#6B7280" />
                                <div>
                                    <p style={{ fontSize: '12px', color: '#9CA3AF', margin: 0 }}>Department</p>
                                    <p style={{ fontSize: '14px', fontWeight: '500', color: '#111827', margin: 0 }}>
                                        {user.department}
                                    </p>
                                </div>
                            </div>
                            <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <Calendar size={18} color="#6B7280" />
                                <div>
                                    <p style={{ fontSize: '12px', color: '#9CA3AF', margin: 0 }}>Year of Study</p>
                                    <p style={{ fontSize: '14px', fontWeight: '500', color: '#111827', margin: 0 }}>
                                        Year {user.yearOfStudy}
                                    </p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <User size={18} color="#6B7280" />
                                <div>
                                    <p style={{ fontSize: '12px', color: '#9CA3AF', margin: 0 }}>Student ID</p>
                                    <p style={{ fontSize: '14px', fontWeight: '500', color: '#111827', margin: 0 }}>
                                        {user.studentId}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right Column - Editable Info */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        style={{
                            background: 'white',
                            border: '1px solid #E5E7EB',
                            borderRadius: '12px',
                            padding: '32px'
                        }}
                    >
                        {/* Header with Edit Button */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                            <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#111827', margin: 0 }}>
                                Personal Information
                            </h3>
                            {!isEditing ? (
                                <button
                                    onClick={() => setIsEditing(true)}
                                    style={{
                                        padding: '8px 16px',
                                        background: '#1A73E8',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '8px',
                                        fontSize: '14px',
                                        fontWeight: '600',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '6px'
                                    }}
                                >
                                    <User size={16} /> Edit Profile
                                </button>
                            ) : (
                                <div style={{ display: 'flex', gap: '8px' }}>
                                    <button
                                        onClick={handleCancel}
                                        style={{
                                            padding: '8px 16px',
                                            background: '#F3F4F6',
                                            color: '#374151',
                                            border: 'none',
                                            borderRadius: '8px',
                                            fontSize: '14px',
                                            fontWeight: '600',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '6px'
                                        }}
                                    >
                                        <X size={16} /> Cancel
                                    </button>
                                    <button
                                        onClick={handleSave}
                                        style={{
                                            padding: '8px 16px',
                                            background: '#10B981',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '8px',
                                            fontSize: '14px',
                                            fontWeight: '600',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '6px'
                                        }}
                                    >
                                        <Save size={16} /> Save Changes
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Form Fields */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                            {/* Full Name */}
                            <div>
                                <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    disabled={!isEditing}
                                    style={{
                                        width: '100%',
                                        padding: '10px 12px',
                                        border: '1px solid #E5E7EB',
                                        borderRadius: '8px',
                                        fontSize: '14px',
                                        background: isEditing ? 'white' : '#F9FAFB',
                                        cursor: isEditing ? 'text' : 'not-allowed'
                                    }}
                                />
                            </div>

                            {/* Email (read-only) */}
                            <div>
                                <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>
                                    Email
                                </label>
                                <input
                                    type="email"
                                    value={user.email}
                                    disabled
                                    style={{
                                        width: '100%',
                                        padding: '10px 12px',
                                        border: '1px solid #E5E7EB',
                                        borderRadius: '8px',
                                        fontSize: '14px',
                                        background: '#F9FAFB',
                                        cursor: 'not-allowed'
                                    }}
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    disabled={!isEditing}
                                    placeholder="+254 712 345 678"
                                    style={{
                                        width: '100%',
                                        padding: '10px 12px',
                                        border: '1px solid #E5E7EB',
                                        borderRadius: '8px',
                                        fontSize: '14px',
                                        background: isEditing ? 'white' : '#F9FAFB',
                                        cursor: isEditing ? 'text' : 'not-allowed'
                                    }}
                                />
                            </div>

                            {/* Location */}
                            <div>
                                <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>
                                    Location
                                </label>
                                <input
                                    type="text"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    disabled={!isEditing}
                                    placeholder="Nairobi, Kenya"
                                    style={{
                                        width: '100%',
                                        padding: '10px 12px',
                                        border: '1px solid #E5E7EB',
                                        borderRadius: '8px',
                                        fontSize: '14px',
                                        background: isEditing ? 'white' : '#F9FAFB',
                                        cursor: isEditing ? 'text' : 'not-allowed'
                                    }}
                                />
                            </div>
                        </div>

                        {/* Bio */}
                        <div style={{ marginTop: '24px' }}>
                            <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>
                                Bio
                            </label>
                            <textarea
                                value={bio}
                                onChange={(e) => setBio(e.target.value)}
                                disabled={!isEditing}
                                placeholder="Tell us about yourself..."
                                rows={4}
                                style={{
                                    width: '100%',
                                    padding: '10px 12px',
                                    border: '1px solid #E5E7EB',
                                    borderRadius: '8px',
                                    fontSize: '14px',
                                    background: isEditing ? 'white' : '#F9FAFB',
                                    cursor: isEditing ? 'text' : 'not-allowed',
                                    fontFamily: 'inherit',
                                    resize: 'vertical'
                                }}
                            />
                        </div>

                        {/* Social Links */}
                        <div style={{ marginTop: '32px' }}>
                            <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
                                Social Links
                            </h4>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>
                                        Twitter
                                    </label>
                                    <input
                                        type="text"
                                        value={twitter}
                                        onChange={(e) => setTwitter(e.target.value)}
                                        disabled={!isEditing}
                                        placeholder="@username"
                                        style={{
                                            width: '100%',
                                            padding: '10px 12px',
                                            border: '1px solid #E5E7EB',
                                            borderRadius: '8px',
                                            fontSize: '14px',
                                            background: isEditing ? 'white' : '#F9FAFB',
                                            cursor: isEditing ? 'text' : 'not-allowed'
                                        }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>
                                        LinkedIn
                                    </label>
                                    <input
                                        type="text"
                                        value={linkedin}
                                        onChange={(e) => setLinkedin(e.target.value)}
                                        disabled={!isEditing}
                                        placeholder="linkedin.com/in/username"
                                        style={{
                                            width: '100%',
                                            padding: '10px 12px',
                                            border: '1px solid #E5E7EB',
                                            borderRadius: '8px',
                                            fontSize: '14px',
                                            background: isEditing ? 'white' : '#F9FAFB',
                                            cursor: isEditing ? 'text' : 'not-allowed'
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default MemberProfile;
