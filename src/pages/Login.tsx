import React, { useState } from 'react';
import { motion } from 'motion/react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { ShieldCheck, LogIn, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError('');
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      if (result.user.email === 'moatadidrayan7@gmail.com') {
        navigate('/admin');
      } else {
        await auth.signOut();
        setError('Access Denied. Only moatadidrayan7@gmail.com has admin privileges.');
      }
    } catch (err: any) {
      setError(err.message || 'Login failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 h-[70vh] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full glass p-10 rounded-[40px] border-white/10 text-center"
      >
        <div className="w-20 h-20 bg-primary/10 rounded-[30px] flex items-center justify-center mx-auto mb-8 border border-primary/20">
          <ShieldCheck className="w-10 h-10 text-primary" />
        </div>
        
        <h2 className="text-3xl font-black mb-4 uppercase tracking-tight">Admin <span className="text-primary">Portal</span></h2>
        <p className="text-gray-400 text-sm mb-10 leading-relaxed">
          Secure access point for school administrators. Authorized credentials required.
        </p>

        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-2xl flex items-center space-x-3 text-red-500 text-xs text-left">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full py-5 bg-white text-black rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center space-x-3 hover:bg-white/80 transition-all disabled:opacity-50"
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
          ) : (
            <>
              <LogIn className="w-5 h-5" />
              <span>Verify with Google</span>
            </>
          )}
        </button>

        <p className="mt-8 text-gray-600 text-[10px] uppercase font-bold tracking-widest">
          End-to-End Encrypted Access
        </p>
      </motion.div>
    </div>
  );
}
