import Profile from "./components/Profile";

const users = [
  { name: "Hedy Lamarr", imageUrl: "https://i.imgur.com/yXOvdOSs.jpg", imageSize: 90 },
  { name: "Sheddy", imageUrl: "https://i.imgur.com/yXOvdOSs.jpg", imageSize: 90 },
]

export default function App() {
  const profiles = users.map((user) => <Profile key={user.name} name={user.name} imageUrl={user.imageUrl} imageSize={user.imageSize} />)
  return (
    <div>
      {profiles}
    </div>
  );
}
