import { BiWidgetsConfigService } from "../../../services/core-engine/src/bi/widgets/services/BiWidgetsConfigService";
import { BiWidgetsConfigValidator } from "../../../packages/types/src/domains/bi/widgets/BiWidgetsConfig";
import { BiWidgetsConfigStateMachine } from "../../../services/core-engine/src/bi/widgets/state-machines/BiWidgetsConfigStateMachine";

describe("BiWidgetsConfig Comprehensive Domain Test Suite", () => {
  const service = new BiWidgetsConfigService();
  const sm = new BiWidgetsConfigStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiWidgetsConfig Instance",
      domain: "bi_widgets",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiWidgetsConfigValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
