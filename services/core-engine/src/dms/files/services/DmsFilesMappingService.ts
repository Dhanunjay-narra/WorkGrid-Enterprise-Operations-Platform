import { DmsFilesMappingModel, DmsFilesMappingValidator } from "@nexora/types/domains/dms/files/DmsFilesMapping";

export class DmsFilesMappingService {
  private repository = new Map<string, DmsFilesMappingModel>();

  public create(data: Omit<DmsFilesMappingModel, "id" | "version" | "createdAt" | "updatedAt">): DmsFilesMappingModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsFilesMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsFilesMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsFilesMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsFilesMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsFilesMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsFilesMappingModel>): DmsFilesMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsFilesMappingModel = {
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
