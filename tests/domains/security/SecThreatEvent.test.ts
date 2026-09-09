import { SecThreatEventService } from "../../../services/core-engine/src/security/services/SecThreatEventService";
import { SecThreatEventValidator } from "../../../packages/types/src/domains/security/SecThreatEvent";

describe("SecThreatEvent Service & Validation Suite", () => {
  const service = new SecThreatEventService();

  test("creates a valid SecThreatEvent record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample SecThreatEvent",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = SecThreatEventValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
