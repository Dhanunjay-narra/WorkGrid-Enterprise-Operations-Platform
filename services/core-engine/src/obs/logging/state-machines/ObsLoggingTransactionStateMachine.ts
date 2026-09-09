export type ObsLoggingTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsLoggingTransactionStateMachine {
  private allowedTransitions: Record<ObsLoggingTransactionState, ObsLoggingTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsLoggingTransactionState, to: ObsLoggingTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsLoggingTransactionState, to: ObsLoggingTransactionState): ObsLoggingTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsLoggingTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
