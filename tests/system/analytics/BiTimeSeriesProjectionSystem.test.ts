import { BiTimeSeriesProjectionRpcServer } from "../../../services/core-engine/src/analytics/rpc/servers/BiTimeSeriesProjectionRpcServer";
import { BiTimeSeriesProjectionFormValidator } from "../../../packages/types/src/forms/analytics/BiTimeSeriesProjectionFormSchema";

describe("BiTimeSeriesProjection System Level Integration Test", () => {
  const server = new BiTimeSeriesProjectionRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = BiTimeSeriesProjectionFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
