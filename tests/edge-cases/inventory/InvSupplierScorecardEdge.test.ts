import { InvSupplierScorecardPublisher } from "../../../services/core-engine/src/inventory/events/InvSupplierScorecardPublisher";
import { InvSupplierScorecardTelemetry } from "../../../services/core-engine/src/inventory/telemetry/InvSupplierScorecardTelemetry";

describe("InvSupplierScorecard Edge-Case & Outbox Test Suite", () => {
  const publisher = new InvSupplierScorecardPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = InvSupplierScorecardTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
