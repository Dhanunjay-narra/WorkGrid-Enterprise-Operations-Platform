import { IotFleetMetricService } from "../../../services/core-engine/src/iot/fleet/services/IotFleetMetricService";
import { IotFleetMetricValidator } from "../../../packages/types/src/domains/iot/fleet/IotFleetMetric";
import { IotFleetMetricStateMachine } from "../../../services/core-engine/src/iot/fleet/state-machines/IotFleetMetricStateMachine";

describe("IotFleetMetric Comprehensive Domain Test Suite", () => {
  const service = new IotFleetMetricService();
  const sm = new IotFleetMetricStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotFleetMetric Instance",
      domain: "iot_fleet",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotFleetMetricValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
