import { WorkflowRetriesMetricService } from "../../../services/core-engine/src/workflow/retries/services/WorkflowRetriesMetricService";
import { WorkflowRetriesMetricValidator } from "../../../packages/types/src/domains/workflow/retries/WorkflowRetriesMetric";
import { WorkflowRetriesMetricStateMachine } from "../../../services/core-engine/src/workflow/retries/state-machines/WorkflowRetriesMetricStateMachine";

describe("WorkflowRetriesMetric Comprehensive Domain Test Suite", () => {
  const service = new WorkflowRetriesMetricService();
  const sm = new WorkflowRetriesMetricStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowRetriesMetric Instance",
      domain: "workflow_retries",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowRetriesMetricValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
