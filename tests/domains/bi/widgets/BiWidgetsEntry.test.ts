import { BiWidgetsEntryService } from "../../../services/core-engine/src/bi/widgets/services/BiWidgetsEntryService";
import { BiWidgetsEntryValidator } from "../../../packages/types/src/domains/bi/widgets/BiWidgetsEntry";
import { BiWidgetsEntryStateMachine } from "../../../services/core-engine/src/bi/widgets/state-machines/BiWidgetsEntryStateMachine";

describe("BiWidgetsEntry Comprehensive Domain Test Suite", () => {
  const service = new BiWidgetsEntryService();
  const sm = new BiWidgetsEntryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiWidgetsEntry Instance",
      domain: "bi_widgets",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiWidgetsEntryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
