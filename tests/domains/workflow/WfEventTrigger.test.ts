import { WfEventTriggerService } from "../../../services/core-engine/src/workflow/services/WfEventTriggerService";
import { WfEventTriggerValidator } from "../../../packages/types/src/domains/workflow/WfEventTrigger";

describe("WfEventTrigger Service & Validation Suite", () => {
  const service = new WfEventTriggerService();

  test("creates a valid WfEventTrigger record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample WfEventTrigger",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = WfEventTriggerValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
