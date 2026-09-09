import { IdSessionService } from "../../../services/core-engine/src/identity/services/IdSessionService";
import { IdSessionValidator } from "../../../packages/types/src/domains/identity/IdSession";

describe("IdSession Service & Validation Suite", () => {
  const service = new IdSessionService();

  test("creates a valid IdSession record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample IdSession",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = IdSessionValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
