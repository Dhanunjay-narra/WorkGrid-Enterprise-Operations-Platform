import { IntHealthCheckPingRpcServer } from "../../../services/core-engine/src/integrations/rpc/servers/IntHealthCheckPingRpcServer";
import { IntHealthCheckPingFormValidator } from "../../../packages/types/src/forms/integrations/IntHealthCheckPingFormSchema";

describe("IntHealthCheckPing System Level Integration Test", () => {
  const server = new IntHealthCheckPingRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = IntHealthCheckPingFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
