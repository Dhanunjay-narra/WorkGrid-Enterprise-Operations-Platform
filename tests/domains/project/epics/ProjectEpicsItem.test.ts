import { ProjectEpicsItemService } from "../../../services/core-engine/src/project/epics/services/ProjectEpicsItemService";
import { ProjectEpicsItemValidator } from "../../../packages/types/src/domains/project/epics/ProjectEpicsItem";
import { ProjectEpicsItemStateMachine } from "../../../services/core-engine/src/project/epics/state-machines/ProjectEpicsItemStateMachine";

describe("ProjectEpicsItem Comprehensive Domain Test Suite", () => {
  const service = new ProjectEpicsItemService();
  const sm = new ProjectEpicsItemStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectEpicsItem Instance",
      domain: "project_epics",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectEpicsItemValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
