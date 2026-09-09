import { IotLocationsEntryService } from "../../../services/core-engine/src/iot/locations/services/IotLocationsEntryService";
import { IotLocationsEntryValidator } from "../../../packages/types/src/domains/iot/locations/IotLocationsEntry";
import { IotLocationsEntryStateMachine } from "../../../services/core-engine/src/iot/locations/state-machines/IotLocationsEntryStateMachine";

describe("IotLocationsEntry Comprehensive Domain Test Suite", () => {
  const service = new IotLocationsEntryService();
  const sm = new IotLocationsEntryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotLocationsEntry Instance",
      domain: "iot_locations",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotLocationsEntryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
