export type ObsTracingBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsTracingBatchStateMachine {
  private allowedTransitions: Record<ObsTracingBatchState, ObsTracingBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsTracingBatchState, to: ObsTracingBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsTracingBatchState, to: ObsTracingBatchState): ObsTracingBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsTracingBatch: " + from + " -> " + to);
    }
    return to;
  }
}
