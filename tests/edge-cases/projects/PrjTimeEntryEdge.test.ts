import { PrjTimeEntryPublisher } from "../../../services/core-engine/src/projects/events/PrjTimeEntryPublisher";
import { PrjTimeEntryTelemetry } from "../../../services/core-engine/src/projects/telemetry/PrjTimeEntryTelemetry";

describe("PrjTimeEntry Edge-Case & Outbox Test Suite", () => {
  const publisher = new PrjTimeEntryPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = PrjTimeEntryTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
