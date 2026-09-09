import { IotLocationsScheduleService } from "../../../services/core-engine/src/iot/locations/services/IotLocationsScheduleService";
import { IotLocationsScheduleValidator } from "../../../packages/types/src/domains/iot/locations/IotLocationsSchedule";
import { IotLocationsScheduleStateMachine } from "../../../services/core-engine/src/iot/locations/state-machines/IotLocationsScheduleStateMachine";

describe("IotLocationsSchedule Comprehensive Domain Test Suite", () => {
  const service = new IotLocationsScheduleService();
  const sm = new IotLocationsScheduleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotLocationsSchedule Instance",
      domain: "iot_locations",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotLocationsScheduleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
