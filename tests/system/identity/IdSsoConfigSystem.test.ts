import { IdSsoConfigRpcServer } from "../../../services/core-engine/src/identity/rpc/servers/IdSsoConfigRpcServer";
import { IdSsoConfigFormValidator } from "../../../packages/types/src/forms/identity/IdSsoConfigFormSchema";

describe("IdSsoConfig System Level Integration Test", () => {
  const server = new IdSsoConfigRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = IdSsoConfigFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
