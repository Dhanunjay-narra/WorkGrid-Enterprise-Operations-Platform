import { CommUserPresenceService } from "../../../services/core-engine/src/communication/services/CommUserPresenceService";
import { CommUserPresenceValidator } from "../../../packages/types/src/domains/communication/CommUserPresence";

describe("CommUserPresence Service & Validation Suite", () => {
  const service = new CommUserPresenceService();

  test("creates a valid CommUserPresence record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample CommUserPresence",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = CommUserPresenceValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
