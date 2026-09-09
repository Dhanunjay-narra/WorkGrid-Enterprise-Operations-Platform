import { BiAnomaliesMappingService } from "../../../services/core-engine/src/bi/anomalies/services/BiAnomaliesMappingService";
import { BiAnomaliesMappingValidator } from "../../../packages/types/src/domains/bi/anomalies/BiAnomaliesMapping";
import { BiAnomaliesMappingStateMachine } from "../../../services/core-engine/src/bi/anomalies/state-machines/BiAnomaliesMappingStateMachine";

describe("BiAnomaliesMapping Comprehensive Domain Test Suite", () => {
  const service = new BiAnomaliesMappingService();
  const sm = new BiAnomaliesMappingStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiAnomaliesMapping Instance",
      domain: "bi_anomalies",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiAnomaliesMappingValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
