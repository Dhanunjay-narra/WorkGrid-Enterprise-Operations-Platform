export type BiAnomaliesBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiAnomaliesBatchStateMachine {
  private allowedTransitions: Record<BiAnomaliesBatchState, BiAnomaliesBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiAnomaliesBatchState, to: BiAnomaliesBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiAnomaliesBatchState, to: BiAnomaliesBatchState): BiAnomaliesBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiAnomaliesBatch: " + from + " -> " + to);
    }
    return to;
  }
}
