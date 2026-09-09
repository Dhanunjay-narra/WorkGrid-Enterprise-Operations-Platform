import { DmsFilesAssignmentService } from "../../../services/core-engine/src/dms/files/services/DmsFilesAssignmentService";
import { DmsFilesAssignmentValidator } from "../../../packages/types/src/domains/dms/files/DmsFilesAssignment";
import { DmsFilesAssignmentStateMachine } from "../../../services/core-engine/src/dms/files/state-machines/DmsFilesAssignmentStateMachine";

describe("DmsFilesAssignment Comprehensive Domain Test Suite", () => {
  const service = new DmsFilesAssignmentService();
  const sm = new DmsFilesAssignmentStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsFilesAssignment Instance",
      domain: "dms_files",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsFilesAssignmentValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
