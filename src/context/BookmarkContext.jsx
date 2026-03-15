import { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { supabase } from '../services/supabase';

const BookmarkContext = createContext();

export function BookmarkProvider({ children }) {
    const { user } = useAuth();
    const [bookmarks, setBookmarks] = useState([]);

    useEffect(() => {
        if (user) {
            fetchBookmarks();
        } else {
            setBookmarks([]);
        }
    }, [user]);

    const fetchBookmarks = async () => {
        const { data, error } = await supabase
            .from('bookmarks')
            .select('tool_id')
            .eq('user_id', user.id);

        if (!error && data) {
            setBookmarks(data.map(b => b.tool_id));
        }
    };

    const toggleBookmark = async (toolId) => {
        if (!user) {
            alert('Please log in to save bookmarks');
            return;
        }

        const isSaved = bookmarks.includes(toolId);

        if (isSaved) {
            // Remove
            setBookmarks(prev => prev.filter(id => id !== toolId));
            await supabase.from('bookmarks').delete().match({ user_id: user.id, tool_id: toolId });
        } else {
            // Add
            setBookmarks(prev => [...prev, toolId]);
            await supabase.from('bookmarks').insert({ user_id: user.id, tool_id: toolId });
        }
    };

    const isBookmarked = (toolId) => bookmarks.includes(toolId);

    return (
        <BookmarkContext.Provider value={{ bookmarks, toggleBookmark, isBookmarked }}>
            {children}
        </BookmarkContext.Provider>
    );
}

export const useBookmarks = () => useContext(BookmarkContext);
