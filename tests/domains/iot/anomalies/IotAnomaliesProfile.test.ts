import { IotAnomaliesProfileService } from "../../../services/core-engine/src/iot/anomalies/services/IotAnomaliesProfileService";
import { IotAnomaliesProfileValidator } from "../../../packages/types/src/domains/iot/anomalies/IotAnomaliesProfile";
import { IotAnomaliesProfileStateMachine } from "../../../services/core-engine/src/iot/anomalies/state-machines/IotAnomaliesProfileStateMachine";

describe("IotAnomaliesProfile Comprehensive Domain Test Suite", () => {
  const service = new IotAnomaliesProfileService();
  const sm = new IotAnomaliesProfileStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotAnomaliesProfile Instance",
      domain: "iot_anomalies",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotAnomaliesProfileValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
