import { IotLocationsThresholdService } from "../../../services/core-engine/src/iot/locations/services/IotLocationsThresholdService";
import { IotLocationsThresholdValidator } from "../../../packages/types/src/domains/iot/locations/IotLocationsThreshold";
import { IotLocationsThresholdStateMachine } from "../../../services/core-engine/src/iot/locations/state-machines/IotLocationsThresholdStateMachine";

describe("IotLocationsThreshold Comprehensive Domain Test Suite", () => {
  const service = new IotLocationsThresholdService();
  const sm = new IotLocationsThresholdStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotLocationsThreshold Instance",
      domain: "iot_locations",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotLocationsThresholdValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
