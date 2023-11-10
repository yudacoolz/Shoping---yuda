import { useRouteError } from "react-router-dom";


const ErrorPage = () => {
const error = useRouteError();
return(
    <div className="min-h-screen  flex flex-col justify-center items-center">
    <h1 className="text-3xl font-bold">Opps!</h1>
    <p className="text-xl font-medium mt-5">Sorry, ada Error</p>
    <p className="text-lg font-semibold mt-4">Error: {error.statusText  || error.message}</p>
    </div>
);
}

export default ErrorPage;