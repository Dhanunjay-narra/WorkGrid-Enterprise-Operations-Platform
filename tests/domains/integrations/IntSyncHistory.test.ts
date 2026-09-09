import { IntSyncHistoryService } from "../../../services/core-engine/src/integrations/services/IntSyncHistoryService";
import { IntSyncHistoryValidator } from "../../../packages/types/src/domains/integrations/IntSyncHistory";

describe("IntSyncHistory Service & Validation Suite", () => {
  const service = new IntSyncHistoryService();

  test("creates a valid IntSyncHistory record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample IntSyncHistory",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = IntSyncHistoryValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
