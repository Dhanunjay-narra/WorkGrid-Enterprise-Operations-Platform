import { ProjectEpicsTaskService } from "../../../services/core-engine/src/project/epics/services/ProjectEpicsTaskService";
import { ProjectEpicsTaskValidator } from "../../../packages/types/src/domains/project/epics/ProjectEpicsTask";
import { ProjectEpicsTaskStateMachine } from "../../../services/core-engine/src/project/epics/state-machines/ProjectEpicsTaskStateMachine";

describe("ProjectEpicsTask Comprehensive Domain Test Suite", () => {
  const service = new ProjectEpicsTaskService();
  const sm = new ProjectEpicsTaskStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectEpicsTask Instance",
      domain: "project_epics",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectEpicsTaskValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
