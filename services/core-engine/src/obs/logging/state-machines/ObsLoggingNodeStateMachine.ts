export type ObsLoggingNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsLoggingNodeStateMachine {
  private allowedTransitions: Record<ObsLoggingNodeState, ObsLoggingNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsLoggingNodeState, to: ObsLoggingNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsLoggingNodeState, to: ObsLoggingNodeState): ObsLoggingNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsLoggingNode: " + from + " -> " + to);
    }
    return to;
  }
}
