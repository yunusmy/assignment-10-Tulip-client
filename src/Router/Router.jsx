import {createBrowserRouter} from "react-router-dom";
import LayOut from "../LayOut/LayOut";
import Error from "../components/Common/Error";
import Home from "../pages/Home/Home";
import Register from './../pages/Register/Register';
import SignIn from './../pages/SignIn/SignIN';
import AllCampaign from "../pages/AllCampaign/AllCampaign";
import AllNewCampaign from "../pages/AllNewCampaign/AddCampaign";
import MyCampaign from './../pages/MyCampaign/MyCampaign';
import MyDonations from './../pages/MyDonations/MyDonations';
import PrivateRoute from "./PrivateRoute";
import CampaignDetails from "../pages/CampaignDetails/CampaignDetails";
import Donation from "../pages/Donation/Donation";



  const router = createBrowserRouter([

    {
        path: "/",
        element: <LayOut></LayOut>,
        errorElement:<Error></Error>,
        children:[
          {
            path:"/",
            element:<Home></Home>
          },
          {
            path:"/AllCampaign",
            element:<AllCampaign></AllCampaign>
          },
          {
            path:"/AddNewCampaign",
            element:<PrivateRoute><AllNewCampaign/></PrivateRoute>
          },
          {
            path:"/MyCampaign",
            element:<PrivateRoute><MyCampaign></MyCampaign></PrivateRoute>
          },
          
          {
            path:"/details/campaign/:id",
            element: <PrivateRoute>
            <CampaignDetails />
          </PrivateRoute>,
          loader: ({ params }) => fetch(`${import.meta.env.VITE_BASE_URL}/all/campaigns/${params.id}`)
          },
          {
            path:'/donation/:id',
            element:<PrivateRoute><Donation></Donation></PrivateRoute>
          },

          {
            path:"/MyDonations",
            element:<PrivateRoute><MyDonations></MyDonations></PrivateRoute>,
          },
         
        
          {
            path:"register",
            element: <Register></Register>
          },
          {
            path:"signIn",
            element:<SignIn></SignIn>  
          },

        ]
      },



  ]);

  export {router}