import expressLogo from "../../assets/images/technologies/express_js.jpg";
import mongoLogo from "../../assets/images/technologies/mongo_db.jpg";
import reactLogo from "../../assets/images/technologies/react_19.jpg";
import swaggerLogo from "../../assets/images/technologies/swagger.png";
import tailwindLogo from "../../assets/images/technologies/tailwind_css.png";
import tanstackLogo from "../../assets/images/technologies/tanstack_query.jpg";

export const techs = [
    { name: "React 19", image: reactLogo },
    { name: "TanStack Query", image: tanstackLogo },
    { name: "Tailwind CSS", image: tailwindLogo },
    { name: "Express.js", image: expressLogo },
    { name: "Mongo DB", image: mongoLogo },
    { name: "Swagger", image: swaggerLogo },
] as const;
