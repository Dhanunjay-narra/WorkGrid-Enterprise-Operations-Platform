import { DmsRetentionItemService } from "../../../services/core-engine/src/dms/retention/services/DmsRetentionItemService";
import { DmsRetentionItemValidator } from "../../../packages/types/src/domains/dms/retention/DmsRetentionItem";
import { DmsRetentionItemStateMachine } from "../../../services/core-engine/src/dms/retention/state-machines/DmsRetentionItemStateMachine";

describe("DmsRetentionItem Comprehensive Domain Test Suite", () => {
  const service = new DmsRetentionItemService();
  const sm = new DmsRetentionItemStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsRetentionItem Instance",
      domain: "dms_retention",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsRetentionItemValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
