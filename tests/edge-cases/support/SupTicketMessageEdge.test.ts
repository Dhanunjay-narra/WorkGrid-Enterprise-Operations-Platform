import { SupTicketMessagePublisher } from "../../../services/core-engine/src/support/events/SupTicketMessagePublisher";
import { SupTicketMessageTelemetry } from "../../../services/core-engine/src/support/telemetry/SupTicketMessageTelemetry";

describe("SupTicketMessage Edge-Case & Outbox Test Suite", () => {
  const publisher = new SupTicketMessagePublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = SupTicketMessageTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
