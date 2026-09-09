import { ProjectRisksItemService } from "../../../services/core-engine/src/project/risks/services/ProjectRisksItemService";
import { ProjectRisksItemValidator } from "../../../packages/types/src/domains/project/risks/ProjectRisksItem";
import { ProjectRisksItemStateMachine } from "../../../services/core-engine/src/project/risks/state-machines/ProjectRisksItemStateMachine";

describe("ProjectRisksItem Comprehensive Domain Test Suite", () => {
  const service = new ProjectRisksItemService();
  const sm = new ProjectRisksItemStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectRisksItem Instance",
      domain: "project_risks",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectRisksItemValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
