import { SecDeviceTrustRecordRpcServer } from "../../../services/core-engine/src/security/rpc/servers/SecDeviceTrustRecordRpcServer";
import { SecDeviceTrustRecordFormValidator } from "../../../packages/types/src/forms/security/SecDeviceTrustRecordFormSchema";

describe("SecDeviceTrustRecord System Level Integration Test", () => {
  const server = new SecDeviceTrustRecordRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = SecDeviceTrustRecordFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
