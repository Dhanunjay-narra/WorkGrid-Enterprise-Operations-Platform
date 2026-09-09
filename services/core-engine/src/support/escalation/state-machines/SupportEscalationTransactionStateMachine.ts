export type SupportEscalationTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportEscalationTransactionStateMachine {
  private allowedTransitions: Record<SupportEscalationTransactionState, SupportEscalationTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportEscalationTransactionState, to: SupportEscalationTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportEscalationTransactionState, to: SupportEscalationTransactionState): SupportEscalationTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportEscalationTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
