import { SecRateLimitCounterRpcServer } from "../../../services/core-engine/src/security/rpc/servers/SecRateLimitCounterRpcServer";
import { SecRateLimitCounterFormValidator } from "../../../packages/types/src/forms/security/SecRateLimitCounterFormSchema";

describe("SecRateLimitCounter System Level Integration Test", () => {
  const server = new SecRateLimitCounterRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = SecRateLimitCounterFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
