import { BiAnomaliesPolicyService } from "../../../services/core-engine/src/bi/anomalies/services/BiAnomaliesPolicyService";
import { BiAnomaliesPolicyValidator } from "../../../packages/types/src/domains/bi/anomalies/BiAnomaliesPolicy";
import { BiAnomaliesPolicyStateMachine } from "../../../services/core-engine/src/bi/anomalies/state-machines/BiAnomaliesPolicyStateMachine";

describe("BiAnomaliesPolicy Comprehensive Domain Test Suite", () => {
  const service = new BiAnomaliesPolicyService();
  const sm = new BiAnomaliesPolicyStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiAnomaliesPolicy Instance",
      domain: "bi_anomalies",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiAnomaliesPolicyValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
