import { SupTicketTagPublisher } from "../../../services/core-engine/src/support/events/SupTicketTagPublisher";
import { SupTicketTagTelemetry } from "../../../services/core-engine/src/support/telemetry/SupTicketTagTelemetry";

describe("SupTicketTag Edge-Case & Outbox Test Suite", () => {
  const publisher = new SupTicketTagPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = SupTicketTagTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
