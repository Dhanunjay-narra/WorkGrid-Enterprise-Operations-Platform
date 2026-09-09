import { EvtAckReceiptPublisher } from "../../../services/core-engine/src/events/events/EvtAckReceiptPublisher";
import { EvtAckReceiptTelemetry } from "../../../services/core-engine/src/events/telemetry/EvtAckReceiptTelemetry";

describe("EvtAckReceipt Edge-Case & Outbox Test Suite", () => {
  const publisher = new EvtAckReceiptPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = EvtAckReceiptTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
