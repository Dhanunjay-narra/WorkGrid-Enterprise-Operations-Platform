import { BiAnomaliesAssignmentService } from "../../../services/core-engine/src/bi/anomalies/services/BiAnomaliesAssignmentService";
import { BiAnomaliesAssignmentValidator } from "../../../packages/types/src/domains/bi/anomalies/BiAnomaliesAssignment";
import { BiAnomaliesAssignmentStateMachine } from "../../../services/core-engine/src/bi/anomalies/state-machines/BiAnomaliesAssignmentStateMachine";

describe("BiAnomaliesAssignment Comprehensive Domain Test Suite", () => {
  const service = new BiAnomaliesAssignmentService();
  const sm = new BiAnomaliesAssignmentStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiAnomaliesAssignment Instance",
      domain: "bi_anomalies",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiAnomaliesAssignmentValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
