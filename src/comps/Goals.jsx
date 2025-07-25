function Goals() {
  return (
    <div id="goals" className="Goals px-6 py-10 bg-gray-100 text-gray-800">
      <h2 className="text-3xl font-bold mb-6 text-center">My Goals</h2>

      <div className="space-y-8 max-w-3xl mx-auto">
        <section>
          <h3 className="text-2xl font-semibold mb-2">🎯 Career Aspirations</h3>
          <p className="text-base">
            As a passionate software engineering student, my long-term goal is
            to become a technology leader in the areas of{" "}
            <strong>Big Data infrastructure</strong> and{" "}
            <strong>Cybersecurity engineering</strong>{" "}
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-2">📊 Big Data Interests</h3>
          <p className="text-base">
            I am deeply fascinated by data at scale how it flows, where it’s
            stored, and how it’s processed. I'm focused on learning and
            contributing to areas like:
          </p>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Distributed systems (e.g., Hadoop, Spark, Kafka)</li>
            <li>Data pipelines and stream processing</li>
            <li>Data engineering and optimization</li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-2">
            🛡️ Cybersecurity Focus
          </h3>
          <p className="text-base">
            In an increasingly interconnected world, security is no longer
            optional. I am investing my time into understanding and building:
          </p>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Vulnerability detection and mitigation</li>
            <li>Offensive security testing</li>
            <li>Defensive programming</li>
            <li>Security in cloud-native environments</li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-2">🚀 Learning & Growth</h3>
          <p className="text-base">
            I believe in lifelong learning. My current roadmap includes:
          </p>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>
              Contributing to open source projects in security and data tools
            </li>
            <li>Pursuing industry certifications (e.g., AWS, CEH)</li>
            <li>Internships to gain real-world experience</li>
            <li>Research and experimentation with AI + data + security</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Goals;
