import { IntSyncQueueItemService } from "../../../services/core-engine/src/integrations/services/IntSyncQueueItemService";
import { IntSyncQueueItemValidator } from "../../../packages/types/src/domains/integrations/IntSyncQueueItem";

describe("IntSyncQueueItem Service & Validation Suite", () => {
  const service = new IntSyncQueueItemService();

  test("creates a valid IntSyncQueueItem record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample IntSyncQueueItem",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = IntSyncQueueItemValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
