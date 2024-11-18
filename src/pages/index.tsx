import DataTable from "@/components/Table";
import { User } from "@/utils/userListing";
import { Box, Stack } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [userList, setUserList] = useState<User[] | []>([]);
  const [loader, setLoader] = useState<Boolean>(false);

  useEffect(() => {
    (async () => {
      try{
        setLoader(true);
        // We are able to do this using axios interceptor to make code more clean
        const response = await axios.get(
          "https://60ac9dff9e2d6b0017457815.mockapi.io/ag/contacts"
        );
        setUserList(response.data);
        setLoader(false);
      }catch(e){
        console.error("Something went wrong", e);
        setLoader(false);
      }
    })();
  }, []);

  return (
    <>
      <Head>
        <title>User Listing</title>
        <meta name="description" content="Arborgold Interview Round 2" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack>
        {loader ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "400px",
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <DataTable userList={userList} />
        )}
      </Stack>
    </>
  );
}
