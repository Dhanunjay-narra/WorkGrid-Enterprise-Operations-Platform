import { PrjMilestoneRpcServer } from "../../../services/core-engine/src/projects/rpc/servers/PrjMilestoneRpcServer";
import { PrjMilestoneFormValidator } from "../../../packages/types/src/forms/projects/PrjMilestoneFormSchema";

describe("PrjMilestone System Level Integration Test", () => {
  const server = new PrjMilestoneRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = PrjMilestoneFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
