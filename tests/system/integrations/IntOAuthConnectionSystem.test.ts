import { IntOAuthConnectionRpcServer } from "../../../services/core-engine/src/integrations/rpc/servers/IntOAuthConnectionRpcServer";
import { IntOAuthConnectionFormValidator } from "../../../packages/types/src/forms/integrations/IntOAuthConnectionFormSchema";

describe("IntOAuthConnection System Level Integration Test", () => {
  const server = new IntOAuthConnectionRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = IntOAuthConnectionFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
