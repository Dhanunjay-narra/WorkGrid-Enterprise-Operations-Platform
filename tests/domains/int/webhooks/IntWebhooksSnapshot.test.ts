import { IntWebhooksSnapshotService } from "../../../services/core-engine/src/int/webhooks/services/IntWebhooksSnapshotService";
import { IntWebhooksSnapshotValidator } from "../../../packages/types/src/domains/int/webhooks/IntWebhooksSnapshot";
import { IntWebhooksSnapshotStateMachine } from "../../../services/core-engine/src/int/webhooks/state-machines/IntWebhooksSnapshotStateMachine";

describe("IntWebhooksSnapshot Comprehensive Domain Test Suite", () => {
  const service = new IntWebhooksSnapshotService();
  const sm = new IntWebhooksSnapshotStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntWebhooksSnapshot Instance",
      domain: "int_webhooks",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntWebhooksSnapshotValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
