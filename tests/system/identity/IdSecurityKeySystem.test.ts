import { IdSecurityKeyRpcServer } from "../../../services/core-engine/src/identity/rpc/servers/IdSecurityKeyRpcServer";
import { IdSecurityKeyFormValidator } from "../../../packages/types/src/forms/identity/IdSecurityKeyFormSchema";

describe("IdSecurityKey System Level Integration Test", () => {
  const server = new IdSecurityKeyRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = IdSecurityKeyFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
