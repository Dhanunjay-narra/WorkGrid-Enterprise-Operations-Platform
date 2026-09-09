export type ObsProfilingQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsProfilingQueueStateMachine {
  private allowedTransitions: Record<ObsProfilingQueueState, ObsProfilingQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsProfilingQueueState, to: ObsProfilingQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsProfilingQueueState, to: ObsProfilingQueueState): ObsProfilingQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsProfilingQueue: " + from + " -> " + to);
    }
    return to;
  }
}
