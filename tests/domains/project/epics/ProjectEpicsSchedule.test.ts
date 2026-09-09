import { ProjectEpicsScheduleService } from "../../../services/core-engine/src/project/epics/services/ProjectEpicsScheduleService";
import { ProjectEpicsScheduleValidator } from "../../../packages/types/src/domains/project/epics/ProjectEpicsSchedule";
import { ProjectEpicsScheduleStateMachine } from "../../../services/core-engine/src/project/epics/state-machines/ProjectEpicsScheduleStateMachine";

describe("ProjectEpicsSchedule Comprehensive Domain Test Suite", () => {
  const service = new ProjectEpicsScheduleService();
  const sm = new ProjectEpicsScheduleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectEpicsSchedule Instance",
      domain: "project_epics",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectEpicsScheduleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
