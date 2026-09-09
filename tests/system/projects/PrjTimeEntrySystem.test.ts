import { PrjTimeEntryRpcServer } from "../../../services/core-engine/src/projects/rpc/servers/PrjTimeEntryRpcServer";
import { PrjTimeEntryFormValidator } from "../../../packages/types/src/forms/projects/PrjTimeEntryFormSchema";

describe("PrjTimeEntry System Level Integration Test", () => {
  const server = new PrjTimeEntryRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = PrjTimeEntryFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
