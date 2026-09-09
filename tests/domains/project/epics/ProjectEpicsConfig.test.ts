import { ProjectEpicsConfigService } from "../../../services/core-engine/src/project/epics/services/ProjectEpicsConfigService";
import { ProjectEpicsConfigValidator } from "../../../packages/types/src/domains/project/epics/ProjectEpicsConfig";
import { ProjectEpicsConfigStateMachine } from "../../../services/core-engine/src/project/epics/state-machines/ProjectEpicsConfigStateMachine";

describe("ProjectEpicsConfig Comprehensive Domain Test Suite", () => {
  const service = new ProjectEpicsConfigService();
  const sm = new ProjectEpicsConfigStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectEpicsConfig Instance",
      domain: "project_epics",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectEpicsConfigValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
