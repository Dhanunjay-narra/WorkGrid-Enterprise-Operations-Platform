export type BiKpisTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiKpisTransactionStateMachine {
  private allowedTransitions: Record<BiKpisTransactionState, BiKpisTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiKpisTransactionState, to: BiKpisTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiKpisTransactionState, to: BiKpisTransactionState): BiKpisTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiKpisTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
