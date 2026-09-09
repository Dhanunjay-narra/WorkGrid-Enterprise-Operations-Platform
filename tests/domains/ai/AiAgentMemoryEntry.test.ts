import { AiAgentMemoryEntryService } from "../../../services/core-engine/src/ai/services/AiAgentMemoryEntryService";
import { AiAgentMemoryEntryValidator } from "../../../packages/types/src/domains/ai/AiAgentMemoryEntry";

describe("AiAgentMemoryEntry Service & Validation Suite", () => {
  const service = new AiAgentMemoryEntryService();

  test("creates a valid AiAgentMemoryEntry record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample AiAgentMemoryEntry",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = AiAgentMemoryEntryValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
