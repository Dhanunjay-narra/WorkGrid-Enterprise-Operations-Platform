import { EvtConsumerGroupRpcServer } from "../../../services/core-engine/src/events/rpc/servers/EvtConsumerGroupRpcServer";
import { EvtConsumerGroupFormValidator } from "../../../packages/types/src/forms/events/EvtConsumerGroupFormSchema";

describe("EvtConsumerGroup System Level Integration Test", () => {
  const server = new EvtConsumerGroupRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = EvtConsumerGroupFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
