export type ObsProfilingProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsProfilingProfileStateMachine {
  private allowedTransitions: Record<ObsProfilingProfileState, ObsProfilingProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsProfilingProfileState, to: ObsProfilingProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsProfilingProfileState, to: ObsProfilingProfileState): ObsProfilingProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsProfilingProfile: " + from + " -> " + to);
    }
    return to;
  }
}
