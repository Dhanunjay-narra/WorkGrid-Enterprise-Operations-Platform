import { AiModelFallbackLogData, AiModelFallbackLogValidator } from "../../../../packages/types/src/domains/ai/AiModelFallbackLog";

export class AiModelFallbackLogService {
  private repository = new Map<string, AiModelFallbackLogData>();

  public create(data: Omit<AiModelFallbackLogData, "id" | "createdAt" | "updatedAt">): AiModelFallbackLogData {
    const id = "ai_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: AiModelFallbackLogData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiModelFallbackLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiModelFallbackLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiModelFallbackLogData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): AiModelFallbackLogData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<AiModelFallbackLogData>): AiModelFallbackLogData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiModelFallbackLogData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
