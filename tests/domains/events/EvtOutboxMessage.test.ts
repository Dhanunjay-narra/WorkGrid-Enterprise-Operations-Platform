import { EvtOutboxMessageService } from "../../../services/core-engine/src/events/services/EvtOutboxMessageService";
import { EvtOutboxMessageValidator } from "../../../packages/types/src/domains/events/EvtOutboxMessage";

describe("EvtOutboxMessage Service & Validation Suite", () => {
  const service = new EvtOutboxMessageService();

  test("creates a valid EvtOutboxMessage record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample EvtOutboxMessage",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = EvtOutboxMessageValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
