import { DmsFoldersEventModel, DmsFoldersEventValidator } from "@nexora/types/domains/dms/folders/DmsFoldersEvent";

export class DmsFoldersEventService {
  private repository = new Map<string, DmsFoldersEventModel>();

  public create(data: Omit<DmsFoldersEventModel, "id" | "version" | "createdAt" | "updatedAt">): DmsFoldersEventModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsFoldersEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsFoldersEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsFoldersEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsFoldersEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsFoldersEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsFoldersEventModel>): DmsFoldersEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsFoldersEventModel = {
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
