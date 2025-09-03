export default function Home() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Proto v2 (iPad Test)</h1>
      <p>このページが表示されれば 404 は解消です。</p>
      <ul>
        <li><a href="/api/health">/api/health</a></li>
        <li><a href="/shipping/labels">/shipping/labels</a></li>
      </ul>
    </main>
  );
}