import { useEffect, useState } from "budget-react";

type GithubUserImageProps = {
  username: string;
};

function GithubUserImage({ username }: GithubUserImageProps) {
  const [src, setSrc] = useState("");

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        return response.json();
      })
      .then((user) => {
        setSrc(() => user.avatar_url);
      });
  }, [username]);

  return src ? (
    <a
      href={`https://github.com/${username}`}
      target="_blank"
      rel="noopener"
    >
      <img
        src={src}
        alt={username}
        title={`Go to ${username}'s github profile`}
        width="150"
      />
    </a>
  ) : (
    <p>Loading...</p>
  );
}

export default GithubUserImage;
