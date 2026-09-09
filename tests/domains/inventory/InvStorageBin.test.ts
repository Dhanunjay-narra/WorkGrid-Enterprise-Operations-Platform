import { InvStorageBinService } from "../../../services/core-engine/src/inventory/services/InvStorageBinService";
import { InvStorageBinValidator } from "../../../packages/types/src/domains/inventory/InvStorageBin";

describe("InvStorageBin Service & Validation Suite", () => {
  const service = new InvStorageBinService();

  test("creates a valid InvStorageBin record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample InvStorageBin",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = InvStorageBinValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
