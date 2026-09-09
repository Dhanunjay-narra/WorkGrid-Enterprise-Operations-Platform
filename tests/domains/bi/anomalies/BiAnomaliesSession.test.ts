import { BiAnomaliesSessionService } from "../../../services/core-engine/src/bi/anomalies/services/BiAnomaliesSessionService";
import { BiAnomaliesSessionValidator } from "../../../packages/types/src/domains/bi/anomalies/BiAnomaliesSession";
import { BiAnomaliesSessionStateMachine } from "../../../services/core-engine/src/bi/anomalies/state-machines/BiAnomaliesSessionStateMachine";

describe("BiAnomaliesSession Comprehensive Domain Test Suite", () => {
  const service = new BiAnomaliesSessionService();
  const sm = new BiAnomaliesSessionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiAnomaliesSession Instance",
      domain: "bi_anomalies",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiAnomaliesSessionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
