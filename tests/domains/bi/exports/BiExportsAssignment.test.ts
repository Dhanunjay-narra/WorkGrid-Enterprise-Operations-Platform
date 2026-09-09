import { BiExportsAssignmentService } from "../../../services/core-engine/src/bi/exports/services/BiExportsAssignmentService";
import { BiExportsAssignmentValidator } from "../../../packages/types/src/domains/bi/exports/BiExportsAssignment";
import { BiExportsAssignmentStateMachine } from "../../../services/core-engine/src/bi/exports/state-machines/BiExportsAssignmentStateMachine";

describe("BiExportsAssignment Comprehensive Domain Test Suite", () => {
  const service = new BiExportsAssignmentService();
  const sm = new BiExportsAssignmentStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiExportsAssignment Instance",
      domain: "bi_exports",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiExportsAssignmentValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
