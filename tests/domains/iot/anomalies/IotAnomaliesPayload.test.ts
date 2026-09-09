import { IotAnomaliesPayloadService } from "../../../services/core-engine/src/iot/anomalies/services/IotAnomaliesPayloadService";
import { IotAnomaliesPayloadValidator } from "../../../packages/types/src/domains/iot/anomalies/IotAnomaliesPayload";
import { IotAnomaliesPayloadStateMachine } from "../../../services/core-engine/src/iot/anomalies/state-machines/IotAnomaliesPayloadStateMachine";

describe("IotAnomaliesPayload Comprehensive Domain Test Suite", () => {
  const service = new IotAnomaliesPayloadService();
  const sm = new IotAnomaliesPayloadStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotAnomaliesPayload Instance",
      domain: "iot_anomalies",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotAnomaliesPayloadValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
