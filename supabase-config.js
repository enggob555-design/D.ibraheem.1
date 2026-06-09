
// ملف الإعدادات المركزي لمشروع "عيادتي" (المشروع الفرعي my job)
// الرابط المعتمد: https://dpyshuhinqnxhaqfdykl.supabase.co

//const SUPABASE_URL = "https://dpyshuhinqnxhaqfdykl.supabase.co";

// ضع هنا الـ Anon Key الخاص بـ "my job" تحديداً (انسخه من API Settings داخل my job)
//const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRweXNodWhpbnFueGhhcWZkeWtsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA4Mzc4ODQsImV4cCI6MjA5NjQxMzg4NH0.TpHanzVxjMEOJM0P3Oioic_odTmp7JJ-fFzBblOJVs0"; 

// التحقق من تحميل مكتبة سوبابيس ومن ثم إنشاء العميل
//const supabase = (typeof supabase !== 'undefined') ? supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;

//if (!supabase) {
  //  console.error("خطأ: لم يتم العثور على مكتبة Supabase. تأكد من استدعاء الـ CDN.");
//} else {
   // console.log("تم تهيئة اتصال سوبابيس بنجاح للمشروع الفرعي.");
//}

// تصدير للوصول إليه من أي صفحة
//window.supabase = supabase;
// الإعدادات الخاصة بمشروع my job
const SUPABASE_URL = "https://dpyshuhinqnxhaqfdykl.supabase.co"; 
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRweXNodWhpbnFueGhhcWZkeWtsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA4Mzc4ODQsImV4cCI6MjA5NjQxMzg4NH0.TpHanzVxjMEOJM0P3Oioic_odTmp7JJ-fFzBblOJVs0";

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
