'use client';
import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'; // Import default styles

export default function PhoneInputComponent() {
  const [phone, setPhone] = useState('');

  return (
    <div className="w-full flex items-center relative" dir='ltr' lang='en'>
    
      <PhoneInput
        country={'ir'} 
        value={phone}
        onChange={(value) => setPhone(value)}
        inputStyle={{
          width: '100%',
          direction:'ltr',
          height: '38px',
          border: '1px solid #D1D5DB', 
          borderRadius: '0.375rem',
          paddingLeft: '48px', 
          fontSize: '14px',
          textAlign: 'left',
        
        }}
        buttonStyle={{
          border: 'none',
          background: 'transparent',
          position: 'absolute',
          left: '10px', 
          // borderBottomLeftRadius:'5px solid #cccc',
          // top: '6px',
          padding: '0',
          margin: '0',
        }}
        containerClass="relative"
      />
    </div>
  );
}
