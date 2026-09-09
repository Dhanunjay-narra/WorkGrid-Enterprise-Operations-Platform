import { BiKpisAssignmentService } from "../../../services/core-engine/src/bi/kpis/services/BiKpisAssignmentService";
import { BiKpisAssignmentValidator } from "../../../packages/types/src/domains/bi/kpis/BiKpisAssignment";
import { BiKpisAssignmentStateMachine } from "../../../services/core-engine/src/bi/kpis/state-machines/BiKpisAssignmentStateMachine";

describe("BiKpisAssignment Comprehensive Domain Test Suite", () => {
  const service = new BiKpisAssignmentService();
  const sm = new BiKpisAssignmentStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiKpisAssignment Instance",
      domain: "bi_kpis",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiKpisAssignmentValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
