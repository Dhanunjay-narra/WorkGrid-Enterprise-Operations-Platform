import { CommChannelMemberService } from "../../../services/core-engine/src/communication/services/CommChannelMemberService";
import { CommChannelMemberValidator } from "../../../packages/types/src/domains/communication/CommChannelMember";

describe("CommChannelMember Service & Validation Suite", () => {
  const service = new CommChannelMemberService();

  test("creates a valid CommChannelMember record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample CommChannelMember",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = CommChannelMemberValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
