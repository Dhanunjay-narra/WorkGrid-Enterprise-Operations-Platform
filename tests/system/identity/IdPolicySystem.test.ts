import { IdPolicyRpcServer } from "../../../services/core-engine/src/identity/rpc/servers/IdPolicyRpcServer";
import { IdPolicyFormValidator } from "../../../packages/types/src/forms/identity/IdPolicyFormSchema";

describe("IdPolicy System Level Integration Test", () => {
  const server = new IdPolicyRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = IdPolicyFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
