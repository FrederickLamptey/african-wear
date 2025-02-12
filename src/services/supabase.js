import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://zwtxzfvoordeefpkxigr.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3dHh6ZnZvb3JkZWVmcGt4aWdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkzMTM2MzUsImV4cCI6MjA1NDg4OTYzNX0.1knrOZSm4xxv4RhUBh7elWeQF5ZCp8JMPkCpxCzGWog';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
