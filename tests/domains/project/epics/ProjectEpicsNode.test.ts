import { ProjectEpicsNodeService } from "../../../services/core-engine/src/project/epics/services/ProjectEpicsNodeService";
import { ProjectEpicsNodeValidator } from "../../../packages/types/src/domains/project/epics/ProjectEpicsNode";
import { ProjectEpicsNodeStateMachine } from "../../../services/core-engine/src/project/epics/state-machines/ProjectEpicsNodeStateMachine";

describe("ProjectEpicsNode Comprehensive Domain Test Suite", () => {
  const service = new ProjectEpicsNodeService();
  const sm = new ProjectEpicsNodeStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectEpicsNode Instance",
      domain: "project_epics",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectEpicsNodeValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
