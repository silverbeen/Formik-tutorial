import React, { useEffect, useState } from "react";
import { StreamChat } from "stream-chat";
import { Channel, ChannelHeader, Chat, Window } from "stream-chat-react";

const client = StreamChat.getInstance("m4jhq65dm6bn");

const StreamChatting = () => {
  const [channel, setChannel] = useState<any>(null);

  useEffect(() => {
    const test = async () => {
      await client.setGuestUser({
        id: String(Math.floor(Math.random() * Date.now())),
        name: "Anonymous",
      });

      const channel = await client.channel("general", "test", {
        naem: "test",
      });

      setChannel(channel);
    };

    test();

    return () => {
      client.disconnectUser();
    };
  }, []);

  if (!channel) {
    return null;
  }

  return (
    <div>
      <Chat client={client}>
        <Channel channel={channel}>
          <Window>
            <ChannelHeader />
          </Window>
        </Channel>
      </Chat>
    </div>
  );
};

export default StreamChatting;
