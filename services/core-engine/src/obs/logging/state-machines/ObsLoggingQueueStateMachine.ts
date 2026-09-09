export type ObsLoggingQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsLoggingQueueStateMachine {
  private allowedTransitions: Record<ObsLoggingQueueState, ObsLoggingQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsLoggingQueueState, to: ObsLoggingQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsLoggingQueueState, to: ObsLoggingQueueState): ObsLoggingQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsLoggingQueue: " + from + " -> " + to);
    }
    return to;
  }
}
