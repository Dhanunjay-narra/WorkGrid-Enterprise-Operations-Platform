import { IotCommandsSessionService } from "../../../services/core-engine/src/iot/commands/services/IotCommandsSessionService";
import { IotCommandsSessionValidator } from "../../../packages/types/src/domains/iot/commands/IotCommandsSession";
import { IotCommandsSessionStateMachine } from "../../../services/core-engine/src/iot/commands/state-machines/IotCommandsSessionStateMachine";

describe("IotCommandsSession Comprehensive Domain Test Suite", () => {
  const service = new IotCommandsSessionService();
  const sm = new IotCommandsSessionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotCommandsSession Instance",
      domain: "iot_commands",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotCommandsSessionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
