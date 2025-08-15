export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <nav>Browse all categories</nav>
            {children} 
        </div>
    );
}