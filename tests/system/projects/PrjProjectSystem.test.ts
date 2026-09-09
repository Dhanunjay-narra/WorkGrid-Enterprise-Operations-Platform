import { PrjProjectRpcServer } from "../../../services/core-engine/src/projects/rpc/servers/PrjProjectRpcServer";
import { PrjProjectFormValidator } from "../../../packages/types/src/forms/projects/PrjProjectFormSchema";

describe("PrjProject System Level Integration Test", () => {
  const server = new PrjProjectRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = PrjProjectFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
