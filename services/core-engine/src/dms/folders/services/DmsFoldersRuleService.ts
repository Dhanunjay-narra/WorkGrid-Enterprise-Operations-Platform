import { DmsFoldersRuleModel, DmsFoldersRuleValidator } from "@nexora/types/domains/dms/folders/DmsFoldersRule";

export class DmsFoldersRuleService {
  private repository = new Map<string, DmsFoldersRuleModel>();

  public create(data: Omit<DmsFoldersRuleModel, "id" | "version" | "createdAt" | "updatedAt">): DmsFoldersRuleModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsFoldersRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsFoldersRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsFoldersRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsFoldersRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsFoldersRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsFoldersRuleModel>): DmsFoldersRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsFoldersRuleModel = {
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
