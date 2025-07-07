import { Form } from "@remix-run/react";

export default function LoginRoute() {
  return (
    <div>
      <h1>Login</h1>
      <Form className="block">
        <input
          name="email"
          type="email"
          placeholder="Email"
          defaultValue={""}
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          required
        />

        <button type="submit">Login</button>
      </Form>
    </div>
  );
}
