export type ObsProfilingSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsProfilingSessionStateMachine {
  private allowedTransitions: Record<ObsProfilingSessionState, ObsProfilingSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsProfilingSessionState, to: ObsProfilingSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsProfilingSessionState, to: ObsProfilingSessionState): ObsProfilingSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsProfilingSession: " + from + " -> " + to);
    }
    return to;
  }
}
