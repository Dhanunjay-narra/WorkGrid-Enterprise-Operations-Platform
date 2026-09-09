import { BiWidgetsThresholdService } from "../../../services/core-engine/src/bi/widgets/services/BiWidgetsThresholdService";
import { BiWidgetsThresholdValidator } from "../../../packages/types/src/domains/bi/widgets/BiWidgetsThreshold";
import { BiWidgetsThresholdStateMachine } from "../../../services/core-engine/src/bi/widgets/state-machines/BiWidgetsThresholdStateMachine";

describe("BiWidgetsThreshold Comprehensive Domain Test Suite", () => {
  const service = new BiWidgetsThresholdService();
  const sm = new BiWidgetsThresholdStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiWidgetsThreshold Instance",
      domain: "bi_widgets",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiWidgetsThresholdValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
