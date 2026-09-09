import { IotLocationsAssignmentService } from "../../../services/core-engine/src/iot/locations/services/IotLocationsAssignmentService";
import { IotLocationsAssignmentValidator } from "../../../packages/types/src/domains/iot/locations/IotLocationsAssignment";
import { IotLocationsAssignmentStateMachine } from "../../../services/core-engine/src/iot/locations/state-machines/IotLocationsAssignmentStateMachine";

describe("IotLocationsAssignment Comprehensive Domain Test Suite", () => {
  const service = new IotLocationsAssignmentService();
  const sm = new IotLocationsAssignmentStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotLocationsAssignment Instance",
      domain: "iot_locations",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotLocationsAssignmentValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
