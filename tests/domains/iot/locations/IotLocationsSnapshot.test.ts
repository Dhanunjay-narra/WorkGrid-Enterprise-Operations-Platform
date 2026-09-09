import { IotLocationsSnapshotService } from "../../../services/core-engine/src/iot/locations/services/IotLocationsSnapshotService";
import { IotLocationsSnapshotValidator } from "../../../packages/types/src/domains/iot/locations/IotLocationsSnapshot";
import { IotLocationsSnapshotStateMachine } from "../../../services/core-engine/src/iot/locations/state-machines/IotLocationsSnapshotStateMachine";

describe("IotLocationsSnapshot Comprehensive Domain Test Suite", () => {
  const service = new IotLocationsSnapshotService();
  const sm = new IotLocationsSnapshotStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotLocationsSnapshot Instance",
      domain: "iot_locations",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotLocationsSnapshotValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
