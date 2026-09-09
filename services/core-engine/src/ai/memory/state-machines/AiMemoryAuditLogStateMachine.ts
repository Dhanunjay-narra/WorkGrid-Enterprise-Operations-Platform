export type AiMemoryAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiMemoryAuditLogStateMachine {
  private allowedTransitions: Record<AiMemoryAuditLogState, AiMemoryAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiMemoryAuditLogState, to: AiMemoryAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiMemoryAuditLogState, to: AiMemoryAuditLogState): AiMemoryAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiMemoryAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
