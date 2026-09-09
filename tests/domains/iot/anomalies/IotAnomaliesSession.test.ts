import { IotAnomaliesSessionService } from "../../../services/core-engine/src/iot/anomalies/services/IotAnomaliesSessionService";
import { IotAnomaliesSessionValidator } from "../../../packages/types/src/domains/iot/anomalies/IotAnomaliesSession";
import { IotAnomaliesSessionStateMachine } from "../../../services/core-engine/src/iot/anomalies/state-machines/IotAnomaliesSessionStateMachine";

describe("IotAnomaliesSession Comprehensive Domain Test Suite", () => {
  const service = new IotAnomaliesSessionService();
  const sm = new IotAnomaliesSessionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotAnomaliesSession Instance",
      domain: "iot_anomalies",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotAnomaliesSessionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
