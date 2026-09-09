import { DmsChunksTransactionService } from "../../../services/core-engine/src/dms/chunks/services/DmsChunksTransactionService";
import { DmsChunksTransactionValidator } from "../../../packages/types/src/domains/dms/chunks/DmsChunksTransaction";
import { DmsChunksTransactionStateMachine } from "../../../services/core-engine/src/dms/chunks/state-machines/DmsChunksTransactionStateMachine";

describe("DmsChunksTransaction Comprehensive Domain Test Suite", () => {
  const service = new DmsChunksTransactionService();
  const sm = new DmsChunksTransactionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsChunksTransaction Instance",
      domain: "dms_chunks",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsChunksTransactionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
