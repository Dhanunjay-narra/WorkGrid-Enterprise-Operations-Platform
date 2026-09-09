import { SupCannedResponseService } from "../../../services/core-engine/src/support/services/SupCannedResponseService";
import { SupCannedResponseValidator } from "../../../packages/types/src/domains/support/SupCannedResponse";

describe("SupCannedResponse Service & Validation Suite", () => {
  const service = new SupCannedResponseService();

  test("creates a valid SupCannedResponse record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample SupCannedResponse",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = SupCannedResponseValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
