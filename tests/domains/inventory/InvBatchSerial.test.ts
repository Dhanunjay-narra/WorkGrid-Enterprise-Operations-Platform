import { InvBatchSerialService } from "../../../services/core-engine/src/inventory/services/InvBatchSerialService";
import { InvBatchSerialValidator } from "../../../packages/types/src/domains/inventory/InvBatchSerial";

describe("InvBatchSerial Service & Validation Suite", () => {
  const service = new InvBatchSerialService();

  test("creates a valid InvBatchSerial record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample InvBatchSerial",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = InvBatchSerialValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
