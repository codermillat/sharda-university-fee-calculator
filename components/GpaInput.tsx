import React from 'react';

interface GpaInputProps {
  gpa: number;
  onGpaChange: (gpa: number) => void;
  disabled: boolean;
}

const GpaInput: React.FC<GpaInputProps> = ({ gpa, onGpaChange, disabled }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = parseFloat(e.target.value);
    if(isNaN(value)) {
        // Allow user to clear the input, default to 3.0 logically
        onGpaChange(3.0);
        return;
    }
    if (value < 3.0) value = 3.0;
    if (value > 5.0) value = 5.0;
    onGpaChange(value);
  };

  const displayValue = () => {
    const gpaString = String(gpa);
    // Don't show 3 when the input is empty
    if (gpa === 3.0 && isNaN(parseFloat(document.getElementById('gpa-input')?.['value']))) {
        return '';
    }
    if (gpaString.includes('.')) {
        const parts = gpaString.split('.');
        if(parts[1].length > 2) return gpa.toFixed(2);
    }
    return gpa;
  }

  return (
    <div className={disabled ? 'opacity-60 cursor-not-allowed' : ''}>
      <label htmlFor="gpa-input" className="block text-sm font-semibold text-slate-700 mb-2">
        2. Enter Your GPA (3.0 - 5.0)
      </label>
       <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
          </div>
          <input
            id="gpa-input"
            type="number"
            min="3.0"
            max="5.0"
            step="0.01"
            value={displayValue()}
            onChange={handleInputChange}
            onBlur={(e) => { // On focus out, ensure value is valid
                let value = parseFloat(e.target.value);
                if(isNaN(value) || value < 3.0) onGpaChange(3.0);
                if(value > 5.0) onGpaChange(5.0);
            }}
            placeholder="e.g. 4.5"
            disabled={disabled}
            className="w-full pl-10 p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sharda-blue focus:border-sharda-blue transition bg-white placeholder:text-slate-400 disabled:bg-slate-100 disabled:text-slate-500"
          />
      </div>
    </div>
  );
};

export default GpaInput;