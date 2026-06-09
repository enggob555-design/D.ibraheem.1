// ملف الإعدادات المركزي الموحد والمحمي - مشروع عيادتي
const SUPABASE_URL = "const SUPABASE_URL = "https://dpyshuhinqnxhaqfdykl.supabase.co";
";
const SUPABASE_ANON_KEY = "EyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRweXNodWhpbnFueGhhcWZkeWtsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA4Mzc4ODQsImV4cCI6MjA5NjQxMzg4NH0.TpHanzVxjMEOJM0P3Oioic_odTmp7JJ-fFzBblOJVs0";

// فحص أمان وجود المكتبة قبل تفعيل الاتصال
if (typeof supabase === 'undefined' && typeof Supabase !== 'undefined') {
    var supabaseClient = Supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
} else {
    var supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

// تثبيت المتغير عالمياً لتقرأه جميع الصفحات بثبات
window.supabase = supabaseClient;
