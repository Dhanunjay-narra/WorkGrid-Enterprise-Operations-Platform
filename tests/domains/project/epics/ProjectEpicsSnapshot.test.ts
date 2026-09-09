import { ProjectEpicsSnapshotService } from "../../../services/core-engine/src/project/epics/services/ProjectEpicsSnapshotService";
import { ProjectEpicsSnapshotValidator } from "../../../packages/types/src/domains/project/epics/ProjectEpicsSnapshot";
import { ProjectEpicsSnapshotStateMachine } from "../../../services/core-engine/src/project/epics/state-machines/ProjectEpicsSnapshotStateMachine";

describe("ProjectEpicsSnapshot Comprehensive Domain Test Suite", () => {
  const service = new ProjectEpicsSnapshotService();
  const sm = new ProjectEpicsSnapshotStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectEpicsSnapshot Instance",
      domain: "project_epics",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectEpicsSnapshotValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
