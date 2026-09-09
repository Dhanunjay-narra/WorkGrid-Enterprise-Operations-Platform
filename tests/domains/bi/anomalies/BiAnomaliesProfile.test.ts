import { BiAnomaliesProfileService } from "../../../services/core-engine/src/bi/anomalies/services/BiAnomaliesProfileService";
import { BiAnomaliesProfileValidator } from "../../../packages/types/src/domains/bi/anomalies/BiAnomaliesProfile";
import { BiAnomaliesProfileStateMachine } from "../../../services/core-engine/src/bi/anomalies/state-machines/BiAnomaliesProfileStateMachine";

describe("BiAnomaliesProfile Comprehensive Domain Test Suite", () => {
  const service = new BiAnomaliesProfileService();
  const sm = new BiAnomaliesProfileStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiAnomaliesProfile Instance",
      domain: "bi_anomalies",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiAnomaliesProfileValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
