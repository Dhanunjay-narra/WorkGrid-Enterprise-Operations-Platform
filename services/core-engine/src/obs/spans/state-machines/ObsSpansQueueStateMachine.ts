export type ObsSpansQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsSpansQueueStateMachine {
  private allowedTransitions: Record<ObsSpansQueueState, ObsSpansQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsSpansQueueState, to: ObsSpansQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsSpansQueueState, to: ObsSpansQueueState): ObsSpansQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsSpansQueue: " + from + " -> " + to);
    }
    return to;
  }
}
