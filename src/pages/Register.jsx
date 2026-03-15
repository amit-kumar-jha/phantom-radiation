import { useState } from 'react';
import { supabase } from '../services/supabase';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) {
            setError(error.message);
        } else {
            alert('Signup successful! Please you can now log in (or check email if confirmed is required).');
            navigate('/login');
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen pt-24 px-4 flex justify-center items-center">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-md glass-card p-8 bg-navy-900/50">
                <h2 className="text-2xl font-bold text-white mb-6">Create Account</h2>
                {error && <div className="bg-red-500/10 text-red-500 p-3 rounded-lg mb-4 text-sm">{error}</div>}
                <form onSubmit={handleSignup} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required
                            className="w-full bg-navy-800 text-white rounded-lg px-4 py-2 border border-navy-700 outline-none focus:border-purple-500 transition-colors" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} required
                            className="w-full bg-navy-800 text-white rounded-lg px-4 py-2 border border-navy-700 outline-none focus:border-purple-500 transition-colors" />
                    </div>
                    <button type="submit" disabled={loading} className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 rounded-lg transition-colors">
                        {loading ? 'Creating account...' : 'Sign Up'}
                    </button>
                    <div className="text-center mt-4">
                        <span className="text-gray-400 text-sm">Already have an account? </span>
                        <Link to="/login" className="text-purple-400 text-sm hover:underline">Log in</Link>
                    </div>
                </form>
            </motion.div>
        </div>
    );
}
