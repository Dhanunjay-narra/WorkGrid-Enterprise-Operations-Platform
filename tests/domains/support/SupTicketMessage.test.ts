import { SupTicketMessageService } from "../../../services/core-engine/src/support/services/SupTicketMessageService";
import { SupTicketMessageValidator } from "../../../packages/types/src/domains/support/SupTicketMessage";

describe("SupTicketMessage Service & Validation Suite", () => {
  const service = new SupTicketMessageService();

  test("creates a valid SupTicketMessage record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample SupTicketMessage",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = SupTicketMessageValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
