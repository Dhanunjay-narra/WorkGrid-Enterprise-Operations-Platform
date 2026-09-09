export type ObsLoggingSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsLoggingSessionStateMachine {
  private allowedTransitions: Record<ObsLoggingSessionState, ObsLoggingSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsLoggingSessionState, to: ObsLoggingSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsLoggingSessionState, to: ObsLoggingSessionState): ObsLoggingSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsLoggingSession: " + from + " -> " + to);
    }
    return to;
  }
}
