import { CommChatMessageService } from "../../../services/core-engine/src/communication/services/CommChatMessageService";
import { CommChatMessageValidator } from "../../../packages/types/src/domains/communication/CommChatMessage";

describe("CommChatMessage Service & Validation Suite", () => {
  const service = new CommChatMessageService();

  test("creates a valid CommChatMessage record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample CommChatMessage",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = CommChatMessageValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
