import { EvtEventSubscriptionRpcServer } from "../../../services/core-engine/src/events/rpc/servers/EvtEventSubscriptionRpcServer";
import { EvtEventSubscriptionFormValidator } from "../../../packages/types/src/forms/events/EvtEventSubscriptionFormSchema";

describe("EvtEventSubscription System Level Integration Test", () => {
  const server = new EvtEventSubscriptionRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = EvtEventSubscriptionFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
