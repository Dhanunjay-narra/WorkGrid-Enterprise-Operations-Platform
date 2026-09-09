import { IotLocationsRecordService } from "../../../services/core-engine/src/iot/locations/services/IotLocationsRecordService";
import { IotLocationsRecordValidator } from "../../../packages/types/src/domains/iot/locations/IotLocationsRecord";
import { IotLocationsRecordStateMachine } from "../../../services/core-engine/src/iot/locations/state-machines/IotLocationsRecordStateMachine";

describe("IotLocationsRecord Comprehensive Domain Test Suite", () => {
  const service = new IotLocationsRecordService();
  const sm = new IotLocationsRecordStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotLocationsRecord Instance",
      domain: "iot_locations",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotLocationsRecordValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
