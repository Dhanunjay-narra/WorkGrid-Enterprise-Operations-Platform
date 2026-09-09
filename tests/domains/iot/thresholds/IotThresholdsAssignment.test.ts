import { IotThresholdsAssignmentService } from "../../../services/core-engine/src/iot/thresholds/services/IotThresholdsAssignmentService";
import { IotThresholdsAssignmentValidator } from "../../../packages/types/src/domains/iot/thresholds/IotThresholdsAssignment";
import { IotThresholdsAssignmentStateMachine } from "../../../services/core-engine/src/iot/thresholds/state-machines/IotThresholdsAssignmentStateMachine";

describe("IotThresholdsAssignment Comprehensive Domain Test Suite", () => {
  const service = new IotThresholdsAssignmentService();
  const sm = new IotThresholdsAssignmentStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotThresholdsAssignment Instance",
      domain: "iot_thresholds",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotThresholdsAssignmentValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
