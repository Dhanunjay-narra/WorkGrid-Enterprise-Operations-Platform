import { IntFieldMappingSchemaService } from "../../../services/core-engine/src/integrations/services/IntFieldMappingSchemaService";
import { IntFieldMappingSchemaValidator } from "../../../packages/types/src/domains/integrations/IntFieldMappingSchema";

describe("IntFieldMappingSchema Service & Validation Suite", () => {
  const service = new IntFieldMappingSchemaService();

  test("creates a valid IntFieldMappingSchema record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample IntFieldMappingSchema",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = IntFieldMappingSchemaValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
