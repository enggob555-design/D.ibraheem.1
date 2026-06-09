// supabase-config.js
const SUPABASE_URL = "https://dpyshuhinqnxhaqfdykl.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRweXNodWhpbnFueGhhcWZkeWtsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA4Mzc4ODQsImV4cCI6MjA5NjQxMzg4NH0.TpHanzVxjMEOJM0P3Oioic_odTmp7JJ-fFzBblOJVs0";

// نستخدم متغير عام ليتم الوصول إليه من أي مكان
let supabase;

// دالة لإنشاء الاتصال
function initSupabase() {
    if (window.supabase) {
        supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        console.log("Supabase Client Initialized!");
    } else {
        console.error("Supabase library not loaded yet!");
    }
}

// محاولة الإنشاء فور تحميل الملف، وإذا فشل، حاول بعد قليل
initSupabase();
