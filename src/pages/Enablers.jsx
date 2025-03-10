import React from 'react';

// Incubators Data
const incubators = [
  { id: 1, name: "Maker Village", image: "/assets/incubator/Makervillage.webp" },
  { id: 2, name: "KAU RABI", image: "/assets/incubator/rabi.webp" },
  { id: 3, name: "KSUM", image: "/assets/incubator/ksum.webp" },
  { id: 4, name: "Digital University Kerala", image: "/assets/incubator/duk.webp" },
  { id: 5, name: "NAARM", image: "/assets/incubator/naarm.webp" },
  { id: 6, name: "ICAR", image: "/assets/incubator/ikar.webp" },
];

// Advisors Data
const advisors = [
  { name: 'Dr Anilakumar', designation: 'Amala Cancer Care Institute', image: '/assets/team/Dr-Anilakumar.webp' },
  { name: 'Dr Snany Surendran', designation: 'MVR Cancer Care Institute', image: '/assets/team/Snany.webp' },
  { name: 'Dr Reshmi', designation: 'Seed Farm Director, Alathur, Kerala', image: '/assets/team/no.png' },
];

// Team Data
const team = [
  { name: 'Pradeep Kumar P', designation: 'Chief Executive Officer', image: '/assets/team/pradeep.webp' },
  { name: 'Nidheesh V', designation: 'Chief Technical Officer', image: '/assets/team/nidheesh.webp' },
  { name: 'Arun Babu V', designation: 'Chief Application Developer', image: '/assets/team/arun.webp' },
  { name: 'Deepthi A', designation: 'Chief Operations Officer', image: '/assets/team/deepthi.webp' },
  { name: 'Anas Y', designation: 'Backend Developer', image: '/assets/team/anas.webp' },
  { name: 'S Athuldas', designation: 'Frontend Developer', image: '/assets/team/athul.webp' },
  { name: 'Prajith A K', designation: 'Chief Creative Head', image: '/assets/team/prajith1.webp' },
  { name: 'Pradeep R', designation: 'Manufacturing Coordinator', image: '/assets/team/pradeep1.webp' },

];

const Enablers = () => {
  return (
    <div className="min-h-screen p-10">
      {/* Incubators Section */}
      <section className="mb-16">
        <h2 className="mb-2 text-4xl font-extrabold text-center text-blue-700">
          <span
            style={{
              background: 'linear-gradient(88.52deg, #1263AF 29.11%, #06CCBC 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Enablers
          </span>
        </h2>
        <p className="mb-10 text-xs text-center text-white">Caax and Krishisat</p>
        <div className="flex flex-wrap justify-center gap-10">
          {incubators.map((incubator) => (
            <div key={incubator.id} className="flex flex-col items-center justify-center">
              {/* Capsule for incubator image */}
              <div
                className="w-[118px] h-[118px] rounded-full overflow-hidden mb-2 border-2 border-[#66a4a2] transition-transform duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_#00FFF7] relative"
                style={{
                  backgroundImage: `url(${incubator.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Overlay for better image visibility */}
                <div className="absolute inset-0 bg-black opacity-20"></div>
              </div>
              <h3 className="font-bold text-center text-white text-md">{incubator.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Advisors Section */}
      <section className="mb-16">
        <h2 className="mb-10 text-4xl font-extrabold text-center text-blue-700">
          <span
            style={{
              background: 'linear-gradient(88.52deg, #1263AF 29.11%, #06CCBC 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Meet Our Advisors
          </span>
        </h2>
        <div className="flex flex-wrap justify-center gap-10">
          {advisors.map((advisor, index) => (
            <div key={index} className="flex flex-col items-center justify-center">
              {/* Capsule for advisor image */}
              <div
                className="w-[118px] h-[220px] rounded-full overflow-hidden mb-2 border-2 border-[#66a4a2] transition-transform duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_#00FFF7] relative"
                style={{
                  backgroundImage: `url(${advisor.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Overlay for better image visibility */}
                <div className="absolute inset-0 bg-black opacity-20"></div>
              </div>
              <h3 className="font-bold text-center text-white text-md">{advisor.name}</h3>
              <p className="text-sm text-center text-white">{advisor.designation}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section>
        <h2 className="mb-10 text-4xl font-extrabold text-center text-blue-700">
          <span
            style={{
              background: 'linear-gradient(88.52deg, #1263AF 29.11%, #06CCBC 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Meet Our Team
          </span>
        </h2>
        <div className="flex flex-wrap justify-center gap-10">
          {team.map((member, index) => (
            <div key={index} className="flex flex-col items-center justify-center">
              {/* Capsule for team member image */}
              <div
                className="w-[118px] h-[220px] rounded-full overflow-hidden mb-2 border-2 border-[#66a4a2] transition-transform duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_#00FFF7] relative"
                style={{
                  backgroundImage: `url(${member.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Overlay for better image visibility */}
                <div className="absolute inset-0 bg-black opacity-20"></div>
              </div>
              <h3 className="font-bold text-center text-white text-md">{member.name}</h3>
              <p className="text-sm text-center text-white">{member.designation}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Enablers;
