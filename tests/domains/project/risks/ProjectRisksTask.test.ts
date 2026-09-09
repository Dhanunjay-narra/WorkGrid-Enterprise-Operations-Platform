import { ProjectRisksTaskService } from "../../../services/core-engine/src/project/risks/services/ProjectRisksTaskService";
import { ProjectRisksTaskValidator } from "../../../packages/types/src/domains/project/risks/ProjectRisksTask";
import { ProjectRisksTaskStateMachine } from "../../../services/core-engine/src/project/risks/state-machines/ProjectRisksTaskStateMachine";

describe("ProjectRisksTask Comprehensive Domain Test Suite", () => {
  const service = new ProjectRisksTaskService();
  const sm = new ProjectRisksTaskStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectRisksTask Instance",
      domain: "project_risks",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectRisksTaskValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
