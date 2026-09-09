export type SupportCsatTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportCsatTransactionStateMachine {
  private allowedTransitions: Record<SupportCsatTransactionState, SupportCsatTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportCsatTransactionState, to: SupportCsatTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportCsatTransactionState, to: SupportCsatTransactionState): SupportCsatTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportCsatTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
