import { DmsFoldersItemModel, DmsFoldersItemValidator } from "@nexora/types/domains/dms/folders/DmsFoldersItem";

export class DmsFoldersItemService {
  private repository = new Map<string, DmsFoldersItemModel>();

  public create(data: Omit<DmsFoldersItemModel, "id" | "version" | "createdAt" | "updatedAt">): DmsFoldersItemModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsFoldersItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsFoldersItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsFoldersItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsFoldersItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsFoldersItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsFoldersItemModel>): DmsFoldersItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsFoldersItemModel = {
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
