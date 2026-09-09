import { IntMappingsAssignmentService } from "../../../services/core-engine/src/int/mappings/services/IntMappingsAssignmentService";
import { IntMappingsAssignmentValidator } from "../../../packages/types/src/domains/int/mappings/IntMappingsAssignment";
import { IntMappingsAssignmentStateMachine } from "../../../services/core-engine/src/int/mappings/state-machines/IntMappingsAssignmentStateMachine";

describe("IntMappingsAssignment Comprehensive Domain Test Suite", () => {
  const service = new IntMappingsAssignmentService();
  const sm = new IntMappingsAssignmentStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntMappingsAssignment Instance",
      domain: "int_mappings",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntMappingsAssignmentValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
