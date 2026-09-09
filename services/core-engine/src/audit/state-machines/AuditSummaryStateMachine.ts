export type AuditSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AuditSummaryStateMachine {
  private allowedTransitions: Record<AuditSummaryState, AuditSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AuditSummaryState, to: AuditSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AuditSummaryState, to: AuditSummaryState): AuditSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AuditSummary: " + from + " -> " + to);
    }
    return to;
  }
}
