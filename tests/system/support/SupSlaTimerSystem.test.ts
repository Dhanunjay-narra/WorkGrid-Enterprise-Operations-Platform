import { SupSlaTimerRpcServer } from "../../../services/core-engine/src/support/rpc/servers/SupSlaTimerRpcServer";
import { SupSlaTimerFormValidator } from "../../../packages/types/src/forms/support/SupSlaTimerFormSchema";

describe("SupSlaTimer System Level Integration Test", () => {
  const server = new SupSlaTimerRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = SupSlaTimerFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
