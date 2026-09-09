import { IotFleetMappingService } from "../../../services/core-engine/src/iot/fleet/services/IotFleetMappingService";
import { IotFleetMappingValidator } from "../../../packages/types/src/domains/iot/fleet/IotFleetMapping";
import { IotFleetMappingStateMachine } from "../../../services/core-engine/src/iot/fleet/state-machines/IotFleetMappingStateMachine";

describe("IotFleetMapping Comprehensive Domain Test Suite", () => {
  const service = new IotFleetMappingService();
  const sm = new IotFleetMappingStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotFleetMapping Instance",
      domain: "iot_fleet",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotFleetMappingValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
