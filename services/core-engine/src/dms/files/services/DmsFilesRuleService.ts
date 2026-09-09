import { DmsFilesRuleModel, DmsFilesRuleValidator } from "@nexora/types/domains/dms/files/DmsFilesRule";

export class DmsFilesRuleService {
  private repository = new Map<string, DmsFilesRuleModel>();

  public create(data: Omit<DmsFilesRuleModel, "id" | "version" | "createdAt" | "updatedAt">): DmsFilesRuleModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsFilesRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsFilesRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsFilesRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsFilesRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsFilesRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsFilesRuleModel>): DmsFilesRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsFilesRuleModel = {
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
