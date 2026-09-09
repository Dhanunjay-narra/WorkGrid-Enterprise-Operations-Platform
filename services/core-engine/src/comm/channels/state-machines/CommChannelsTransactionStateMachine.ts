export type CommChannelsTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommChannelsTransactionStateMachine {
  private allowedTransitions: Record<CommChannelsTransactionState, CommChannelsTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommChannelsTransactionState, to: CommChannelsTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommChannelsTransactionState, to: CommChannelsTransactionState): CommChannelsTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommChannelsTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
