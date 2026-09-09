import { IotCommandsSnapshotService } from "../../../services/core-engine/src/iot/commands/services/IotCommandsSnapshotService";
import { IotCommandsSnapshotValidator } from "../../../packages/types/src/domains/iot/commands/IotCommandsSnapshot";
import { IotCommandsSnapshotStateMachine } from "../../../services/core-engine/src/iot/commands/state-machines/IotCommandsSnapshotStateMachine";

describe("IotCommandsSnapshot Comprehensive Domain Test Suite", () => {
  const service = new IotCommandsSnapshotService();
  const sm = new IotCommandsSnapshotStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotCommandsSnapshot Instance",
      domain: "iot_commands",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotCommandsSnapshotValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
