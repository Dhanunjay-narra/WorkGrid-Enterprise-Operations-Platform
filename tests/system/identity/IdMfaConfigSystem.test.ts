import { IdMfaConfigRpcServer } from "../../../services/core-engine/src/identity/rpc/servers/IdMfaConfigRpcServer";
import { IdMfaConfigFormValidator } from "../../../packages/types/src/forms/identity/IdMfaConfigFormSchema";

describe("IdMfaConfig System Level Integration Test", () => {
  const server = new IdMfaConfigRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = IdMfaConfigFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
