import { CommThreadReplyService } from "../../../services/core-engine/src/communication/services/CommThreadReplyService";
import { CommThreadReplyValidator } from "../../../packages/types/src/domains/communication/CommThreadReply";

describe("CommThreadReply Service & Validation Suite", () => {
  const service = new CommThreadReplyService();

  test("creates a valid CommThreadReply record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample CommThreadReply",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = CommThreadReplyValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
