export type ObsProfilingThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsProfilingThresholdStateMachine {
  private allowedTransitions: Record<ObsProfilingThresholdState, ObsProfilingThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsProfilingThresholdState, to: ObsProfilingThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsProfilingThresholdState, to: ObsProfilingThresholdState): ObsProfilingThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsProfilingThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
