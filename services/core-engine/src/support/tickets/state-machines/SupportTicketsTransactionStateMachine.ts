export type SupportTicketsTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportTicketsTransactionStateMachine {
  private allowedTransitions: Record<SupportTicketsTransactionState, SupportTicketsTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportTicketsTransactionState, to: SupportTicketsTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportTicketsTransactionState, to: SupportTicketsTransactionState): SupportTicketsTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportTicketsTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
