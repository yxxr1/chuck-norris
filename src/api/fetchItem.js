
export default async () =>
    fetch('https://api.chucknorris.io/jokes/random').then(r => r.json())
