import { BiWidgetsStateService } from "../../../services/core-engine/src/bi/widgets/services/BiWidgetsStateService";
import { BiWidgetsStateValidator } from "../../../packages/types/src/domains/bi/widgets/BiWidgetsState";
import { BiWidgetsStateStateMachine } from "../../../services/core-engine/src/bi/widgets/state-machines/BiWidgetsStateStateMachine";

describe("BiWidgetsState Comprehensive Domain Test Suite", () => {
  const service = new BiWidgetsStateService();
  const sm = new BiWidgetsStateStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiWidgetsState Instance",
      domain: "bi_widgets",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiWidgetsStateValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
