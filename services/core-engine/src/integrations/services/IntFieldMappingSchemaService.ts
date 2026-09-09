import { IntFieldMappingSchemaData, IntFieldMappingSchemaValidator } from "../../../../packages/types/src/domains/integrations/IntFieldMappingSchema";

export class IntFieldMappingSchemaService {
  private repository = new Map<string, IntFieldMappingSchemaData>();

  public create(data: Omit<IntFieldMappingSchemaData, "id" | "createdAt" | "updatedAt">): IntFieldMappingSchemaData {
    const id = "int_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: IntFieldMappingSchemaData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntFieldMappingSchemaValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntFieldMappingSchema: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntFieldMappingSchemaData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): IntFieldMappingSchemaData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<IntFieldMappingSchemaData>): IntFieldMappingSchemaData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntFieldMappingSchemaData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
