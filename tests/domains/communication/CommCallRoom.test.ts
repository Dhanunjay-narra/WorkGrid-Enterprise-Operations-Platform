import { CommCallRoomService } from "../../../services/core-engine/src/communication/services/CommCallRoomService";
import { CommCallRoomValidator } from "../../../packages/types/src/domains/communication/CommCallRoom";

describe("CommCallRoom Service & Validation Suite", () => {
  const service = new CommCallRoomService();

  test("creates a valid CommCallRoom record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample CommCallRoom",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = CommCallRoomValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
