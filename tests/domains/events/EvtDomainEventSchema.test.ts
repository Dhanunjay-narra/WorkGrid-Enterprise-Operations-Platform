import { EvtDomainEventSchemaService } from "../../../services/core-engine/src/events/services/EvtDomainEventSchemaService";
import { EvtDomainEventSchemaValidator } from "../../../packages/types/src/domains/events/EvtDomainEventSchema";

describe("EvtDomainEventSchema Service & Validation Suite", () => {
  const service = new EvtDomainEventSchemaService();

  test("creates a valid EvtDomainEventSchema record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample EvtDomainEventSchema",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = EvtDomainEventSchemaValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
