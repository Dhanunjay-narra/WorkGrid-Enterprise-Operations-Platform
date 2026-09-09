import { DmsChunksPolicyService } from "../../../services/core-engine/src/dms/chunks/services/DmsChunksPolicyService";
import { DmsChunksPolicyValidator } from "../../../packages/types/src/domains/dms/chunks/DmsChunksPolicy";
import { DmsChunksPolicyStateMachine } from "../../../services/core-engine/src/dms/chunks/state-machines/DmsChunksPolicyStateMachine";

describe("DmsChunksPolicy Comprehensive Domain Test Suite", () => {
  const service = new DmsChunksPolicyService();
  const sm = new DmsChunksPolicyStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsChunksPolicy Instance",
      domain: "dms_chunks",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsChunksPolicyValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
