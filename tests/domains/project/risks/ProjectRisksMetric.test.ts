import { ProjectRisksMetricService } from "../../../services/core-engine/src/project/risks/services/ProjectRisksMetricService";
import { ProjectRisksMetricValidator } from "../../../packages/types/src/domains/project/risks/ProjectRisksMetric";
import { ProjectRisksMetricStateMachine } from "../../../services/core-engine/src/project/risks/state-machines/ProjectRisksMetricStateMachine";

describe("ProjectRisksMetric Comprehensive Domain Test Suite", () => {
  const service = new ProjectRisksMetricService();
  const sm = new ProjectRisksMetricStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectRisksMetric Instance",
      domain: "project_risks",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectRisksMetricValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
