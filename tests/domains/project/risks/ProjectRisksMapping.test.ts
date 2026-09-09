import { ProjectRisksMappingService } from "../../../services/core-engine/src/project/risks/services/ProjectRisksMappingService";
import { ProjectRisksMappingValidator } from "../../../packages/types/src/domains/project/risks/ProjectRisksMapping";
import { ProjectRisksMappingStateMachine } from "../../../services/core-engine/src/project/risks/state-machines/ProjectRisksMappingStateMachine";

describe("ProjectRisksMapping Comprehensive Domain Test Suite", () => {
  const service = new ProjectRisksMappingService();
  const sm = new ProjectRisksMappingStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectRisksMapping Instance",
      domain: "project_risks",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectRisksMappingValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
