import { IntTransformationRuleRpcServer } from "../../../services/core-engine/src/integrations/rpc/servers/IntTransformationRuleRpcServer";
import { IntTransformationRuleFormValidator } from "../../../packages/types/src/forms/integrations/IntTransformationRuleFormSchema";

describe("IntTransformationRule System Level Integration Test", () => {
  const server = new IntTransformationRuleRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = IntTransformationRuleFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
