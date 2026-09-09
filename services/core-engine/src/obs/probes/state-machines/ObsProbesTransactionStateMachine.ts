export type ObsProbesTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsProbesTransactionStateMachine {
  private allowedTransitions: Record<ObsProbesTransactionState, ObsProbesTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsProbesTransactionState, to: ObsProbesTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsProbesTransactionState, to: ObsProbesTransactionState): ObsProbesTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsProbesTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
