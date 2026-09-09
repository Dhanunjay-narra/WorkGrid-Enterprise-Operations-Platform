export type ObsProbesItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsProbesItemStateMachine {
  private allowedTransitions: Record<ObsProbesItemState, ObsProbesItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsProbesItemState, to: ObsProbesItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsProbesItemState, to: ObsProbesItemState): ObsProbesItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsProbesItem: " + from + " -> " + to);
    }
    return to;
  }
}
