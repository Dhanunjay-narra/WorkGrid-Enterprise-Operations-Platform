import { SupSlaTimerService } from "../../../services/core-engine/src/support/services/SupSlaTimerService";
import { SupSlaTimerValidator } from "../../../packages/types/src/domains/support/SupSlaTimer";

describe("SupSlaTimer Service & Validation Suite", () => {
  const service = new SupSlaTimerService();

  test("creates a valid SupSlaTimer record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample SupSlaTimer",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = SupSlaTimerValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
