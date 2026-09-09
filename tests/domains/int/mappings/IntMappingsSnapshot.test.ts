import { IntMappingsSnapshotService } from "../../../services/core-engine/src/int/mappings/services/IntMappingsSnapshotService";
import { IntMappingsSnapshotValidator } from "../../../packages/types/src/domains/int/mappings/IntMappingsSnapshot";
import { IntMappingsSnapshotStateMachine } from "../../../services/core-engine/src/int/mappings/state-machines/IntMappingsSnapshotStateMachine";

describe("IntMappingsSnapshot Comprehensive Domain Test Suite", () => {
  const service = new IntMappingsSnapshotService();
  const sm = new IntMappingsSnapshotStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntMappingsSnapshot Instance",
      domain: "int_mappings",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntMappingsSnapshotValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
