import { ProjectEpicsRecordService } from "../../../services/core-engine/src/project/epics/services/ProjectEpicsRecordService";
import { ProjectEpicsRecordValidator } from "../../../packages/types/src/domains/project/epics/ProjectEpicsRecord";
import { ProjectEpicsRecordStateMachine } from "../../../services/core-engine/src/project/epics/state-machines/ProjectEpicsRecordStateMachine";

describe("ProjectEpicsRecord Comprehensive Domain Test Suite", () => {
  const service = new ProjectEpicsRecordService();
  const sm = new ProjectEpicsRecordStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectEpicsRecord Instance",
      domain: "project_epics",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectEpicsRecordValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
