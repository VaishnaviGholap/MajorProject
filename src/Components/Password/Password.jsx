
import React, { useState } from 'react';
import './Password.css'; 

function Password() {
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [passwordHint, setPasswordHint] = useState('');

  const validatePassword = (password) => {
    const minLength = 6;
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasCapitalLetter = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);

    if (
      password.length >= minLength &&
      hasSpecialChar &&
      hasCapitalLetter &&
      hasNumber
    ) {
      return ''; // No errors
    }

    return 'Password must be at least 6 characters long and include at least one special character, one capital letter, and one number.';
  };

  const handleReset = (e) => {
    e.preventDefault();

    const hint = validatePassword(newPassword);

    if (hint) {
      setMessage('');
      setPasswordHint(hint);
      return;
    }

    console.log('Password reset initiated with new password:', newPassword);
    setMessage('Password has been successfully reset.');
    setPasswordHint('');
  };

  return (
    <div className='background'>
      <div className="password-container">
        <h2 className="password-title">Reset Password</h2>
        <hr className="track-courier-heading-line" />
        <form className="password-form" onSubmit={handleReset}>
          <div className="password-input-group">
            <input
              type="password"
              className="password-input"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => {
                setNewPassword(e.target.value);
                setPasswordHint(validatePassword(e.target.value));
              }}
              required
            />
            {passwordHint && (
              <p className="password-hint">
                {passwordHint}
              </p>
            )}
          </div>
          <div style={{ display: 'flex', gap: '20px', marginLeft: '20%' }}>
            <button type="submit" className="password-submit-button">
              Reset
            </button>
            <button
              type="button"
              className="password-submit-button"
              onClick={() => window.location.href = '/customer'}
            >
              Back
            </button>
          </div>
        </form>
        {message && <p className={`password-message ${message.includes('successfully') ? 'success' : 'error'}`}>{message}</p>}
      </div>
    </div>
  );
}

export default Password;
