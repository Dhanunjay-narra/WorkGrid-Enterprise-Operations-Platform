export type ObsProfilingBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsProfilingBatchStateMachine {
  private allowedTransitions: Record<ObsProfilingBatchState, ObsProfilingBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsProfilingBatchState, to: ObsProfilingBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsProfilingBatchState, to: ObsProfilingBatchState): ObsProfilingBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsProfilingBatch: " + from + " -> " + to);
    }
    return to;
  }
}
