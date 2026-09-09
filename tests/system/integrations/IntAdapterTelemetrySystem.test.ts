import { IntAdapterTelemetryRpcServer } from "../../../services/core-engine/src/integrations/rpc/servers/IntAdapterTelemetryRpcServer";
import { IntAdapterTelemetryFormValidator } from "../../../packages/types/src/forms/integrations/IntAdapterTelemetryFormSchema";

describe("IntAdapterTelemetry System Level Integration Test", () => {
  const server = new IntAdapterTelemetryRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = IntAdapterTelemetryFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
