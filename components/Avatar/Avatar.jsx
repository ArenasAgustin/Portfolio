import { useEffect, useState } from "react";
import Avatar1 from "../../assets/avatar1.gif";
import Avatar2 from "../../assets/avatar2.gif";
import Avatar3 from "../../assets/avatar3.gif";
import Avatar4 from "../../assets/avatar4.gif";
import Image from "next/image";

export default function Avatar() {
  const [randomAvatar, setRandomAvatar] = useState(Avatar1);

  useEffect(() => {
    const avatars = [Avatar1, Avatar2, Avatar3, Avatar4];
    const random = Math.floor(Math.random() * avatars.length);
    setRandomAvatar(avatars[random]);

    return () => {
      setRandomAvatar(avatars[random]);
    };
  }, []);

  return (
    <div className="avatar">
      <div className="avatar__container">
        <picture>
          <Image
            className="avatar__img"
            src={randomAvatar}
            alt="profile"
            loading="lazy"
            width="100%"
            height="100%"
          />
        </picture>
      </div>
    </div>
  );
}
