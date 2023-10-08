import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography, 
  } from "@material-tailwind/react"; 
  
  interface CardProps {
    title: string;
    description: string;
    imgSrc: string;  
    link: string; 
  }
  
  export default function CardDefault(props: CardProps) {
    const { title, description, imgSrc, link } = props;
    return (
      <Card className="mt-6 w-96 bg-white p-6 rounded-lg hover:bg-slate-200  x:w-[50%]">
        <CardHeader color="blue-gray" className="relative h-56">
          <img src={imgSrc} alt="card-image" />  
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {title}
          </Typography>
          <Typography>{description}</Typography>
        </CardBody>
        <CardFooter className="pt-0">
        <button className="bg-lime-700 p-2 shadow-2xl rounded-lg hover:bg-lime-500 "><a  target="_blank" href={link}>Live Preview</a></button>

        </CardFooter>
      </Card>
    );
  }
  