import { IotAnomaliesItemService } from "../../../services/core-engine/src/iot/anomalies/services/IotAnomaliesItemService";
import { IotAnomaliesItemValidator } from "../../../packages/types/src/domains/iot/anomalies/IotAnomaliesItem";
import { IotAnomaliesItemStateMachine } from "../../../services/core-engine/src/iot/anomalies/state-machines/IotAnomaliesItemStateMachine";

describe("IotAnomaliesItem Comprehensive Domain Test Suite", () => {
  const service = new IotAnomaliesItemService();
  const sm = new IotAnomaliesItemStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotAnomaliesItem Instance",
      domain: "iot_anomalies",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotAnomaliesItemValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
