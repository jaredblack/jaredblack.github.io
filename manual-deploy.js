import { publish } from 'gh-pages';

publish(
    'public',
    {
        branch: 'gh-pages',
        silent: true,
        repo: 'https://' + process.env.GITHUB_TOKEN + '@github.com/jaredblack/jaredblack.github.io',
        user: {
            name: 'Jared Black',
            email: 'jrdblck@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
);