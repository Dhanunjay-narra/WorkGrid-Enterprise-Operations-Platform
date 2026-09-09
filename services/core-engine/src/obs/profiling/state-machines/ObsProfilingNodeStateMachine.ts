export type ObsProfilingNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsProfilingNodeStateMachine {
  private allowedTransitions: Record<ObsProfilingNodeState, ObsProfilingNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsProfilingNodeState, to: ObsProfilingNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsProfilingNodeState, to: ObsProfilingNodeState): ObsProfilingNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsProfilingNode: " + from + " -> " + to);
    }
    return to;
  }
}
