export type ObsTracingSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsTracingSessionStateMachine {
  private allowedTransitions: Record<ObsTracingSessionState, ObsTracingSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsTracingSessionState, to: ObsTracingSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsTracingSessionState, to: ObsTracingSessionState): ObsTracingSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsTracingSession: " + from + " -> " + to);
    }
    return to;
  }
}
