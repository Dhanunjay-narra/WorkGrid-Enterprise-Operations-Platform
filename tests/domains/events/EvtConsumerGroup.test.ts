import { EvtConsumerGroupService } from "../../../services/core-engine/src/events/services/EvtConsumerGroupService";
import { EvtConsumerGroupValidator } from "../../../packages/types/src/domains/events/EvtConsumerGroup";

describe("EvtConsumerGroup Service & Validation Suite", () => {
  const service = new EvtConsumerGroupService();

  test("creates a valid EvtConsumerGroup record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample EvtConsumerGroup",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = EvtConsumerGroupValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
