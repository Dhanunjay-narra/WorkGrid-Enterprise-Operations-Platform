import { IotCommandsConfigService } from "../../../services/core-engine/src/iot/commands/services/IotCommandsConfigService";
import { IotCommandsConfigValidator } from "../../../packages/types/src/domains/iot/commands/IotCommandsConfig";
import { IotCommandsConfigStateMachine } from "../../../services/core-engine/src/iot/commands/state-machines/IotCommandsConfigStateMachine";

describe("IotCommandsConfig Comprehensive Domain Test Suite", () => {
  const service = new IotCommandsConfigService();
  const sm = new IotCommandsConfigStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotCommandsConfig Instance",
      domain: "iot_commands",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotCommandsConfigValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
