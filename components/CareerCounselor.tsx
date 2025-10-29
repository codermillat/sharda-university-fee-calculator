
import React, { useState, useCallback, useEffect } from 'react';
import { getCareerAdvice } from '../services/geminiService';

interface CareerCounselorProps {
    courseName: string;
}

const CareerCounselor: React.FC<CareerCounselorProps> = ({ courseName }) => {
    const [advice, setAdvice] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const fetchAdvice = useCallback(async () => {
        if (!courseName) return;
        setIsLoading(true);
        setError('');
        setAdvice('');
        try {
            const result = await getCareerAdvice(courseName);
            setAdvice(result);
        } catch (err) {
            setError('Failed to get advice. Please try again.');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    }, [courseName]);
    
    useEffect(() => {
        // Reset state when course changes
        setIsOpen(false);
        setAdvice('');
        setError('');
    }, [courseName]);

    const handleToggle = () => {
        const newIsOpen = !isOpen;
        setIsOpen(newIsOpen);
        if (newIsOpen && !advice) {
            fetchAdvice();
        }
    };

    return (
        <div className="mt-8 border-t pt-8">
            <button
                onClick={handleToggle}
                className="flex items-center justify-between w-full text-left text-lg font-bold text-slate-700 hover:text-blue-600 transition"
            >
                <span>
                    <span role="img" aria-label="light-bulb" className="mr-2">💡</span>
                    AI Career Counselor: Prospects for "{courseName}"
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {isOpen && (
                <div className="mt-4 p-6 bg-slate-100 rounded-lg border">
                    {isLoading && (
                        <div className="flex items-center justify-center space-x-2 text-slate-600">
                             <div className="w-4 h-4 border-2 border-slate-400 border-t-transparent rounded-full animate-spin"></div>
                             <span>Getting career advice from Gemini AI...</span>
                        </div>
                    )}
                    {error && <p className="text-red-600">{error}</p>}
                    {advice && (
                        <div 
                            className="prose prose-sm max-w-none" 
                            dangerouslySetInnerHTML={{ __html: advice.replace(/\n/g, '<br />') }}
                        />
                    )}
                </div>
            )}
        </div>
    );
};

export default CareerCounselor;
