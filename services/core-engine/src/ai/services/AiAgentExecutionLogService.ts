import { AiAgentExecutionLogData, AiAgentExecutionLogValidator } from "../../../../packages/types/src/domains/ai/AiAgentExecutionLog";

export class AiAgentExecutionLogService {
  private repository = new Map<string, AiAgentExecutionLogData>();

  public create(data: Omit<AiAgentExecutionLogData, "id" | "createdAt" | "updatedAt">): AiAgentExecutionLogData {
    const id = "ai_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: AiAgentExecutionLogData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiAgentExecutionLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiAgentExecutionLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiAgentExecutionLogData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): AiAgentExecutionLogData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<AiAgentExecutionLogData>): AiAgentExecutionLogData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiAgentExecutionLogData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
