export type BiWidgetsTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiWidgetsTransactionStateMachine {
  private allowedTransitions: Record<BiWidgetsTransactionState, BiWidgetsTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiWidgetsTransactionState, to: BiWidgetsTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiWidgetsTransactionState, to: BiWidgetsTransactionState): BiWidgetsTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiWidgetsTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
