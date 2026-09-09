import { IotAnomaliesThresholdService } from "../../../services/core-engine/src/iot/anomalies/services/IotAnomaliesThresholdService";
import { IotAnomaliesThresholdValidator } from "../../../packages/types/src/domains/iot/anomalies/IotAnomaliesThreshold";
import { IotAnomaliesThresholdStateMachine } from "../../../services/core-engine/src/iot/anomalies/state-machines/IotAnomaliesThresholdStateMachine";

describe("IotAnomaliesThreshold Comprehensive Domain Test Suite", () => {
  const service = new IotAnomaliesThresholdService();
  const sm = new IotAnomaliesThresholdStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotAnomaliesThreshold Instance",
      domain: "iot_anomalies",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotAnomaliesThresholdValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
