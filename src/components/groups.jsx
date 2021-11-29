import React, { useEffect, useState } from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
} from '@mui/material';

const GROUP_LIST = [
  {
    id: 1,
    imageUrl: 'https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png',
    name: "React group",
    description: "Let's talk about React",
  },
  {
    id: 2,
    imageUrl: 'https://pbs.twimg.com/profile_images/727278046646915072/cb8U-gL6_400x400.jpg',
    name: "Angular group",
    description: "Let's talk about Angular",
  },
  {
    id: 3,
    imageUrl: 'https://pbs.twimg.com/profile_images/875996174305472512/upM71pVR_400x400.jpg',
    name: "Vue group",
    description: "Let's talk about Vue",
  },
];

const Groups = () => {
  const [groupList, setGroupList] = useState([]);

  useEffect(() => {
    setGroupList(GROUP_LIST);
  }, []);

  return (
    <>
      {groupList.map((group, index) => {
        return (
          <List key={index}>

            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  src={group.imageUrl}
                />
              </ListItemAvatar>
              <ListItemText
                primary={group.name}
                secondary={group.description}
              />
            </ListItem>

            <Divider variant="inset" component="li" />

          </List>
        );
      })}

    </>


  );
}

export default Groups;
