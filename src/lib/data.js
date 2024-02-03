import avatar1 from "@/../public/avatar/1.jpg";
import avatar2 from "@/../public/avatar/2.jpg";
import avatar3 from "@/../public/avatar/3.jpg";
import avatar4 from "@/../public/avatar/4.jpg";
import postImage1 from "@/../public/posts/post (1).jpeg";
import postImage10 from "@/../public/posts/post (10).jpeg";
import postImage3 from "@/../public/posts/post (3).jpeg";
import postImage4 from "@/../public/posts/post (4).jpeg";
import postImage5 from "@/../public/posts/post (5).jpeg";
import postImage7 from "@/../public/posts/post (7).jpeg";
import postImage8 from "@/../public/posts/post (8).jpeg";
import postImage9 from "@/../public/posts/post (9).jpeg";
import { Post, User } from "./models";
import connectDB from "./utilies";

export const posts = [
  {
    id: 1,
    title: "Tents",
    description:
      "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    image: postImage1,
    date: "Jan 27 2024",
    userId: 1,
  },
  {
    id: 2,
    title: "Woman in blue",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit.",
    image: postImage10,
    date: "Jan 27 2024",
    userId: 2,
  },
  {
    id: 3,
    title: "A beatiful summer day",
    description:
      "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    image: postImage3,
    date: "Jan 27 2024",
    userId: 3,
  },
  {
    id: 4,
    title: "Japanese customs",
    description:
      "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    image: postImage4,
    date: "Jan 27 2024",
    userId: 4,
  },
  {
    id: 5,
    title: "Wedding Morning",
    description:
      "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
    image: postImage5,
    date: "Jan 27 2024",
    userId: 1,
  },
  {
    id: 6,
    title: "Modernism",
    description:
      "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
    image: postImage9,
    date: "Jan 27 2024",
    userId: 2,
  },
  {
    id: 7,
    title: "Countryside",
    description:
      "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae",
    image: postImage7,
    date: "Jan 27 2024",
    userId: 3,
  },
  {
    id: 8,
    title: "Pasture",
    description:
      "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
    image: postImage8,
    date: "Jan 27 2024",
    userId: 4,
  },
];

export const users = [
  { id: 1, author: "Leanne Graham", profile: avatar1 },
  { id: 2, author: "Ervin Howell", profile: avatar2 },
  { id: 3, author: "Clementine Bauch", profile: avatar3 },
  { id: 4, author: "Patricia Lebsack", profile: avatar4 },
];

// export const getPosts = async () => {
//   try {
//     connectDB();
//     const posts = await Post.find();
//     return posts;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// export const getPost = async (slug) => {
//   try {
//     connectDB();
//     const post = await Post.find({ slug });
//     return post;
//   } catch (error) {
//     throw new Error("Failed to fetch post!");
//   }
// };

// export const getUsers = async () => {
//   try {
//     connectDB();
//     const users = await User.find();
//     return users;
//   } catch (error) {
//     throw new Error("Failed to fetch users!");
//   }
// };

// export const getUser = async (id) => {
//   try {
//     connectDB();
//     const user = await User.find({ id });
//     return user;
//   } catch (error) {
//     throw new Error("Failed to fetch user!");
//   }
// };
