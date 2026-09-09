import { AiGatewaySnapshotModel, AiGatewaySnapshotValidator } from "@nexora/types/domains/ai/gateway/AiGatewaySnapshot";

export class AiGatewaySnapshotService {
  private repository = new Map<string, AiGatewaySnapshotModel>();

  public create(data: Omit<AiGatewaySnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): AiGatewaySnapshotModel {
    const id = "ai_g_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiGatewaySnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiGatewaySnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiGatewaySnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiGatewaySnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiGatewaySnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiGatewaySnapshotModel>): AiGatewaySnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiGatewaySnapshotModel = {
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
