import { DmsFoldersMappingModel, DmsFoldersMappingValidator } from "@nexora/types/domains/dms/folders/DmsFoldersMapping";

export class DmsFoldersMappingService {
  private repository = new Map<string, DmsFoldersMappingModel>();

  public create(data: Omit<DmsFoldersMappingModel, "id" | "version" | "createdAt" | "updatedAt">): DmsFoldersMappingModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsFoldersMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsFoldersMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsFoldersMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsFoldersMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsFoldersMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsFoldersMappingModel>): DmsFoldersMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsFoldersMappingModel = {
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
