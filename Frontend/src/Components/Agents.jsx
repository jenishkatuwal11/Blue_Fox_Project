const agents = [
  { id: 1, name: "Andren Willium", company: "Sunshine", properties: 9 },
  { id: 2, name: "Polly Matzinger", company: "Sweet Home", properties: 19 },
  // Add other agents here
];

const Agents = () => {
  return (
    <div className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-center">Meet Our Agents</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 px-4">
        {agents.map((agent) => (
          <div key={agent.id} className="text-center">
            <img
              className="w-32 h-32 rounded-full mx-auto"
              src={`/assets/agent-${agent.id}.jpg`}
              alt={agent.name}
            />
            <h3 className="mt-4 font-semibold">{agent.name}</h3>
            <p className="text-gray-600">{agent.company}</p>
            <p className="text-sm text-gray-400">
              {agent.properties} Properties
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Agents;
