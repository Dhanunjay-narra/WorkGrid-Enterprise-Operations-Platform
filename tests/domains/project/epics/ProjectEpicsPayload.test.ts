import { ProjectEpicsPayloadService } from "../../../services/core-engine/src/project/epics/services/ProjectEpicsPayloadService";
import { ProjectEpicsPayloadValidator } from "../../../packages/types/src/domains/project/epics/ProjectEpicsPayload";
import { ProjectEpicsPayloadStateMachine } from "../../../services/core-engine/src/project/epics/state-machines/ProjectEpicsPayloadStateMachine";

describe("ProjectEpicsPayload Comprehensive Domain Test Suite", () => {
  const service = new ProjectEpicsPayloadService();
  const sm = new ProjectEpicsPayloadStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectEpicsPayload Instance",
      domain: "project_epics",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectEpicsPayloadValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
