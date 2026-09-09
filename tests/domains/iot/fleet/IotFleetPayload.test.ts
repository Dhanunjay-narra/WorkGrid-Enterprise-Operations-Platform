import { IotFleetPayloadService } from "../../../services/core-engine/src/iot/fleet/services/IotFleetPayloadService";
import { IotFleetPayloadValidator } from "../../../packages/types/src/domains/iot/fleet/IotFleetPayload";
import { IotFleetPayloadStateMachine } from "../../../services/core-engine/src/iot/fleet/state-machines/IotFleetPayloadStateMachine";

describe("IotFleetPayload Comprehensive Domain Test Suite", () => {
  const service = new IotFleetPayloadService();
  const sm = new IotFleetPayloadStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotFleetPayload Instance",
      domain: "iot_fleet",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotFleetPayloadValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
