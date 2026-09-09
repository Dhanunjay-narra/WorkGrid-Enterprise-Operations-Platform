import { CommTypingStateService } from "../../../services/core-engine/src/communication/services/CommTypingStateService";
import { CommTypingStateValidator } from "../../../packages/types/src/domains/communication/CommTypingState";

describe("CommTypingState Service & Validation Suite", () => {
  const service = new CommTypingStateService();

  test("creates a valid CommTypingState record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample CommTypingState",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = CommTypingStateValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
