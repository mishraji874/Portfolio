import { Zap, Code, ShieldCheck, PenSquare } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-left">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">About Me</h2>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="flex items-center gap-3 text-2xl font-bold font-headline mb-4 text-primary">
                <Zap className="h-6 w-6" />
                Professional Background
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I am a passionate Full Stack Web Developer and Smart Contract Security Researcher with expertise in building modern web applications and securing blockchain protocols. My journey in software development began with a deep curiosity about how things work on the internet, which led me to explore various programming languages and frameworks.
                </p>
                <p>
                  As a Smart Contract Security Researcher & Auditor, I specialize in identifying vulnerabilities in blockchain applications and ensuring their security. I have conducted numerous security audits for various blockchain protocols and smart contracts, helping to make the Web3 ecosystem more secure.
                </p>
              </div>
            </div>

            <div>
              <h3 className="flex items-center gap-3 text-2xl font-bold font-headline mb-4 text-primary">
                <Code className="h-6 w-6" />
                Technical Expertise
              </h3>
              <ul className="space-y-3 text-muted-foreground pl-5">
                <li className="flex items-start">
                  <ShieldCheck className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
                  <span>Full Stack Web Development</span>
                </li>
                <li className="flex items-start">
                  <ShieldCheck className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
                  <span>Smart Contract Development & Security</span>
                </li>
                <li className="flex items-start">
                  <ShieldCheck className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
                  <span>Web3 Integration & DApp Development</span>
                </li>
                <li className="flex items-start">
                  <ShieldCheck className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
                  <span>Blockchain Security Auditing</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="flex items-center gap-3 text-2xl font-bold font-headline mb-4 text-primary">
                <PenSquare className="h-6 w-6" />
                Beyond Coding
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not immersed in code, I actively contribute to the blockchain security community through technical blog posts and open-source projects. I'm passionate about sharing knowledge and helping others understand the importance of security in the Web3 space. I also enjoy exploring new technologies and staying updated with the latest developments in blockchain and web development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
