import { CommBroadcastAnnouncementService } from "../../../services/core-engine/src/communication/services/CommBroadcastAnnouncementService";
import { CommBroadcastAnnouncementValidator } from "../../../packages/types/src/domains/communication/CommBroadcastAnnouncement";

describe("CommBroadcastAnnouncement Service & Validation Suite", () => {
  const service = new CommBroadcastAnnouncementService();

  test("creates a valid CommBroadcastAnnouncement record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample CommBroadcastAnnouncement",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = CommBroadcastAnnouncementValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
