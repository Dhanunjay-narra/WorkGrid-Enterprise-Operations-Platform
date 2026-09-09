import { DmsVersionsMappingModel, DmsVersionsMappingValidator } from "@nexora/types/domains/dms/versions/DmsVersionsMapping";

export class DmsVersionsMappingService {
  private repository = new Map<string, DmsVersionsMappingModel>();

  public create(data: Omit<DmsVersionsMappingModel, "id" | "version" | "createdAt" | "updatedAt">): DmsVersionsMappingModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsVersionsMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsVersionsMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsVersionsMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsVersionsMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsVersionsMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsVersionsMappingModel>): DmsVersionsMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsVersionsMappingModel = {
      ...existing,
      ...updates,
      version: existing.version + 1,
      updatedAt: new Date().toISOString()
    };
    this.repository.set(id, updated);
    return updated;
  }

  public remove(id: string): boolean {
    return this.repository.delete(id);
  }
}
