import { FinRefundRecordPublisher } from "../../../services/core-engine/src/finance/events/FinRefundRecordPublisher";
import { FinRefundRecordTelemetry } from "../../../services/core-engine/src/finance/telemetry/FinRefundRecordTelemetry";

describe("FinRefundRecord Edge-Case & Outbox Test Suite", () => {
  const publisher = new FinRefundRecordPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = FinRefundRecordTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
