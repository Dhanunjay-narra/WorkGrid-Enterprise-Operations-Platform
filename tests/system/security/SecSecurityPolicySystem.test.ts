import { SecSecurityPolicyRpcServer } from "../../../services/core-engine/src/security/rpc/servers/SecSecurityPolicyRpcServer";
import { SecSecurityPolicyFormValidator } from "../../../packages/types/src/forms/security/SecSecurityPolicyFormSchema";

describe("SecSecurityPolicy System Level Integration Test", () => {
  const server = new SecSecurityPolicyRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = SecSecurityPolicyFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
