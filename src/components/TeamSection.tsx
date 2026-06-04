import drAyman from "@/assets/drayman.jpg";
import drLobna from "@/assets/drlobna.jpg";

const teamMembers = [
  {
    id: 1,
    name: 'د. أيمن سعد العزاوي',
    jobTitle: 'أخصائي الروماتيزم والتغذية العلاجية',
    qualifications: [
      "🎓 بكالوريوس الطب والجراحة - جامعة المنصورة",
      "🩺 ماجستير الروماتيزم وأمراض المفاصل والعمود الفقري وآلام الركبة",
      "💪 أخصائي التأهيل الرياضي وتأهيل السمنة والنحافة",
      "🥗 أخصائي التغذية العلاجية",
      "📚 دبلومة التغذية العلاجية - المعهد القومي"
    ],
    avatar: drAyman,
    accentColor: '#006b5b',
    titleBg: 'bg-[#006b5b]/10 text-[#006b5b]',
  },
  {
    id: 2,
    name: 'د. لبنى يادم أبوقمير',
    jobTitle: 'أخصائية السمنة والنحافة والتأهيل الرياضي',
    qualifications: [
      "🎓 بكالوريوس الصيدلة - جامعة الإسكندرية",
      "📜 البورد الأمريكي في التغذية العلاجية الإكلينيكية",
      "🏅 شهادة SCOPE من الفيدرالية الدولية للسمنة (المملكة المتحدة)",
      "🧪 أخصائية تحاليل طبية",
      "⚖️ أخصائية السمنة والنحافة والتأهيل الرياضي",
      "🥗 أخصائية التغذية العلاجية الإكلينيكية"
    ],
    avatar: drLobna,
    accentColor: '#f39678',
    titleBg: 'bg-[#f39678]/10 text-[#8e4d32]',
  },
];

export function TeamSection() {
  return (
    <section id="team" className="py-24 md:py-32 px-4 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#006b5b]/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f39678]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="section-heading text-3xl md:text-5xl font-extrabold text-[#191c1d] mb-4">
            نخبة من الأطباء والمتخصصين 🌿
          </h2>
          <p className="text-[#3e4946] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            فريق Diet Picnic الطبي يعمل تحت إشراف نخبة من الأطباء المرخصين لضمان تقديم برامج صحية وغذائية مبنية على أسس طبية وعلمية سليمة.
          </p>
        </div>

        {/* Centered Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto justify-center items-stretch">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group relative bg-[#f8f9fa] rounded-3xl border border-slate-100/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col overflow-hidden"
            >
              {/* Top accent bar */}
              <div className="h-2 w-full" style={{ background: member.accentColor }} />

              <div className="p-8 md:p-10 flex flex-col items-center text-center gap-6 flex-1">
                {/* Avatar */}
                <div className="relative">
                  <img
                    src={member.avatar}
                    alt={`صورة ${member.name}`}
                    className="w-32 h-32 md:w-36 md:h-36 rounded-full object-cover ring-4 ring-white shadow-md group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span
                    className="absolute bottom-1 right-2 w-5 h-5 rounded-full border-4 border-white bg-green-400"
                    title="نشط الآن"
                  />
                </div>

                {/* Name & Title */}
                <div className="space-y-3 w-full">
                  <h3 className="text-xl md:text-2xl font-black text-[#191c1d]">{member.name}</h3>

                  {/* Job Title Badge */}
                  <span className={`inline-block text-xs md:text-sm font-extrabold px-4 py-2 rounded-full leading-relaxed ${member.titleBg}`}>
                    {member.jobTitle}
                  </span>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-slate-200/60" />

                {/* Qualifications list */}
                <ul className="text-right w-full space-y-3 pl-2 flex-1">
                  {member.qualifications.map((q, idx) => (
                    <li key={idx} className="text-[#3e4946] text-[13px] md:text-[14px] flex items-start gap-2.5 leading-relaxed">
                      <span className="shrink-0 mt-0.5">•</span>
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
