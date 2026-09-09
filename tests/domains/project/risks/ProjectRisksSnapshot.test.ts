import { ProjectRisksSnapshotService } from "../../../services/core-engine/src/project/risks/services/ProjectRisksSnapshotService";
import { ProjectRisksSnapshotValidator } from "../../../packages/types/src/domains/project/risks/ProjectRisksSnapshot";
import { ProjectRisksSnapshotStateMachine } from "../../../services/core-engine/src/project/risks/state-machines/ProjectRisksSnapshotStateMachine";

describe("ProjectRisksSnapshot Comprehensive Domain Test Suite", () => {
  const service = new ProjectRisksSnapshotService();
  const sm = new ProjectRisksSnapshotStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectRisksSnapshot Instance",
      domain: "project_risks",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectRisksSnapshotValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
