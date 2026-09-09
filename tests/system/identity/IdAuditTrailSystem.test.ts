import { IdAuditTrailRpcServer } from "../../../services/core-engine/src/identity/rpc/servers/IdAuditTrailRpcServer";
import { IdAuditTrailFormValidator } from "../../../packages/types/src/forms/identity/IdAuditTrailFormSchema";

describe("IdAuditTrail System Level Integration Test", () => {
  const server = new IdAuditTrailRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = IdAuditTrailFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
