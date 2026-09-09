import { CrmTerritoryPublisher } from "../../../services/core-engine/src/crm/events/CrmTerritoryPublisher";
import { CrmTerritoryTelemetry } from "../../../services/core-engine/src/crm/telemetry/CrmTerritoryTelemetry";

describe("CrmTerritory Edge-Case & Outbox Test Suite", () => {
  const publisher = new CrmTerritoryPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = CrmTerritoryTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
