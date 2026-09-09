import { CrmNoteRpcServer } from "../../../services/core-engine/src/crm/rpc/servers/CrmNoteRpcServer";
import { CrmNoteFormValidator } from "../../../packages/types/src/forms/crm/CrmNoteFormSchema";

describe("CrmNote System Level Integration Test", () => {
  const server = new CrmNoteRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = CrmNoteFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
