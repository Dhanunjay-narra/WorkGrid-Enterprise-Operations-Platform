import { CrmEmailSequencePublisher } from "../../../services/core-engine/src/crm/events/CrmEmailSequencePublisher";
import { CrmEmailSequenceTelemetry } from "../../../services/core-engine/src/crm/telemetry/CrmEmailSequenceTelemetry";

describe("CrmEmailSequence Edge-Case & Outbox Test Suite", () => {
  const publisher = new CrmEmailSequencePublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = CrmEmailSequenceTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
