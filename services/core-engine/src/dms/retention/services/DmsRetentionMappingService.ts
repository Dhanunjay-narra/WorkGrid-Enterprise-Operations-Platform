import { DmsRetentionMappingModel, DmsRetentionMappingValidator } from "@nexora/types/domains/dms/retention/DmsRetentionMapping";

export class DmsRetentionMappingService {
  private repository = new Map<string, DmsRetentionMappingModel>();

  public create(data: Omit<DmsRetentionMappingModel, "id" | "version" | "createdAt" | "updatedAt">): DmsRetentionMappingModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsRetentionMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsRetentionMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsRetentionMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsRetentionMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsRetentionMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsRetentionMappingModel>): DmsRetentionMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsRetentionMappingModel = {
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
