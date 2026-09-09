import { EvtEventSubscriptionService } from "../../../services/core-engine/src/events/services/EvtEventSubscriptionService";
import { EvtEventSubscriptionValidator } from "../../../packages/types/src/domains/events/EvtEventSubscription";

describe("EvtEventSubscription Service & Validation Suite", () => {
  const service = new EvtEventSubscriptionService();

  test("creates a valid EvtEventSubscription record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample EvtEventSubscription",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = EvtEventSubscriptionValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
