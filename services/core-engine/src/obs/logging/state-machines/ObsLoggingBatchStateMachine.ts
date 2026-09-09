export type ObsLoggingBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsLoggingBatchStateMachine {
  private allowedTransitions: Record<ObsLoggingBatchState, ObsLoggingBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsLoggingBatchState, to: ObsLoggingBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsLoggingBatchState, to: ObsLoggingBatchState): ObsLoggingBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsLoggingBatch: " + from + " -> " + to);
    }
    return to;
  }
}
