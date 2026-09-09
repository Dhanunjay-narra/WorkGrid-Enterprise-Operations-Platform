import { EvtDomainEventSchemaRpcServer } from "../../../services/core-engine/src/events/rpc/servers/EvtDomainEventSchemaRpcServer";
import { EvtDomainEventSchemaFormValidator } from "../../../packages/types/src/forms/events/EvtDomainEventSchemaFormSchema";

describe("EvtDomainEventSchema System Level Integration Test", () => {
  const server = new EvtDomainEventSchemaRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = EvtDomainEventSchemaFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
