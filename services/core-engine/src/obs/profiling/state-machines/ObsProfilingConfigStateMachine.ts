export type ObsProfilingConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsProfilingConfigStateMachine {
  private allowedTransitions: Record<ObsProfilingConfigState, ObsProfilingConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsProfilingConfigState, to: ObsProfilingConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsProfilingConfigState, to: ObsProfilingConfigState): ObsProfilingConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsProfilingConfig: " + from + " -> " + to);
    }
    return to;
  }
}
