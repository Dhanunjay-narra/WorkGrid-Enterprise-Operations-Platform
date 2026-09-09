import { SupportQueuesMetricService } from "../../../services/core-engine/src/support/queues/services/SupportQueuesMetricService";
import { SupportQueuesMetricValidator } from "../../../packages/types/src/domains/support/queues/SupportQueuesMetric";
import { SupportQueuesMetricStateMachine } from "../../../services/core-engine/src/support/queues/state-machines/SupportQueuesMetricStateMachine";

describe("SupportQueuesMetric Comprehensive Domain Test Suite", () => {
  const service = new SupportQueuesMetricService();
  const sm = new SupportQueuesMetricStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportQueuesMetric Instance",
      domain: "support_queues",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportQueuesMetricValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
