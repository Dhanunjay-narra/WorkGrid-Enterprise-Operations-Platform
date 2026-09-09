import { PrjWorkspaceRpcServer } from "../../../services/core-engine/src/projects/rpc/servers/PrjWorkspaceRpcServer";
import { PrjWorkspaceFormValidator } from "../../../packages/types/src/forms/projects/PrjWorkspaceFormSchema";

describe("PrjWorkspace System Level Integration Test", () => {
  const server = new PrjWorkspaceRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = PrjWorkspaceFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
