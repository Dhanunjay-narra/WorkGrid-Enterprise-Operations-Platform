import { AiGatewayAssignmentModel, AiGatewayAssignmentValidator } from "@nexora/types/domains/ai/gateway/AiGatewayAssignment";

export class AiGatewayAssignmentService {
  private repository = new Map<string, AiGatewayAssignmentModel>();

  public create(data: Omit<AiGatewayAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): AiGatewayAssignmentModel {
    const id = "ai_g_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiGatewayAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiGatewayAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiGatewayAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiGatewayAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiGatewayAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiGatewayAssignmentModel>): AiGatewayAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiGatewayAssignmentModel = {
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
