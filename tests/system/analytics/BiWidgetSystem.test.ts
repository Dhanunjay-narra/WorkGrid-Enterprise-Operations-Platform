import { BiWidgetRpcServer } from "../../../services/core-engine/src/analytics/rpc/servers/BiWidgetRpcServer";
import { BiWidgetFormValidator } from "../../../packages/types/src/forms/analytics/BiWidgetFormSchema";

describe("BiWidget System Level Integration Test", () => {
  const server = new BiWidgetRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = BiWidgetFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
