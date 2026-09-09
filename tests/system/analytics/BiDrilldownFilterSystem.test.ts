import { BiDrilldownFilterRpcServer } from "../../../services/core-engine/src/analytics/rpc/servers/BiDrilldownFilterRpcServer";
import { BiDrilldownFilterFormValidator } from "../../../packages/types/src/forms/analytics/BiDrilldownFilterFormSchema";

describe("BiDrilldownFilter System Level Integration Test", () => {
  const server = new BiDrilldownFilterRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = BiDrilldownFilterFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
