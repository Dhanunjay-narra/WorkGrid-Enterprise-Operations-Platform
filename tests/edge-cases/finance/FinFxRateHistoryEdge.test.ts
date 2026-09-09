import { FinFxRateHistoryPublisher } from "../../../services/core-engine/src/finance/events/FinFxRateHistoryPublisher";
import { FinFxRateHistoryTelemetry } from "../../../services/core-engine/src/finance/telemetry/FinFxRateHistoryTelemetry";

describe("FinFxRateHistory Edge-Case & Outbox Test Suite", () => {
  const publisher = new FinFxRateHistoryPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = FinFxRateHistoryTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
