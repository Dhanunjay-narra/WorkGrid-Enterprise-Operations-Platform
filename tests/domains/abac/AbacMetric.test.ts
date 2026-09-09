import { AbacMetricService } from "../../../services/core-engine/src/abac/services/AbacMetricService";
import { AbacMetricValidator } from "../../../packages/types/src/domains/abac/AbacMetric";
import { AbacMetricStateMachine } from "../../../services/core-engine/src/abac/state-machines/AbacMetricStateMachine";

describe("AbacMetric Comprehensive Domain Test Suite", () => {
  const service = new AbacMetricService();
  const sm = new AbacMetricStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AbacMetric Instance",
      domain: "abac",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AbacMetricValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
