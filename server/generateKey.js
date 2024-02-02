import crypto from 'crypto';

const generateRandomKey = (length) => {
  return crypto.randomBytes(length).toString('hex');
};

const secretKey = generateRandomKey(32); // Generate a 256-bit key (32 bytes)

console.log(`Generated JWT Secret Key: ${secretKey}`);