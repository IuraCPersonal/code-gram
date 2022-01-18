import React, { useState, useEffect } from "react";

import { useMsal } from "@azure/msal-react";
import { useAuth } from "../../auth/AccountProvider";

import { Button, Typography, Avatar, Grid } from "@mui/material";
import NavProfileButton from "../Profile/NavProfileButton";

import { FaUserAlt } from "react-icons/fa";

import styles from "./Navbar.module.css";

const Navbar = (props: { onShowProfile: any; }) => {
  const { instance } = useMsal();
  const user = useAuth();

  useEffect(() => {
    (async () => {
      if (user) {
        const token = await instance.acquireTokenSilent({
          account: user,
          scopes: [window._env_.scope],
        });
        // console.log(token);
      }
    })();
  }, [instance, user]);
  // console.log(user);

  return (
    <nav className={`${styles.navbar} ${styles.container}`}>
      <div className={styles["item"]}>
        <span className={styles["navbar__logo"]}>
          <span className={styles["navbar__logo__code"]}>&lt;code&gt;</span>
          <span className={styles["navbar__logo__gram"]}>gram</span>
        </span>
      </div>
      <div className={`${styles.flexContainer} ${styles.rightItemContainer}`}>
        {user ? (
          <>
            <NavProfileButton onClick={props.onShowProfile} />
            <Button
              className={styles.gridItem}
              onClick={() => instance.logoutRedirect()}
            >
              <Grid container direction="row" spacing={3}>
                <Grid item>
                  <Typography color="black" fontFamily={"Helvetica"}>
                    Log out{" "}
                  </Typography>
                </Grid>
              </Grid>
            </Button>
          </>
        ) : (
          <Button
            className={styles.gridItem}
            onClick={() => instance.loginRedirect({ scopes: [] })}
          >
            <Grid container direction="row" spacing={3}>
              <Grid item>
                <Typography color="black" fontFamily={"Helvetica"}>
                  Log in{" "}
                </Typography>
              </Grid>
            </Grid>
          </Button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
