import { NavigationVertical } from "@samgl/graffiti-ui";
import {
  House,
  MagnifyingGlass,
  Bell,
  EnvelopeSimple,
  BookmarksSimple,
  User,
  GearSix,
  DotsThreeOutline,
} from "@phosphor-icons/react";
import Logo from "./Logo";

const links = [
  {
    icon: <House weight="light" />,
    text: "Home",
    to: "/",
  },
  {
    icon: <MagnifyingGlass weight="light" />,
    text: "Explore",
    to: "/explore",
  },
  {
    icon: <Bell weight="light" />,
    text: "Notifications",
    to: "/notifications",
  },
  {
    icon: <EnvelopeSimple weight="light" />,
    text: "Messages",
    to: "/messages",
  },
  {
    icon: <BookmarksSimple weight="light" />,
    text: "Bookmarks",
    to: "/bookmarks",
  },
  {
    icon: <User weight="light" />,
    text: "Profile",
    to: "/profile",
  },
  {
    icon: <GearSix weight="light" />,
    text: "Settings",
    to: "/settings",
  },
  {
    icon: <DotsThreeOutline weight="light" />,
    text: "More",
    to: "/more",
  },
];

function Sidebar() {
  return (
    <>
      <Logo />
      <NavigationVertical links={links} $linkSize="lg" />
    </>
  );
}

export default Sidebar;
