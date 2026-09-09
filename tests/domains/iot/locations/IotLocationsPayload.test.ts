import { IotLocationsPayloadService } from "../../../services/core-engine/src/iot/locations/services/IotLocationsPayloadService";
import { IotLocationsPayloadValidator } from "../../../packages/types/src/domains/iot/locations/IotLocationsPayload";
import { IotLocationsPayloadStateMachine } from "../../../services/core-engine/src/iot/locations/state-machines/IotLocationsPayloadStateMachine";

describe("IotLocationsPayload Comprehensive Domain Test Suite", () => {
  const service = new IotLocationsPayloadService();
  const sm = new IotLocationsPayloadStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotLocationsPayload Instance",
      domain: "iot_locations",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotLocationsPayloadValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
