
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "./ui/card";

interface PostCardProps {
  title: string;
  body: string;
  id: number;
}

const PostCard: React.FC<PostCardProps> = ({ id, title, body }) => {
  console.log("PostCard Props:", { id, title, body }); // Debug props

  return (

<Card id='card' className= "shadow-xl hover:shadow-2xl   rounded-3xl p-4 bg-black text-white transform hover-translate-y-2 transition-all duration-300"
 style={{borderRadius:'30px'}}>

      <CardHeader>
        <CardTitle className="text-lg text-white">
          <span className="font-bold ">#Id {id}:</span> {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm text-gray-200">{body}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default PostCard;
