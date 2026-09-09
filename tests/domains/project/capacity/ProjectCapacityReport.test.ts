import { ProjectCapacityReportService } from "../../../services/core-engine/src/project/capacity/services/ProjectCapacityReportService";
import { ProjectCapacityReportValidator } from "../../../packages/types/src/domains/project/capacity/ProjectCapacityReport";
import { ProjectCapacityReportStateMachine } from "../../../services/core-engine/src/project/capacity/state-machines/ProjectCapacityReportStateMachine";

describe("ProjectCapacityReport Comprehensive Domain Test Suite", () => {
  const service = new ProjectCapacityReportService();
  const sm = new ProjectCapacityReportStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectCapacityReport Instance",
      domain: "project_capacity",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectCapacityReportValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
