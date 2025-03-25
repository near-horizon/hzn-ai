import Image from 'next/image';

interface FeaturedProject {
  name: string;
  logo: string;
  url: string;
}

interface Speaker {
  name: string;
  company: string;
  image: string;
}

const ProgramDetails: React.FC = () => {
  const featuredProjects: FeaturedProject[] = [
    { name: 'Ringfence', logo: '/images/logo/ringfence.svg', url: 'https://www.ringfence.ai/' },
    { name: 'Hyperbolic', logo: '/images/logo/hyperbolic.png', url: 'https://hyperbolic.xyz/' },
    { name: 'nevermined', logo: '/images/logo/nevermind.png', url: 'https://nevermined.io/' },
    { name: 'MIZU', logo: '/images/logo/mizu-logo-1.png', url: 'https://mizu.global/' },
    { name: 'exaBITS', logo: '/images/logo/exabits.png', url: 'https://exabits.ai/' },
    { name: 'Pond', logo: '/images/logo/pond.svg', url: 'https://cryptopond.xyz/' }
  ];

  const speakers: Speaker[] = [
    { name: 'Illia Polosukhin', company: 'NEAR Foundation', image: 'illia.png' },
    { name: 'Avichal Garg', company: 'Electric Capital', image: 'avichal.png' },
    { name: 'Alex Goldberg', company: 'Delphi Ventures', image: 'alex.png' },
    { name: 'Casey Caruso', company: 'Topology', image: 'casey-1.png' },
    { name: 'Anand Iyer', company: 'Canonical Capital', image: 'anand.png' },
    { name: 'Anthony Avadissian', company: 'Seed Club', image: 'anthony.png' },
    { name: 'Danny Sursock', company: 'Archetype', image: 'danny.png' },
    { name: 'Christine Cai', company: 'Cicada Partners', image: 'christine.png' },
    { name: 'Altan Tutar', company: 'Nuffle Labs', image: 'altan.png' },
  ];

  return (
    <div className="border border-[#9696FE] rounded-3xl p-4 md:p-12 text-white">
      <div className="flex flex-col md:flex-row mb-8 md:mb-12 gap-8 md:gap-12">
        {/* Left Column - Image and Apply Button */}
        <div className="w-full md:w-1/2 md:pr-8">
          <div className="bg-[#9696FE] rounded-2xl p-4 mb-6">
            <Image 
              src="/images/illustrations/program-details-cal.svg" 
              alt="Program Details Illustration" 
              width={400} 
              height={300} 
              layout="responsive"
            />
          </div>
          <a href="https://airtable.com/appc0ZVhbKj8hMLvH/pagVX3hSxzIj4Y680/form" target="_blank" rel="noopener noreferrer">
            <button className="bg-transparent border border-[#9696FE] text-[#9696FE] px-4 md:px-6 py-2 md:py-3 rounded-full w-full text-sm md:text-base">
              Apply for the NEAR AI Incubation Program
            </button>
          </a>
        </div>

        {/* Right Column - Program Details */}
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
            <span className="text-[#9696FE]">AI + HZN Batch II</span> coming soon 
          </h1>
          <p className="mb-4 md:mb-6 text-sm md:text-base">
            Empowering top-tier AI and blockchain founders with resources and support.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold text-[#9696FE] mb-3 md:mb-4">Program Overview:</h2>

          <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
            <div>
              <p className="font-semibold mb-1 text-sm md:text-base">Start Date: Coming Soon</p>
              <p className="text-sm md:text-base">Time Commitment: 3-5 hours per week</p>
            </div>
            <p className="text-sm md:text-base">
              We take a boutique approach with our founders. 
              Our cohort sizes are small, focusing on 4-6 teams in each batch.
            </p>
          </div>

          <h2 className="text-xl md:text-2xl font-semibold text-[#9696FE] mb-3 md:mb-4">Profiles of Previous Founders</h2>
          <ul className="list-disc list-inside space-y-2 text-sm md:text-base mb-4 md:mb-6">
            <li>Repeat founders with strong technical skills.</li>
            <li>AI/ML Researchers spinning out projects from academic institutions</li>
            <li>Ex-VCs with a unique perspective on the market</li>
            <li>Degens who understand crypto native distribution</li>
          </ul>
          <a href="https://near.org/blog/near-foundation-launches-ai-incubation-program" target="_blank" rel="noopener noreferrer">
            <button className="bg-transparent border border-[#9696FE] text-[#9696FE] px-4 md:px-6 py-2 md:py-3 rounded-full w-full text-sm md:text-base hover:bg-[#9696FE] hover:text-black transition-colors">
              Learn more about our alumni
            </button>
          </a>
        </div>
      </div>

      {/* Featured Projects */}
      <div className="mb-8 md:mb-12">
        <h2 className="text-xl md:text-2xl font-semibold text-[#9696FE] mb-4">Featured AI Projects</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {featuredProjects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1E1E1E] p-4 rounded-lg flex items-center justify-center h-28 md:h-36 transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[#2A2A2A] cursor-pointer"
            >
              <Image 
                src={project.logo} 
                alt={project.name} 
                width={120} 
                height={60} 
                objectFit="contain"
                className="max-h-24 md:max-h-28"
              />
            </a>
          ))}
        </div>
      </div>

      {/* Previous Speakers */}
      <div className="mb-8 md:mb-12">
        <h2 className="text-xl md:text-2xl font-semibold text-[#9696FE] mb-4">Previous Speakers Include:</h2>
        <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {speakers.map((speaker) => (
            <div key={speaker.name} className="text-center flex flex-col items-center">
              <Image src={`/images/headshots/${speaker.image}`} alt={speaker.name} width={60} height={60} className="rounded-full mb-2 md:mb-3" />
              <p className="font-semibold text-xs md:text-sm mb-1">{speaker.name}</p>
              <p className="text-xs">{speaker.company}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Support and Benefits */}
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-2/3 md:pr-8 mb-6 md:mb-0">
          <h2 className="text-xl md:text-2xl font-semibold text-[#9696FE] mb-4 md:mb-6">Support and Benefits:</h2>
          <div className="space-y-6 md:space-y-8">
            <div className="flex items-start">
              <Image src="/images/icons/coin-1.png" alt="Financial Support" width={24} height={24} className="mr-4 mt-1" />
              <div>
                <h3 className="font-semibold mb-2 text-sm md:text-base">Financial Support:</h3>
                <p className="text-sm md:text-base">Token-based grants and compute credits from the NEAR Foundation.</p>
              </div>
            </div>
            <div className="flex items-start">
              <Image src="/images/icons/technical-support-1.png" alt="Technical Support" width={24} height={24} className="mr-4 mt-1" />
              <div>
                <h3 className="font-semibold mb-2 text-sm md:text-base">Technical Support:</h3>
                <p className="text-sm md:text-base">Dedicated technical assistance to integrate with NEAR&apos;s AI ecosystem.</p>
              </div>
            </div>
            <div className="flex items-start">
              <Image src="/images/icons/idea-1.png" alt="Educational Resources" width={24} height={24} className="mr-4 mt-1" />
              <div>
                <h3 className="font-semibold mb-2 text-sm md:text-base">Educational Resources:</h3>
                <p className="text-sm md:text-base">Weekly sessions on topics including Go-To-Market strategy, token design, and more.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <div className="bg-[#9696FE] rounded-2xl p-4 mb-6">
            <Image 
              src="/images/illustrations/support-benefits-chip.svg" 
              alt="Support and Benefits Illustration" 
              width={300} 
              height={200} 
              layout="responsive"
            />
          </div>
          <a href="https://airtable.com/appc0ZVhbKj8hMLvH/pagVX3hSxzIj4Y680/form" target="_blank" rel="noopener noreferrer">
            <button className="bg-transparent border border-[#9696FE] text-[#9696FE] px-4 md:px-6 py-2 md:py-3 rounded-full w-full text-sm md:text-base">
              Apply for the NEAR AI Incubation Program
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetails;