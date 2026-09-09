import { IntConnectorConfigRpcServer } from "../../../services/core-engine/src/integrations/rpc/servers/IntConnectorConfigRpcServer";
import { IntConnectorConfigFormValidator } from "../../../packages/types/src/forms/integrations/IntConnectorConfigFormSchema";

describe("IntConnectorConfig System Level Integration Test", () => {
  const server = new IntConnectorConfigRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = IntConnectorConfigFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
