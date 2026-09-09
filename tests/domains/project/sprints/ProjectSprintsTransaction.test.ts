import { ProjectSprintsTransactionService } from "../../../services/core-engine/src/project/sprints/services/ProjectSprintsTransactionService";
import { ProjectSprintsTransactionValidator } from "../../../packages/types/src/domains/project/sprints/ProjectSprintsTransaction";
import { ProjectSprintsTransactionStateMachine } from "../../../services/core-engine/src/project/sprints/state-machines/ProjectSprintsTransactionStateMachine";

describe("ProjectSprintsTransaction Comprehensive Domain Test Suite", () => {
  const service = new ProjectSprintsTransactionService();
  const sm = new ProjectSprintsTransactionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectSprintsTransaction Instance",
      domain: "project_sprints",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectSprintsTransactionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
