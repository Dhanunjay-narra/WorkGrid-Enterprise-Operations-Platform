export type AbacAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AbacAuditLogStateMachine {
  private allowedTransitions: Record<AbacAuditLogState, AbacAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AbacAuditLogState, to: AbacAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AbacAuditLogState, to: AbacAuditLogState): AbacAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AbacAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
