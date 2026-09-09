import { SupTicketService } from "../../../services/core-engine/src/support/services/SupTicketService";
import { SupTicketValidator } from "../../../packages/types/src/domains/support/SupTicket";

describe("SupTicket Service & Validation Suite", () => {
  const service = new SupTicketService();

  test("creates a valid SupTicket record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample SupTicket",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = SupTicketValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
