import { IotFirmwareAssignmentService } from "../../../services/core-engine/src/iot/firmware/services/IotFirmwareAssignmentService";
import { IotFirmwareAssignmentValidator } from "../../../packages/types/src/domains/iot/firmware/IotFirmwareAssignment";
import { IotFirmwareAssignmentStateMachine } from "../../../services/core-engine/src/iot/firmware/state-machines/IotFirmwareAssignmentStateMachine";

describe("IotFirmwareAssignment Comprehensive Domain Test Suite", () => {
  const service = new IotFirmwareAssignmentService();
  const sm = new IotFirmwareAssignmentStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotFirmwareAssignment Instance",
      domain: "iot_firmware",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotFirmwareAssignmentValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
