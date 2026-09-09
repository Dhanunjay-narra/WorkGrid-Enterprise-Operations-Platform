import { CommChannelsRuleModel, CommChannelsRuleValidator } from "@nexora/types/domains/comm/channels/CommChannelsRule";

export class CommChannelsRuleService {
  private repository = new Map<string, CommChannelsRuleModel>();

  public create(data: Omit<CommChannelsRuleModel, "id" | "version" | "createdAt" | "updatedAt">): CommChannelsRuleModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommChannelsRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommChannelsRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommChannelsRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommChannelsRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommChannelsRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommChannelsRuleModel>): CommChannelsRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommChannelsRuleModel = {
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
