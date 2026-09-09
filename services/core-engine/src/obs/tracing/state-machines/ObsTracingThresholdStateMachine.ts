export type ObsTracingThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsTracingThresholdStateMachine {
  private allowedTransitions: Record<ObsTracingThresholdState, ObsTracingThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsTracingThresholdState, to: ObsTracingThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsTracingThresholdState, to: ObsTracingThresholdState): ObsTracingThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsTracingThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
