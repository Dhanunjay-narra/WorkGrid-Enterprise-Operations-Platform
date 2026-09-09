import { PrjReleasePlanRpcServer } from "../../../services/core-engine/src/projects/rpc/servers/PrjReleasePlanRpcServer";
import { PrjReleasePlanFormValidator } from "../../../packages/types/src/forms/projects/PrjReleasePlanFormSchema";

describe("PrjReleasePlan System Level Integration Test", () => {
  const server = new PrjReleasePlanRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = PrjReleasePlanFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
