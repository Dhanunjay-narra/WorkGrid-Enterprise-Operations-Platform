export type ObsProbesQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsProbesQueueStateMachine {
  private allowedTransitions: Record<ObsProbesQueueState, ObsProbesQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsProbesQueueState, to: ObsProbesQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsProbesQueueState, to: ObsProbesQueueState): ObsProbesQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsProbesQueue: " + from + " -> " + to);
    }
    return to;
  }
}
