import { InvReorderRuleRpcServer } from "../../../services/core-engine/src/inventory/rpc/servers/InvReorderRuleRpcServer";
import { InvReorderRuleFormValidator } from "../../../packages/types/src/forms/inventory/InvReorderRuleFormSchema";

describe("InvReorderRule System Level Integration Test", () => {
  const server = new InvReorderRuleRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = InvReorderRuleFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
