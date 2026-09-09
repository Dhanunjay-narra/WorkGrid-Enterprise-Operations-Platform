export type ObsLoggingThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsLoggingThresholdStateMachine {
  private allowedTransitions: Record<ObsLoggingThresholdState, ObsLoggingThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsLoggingThresholdState, to: ObsLoggingThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsLoggingThresholdState, to: ObsLoggingThresholdState): ObsLoggingThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsLoggingThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
