import { observer } from "mobx-react-lite";
import React from "react";
import { Link } from "react-router-dom";
import { Card, Icon, Image } from "semantic-ui-react";
import { Profile } from "../../App/Models/profile";
interface Props {
  profile: Profile;
}

export default observer(function ProfileCard({ profile }: Props) {
  function shorten(str: string | undefined) {
    if (str) {
      return str.length > 40 ? str.substring(0, 37) + "..." : str;
    }
  }
  return (
    <div>
      <Card as={Link} to={`/profiles/${profile.username}`}>
        <Image src={profile.image || "/assets/user.png"} />
        <Card.Content>
          <Card.Header>{profile.displayName}</Card.Header>
          <Card.Description>{shorten(profile.bio)}</Card.Description>
        </Card.Content>

        <Card.Content extra>
          <Icon name="user" />
          20 followers
        </Card.Content>
      </Card>
    </div>
  );
});
