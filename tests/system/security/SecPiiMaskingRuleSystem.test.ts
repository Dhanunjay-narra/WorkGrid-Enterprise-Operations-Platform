import { SecPiiMaskingRuleRpcServer } from "../../../services/core-engine/src/security/rpc/servers/SecPiiMaskingRuleRpcServer";
import { SecPiiMaskingRuleFormValidator } from "../../../packages/types/src/forms/security/SecPiiMaskingRuleFormSchema";

describe("SecPiiMaskingRule System Level Integration Test", () => {
  const server = new SecPiiMaskingRuleRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = SecPiiMaskingRuleFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
