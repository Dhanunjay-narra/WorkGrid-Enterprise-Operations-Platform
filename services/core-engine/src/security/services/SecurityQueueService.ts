import { SecurityQueueModel, SecurityQueueValidator } from "@nexora/types/domains/security/SecurityQueue";

export class SecurityQueueService {
  private repository = new Map<string, SecurityQueueModel>();

  public create(data: Omit<SecurityQueueModel, "id" | "version" | "createdAt" | "updatedAt">): SecurityQueueModel {
    const id = "secu_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SecurityQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SecurityQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SecurityQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SecurityQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SecurityQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SecurityQueueModel>): SecurityQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SecurityQueueModel = {
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
