export type TenancyTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class TenancyTransactionStateMachine {
  private allowedTransitions: Record<TenancyTransactionState, TenancyTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: TenancyTransactionState, to: TenancyTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: TenancyTransactionState, to: TenancyTransactionState): TenancyTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for TenancyTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
