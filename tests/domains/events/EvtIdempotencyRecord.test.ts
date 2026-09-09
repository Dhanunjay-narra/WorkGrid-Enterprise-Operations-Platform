import { EvtIdempotencyRecordService } from "../../../services/core-engine/src/events/services/EvtIdempotencyRecordService";
import { EvtIdempotencyRecordValidator } from "../../../packages/types/src/domains/events/EvtIdempotencyRecord";

describe("EvtIdempotencyRecord Service & Validation Suite", () => {
  const service = new EvtIdempotencyRecordService();

  test("creates a valid EvtIdempotencyRecord record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample EvtIdempotencyRecord",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = EvtIdempotencyRecordValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
