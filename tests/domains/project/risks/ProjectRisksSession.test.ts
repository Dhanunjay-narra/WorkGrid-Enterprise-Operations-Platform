import { ProjectRisksSessionService } from "../../../services/core-engine/src/project/risks/services/ProjectRisksSessionService";
import { ProjectRisksSessionValidator } from "../../../packages/types/src/domains/project/risks/ProjectRisksSession";
import { ProjectRisksSessionStateMachine } from "../../../services/core-engine/src/project/risks/state-machines/ProjectRisksSessionStateMachine";

describe("ProjectRisksSession Comprehensive Domain Test Suite", () => {
  const service = new ProjectRisksSessionService();
  const sm = new ProjectRisksSessionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectRisksSession Instance",
      domain: "project_risks",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectRisksSessionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
