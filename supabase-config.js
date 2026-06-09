// supabase-config.js
const SUPABASE_URL = "https://dpyshuhinqnxhaqfdykl.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRweXNodWhpbnFueGhhcWZkeWtsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA4Mzc4ODQsImV4cCI6MjA5NjQxMzg4NH0.TpHanzVxjMEOJM0P3Oioic_odTmp7JJ-fFzBblOJVs0";

// إنشاء العميل فوراً
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
console.log("Supabase Client Initialized Successfully!");
