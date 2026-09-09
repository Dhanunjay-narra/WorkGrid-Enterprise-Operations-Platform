import { EvtDeadLetterEventService } from "../../../services/core-engine/src/events/services/EvtDeadLetterEventService";
import { EvtDeadLetterEventValidator } from "../../../packages/types/src/domains/events/EvtDeadLetterEvent";

describe("EvtDeadLetterEvent Service & Validation Suite", () => {
  const service = new EvtDeadLetterEventService();

  test("creates a valid EvtDeadLetterEvent record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample EvtDeadLetterEvent",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = EvtDeadLetterEventValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
