export type ObsLoggingConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsLoggingConfigStateMachine {
  private allowedTransitions: Record<ObsLoggingConfigState, ObsLoggingConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsLoggingConfigState, to: ObsLoggingConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsLoggingConfigState, to: ObsLoggingConfigState): ObsLoggingConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsLoggingConfig: " + from + " -> " + to);
    }
    return to;
  }
}
