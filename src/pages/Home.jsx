import React from 'react';

const Home = () => {
  return (
    <div className="animate-fadeIn">
      <header className="py-16 text-center">
        <h1 className="text-6xl font-bold mb-4 text-gradient bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">Welcome to NexusHub</h1>
        <p className="text-xl text-text-muted mb-8 max-w-2xl mx-auto">Your gateway to mastering React state management and modern web development techniques.</p>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg transition-all hover:-translate-y-1 shadow-lg shadow-teal-500/20">
            Start Learning
          </button>
          <button className="px-6 py-3 border border-teal-500 hover:bg-teal-50 text-teal-600 font-semibold rounded-lg transition-all">
            Explore Topics
          </button>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        <div className="p-8 bg-white dark:bg-gray-800 border border-teal-200 dark:border-teal-700 rounded-xl transition-transform hover:-translate-y-2 shadow-lg">
          <div className="text-3xl mb-4">🚀</div>
          <h3 className="text-xl font-bold mb-2 text-teal-600 dark:text-teal-400">Modern React</h3>
          <p className="text-text-muted">Learn the latest React hooks, patterns, and best practices for building scalable applications.</p>
        </div>
        <div className="p-8 bg-white dark:bg-gray-800 border border-teal-200 dark:border-teal-700 rounded-xl transition-transform hover:-translate-y-2 shadow-lg">
          <div className="text-3xl mb-4">💾</div>
          <h3 className="text-xl font-bold mb-2 text-teal-600 dark:text-teal-400">State Management</h3>
          <p className="text-text-muted">Master useState, useContext, localStorage, and advanced state patterns with interactive examples.</p>
        </div>
        <div className="p-8 bg-white dark:bg-gray-800 border border-teal-200 dark:border-teal-700 rounded-xl transition-transform hover:-translate-y-2 shadow-lg">
          <div className="text-3xl mb-4">✨</div>
          <h3 className="text-xl font-bold mb-2 text-teal-600 dark:text-teal-400">Interactive Learning</h3>
          <p className="text-text-muted">Hands-on tutorials with live examples, animations, and real-world applications.</p>
        </div>
      </section>

      <section className="mt-16 text-center">
        <h2 className="text-4xl font-bold mb-8 text-teal-600 dark:text-teal-400">Learning Path</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 bg-teal-50 dark:bg-teal-900/20 rounded-lg border border-teal-200 dark:border-teal-700">
            <div className="text-2xl font-bold mb-2 text-teal-600">1</div>
            <h4 className="font-semibold mb-2">Why State?</h4>
            <p className="text-sm">Understand the fundamentals</p>
          </div>
          <div className="p-6 bg-teal-50 dark:bg-teal-900/20 rounded-lg border border-teal-200 dark:border-teal-700">
            <div className="text-2xl font-bold mb-2 text-teal-600">2</div>
            <h4 className="font-semibold mb-2">Local State</h4>
            <p className="text-sm">Master useState hook</p>
          </div>
          <div className="p-6 bg-teal-50 dark:bg-teal-900/20 rounded-lg border border-teal-200 dark:border-teal-700">
            <div className="text-2xl font-bold mb-2 text-teal-600">3</div>
            <h4 className="font-semibold mb-2">Shared State</h4>
            <p className="text-sm">Learn useContext patterns</p>
          </div>
          <div className="p-6 bg-teal-50 dark:bg-teal-900/20 rounded-lg border border-teal-200 dark:border-teal-700">
            <div className="text-2xl font-bold mb-2 text-teal-600">4</div>
            <h4 className="font-semibold mb-2">Best Practices</h4>
            <p className="text-sm">Write professional code</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
