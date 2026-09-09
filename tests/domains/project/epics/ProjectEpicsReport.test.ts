import { ProjectEpicsReportService } from "../../../services/core-engine/src/project/epics/services/ProjectEpicsReportService";
import { ProjectEpicsReportValidator } from "../../../packages/types/src/domains/project/epics/ProjectEpicsReport";
import { ProjectEpicsReportStateMachine } from "../../../services/core-engine/src/project/epics/state-machines/ProjectEpicsReportStateMachine";

describe("ProjectEpicsReport Comprehensive Domain Test Suite", () => {
  const service = new ProjectEpicsReportService();
  const sm = new ProjectEpicsReportStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectEpicsReport Instance",
      domain: "project_epics",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectEpicsReportValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
