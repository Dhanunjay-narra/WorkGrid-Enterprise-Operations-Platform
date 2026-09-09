export type BiQueriesBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiQueriesBatchStateMachine {
  private allowedTransitions: Record<BiQueriesBatchState, BiQueriesBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiQueriesBatchState, to: BiQueriesBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiQueriesBatchState, to: BiQueriesBatchState): BiQueriesBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiQueriesBatch: " + from + " -> " + to);
    }
    return to;
  }
}
