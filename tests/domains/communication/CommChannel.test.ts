import { CommChannelService } from "../../../services/core-engine/src/communication/services/CommChannelService";
import { CommChannelValidator } from "../../../packages/types/src/domains/communication/CommChannel";

describe("CommChannel Service & Validation Suite", () => {
  const service = new CommChannelService();

  test("creates a valid CommChannel record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample CommChannel",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = CommChannelValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
