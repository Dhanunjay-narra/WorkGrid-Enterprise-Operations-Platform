export type BiCohortsBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiCohortsBatchStateMachine {
  private allowedTransitions: Record<BiCohortsBatchState, BiCohortsBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiCohortsBatchState, to: BiCohortsBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiCohortsBatchState, to: BiCohortsBatchState): BiCohortsBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiCohortsBatch: " + from + " -> " + to);
    }
    return to;
  }
}
