export type ObsProfilingTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsProfilingTransactionStateMachine {
  private allowedTransitions: Record<ObsProfilingTransactionState, ObsProfilingTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsProfilingTransactionState, to: ObsProfilingTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsProfilingTransactionState, to: ObsProfilingTransactionState): ObsProfilingTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsProfilingTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
