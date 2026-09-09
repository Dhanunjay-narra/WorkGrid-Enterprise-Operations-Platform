import { BiDataSourceRpcServer } from "../../../services/core-engine/src/analytics/rpc/servers/BiDataSourceRpcServer";
import { BiDataSourceFormValidator } from "../../../packages/types/src/forms/analytics/BiDataSourceFormSchema";

describe("BiDataSource System Level Integration Test", () => {
  const server = new BiDataSourceRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = BiDataSourceFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
