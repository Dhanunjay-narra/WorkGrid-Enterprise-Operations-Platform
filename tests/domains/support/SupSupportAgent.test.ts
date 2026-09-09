import { SupSupportAgentService } from "../../../services/core-engine/src/support/services/SupSupportAgentService";
import { SupSupportAgentValidator } from "../../../packages/types/src/domains/support/SupSupportAgent";

describe("SupSupportAgent Service & Validation Suite", () => {
  const service = new SupSupportAgentService();

  test("creates a valid SupSupportAgent record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample SupSupportAgent",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = SupSupportAgentValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
