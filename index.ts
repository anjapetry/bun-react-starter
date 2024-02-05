const server = Bun.serve({
    port: Bun.env.PORT || 8000,
    fetch(req) {
        return new Response('Hello Bunnies!');
    },
});

console.log(`Listening on port ${server.port}`);