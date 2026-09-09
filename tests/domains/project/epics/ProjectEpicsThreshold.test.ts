import { ProjectEpicsThresholdService } from "../../../services/core-engine/src/project/epics/services/ProjectEpicsThresholdService";
import { ProjectEpicsThresholdValidator } from "../../../packages/types/src/domains/project/epics/ProjectEpicsThreshold";
import { ProjectEpicsThresholdStateMachine } from "../../../services/core-engine/src/project/epics/state-machines/ProjectEpicsThresholdStateMachine";

describe("ProjectEpicsThreshold Comprehensive Domain Test Suite", () => {
  const service = new ProjectEpicsThresholdService();
  const sm = new ProjectEpicsThresholdStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectEpicsThreshold Instance",
      domain: "project_epics",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectEpicsThresholdValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
