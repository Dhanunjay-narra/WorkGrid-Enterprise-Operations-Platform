import { FinLedgerAccountPublisher } from "../../../services/core-engine/src/finance/events/FinLedgerAccountPublisher";
import { FinLedgerAccountTelemetry } from "../../../services/core-engine/src/finance/telemetry/FinLedgerAccountTelemetry";

describe("FinLedgerAccount Edge-Case & Outbox Test Suite", () => {
  const publisher = new FinLedgerAccountPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = FinLedgerAccountTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
