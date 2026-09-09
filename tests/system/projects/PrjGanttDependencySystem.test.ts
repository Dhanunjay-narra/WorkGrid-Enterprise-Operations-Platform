import { PrjGanttDependencyRpcServer } from "../../../services/core-engine/src/projects/rpc/servers/PrjGanttDependencyRpcServer";
import { PrjGanttDependencyFormValidator } from "../../../packages/types/src/forms/projects/PrjGanttDependencyFormSchema";

describe("PrjGanttDependency System Level Integration Test", () => {
  const server = new PrjGanttDependencyRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = PrjGanttDependencyFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
