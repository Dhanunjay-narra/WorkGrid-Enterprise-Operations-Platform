import { CrmActivityRpcServer } from "../../../services/core-engine/src/crm/rpc/servers/CrmActivityRpcServer";
import { CrmActivityFormValidator } from "../../../packages/types/src/forms/crm/CrmActivityFormSchema";

describe("CrmActivity System Level Integration Test", () => {
  const server = new CrmActivityRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = CrmActivityFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
