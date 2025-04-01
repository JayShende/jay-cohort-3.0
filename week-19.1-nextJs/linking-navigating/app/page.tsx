import { redirect } from "next/navigation";

export default function Dashboard() {
    const isLoggedIn = false;

    if (!isLoggedIn) {
        redirect("/pages/signin"); // Redirect to login if not authenticated
    }

    return <h1>Welcome to Dashboard</h1>;
}
