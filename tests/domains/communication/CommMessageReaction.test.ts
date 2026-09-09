import { CommMessageReactionService } from "../../../services/core-engine/src/communication/services/CommMessageReactionService";
import { CommMessageReactionValidator } from "../../../packages/types/src/domains/communication/CommMessageReaction";

describe("CommMessageReaction Service & Validation Suite", () => {
  const service = new CommMessageReactionService();

  test("creates a valid CommMessageReaction record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample CommMessageReaction",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = CommMessageReactionValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
