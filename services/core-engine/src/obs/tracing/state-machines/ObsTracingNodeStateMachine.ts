export type ObsTracingNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsTracingNodeStateMachine {
  private allowedTransitions: Record<ObsTracingNodeState, ObsTracingNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsTracingNodeState, to: ObsTracingNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsTracingNodeState, to: ObsTracingNodeState): ObsTracingNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsTracingNode: " + from + " -> " + to);
    }
    return to;
  }
}
