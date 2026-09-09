export type ObsTracingTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsTracingTransactionStateMachine {
  private allowedTransitions: Record<ObsTracingTransactionState, ObsTracingTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsTracingTransactionState, to: ObsTracingTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsTracingTransactionState, to: ObsTracingTransactionState): ObsTracingTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsTracingTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
