import { AuthKeys } from "./auth-keys.js";
import { SecretsMigration } from "./secrets-migration.js";
import { log, wrapper } from "./util.js";

export const handler = wrapper(async (cfnRequest: any) => {
  log("onEventHandler", cfnRequest);

  switch (cfnRequest.ResourceType) {
    case "Custom::SecretsMigration":
      await SecretsMigration(cfnRequest);
      break;
    case "Custom::AuthKeys":
      await AuthKeys(cfnRequest);
      break;
  }
});