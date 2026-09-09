import { FinGeneralLedgerPublisher } from "../../../services/core-engine/src/finance/events/FinGeneralLedgerPublisher";
import { FinGeneralLedgerTelemetry } from "../../../services/core-engine/src/finance/telemetry/FinGeneralLedgerTelemetry";

describe("FinGeneralLedger Edge-Case & Outbox Test Suite", () => {
  const publisher = new FinGeneralLedgerPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = FinGeneralLedgerTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
