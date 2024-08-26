
export default function LoginForm() {
  return (
    <div>
      <form>
        <h2>Login</h2>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <button type="submit">Accedi</button>
      </form>
    </div>
  );
}

