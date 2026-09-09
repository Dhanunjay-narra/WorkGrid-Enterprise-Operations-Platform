import { SecThreatEventRpcServer } from "../../../services/core-engine/src/security/rpc/servers/SecThreatEventRpcServer";
import { SecThreatEventFormValidator } from "../../../packages/types/src/forms/security/SecThreatEventFormSchema";

describe("SecThreatEvent System Level Integration Test", () => {
  const server = new SecThreatEventRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = SecThreatEventFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
