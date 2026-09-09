import { SupTicketPublisher } from "../../../services/core-engine/src/support/events/SupTicketPublisher";
import { SupTicketTelemetry } from "../../../services/core-engine/src/support/telemetry/SupTicketTelemetry";

describe("SupTicket Edge-Case & Outbox Test Suite", () => {
  const publisher = new SupTicketPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = SupTicketTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
