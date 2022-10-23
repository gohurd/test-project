export function Button({ userId }) {
  const userName = "Artem";
  return (
    <header style={{ display: "flex" }}>
      <div>{userName}</div>
      <div>{userId}</div>
    </header>
  );
}
