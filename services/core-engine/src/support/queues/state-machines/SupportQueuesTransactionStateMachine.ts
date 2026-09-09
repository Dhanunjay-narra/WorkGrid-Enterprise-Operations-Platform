export type SupportQueuesTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportQueuesTransactionStateMachine {
  private allowedTransitions: Record<SupportQueuesTransactionState, SupportQueuesTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportQueuesTransactionState, to: SupportQueuesTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportQueuesTransactionState, to: SupportQueuesTransactionState): SupportQueuesTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportQueuesTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
