import { SupQueueService } from "../../../services/core-engine/src/support/services/SupQueueService";
import { SupQueueValidator } from "../../../packages/types/src/domains/support/SupQueue";

describe("SupQueue Service & Validation Suite", () => {
  const service = new SupQueueService();

  test("creates a valid SupQueue record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample SupQueue",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = SupQueueValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
