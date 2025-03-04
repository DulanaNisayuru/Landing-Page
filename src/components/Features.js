const Features = () => {
    const features = [
      { title: "Fast Performance", description: "Optimized for speed and efficiency." },
      { title: "Mobile Friendly", description: "Fully responsive design for all devices." },
      { title: "Dark Mode", description: "Seamless light & dark mode switch." },
    ];
  
    return (
      <section className="py-16 bg-white dark:bg-gray-900">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">Our Features</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Features;
  