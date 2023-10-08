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
      <Card className="mt-6 lg:w-96 md:w-96  bg-inherit p-6 rounded-2xl  hover:bg-yellow-400 shadow-2xl mx-5">
        <CardHeader color="blue-gray" className=" h-min">
          <img src={imgSrc} alt="card-image" />  
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {title}
          </Typography>
          <Typography>{description}</Typography>
        </CardBody>
        <CardFooter className="pt-0">
        <button className="bg-[#4CAF4F] p-2 shadow-2xl rounded-lg hover:bg-[#64c967] "><a  target="_blank" href={link}>Live Preview</a></button>

        </CardFooter>
      </Card>
    );
  }
  