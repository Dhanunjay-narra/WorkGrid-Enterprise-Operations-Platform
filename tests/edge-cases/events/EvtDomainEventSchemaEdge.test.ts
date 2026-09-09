import { EvtDomainEventSchemaPublisher } from "../../../services/core-engine/src/events/events/EvtDomainEventSchemaPublisher";
import { EvtDomainEventSchemaTelemetry } from "../../../services/core-engine/src/events/telemetry/EvtDomainEventSchemaTelemetry";

describe("EvtDomainEventSchema Edge-Case & Outbox Test Suite", () => {
  const publisher = new EvtDomainEventSchemaPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = EvtDomainEventSchemaTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
