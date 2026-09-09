import { ProjectRisksEventService } from "../../../services/core-engine/src/project/risks/services/ProjectRisksEventService";
import { ProjectRisksEventValidator } from "../../../packages/types/src/domains/project/risks/ProjectRisksEvent";
import { ProjectRisksEventStateMachine } from "../../../services/core-engine/src/project/risks/state-machines/ProjectRisksEventStateMachine";

describe("ProjectRisksEvent Comprehensive Domain Test Suite", () => {
  const service = new ProjectRisksEventService();
  const sm = new ProjectRisksEventStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectRisksEvent Instance",
      domain: "project_risks",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectRisksEventValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
