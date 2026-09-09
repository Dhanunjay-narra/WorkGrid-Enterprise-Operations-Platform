import { DmsFoldersBatchModel, DmsFoldersBatchValidator } from "@nexora/types/domains/dms/folders/DmsFoldersBatch";

export class DmsFoldersBatchService {
  private repository = new Map<string, DmsFoldersBatchModel>();

  public create(data: Omit<DmsFoldersBatchModel, "id" | "version" | "createdAt" | "updatedAt">): DmsFoldersBatchModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsFoldersBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsFoldersBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsFoldersBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsFoldersBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsFoldersBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsFoldersBatchModel>): DmsFoldersBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsFoldersBatchModel = {
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
