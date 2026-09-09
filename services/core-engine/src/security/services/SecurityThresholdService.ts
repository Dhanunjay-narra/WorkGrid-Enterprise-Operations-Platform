import { SecurityThresholdModel, SecurityThresholdValidator } from "@nexora/types/domains/security/SecurityThreshold";

export class SecurityThresholdService {
  private repository = new Map<string, SecurityThresholdModel>();

  public create(data: Omit<SecurityThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): SecurityThresholdModel {
    const id = "secu_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SecurityThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SecurityThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SecurityThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SecurityThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SecurityThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SecurityThresholdModel>): SecurityThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SecurityThresholdModel = {
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
