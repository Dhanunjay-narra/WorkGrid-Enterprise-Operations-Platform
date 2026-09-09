export type BiQueriesAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiQueriesAuditLogStateMachine {
  private allowedTransitions: Record<BiQueriesAuditLogState, BiQueriesAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiQueriesAuditLogState, to: BiQueriesAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiQueriesAuditLogState, to: BiQueriesAuditLogState): BiQueriesAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiQueriesAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
