import { ProjectKanbanPayloadService } from "../../../services/core-engine/src/project/kanban/services/ProjectKanbanPayloadService";
import { ProjectKanbanPayloadValidator } from "../../../packages/types/src/domains/project/kanban/ProjectKanbanPayload";
import { ProjectKanbanPayloadStateMachine } from "../../../services/core-engine/src/project/kanban/state-machines/ProjectKanbanPayloadStateMachine";

describe("ProjectKanbanPayload Comprehensive Domain Test Suite", () => {
  const service = new ProjectKanbanPayloadService();
  const sm = new ProjectKanbanPayloadStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectKanbanPayload Instance",
      domain: "project_kanban",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectKanbanPayloadValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
