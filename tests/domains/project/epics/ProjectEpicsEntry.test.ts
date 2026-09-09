import { ProjectEpicsEntryService } from "../../../services/core-engine/src/project/epics/services/ProjectEpicsEntryService";
import { ProjectEpicsEntryValidator } from "../../../packages/types/src/domains/project/epics/ProjectEpicsEntry";
import { ProjectEpicsEntryStateMachine } from "../../../services/core-engine/src/project/epics/state-machines/ProjectEpicsEntryStateMachine";

describe("ProjectEpicsEntry Comprehensive Domain Test Suite", () => {
  const service = new ProjectEpicsEntryService();
  const sm = new ProjectEpicsEntryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectEpicsEntry Instance",
      domain: "project_epics",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectEpicsEntryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
