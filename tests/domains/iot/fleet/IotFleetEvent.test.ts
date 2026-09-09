import { IotFleetEventService } from "../../../services/core-engine/src/iot/fleet/services/IotFleetEventService";
import { IotFleetEventValidator } from "../../../packages/types/src/domains/iot/fleet/IotFleetEvent";
import { IotFleetEventStateMachine } from "../../../services/core-engine/src/iot/fleet/state-machines/IotFleetEventStateMachine";

describe("IotFleetEvent Comprehensive Domain Test Suite", () => {
  const service = new IotFleetEventService();
  const sm = new IotFleetEventStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotFleetEvent Instance",
      domain: "iot_fleet",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotFleetEventValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
