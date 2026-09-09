import { SupCsatScoreRpcServer } from "../../../services/core-engine/src/support/rpc/servers/SupCsatScoreRpcServer";
import { SupCsatScoreFormValidator } from "../../../packages/types/src/forms/support/SupCsatScoreFormSchema";

describe("SupCsatScore System Level Integration Test", () => {
  const server = new SupCsatScoreRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = SupCsatScoreFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
