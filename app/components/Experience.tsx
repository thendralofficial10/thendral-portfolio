export default function Experience() {
const exp = [
{
role: "Web Developer - Egrove Systems",
desc: "React, Next.js, MongoDB, WordPress development.",
},
{
role: "Frontend Developer - Revotran",
desc: "React + API Integrations + WordPress customization.",
},
];


return (
<section className="p-10 bg-gray-100 dark:bg-gray-900">
<h2 className="text-4xl font-bold mb-6">Experience</h2>


<div className="space-y-4">
{exp.map((e, i) => (
<div key={i} className="p-6 bg-white dark:bg-gray-800 shadow rounded-xl">
<h3 className="text-2xl font-semibold">{e.role}</h3>
<p className="mt-2">{e.desc}</p>
</div>
))}
</div>
</section>
);
}