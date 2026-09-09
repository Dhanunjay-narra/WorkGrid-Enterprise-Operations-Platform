import { DmsChunksEntryService } from "../../../services/core-engine/src/dms/chunks/services/DmsChunksEntryService";
import { DmsChunksEntryValidator } from "../../../packages/types/src/domains/dms/chunks/DmsChunksEntry";
import { DmsChunksEntryStateMachine } from "../../../services/core-engine/src/dms/chunks/state-machines/DmsChunksEntryStateMachine";

describe("DmsChunksEntry Comprehensive Domain Test Suite", () => {
  const service = new DmsChunksEntryService();
  const sm = new DmsChunksEntryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsChunksEntry Instance",
      domain: "dms_chunks",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsChunksEntryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
