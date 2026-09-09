export type ObsProbesNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsProbesNodeStateMachine {
  private allowedTransitions: Record<ObsProbesNodeState, ObsProbesNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsProbesNodeState, to: ObsProbesNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsProbesNodeState, to: ObsProbesNodeState): ObsProbesNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsProbesNode: " + from + " -> " + to);
    }
    return to;
  }
}
