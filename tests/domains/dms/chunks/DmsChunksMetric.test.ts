import { DmsChunksMetricService } from "../../../services/core-engine/src/dms/chunks/services/DmsChunksMetricService";
import { DmsChunksMetricValidator } from "../../../packages/types/src/domains/dms/chunks/DmsChunksMetric";
import { DmsChunksMetricStateMachine } from "../../../services/core-engine/src/dms/chunks/state-machines/DmsChunksMetricStateMachine";

describe("DmsChunksMetric Comprehensive Domain Test Suite", () => {
  const service = new DmsChunksMetricService();
  const sm = new DmsChunksMetricStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsChunksMetric Instance",
      domain: "dms_chunks",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsChunksMetricValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
