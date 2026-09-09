import { IotAnomaliesStateService } from "../../../services/core-engine/src/iot/anomalies/services/IotAnomaliesStateService";
import { IotAnomaliesStateValidator } from "../../../packages/types/src/domains/iot/anomalies/IotAnomaliesState";
import { IotAnomaliesStateStateMachine } from "../../../services/core-engine/src/iot/anomalies/state-machines/IotAnomaliesStateStateMachine";

describe("IotAnomaliesState Comprehensive Domain Test Suite", () => {
  const service = new IotAnomaliesStateService();
  const sm = new IotAnomaliesStateStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotAnomaliesState Instance",
      domain: "iot_anomalies",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotAnomaliesStateValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
