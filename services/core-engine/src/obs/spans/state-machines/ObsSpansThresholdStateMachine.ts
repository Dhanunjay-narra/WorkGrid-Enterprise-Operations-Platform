export type ObsSpansThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsSpansThresholdStateMachine {
  private allowedTransitions: Record<ObsSpansThresholdState, ObsSpansThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsSpansThresholdState, to: ObsSpansThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsSpansThresholdState, to: ObsSpansThresholdState): ObsSpansThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsSpansThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
