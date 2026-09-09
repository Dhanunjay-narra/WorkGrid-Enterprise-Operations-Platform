import { ProjectRisksQueueService } from "../../../services/core-engine/src/project/risks/services/ProjectRisksQueueService";
import { ProjectRisksQueueValidator } from "../../../packages/types/src/domains/project/risks/ProjectRisksQueue";
import { ProjectRisksQueueStateMachine } from "../../../services/core-engine/src/project/risks/state-machines/ProjectRisksQueueStateMachine";

describe("ProjectRisksQueue Comprehensive Domain Test Suite", () => {
  const service = new ProjectRisksQueueService();
  const sm = new ProjectRisksQueueStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectRisksQueue Instance",
      domain: "project_risks",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectRisksQueueValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
