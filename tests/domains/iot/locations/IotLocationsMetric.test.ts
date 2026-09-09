import { IotLocationsMetricService } from "../../../services/core-engine/src/iot/locations/services/IotLocationsMetricService";
import { IotLocationsMetricValidator } from "../../../packages/types/src/domains/iot/locations/IotLocationsMetric";
import { IotLocationsMetricStateMachine } from "../../../services/core-engine/src/iot/locations/state-machines/IotLocationsMetricStateMachine";

describe("IotLocationsMetric Comprehensive Domain Test Suite", () => {
  const service = new IotLocationsMetricService();
  const sm = new IotLocationsMetricStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotLocationsMetric Instance",
      domain: "iot_locations",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotLocationsMetricValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
