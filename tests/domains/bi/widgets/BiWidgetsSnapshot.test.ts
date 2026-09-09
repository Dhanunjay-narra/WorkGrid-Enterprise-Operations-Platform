import { BiWidgetsSnapshotService } from "../../../services/core-engine/src/bi/widgets/services/BiWidgetsSnapshotService";
import { BiWidgetsSnapshotValidator } from "../../../packages/types/src/domains/bi/widgets/BiWidgetsSnapshot";
import { BiWidgetsSnapshotStateMachine } from "../../../services/core-engine/src/bi/widgets/state-machines/BiWidgetsSnapshotStateMachine";

describe("BiWidgetsSnapshot Comprehensive Domain Test Suite", () => {
  const service = new BiWidgetsSnapshotService();
  const sm = new BiWidgetsSnapshotStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiWidgetsSnapshot Instance",
      domain: "bi_widgets",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiWidgetsSnapshotValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
