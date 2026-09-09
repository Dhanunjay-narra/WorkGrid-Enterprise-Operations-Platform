import { IotAnomaliesMappingService } from "../../../services/core-engine/src/iot/anomalies/services/IotAnomaliesMappingService";
import { IotAnomaliesMappingValidator } from "../../../packages/types/src/domains/iot/anomalies/IotAnomaliesMapping";
import { IotAnomaliesMappingStateMachine } from "../../../services/core-engine/src/iot/anomalies/state-machines/IotAnomaliesMappingStateMachine";

describe("IotAnomaliesMapping Comprehensive Domain Test Suite", () => {
  const service = new IotAnomaliesMappingService();
  const sm = new IotAnomaliesMappingStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotAnomaliesMapping Instance",
      domain: "iot_anomalies",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotAnomaliesMappingValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
