import { IotTelemetryPacketService } from "../../../services/core-engine/src/iot/services/IotTelemetryPacketService";
import { IotTelemetryPacketValidator } from "../../../packages/types/src/domains/iot/IotTelemetryPacket";

describe("IotTelemetryPacket Service & Validation Suite", () => {
  const service = new IotTelemetryPacketService();

  test("creates a valid IotTelemetryPacket record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample IotTelemetryPacket",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = IotTelemetryPacketValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
