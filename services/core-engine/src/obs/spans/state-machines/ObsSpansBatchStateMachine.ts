export type ObsSpansBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsSpansBatchStateMachine {
  private allowedTransitions: Record<ObsSpansBatchState, ObsSpansBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsSpansBatchState, to: ObsSpansBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsSpansBatchState, to: ObsSpansBatchState): ObsSpansBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsSpansBatch: " + from + " -> " + to);
    }
    return to;
  }
}
