import React from "react";

import { useRouteMatch, Switch, useLocation } from "react-router-dom";
import { AppContainer, BackButton, PrivateRoute } from "@upyog/digit-ui-react-components";

import { useTranslation } from "react-i18next";

const App = () => {
  const { t } = useTranslation();
  const { path, url, ...match } = useRouteMatch();
  const location = useLocation();

  const CreateComplaint = Digit?.ComponentRegistryService?.getComponent("BMCCreate");


  return (
    <React.Fragment>
      <div className="bmc-citizen-wrapper">
        {!location.pathname.includes("/response") && <BackButton>{t("CS_COMMON_BACK")}</BackButton>}
        <Switch>
          {/* <AppContainer> */}
          <PrivateRoute path={`${path}/create-abc/anc`} component={CreateComplaint} />


          {/* </AppContainer> */}
        </Switch>
      </div>
    </React.Fragment>
  );
};

export default App;
