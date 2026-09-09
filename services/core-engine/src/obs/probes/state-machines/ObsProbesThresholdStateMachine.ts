export type ObsProbesThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsProbesThresholdStateMachine {
  private allowedTransitions: Record<ObsProbesThresholdState, ObsProbesThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsProbesThresholdState, to: ObsProbesThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsProbesThresholdState, to: ObsProbesThresholdState): ObsProbesThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsProbesThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
