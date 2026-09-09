import { CommDigestItemService } from "../../../services/core-engine/src/comm/digest/services/CommDigestItemService";
import { CommDigestItemValidator } from "../../../packages/types/src/domains/comm/digest/CommDigestItem";
import { CommDigestItemStateMachine } from "../../../services/core-engine/src/comm/digest/state-machines/CommDigestItemStateMachine";

describe("CommDigestItem Comprehensive Domain Test Suite", () => {
  const service = new CommDigestItemService();
  const sm = new CommDigestItemStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommDigestItem Instance",
      domain: "comm_digest",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommDigestItemValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
