// 🌐 ملف الإعدادات الموحد لمنصة العيادة الذكية
const SUPABASE_URL = "https://dpyshuhinqruhaqftydkl.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRweXNodWhpbnFueGhhcWZkeWtsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA4Mzc4ODQsImV4cCI6MjA5NjQxMzg4NH0.TpHanzVxjMEOJM0P3Oioic_odTmp7JJ-fFzBblOJVs0";

// تهيئة العميل الموحد للمشروع كامل برمجياً
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
