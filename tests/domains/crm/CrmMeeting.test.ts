import { CrmMeetingService } from "../../../services/core-engine/src/crm/services/CrmMeetingService";
import { CrmMeetingValidator } from "../../../packages/types/src/domains/crm/CrmMeeting";

describe("CrmMeeting Service & Validation Suite", () => {
  const service = new CrmMeetingService();

  test("creates a valid CrmMeeting record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample CrmMeeting",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = CrmMeetingValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
