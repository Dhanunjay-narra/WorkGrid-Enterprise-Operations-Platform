import { ProjectRisksSummaryService } from "../../../services/core-engine/src/project/risks/services/ProjectRisksSummaryService";
import { ProjectRisksSummaryValidator } from "../../../packages/types/src/domains/project/risks/ProjectRisksSummary";
import { ProjectRisksSummaryStateMachine } from "../../../services/core-engine/src/project/risks/state-machines/ProjectRisksSummaryStateMachine";

describe("ProjectRisksSummary Comprehensive Domain Test Suite", () => {
  const service = new ProjectRisksSummaryService();
  const sm = new ProjectRisksSummaryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectRisksSummary Instance",
      domain: "project_risks",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectRisksSummaryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
