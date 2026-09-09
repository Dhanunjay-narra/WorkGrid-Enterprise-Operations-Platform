import { IotFleetThresholdService } from "../../../services/core-engine/src/iot/fleet/services/IotFleetThresholdService";
import { IotFleetThresholdValidator } from "../../../packages/types/src/domains/iot/fleet/IotFleetThreshold";
import { IotFleetThresholdStateMachine } from "../../../services/core-engine/src/iot/fleet/state-machines/IotFleetThresholdStateMachine";

describe("IotFleetThreshold Comprehensive Domain Test Suite", () => {
  const service = new IotFleetThresholdService();
  const sm = new IotFleetThresholdStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotFleetThreshold Instance",
      domain: "iot_fleet",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotFleetThresholdValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
