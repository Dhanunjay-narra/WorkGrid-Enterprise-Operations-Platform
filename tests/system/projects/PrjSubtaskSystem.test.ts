import { PrjSubtaskRpcServer } from "../../../services/core-engine/src/projects/rpc/servers/PrjSubtaskRpcServer";
import { PrjSubtaskFormValidator } from "../../../packages/types/src/forms/projects/PrjSubtaskFormSchema";

describe("PrjSubtask System Level Integration Test", () => {
  const server = new PrjSubtaskRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = PrjSubtaskFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
