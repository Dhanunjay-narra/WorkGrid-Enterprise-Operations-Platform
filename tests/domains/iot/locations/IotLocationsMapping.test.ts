import { IotLocationsMappingService } from "../../../services/core-engine/src/iot/locations/services/IotLocationsMappingService";
import { IotLocationsMappingValidator } from "../../../packages/types/src/domains/iot/locations/IotLocationsMapping";
import { IotLocationsMappingStateMachine } from "../../../services/core-engine/src/iot/locations/state-machines/IotLocationsMappingStateMachine";

describe("IotLocationsMapping Comprehensive Domain Test Suite", () => {
  const service = new IotLocationsMappingService();
  const sm = new IotLocationsMappingStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotLocationsMapping Instance",
      domain: "iot_locations",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotLocationsMappingValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
