import GitHubButton from 'react-github-btn';

export default function Footer(props: any) {
  return (
    <footer className="bg-dracula-darker-800 flex flex-col items-center justify-center">
      <div className="text-lg mb-2">Contributions Welcome</div>
      <div className="flex gap-x-2 mb-2">
        <GitHubButton
          href="https://github.com/aynp/dracula-wallpapers-website"
          data-color-scheme="no-preference: dark; light: light; dark: dark;"
          data-icon="octicon-star"
          data-size="large"
          data-show-count="true"
          aria-label="Star aynp/dracula-wallpapers-website on GitHub">
          Star
        </GitHubButton>
        <GitHubButton
          href="https://github.com/aynp/dracula-wallpapers-website/fork"
          data-color-scheme="no-preference: dark; light: light; dark: dark;"
          data-icon="octicon-repo-forked"
          data-size="large"
          data-show-count="true"
          aria-label="Fork aynp/dracula-wallpapers-website on GitHub">
          Fork
        </GitHubButton>
      </div>
      <div className="">
        Made with ❤️ by{' '}
        <a href="https://github.com/aynp" className="text-dracula-blue">
          aynp
        </a>
      </div>
    </footer>
  );
}
