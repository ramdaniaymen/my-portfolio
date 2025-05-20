import Image from 'next/image';

export default function ProjectsPage() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>My Projects</h1>

      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        <div>
          <Image src="/images/minishop.png" alt="MiniShop" width={300} height={200} />
          <h3>MiniShop E-commerce</h3>
          <p>A full-stack MERN e-commerce site</p>
          <a href="https://github.com/aymen/minishop" target="_blank">View Code</a>
        </div>

        <div>
          <Image src="/images/weather.png" alt="Weather App" width={300} height={200} />
          <h3>Weather App</h3>
          <p>Shows weather using external API</p>
          <a href="https://github.com/aymen/weatherapp" target="_blank">View Code</a>
        </div>

        <div>
          <Image src="/images/todo.png" alt="ToDo App" width={300} height={200} />
          <h3>ToDo App</h3>
          <p>Manage tasks using Redux</p>
          <a href="https://github.com/aymen/todo" target="_blank">View Code</a>
        </div>
      </div>
    </main>
  );
}
