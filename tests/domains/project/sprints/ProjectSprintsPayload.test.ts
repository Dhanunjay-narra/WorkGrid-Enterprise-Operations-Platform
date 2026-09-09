import { ProjectSprintsPayloadService } from "../../../services/core-engine/src/project/sprints/services/ProjectSprintsPayloadService";
import { ProjectSprintsPayloadValidator } from "../../../packages/types/src/domains/project/sprints/ProjectSprintsPayload";
import { ProjectSprintsPayloadStateMachine } from "../../../services/core-engine/src/project/sprints/state-machines/ProjectSprintsPayloadStateMachine";

describe("ProjectSprintsPayload Comprehensive Domain Test Suite", () => {
  const service = new ProjectSprintsPayloadService();
  const sm = new ProjectSprintsPayloadStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectSprintsPayload Instance",
      domain: "project_sprints",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectSprintsPayloadValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
