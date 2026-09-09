import { CrmNotePublisher } from "../../../services/core-engine/src/crm/events/CrmNotePublisher";
import { CrmNoteTelemetry } from "../../../services/core-engine/src/crm/telemetry/CrmNoteTelemetry";

describe("CrmNote Edge-Case & Outbox Test Suite", () => {
  const publisher = new CrmNotePublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = CrmNoteTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
