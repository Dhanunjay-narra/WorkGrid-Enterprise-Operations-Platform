import { IotHeartbeatRecordService } from "../../../services/core-engine/src/iot/services/IotHeartbeatRecordService";
import { IotHeartbeatRecordValidator } from "../../../packages/types/src/domains/iot/IotHeartbeatRecord";

describe("IotHeartbeatRecord Service & Validation Suite", () => {
  const service = new IotHeartbeatRecordService();

  test("creates a valid IotHeartbeatRecord record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample IotHeartbeatRecord",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = IotHeartbeatRecordValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
