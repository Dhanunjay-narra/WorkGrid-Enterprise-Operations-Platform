export type DmsRetentionTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsRetentionTransactionStateMachine {
  private allowedTransitions: Record<DmsRetentionTransactionState, DmsRetentionTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsRetentionTransactionState, to: DmsRetentionTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsRetentionTransactionState, to: DmsRetentionTransactionState): DmsRetentionTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsRetentionTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
