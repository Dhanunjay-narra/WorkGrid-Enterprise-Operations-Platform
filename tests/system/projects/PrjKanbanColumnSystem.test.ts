import { PrjKanbanColumnRpcServer } from "../../../services/core-engine/src/projects/rpc/servers/PrjKanbanColumnRpcServer";
import { PrjKanbanColumnFormValidator } from "../../../packages/types/src/forms/projects/PrjKanbanColumnFormSchema";

describe("PrjKanbanColumn System Level Integration Test", () => {
  const server = new PrjKanbanColumnRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = PrjKanbanColumnFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
