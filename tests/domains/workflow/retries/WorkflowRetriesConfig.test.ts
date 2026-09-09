import { WorkflowRetriesConfigService } from "../../../services/core-engine/src/workflow/retries/services/WorkflowRetriesConfigService";
import { WorkflowRetriesConfigValidator } from "../../../packages/types/src/domains/workflow/retries/WorkflowRetriesConfig";
import { WorkflowRetriesConfigStateMachine } from "../../../services/core-engine/src/workflow/retries/state-machines/WorkflowRetriesConfigStateMachine";

describe("WorkflowRetriesConfig Comprehensive Domain Test Suite", () => {
  const service = new WorkflowRetriesConfigService();
  const sm = new WorkflowRetriesConfigStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowRetriesConfig Instance",
      domain: "workflow_retries",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowRetriesConfigValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
