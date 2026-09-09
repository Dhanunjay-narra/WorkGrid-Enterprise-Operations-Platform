import { PrjSprintRpcServer } from "../../../services/core-engine/src/projects/rpc/servers/PrjSprintRpcServer";
import { PrjSprintFormValidator } from "../../../packages/types/src/forms/projects/PrjSprintFormSchema";

describe("PrjSprint System Level Integration Test", () => {
  const server = new PrjSprintRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = PrjSprintFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
