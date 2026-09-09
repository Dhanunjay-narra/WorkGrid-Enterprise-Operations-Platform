export type SupportSlaTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportSlaTransactionStateMachine {
  private allowedTransitions: Record<SupportSlaTransactionState, SupportSlaTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportSlaTransactionState, to: SupportSlaTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportSlaTransactionState, to: SupportSlaTransactionState): SupportSlaTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportSlaTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
