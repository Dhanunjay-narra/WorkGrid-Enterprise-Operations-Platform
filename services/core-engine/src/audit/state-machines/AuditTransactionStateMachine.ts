export type AuditTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AuditTransactionStateMachine {
  private allowedTransitions: Record<AuditTransactionState, AuditTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AuditTransactionState, to: AuditTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AuditTransactionState, to: AuditTransactionState): AuditTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AuditTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
