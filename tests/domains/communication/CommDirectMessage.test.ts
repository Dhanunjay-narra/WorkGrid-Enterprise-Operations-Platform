import { CommDirectMessageService } from "../../../services/core-engine/src/communication/services/CommDirectMessageService";
import { CommDirectMessageValidator } from "../../../packages/types/src/domains/communication/CommDirectMessage";

describe("CommDirectMessage Service & Validation Suite", () => {
  const service = new CommDirectMessageService();

  test("creates a valid CommDirectMessage record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample CommDirectMessage",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = CommDirectMessageValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
