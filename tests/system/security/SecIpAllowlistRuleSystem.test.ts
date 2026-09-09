import { SecIpAllowlistRuleRpcServer } from "../../../services/core-engine/src/security/rpc/servers/SecIpAllowlistRuleRpcServer";
import { SecIpAllowlistRuleFormValidator } from "../../../packages/types/src/forms/security/SecIpAllowlistRuleFormSchema";

describe("SecIpAllowlistRule System Level Integration Test", () => {
  const server = new SecIpAllowlistRuleRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = SecIpAllowlistRuleFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
