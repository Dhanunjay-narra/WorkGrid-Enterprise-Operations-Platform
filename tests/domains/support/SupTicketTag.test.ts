import { SupTicketTagService } from "../../../services/core-engine/src/support/services/SupTicketTagService";
import { SupTicketTagValidator } from "../../../packages/types/src/domains/support/SupTicketTag";

describe("SupTicketTag Service & Validation Suite", () => {
  const service = new SupTicketTagService();

  test("creates a valid SupTicketTag record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample SupTicketTag",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = SupTicketTagValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
