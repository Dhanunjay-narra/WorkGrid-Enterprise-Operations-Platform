import { CommDigestQueueService } from "../../../services/core-engine/src/communication/services/CommDigestQueueService";
import { CommDigestQueueValidator } from "../../../packages/types/src/domains/communication/CommDigestQueue";

describe("CommDigestQueue Service & Validation Suite", () => {
  const service = new CommDigestQueueService();

  test("creates a valid CommDigestQueue record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample CommDigestQueue",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = CommDigestQueueValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
