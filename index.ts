const server = Bun.serve({
    port: Bun.env.PORT || 8000,
    fetch(req) {
        const url = new URL(req.url);
        if (url.pathname === '/') return new Response('HomePage');
        if (url.pathname === '/blog') return new Response('Blog');
        if (url.pathname === '/about') return new Response('About');
        return new Response('404! Sorry, it looks like this page does not exist.');
    },
});

console.log(`Listening on port ${server.port}`);