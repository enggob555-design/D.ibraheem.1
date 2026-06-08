// 🌐 ملف الإعدادات الموحد لمنصة العيادة الذكية
const SUPABASE_URL = "https://dpyshuhinqruhaqftydkl.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRweXNodWhpbnFydWhhcWZ0eWRrbCIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNzE2ODAyMTgyLCJleHAiOjIwMzIzNzgxODJ9.h0L6PY42fnjxfBjwAfh3Cw_Lr6zUgMO";

// تهيئة العميل الموحد للمشروع كامل برمجياً
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
