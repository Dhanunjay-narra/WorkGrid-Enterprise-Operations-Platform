import { CommWebhookDispatchLogRpcServer } from "../../../services/core-engine/src/communication/rpc/servers/CommWebhookDispatchLogRpcServer";
import { CommWebhookDispatchLogFormValidator } from "../../../packages/types/src/forms/communication/CommWebhookDispatchLogFormSchema";

describe("CommWebhookDispatchLog System Level Integration Test", () => {
  const server = new CommWebhookDispatchLogRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = CommWebhookDispatchLogFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
