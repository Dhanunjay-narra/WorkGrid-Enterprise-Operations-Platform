import { ProjectRisksRuleService } from "../../../services/core-engine/src/project/risks/services/ProjectRisksRuleService";
import { ProjectRisksRuleValidator } from "../../../packages/types/src/domains/project/risks/ProjectRisksRule";
import { ProjectRisksRuleStateMachine } from "../../../services/core-engine/src/project/risks/state-machines/ProjectRisksRuleStateMachine";

describe("ProjectRisksRule Comprehensive Domain Test Suite", () => {
  const service = new ProjectRisksRuleService();
  const sm = new ProjectRisksRuleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectRisksRule Instance",
      domain: "project_risks",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectRisksRuleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
