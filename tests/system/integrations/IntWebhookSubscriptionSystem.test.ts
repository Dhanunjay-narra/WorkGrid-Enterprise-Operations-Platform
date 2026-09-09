import { IntWebhookSubscriptionRpcServer } from "../../../services/core-engine/src/integrations/rpc/servers/IntWebhookSubscriptionRpcServer";
import { IntWebhookSubscriptionFormValidator } from "../../../packages/types/src/forms/integrations/IntWebhookSubscriptionFormSchema";

describe("IntWebhookSubscription System Level Integration Test", () => {
  const server = new IntWebhookSubscriptionRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = IntWebhookSubscriptionFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
