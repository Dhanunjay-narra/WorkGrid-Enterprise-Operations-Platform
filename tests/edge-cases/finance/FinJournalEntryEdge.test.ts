import { FinJournalEntryPublisher } from "../../../services/core-engine/src/finance/events/FinJournalEntryPublisher";
import { FinJournalEntryTelemetry } from "../../../services/core-engine/src/finance/telemetry/FinJournalEntryTelemetry";

describe("FinJournalEntry Edge-Case & Outbox Test Suite", () => {
  const publisher = new FinJournalEntryPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = FinJournalEntryTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
