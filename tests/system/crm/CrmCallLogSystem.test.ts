import { CrmCallLogRpcServer } from "../../../services/core-engine/src/crm/rpc/servers/CrmCallLogRpcServer";
import { CrmCallLogFormValidator } from "../../../packages/types/src/forms/crm/CrmCallLogFormSchema";

describe("CrmCallLog System Level Integration Test", () => {
  const server = new CrmCallLogRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = CrmCallLogFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
