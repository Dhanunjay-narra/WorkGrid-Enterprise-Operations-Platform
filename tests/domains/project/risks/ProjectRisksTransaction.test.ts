import { ProjectRisksTransactionService } from "../../../services/core-engine/src/project/risks/services/ProjectRisksTransactionService";
import { ProjectRisksTransactionValidator } from "../../../packages/types/src/domains/project/risks/ProjectRisksTransaction";
import { ProjectRisksTransactionStateMachine } from "../../../services/core-engine/src/project/risks/state-machines/ProjectRisksTransactionStateMachine";

describe("ProjectRisksTransaction Comprehensive Domain Test Suite", () => {
  const service = new ProjectRisksTransactionService();
  const sm = new ProjectRisksTransactionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectRisksTransaction Instance",
      domain: "project_risks",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectRisksTransactionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
