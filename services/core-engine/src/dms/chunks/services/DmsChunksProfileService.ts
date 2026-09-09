import { DmsChunksProfileModel, DmsChunksProfileValidator } from "@nexora/types/domains/dms/chunks/DmsChunksProfile";

export class DmsChunksProfileService {
  private repository = new Map<string, DmsChunksProfileModel>();

  public create(data: Omit<DmsChunksProfileModel, "id" | "version" | "createdAt" | "updatedAt">): DmsChunksProfileModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsChunksProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsChunksProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsChunksProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsChunksProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsChunksProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsChunksProfileModel>): DmsChunksProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsChunksProfileModel = {
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
