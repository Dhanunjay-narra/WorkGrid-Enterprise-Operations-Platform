import { SecBlockedIpRecordRpcServer } from "../../../services/core-engine/src/security/rpc/servers/SecBlockedIpRecordRpcServer";
import { SecBlockedIpRecordFormValidator } from "../../../packages/types/src/forms/security/SecBlockedIpRecordFormSchema";

describe("SecBlockedIpRecord System Level Integration Test", () => {
  const server = new SecBlockedIpRecordRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = SecBlockedIpRecordFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
