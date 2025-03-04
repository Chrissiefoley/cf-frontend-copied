import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://dnoahfppegrwyonzswyc.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRub2FoZnBwZWdyd3lvbnpzd3ljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAwNTI2ODUsImV4cCI6MjA1NTYyODY4NX0.erQRn4LXfG8cg5r8tYTC-RLrSKF9qTMm87g5Z9krlvg'
);


