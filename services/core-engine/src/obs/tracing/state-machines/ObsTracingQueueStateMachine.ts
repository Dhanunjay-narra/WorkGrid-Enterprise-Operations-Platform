export type ObsTracingQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsTracingQueueStateMachine {
  private allowedTransitions: Record<ObsTracingQueueState, ObsTracingQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsTracingQueueState, to: ObsTracingQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsTracingQueueState, to: ObsTracingQueueState): ObsTracingQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsTracingQueue: " + from + " -> " + to);
    }
    return to;
  }
}
