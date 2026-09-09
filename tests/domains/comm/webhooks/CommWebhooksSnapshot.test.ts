import { CommWebhooksSnapshotService } from "../../../services/core-engine/src/comm/webhooks/services/CommWebhooksSnapshotService";
import { CommWebhooksSnapshotValidator } from "../../../packages/types/src/domains/comm/webhooks/CommWebhooksSnapshot";
import { CommWebhooksSnapshotStateMachine } from "../../../services/core-engine/src/comm/webhooks/state-machines/CommWebhooksSnapshotStateMachine";

describe("CommWebhooksSnapshot Comprehensive Domain Test Suite", () => {
  const service = new CommWebhooksSnapshotService();
  const sm = new CommWebhooksSnapshotStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommWebhooksSnapshot Instance",
      domain: "comm_webhooks",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommWebhooksSnapshotValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
