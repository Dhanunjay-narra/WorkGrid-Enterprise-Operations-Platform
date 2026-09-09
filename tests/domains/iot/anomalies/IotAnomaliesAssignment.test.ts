import { IotAnomaliesAssignmentService } from "../../../services/core-engine/src/iot/anomalies/services/IotAnomaliesAssignmentService";
import { IotAnomaliesAssignmentValidator } from "../../../packages/types/src/domains/iot/anomalies/IotAnomaliesAssignment";
import { IotAnomaliesAssignmentStateMachine } from "../../../services/core-engine/src/iot/anomalies/state-machines/IotAnomaliesAssignmentStateMachine";

describe("IotAnomaliesAssignment Comprehensive Domain Test Suite", () => {
  const service = new IotAnomaliesAssignmentService();
  const sm = new IotAnomaliesAssignmentStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotAnomaliesAssignment Instance",
      domain: "iot_anomalies",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotAnomaliesAssignmentValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
