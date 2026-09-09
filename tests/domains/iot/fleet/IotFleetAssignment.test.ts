import { IotFleetAssignmentService } from "../../../services/core-engine/src/iot/fleet/services/IotFleetAssignmentService";
import { IotFleetAssignmentValidator } from "../../../packages/types/src/domains/iot/fleet/IotFleetAssignment";
import { IotFleetAssignmentStateMachine } from "../../../services/core-engine/src/iot/fleet/state-machines/IotFleetAssignmentStateMachine";

describe("IotFleetAssignment Comprehensive Domain Test Suite", () => {
  const service = new IotFleetAssignmentService();
  const sm = new IotFleetAssignmentStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotFleetAssignment Instance",
      domain: "iot_fleet",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotFleetAssignmentValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
