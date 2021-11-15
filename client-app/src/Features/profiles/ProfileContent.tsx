import { observer } from "mobx-react-lite";
import React from "react";
import { Tab } from "semantic-ui-react";
import { Profile } from "../../App/Models/profile";
import { useStore } from "../../App/stores/store";
import ProfileAbout from "./ProfileAbout";
import ProfileFollowings from "./ProfileFollowings";
import ProfilePhotos from "./ProfilePhotos";

interface Props {
  profile: Profile;
}
export default observer(function ProfileContent({ profile }: Props) {
  const { profileStore } = useStore();
  const panes = [
    {
      menuItem: "About",
      render: () => (
        <Tab.Pane>
          {" "}
          <ProfileAbout />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Photos",
      render: () => (
        <Tab.Pane>
          <ProfilePhotos profile={profile} />
        </Tab.Pane>
      ),
    },
    { menuItem: "Events", render: () => <Tab.Pane> Events Content</Tab.Pane> },
    {
      menuItem: "Followers",
      render: () => (
        <Tab.Pane>
          {" "}
          <ProfileFollowings />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Following",
      render: () => (
        <Tab.Pane>
          {" "}
          <ProfileFollowings />
        </Tab.Pane>
      ),
    },
  ];

  return (
    <Tab
      menu={{ fluid: true, vertical: true }}
      menuPosition="right"
      panes={panes}
      onTabChange={(e, data) => profileStore.setActiveTab(data.activeIndex)}
    />
  );
});
