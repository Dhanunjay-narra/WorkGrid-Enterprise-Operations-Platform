import { SecTamperLogRpcServer } from "../../../services/core-engine/src/security/rpc/servers/SecTamperLogRpcServer";
import { SecTamperLogFormValidator } from "../../../packages/types/src/forms/security/SecTamperLogFormSchema";

describe("SecTamperLog System Level Integration Test", () => {
  const server = new SecTamperLogRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = SecTamperLogFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
