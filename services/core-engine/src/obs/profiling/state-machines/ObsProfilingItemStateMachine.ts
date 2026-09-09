export type ObsProfilingItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsProfilingItemStateMachine {
  private allowedTransitions: Record<ObsProfilingItemState, ObsProfilingItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsProfilingItemState, to: ObsProfilingItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsProfilingItemState, to: ObsProfilingItemState): ObsProfilingItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsProfilingItem: " + from + " -> " + to);
    }
    return to;
  }
}
