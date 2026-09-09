import { IntWebhookEventLogRpcServer } from "../../../services/core-engine/src/integrations/rpc/servers/IntWebhookEventLogRpcServer";
import { IntWebhookEventLogFormValidator } from "../../../packages/types/src/forms/integrations/IntWebhookEventLogFormSchema";

describe("IntWebhookEventLog System Level Integration Test", () => {
  const server = new IntWebhookEventLogRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = IntWebhookEventLogFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
